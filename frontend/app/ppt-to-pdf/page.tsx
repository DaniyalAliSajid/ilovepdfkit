import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Presentation, Layout, MonitorPlay, CheckCircle } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'PPT to PDF - Convert PowerPoint to PDF Online | ILOVEPDFKIT',
    description: 'Convert PowerPoint (PPT, PPTX) to PDF. Preserve slides, layout, and formatting. Make your presentations easy to share.',
    keywords: ['ppt to pdf', 'convert powerpoint to pdf', 'pptx to pdf', 'presentation to pdf', 'slide to pdf', 'save ppt as pdf'],
};

export default function PptToPdfPage() {
    const steps = [
        {
            title: "Convert PowerPoint to PDF",
            description: (
                <ol>
                    <li>Upload your Microsoft PowerPoint presentation (PPT or PPTX).</li>
                    <li>We will automatically convert each slide into a PDF page.</li>
                    <li>Download your professional PDF document.</li>
                </ol>
            ),
            icon: Presentation,
        },
        {
            title: "Perfect Slide Accuracy",
            description: "Worried about shifting text or broken images? Our converter renders your slides exactly as they appear in PowerPoint, ensuring your message is clear.",
            icon: Layout,
        },
        {
            title: "Universal Sharing",
            description: "PDFs are the best way to share presentations. They look the same on every device, require no special software, and prevent accidental editing.",
            icon: MonitorPlay,
        },
        {
            title: "Easy & Free",
            description: "Simply upload, convert, and download. No watermarks, no sign-up forms, and completely free to use for all your presentations.",
            icon: CheckCircle,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="ppt-to-pdf" />

            <ToolContent
                title="Convert PPT to PDF Online"
                intro="Make your PowerPoint presentations easy to read and share by converting them to PDF."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I convert PowerPoint to PDF for free?",
                        answer: "Simply upload your PPT or PPTX file to our converter. We will process each slide and turn it into a high-quality PDF page. The service is 100% free with no registration required."
                    },
                    {
                        question: "Will the fonts and animations be preserved?",
                        answer: "While PDF is a static format and doesn't support PowerPoint animations, our converter preserves the exact look of your slides, including fonts, images, and layout, so your presentation remains professional."
                    },
                    {
                        question: "Is there a limit on the number of slides?",
                        answer: "No, you can convert presentations with any number of slides. Our tool is designed to handle large files and complex layouts quickly and accurately."
                    },
                    {
                        question: "Is it safe to upload my business presentations?",
                        answer: "Yes, we take security seriously. All files are transferred via SSL encryption and are automatically deleted from our servers shortly after conversion to ensure your data remains private."
                    }
                ]}
                title="PPT to PDF Conversion FAQs"
                subtitle="Common questions about converting presentations to PDF"
            />
        </div>
    );
}
