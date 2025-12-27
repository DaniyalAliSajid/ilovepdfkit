import Converter from "@/components/Converter";
import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'PDF to PPT - Convert PDF to PowerPoint Online | ILOVEPDFKIT',
    description: 'Convert PDF to editable PowerPoint slides (PPTX). Turn your PDF documents into presentations instantly.',
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
