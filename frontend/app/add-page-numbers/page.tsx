import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Hash, Layout, Printer, Shield } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Add Page Numbers - Number PDF Pages Online | ILOVEPDFKIT',
    description: 'Add page numbers to your PDF documents. Customize position, formatting, and typography. Free tool to paginate PDF files.',
    keywords: ['add page numbers', 'pdf pagination', 'number pdf pages', 'bates numbering', 'page counter', 'pdf footer'],
};

export default function AddPageNumbersPage() {
    const steps = [
        {
            title: "How to Add Page Numbers to PDF",
            description: (
                <ol>
                    <li>Upload your PDF file.</li>
                    <li>Choose the position (e.g., Bottom Right, Top Center).</li>
                    <li>Click 'Add Page Numbers' to process the file.</li>
                    <li>Download your paginated PDF.</li>
                </ol>
            ),
            icon: Hash,
        },
        {
            title: "Customizable Positioning",
            description: "You have full control. Choose where the page numbers appear on the page, select the font style, size, and formatting to match your document's professional look.",
            icon: Layout,
        },
        {
            title: "Ready for Printing",
            description: "Adding page numbers is essential for long documents like contracts, thesis papers, and manuscripts. Ensure your printed documents are organized and easy to reference.",
            icon: Printer,
        },
        {
            title: "Secure Processing",
            description: "Your files are processed securely on our encrypted servers and are automatically deleted after a short period. Your privacy is our priority.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="add-page-numbers" />

            <ToolContent
                title="Add Page Numbers to PDF"
                intro="The easiest way to insert page numbers into your PDF documents. Customize position and style in seconds."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I add page numbers to a PDF?",
                        answer: "Upload your document, select the desired position (top, bottom, left, right, or center), and choose your preferred numbering style. Our tool will automatically paginate every page for you."
                    },
                    {
                        question: "Can I choose the starting page number?",
                        answer: "Yes, you can customize the starting number and even choose which pages to exclude if you have cover pages that shouldn't be numbered."
                    },
                    {
                        question: "Is there support for Bates Numbering?",
                        answer: "While our current tool focuses on standard pagination, it provides the clean, sequential numbering needed for legal and professional documents similar to Bates numbering."
                    },
                    {
                        question: "Will it change my document's formatting?",
                        answer: "No, our tool simply overlays page numbers on top of your existing content. Your original text, images, and layout will remain completely untouched."
                    }
                ]}
                title="PDF Page Numbering FAQs"
                subtitle="Common questions about paginating PDF files"
            />
        </div>
    );
}
