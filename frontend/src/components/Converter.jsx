import React, { useState } from 'react';
import { Card, Button, ProgressBar, Alert } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Download, Clock } from 'lucide-react';
import { saveAs } from 'file-saver';
import FileDropzone from './FileDropzone';

const Converter = ({ type }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [history, setHistory] = useState([]);

    const isPdfToWord = type === 'pdf-to-word';
    const title = isPdfToWord ? 'PDF to Word Converter' : 'Word to PDF Converter';
    const accept = isPdfToWord ? '.pdf' : '.docx';
    const endpoint = isPdfToWord
        ? 'http://localhost:5000/api/convert/pdf-to-word'
        : 'http://localhost:5000/api/convert/word-to-pdf';

    const handleFileSelect = (selectedFile) => {
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
        setProgress(0);
        setMessage(null);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Use fetch API for cleaner binary handling and to bypass Axios issues
            // This ensures we get the exact stream sent by the server
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData
            });

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

            // Validate File Integrity (Magic Bytes)
            // DOCX must start with 'PK' (0x50, 0x4B)
            // PDF must start with '%PDF' (0x25, 0x50)
            const headerBuffer = await blob.slice(0, 4).arrayBuffer();
            const headerBytes = new Uint8Array(headerBuffer);
            let isValid = false;

            if (isPdfToWord) {
                // Check if it's a ZIP/DOCX
                if (headerBytes[0] === 0x50 && headerBytes[1] === 0x4B) isValid = true;
            } else {
                // Check if it's a PDF
                if (headerBytes[0] === 0x25 && headerBytes[1] === 0x50) isValid = true;
            }

            if (!isValid) {
                throw new Error("Validation failed: The server returned a corrupted file (invalid header).");
            }

            // Deterministic Filename: Always use input filename + new extension
            const lastDotIndex = file.name.lastIndexOf('.');
            const baseName = lastDotIndex !== -1 ? file.name.substring(0, lastDotIndex) : file.name;
            const extension = isPdfToWord ? '.docx' : '.pdf';
            const outputFileName = baseName + extension;

            // Explicitly set MIME type to ensure browser handling
            const mimeType = isPdfToWord
                ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                : 'application/pdf';

            const finalBlob = new Blob([blob], { type: mimeType });

            // Trigger Download using file-saver (more robust than anchor tag)
            saveAs(finalBlob, outputFileName);

            setMessage(`Conversion successful! Downloaded ${outputFileName}`);

            // Add to history
            const historyItem = {
                id: Date.now(),
                fileName: file.name,
                outputFileName: outputFileName,
                timestamp: new Date().toLocaleTimeString(),
                type: isPdfToWord ? 'PDF → Word' : 'Word → PDF'
            };
            setHistory(prev => [historyItem, ...prev].slice(0, 5));

        } catch (err) {
            console.error("Conversion error:", err);
            setError(err.message || 'An error occurred during conversion.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fade-in"
        >
            <Card className="shadow-lg border-0 rounded-lg overflow-hidden card-hover">
                <Card.Header
                    className={`text-white text-center py-4`}
                    style={{
                        background: isPdfToWord
                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    }}
                >
                    <h2 className="text-2xl font-bold mb-0">{title}</h2>
                </Card.Header>

                <Card.Body className="p-5 bg-white">
                    <FileDropzone
                        onFileSelect={handleFileSelect}
                        accept={accept}
                        type={type}
                    />

                    {loading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-4"
                        >
                            <ProgressBar
                                animated
                                now={progress}
                                label={`${progress}%`}
                                variant={isPdfToWord ? 'info' : 'danger'}
                                style={{ height: '25px', fontSize: '14px' }}
                            />
                            <p className="text-center text-gray-500 mt-2 text-sm">
                                Converting... Please wait.
                            </p>
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <Alert variant="success" className="d-flex align-items-center">
                                    <CheckCircle className="me-2" size={20} />
                                    {message}
                                </Alert>
                            </motion.div>
                        )}

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <Alert variant="danger" className="d-flex align-items-center">
                                    <XCircle className="me-2" size={20} />
                                    {error}
                                </Alert>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="d-grid gap-2">
                        <Button
                            size="lg"
                            onClick={handleConvert}
                            disabled={loading || !file}
                            className="btn-premium"
                            style={{
                                background: isPdfToWord
                                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                border: 'none',
                                fontWeight: '600',
                                padding: '12px'
                            }}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" />
                                    Converting...
                                </>
                            ) : (
                                <>
                                    <Download className="me-2" size={20} style={{ display: 'inline' }} />
                                    Convert Now
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Conversion History */}
                    {history.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-4"
                        >
                            <h6 className="text-gray-600 font-semibold mb-3 d-flex align-items-center">
                                <Clock className="me-2" size={18} />
                                Recent Conversions
                            </h6>
                            <div className="space-y-2">
                                {history.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="p-3 bg-gray-50 rounded-lg"
                                    >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800 mb-0">
                                                    {item.fileName}
                                                </p>
                                                <p className="text-xs text-gray-500 mb-0">
                                                    {item.type} • {item.timestamp}
                                                </p>
                                            </div>
                                            <CheckCircle className="text-success" size={20} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </Card.Body>
            </Card>
        </motion.div>
    );
};

export default Converter;
