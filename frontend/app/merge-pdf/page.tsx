import { Metadata } from 'next';
import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import FAQ from "@/components/FAQ";
import { Files, Layout, Shield, Zap } from 'lucide-react';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Merge PDF - Combine PDF Files Online for Free | iLovePDFKit',
    description: 'Combine multiple PDF files into one single document. Drag and drop to reorder. Fast, secure, and zero limitations.',
};

export default function MergePdfPage() {
    const steps = [
        {
            title: "How to Merge PDF Files",
            description: (
                <ol>
                    <li>Upload the PDF files you want to combine.</li>
                    <li>Drag and drop the file thumbnails to arrange them in order.</li>
                    <li>Click 'Merge PDF' to combine them into one file.</li>
                    <li>Download your merged PDF document immediately.</li>
                </ol>
            ),
            icon: Files,
        },
        {
            title: "Maintain Perfect Order",
            description: "Easily organize your documents before merging. Our intuitive interface allows you to reorder, add, or remove files until the sequence is exactly how you want it.",
            icon: Layout,
        },
        {
            title: "Lightning Fast Merging",
            description: "Don't wait around. Our servers process your files in seconds, combining even large documents with numerous pages quickly and reliably.",
            icon: Zap,
        },
        {
            title: "Safe & Secure",
            description: "Your document security is paramount. All files are encrypted during transfer and are permanently deleted from our servers within 2 hours of processing.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="merge-pdf" />

            <ToolContent
                title="Merge PDF Files Online"
                intro="Combine multiple PDF documents into a single, organized file. The easiest and fastest way to merge PDFs for free."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I merge two or more PDF files?",
                        answer: "Simply upload your PDF files to our Merge PDF tool. You can reorder them by dragging the thumbnails and then click the 'Merge' button to join them into one document."
                    },
                    {
                        question: "Is there a limit to how many PDFs I can combine?",
                        answer: "You can merge multiple files at once. We support combining up to 20 files in a single session for optimal performance."
                    },
                    {
                        question: "Will the page order remain the same?",
                        answer: "Yes, the final PDF will follow the exact order you set in our preview window. You have full control over the sequence of pages."
                    },
                    {
                        question: "Is it safe to merge confidential PDFs?",
                        answer: "Absolutely. We use end-to-end SSL encryption for all file transfers, and documents are automatically purged from our systems shortly after processing."
                    }
                ]}
                title="Merge PDF FAQs"
                subtitle="Common questions about combining PDF documents"
            />
        </div>
    );
}
