import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDF to PPT Converter - ILOVEPDFKIT',
    description: 'Convert PDF documents to PowerPoint presentations.',
};

export default function PdfToPptPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-ppt" />
        </div>
    );
}
