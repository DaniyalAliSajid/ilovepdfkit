'use client';

import { useState, useCallback, ChangeEvent } from 'react';
import { Upload, FileCheck, X } from 'lucide-react';
import styles from './FileDropzone.module.css';

interface FileDropzoneProps {
    onFileSelect: (file: File | File[] | null) => void;
    accept: string;
    type: string;
    multiple?: boolean;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileSelect, accept, type, multiple = false }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleDragEnter = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        if (droppedFiles.length > 0) {
            handleFileSelection(multiple ? droppedFiles : [droppedFiles[0]]);
        }
    }, [accept, multiple]);

    const handleFileSelection = (files: File[]) => {
        const validFiles: File[] = [];
        const maxSize = 50 * 1024 * 1024;
        const acceptedTypes = accept.split(',').map(t => t.trim().toLowerCase());

        for (const file of files) {
            const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
            if (!acceptedTypes.some(type => fileExtension.includes(type) || type === '.*')) {
                alert(`Invalid file type: ${file.name}. Please select a ${accept} file.`);
                continue;
            }

            if (file.size > maxSize) {
                alert(`File too large: ${file.name}. Max size is 50MB.`);
                continue;
            }
            validFiles.push(file);
        }

        if (validFiles.length > 0) {
            const newFiles = multiple ? [...selectedFiles, ...validFiles] : [validFiles[0]];
            setSelectedFiles(newFiles);
            onFileSelect(multiple ? newFiles : newFiles[0]);
        }
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileSelection(Array.from(files));
        }
    };

    const handleRemoveFile = (index: number) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
        onFileSelect(newFiles.length > 0 ? (multiple ? newFiles : newFiles[0]) : null);

        if (newFiles.length === 0) {
            const input = document.getElementById(`file-input-${type}`) as HTMLInputElement;
            if (input) input.value = '';
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    if (selectedFiles.length > 0) {
        return (
            <div className={styles.selectedFilesContainer}>
                {selectedFiles.map((file, idx) => (
                    <div key={`${file.name}-${idx}`} className={styles.selectedFile}>
                        <div className={styles.fileInfo}>
                            <div className={styles.fileIcon}>
                                <FileCheck size={24} />
                            </div>
                            <div className={styles.fileDetails}>
                                <p className={styles.fileName}>{file.name}</p>
                                <p className={styles.fileSize}>{formatFileSize(file.size)}</p>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveFile(idx)} className={styles.removeButton}>
                            <X size={18} />
                        </button>
                    </div>
                ))}
                {multiple && (
                    <button
                        className={styles.addMoreButton}
                        onClick={() => document.getElementById(`file-input-${type}`)?.click()}
                    >
                        + Add more images
                    </button>
                )}
            </div>
        );
    }

    return (
        <div
            className={`${styles.dropzone} ${isDragging ? styles.active : ''}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById(`file-input-${type}`)?.click()}
        >
            <input
                id={`file-input-${type}`}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleFileInput}
                style={{ display: 'none' }}
            />
            <Upload className={styles.icon} size={56} />
            <p className={styles.text}>
                {isDragging ? 'Drop your files here!' : multiple ? 'Drag & drop your images here' : 'Drag & drop your file here'}
            </p>
            <p className={styles.subtext}>or click to browse</p>
            <div className={styles.badgeContainer}>
                <span className={styles.badge}>{accept}</span>
                <span className={styles.badge}>Max 50MB</span>
            </div>
        </div>
    );
};


export default FileDropzone;
