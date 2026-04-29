import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import FAQ from "@/components/FAQ";
import { Metadata } from 'next';
import { Scissors, Zap, Shield, Layers } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online - 100% Free & Fast | iLovePDFKit',
    description: 'Split PDF files into separate pages, extract specific ranges, or pick individual pages. Best free online PDF splitter. No signup required.',
    keywords: ['split pdf', 'separate pdf pages', 'extract pdf pages', 'pdf splitter', 'free pdf split'],
    alternates: { canonical: 'https://ilovepdfkit.com/split-pdf' },
};

export default function SplitPdfPage() {
    const steps = [
        {
            title: "How to Split PDF",
            description: (
                <ol>
                    <li>Upload your PDF file by clicking the "Select PDF file" button.</li>
                    <li>Choose your split mode: "Split all pages", "Fixed range", or "Extract pages".</li>
                    <li>Enter the page numbers or ranges if required.</li>
                    <li>Click "Split" and download your processed files instantly.</li>
                </ol>
            ),
            icon: Scissors,
        },
        {
            title: "Three Flexible Modes",
            description: "Choose to split every page into separate files, extract a specific range like 1-10, or pick individual pages like 1, 3, and 5. We give you full control over how your document is divided.",
            icon: Layers,
        },
        {
            title: "Fast & Secure Processing",
            description: "Your files are processed securely and deleted from our servers automatically after conversion. We use 256-bit SSL encryption to ensure your data remains private and safe.",
            icon: Shield,
        },
        {
            title: "High Precision Extraction",
            description: "Our tool extracts pages with zero loss in quality. All fonts, images, and formatting are perfectly preserved in the resulting documents.",
            icon: Zap,
        }
    ];


    const faqs = [
        {
            question: "How do I split a PDF for free?",
            answer: "Simply upload your PDF to our Split PDF tool, choose your preferred split mode, and download the resulting files. The service is completely free and works in any web browser."
        },
        {
            question: "What is the difference between Range and Extract?",
            answer: "The 'Fixed Range' mode lets you specify a start and end page (e.g., 1-5). The 'Extract Pages' mode allows you to pick specific, non-consecutive pages (e.g., 1, 3, 7)."
        },
        {
            question: "Is it safe to split my documents online?",
            answer: "Yes, security is our top priority. All files are encrypted during transfer and are permanently deleted from our servers within an hour of processing."
        },
        {
            question: "Can I split a password-protected PDF?",
            answer: "You must first remove the password using our 'Unlock PDF' tool before you can split the file. Once unlocked, you can split it as usual."
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="split-pdf" />

            <ToolContent
                title="The Most Flexible PDF Splitter"
                intro="Divide your PDF documents exactly how you want. Extract ranges, individual pages, or split everything into separate files in seconds."
                sections={steps}
            />

            <FAQ
                customFaqs={faqs}
                title="Split PDF FAQs"
                subtitle="Common questions about splitting PDF documents"
            />
        </div>
    );
}
