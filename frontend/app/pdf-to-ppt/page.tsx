import { Metadata } from 'next';
import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import FAQ from "@/components/FAQ";
import { Presentation, Layout, Zap, Shield } from 'lucide-react';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'PDF to PPT - Convert PDF to PowerPoint Online | iLovePDFKit',
    description: 'Convert PDF to editable PowerPoint slides (PPTX). Turn your PDF documents into presentations instantly.',
};

export default function PdfToPptPage() {
    const steps = [
        {
            title: "How to Convert PDF to PowerPoint",
            description: (
                <ol>
                    <li>Upload your PDF document to the converter.</li>
                    <li>Wait for our engine to extract slides and layouts.</li>
                    <li>Download your fully editable PowerPoint (PPTX) file.</li>
                </ol>
            ),
            icon: Presentation,
        },
        {
            title: "Editable Slides & Layouts",
            description: "Go beyond static pages. Our converter tries to reconstruct your PDF as native PowerPoint elements, making backgrounds, text, and images much easier to edit in Microsoft PowerPoint.",
            icon: Layout,
        },
        {
            title: "Fast & Accurate extraction",
            description: "Our advanced algorithms ensure that text and graphics are placed accurately on each slide, saving you hours of manual reconstruction time.",
            icon: Zap,
        },
        {
            title: "Secure & Private",
            description: "Your files are your business. We use 256-bit SSL encryption for all uploads and delete files from our servers within 2 hours of processing.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-ppt" />

            <ToolContent
                title="Convert PDF to PowerPoint Online"
                intro="Turn your PDF documents into professional PowerPoint presentations. Fast, accurate, and completely free."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "Can I convert a PDF back to an editable PowerPoint?",
                        answer: "Yes! Our tool converts PDF pages into PPTX slides. It detects text and images so you can edit them directly in Microsoft PowerPoint after conversion."
                    },
                    {
                        question: "Does it support OCR for scanned PDFs?",
                        answer: "Our basic converter works best with digital PDFs. For scanned documents, our engine will still extract the pages as images on slides, making them easy to present."
                    },
                    {
                        question: "Is the formatting preserved?",
                        answer: "We aim for high fidelity. While complex PDF layouts may vary slightly, we preserve the overall look and page structure to ensure a seamless transition to slides."
                    },
                    {
                        question: "Do I need to install any software?",
                        answer: "No, iLovePDFKit is a web-based service. You can convert PDF to PPT online on any device without installing any apps or extensions."
                    }
                ]}
                title="PDF to PowerPoint FAQs"
                subtitle="Common questions about converting PDF to PPTX"
            />
        </div>
    );
}
