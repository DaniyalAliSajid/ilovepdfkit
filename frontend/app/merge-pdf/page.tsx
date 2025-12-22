import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Merge PDF - ILOVEPDFKIT',
    description: 'Combine multiple PDF files into one single document.',
};

export default function MergePdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="merge-pdf" />
        </div>
    );
}
