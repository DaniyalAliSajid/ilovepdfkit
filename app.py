from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import converter
import io
import os

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

        if size == 0 or not converter.verify_pdf(pdf_stream):
            raise Exception("Generated PDF file is corrupt and cannot be opened")
        
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

if __name__ == '__main__':
    app.run(debug=True, port=5000)
