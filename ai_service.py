import os
import time
import functools
import random
from groq import Groq, RateLimitError, InternalServerError, APIConnectionError, APIStatusError
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
# llama-3.1-8b-instant is the most stable free-tier model with high limits.
# llama-3.3-70b-versatile is the high-quality model reserved for final steps.
PRIMARY_MODEL = "llama-3.1-8b-instant"
ADVANCED_MODEL = "llama-3.3-70b-versatile"

# Context limits
MAX_CONTEXT_CHARS = 300000 # ~75k tokens (Safe for 8B free tier)
CHUNK_SIZE_CHARS = 50000   # ~12k tokens
MAX_HISTORY_MESSAGES = 5    # Limit history for free tier stability

def get_client():
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        return None
    return Groq(api_key=api_key)

def retry_on_error(max_retries=2, initial_delay=3):
    """
    Decorator for retrying AI requests with exponential backoff.
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
                    
                    print(f"DEBUG: Groq {type(e).__name__} (Attempt {i+1}). Waiting {wait_time}s...")
                    time.sleep(wait_time + (random.random() * 1))
                    delay *= 2
                except Exception as e:
                    raise e
            raise last_err
        return wrapper
    return decorator

def chunk_text(text, size=CHUNK_SIZE_CHARS):
    return [text[i:i + size] for i in range(0, len(text), size)]

@retry_on_error(max_retries=1)
def call_groq(messages, model=PRIMARY_MODEL):
    """Base helper to call Groq."""
    client = get_client()
    if not client:
        return "ERROR: GROQ_API_KEY not configured."
    
    try:
        chat_completion = client.chat.completions.create(
            messages=messages,
            model=model,
        )
        return chat_completion.choices[0].message.content
    except RateLimitError:
        return "ERROR: AI service is currently at capacity. Please wait a moment."
    except Exception as e:
        print(f"DEBUG: Groq error: {str(e)}")
        return f"ERROR: AI Service unavailable ({type(e).__name__})"

def summarize_pdf(text: str):
    """
    Summarize PDF using 8B for chunks and 70B for the final high-quality synthesis.
    """
    if not text:
        return "No text provided for summarization."

    # If text is small, summarize it directly with 8B
    if len(text) <= CHUNK_SIZE_CHARS:
        messages = [
            {"role": "system", "content": "You are a professional PDF summarizer. Provide a concise summary with bullet points based ONLY on the provided text."},
            {"role": "user", "content": f"Summarize this:\n\n{text}"}
        ]
        return call_groq(messages, model=PRIMARY_MODEL)

    # Large file: Map-Reduce
    chunks = chunk_text(text)
    # Limit chunks to prevent long wait times on free tier (approx first 10 chunks ~500k chars)
    chunks = chunks[:10] 
    
    chunk_summaries = []
    for i, chunk in enumerate(chunks):
        messages = [
            {"role": "system", "content": "Summarize this section of a larger document concisely."},
            {"role": "user", "content": chunk}
        ]
        summary = call_groq(messages, model=PRIMARY_MODEL)
        if "ERROR:" in summary: return summary # Fail fast if rate limited
        chunk_summaries.append(summary)

    # Final reduction using the more powerful 70B model
    combined_summary_text = "\n\n".join(chunk_summaries)
    final_messages = [
        {"role": "system", "content": "You are a professional editor. Combine these section summaries into one cohesive, high-level executive summary using bullet points."},
        {"role": "user", "content": f"Finalize this summary:\n\n{combined_summary_text}"}
    ]
    return call_groq(final_messages, model=ADVANCED_MODEL)

def chat_with_pdf(text: str, user_query: str, chat_history: list = None):
    """
    Answer questions using 8B for efficiency.
    """
    if not text: return "No PDF context available."
    if chat_history is None: chat_history = []

    # Truncate context for stability
    context_text = text[:MAX_CONTEXT_CHARS]
    
    messages = [
        {"role": "system", "content": f"Answer based ONLY on the provided context. If not found, say so. Do not hallucinate.\n\nContext:\n{context_text}"}
    ]
    
    # Strict history limit for free tier
    for msg in chat_history[-MAX_HISTORY_MESSAGES:]:
        messages.append(msg)
        
    messages.append({"role": "user", "content": user_query[:1000]}) # Limit query length

    return call_groq(messages, model=PRIMARY_MODEL)


