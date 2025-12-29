import Link from 'next/link';
import { ArrowLeft, Terminal, Code2, ShieldCheck, Zap } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Developer API - ILOVEPDFKIT',
    description: 'Programmatic access to ILOVEPDFKIT document conversion engine.',
};

export default function ApiDocsPage() {
    return (
        <div className={styles.container}>
            <Link href="/" className="flex items-center text-blue-600 font-semibold mb-8 hover:underline" style={{ color: '#667eea', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <ArrowLeft size={20} className="mr-2" style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <header className={styles.header}>
                <h1 className={styles.title}>Developer API</h1>
                <p className={styles.subtitle}>
                    Integrate our high-fidelity document conversion engine into your own applications.
                </p>
            </header>

            <section className={styles.section}>
                <div className={styles.infoBox}>
                    <div className={styles.infoTitle}>Base URL</div>
                    <div className={styles.infoText}>https://ilovepdfkit-backend.onrender.com/api</div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Terminal size={24} /> 1. PDF to Word
                </h2>
                <div className={styles.card}>
                    <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
                        Convert any PDF document to a high-fidelity Word (.docx) file.
                    </p>
                    <div className={styles.codeHeader}>cURL (Terminal)</div>
                    <pre className={styles.codeBlock}>
                        {`curl -X POST https://ilovepdfkit-backend.onrender.com/api/convert/pdf-to-word \\
  -F "file=@your_document.pdf" \\
  --output result.docx`}
                    </pre>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Code2 size={24} /> 2. Word to PDF
                </h2>
                <div className={styles.card}>
                    <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
                        Convert .docx files to professional PDF documents using our optimized engine.
                    </p>
                    <div className={styles.codeHeader}>Python (Requests)</div>
                    <pre className={styles.codeBlock}>
                        {`import requests

url = "https://ilovepdfkit-backend.onrender.com/api/convert/word-to-pdf"
files = {'file': open('document.docx', 'rb')}

response = requests.post(url, files=files)

if response.status_code == 200:
    with open('result.pdf', 'wb') as f:
        f.write(response.content)
    print("Conversion successful!")`}
                    </pre>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Zap size={24} /> 3. JavaScript Example
                </h2>
                <div className={styles.card}>
                    <div className={styles.codeHeader}>Fetch API</div>
                    <pre className={styles.codeBlock}>
                        {`const formData = new FormData();
formData.append('file', fileInput.files[0]);

const response = await fetch('https://ilovepdfkit-backend.onrender.com/api/api/convert/pdf-to-word', {
  method: 'POST',
  body: formData
});

if (response.ok) {
  const blob = await response.blob();
  // Handle download...
}`}
                    </pre>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <ShieldCheck size={24} /> Security & Limits
                </h2>
                <div className={styles.card}>
                    <ul style={{ color: '#4a5568', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                        <li><strong>Rate Limiting:</strong> 10 conversion requests per minute per IP.</li>
                        <li><strong>Contact Form:</strong> 3 requests per minute per IP.</li>
                        <li><strong>Health Checks:</strong> 60 requests per minute per IP.</li>
                        <li><strong>Maximum File Size:</strong> 100MB per request.</li>
                    </ul>
                </div>
            </section>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <p style={{ color: '#718096', marginBottom: '1rem' }}>Need a custom solution or higher limits?</p>
                <Link href="/contact" style={{ color: '#667eea', fontWeight: 700, textDecoration: 'none' }}>
                    Contact our engineering team →
                </Link>
            </div>
        </div>
    );
}
