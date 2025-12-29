import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Image as ImageIcon, FileImage, Download, Zap } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'PDF to PNG Converter - Extract Images from PDF | iLovePDFKit',
    description: 'Convert PDF pages to high-quality PNG images online for free. Fast, secure, and preserves original quality.',
    keywords: ['pdf to png', 'convert pdf to png', 'extract png from pdf', 'pdf to image', 'online pdf converter'],
};

export default function PdfToPngPage() {
    const steps = [
        {
            title: "Upload PDF",
            description: "Select the PDF file you want to convert to PNG images.",
            icon: FileImage,
        },
        {
            title: "Process",
            description: "Our high-speed engine extracts each page and converts it to a PNG file.",
            icon: Zap,
        },
        {
            title: "Download ZIP",
            description: "Download all your converted PNG images in a single ZIP file.",
            icon: Download,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-png" />

            <ToolContent
                title="Convert PDF to PNG Images"
                intro="The easiest way to turn your PDF pages into high-quality PNG images. Perfect for using PDF content in presentations or on the web."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I convert PDF to PNG?",
                        answer: "Simply upload your PDF file, click 'Convert Now', and we will generate a ZIP file containing each page of your PDF as a separate PNG image."
                    },
                    {
                        question: "Is the quality preserved?",
                        answer: "Yes! We use high-resolution rendering to ensure that your PNG images look as sharp as the original PDF document."
                    },
                    {
                        question: "Is it free to use?",
                        answer: "Yes, our PDF to PNG converter is 100% free with no hidden costs or registrations required."
                    }
                ]}
                title="PDF to PNG FAQs"
                subtitle="Common questions about our PDF to image extraction tool"
            />
        </div>
    );
}
