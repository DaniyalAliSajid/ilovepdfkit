import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'JPG to PDF Converter - ILOVEPDFKIT',
    description: 'Combine multiple images into a single professional PDF document.',
};

export default function JpgToPdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="jpg-to-pdf" />
        </div>
    );
}
