import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Add Page Numbers to PDF - ILOVEPDFKIT',
    description: 'Add page numbers to your PDF documents easily. Custom position, margin, and format.',
};

export default function AddPageNumbersPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="add-page-numbers" />
        </div>
    );
}
