import React, { useState, useCallback } from 'react';
import { Upload, File, X, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FileDropzone = ({ onFileSelect, accept, type }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            handleFileSelection(file);
        }
    }, [accept]);

    const handleFileSelection = (file) => {
        // Validate file type
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        if (!accept.includes(fileExtension)) {
            alert(`Invalid file type. Please select a ${accept} file.`);
            return;
        }

        // Validate file size (50MB max)
        const maxSize = 50 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('File size exceeds 50MB limit.');
            return;
        }

        setSelectedFile(file);
        onFileSelect(file);
    };

    const handleFileInput = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileSelection(files[0]);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        onFileSelect(null);
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    return (
        <div className="mb-4">
            <motion.div
                className={`dropzone p-8 text-center cursor-pointer transition-all ${isDragging ? 'active' : ''
                    }`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById(`file-input-${type}`).click()}
                whileHover={{ scale: selectedFile ? 1 : 1.01 }}
                whileTap={{ scale: 0.99 }}
                animate={isDragging ? { scale: 1.02 } : {}}
            >
                <input
                    id={`file-input-${type}`}
                    type="file"
                    accept={accept}
                    onChange={handleFileInput}
                    className="hidden"
                />

                <AnimatePresence mode="wait">
                    {!selectedFile ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                animate={isDragging ? { y: [-5, 5, -5] } : { y: 0 }}
                                transition={{ duration: 0.6, repeat: isDragging ? Infinity : 0 }}
                            >
                                <Upload
                                    className="mx-auto mb-4"
                                    size={56}
                                    style={{
                                        color: isDragging ? 'hsl(245, 75%, 70%)' : '#9ca3af',
                                        transition: 'color 0.3s'
                                    }}
                                />
                            </motion.div>
                            <p className="text-lg font-semibold mb-2" style={{
                                color: isDragging ? 'hsl(245, 75%, 70%)' : 'var(--text-primary)',
                                transition: 'color 0.3s'
                            }}>
                                {isDragging ? 'Drop your file here!' : 'Drag & drop your file here'}
                            </p>
                            <p className="text-sm text-gray-500 mb-3">or click to browse</p>
                            <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
                                <span className="badge" style={{
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-secondary)',
                                    padding: '6px 12px',
                                    fontSize: '0.75rem',
                                    fontWeight: 500
                                }}>
                                    {accept}
                                </span>
                                <span className="badge" style={{
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-secondary)',
                                    padding: '6px 12px',
                                    fontSize: '0.75rem',
                                    fontWeight: 500
                                }}>
                                    Max 50MB
                                </span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="selected"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card p-4"
                            style={{
                                background: 'white',
                                borderRadius: 'var(--border-radius-md)',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: 'var(--border-radius-md)',
                                            background: 'var(--primary-gradient)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <FileCheck size={28} color="white" />
                                    </motion.div>
                                    <div className="text-left">
                                        <p className="font-semibold mb-1" style={{
                                            color: 'var(--text-primary)',
                                            fontSize: '1rem',
                                            maxWidth: '250px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {selectedFile.name}
                                        </p>
                                        <p className="text-sm mb-0" style={{ color: 'var(--text-muted)' }}>
                                            {formatFileSize(selectedFile.size)}
                                        </p>
                                    </div>
                                </div>
                                <motion.button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveFile();
                                    }}
                                    className="btn-premium"
                                    style={{
                                        background: 'var(--danger-gradient)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        flexShrink: 0
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={20} color="white" />
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default FileDropzone;
