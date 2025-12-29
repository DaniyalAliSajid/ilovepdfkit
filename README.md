# 📄 iLovePDFKit

A professional, full-stack document conversion platform. Live at: [ilovepdfkit.com](https://ilovepdfkit.com)

![iLovePDFKit](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Python](https://img.shields.io/badge/python-3.8+-green.svg)
![React](https://img.shields.io/badge/react-19.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### Core Functionality
- 🔄 **Bidirectional Conversion**: PDF → Word and Word → PDF
- 📝 **Text Extraction**: Preserves text content with accurate formatting
- 🖼️ **Image Preservation**: Extracts and embeds images from PDFs
- 📄 **Page Structure**: Maintains page breaks and document structure

### User Experience
- 🎨 **Premium UI/UX**: Modern design with gradients, glassmorphism, and smooth animations
- 🖱️ **Drag & Drop**: Intuitive file upload with visual feedback
- 📊 **Real-time Progress**: Live conversion progress tracking
- 🕒 **Conversion History**: Session-based history of recent conversions
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Technical Features
- ⚡ **Fast Processing**: Optimized conversion engine
- 🔒 **Secure**: Files processed locally, never stored on server
- 📏 **File Validation**: 50MB size limit with type checking
- 🚨 **Error Handling**: Comprehensive error messages and validation
- 🏥 **Health Monitoring**: API health check endpoint

---

## 📦 Installation

### Prerequisites

- **Python 3.8+** ([Download](https://www.python.org/downloads/))
- **Node.js 16+** and npm ([Download](https://nodejs.org/))
- **Microsoft Word** (Windows only, required for Word → PDF conversion)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/PDF_To_Word.git
   cd PDF_To_Word
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install Node dependencies**
   ```bash
   npm install
   ```

---

## 🚀 Usage

### Starting the Application

You need to run both the backend and frontend servers:

#### 1. Start the Backend (Flask API)

```bash
# From the project root directory
python app.py
```

The API will start on `http://localhost:5000`

#### 2. Start the Frontend (React + Vite)

```bash
# From the frontend directory
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

#### 3. Open in Browser

Navigate to `http://localhost:5173` in your web browser.

### Using the Converter

1. **Select Conversion Type**: Choose between "PDF to Word" or "Word to PDF" tabs
2. **Upload File**: Drag and drop your file or click to browse
3. **Convert**: Click the "Convert Now" button
4. **Download**: Your converted file will automatically download

---

---

## 🔌 Developer API

iLovePDFKit is built with a developer-first mindset. You can interact with our conversion engine programmatically.

- **[Full API Documentation & Examples](API_EXAMPLES.md)** - Includes cURL, Python, and JavaScript examples.
- **Base URL**: `https://ilovepdfkit-backend.onrender.com/api`
- **Rate Limiting**: Protected by `Flask-Limiter` (10 converts/min).

## 🔌 Local API Usage

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "status": "healthy",
  "service": "iLovePDFKit API",
  "version": "1.0.0",
  "endpoints": {
    "pdf_to_word": "/api/convert/pdf-to-word",
    "word_to_pdf": "/api/convert/word-to-pdf"
  }
}
```

#### PDF to Word Conversion
```http
POST /api/convert/pdf-to-word
Content-Type: multipart/form-data
```

**Parameters:**
- `file` (required): PDF file (max 50MB)

**Success Response (200):**
- Returns `.docx` file as download

**Error Responses:**
- `400`: Invalid file type or missing file
- `413`: File size exceeds 50MB
- `500`: Conversion error

#### Word to PDF Conversion
```http
POST /api/convert/word-to-pdf
Content-Type: multipart/form-data
```

**Parameters:**
- `file` (required): Word (.docx) file (max 50MB)

**Success Response (200):**
- Returns `.pdf` file as download

**Error Responses:**
- `400`: Invalid file type or missing file
- `413`: File size exceeds 50MB
- `500`: Conversion error

---

## 📁 Project Structure

```
PDF_To_Word/
├── app.py                 # Flask API server
├── converter.py           # Conversion logic (PDF ↔ Word)
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── frontend/             # React frontend
│   ├── src/
│   │   ├── App.jsx       # Main app component
│   │   ├── main.jsx      # Entry point
│   │   ├── index.css     # Global styles
│   │   ├── components/
│   │   │   ├── Converter.jsx      # Conversion component
│   │   │   └── FileDropzone.jsx   # Drag-drop component
│   ├── index.html        # HTML template
│   ├── package.json      # Node dependencies
│   └── vite.config.js    # Vite configuration
└── main.py               # Standalone GUI version (Tkinter)
```

---

## 🛠️ Technology Stack

### Backend
- **Flask** - Web framework
- **PyPDF2** - PDF text extraction
- **PyMuPDF (fitz)** - PDF image extraction
- **python-docx** - Word document creation
- **docx2pdf** - Word to PDF conversion
- **Pillow** - Image processing

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **Bootstrap** - Component library
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **Axios** - HTTP client

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root (optional):

```env
FLASK_ENV=development
FLASK_DEBUG=True
MAX_FILE_SIZE=52428800  # 50MB in bytes
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

---

## 🐛 Troubleshooting

### Common Issues

**1. Word to PDF conversion fails**
- **Cause**: Microsoft Word is not installed (Windows only)
- **Solution**: Install Microsoft Word or use an alternative library

**2. Import errors for Python packages**
- **Cause**: Dependencies not installed
- **Solution**: Run `pip install -r requirements.txt`

**3. Frontend not connecting to backend**
- **Cause**: CORS or backend not running
- **Solution**: Ensure backend is running on port 5000 and CORS is configured

**4. File upload fails**
- **Cause**: File size exceeds 50MB or invalid file type
- **Solution**: Check file size and ensure correct file extension

**5. Conversion takes too long**
- **Cause**: Large file with many images
- **Solution**: This is normal for large files; wait for completion

---

## 📈 Future Enhancements

- [ ] Batch conversion support
- [ ] Cloud storage integration (Google Drive, Dropbox)
- [ ] OCR for scanned PDFs
- [ ] Custom page layout options
- [ ] PDF metadata preservation
- [ ] Password-protected PDF support
- [ ] Docker containerization
- [ ] API rate limiting
- [ ] User authentication

---

## 📜 License

This project is open-source under the MIT License. Feel free to use, modify, and distribute with proper attribution.

---

## 💬 Contact & Support

- **Email**: m90.rahmati@gmail.com
- **GitHub**: [@kezb90](https://github.com/kezb90)
- **Issues**: [Report a bug](https://github.com/kezb90/PDF_To_Word/issues)

---

## 🙏 Acknowledgments

- Built with ❤️ for seamless document conversion
- Powered by open-source libraries and frameworks
- Special thanks to the Python and React communities

---

**Made with ❤️ by the iLovePDFKit team**
