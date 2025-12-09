
import fitz  # PyMuPDF
from docx import Document
from docx.shared import Inches
import io
from PIL import Image
import os
import pythoncom
from docx2pdf import convert
import tempfile


def pdf_to_word(pdf_bytes):
    """
    Convert PDF bytes to Word document with pixel-perfect formatting preservation
    """
    if not pdf_bytes:
        raise ValueError("PDF file is empty")
    
    try:
        from docx.shared import Pt, RGBColor
        from docx.enum.text import WD_ALIGN_PARAGRAPH
        
        # Open PDF with PyMuPDF
        pdf_document = fitz.open(stream=pdf_bytes, filetype="pdf")
        
        if pdf_document.page_count == 0:
            raise ValueError("PDF appears to be empty or unreadable")
        
        # Create a new Word document
        doc = Document()
        
        # Enhanced font mapping: PDF fonts to Word-compatible fonts
        font_map = {
            'arial': 'Arial',
            'helvetica': 'Arial',
            'times': 'Times New Roman',
            'timesnewroman': 'Times New Roman',
            'courier': 'Courier New',
            'couriernew': 'Courier New',
            'calibri': 'Calibri',
            'verdana': 'Verdana',
            'georgia': 'Georgia',
            'tahoma': 'Tahoma',
            'trebuchet': 'Trebuchet MS',
            'impact': 'Impact',
            'comicsans': 'Comic Sans MS',
            'palatino': 'Palatino Linotype',
            'garamond': 'Garamond',
            'bookman': 'Bookman Old Style',
        }
        
        def get_word_font(pdf_font):
            """Map PDF font to Word-compatible font with improved matching"""
            if not pdf_font:
                return 'Calibri'
            pdf_font_lower = pdf_font.lower().replace(' ', '').replace('-', '')
            for key, value in font_map.items():
                if key in pdf_font_lower:
                    return value
            # If no match found, try to use the original font name
            return pdf_font.split('-')[0] if '-' in pdf_font else pdf_font
        
        # Process each page
        for page_num in range(pdf_document.page_count):
            page = pdf_document[page_num]
            
            # Set page size to match PDF exactly
            pdf_width = page.rect.width / 72  # Convert points to inches
            pdf_height = page.rect.height / 72
            
            section = doc.sections[-1] if doc.sections else doc.sections[0]
            section.page_width = Inches(pdf_width)
            section.page_height = Inches(pdf_height)
            section.top_margin = Inches(0.5)
            section.bottom_margin = Inches(0.5)
            section.left_margin = Inches(0.75)
            section.right_margin = Inches(0.75)
            
            # Extract text with detailed formatting
            text_dict = page.get_text("dict")
            blocks = text_dict.get("blocks", [])
            
            # Collect all content items (text and images) with positions
            content_items = []
            
            # Process text blocks
            for block in blocks:
                if block.get("type") == 0:  # Text block
                    block_bbox = block.get("bbox", [0, 0, 0, 0])
                    lines = block.get("lines", [])
                    
                    for line in lines:
                        line_bbox = line.get("bbox", [0, 0, 0, 0])
                        spans = line.get("spans", [])
                        
                        # Group spans in this line
                        line_data = {
                            'type': 'text',
                            'y': line_bbox[1],  # Top Y coordinate
                            'x': line_bbox[0],  # Left X coordinate
                            'spans': []
                        }
                        
                        for span in spans:
                            span_data = {
                                'text': span.get("text", ""),
                                'font': span.get("font", ""),
                                'size': span.get("size", 11),
                                'color': span.get("color", 0),
                                'flags': span.get("flags", 0),  # Bold, italic, underline flags
                            }
                            line_data['spans'].append(span_data)
                        
                        if line_data['spans']:
                            content_items.append(line_data)
            
            # Process images with improved extraction
            page_images = page.get_images(full=True)
            for img_index, img in enumerate(page_images):
                try:
                    xref = img[0]
                    
                    # Get image position on page
                    img_rects = page.get_image_rects(xref)
                    if img_rects:
                        img_rect = img_rects[0]  # Use first occurrence
                        
                        base_image = pdf_document.extract_image(xref)
                        img_bytes = base_image["image"]
                        img_ext = base_image["ext"]
                        
                        # Convert to PNG for better compatibility
                        img_stream = io.BytesIO(img_bytes)
                        try:
                            pil_image = Image.open(img_stream)
                            # Preserve image mode (RGB, RGBA, etc.)
                            if pil_image.mode in ('RGBA', 'LA', 'P'):
                                # Keep transparency
                                pil_image = pil_image.convert('RGBA')
                            else:
                                pil_image = pil_image.convert('RGB')
                            
                            img_width, img_height = pil_image.size
                            
                            png_stream = io.BytesIO()
                            pil_image.save(png_stream, format="PNG", optimize=True)
                            png_stream.seek(0)
                            
                            # Calculate width in inches with better accuracy
                            rect_width = (img_rect.width / 72)  # Convert points to inches
                            # Ensure minimum and maximum reasonable sizes
                            width_inches = max(0.5, min(6.5, rect_width if rect_width > 0 else img_width / 96))
                            
                            content_items.append({
                                'type': 'image',
                                'y': img_rect.y0,  # Top Y coordinate
                                'x': img_rect.x0,  # Left X coordinate
                                'stream': png_stream,
                                'width': width_inches
                            })
                        except Exception as img_conv_error:
                            print(f"Warning: Could not convert image {img_index + 1}: {img_conv_error}")
                except Exception as img_error:
                    print(f"Warning: Could not process image {img_index + 1}: {img_error}")
            
            # Sort all content by Y position (top to bottom), then X (left to right)
            content_items.sort(key=lambda item: (item['y'], item['x']))
            
            # Process content in order with improved paragraph detection
            last_y = None
            current_paragraph = None
            last_font_size = None
            
            for item in content_items:
                if item['type'] == 'text':
                    # Check if we need a new paragraph
                    current_y = item['y']
                    
                    # Calculate average font size for this line
                    avg_font_size = sum(s['size'] for s in item['spans']) / len(item['spans']) if item['spans'] else 11
                    
                    # Determine if this is a new paragraph based on:
                    # 1. Significant vertical gap (>15 pixels for better accuracy)
                    # 2. Font size change (indicates heading/new section)
                    needs_new_paragraph = (
                        current_paragraph is None or
                        (last_y is not None and (current_y - last_y) > 15) or
                        (last_font_size is not None and abs(avg_font_size - last_font_size) > 2)
                    )
                    
                    if needs_new_paragraph:
                        current_paragraph = doc.add_paragraph()
                    
                    # Add each span with its formatting
                    for span in item['spans']:
                        text = span['text']
                        if not text.strip():
                            # Preserve spaces
                            if text:
                                current_paragraph.add_run(text)
                            continue
                        
                        run = current_paragraph.add_run(text)
                        
                        # Apply font with improved mapping
                        font_name = get_word_font(span['font'])
                        run.font.name = font_name
                        
                        # Apply font size with bounds checking
                        font_size = max(6, min(72, span['size']))  # Reasonable bounds
                        run.font.size = Pt(font_size)
                        
                        # Apply bold/italic/underline based on flags
                        flags = span['flags']
                        if flags & 2**4:  # Bold flag (bit 4)
                            run.font.bold = True
                        if flags & 2**1:  # Italic flag (bit 1)
                            run.font.italic = True
                        if flags & 2**0:  # Underline flag (bit 0)
                            run.font.underline = True
                        
                        # Apply color if not black with improved color handling
                        color = span['color']
                        if color != 0:
                            # Convert integer color to RGB
                            r = (color >> 16) & 0xFF
                            g = (color >> 8) & 0xFF
                            b = color & 0xFF
                            run.font.color.rgb = RGBColor(r, g, b)
                    
                    last_y = current_y
                    last_font_size = avg_font_size
                    
                elif item['type'] == 'image':
                    # Add image in its own paragraph
                    img_paragraph = doc.add_paragraph()
                    img_run = img_paragraph.add_run()
                    try:
                        img_run.add_picture(item['stream'], width=Inches(item['width']))
                    except Exception as img_add_error:
                        print(f"Warning: Could not add image to document: {img_add_error}")
                    
                    current_paragraph = None  # Reset paragraph context
                    last_y = item['y']
            
            # Add page break only if not the last page
            if page_num < pdf_document.page_count - 1:
                doc.add_page_break()
        
        pdf_document.close()
        
        # Save to BytesIO
        output_stream = io.BytesIO()
        doc.save(output_stream)
        output_stream.seek(0)
        return output_stream
        
    except Exception as e:
        raise Exception(f"PDF to Word conversion failed: {str(e)}")

def word_to_pdf(docx_bytes):
    # docx2pdf requires a file path, it doesn't work well with streams directly on Windows
    # because it uses COM automation with Word.
    
    # Initialize COM for this thread
    pythoncom.CoInitialize()
    temp_docx_path = None
    temp_pdf_path = None
    
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as temp_docx:
            temp_docx.write(docx_bytes)
            temp_docx_path = temp_docx.name
            
        temp_pdf_path = temp_docx_path.replace(".docx", ".pdf")
        
        # Close the files so Word can open them
        
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
