'use client';

import { useState } from 'react';
import { Download, CheckCircle, XCircle, Clock } from 'lucide-react';
import { saveAs } from 'file-saver';
import FileDropzone from './FileDropzone';
import styles from './Converter.module.css';

interface ConverterProps {
    type: 'pdf-to-word' | 'word-to-pdf';
}

interface HistoryItem {
    id: number;
    fileName: string;
    outputFileName: string;
    timestamp: string;
    type: string;
}

const Converter: React.FC<ConverterProps> = ({ type }) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const isPdfToWord = type === 'pdf-to-word';
    const title = isPdfToWord ? 'PDF to Word Converter' : 'Word to PDF Converter';
    const accept = isPdfToWord ? '.pdf' : '.docx';
    // Note: Using relative path assumes proxy will be set up or backend is on same origin/handled via global fetch config
    // Use environment variable for API URL in production (Vercel), valid fallback for local dev via proxy
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const endpoint = isPdfToWord
        ? `${baseUrl}/api/convert/pdf-to-word`
        : `${baseUrl}/api/convert/word-to-pdf`;

    const headerGradient = isPdfToWord
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';

    const handleFileSelect = (selectedFile: File | null) => {
        setFile(selectedFile);
        setMessage(null);
        setError(null);
        setProgress(0);
    };

    const handleConvert = async () => {
        if (!file) {
            setError('Please select a file first.');
            return;
        }

        setLoading(true);
        setProgress(10); // Start progress
        setMessage(null);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Simulation of progress for better UX
            const progressInterval = setInterval(() => {
                setProgress((prev) => (prev < 90 ? prev + 10 : prev));
            }, 500);

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });

            clearInterval(progressInterval);
            setProgress(100);

            if (!response.ok) {
                let errorMessage = 'Conversion failed';
                try {
                    const errorJson = await response.json();
                    errorMessage = errorJson.error || errorJson.details || errorMessage;
                } catch (e) {
                    errorMessage = `Server Error: ${response.status} ${response.statusText}`;
                }
                throw new Error(errorMessage);
            }

            const blob = await response.blob();
            console.log(`DEBUG: Received blob of size ${blob.size} bytes`);

            if (blob.size === 0) {
                throw new Error("Received an empty file from the server.");
            }

            // More robust filename logic
            const originalName = file.name;
            const nameParts = originalName.split('.');
            if (nameParts.length > 1) nameParts.pop(); // Remove extension
            const baseName = nameParts.join('.');
            const extension = isPdfToWord ? '.docx' : '.pdf';
            const outputFileName = `${baseName}${extension}`;

            console.log(`DEBUG: Saving as ${outputFileName}`);
            saveAs(blob, outputFileName);

            setMessage(`Conversion successful! Downloaded ${outputFileName}`);

            // Add to history
            const historyItem: HistoryItem = {
                id: Date.now(),
                fileName: file.name,
                outputFileName: outputFileName,
                timestamp: new Date().toLocaleTimeString(),
                type: isPdfToWord ? 'PDF → Word' : 'Word → PDF',
            };
            setHistory((prev) => [historyItem, ...prev].slice(0, 5));

        } catch (err: any) {
            console.error("Conversion error:", err);
            setError(err.message || 'An error occurred during conversion.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.converterCard}>
            <div className={styles.header} style={{ background: headerGradient }}>
                <h2 className={styles.headerTitle}>{title}</h2>
            </div>

            <div className={styles.body}>
                <FileDropzone
                    onFileSelect={handleFileSelect}
                    accept={accept}
                    type={type}
                />

                {loading && (
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${progress}%` }}
                            >
                                {progress}%
                            </div>
                        </div>
                        <p className={styles.loadingText}>Converting... Please wait.</p>
                    </div>
                )}

                {message && (
                    <div className={`${styles.alert} ${styles.alertSuccess}`}>
                        <CheckCircle size={20} />
                        <span>{message}</span>
                    </div>
                )}

                {error && (
                    <div className={`${styles.alert} ${styles.alertError}`}>
                        <XCircle size={20} />
                        <span>{error}</span>
                    </div>
                )}

                <button
                    className={styles.convertButton}
                    onClick={handleConvert}
                    disabled={loading || !file}
                    style={{ background: isPdfToWord ? undefined : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
                >
                    {loading ? (
                        'Processing...'
                    ) : (
                        <>
                            <Download size={20} /> Convert Now
                        </>
                    )}
                </button>

                {history.length > 0 && (
                    <div className={styles.history}>
                        <h6 className={styles.historyTitle}>
                            <Clock size={16} /> Recent Conversions
                        </h6>
                        <div className={styles.historyList}>
                            {history.map((item) => (
                                <div key={item.id} className={styles.historyItem}>
                                    <div>
                                        <p className={styles.historyName}>{item.outputFileName}</p>
                                        <p className={styles.historyMeta}>
                                            {item.type} • {item.timestamp}
                                        </p>
                                    </div>
                                    <CheckCircle size={16} className="text-success" color="#48bb78" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Converter;
