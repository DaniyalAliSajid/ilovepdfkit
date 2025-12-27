import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Add Page Numbers - Number PDF Pages Online | ILOVEPDFKIT',
    description: 'Add page numbers to your PDF documents. Customize position, formatting, and typography. Free tool to paginate PDF files.',
};

export default function AddPageNumbersPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="add-page-numbers" />
        </div>
    );
}
