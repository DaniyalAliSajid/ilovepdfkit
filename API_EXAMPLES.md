# 🔌 iLovePDFKit Developer API Examples

Welcome to the technical side of iLovePDFKit. This guide shows you how to programmatically interact with our conversion engine.

## Base URL
```
https://ilovepdfkit-backend.onrender.com/api
```

---

## 1. PDF to Word Conversion
Convert any PDF document to a high-fidelity Word (.docx) file.

### cURL (Terminal)
```bash
curl -X POST https://ilovepdfkit-backend.onrender.com/api/convert/pdf-to-word \
  -F "file=@your_document.pdf" \
  --output result.docx
```

### Python (Requests)
```python
import requests

url = "https://ilovepdfkit-backend.onrender.com/api/convert/pdf-to-word"
files = {'file': open('your_document.pdf', 'rb')}

response = requests.post(url, files=files)

if response.status_code == 200:
    with open('result.docx', 'wb') as f:
        f.write(response.content)
    print("Conversion successful!")
else:
    print(f"Error: {response.status_code}")
```

---

## 2. Word to PDF Conversion
Convert .docx files to professional PDF documents.

### JavaScript (Fetch)
```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]);

const response = await fetch('https://ilovepdfkit-backend.onrender.com/api/convert/word-to-pdf', {
  method: 'POST',
  body: formData
});

if (response.ok) {
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'document.pdf';
  a.click();
}
```

---

## 3. Security & Rate Limits
To ensure fair usage and protect against spam, the API has the following limits:
- **Conversions**: 10 requests per minute.
- **Contact Form**: 3 requests per minute.
- **Default Limit**: 60 requests per minute.

> [!NOTE]
> If you exceed these limits, the API will return a `429 Too Many Requests` status code.
