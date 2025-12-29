import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import FAQ from "@/components/FAQ";
import { Metadata } from 'next';
import { FileText, Zap, Shield, Layout } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to Word Converter - 100% Free & Editable | iLovePDFKit',
    description: 'Convert PDF files to editable Word documents (DOCX) instantly. Best free online PDF to Word converter with OCR. No signup required.',
    keywords: ['pdf to word', 'convert pdf to word', 'pdf to docx', 'editable pdf', 'ocr pdf', 'free pdf converter'],
};

export default function PdfToWordPage() {
    const steps = [
        {
            title: "How to Convert PDF to Word",
            description: (
                <ol>
                    <li>Upload your PDF file by clicking the "Select PDF file" button.</li>
                    <li>Wait for our advanced OCR engine to process the document.</li>
                    <li>Download your editable Word (DOCX) file instantly.</li>
                </ol>
            ),
            icon: FileText,
        },
        {
            title: "Maintain Original Formatting",
            description: "Our converter preserves your original layout, fonts, and images. Tables, lists, and paragraphs are detected and converted with high precision, ensuring your Word document looks exactly like the original PDF.",
            icon: Layout,
        },
        {
            title: "Fast & Secure Processing",
            description: "Your files are processed securely and deleted from our servers automatically after conversion. We use 256-bit SSL encryption to ensure your data remains private and safe.",
            icon: Shield,
        },
        {
            title: "Free Online OCR",
            description: "Need to edit a scanned PDF? Our tool includes Optical Character Recognition (OCR) technology to extract text from scanned documents and images, making them fully editable in Microsoft Word.",
            icon: Zap,
        }
    ];


    const faqs = [
        {
            question: "How do I convert PDF to Word for free?",
            answer: "Simply upload your PDF file to our tool, and we will automatically convert it to an editable Word document (DOCX). The process is 100% free and requires no registration."
        },
        {
            question: "Is the conversion accurate?",
            answer: "Yes, our advanced conversion engine preserves your original layout, fonts, and images. It even handles complex tables and lists to ensure your Word document looks exactly like the PDF."
        },
        {
            question: "Can I convert scanned PDFs to Word?",
            answer: "Absolutely! Our tool is equipped with Optical Character Recognition (OCR) technology that can extract text from scanned documents and images, making them fully editable in Microsoft Word."
        },
        {
            question: "Is it safe to convert my documents online?",
            answer: "Security is our top priority. We use SSL encryption to protect your files during transfer, and all uploaded documents are automatically deleted from our servers after processing."
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-word" />

            <ToolContent
                title="The Best PDF to Word Converter"
                intro="Transform non-editable PDF documents into editable Word files in seconds. No installation or registration required."
                sections={steps}
            />

            <FAQ
                customFaqs={faqs}
                title="PDF to Word Conversion FAQs"
                subtitle="Common questions about converting PDF to Word"
            />
        </div>
    );
}
