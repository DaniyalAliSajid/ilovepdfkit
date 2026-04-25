import os
import time
import functools
import random
from groq import Groq, RateLimitError, InternalServerError, APIConnectionError, APIStatusError
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
# llama-3.3-70b-versatile is the current flagship. 
# llama-3.1-8b-instant is the most stable fallback with high limits.
PRIMARY_MODEL = "llama-3.3-70b-versatile"
STABLE_MODEL = "llama-3.1-8b-instant"

# Context limits (Llama 3.1/3.3 has 128k, but we use a safer limit for stability and payload size)
MAX_CONTEXT_CHARS = 400000 # ~100k tokens
CHUNK_SIZE_CHARS = 60000   # ~15k tokens - good for detailed chunk summaries

def get_client():
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        return None
    return Groq(api_key=api_key)

def retry_on_error(max_retries=3, initial_delay=2):
    """
    Decorator for retrying AI requests with exponential backoff.
    Handles Rate Limits and temporary Server Errors.
    """
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            delay = initial_delay
            last_err = None
            
            for i in range(max_retries + 1):
                try:
                    return func(*args, **kwargs)
                except (RateLimitError, InternalServerError, APIConnectionError) as e:
                    last_err = e
                    if i == max_retries:
                        break
                    
                    wait_time = delay
                    if hasattr(e, 'response') and e.response.headers.get('retry-after'):
                        try:
                            wait_time = int(e.response.headers.get('retry-after')) + 1
                        except: pass
                    
                    print(f"DEBUG: Groq {type(e).__name__} (Attempt {i+1}/{max_retries}). Waiting {wait_time}s...")
                    time.sleep(wait_time + (random.random() * 1))
                    delay *= 2
                except APIStatusError as e:
                    # If it's a 403 (Forbidden/Blocked) or other status error, don't retry, just bubble up to fallback
                    raise e
                except Exception as e:
                    raise e
            raise last_err
        return wrapper
    return decorator

def chunk_text(text, size=CHUNK_SIZE_CHARS):
    """Split text into chunks of approximately 'size' characters."""
    return [text[i:i + size] for i in range(0, len(text), size)]

@retry_on_error(max_retries=2)
def call_groq(messages, model=PRIMARY_MODEL):
    """Base helper to call Groq with fallback logic built-in."""
    client = get_client()
    if not client:
        return "GROQ_API_KEY is not set in .env"
    
    try:
        chat_completion = client.chat.completions.create(
            messages=messages,
            model=model,
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        print(f"DEBUG: Groq model {model} failed: {str(e)}. Attempting fallback...")
        if model == PRIMARY_MODEL:
            # Recursive call with stable model
            return call_groq(messages, model=STABLE_MODEL)
        raise e

def summarize_pdf(text: str):
    """
    Summarize the provided PDF text with robust multi-model fallback and recursive chunking for large files.
    """
    if not text:
        return "No text provided for summarization."

    # If text is small enough, summarize it directly
    if len(text) <= CHUNK_SIZE_CHARS:
        messages = [
            {"role": "system", "content": "You are a professional PDF summarizer. Provide a concise yet comprehensive summary with bullet points."},
            {"role": "user", "content": f"Summarize this PDF content:\n\n{text}"}
        ]
        return call_groq(messages)

    # Large file: Recursive/Chunked summarization (Map-Reduce)
    print(f"DEBUG: Large PDF detected ({len(text)} chars). Using chunked summarization...")
    chunks = chunk_text(text)
    chunk_summaries = []

    for i, chunk in enumerate(chunks):
        print(f"DEBUG: Summarizing chunk {i+1}/{len(chunks)}...")
        messages = [
            {"role": "system", "content": "You are a professional PDF summarizer. Summarize this specific section of a larger document."},
            {"role": "user", "content": f"Summarize this section:\n\n{chunk}"}
        ]
        summary = call_groq(messages)
        chunk_summaries.append(f"--- Section {i+1} Summary ---\n{summary}")

    # Combine summaries
    combined_summary_text = "\n\n".join(chunk_summaries)
    
    # If the combined summary is still very large, summarize the summaries!
    if len(combined_summary_text) > CHUNK_SIZE_CHARS:
        print("DEBUG: Combined summary is large. Performing final reduction...")
        final_messages = [
            {"role": "system", "content": "You are a professional PDF summarizer. Combine these section summaries into one cohesive, high-level executive summary using bullet points."},
            {"role": "user", "content": f"Combine these summaries:\n\n{combined_summary_text}"}
        ]
        return call_groq(final_messages)
    
    return combined_summary_text

def chat_with_pdf(text: str, user_query: str, chat_history: list = None):
    """
    Answer questions based on PDF context with handling for large context.
    """
    if not text:
        return "No PDF context available."
    
    if chat_history is None:
        chat_history = []

    # If text is too large for the context window, we must truncate or use an extraction strategy.
    # For a simple "Chat with PDF", we'll truncate at our context limit but prioritize 
    # the start and end of the document if it's massive, as they often contain key info.
    context_text = text
    if len(text) > MAX_CONTEXT_CHARS:
        print(f"DEBUG: Context exceeds limit ({len(text)} > {MAX_CONTEXT_CHARS}). Truncating...")
        # Take first 70% and last 30% of the allowed limit? 
        # Or just take the first part. Let's take the first 350k chars.
        context_text = text[:MAX_CONTEXT_CHARS] + "\n\n[Context truncated due to size...]"

    messages = [
        {"role": "system", "content": f"Answer the user's question based ONLY on the provided context from a PDF document. If the information is not in the context, say you don't know.\n\nContext:\n{context_text}"}
    ]
    
    # Add chat history (trimming if history is too long)
    for msg in chat_history[-10:]: # Keep last 10 messages
        messages.append(msg)
        
    messages.append({"role": "user", "content": user_query})

    try:
        return call_groq(messages)
    except Exception as e:
        return f"AI Service Error: {str(e)}"

