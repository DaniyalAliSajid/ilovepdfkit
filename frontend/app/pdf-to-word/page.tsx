import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDF to Word Converter - ILOVEPDFKIT',
    description: 'Convert PDF files to editable Word documents instantly.',
};

export default function PdfToWordPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-word" />
        </div>
    );
}
