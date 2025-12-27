import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Word to PDF Converter - Convert DOCX to PDF Online | ILOVEPDFKIT',
    description: 'Turn Microsoft Word documents into PDF files instantly. Preserve original formatting, fonts, and layout. 100% Free and Secure.',
};

export default function WordToPdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="word-to-pdf" />
        </div>
    );
}
