import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDF to JPG Converter - High Quality Images | ILOVEPDFKIT',
    description: 'Convert PDF pages to high-resolution JPG images. Download as individual files or ZIP archive. Fast, free, and secure.',
    keywords: ['PDF to JPG', 'convert PDF to JPG', 'PDF to image', 'PDF converter', 'JPG converter', 'high quality JPG', 'free PDF to JPG', 'online PDF to JPG'],
};

export default function PdfToJpgPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-jpg" />
        </div>
    );
}
