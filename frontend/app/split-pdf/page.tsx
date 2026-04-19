import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Scissors, FileOutput, ShieldCheck, Clock } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Split PDF - Extract Pages from PDF Online | iLovePDFKit',
    description: 'Split PDF files into individual pages quickly and easily. High quality PDF extraction. No registration or installation required.',
    keywords: ['split pdf', 'extract pdf pages', 'separate pdf', 'pdf splitter', 'burst pdf'],
    alternates: {
        canonical: 'https://ilovepdfkit.com/split-pdf'
    }
};

export default function SplitPdfPage() {
    const steps = [
        {
            title: "How to Split Your PDF",
            description: (
                <ol>
                    <li>Upload the PDF document you want to split.</li>
                    <li>Wait for the secure upload to finish.</li>
                    <li>Click 'Convert Now' to instantly split the document.</li>
                    <li>Download a ZIP file containing every page as a separate PDF.</li>
                </ol>
            ),
            icon: Scissors,
        },
        {
            title: "Fast Page Extraction",
            description: "Easily extract every single page of your PDF into its own file. Perfect for organizing large documents or isolating specific sections.",
            icon: FileOutput,
        },
        {
            title: "Time-Saving Efficiency",
            description: "Our high-speed servers process your split request in seconds, delivering a neatly organized ZIP archive immediately.",
            icon: Clock,
        },
        {
            title: "Strict Privacy",
            description: "Your files are your business. We process everything over HTTPS and automatically delete all data from our servers after an hour.",
            icon: ShieldCheck,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="split-pdf" />

            <ToolContent
                title="Split PDF Documents Online"
                intro="Instantly separate a multi-page PDF into single-page PDF files. Create a neat ZIP archive of your extracted pages in seconds."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How does the PDF splitter work?",
                        answer: "Our tool processes your PDF and extracts every single page into its own standalone PDF file. It packs all these new files into a single ZIP archive for easy downloading."
                    },
                    {
                        question: "Does splitting reduce the quality of the pages?",
                        answer: "No. The extraction process is lossless. Your new PDF files will have the exact same resolution and quality as the original pages."
                    },
                    {
                        question: "Can I split a PDF on my phone?",
                        answer: "Yes, our web-based tool works perfectly on iOS and Android devices directly from the browser."
                    },
                    {
                        question: "Is it safe to upload confidential documents?",
                        answer: "Yes. Your connection is encrypted via SSL/HTTPS, and our system automatically purges all uploaded and processed files within hours."
                    }
                ]}
                title="Split PDF FAQs"
                subtitle="Everything you need to know about extracting PDF pages"
            />
        </div>
    );
}
