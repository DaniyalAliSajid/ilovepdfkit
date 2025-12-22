import Converter from "@/components/Converter";
import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Merge PDF - ILOVEPDFKIT',
    description: 'Combine multiple PDF files into one single document.',
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
