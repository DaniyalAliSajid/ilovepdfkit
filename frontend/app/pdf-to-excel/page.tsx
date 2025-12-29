import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import FAQ from "@/components/FAQ";
import { Metadata } from 'next';
import { Table, Zap, Shield, Database } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to Excel Converter - Extract Tables Free | ILOVEPDFKIT',
    description: 'Convert PDF files to Excel spreadsheets (XLSX) instantly. Best free online PDF to Excel converter with table extraction. No signup required.',
    keywords: ['pdf to excel', 'convert pdf to excel', 'pdf to xlsx', 'extract tables from pdf', 'pdf table extractor', 'free pdf converter'],
};

export default function PdfToExcelPage() {
    const steps = [
        {
            title: "How to Convert PDF to Excel",
            description: (
                <ol>
                    <li>Upload your PDF file by clicking the "Select PDF file" button.</li>
                    <li>Wait for our table extraction engine to process the document.</li>
                    <li>Download your Excel (XLSX) file with extracted tables instantly.</li>
                </ol>
            ),
            icon: Table,
        },
        {
            title: "Intelligent Table Detection",
            description: "Our converter automatically detects and extracts tables from your PDF documents. Each page with tables is converted to a separate sheet in the Excel file, preserving the data structure and formatting.",
            icon: Database,
        },
        {
            title: "Fast & Secure Processing",
            description: "Your files are processed securely and deleted from our servers automatically after conversion. We use 256-bit SSL encryption to ensure your data remains private and safe.",
            icon: Shield,
        },
        {
            title: "Multi-Page Support",
            description: "Extract tables from PDFs with multiple pages. Each page's tables are organized into separate sheets in the Excel workbook, making it easy to work with complex documents.",
            icon: Zap,
        }
    ];


    const faqs = [
        {
            question: "How do I convert PDF to Excel for free?",
            answer: "Simply upload your PDF file to our tool, and we will automatically extract tables and convert them to an Excel spreadsheet (XLSX). The process is 100% free and requires no registration."
        },
        {
            question: "Can it extract tables from scanned PDFs?",
            answer: "Our tool works best with PDFs that contain selectable text and structured tables. For scanned PDFs, the extraction accuracy may vary depending on the quality of the scan."
        },
        {
            question: "What if my PDF has no tables?",
            answer: "If no tables are detected in your PDF, the converter will create an Excel file with a notification message. Our tool is specifically designed for extracting tabular data from PDFs."
        },
        {
            question: "Is it safe to convert my documents online?",
            answer: "Security is our top priority. We use SSL encryption to protect your files during transfer, and all uploaded documents are automatically deleted from our servers after processing."
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-excel" />

            <ToolContent
                title="The Best PDF to Excel Converter"
                intro="Extract tables from PDF documents and convert them to editable Excel spreadsheets in seconds. No installation or registration required."
                sections={steps}
            />

            <FAQ
                customFaqs={faqs}
                title="PDF to Excel Conversion FAQs"
                subtitle="Common questions about converting PDF to Excel"
            />
        </div>
    );
}
