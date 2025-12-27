import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'JPG to PDF Converter - Combine Images to PDF | ILOVEPDFKIT',
    description: 'Convert JPG, PNG, and other images to PDF. Merge multiple photos into one PDF file. Auto-alignment and compression included.',
    keywords: ['JPG to PDF', 'convert JPG to PDF', 'images to PDF', 'photos to PDF', 'merge images PDF', 'combine JPG PDF', 'online JPG to PDF converter', 'free JPG to PDF'],
};

export default function JpgToPdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="jpg-to-pdf" />
        </div>
    );
}
