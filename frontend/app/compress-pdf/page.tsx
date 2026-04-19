import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { FileDown, Shield, Zap, RefreshCw } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Compress PDF Online Free - Reduce PDF File Size | iLovePDFKit',
    description: 'Compress PDF files online for free. Reduce PDF file size without losing quality. Fast, secure, and no sign-up required.',
    keywords: ['compress pdf', 'reduce pdf size', 'shrink pdf', 'pdf compressor', 'make pdf smaller'],
    alternates: {
        canonical: 'https://ilovepdfkit.com/compress-pdf'
    }
};

export default function CompressPdfPage() {
    const steps = [
        {
            title: "How to Compress Your PDF",
            description: (
                <ol>
                    <li>Upload the PDF file you want to compress.</li>
                    <li>Choose your desired compression level (Recommended, Extreme, or Less).</li>
                    <li>Click 'Convert Now' to start shrinking your file.</li>
                    <li>Download your newly compressed, smaller PDF immediately.</li>
                </ol>
            ),
            icon: FileDown,
        },
        {
            title: "Maintain High Quality",
            description: "Our advanced compression engine reduces file size while preserving maximum visual quality for text and images.",
            icon: Shield,
        },
        {
            title: "Lightning Fast Setup",
            description: "No software installation or registration needed. Compress your PDFs directly in your browser in seconds.",
            icon: Zap,
        },
        {
            title: "Secure & Private",
            description: "Your files are processed securely over HTTPS and automatically deleted from our servers shortly after compression.",
            icon: RefreshCw,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="compress-pdf" />

            <ToolContent
                title="Compress PDF Files Online"
                intro="The easiest way to reduce your PDF file size. Optimize your documents for email attachments or web uploads without sacrificing quality."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How does the PDF compressor work?",
                        answer: "Our tool analyzes your document and applies intelligent optimization techniques to reduce image sizes and remove unnecessary metadata, making the overall file size smaller."
                    },
                    {
                        question: "Will my PDF lose quality?",
                        answer: "We offer different compression levels. The 'Recommended' setting provides an optimal balance between size reduction and visual quality. Text will remain perfectly readable."
                    },
                    {
                        question: "Is there a limit on file size?",
                        answer: "You can compress PDFs up to 50MB for free without an account."
                    },
                    {
                        question: "Is my data secure?",
                        answer: "Absolutely. We use end-to-end encryption, and your files are never manually reviewed. All uploaded and processed files are automatically purged from our servers within a few hours."
                    }
                ]}
                title="Compress PDF FAQs"
                subtitle="Everything you need to know about reducing PDF file sizes"
            />
        </div>
    );
}
