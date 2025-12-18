import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Word to PDF Converter - Document Converter Pro',
    description: 'Convert Word documents to professional PDF files instantly.',
};

export default function WordToPdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="word-to-pdf" />
        </div>
    );
}
