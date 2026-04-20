import os
from groq import Groq
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def get_client():
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        return None
    return Groq(api_key=api_key)

def summarize_pdf(text: str):
    """
    Summarize the provided PDF text using Groq (Llama 3.1 70B).
    """
    if not text:
        return "No text provided for summarization."

    client = get_client()
    if not client:
        return "GROQ_API_KEY is not set. Please add it to your .env file."

    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are a highly capable PDF summarizer. Your goal is to provide a concise, accurate, and structured summary of the provided PDF text. Use bullet points for key takeaways."
                },
                {
                    "role": "user",
                    "content": f"Please summarize the following PDF content perfectly:\n\n{text}"
                }
            ],
            model="llama-3.3-70b-versatile", # Best current free-ish model on Groq
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        return f"Error during summarization: {str(e)}"

def chat_with_pdf(text: str, user_query: str, chat_history: list = None):
    """
    Answer questions about the PDF text using context.
    """
    if not text:
        return "No PDF context available."
    
    if chat_history is None:
        chat_history = []

    client = get_client()
    if not client:
        return "GROQ_API_KEY is not set. Please add it to your .env file."

    messages = [
        {
            "role": "system",
            "content": f"You are a helpful assistant that answers questions based ONLY on the provided PDF content. If the answer is not in the text, say you don't know based on the document. \n\nDOCUMENT CONTEXT:\n{text}"
        }
    ]
    
    # Add history
    for msg in chat_history:
        messages.append(msg)
    
    # Add current query
    messages.append({"role": "user", "content": user_query})

    try:
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile",
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        return f"Error during chat: {str(e)}"
