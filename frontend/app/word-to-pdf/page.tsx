import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { FileType, Shield, Layout, Smartphone } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Word to PDF Converter - Convert DOCX to PDF Online | ILOVEPDFKIT',
    description: 'Turn Microsoft Word documents into PDF files instantly. Preserve original formatting, fonts, and layout. 100% Free and Secure.',
    keywords: ['word to pdf', 'docx to pdf', 'convert word to pdf', 'doc to pdf', 'save word as pdf', 'online word converter'],
};

export default function WordToPdfPage() {
    const steps = [
        {
            title: "Convert Word to PDF",
            description: (
                <ol>
                    <li>Select your Microsoft Word document (DOC or DOCX).</li>
                    <li>The tool automatically converts it to PDF format.</li>
                    <li>Download your professional PDF document.</li>
                </ol>
            ),
            icon: FileType,
        },
        {
            title: "Preserve Layout & Formatting",
            description: "Worry about lost fonts or misaligned images? Our Word to PDF converter ensures your document looks exactly the same as it did in Microsoft Word. We support all sophisticated formatting options.",
            icon: Layout,
        },
        {
            title: "Cross-Platform Compatibility",
            description: "Whether you use Windows, Mac, Linux, iOS, or Android, our online converter works seamlessly in your browser. No software installation is required.",
            icon: Smartphone,
        },
        {
            title: "Secure Document Handling",
            description: "We respect your privacy. All uploaded files are encrypted using 256-bit SSL technology and deleted from our servers automatically after 2 hours.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="word-to-pdf" />

            <ToolContent
                title="Convert Word to PDF Online"
                intro="The easiest way to convert DOC and DOCX files to PDF. Fast, accurate, and completely free."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I save a Word document as a PDF?",
                        answer: "Simply upload your DOC or DOCX file to our online converter. It will instantly convert to a high-quality PDF while preserving your original formatting, fonts, and layout."
                    },
                    {
                        question: "Will my document formatting change?",
                        answer: "No, our converter maintains 100% fidelity. Your text, images, tables, and page structure will appear in the PDF exactly as they did in Microsoft Word."
                    },
                    {
                        question: "Is it safe to convert my documents online?",
                        answer: "We prioritize your privacy. All uploaded files are encrypted using 256-bit SSL technology and deleted from our servers automatically after processing."
                    },
                    {
                        question: "Can I convert Word to PDF on my mobile phone?",
                        answer: "Yes, our tool is fully responsive and works on all devices, including iPhones, Android phones, and tablets, directly through your mobile browser."
                    }
                ]}
                title="Word to PDF Conversion FAQs"
                subtitle="Common questions about turning Word documents into PDF files"
            />
        </div>
    );
}
