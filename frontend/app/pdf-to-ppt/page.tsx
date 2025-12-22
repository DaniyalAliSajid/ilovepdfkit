import Converter from "@/components/Converter";
import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'PDF to PPT Converter - ILOVEPDFKIT',
    description: 'Convert PDF documents to PowerPoint presentations.',
};

export default function PdfToPptPage() {
    return (
        <div className={styles.main} style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <div className={styles.container}>
                <Converter type="pdf-to-ppt" />
            </div>
        </div>
    );
}
