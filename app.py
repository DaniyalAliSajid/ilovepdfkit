from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import converter
import io
import os
import zipfile

app = Flask(__name__)

# CORS configuration
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173", "http://localhost:3000"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"],
        "expose_headers": ["Content-Disposition"]
    }
})

# Configuration
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50MB

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint for monitoring"""
    return jsonify({
        "status": "healthy",
        "service": "Document Converter API",
        "version": "1.0.0",
        "endpoints": {
            "pdf_to_word": "/api/convert/pdf-to-word",
            "word_to_pdf": "/api/convert/word-to-pdf"
        }
    }), 200

def validate_file_size(file_bytes):
    """Validate file size is within limits"""
    size = len(file_bytes)
    if size > MAX_FILE_SIZE:
        size_mb = size / (1024 * 1024)
        max_mb = MAX_FILE_SIZE / (1024 * 1024)
        raise ValueError(f"File size ({size_mb:.2f}MB) exceeds maximum allowed size ({max_mb}MB)")
    return size

@app.route('/api/convert/pdf-to-word', methods=['POST'])
def convert_pdf_to_word():
    try:
        if 'file' not in request.files:
            return jsonify({
                "error": "No file provided",
                "code": "NO_FILE"
            }), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({
                "error": "No file selected",
                "code": "EMPTY_FILENAME"
            }), 400
        
        if not file.filename.lower().endswith('.pdf'):
            return jsonify({
                "error": "Invalid file type. Please upload a PDF file.",
                "code": "INVALID_FILE_TYPE",
                "accepted": [".pdf"]
            }), 400
        
        # Read and validate file size
        pdf_bytes = file.read()
        try:
            file_size = validate_file_size(pdf_bytes)
        except ValueError as e:
            return jsonify({
                "error": str(e),
                "code": "FILE_TOO_LARGE"
            }), 413
        
        # Convert PDF to Word
        print("DEBUG: Calling converter.pdf_to_word...")
        docx_stream = converter.pdf_to_word(pdf_bytes)
        print("DEBUG: Converter returned. Verifying...")
        
        # Verify stream content with strict check
        docx_stream.seek(0, 2)
        size = docx_stream.tell()
        docx_stream.seek(0)
        print(f"DEBUG: Generated DOCX size: {size} bytes")
        
        if size == 0 or not converter.verify_docx(docx_stream):
            raise Exception("Generated DOCX file is corrupt and cannot be opened")
            
        # Final seek to ensure stream starts at 0
        docx_stream.seek(0)
        return send_file(
            docx_stream,
            as_attachment=True,
            download_name=f"{file.filename.rsplit('.', 1)[0]}.docx",
            mimetype='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        )
        
    except Exception as e:
        app.logger.error(f"PDF to Word conversion error: {str(e)}")
        return jsonify({
            "error": "Conversion failed. The document could not be processed.",
            "code": "CONVERSION_ERROR",
            "details": str(e)
        }), 500

@app.route('/api/convert/word-to-pdf', methods=['POST'])
def convert_word_to_pdf():
    try:
        if 'file' not in request.files:
            return jsonify({
                "error": "No file provided",
                "code": "NO_FILE"
            }), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({
                "error": "No file selected",
                "code": "EMPTY_FILENAME"
            }), 400
        
        if not file.filename.lower().endswith('.docx'):
            return jsonify({
                "error": "Invalid file type. Please upload a Word (.docx) file.",
                "code": "INVALID_FILE_TYPE",
                "accepted": [".docx"]
            }), 400
        
        # Read and validate file size
        docx_bytes = file.read()
        try:
            file_size = validate_file_size(docx_bytes)
        except ValueError as e:
            return jsonify({
                "error": str(e),
                "code": "FILE_TOO_LARGE"
            }), 413
        
        # Convert Word to PDF
        pdf_stream = converter.word_to_pdf(docx_bytes)
        
        # Verify stream content with strict check
        pdf_stream.seek(0, 2)
        size = pdf_stream.tell()
        pdf_stream.seek(0)
        print(f"DEBUG: Generated PDF size: {size} bytes")

        # Confirm seek position
        pdf_stream.seek(0)
        return send_file(
            pdf_stream,
            as_attachment=True,
            download_name=f"{file.filename.rsplit('.', 1)[0]}.pdf",
            mimetype='application/pdf'
        )
        
    except Exception as e:
        app.logger.error(f"Word to PDF conversion error: {str(e)}")
        return jsonify({
            "error": "Conversion failed. Please ensure the Word document is valid and not corrupted.",
            "code": "CONVERSION_ERROR",
            "details": str(e)
        }), 500


@app.route('/api/convert/pdf-to-jpg', methods=['POST'])
def convert_pdf_to_jpg():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": "No file selected"}), 400
        
        pdf_bytes = file.read()
        validate_file_size(pdf_bytes)
        
        image_streams = converter.pdf_to_jpg(pdf_bytes)
        
        # Create a ZIP file in memory
        zip_buffer = io.BytesIO()
        with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
            for i, img_stream in enumerate(image_streams):
                img_stream.seek(0)
                zip_file.writestr(f"page_{i+1}.jpg", img_stream.read())
        
        zip_buffer.seek(0)
        return send_file(
            zip_buffer,
            as_attachment=True,
            download_name=f"{file.filename.rsplit('.', 1)[0]}_images.zip",
            mimetype='application/zip'
        )
    except Exception as e:
        app.logger.error(f"PDF to JPG error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/convert/jpg-to-pdf', methods=['POST'])
def convert_jpg_to_pdf():
    try:
        if 'files' not in request.files:
            return jsonify({"error": "No files provided"}), 400
        
        files = request.files.getlist('files')
        image_bytes_list = []
        for file in files:
            if file.filename.lower().endswith(('.jpg', '.jpeg', '.png')):
                img_bytes = file.read()
                validate_file_size(img_bytes)
                image_bytes_list.append(img_bytes)
        
        if not image_bytes_list:
            return jsonify({"error": "No valid images found"}), 400
            
        pdf_stream = converter.jpg_to_pdf(image_bytes_list)
        
        return send_file(
            pdf_stream,
            as_attachment=True,
            download_name="images_to_pdf.pdf",
            mimetype='application/pdf'
        )
    except Exception as e:
        app.logger.error(f"JPG to PDF error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/convert/rotate-pdf', methods=['POST'])
def convert_rotate_pdf():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        angle = int(request.form.get('angle', 90))
        
        pdf_bytes = file.read()
        validate_file_size(pdf_bytes)
        
        pdf_stream = converter.rotate_pdf(pdf_bytes, angle)
        
        return send_file(
            pdf_stream,
            as_attachment=True,
            download_name=f"{file.filename.rsplit('.', 1)[0]}_rotated.pdf",
            mimetype='application/pdf'
        )
    except Exception as e:
        app.logger.error(f"Rotate PDF error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/convert/ppt-to-pdf', methods=['POST'])
def convert_ppt_to_pdf():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        ppt_bytes = file.read()
        validate_file_size(ppt_bytes)
        
        pdf_stream = converter.ppt_to_pdf(ppt_bytes)
        
        return send_file(
            pdf_stream,
            as_attachment=True,
            download_name=f"{file.filename.rsplit('.', 1)[0]}.pdf",
            mimetype='application/pdf'
        )
    except Exception as e:
        app.logger.error(f"PPT to PDF error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/convert/excel-to-pdf', methods=['POST'])
def convert_excel_to_pdf():
    # Endpoint removed as per user request
    return jsonify({"error": "Excel to PDF conversion is no longer supported"}), 410


if __name__ == '__main__':
    app.run(debug=True, port=5000)

