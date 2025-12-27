import Converter from "@/components/Converter";
import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Merge PDF - Combine PDF Files Online for Free | ILOVEPDFKIT',
    description: 'Combine multiple PDF files into one single document. Drag and drop to reorder. Fast, secure, and zero limitations.',
};

export default function MergePdfPage() {
    return (
        <div className={styles.main} style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <div className={styles.container}>
                <Converter type="merge-pdf" />
            </div>
        </div>
    );
}
