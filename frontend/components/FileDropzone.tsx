'use client';

import { useState, useCallback, ChangeEvent } from 'react';
import { Upload, FileCheck, X } from 'lucide-react';
import styles from './FileDropzone.module.css';

interface FileDropzoneProps {
    onFileSelect: (file: File | null) => void;
    accept: string;
    type: string;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileSelect, accept, type }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            handleFileSelection(files[0]);
        }
    }, [accept]);

    const handleFileSelection = (file: File) => {
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        if (!accept.includes(fileExtension)) {
            alert(`Invalid file type. Please select a ${accept} file.`);
            return;
        }

        const maxSize = 50 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('File size exceeds 50MB limit.');
            return;
        }

        setSelectedFile(file);
        onFileSelect(file);
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileSelection(files[0]);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        onFileSelect(null);
        // Reset file input
        const input = document.getElementById(`file-input-${type}`) as HTMLInputElement;
        if (input) input.value = '';
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    if (selectedFile) {
        return (
            <div className={styles.selectedFile}>
                <div className={styles.fileInfo}>
                    <div className={styles.fileIcon}>
                        <FileCheck size={28} />
                    </div>
                    <div>
                        <p className={styles.fileName}>{selectedFile.name}</p>
                        <p className={styles.fileSize}>{formatFileSize(selectedFile.size)}</p>
                    </div>
                </div>
                <button onClick={handleRemoveFile} className={styles.removeButton}>
                    <X size={20} />
                </button>
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
                onChange={handleFileInput}
                style={{ display: 'none' }}
            />
            <Upload className={styles.icon} size={56} />
            <p className={styles.text}>
                {isDragging ? 'Drop your file here!' : 'Drag & drop your file here'}
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
