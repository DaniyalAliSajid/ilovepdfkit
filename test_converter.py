
import os
import io
import fitz
from pdf2docx import Converter

def create_test_pdf():
    doc = fitz.open()
    page = doc.new_page()
    page.insert_text((50, 50), "Hello, this is a test PDF for conversion.")
    pdf_bytes = doc.write()
    doc.close()
    return pdf_bytes

def test_conversion():
    print("Creating test PDF...")
    pdf_bytes = create_test_pdf()
    
    print(f"Starting conversion of {len(pdf_bytes)} bytes...")
    try:
        from converter import pdf_to_word
        docx_stream = pdf_to_word(pdf_bytes)
        print(f"Conversion successful! Output size: {docx_stream.getbuffer().nbytes} bytes")
    except Exception as e:
        print(f"Conversion failed with error: {e}")

if __name__ == "__main__":
    test_conversion()
