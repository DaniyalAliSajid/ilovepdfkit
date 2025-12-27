import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDF to Word Converter - 100% Free & Editable | ILOVEPDFKIT',
    description: 'Convert PDF files to editable Word documents (DOCX) instantly. Best free online PDF to Word converter with OCR. No signup required.',
};

export default function PdfToWordPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-word" />
        </div>
    );
}
