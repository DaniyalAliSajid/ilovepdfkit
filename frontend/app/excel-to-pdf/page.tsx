import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import FAQ from "@/components/FAQ";
import { Metadata } from 'next';
import { Table, Zap, Shield, Layout } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Excel to PDF Converter - 100% Free & Professional | ILOVEPDFKIT',
    description: 'Convert Excel spreadsheets to PDF files instantly. Best free online Excel to PDF converter preserving formatting and charts. No signup required.',
    keywords: ['excel to pdf', 'convert excel to pdf', 'xlsx to pdf', 'spreadsheet to pdf', 'excel converter', 'free excel to pdf'],
};

export default function ExcelToPdfPage() {
    const steps = [
        {
            title: "How to Convert Excel to PDF",
            description: (
                <ol>
                    <li>Upload your Excel file by clicking the "Select Excel file" button.</li>
                    <li>Wait for our conversion engine to process the spreadsheet.</li>
                    <li>Download your professional PDF file instantly.</li>
                </ol>
            ),
            icon: Table,
        },
        {
            title: "Preserve Formatting & Charts",
            description: "Our converter maintains your original spreadsheet formatting, including fonts, colors, borders, and embedded charts. All sheets are converted to a single PDF document with perfect fidelity.",
            icon: Layout,
        },
        {
            title: "Fast & Secure Processing",
            description: "Your files are processed securely and deleted from our servers automatically after conversion. We use 256-bit SSL encryption to ensure your data remains private and safe.",
            icon: Shield,
        },
        {
            title: "Multi-Sheet Support",
            description: "Convert Excel workbooks with multiple sheets to PDF. All sheets are included in the output PDF, making it perfect for sharing complete reports and presentations.",
            icon: Zap,
        }
    ];


    const faqs = [
        {
            question: "How do I convert Excel to PDF for free?",
            answer: "Simply upload your Excel file (.xlsx or .xls) to our tool, and we will automatically convert it to a professional PDF document. The process is 100% free and requires no registration."
        },
        {
            question: "Will my formatting be preserved?",
            answer: "Yes! Our converter preserves all formatting including fonts, colors, borders, cell alignment, and embedded charts. The PDF will look exactly like your original Excel spreadsheet."
        },
        {
            question: "Can I convert Excel files with multiple sheets?",
            answer: "Absolutely! All sheets in your Excel workbook will be included in the output PDF, making it easy to share complete reports and data sets."
        },
        {
            question: "Is it safe to convert my documents online?",
            answer: "Security is our top priority. We use SSL encryption to protect your files during transfer, and all uploaded documents are automatically deleted from our servers after processing."
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="excel-to-pdf" />

            <ToolContent
                title="The Best Excel to PDF Converter"
                intro="Transform Excel spreadsheets into professional PDF documents in seconds. Preserve formatting, charts, and multi-sheet layouts. No installation or registration required."
                sections={steps}
            />

            <FAQ
                customFaqs={faqs}
                title="Excel to PDF Conversion FAQs"
                subtitle="Common questions about converting Excel to PDF"
            />
        </div>
    );
}
