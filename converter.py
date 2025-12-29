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
from PIL import Image

def pdf_to_word(pdf_bytes):
    """
    Convert PDF bytes to Word document using pdf2docx for better layout preservation
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
    
    print(f"DEBUG: Starting PDF to Word conversion... Size: {len(pdf_bytes)} bytes")
    temp_pdf = None
    temp_docx = None
    
    try:
        # Create temp files
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as f:
            f.write(pdf_bytes)
            temp_pdf = f.name
            
        temp_docx = temp_pdf.replace(".pdf", ".docx")
        
        # Convert using pdf2docx with multiprocessing for speed
        cpu_count = os.cpu_count() or 4
        cv = Converter(temp_pdf)
        cv.convert(temp_docx, multi_processing=True, cpu_count=cpu_count)
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
        safe_remove(temp_pdf)
        safe_remove(temp_docx)


def word_to_pdf_linux(docx_bytes):
    """
    Convert Word to PDF using LibreOffice (Headless) on Linux/Docker
    """
    temp_dir = tempfile.mkdtemp()
    temp_docx_path = os.path.join(temp_dir, "input.docx")
    
    try:
        with open(temp_docx_path, "wb") as f:
            f.write(docx_bytes)
            
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
        
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=False)
        
        temp_pdf_path = temp_docx_path.replace(".docx", ".pdf")
        
        if not os.path.exists(temp_pdf_path):
             error_msg = result.stderr.decode() if result.stderr else "Unknown error"
             raise Exception(f"LibreOffice conversion failed. Error: {error_msg}")
            
        with open(temp_pdf_path, "rb") as f:
            pdf_bytes = f.read()
            
        return io.BytesIO(pdf_bytes)
        
    except Exception as e:
        raise Exception(f"Linux Word to PDF conversion failed: {str(e)}")
    finally:
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
    temp_docx_path = None
    temp_pdf_path = None
    
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as temp_docx:
            temp_docx.write(docx_bytes)
            temp_docx_path = temp_docx.name
            
        temp_pdf_path = temp_docx_path.replace(".docx", ".pdf")
        
        import pythoncom
        from docx2pdf import convert
        
        pythoncom.CoInitialize()
        import win32com.client
        word = win32com.client.Dispatch("Word.Application")
        word.Visible = False
        
        doc = word.Documents.Open(temp_docx_path)
        # wdExportFormatPDF = 17
        doc.ExportAsFixedFormat(temp_pdf_path, 17)
        doc.Close()
        word.Quit()
        
        with open(temp_pdf_path, "rb") as f:
            pdf_bytes = f.read()
            
        if not os.path.exists(temp_pdf_path):
             raise Exception("Conversion failed: Output PDF not created")
             
        with open(temp_pdf_path, "rb") as f:
            pdf_bytes = f.read()
            
        return io.BytesIO(pdf_bytes)
    
    except Exception as e:
         raise Exception(f"Word to PDF conversion failed: {str(e)}")
         
    finally:
        # Cleanup temp files
        pythoncom.CoUninitialize()
        safe_remove(temp_docx_path)
        safe_remove(temp_pdf_path)

def excel_to_pdf_windows(excel_bytes):
    """
    Convert Excel to PDF using Excel COM automation
    """
    # Get a temporary file path for the input Excel
    with tempfile.NamedTemporaryFile(delete=False, suffix=".xlsx") as temp_input:
        temp_input.write(excel_bytes)
        temp_input_path = temp_input.name

    # Prepare output PDF path
    output_pdf_path = temp_input_path.replace(".xlsx", ".pdf")

    excel = None
    wb = None
    try:
        # Import win32com.client inside the function to avoid issues on non-Windows
        import win32com.client
        
        # Initialize Excel application
        excel = win32com.client.Dispatch("Excel.Application")
        excel.Visible = False
        excel.DisplayAlerts = False
        
        # Open the workbook
        wb = excel.Workbooks.Open(temp_input_path)
        
        # 0 corresponds to xlTypePDF
        wb.ExportAsFixedFormat(0, output_pdf_path)
        
        # Read the generated PDF
        if os.path.exists(output_pdf_path):
            with open(output_pdf_path, "rb") as pdf_file:
                pdf_bytes = pdf_file.read()
            return io.BytesIO(pdf_bytes)
        else:
            raise Exception("PDF output file was not created by Excel.")
            
    except Exception as e:
        print(f"Excel COM conversion error: {e}")
        # If COM fails or not on Windows, raise error
        raise e
        
    finally:
        # Cleanup
        if wb:
            try:
                wb.Close(SaveChanges=False)
            except:
                pass
        if excel:
            try:
                excel.Quit()
            except:
                pass
                
        safe_remove(temp_input_path)
        safe_remove(output_pdf_path)


def add_page_numbers(pdf_bytes, options):
    """
    Add page numbers to PDF with flexible positioning and styling.
    options: {
        'position': 'bottom-center' (default), top-left, top-center, top-right, bottom-left, bottom-right
        'margin': 'recommended' (default), small, big
        'first_number': 1 (default)
        'page_mode': 'single' (default), facing
        'cover_page': False (default)
    }
    """
    doc = fitz.open(stream=pdf_bytes, filetype="pdf")
    
    position = options.get('position', 'bottom-center')
    margin_type = options.get('margin', 'recommended')
    start_number = int(options.get('first_number', 1))
    page_mode = options.get('page_mode', 'single')
    is_cover = options.get('cover_page', False) == 'true' or options.get('cover_page') is True

    # Define margins (in points, 72 pts = 1 inch)
    # A4 is approx 595 x 842 points
    margin_map = {
        'small': 20,
        'recommended': 40,
        'big': 72
    }
    margin = margin_map.get(margin_type, 40)
    
    font_size = 12
    font_color = (0, 0, 0) # Black

    for i, page in enumerate(doc):
        # Skip cover page if requested
        if is_cover and i == 0:
            continue
            
        page_num = start_number + (i - 1 if is_cover else i)
        text = str(page_num)
        
        # Determine position
        rect = page.rect
        width = rect.width
        height = rect.height
        
        # Calculate x, y coordinates
        # Text alignment adjustment (approximate width of text)
        text_width = fitz.get_text_length(text, fontname="helv", fontsize=font_size)
        text_height = font_size
        
        pos_x = 0
        pos_y = 0
        
        # Facing pages logic: Mirror Left/Right if facing
        # If facing: 
        #   Even pages (0, 2, 4...): Left side is outer, Right side is inner? 
        #   Usually: Page 1 (Right), Page 2 (Left), Page 3 (Right)...
        #   But 'i' is 0-indexed.
        current_pos = position
        
        if page_mode == 'facing':
            # Assuming standard book layout:
            # i=0 (Page 1 in PDF viewer) is usually Recto (Right)
            # i=1 (Page 2) is Verso (Left)
            # But let's check widely used logic.
            # Usually users expect flip-flopping.
            # If position is "Bottom-Right", on Left page it should be "Bottom-Left".
            
            # Simple facing logic:
            # If Right side requested (Top-Right, Bottom-Right):
            #   Page i (Even) -> Right
            #   Page i (Odd) -> Left 
            # Wait, usually page 1 is on the right. 
            # If strictly physical pages:
            # Page 1 (Right): margin on right.
            # Page 2 (Left): margin on left.
            
            is_right_page = (i % 2 == 0) # 0, 2, 4... are on the right in 2-up view normally (if cover is separate)
            # Actually simplest is: 
            # If user selected "Right", they want it on the outside corner.
            # Outside corner: Right for Right Page, Left for Left Page.
            
            if "right" in position.lower():
                current_pos = position if is_right_page else position.replace("right", "left")
            elif "left" in position.lower():
                current_pos = position if not is_right_page else position.replace("left", "right")
        
        # Determine coordinates based on current_pos and margin
        if "top" in current_pos:
            pos_y = margin + text_height
        else: # bottom
            pos_y = height - margin
            
        if "left" in current_pos:
            pos_x = margin
        elif "right" in current_pos:
            pos_x = width - margin - text_width
        else: # center
            pos_x = (width - text_width) / 2
            
        # Draw text
        page.insert_text((pos_x, pos_y), text, fontsize=font_size, fontname="helv", color=font_color)

    output_stream = io.BytesIO()
    doc.save(output_stream)
    doc.close()
    output_stream.seek(0)
    return output_stream


def pdf_to_jpg(pdf_bytes):
    """
    Convert PDF pages to JPG images using PyMuPDF (fitz) for speed and accuracy
    Returns a list of BytesIO objects, each containing a JPG image
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
    
    try:
        pdf_document = fitz.open(stream=pdf_bytes, filetype="pdf")
        image_streams = []
        
        for page_num in range(pdf_document.page_count):
            page = pdf_document[page_num]
            # Use higher zoom for better quality (300 DPI)
            zoom = 2.0
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat, colorspace=fitz.csRGB)
            
            img_stream = io.BytesIO(pix.tobytes("jpg"))
            image_streams.append(img_stream)
            
        pdf_document.close()
        return image_streams
        
    except Exception as e:
        raise Exception(f"PDF to JPG conversion failed: {str(e)}")

def jpg_to_pdf(image_bytes_list):
    """
    Convert multiple JPG images into a single PDF using Pillow
    """
    if not image_bytes_list:
        raise ValueError("No images provided")
    
    try:
        images = []
        for img_bytes in image_bytes_list:
            img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
            images.append(img)
            
        if not images:
            raise ValueError("Could not process images")
            
        pdf_stream = io.BytesIO()
        images[0].save(pdf_stream, format="PDF", save_all=True, append_images=images[1:], optimize=True)
        pdf_stream.seek(0)
        return pdf_stream
        
    except Exception as e:
        raise Exception(f"JPG to PDF conversion failed: {str(e)}")

def office_to_pdf_linux(file_bytes, input_suffix):
    """
    Convert Office documents to PDF using LibreOffice on Linux
    """
    temp_dir = tempfile.mkdtemp()
    temp_input_path = os.path.join(temp_dir, f"input{input_suffix}")
    
    try:
        with open(temp_input_path, "wb") as f:
            f.write(file_bytes)
            
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
            temp_input_path
        ]
        
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=False)
        
        temp_pdf_path = temp_input_path.rsplit('.', 1)[0] + ".pdf"
        
        if not os.path.exists(temp_pdf_path):
             error_msg = result.stderr.decode() if result.stderr else "Unknown error"
             raise Exception(f"LibreOffice conversion failed. Error: {error_msg}")
            
        with open(temp_pdf_path, "rb") as f:
            pdf_bytes = f.read()
            
        return io.BytesIO(pdf_bytes)
        
    except Exception as e:
        raise Exception(f"Office to PDF conversion failed: {str(e)}")
    finally:
        if os.path.exists(temp_dir):
            try:
                shutil.rmtree(temp_dir)
            except:
                pass

def ppt_to_pdf(ppt_bytes):
    """
    Convert PowerPoint to PDF
    """
    system = platform.system().lower()
    if system == 'windows':
        return ppt_to_pdf_windows(ppt_bytes)
    else:
        return office_to_pdf_linux(ppt_bytes, ".pptx")

def safe_remove(file_path, retries=5, delay=0.5):
    """Attempt to remove a file with retries to handle COM lazy handle release"""
    if not file_path or not os.path.exists(file_path):
        return
    for i in range(retries):
        try:
            os.remove(file_path)
            return
        except OSError:
            time.sleep(delay)

def ppt_to_pdf_windows(ppt_bytes):
    """
    Convert PowerPoint to PDF using COM automation for 100% accuracy
    """
    import pythoncom
    import win32com.client
    
    pythoncom.CoInitialize()
    temp_ppt_path = None
    temp_pdf_path = None
    powerpoint = None
    deck = None
    
    try:
        suffix = ".pptx"
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as temp_ppt:
            temp_ppt.write(ppt_bytes)
            temp_ppt_path = temp_ppt.name
            
        temp_pdf_path = temp_ppt_path.replace(suffix, ".pdf")
        
        powerpoint = win32com.client.Dispatch("PowerPoint.Application")
        # ppFixedFormatTypePDF = 32
        deck = powerpoint.Presentations.Open(temp_ppt_path, WithWindow=False)
        deck.SaveAs(temp_pdf_path, 32)
        deck.Close()
        powerpoint.Quit()
        
        # Explicitly release COM objects
        del deck
        del powerpoint
        
        with open(temp_pdf_path, "rb") as f:
            pdf_bytes = f.read()
            
        return io.BytesIO(pdf_bytes)
    except Exception as e:
        raise Exception(f"PPT to PDF conversion failed: {str(e)}")
    finally:
        pythoncom.CoUninitialize()
        safe_remove(temp_ppt_path)
        safe_remove(temp_pdf_path)

def excel_to_pdf(excel_bytes):
    """
    Excel conversion is currently disabled.

    """
    raise NotImplementedError("Excel to PDF conversion is no longer supported.")


def com_retry(func, *args, **kwargs):
    """Specific wrapper to handle 'Call was rejected by callee' COM errors"""
    import time
    import pywintypes
    for i in range(20): # Try for 20 seconds
        try:
            return func(*args, **kwargs)
        except pywintypes.com_error as e:
            # -2147418111 is RPC_E_CALL_REJECTED
            hr = getattr(e, 'hresult', None)
            if hr is None and len(e.args) > 0:
                hr = e.args[0]
                
            if hr == -2147418111:
                print(f"DEBUG: COM callee rejected (busy). Retrying {i+1}/20...")
                time.sleep(1)
                continue
            raise
        except Exception as e:
            # Catch standard exceptions if they wrap the COM error
            error_str = str(e)
            if "-2147418111" in error_str or "Call was rejected by callee" in error_str:
                print(f"DEBUG: Caught busy error in string. Retrying {i+1}/20...")
                time.sleep(1)
                continue
            raise

def rotate_pdf(pdf_bytes, angle=90):
    """
    Rotate PDF pages by a specific angle (90, 180, 270)
    This is highly accurate as it only modifies PDF metadata for rotation
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
        
    try:
        pdf_document = fitz.open(stream=pdf_bytes, filetype="pdf")
        
        for page_num in range(pdf_document.page_count):
            page = pdf_document[page_num]
            # Get current rotation and add the new angle
            current_rotation = page.rotation
            new_rotation = (current_rotation + angle) % 360
            page.set_rotation(new_rotation)
            
        # Save to memory with optimizations
        output_stream = io.BytesIO()
        pdf_document.save(output_stream, garbage=3, deflate=True)
        pdf_document.close()
        
        output_stream.seek(0)
        return output_stream
        
    except Exception as e:
        raise Exception(f"Rotate PDF failed: {str(e)}")

def get_pdf_page_images(pdf_bytes):
    """
    Extract thumbnail images of all PDF pages for preview
    Returns list of base64-encoded JPEG images
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
    
    try:
        import base64
        
        pdf_document = fitz.open(stream=pdf_bytes, filetype="pdf")
        page_images = []
        
        for page_num in range(pdf_document.page_count):
            page = pdf_document[page_num]
            
            # Render page at lower resolution for thumbnails (150 DPI)
            zoom = 1.0  # 72 DPI * 1.0 = 72 DPI for thumbnails
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat, colorspace=fitz.csRGB)
            
            # Convert to JPEG bytes
            img_bytes = pix.tobytes("jpeg")
            
            # Base64 encode for JSON transport
            img_base64 = base64.b64encode(img_bytes).decode('utf-8')
            
            page_images.append({
                'page_number': page_num + 1,
                'image': f"data:image/jpeg;base64,{img_base64}",
                'width': pix.width,
                'height': pix.height
            })
        
        pdf_document.close()
        
        print(f"DEBUG: Generated {len(page_images)} page thumbnails")
        return page_images
        
    except Exception as e:
        raise Exception(f"Get PDF page images failed: {str(e)}")

def delete_pdf_pages(pdf_bytes, pages_to_delete):
    """
    Delete specified pages from PDF
    pages_to_delete: list of page numbers (1-indexed) to remove
    Returns modified PDF as BytesIO stream
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
    
    if not pages_to_delete or len(pages_to_delete) == 0:
        raise ValueError("No pages specified for deletion")
    
    try:
        pdf_document = fitz.open(stream=pdf_bytes, filetype="pdf")
        total_pages = pdf_document.page_count
        
        # Convert to 0-indexed and sort in reverse order
        pages_to_delete_0indexed = sorted([p - 1 for p in pages_to_delete], reverse=True)
        
        # Validate page numbers
        for page_num in pages_to_delete_0indexed:
            if page_num < 0 or page_num >= total_pages:
                raise ValueError(f"Invalid page number: {page_num + 1}")
        
        # Check if trying to delete all pages
        if len(pages_to_delete) >= total_pages:
            raise ValueError("Cannot delete all pages from PDF")
        
        # Delete pages in reverse order to maintain correct indices
        for page_num in pages_to_delete_0indexed:
            pdf_document.delete_page(page_num)
        
        # Save to memory
        output_stream = io.BytesIO()
        pdf_document.save(output_stream, garbage=3, deflate=True)
        pdf_document.close()
        
        output_stream.seek(0)
        
        print(f"DEBUG: Deleted {len(pages_to_delete)} pages from PDF")
        return output_stream
        
    except Exception as e:
        raise Exception(f"Delete PDF pages failed: {str(e)}")


def compress_pdf(pdf_bytes, level="recommended"):
    """
    Compress PDF using PyMuPDF (fitz) with image downsampling and garbage collection.
    Levels: 'extreme', 'recommended', 'less'
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
        
    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        
        # Settings based on level
        # Default: Recommended (150 DPI, 75 quality)
        dpi = 150
        quality = 75
        
        if level == "extreme":
            dpi = 72
            quality = 50
        elif level == "less":
            dpi = 200 # Higher DPI
            quality = 90
            
        # Optimize images
        for page in doc:
            for img in page.get_images():
                xref = img[0]
                pix = fitz.Pixmap(doc, xref)
                
                # If image is larger than target DPI relative to page size? 
                # Simplified: check pixel dimensions vs simple threshold or just blindly re-compress large images
                if pix.width > 600 or pix.height > 600:
                    try:
                        # Create new pixmap with reduced size/quality if needed
                        # Ideally we resample. PyMuPDF 'pix.shrink' or similar is option.
                        # We'll use PIL for better control over efficient JPEG re-encoding
                        
                        # Existing logic was empty. Let's do a robust approach:
                        # 1. Extract image bytes
                        if pix.n - pix.alpha < 4:       # GRAY or RGB
                            img_bytes = pix.tobytes("ppm")
                        else:                           # PMAP: CMYK
                            img_bytes = pix.tobytes("pam")
                            
                        # 2. Open in PIL
                        from PIL import Image
                        pil_img = Image.open(io.BytesIO(img_bytes))
                        
                        # 3. Resize if too big
                        # Calculate target max dimension based on DPI (approx)
                        # Let's say max dimension 1000px for extreme, 2000 for recommended
                        max_dim = 2000
                        if level == "extreme": max_dim = 1000
                        elif level == "less": max_dim = 3000
                        
                        if pil_img.width > max_dim or pil_img.height > max_dim:
                            pil_img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                            
                        # 4. Save to buffer as JPEG
                        new_img_stream = io.BytesIO()
                        pil_img.save(new_img_stream, format="JPEG", quality=quality, optimize=True)
                        new_img_stream.seek(0)
                        
                        # 5. Update (replace) image in PDF
                        doc.update_stream(xref, new_img_stream.read())
                        
                    except Exception as img_err:
                        print(f"DEBUG: Image compression failed for xref {xref}: {img_err}")
                        pass

        output_stream = io.BytesIO()
        # garbage=4: dedup images, fonts, etc. deflate=True: compress streams
        doc.save(output_stream, garbage=4, deflate=True, clean=True)
        doc.close()
        
        output_stream.seek(0)
        
        # Check if size actually reduced
        original_size = len(pdf_bytes)
        compressed_size = output_stream.getbuffer().nbytes
        print(f"DEBUG: Compression ({level}). Original: {original_size}, New: {compressed_size}")
        
        if compressed_size >= original_size and level != "less":
             # If fitz didn't help, maybe it's already compressed. 
             # Return original to ensure no quality loss for no gain.
             print("DEBUG: Compressed size larger or equal. Returning original.")
             return io.BytesIO(pdf_bytes)

        return output_stream
        
    except Exception as e:
        raise Exception(f"Compress PDF failed: {str(e)}")

def merge_pdf(pdf_bytes_list):
    """
    Merge multiple PDF files into one using PyMuPDF (fitz) which is more robust
    """
    if not pdf_bytes_list:
        raise ValueError("No PDF files provided")
        
    try:
        merged_doc = fitz.open()
        
        for pdf_bytes in pdf_bytes_list:
             with fitz.open(stream=pdf_bytes, filetype="pdf") as doc:
                 merged_doc.insert_pdf(doc)
            
        output_stream = io.BytesIO()
        merged_doc.save(output_stream, garbage=3, deflate=True)
        merged_doc.close()
            
        output_stream.seek(0)
        return output_stream
        
    except Exception as e:
        raise Exception(f"Merge PDF failed: {str(e)}")

def pdf_to_ppt(pdf_bytes):
    """
    Convert PDF to PowerPoint (PPTX) by converting pages to images and placing on slides.
    """
    try:
        from pptx import Presentation
        from pptx.util import Inches, Pt
        import io
        
        # 1. Convert PDF to List of Images
        images = pdf_to_jpg(pdf_bytes) # Reusing existing function
        
        if not images:
             raise Exception("Failed to extract images from PDF")

        # 2. Create PPTX
        prs = Presentation()
        # Use a blank slide layout (Index 6 is usually blank)
        blank_slide_layout = prs.slide_layouts[6]
        
        for img_stream in images:
            slide = prs.slides.add_slide(blank_slide_layout)
            
            # Use temporary file for image because python-pptx works best with file paths
            # (It can handle blobs but temp file handles types better sometimes)
            img_stream.seek(0)
            
            # Determine image size to maintain aspect ratio or fit slide?
            # We will fit slide.
            slide_width = prs.slide_width
            slide_height = prs.slide_height
            
            slide.shapes.add_picture(img_stream, 0, 0, width=slide_width, height=slide_height)

        output_stream = io.BytesIO()
        prs.save(output_stream)
        output_stream.seek(0)
        return output_stream

    except Exception as e:
        raise Exception(f"PDF to PPT conversion failed: {str(e)}")

def excel_to_pdf_windows(excel_bytes):
    """
    Convert Excel to PDF using Excel COM automation
    """
    import pythoncom
    import win32com.client
    
    pythoncom.CoInitialize()
    temp_xl_path = None
    temp_pdf_path = None
    excel = None
    wb = None
    
    try:
        suffix = ".xlsx"
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as temp_xl:
            temp_xl.write(excel_bytes)
            temp_xl_path = temp_xl.name
        
        # Convert to absolute path
        temp_xl_path = os.path.abspath(temp_xl_path)
        temp_pdf_path = temp_xl_path.replace(suffix, ".pdf")
        
        print(f"DEBUG: Excel temp file: {temp_xl_path}")
        print(f"DEBUG: PDF output file: {temp_pdf_path}")
        
        excel = win32com.client.Dispatch("Excel.Application")
        excel.Visible = False
        excel.DisplayAlerts = False
        
        print(f"DEBUG: Opening Excel file...")
        wb = excel.Workbooks.Open(temp_xl_path)
        
        print(f"DEBUG: Exporting to PDF...")
        # xlTypePDF = 0
        wb.ExportAsFixedFormat(0, temp_pdf_path)
        
        print(f"DEBUG: Closing workbook...")
        wb.Close(SaveChanges=False)
        excel.Quit()
        
        del wb
        del excel
        
        print(f"DEBUG: Reading PDF file...")
        if not os.path.exists(temp_pdf_path):
            raise Exception("PDF file was not created")
            
        with open(temp_pdf_path, "rb") as f:
            pdf_bytes = f.read()
        
        print(f"DEBUG: PDF size: {len(pdf_bytes)} bytes")
        return io.BytesIO(pdf_bytes)
        
    except Exception as e:
        print(f"DEBUG: Excel to PDF error: {str(e)}")
        raise Exception(f"Excel to PDF failed: {str(e)}")
    finally:
        pythoncom.CoUninitialize()
        safe_remove(temp_xl_path)
        safe_remove(temp_pdf_path)




def excel_to_pdf_fallback(excel_bytes):
    """
    Fallback Excel to PDF converter using openpyxl and reportlab
    Used when COM automation is not available
    """
    try:
        from openpyxl import load_workbook
        from reportlab.lib.pagesizes import letter, A4
        from reportlab.lib import colors
        from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak
        from reportlab.lib.styles import getSampleStyleSheet
        from reportlab.lib.units import inch
        
        print("DEBUG: Using fallback Excel to PDF converter...")
        
        # Load Excel workbook
        wb = load_workbook(io.BytesIO(excel_bytes), data_only=True)
        
        # Create PDF
        pdf_buffer = io.BytesIO()
        doc = SimpleDocTemplate(pdf_buffer, pagesize=A4)
        elements = []
        styles = getSampleStyleSheet()
        
        # Process each sheet
        for sheet_idx, sheet_name in enumerate(wb.sheetnames):
            ws = wb[sheet_name]
            
            # Add sheet title
            if sheet_idx > 0:
                elements.append(PageBreak())
            
            title = Paragraph(f"<b>{sheet_name}</b>", styles['Heading1'])
            elements.append(title)
            elements.append(Spacer(1, 0.2*inch))
            
            # Extract data from sheet
            data = []
            for row in ws.iter_rows(values_only=True):
                # Convert None to empty string and handle other types
                row_data = []
                for cell in row:
                    if cell is None:
                        row_data.append('')
                    else:
                        row_data.append(str(cell))
                data.append(row_data)
            
            if data:
                # Create table
                table = Table(data)
                
                # Style the table
                table.setStyle(TableStyle([
                    ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
                    ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                    ('FONTSIZE', (0, 0), (-1, 0), 10),
                    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                    ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
                    ('GRID', (0, 0), (-1, -1), 1, colors.black),
                    ('FONTSIZE', (0, 1), (-1, -1), 8),
                ]))
                
                elements.append(table)
        
        # Build PDF
        doc.build(elements)
        pdf_buffer.seek(0)
        
        print("DEBUG: Fallback Excel to PDF conversion successful")
        return pdf_buffer
        
    except Exception as e:
        print(f"DEBUG: Fallback Excel to PDF error: {str(e)}")
        raise Exception(f"Fallback Excel to PDF conversion failed: {str(e)}")


def excel_to_pdf(excel_bytes):
    """
    Convert Excel to PDF using platform-specific methods
    - Windows: Tries Excel COM automation first, falls back to openpyxl+reportlab
    - Linux: Uses LibreOffice for compatibility
    """
    print(f"DEBUG: Starting Excel to PDF conversion... Size: {len(excel_bytes)} bytes")
    system = platform.system().lower()
    
    if system == 'windows':
        try:
            result = excel_to_pdf_windows(excel_bytes)
            print("DEBUG: Excel to PDF conversion complete (COM).")
            return result
        except Exception as com_error:
            print(f"DEBUG: COM automation failed: {str(com_error)}")
            print("DEBUG: Trying fallback method...")
            try:
                result = excel_to_pdf_fallback(excel_bytes)
                print("DEBUG: Excel to PDF conversion complete (fallback).")
                return result
            except Exception as fallback_error:
                print(f"DEBUG: Fallback also failed: {str(fallback_error)}")
                raise Exception(f"Excel to PDF conversion failed. COM error: {str(com_error)}, Fallback error: {str(fallback_error)}")
    else:
        result = office_to_pdf_linux(excel_bytes, ".xlsx")
        print("DEBUG: Excel to PDF conversion complete (LibreOffice).")
        return result



def pdf_to_excel(pdf_bytes):
    """
    Convert PDF to Excel by extracting tables and text using pdfplumber and tabula-py
    Returns an Excel file with tables or text from each page in separate sheets
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
    
    print(f"DEBUG: Starting PDF to Excel conversion... Size: {len(pdf_bytes)} bytes")
    
    try:
        import pdfplumber
        import pandas as pd
        from openpyxl import Workbook
        from openpyxl.utils.dataframe import dataframe_to_rows
        
        # Create a new Excel workbook
        wb = Workbook()
        wb.remove(wb.active)  # Remove default sheet
        
        tables_found = False
        text_extracted = False
        
        # Open PDF with pdfplumber
        with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:
            for page_num, page in enumerate(pdf.pages, start=1):
                # First, try to extract tables from the page
                tables = page.extract_tables()
                
                if tables:
                    for table_num, table in enumerate(tables, start=1):
                        # Convert table to DataFrame
                        df = pd.DataFrame(table[1:], columns=table[0] if table else None)
                        
                        # Create sheet name
                        if len(tables) > 1:
                            sheet_name = f"Page{page_num}_Table{table_num}"
                        else:
                            sheet_name = f"Page{page_num}_Table"
                        
                        # Truncate sheet name to 31 characters (Excel limit)
                        sheet_name = sheet_name[:31]
                        
                        # Create new sheet
                        ws = wb.create_sheet(title=sheet_name)
                        
                        # Write DataFrame to sheet
                        for r_idx, row in enumerate(dataframe_to_rows(df, index=False, header=True), 1):
                            for c_idx, value in enumerate(row, 1):
                                ws.cell(row=r_idx, column=c_idx, value=value)
                        
                        tables_found = True
                else:
                    # If no tables, extract text content
                    text = page.extract_text()
                    if text and text.strip():
                        sheet_name = f"Page{page_num}"[:31]
                        ws = wb.create_sheet(title=sheet_name)
                        
                        # Split text into lines and write to Excel
                        lines = text.strip().split('\n')
                        for row_idx, line in enumerate(lines, start=1):
                            # Try to split by common delimiters (tab, multiple spaces)
                            if '\t' in line:
                                cells = line.split('\t')
                            elif '  ' in line:  # Multiple spaces
                                cells = [cell.strip() for cell in line.split('  ') if cell.strip()]
                            else:
                                cells = [line]
                            
                            for col_idx, cell in enumerate(cells, start=1):
                                ws.cell(row=row_idx, column=col_idx, value=cell.strip())
                        
                        text_extracted = True
        
        # If no tables found, try using tabula-py as fallback
        if not tables_found and not text_extracted:
            print("DEBUG: No tables or text found with pdfplumber, trying tabula-py...")
            try:
                import tabula
                
                # Save PDF bytes to temp file (tabula requires file path)
                with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
                    temp_pdf.write(pdf_bytes)
                    temp_pdf_path = temp_pdf.name
                
                try:
                    # Extract all tables from PDF
                    dfs = tabula.read_pdf(temp_pdf_path, pages='all', multiple_tables=True)
                    
                    if dfs:
                        for idx, df in enumerate(dfs, start=1):
                            sheet_name = f"Table{idx}"
                            ws = wb.create_sheet(title=sheet_name)
                            
                            for r_idx, row in enumerate(dataframe_to_rows(df, index=False, header=True), 1):
                                for c_idx, value in enumerate(row, 1):
                                    ws.cell(row=r_idx, column=c_idx, value=value)
                            
                            tables_found = True
                finally:
                    safe_remove(temp_pdf_path)
                    
            except Exception as tabula_error:
                print(f"DEBUG: Tabula-py also failed: {tabula_error}")
        
        # If still nothing found, create a single sheet with a message
        if not tables_found and not text_extracted:
            ws = wb.create_sheet(title="No Content Found")
            ws.cell(row=1, column=1, value="No tables or extractable text were detected in the PDF document.")
            ws.cell(row=2, column=1, value="The PDF may contain only images or scanned content.")
            ws.cell(row=3, column=1, value="Try using OCR software to extract text from scanned PDFs.")
        
        # Save workbook to BytesIO
        excel_stream = io.BytesIO()
        wb.save(excel_stream)
        excel_stream.seek(0)
        
        print("DEBUG: PDF to Excel conversion successful.")
        return excel_stream
        
    except Exception as e:
        raise Exception(f"PDF to Excel conversion failed: {str(e)}")


def verify_excel(excel_stream):
    """Verify that the Excel stream contains a valid Excel document"""
    try:
        from openpyxl import load_workbook
        excel_stream.seek(0)
        wb = load_workbook(excel_stream)
        valid = len(wb.sheetnames) > 0
        wb.close()
        excel_stream.seek(0)
        return valid
    except Exception as e:
        print(f"Excel Validation Error: {e}")
        return False


def verify_docx(docx_stream):
    """Verify that the DOCX stream contains a valid Word document"""
    try:
        docx_stream.seek(0)
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
        doc = fitz.open(stream=pdf_stream, filetype="pdf")
        valid = doc.page_count > 0
        doc.close()
        pdf_stream.seek(0)
        return valid
    except Exception as e:
        print(f"PDF Validation Error: {e}")
        return False

