import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PPT to PDF Converter - Document Converter Pro',
    description: 'Convert PowerPoint presentations to PDF while keeping animations and layout.',
};

export default function PptToPdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="ppt-to-pdf" />
        </div>
    );
}
