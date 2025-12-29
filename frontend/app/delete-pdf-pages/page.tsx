'use client';

import { useState } from 'react';
import { Download, Trash2, CheckCircle, XCircle, Upload, Eye, FileX, Zap, Shield, Layout, Target } from 'lucide-react';
import { saveAs } from 'file-saver';
import styles from './page.module.css';
import ToolContent from "@/components/ToolContent";
import FAQ from "@/components/FAQ";
import { getBaseUrl } from '@/utils/api';

interface PageData {
    page_number: number;
    image: string;
    width: number;
    height: number;
}

export default function DeletePdfPagesPage() {
    const steps = [
        {
            title: "How to Delete PDF Pages",
            description: (
                <ol>
                    <li>Upload your PDF file by clicking the upload area or dragging your file.</li>
                    <li>Browse the visual page thumbnails and select those you want to remove.</li>
                    <li>Click "Remove Selected Pages" to process your document.</li>
                    <li>Download your modified PDF file and you're done!</li>
                </ol>
            ),
            icon: Target,
        },
        {
            title: "Visual Page Selection",
            description: "No more guessing! Our tool provides high-quality page thumbnails so you can see exactly which pages you are deleting. Use the eye icon for an even larger preview.",
            icon: Layout,
        },
        {
            title: "Privacy and Security",
            description: "We take your privacy seriously. Your files are protected with SSL encryption and are automatically deleted from our servers shortly after processing.",
            icon: Shield,
        },
        {
            title: "Instant Processing",
            description: "Our high-performance engine removes pages almost instantly, allowing you to get your modified document without any waiting or registration.",
            icon: Zap,
        }
    ];

    const faqs = [
        {
            question: "How do I delete pages from a PDF for free?",
            answer: "Simply upload your PDF to our tool, select the unwanted pages from the visual grid, and click 'Remove Selected Pages'. The tool is 100% free with no registration required."
        },
        {
            question: "Can I remove multiple pages at once?",
            answer: "Yes! You can select multiple individual pages, or use the 'Select All' button to quickly mark all pages and then deselect only the ones you want to keep."
        },
        {
            question: "Can I preview the pages before deleting?",
            answer: "Yes, our tool provides visual thumbnails for every page. You can click the eye icon on any thumbnail to open a larger preview to confirm it's the right page."
        },
        {
            question: "Will the quality of my PDF decrease?",
            answer: "No, our tool removes pages at the document structure level, preserving the original quality, text, and formatting of the remaining pages."
        }
    ];

    const [file, setFile] = useState<File | null>(null);

    const [pages, setPages] = useState<PageData[]>([]);
    const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
    const [loading, setLoading] = useState(false);
    const [loadingPages, setLoadingPages] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [viewingPage, setViewingPage] = useState<PageData | null>(null);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [processedFileName, setProcessedFileName] = useState<string>('');

    const baseUrl = getBaseUrl();

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        setFile(selectedFile);
        setPages([]);
        setSelectedPages(new Set());
        setMessage(null);
        setError(null);
        setResultBlob(null);
        setLoadingPages(true);

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch(`${baseUrl}/api/convert/get-pdf-pages`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to load PDF pages');
            }

            const data = await response.json();
            setPages(data.pages);
        } catch (err: any) {
            setError(err.message || 'Failed to load PDF pages');
        } finally {
            setLoadingPages(false);
        }
    };

    const togglePageSelection = (pageNumber: number) => {
        const newSelected = new Set(selectedPages);
        if (newSelected.has(pageNumber)) {
            newSelected.delete(pageNumber);
        } else {
            newSelected.add(pageNumber);
        }
        setSelectedPages(newSelected);
    };

    const selectAll = () => {
        const allPages = new Set(pages.map(p => p.page_number));
        setSelectedPages(allPages);
    };

    const deselectAll = () => {
        setSelectedPages(new Set());
    };

    const handleDelete = async () => {
        if (!file || selectedPages.size === 0) {
            setError('Please select at least one page to delete');
            return;
        }

        if (selectedPages.size >= pages.length) {
            setError('Cannot delete all pages from PDF');
            return;
        }

        setLoading(true);
        setMessage(null);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('pages_to_delete', Array.from(selectedPages).join(','));

        try {
            const response = await fetch(`${baseUrl}/api/convert/delete-pdf-pages`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Deletion failed');
            }

            const blob = await response.blob();
            setResultBlob(blob);
            setProcessedFileName(`${file.name.replace('.pdf', '')}_modified.pdf`);
            setMessage(`Successfully deleted ${selectedPages.size} page(s)! Click below to download your new PDF.`);
        } catch (err: any) {
            setError(err.message || 'An error occurred during deletion');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (resultBlob && processedFileName) {
            saveAs(resultBlob, processedFileName);
        }
    };

    const resetAll = () => {
        setFile(null);
        setPages([]);
        setSelectedPages(new Set());
        setResultBlob(null);
        setMessage(null);
        setError(null);
        setViewingPage(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Delete PDF Pages</h1>
                <p className={styles.subtitle}>
                    Upload your PDF, select pages to delete, and download the modified document
                </p>
            </div>

            <div className={styles.uploadSection}>
                <label htmlFor="file-upload" className={styles.uploadLabel}>
                    <Upload size={48} />
                    <span className={styles.uploadText}>
                        {file ? file.name : 'Click to upload PDF'}
                    </span>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileSelect}
                        className={styles.fileInput}
                    />
                </label>
            </div>

            {loadingPages && (
                <div className={styles.loadingMessage}>
                    <div className={styles.spinner}></div>
                    <p>Loading PDF pages...</p>
                </div>
            )}

            {pages.length > 0 && !loadingPages && (
                <>
                    <div className={styles.controls}>
                        <div className={styles.selectionInfo}>
                            <p>{selectedPages.size} of {pages.length} pages selected</p>
                        </div>
                        <div className={styles.selectionButtons}>
                            <button onClick={selectAll} className={styles.selectBtn}>
                                Select All
                            </button>
                            <button onClick={deselectAll} className={styles.selectBtn}>
                                Deselect All
                            </button>
                        </div>
                    </div>

                    <div className={styles.pageGrid}>
                        {pages.map((page: PageData) => (
                            <div
                                key={page.page_number}
                                className={`${styles.pageCard} ${selectedPages.has(page.page_number) ? styles.selected : ''}`}
                            >
                                <div className={styles.pageImageContainer} onClick={() => togglePageSelection(page.page_number)}>
                                    <img
                                        src={page.image}
                                        alt={`Page ${page.page_number}`}
                                        className={styles.pageImage}
                                    />
                                    {selectedPages.has(page.page_number) && (
                                        <div className={styles.selectedOverlay}>
                                            <CheckCircle size={48} />
                                        </div>
                                    )}
                                </div>
                                <div className={styles.pageFooter}>
                                    <span className={styles.pageNumber}>Page {page.page_number}</span>
                                    <button
                                        className={styles.viewBtn}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setViewingPage(page);
                                        }}
                                        title="View larger"
                                    >
                                        <Eye size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.actionSection}>
                        {!resultBlob ? (
                            <button
                                onClick={handleDelete}
                                disabled={loading || selectedPages.size === 0}
                                className={styles.deleteButton}
                            >
                                {loading ? (
                                    'Processing...'
                                ) : (
                                    <>
                                        <Trash2 size={20} /> Remove Selected Pages
                                    </>
                                )}
                            </button>
                        ) : (
                            <div className={styles.resultActions}>
                                <button
                                    onClick={handleDownload}
                                    className={styles.downloadButton}
                                >
                                    <Download size={20} /> Download PDF Now
                                </button>
                                <button
                                    onClick={resetAll}
                                    className={styles.resetBtn}
                                >
                                    Start Over
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}

            {viewingPage && (
                <div className={styles.modalOverlay} onClick={() => setViewingPage(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeModal} onClick={() => setViewingPage(null)}>
                            <XCircle size={32} />
                        </button>
                        <div className={styles.modalImageContainer}>
                            <img src={viewingPage.image} alt={`Page ${viewingPage.page_number}`} className={styles.modalImage} />
                        </div>
                        <div className={styles.modalFooter}>
                            <p>Page {viewingPage.page_number}</p>
                            <button
                                className={`${styles.modalSelectBtn} ${selectedPages.has(viewingPage.page_number) ? styles.selected : ''}`}
                                onClick={() => togglePageSelection(viewingPage.page_number)}
                            >
                                {selectedPages.has(viewingPage.page_number) ? 'Deselect Page' : 'Select for Deletion'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {message && (
                <div className={styles.successMessage}>
                    <CheckCircle size={20} />
                    <span>{message}</span>
                </div>
            )}

            {error && (
                <div className={styles.errorMessage}>
                    <XCircle size={20} />
                    <span>{error}</span>
                </div>
            )}

            <ToolContent
                title="The Best PDF Page Remover"
                intro="Manage your PDF documents more effectively by removing unwanted pages visually. Our free online tool makes it easy to trim large PDFs down to just what you need."
                sections={steps}
            />

            <FAQ
                customFaqs={faqs}
                title="Delete PDF Pages FAQs"
                subtitle="Common questions about removing pages from PDF documents"
            />
        </div>
    );
}
