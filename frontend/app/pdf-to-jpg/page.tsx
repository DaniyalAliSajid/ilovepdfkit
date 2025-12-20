import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDF to JPG Converter - Document Converter Pro',
    description: 'Extract images or convert PDF pages into high-quality JPG images.',
};

export default function PdfToJpgPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-jpg" />
        </div>
    );
}
