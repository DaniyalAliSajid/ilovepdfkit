'use client';

import { useState, useEffect } from 'react';
import { FileText, Wand2, Copy, Check, Download, AlertCircle, RefreshCw, Share2, Clock, AlignLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import FileDropzone from './FileDropzone';
import styles from './Converter.module.css';

const AISummarizer = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [summary, setSummary] = useState<string | null>(null);
    const [displayedSummary, setDisplayedSummary] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [typing, setTyping] = useState(false);

    const themeColor = '#8B5CF6';
    const themeGradient = 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)';
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    
    const maxPages = 20;
    const maxFileSize = 10 * 1024 * 1024; // 10MB

    const handleFileSelect = (selectedFile: File | File[] | null) => {
        const fileToUse = Array.isArray(selectedFile) ? selectedFile[0] : selectedFile;
        
        if (fileToUse && fileToUse.size > maxFileSize) {
            setError(`File is too large for free AI mode. Please use a PDF smaller than 10MB.`);
            setFile(null);
            return;
        }

        setFile(fileToUse || null);
        setSummary(null);
        setDisplayedSummary('');
        setError(null);
    };

    const handleSummarize = async () => {
        if (!file) {
            setError('Please select a PDF file first.');
            return;
        }

        setLoading(true);
        setError(null);
        setSummary(null);
        setDisplayedSummary('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${baseUrl}/api/convert/ai-summarize`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error(data.error || 'Daily free limit reached. Please try again tomorrow.');
                }
                throw new Error(data.error || 'AI Service is temporarily busy. Please try again.');
            }

            setSummary(data.summary);
            setDisplayedSummary(data.summary);
            if (data.warning) {
                setError(`Note: ${data.warning}`); // Use error box for the warning
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred. The AI server might be starting up, please try again in 30 seconds.');
        } finally {
            setLoading(false);
        }
    };


    const handleCopy = () => {
        if (summary) {
            navigator.clipboard.writeText(summary);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        if (summary) {
            const blob = new Blob([summary], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${file?.name.replace('.pdf', '')}_summary.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };

    // Calculate reading time
    const readingTime = summary ? Math.ceil(summary.split(' ').length / 200) : 0;
    const wordCount = summary ? summary.split(' ').length : 0;

    return (
        <div className={`${styles.converterCard} ${styles.glassCard}`} style={{ maxWidth: '800px' }}>
            <div className={styles.header} style={{ background: themeGradient }}>
                <h2 className={styles.headerTitle}>AI PDF Summarizer</h2>
                <p style={{ opacity: 0.9, fontSize: '0.9rem', marginTop: '0.5rem' }}>Extract key insights and summaries perfectly</p>
            </div>

            <div className={styles.body}>
                {!summary && !loading && (
                    <FileDropzone
                        onFileSelect={handleFileSelect}
                        accept=".pdf"
                        type="summarizer"
                        themeColor={themeColor}
                        themeGradient={themeGradient}
                    />
                )}

                {loading && (
                    <div className={styles.loadingContainer}>
                        <RefreshCw className={styles.spinning} size={48} color={themeColor} />
                        <p style={{ marginTop: '1.5rem', fontWeight: 600, color: themeColor }}>
                            Analysing document & generating insights...
                        </p>
                        <div className={styles.shimmer} style={{ height: '4px', width: '200px', borderRadius: '2px', marginTop: '1rem' }}></div>
                    </div>
                )}

                {error && (
                    <div className={`${styles.alert} ${styles.alertError}`} style={{ marginTop: '1rem' }}>
                        <AlertCircle size={20} />
                        <span>{error}</span>
                    </div>
                )}

                {file && !summary && !loading && (
                    <button
                        className={styles.convertButton}
                        onClick={handleSummarize}
                        style={{ background: themeGradient, marginTop: '2rem' }}
                    >
                        <Wand2 size={20} /> Summarize PDF
                    </button>
                )}

                {summary && (
                    <div className={styles.resultCard}>
                        <div className={styles.actionBar}>
                            <button onClick={handleCopy} className={styles.actionButton}>
                                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                                {copied ? 'Copied!' : 'Copy Summary'}
                            </button>
                            <button onClick={handleDownload} className={styles.actionButton}>
                                <Download size={16} /> Download
                            </button>
                            <div style={{ flex: 1 }}></div>
                            <div className={styles.actionButton} style={{ cursor: 'default', background: 'none', border: 'none' }}>
                                <Clock size={16} /> {readingTime} min read
                            </div>
                        </div>

                        <div className={styles.markdownBody}>
                            <ReactMarkdown>{displayedSummary}</ReactMarkdown>
                            {typing && <span className={styles.typingDot} style={{ background: themeColor, display: 'inline-block', width: '8px', height: '16px', verticalAlign: 'middle', marginLeft: '4px' }}></span>}
                        </div>

                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.8rem', color: '#6b7280', display: 'flex', gap: '1rem' }}>
                                <span>Words: <strong>{wordCount}</strong></span>
                                <span>File: <strong>{file?.name}</strong></span>
                            </div>
                            <button 
                                className={styles.resetButton} 
                                onClick={() => {setSummary(null); setFile(null); setDisplayedSummary('');}}
                            >
                                Summarize Another
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AISummarizer;
