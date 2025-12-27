import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PPT to PDF - Convert PowerPoint to PDF Online | ILOVEPDFKIT',
    description: 'Convert PowerPoint (PPT, PPTX) to PDF. Preserve slides, layout, and formatting. Make your presentations easy to share.',
};

export default function PptToPdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="ppt-to-pdf" />
        </div>
    );
}
