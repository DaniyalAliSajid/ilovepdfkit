  
import io
import os
import tempfile
import fitz  # PyMuPDF
from docx import Document
from pdf2docx import Converter
import platform
import subprocess
import shutil
import time

def pdf_to_word(pdf_bytes):
    """
    Convert PDF bytes to Word document using pdf2docx for better layout preservation
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
    
    temp_pdf = None
    temp_docx = None
    
    try:
        # Create temp files
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as f:
            f.write(pdf_bytes)
            temp_pdf = f.name
            
        temp_docx = temp_pdf.replace(".pdf", ".docx")
        
        # Convert using pdf2docx
        cv = Converter(temp_pdf)
        cv.convert(temp_docx)
        cv.close()
        
        # Read the generated DOCX
        if not os.path.exists(temp_docx):
            raise Exception("Conversion failed: Output file not created")
            
        print("DEBUG: pdf2docx conversion complete. Reading output...")
        with open(temp_docx, "rb") as f:
            docx_bytes = f.read()
            
        print("DEBUG: PDF to Word conversion successful.")
        return io.BytesIO(docx_bytes)
        
    except Exception as e:
        raise Exception(f"PDF to Word conversion failed: {str(e)}")
        
    finally:
        # Cleanup temp files
        if temp_pdf and os.path.exists(temp_pdf):
            try:
                os.remove(temp_pdf)
            except:
                pass
        if temp_docx and os.path.exists(temp_docx):
            try:
                os.remove(temp_docx)
            except:
                pass



def word_to_pdf_linux(docx_bytes):
    """
    Convert Word to PDF using LibreOffice (Headless) on Linux/Docker
    """
    temp_dir = tempfile.mkdtemp()
    temp_docx_path = os.path.join(temp_dir, "input.docx")
    
    try:
        with open(temp_docx_path, "wb") as f:
            f.write(docx_bytes)
            
        # Convert using LibreOffice
        # Command: soffice --headless --convert-to pdf --outdir <dir> <file>
        # Note: 'lowriter' or 'soffice' or 'libreoffice' might be the command depending on distro
        # We try common names
        office_cmd = 'libreoffice'
        if shutil.which('soffice'):
            office_cmd = 'soffice'
        elif shutil.which('lowriter'):
            office_cmd = 'lowriter'

        cmd = [
            office_cmd, 
            '--headless', 
            '--convert-to', 
            'pdf', 
            '--outdir', 
            temp_dir, 
            temp_docx_path
        ]
        
        # Run conversion
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=False)
        
        # Verify output
        # Output file is same name but .pdf
        temp_pdf_path = temp_docx_path.replace(".docx", ".pdf")
        
        if not os.path.exists(temp_pdf_path):
             # Try to capture error
             error_msg = result.stderr.decode() if result.stderr else "Unknown error"
             raise Exception(f"LibreOffice conversion failed. Error: {error_msg}")
            
        with open(temp_pdf_path, "rb") as f:
            pdf_bytes = f.read()
            
        return io.BytesIO(pdf_bytes)
        
    except Exception as e:
        raise Exception(f"Linux Word to PDF conversion failed: {str(e)}")
    finally:
        # Cleanup
        if os.path.exists(temp_dir):
            try:
                shutil.rmtree(temp_dir)
            except:
                pass


def word_to_pdf(docx_bytes):
    """
    Convert Word to PDF using best available method:
    - Windows: Uses Microsoft Word (docx2pdf) for 100% fidelity.
    - Linux (Docker/Render): Uses LibreOffice for high compatibility.
    """
    print(f"DEBUG: Starting Word to PDF conversion... Size: {len(docx_bytes)} bytes")
    system = platform.system().lower()
    
    res = None
    if system == 'windows':
        res = word_to_pdf_windows(docx_bytes)
    else:
        res = word_to_pdf_linux(docx_bytes)
    
    print("DEBUG: Word to PDF conversion complete.")
    return res

def word_to_pdf_windows(docx_bytes):
    """
    Convert Word to PDF using Microsoft Word COM automation (via docx2pdf)
    """
    import pythoncom
    from docx2pdf import convert
    
    # Initialize COM for this thread
    pythoncom.CoInitialize()
    temp_docx_path = None
    temp_pdf_path = None
    
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as temp_docx:
            temp_docx.write(docx_bytes)
            temp_docx_path = temp_docx.name
            
        temp_pdf_path = temp_docx_path.replace(".docx", ".pdf")
        
        try:
            convert(temp_docx_path, temp_pdf_path)
            
            with open(temp_pdf_path, "rb") as f:
                pdf_bytes = f.read()
                
            return io.BytesIO(pdf_bytes)
    
        except Exception as e:
             raise Exception(f"Word to PDF conversion failed: {str(e)}")
             
    finally:
        # Cleanup temp files
        if temp_docx_path and os.path.exists(temp_docx_path):
            try:
                os.remove(temp_docx_path)
            except:
                pass
        if temp_pdf_path and os.path.exists(temp_pdf_path):
            try:
                os.remove(temp_pdf_path)
            except:
                pass
                
        pythoncom.CoUninitialize()

def verify_docx(docx_stream):
    """Verify that the DOCX stream contains a valid Word document"""
    try:
        docx_stream.seek(0)
        # Try to open with python-docx
        Document(docx_stream)
        docx_stream.seek(0)
        return True
    except Exception as e:
        print(f"DOCX Validation Error: {e}")
        return False

def verify_pdf(pdf_stream):
    """Verify that the PDF stream contains a valid PDF document"""
    try:
        pdf_stream.seek(0)
        # Try to open with PyMuPDF
        doc = fitz.open(stream=pdf_stream, filetype="pdf")
        valid = doc.page_count > 0
        doc.close()
        pdf_stream.seek(0)
        return valid
    except Exception as e:
        print(f"PDF Validation Error: {e}")
        return False
