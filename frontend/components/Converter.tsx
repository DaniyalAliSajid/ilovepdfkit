'use client';

import { useState } from 'react';
import { Download, CheckCircle, XCircle, Clock, RotateCw, RotateCcw, FileCheck } from 'lucide-react';
import { saveAs } from 'file-saver';
import FileDropzone from './FileDropzone';
import styles from './Converter.module.css';

interface ConverterProps {
    type: 'pdf-to-word' | 'word-to-pdf' | 'pdf-to-jpg' | 'jpg-to-pdf' | 'ppt-to-pdf' | 'rotate-pdf';
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
    const [files, setFiles] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);



    const config = {
        'pdf-to-word': {
            title: 'PDF to Word Converter',
            accept: '.pdf',
            endpoint: '/api/convert/pdf-to-word',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            extension: '.docx',
            multi: false
        },
        'word-to-pdf': {
            title: 'Word to PDF Converter',
            accept: '.docx',
            endpoint: '/api/convert/word-to-pdf',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            extension: '.pdf',
            multi: false
        },
        'pdf-to-jpg': {
            title: 'PDF to JPG Converter',
            accept: '.pdf',
            endpoint: '/api/convert/pdf-to-jpg',
            gradient: 'linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
            extension: '.zip',
            multi: false
        },
        'jpg-to-pdf': {
            title: 'JPG to PDF Converter',
            accept: '.jpg,.jpeg,.png',
            endpoint: '/api/convert/jpg-to-pdf',
            gradient: 'linear-gradient(135deg, #00DBDE 0%, #FC00FF 100%)',
            extension: '.pdf',
            multi: true
        },
        'ppt-to-pdf': {
            title: 'PowerPoint to PDF Converter',
            accept: '.ppt,.pptx',
            endpoint: '/api/convert/ppt-to-pdf',
            gradient: 'linear-gradient(135deg, #ff8c00 0%, #e67e22 100%)',
            extension: '.pdf',
            multi: false
        },
        'rotate-pdf': {
            title: 'Rotate PDF Document',
            accept: '.pdf',
            endpoint: '/api/convert/rotate-pdf',
            gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
            extension: '.pdf',
            multi: false
        }
    }[type];

    const [angle, setAngle] = useState(0);



    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    if (!config) return null;
    const endpoint = `${baseUrl}${config.endpoint}`;


    const handleFileSelect = (selectedFile: File | File[] | null) => {
        if (Array.isArray(selectedFile)) {
            setFiles(selectedFile);
            setFile(selectedFile[0] || null);
        } else {
            setFile(selectedFile);
            setFiles(selectedFile ? [selectedFile] : []);
        }
        setMessage(null);
        setError(null);
        setProgress(0);
    };

    const handleConvert = async () => {
        if (!file && files.length === 0) {
            setError('Please select at least one file.');
            return;
        }

        setLoading(true);
        setProgress(10);
        setMessage(null);
        setError(null);

        const formData = new FormData();
        if (config.multi) {
            files.forEach(f => formData.append('files', f));
        } else {
            formData.append('file', file!);
        }

        if (type === 'rotate-pdf') {
            formData.append('angle', angle.toString());
        }


        try {
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

            if (blob.size === 0) {
                throw new Error("Received an empty file from the server.");
            }

            const originalFile = config.multi ? files[0] : file;
            const originalName = originalFile?.name || 'document';
            const nameParts = originalName.split('.');
            if (nameParts.length > 1) nameParts.pop();
            const baseName = nameParts.join('.');
            const outputFileName = `${baseName}${config.extension}`;

            saveAs(blob, outputFileName);
            setMessage(`Conversion successful! Downloaded ${outputFileName}`);

            const historyItem: HistoryItem = {
                id: Date.now(),
                fileName: config.multi ? `${files.length} images` : file!.name,
                outputFileName: outputFileName,
                timestamp: new Date().toLocaleTimeString(),
                type: type.toUpperCase().replace(/-/g, ' → '),
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
            <div className={styles.header} style={{ background: config.gradient }}>
                <h2 className={styles.headerTitle}>{config.title}</h2>
            </div>

            <div className={styles.body}>
                <FileDropzone
                    onFileSelect={handleFileSelect}
                    accept={config.accept}
                    type={type}
                    multiple={config.multi}
                />

                {loading && (
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${progress}%`, background: config.gradient }}
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

                {type === 'rotate-pdf' && (
                    <div className={styles.rotationContainer}>
                        <div className={styles.rotationHeader}>
                            <p className={styles.optionsTitle}>Rotation</p>
                            <button className={styles.resetButton} onClick={() => setAngle(0)}>Reset all</button>
                        </div>

                        <div className={styles.rotationControls}>
                            <button
                                className={`${styles.rotateBox} ${styles.rotateRight}`}
                                onClick={() => setAngle((prev) => (prev + 90) % 360)}
                            >
                                <div className={styles.rotateIconBox}>
                                    <RotateCw size={24} />
                                </div>
                                <span>RIGHT</span>
                            </button>

                            <button
                                className={`${styles.rotateBox} ${styles.rotateLeft}`}
                                onClick={() => setAngle((prev) => (prev + 270) % 360)}
                            >
                                <div className={styles.rotateIconBox}>
                                    <RotateCcw size={24} />
                                </div>
                                <span>LEFT</span>
                            </button>
                        </div>

                        <div className={styles.previewContainer}>
                            <p className={styles.previewLabel}>Current Rotation: {angle}°</p>
                            <div
                                className={styles.pdfPreview}
                                style={{ transform: `rotate(${angle}deg)` }}
                            >
                                <FileCheck size={64} />
                            </div>
                        </div>
                    </div>
                )}

                <button
                    className={styles.convertButton}
                    onClick={handleConvert}
                    disabled={loading || (!file && files.length === 0)}
                    style={{ background: config.gradient }}
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
