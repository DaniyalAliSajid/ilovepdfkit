from flask import Flask, request, send_file, jsonify, render_template_string
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

@app.route('/', methods=['GET'])
def index():
    return render_template_string(\"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>iLovePDFKit API</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #e53e3e; }
            .card { background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
            code { background: #edf2f7; padding: 2px 5px; border-radius: 4px; font-family: 'Courier New', Courier, monospace; }
            .status { display: inline-block; padding: 5px 10px; border-radius: 9999px; font-size: 0.8em; font-weight: bold; }
            .status.online { background-color: #c6f6d5; color: #22543d; }
        </style>
    </head>
    <body>
        <h1>iLovePDFKit API</h1>
        <div class="card">
            <p>Status: <span class="status online">Online</span></p>
            <p>Welcome to the iLovePDFKit API. This service converts documents between PDF and Word formats.</p>
        </div>
        
        <h2>Endpoints</h2>
        
        <div class="card">
            <h3>POST /api/convert/pdf-to-word</h3>
            <p>Convert a PDF file to a Word document.</p>
            <p><strong>Input:</strong> Form-data with file field named <code>file</code> (.pdf)</p>
        </div>

        <div class="card">
            <h3>POST /api/convert/word-to-pdf</h3>
            <p>Convert a Word document to PDF.</p>
            <p><strong>Input:</strong> Form-data with file field named <code>file</code> (.docx)</p>
        </div>
    </body>
    </html>
    \""")

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
        docx_stream = converter.pdf_to_word(pdf_bytes)
        
        # Verify stream content with strict check
        if not converter.verify_docx(docx_stream):
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
        if not converter.verify_pdf(pdf_stream):
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
