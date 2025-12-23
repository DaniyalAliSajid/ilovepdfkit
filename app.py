from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import converter
import io
import os
import zipfile
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__, static_folder='static_build')

# CORS configuration
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:5173",
            "http://localhost:3000",
            "https://ilovepdfkit.com",
            "https://www.ilovepdfkit.com"
        ],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"],
        "expose_headers": ["Content-Disposition"]
    }
})

# Configuration
MAX_FILE_SIZE = 100 * 1024 * 1024  # 100MB

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return app.send_static_file(path)
    
    # Fallback for production when frontend is hosted elsewhere (Netlify)
    if not os.path.exists(os.path.join(app.static_folder, 'index.html')):
        return jsonify({
            "message": "ILOVEPDFKIT API is running",
            "status": "healthy",
            "frontend": "https://ilovepdfkit.com"
        }), 200
        
    return app.send_static_file('index.html')

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

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        company = data.get('company')
        message = data.get('message')

        if not all([name, email, message]):
            return jsonify({"error": "All fields are required"}), 400

        if not subject:
            if company:
                subject = f"Advertising Inquiry: {company}"
            else:
                subject = "New Contact Form Submission"

        # Email configuration
        email_user = os.environ.get('EMAIL_USER')
        email_password = os.environ.get('EMAIL_PASSWORD')
        support_email = 'support@ilovepdfkit.com'

        if not email_user or not email_password:
            app.logger.warning("Email credentials not set. Logging message to console.")
            print(f"--- CONTACT FORM SUBMISSION ---")
            print(f"From: {name} ({email})")
            print(f"Subject: {subject}")
            print(f"Message: {message}")
            print(f"-------------------------------")
            return jsonify({
                "success": True, 
                "message": "Message received (Dev Mode: Credentials not set)"
            }), 200

        # Create email
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Contact Form: {subject}"
        msg['From'] = email_user
        msg['To'] = support_email
        msg['Reply-To'] = email

        # Plain text version
        text = f"New message from {name} ({email}):\n\nSubject: {subject}\n\n{message}"
        
        # HTML version
        html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #9333ea;">New Contact Form Submission</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Subject:</strong> {subject}</p>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h3 style="color: #374151; margin-top: 0;">Message:</h3>
                <p style="color: #6b7280; line-height: 1.6;">{message}</p>
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
                Sent from ILOVEPDFKIT contact form.
            </p>
        </div>
        """

        msg.attach(MIMEText(text, 'plain'))
        msg.attach(MIMEText(html, 'html'))

    #     # Send email via Gmail SMTP
    #     with smtplib.SMTP_SSL('mail.ilovepdfkit.com', 465) as server:
    #         server.login(email_user, email_password)
    #         server.sendmail(email_user, support_email, msg.as_string())

    #     return jsonify({"success": True, "message": "Email sent successfully"}), 200

    # except Exception as e:
    #     app.logger.error(f"Contact form error: {str(e)}")
    #     return jsonify({"error": "Failed to send message. Please try again later."}), 500


    # Send email via Namecheap/cPanel SMTP (SSL)
with smtplib.SMTP_SSL('mail.ilovepdfkit.com', 465, timeout=10) as server:
    server.login(email_user, email_password)
    server.sendmail(email_user, support_email, msg.as_string())

return jsonify({"success": True, "message": "Email sent successfully"}), 200


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

@app.route('/api/convert/merge-pdf', methods=['POST'])
def convert_merge_pdf():
    try:
        if 'files' not in request.files:
            return jsonify({"error": "No files provided"}), 400
        
        files = request.files.getlist('files')
        pdf_bytes_list = []
        for file in files:
            if file.filename.lower().endswith('.pdf'):
                pdf_bytes = file.read()
                pdf_bytes_list.append(pdf_bytes)
        
        if not pdf_bytes_list:
            return jsonify({"error": "No valid PDF files found"}), 400
            
        pdf_stream = converter.merge_pdf(pdf_bytes_list)
        
        filename = "merged_document.pdf"
        return send_file(
            pdf_stream,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=filename
        )
    except Exception as e:
        app.logger.error(f"Merge PDF error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/convert/compress-pdf', methods=['POST'])
def convert_compress_pdf():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
            
        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": "No file selected"}), 400

        level = request.form.get('level', 'recommended')
        
        pdf_bytes = file.read()
        validate_file_size(pdf_bytes)
        
        compressed_stream = converter.compress_pdf(pdf_bytes, level=level)
        
        filename = f"{file.filename.rsplit('.', 1)[0]}_compressed.pdf"
        return send_file(
            compressed_stream,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=filename
        )
    except Exception as e:
        app.logger.error(f"Compress PDF error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/convert/pdf-to-ppt', methods=['POST'])
def convert_pdf_to_ppt():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
            
        file = request.files['file']
        pdf_bytes = file.read()
        validate_file_size(pdf_bytes)
        
        ppt_stream = converter.pdf_to_ppt(pdf_bytes)
        
        filename = f"{file.filename.rsplit('.', 1)[0]}.pptx"
        return send_file(
            ppt_stream,
            mimetype='application/vnd.openxmlformats-officedocument.presentationml.presentation',
            as_attachment=True,
            download_name=filename
        )
    except Exception as e:
        app.logger.error(f"PDF to PPT error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/convert/add-page-numbers', methods=['POST'])
def convert_add_page_numbers():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
            
        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": "No file selected"}), 400
            
        pdf_bytes = file.read()
        validate_file_size(pdf_bytes)
        
        # Parse options
        options = {
            'position': request.form.get('position', 'bottom-center'),
            'margin': request.form.get('margin', 'recommended'),
            'first_number': request.form.get('firstNumber', 1),
            'page_mode': request.form.get('pageMode', 'single'),
            'cover_page': request.form.get('isCoverPage', 'false')
        }
        
        pdf_stream = converter.add_page_numbers(pdf_bytes, options)
        
        filename = f"{file.filename.rsplit('.', 1)[0]}_numbered.pdf"
        return send_file(
            pdf_stream,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=filename
        )
    except Exception as e:
        app.logger.error(f"Add Page Numbers error: {str(e)}")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)

