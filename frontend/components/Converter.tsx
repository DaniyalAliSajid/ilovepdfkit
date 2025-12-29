'use client';

import { useState } from 'react';
import { Download, CheckCircle, XCircle, Clock, RotateCw, RotateCcw, FileCheck } from 'lucide-react';
import { saveAs } from 'file-saver';
import FileDropzone from './FileDropzone';
import styles from './Converter.module.css';

interface ConverterProps {
    type: 'pdf-to-word' | 'word-to-pdf' | 'pdf-to-jpg' | 'jpg-to-pdf' | 'ppt-to-pdf' | 'rotate-pdf' | 'merge-pdf' | 'pdf-to-ppt' | 'add-page-numbers' | 'pdf-to-excel' | 'excel-to-pdf' | 'delete-pdf-pages';
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
            gradient: '#6D28D9',
            color: '#6D28D9',
            extension: '.docx',
            multi: false
        },
        'word-to-pdf': {
            title: 'Word to PDF Converter',
            accept: '.docx',
            endpoint: '/api/convert/word-to-pdf',
            gradient: '#BE123C',
            color: '#BE123C',
            extension: '.pdf',
            multi: false
        },
        'pdf-to-jpg': {
            title: 'PDF to JPG Converter',
            accept: '.pdf',
            endpoint: '/api/convert/pdf-to-jpg',
            gradient: '#C2410C',
            color: '#C2410C',
            extension: '.zip',
            multi: false
        },
        'jpg-to-pdf': {
            title: 'JPG to PDF Converter',
            accept: '.jpg,.jpeg,.png',
            endpoint: '/api/convert/jpg-to-pdf',
            gradient: '#1E40AF',
            color: '#1E40AF',
            extension: '.pdf',
            multi: true
        },
        'ppt-to-pdf': {
            title: 'PowerPoint to PDF Converter',
            accept: '.ppt,.pptx',
            endpoint: '/api/convert/ppt-to-pdf',
            gradient: '#A16207',
            color: '#A16207',
            extension: '.pdf',
            multi: false
        },
        'rotate-pdf': {
            title: 'Rotate PDF Document',
            accept: '.pdf',
            endpoint: '/api/convert/rotate-pdf',
            gradient: '#B91C1C',
            color: '#B91C1C',
            extension: '.pdf',
            multi: false
        },
        'merge-pdf': {
            title: 'Merge PDF Files',
            accept: '.pdf',
            endpoint: '/api/convert/merge-pdf',
            gradient: '#6D28D9',
            color: '#6D28D9',
            extension: '.pdf',
            multi: true
        },
        'pdf-to-ppt': {
            title: 'PDF to PowerPoint Converter',
            accept: '.pdf',
            endpoint: '/api/convert/pdf-to-ppt',
            gradient: '#C2410C',
            color: '#C2410C',
            extension: '.pptx',
            multi: false
        },
        'add-page-numbers': {
            title: 'Add Page Numbers to PDF',
            accept: '.pdf',
            endpoint: '/api/convert/add-page-numbers',
            gradient: '#e11d48',
            color: '#e11d48',
            extension: '.pdf',
            multi: false
        },
        'pdf-to-excel': {
            title: 'PDF to Excel Converter',
            accept: '.pdf',
            endpoint: '/api/convert/pdf-to-excel',
            gradient: '#10b981',
            color: '#10b981',
            extension: '.xlsx',
            multi: false
        },
        'excel-to-pdf': {
            title: 'Excel to PDF Converter',
            accept: '.xlsx,.xls',
            endpoint: '/api/convert/excel-to-pdf',
            gradient: '#059669',
            color: '#059669',
            extension: '.pdf',
            multi: false
        },
        'delete-pdf-pages': {
            title: 'Delete PDF Pages',
            accept: '.pdf',
            endpoint: '/api/convert/delete-pdf-pages',
            gradient: '#ef4444',
            color: '#ef4444',
            extension: '.pdf',
            multi: false
        }
    }[type];

    const [angle, setAngle] = useState(0);
    const [compressionLevel, setCompressionLevel] = useState<string>('recommended');

    // Page Number State
    const [pageNumberPosition, setPageNumberPosition] = useState<string>('bottom-center');
    const [pageNumberMargin, setPageNumberMargin] = useState<string>('recommended');
    const [firstNumber, setFirstNumber] = useState<number>(1);
    const [pageMode, setPageMode] = useState<string>('single');
    const [isCoverPage, setIsCoverPage] = useState<boolean>(false);


    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
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
        setCompressionLevel('recommended');
        // Reset page number options
        setPageNumberPosition('bottom-center');
        setPageNumberMargin('recommended');
        setFirstNumber(1);
        setPageMode('single');
        setIsCoverPage(false);
    };

    const handleConvert = async () => {
        if (!file && files.length === 0) {
            setError('Please select at least one file.');
            return;
        }

        if (type === 'merge-pdf' && files.length < 2) {
            setError('Please select at least two PDF files to merge.');
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

        if (type === 'add-page-numbers') {
            formData.append('position', pageNumberPosition);
            formData.append('margin', pageNumberMargin);
            formData.append('firstNumber', firstNumber.toString());
            formData.append('pageMode', pageMode);
            formData.append('isCoverPage', isCoverPage.toString());
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

            const originalName = file?.name || 'document';
            const nameParts = originalName.split('.');
            if (nameParts.length > 1) nameParts.pop();
            const baseName = nameParts.join('.');
            let outputFileName;
            if (type === 'merge-pdf') {
                outputFileName = 'merged.pdf';
            } else if (config.multi) {
                outputFileName = `converted_images.pdf`;
            } else {
                outputFileName = `${baseName}${config.extension}`;
            }

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
                    themeColor={config.color}
                    themeGradient={config.gradient}
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
                            <button className={styles.resetButton} style={{ color: config.color }} onClick={() => setAngle(0)}>Reset all</button>
                        </div>

                        <div className={styles.rotationControls}>
                            <button
                                className={`${styles.rotateBox} ${styles.rotateRight}`}
                                onClick={() => setAngle((prev) => (prev + 90) % 360)}
                            >
                                <div className={styles.rotateIconBox} style={{ background: config.color }}>
                                    <RotateCw size={24} />
                                </div>
                                <span style={{ color: config.color }}>RIGHT</span>
                            </button>

                            <button
                                className={`${styles.rotateBox} ${styles.rotateLeft}`}
                                onClick={() => setAngle((prev) => (prev + 270) % 360)}
                            >
                                <div className={styles.rotateIconBox} style={{ background: config.color, filter: 'brightness(0.9)' }}>
                                    <RotateCcw size={24} />
                                </div>
                                <span style={{ color: config.color, filter: 'brightness(0.9)' }}>LEFT</span>
                            </button>
                        </div>

                        <div className={styles.previewContainer}>
                            <p className={styles.previewLabel}>Current Rotation: {angle}°</p>
                            <div
                                className={styles.pdfPreview}
                                style={{ transform: `rotate(${angle}deg)`, color: config.color }}
                            >
                                <FileCheck size={64} />
                            </div>
                        </div>
                    </div>
                )}

                {type === 'add-page-numbers' && (
                    <div className={styles.optionsContainer}>
                        <div className={styles.optionSection}>
                            <p className={styles.optionLabel}>Page mode</p>
                            <div className={styles.pageModeGroup}>
                                <label className={styles.pageModeOption}>
                                    <input
                                        type="radio"
                                        name="pageMode"
                                        value="single"
                                        checked={pageMode === 'single'}
                                        onChange={(e) => setPageMode(e.target.value)}
                                    />
                                    Single page
                                </label>
                                <label className={styles.pageModeOption}>
                                    <input
                                        type="radio"
                                        name="pageMode"
                                        value="facing"
                                        checked={pageMode === 'facing'}
                                        onChange={(e) => setPageMode(e.target.value)}
                                    />
                                    Facing pages
                                </label>
                            </div>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={isCoverPage}
                                    onChange={(e) => setIsCoverPage(e.target.checked)}
                                />
                                First page is cover page
                            </label>
                        </div>

                        <div className={styles.gridContainer}>
                            <div className={styles.formGroup}>
                                <p className={styles.optionLabel}>Position:</p>
                                <div className={styles.positionGrid}>
                                    {['top-left', 'top-center', 'top-right',
                                        'middle-left', 'middle-center', 'middle-right',
                                        'bottom-left', 'bottom-center', 'bottom-right'].map((pos) => {
                                            if (pos.includes('middle')) return <div key={pos} style={{ visibility: 'hidden' }} />;
                                            const isActive = pageNumberPosition === pos;
                                            return (
                                                <div
                                                    key={pos}
                                                    className={`${styles.positionCell} ${isActive ? styles.selected : ''}`}
                                                    style={isActive ? { background: config.color, borderColor: config.color } : {}}
                                                    onClick={() => setPageNumberPosition(pos)}
                                                />
                                            );
                                        })}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <p className={styles.optionLabel}>Margin:</p>
                                <select
                                    className={styles.selectInput}
                                    value={pageNumberMargin}
                                    onChange={(e) => setPageNumberMargin(e.target.value)}
                                >
                                    <option value="small">Small</option>
                                    <option value="recommended">Recommended</option>
                                    <option value="big">Big</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.optionSection}>
                            <p className={styles.optionLabel}>Pages</p>
                            <div className={styles.paginationInput}>
                                <span>First number:</span>
                                <input
                                    type="number"
                                    className={styles.numberInput}
                                    value={firstNumber}
                                    min="1"
                                    onChange={(e) => setFirstNumber(parseInt(e.target.value) || 1)}
                                />
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
