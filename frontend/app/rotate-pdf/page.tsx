import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { RotateCw, RefreshCcw, Smartphone, Shield } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Rotate PDF - Rotate PDF Pages Permanently Online | ILOVEPDFKIT',
    description: 'Rotate PDF pages 90, 180 or 270 degrees clockwise. Save and download your rotated PDF instantly. Free service, no limits.',
    keywords: ['rotate pdf', 'turn pdf', 'flip pdf', 'rotate pdf pages', 'save rotated pdf', 'online pdf rotator'],
};

export default function RotatePdfPage() {
    const steps = [
        {
            title: "How to Rotate PDF Pages",
            description: (
                <ol>
                    <li>Upload your PDF file.</li>
                    <li>Choose the page(s) you want to rotate.</li>
                    <li>Click the rotate buttons (Left or Right) to adjust orientation.</li>
                    <li>Download your permanently rotated PDF.</li>
                </ol>
            ),
            icon: RotateCw,
        },
        {
            title: "Rotate Any Way You Want",
            description: "Rotate specific pages or the entire document. Our tool supports 90, 180, and 270-degree rotation, giving you full control over your document's orientation.",
            icon: RefreshCcw,
        },
        {
            title: "Works on All Devices",
            description: "Need to rotate a PDF on your phone? No problem. Our tool is mobile-friendly and works perfectly on iPhone, Android, and tablets.",
            icon: Smartphone,
        },
        {
            title: "Safe & Secure",
            description: "We process your files securely and delete them from our servers shortly after you download the result. Your data is never shared.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="rotate-pdf" />

            <ToolContent
                title="Rotate PDF Pages"
                intro="Rotate your PDF files permanently. Orient your pages correctly and save the changes instantly."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I rotate a PDF and save it permanently?",
                        answer: "Upload your PDF, choose the rotation angle (90, 180, or 270 degrees), and click the rotate button. Our tool saves these changes permanently so the PDF will look correctly oriented every time you open it."
                    },
                    {
                        question: "Can I rotate only specific pages in a PDF?",
                        answer: "Yes, our interface allows you to select specific pages to rotate individually, or you can rotate the entire document at once if every page needs the same adjustment."
                    },
                    {
                        question: "Does rotating a PDF affect its quality?",
                        answer: "Not at all. Rotating pages is a layout adjustment; it doesn't compress or re-encode your content, so your text and images remain perfectly sharp."
                    },
                    {
                        question: "Is it free to rotate PDF files?",
                        answer: "Yes, you can rotate as many PDFs as you need for free. There are no hidden fees or limits on how many pages you can adjust."
                    }
                ]}
                title="Rotate PDF FAQs"
                subtitle="Common questions about changing PDF orientation"
            />
        </div>
    );
}
