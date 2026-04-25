import os
from dotenv import load_dotenv
import ai_service

# Load environment
load_dotenv()

def test_summarize():
    print("DEBUG: Starting AI Service Test...")
    print(f"DEBUG: Current GROQ_API_KEY: {os.environ.get('GROQ_API_KEY')[:10]}...")
    
    test_text = "This is a test document. It contains some basic information about PDF tools. AI can help summarize long documents into shorter key points."
    
    try:
        print("DEBUG: Attempting to summarize text...")
        summary = ai_service.summarize_pdf(test_text)
        print("\n--- SUMMARY RESULT ---")
        print(summary)
        print("----------------------\n")
    except Exception as e:
        print(f"FATAL ERROR: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_summarize()
