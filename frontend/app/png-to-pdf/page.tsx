import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { FileImage, FileText, Plus, Check } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'PNG to PDF Converter - Convert PNG Images to PDF | iLovePDFKit',
    description: 'Convert your PNG images to a single PDF document online for free. Easy to use, fast, and secure.',
    keywords: ['png to pdf', 'convert png to pdf', 'images to pdf', 'png to pdf online', 'free pdf converter'],
};

export default function PngToPdfPage() {
    const steps = [
        {
            title: "Upload PNGs",
            description: "Upload one or more PNG images that you want to combine into a PDF.",
            icon: ListPlus,
        },
        {
            title: "Convert",
            description: "Click 'Convert Now' to merge your images into a single professional PDF document.",
            icon: FileText,
        },
        {
            title: "Download",
            description: "Your new PDF is ready! Download it instantly to your device.",
            icon: Download,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="png-to-pdf" />

            <ToolContent
                title="Convert PNG to PDF Online"
                intro="Combine your PNG images into a single, high-quality PDF document in seconds. Perfect for creating portfolios or multi-page documents from images."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "Can I combine multiple PNGs into one PDF?",
                        answer: "Yes! You can upload multiple PNG images at once, and they will be combined in the order you upload them into a single PDF document."
                    },
                    {
                        question: "Does it support other image formats?",
                        answer: "Yes, our engine also supports JPG and JPEG. For PNG specific conversion, this tool is optimized for transparency and quality."
                    },
                    {
                        question: "Are my files secure?",
                        answer: "Absolutely. We use secure processing and all your files are automatically deleted after conversion is complete."
                    }
                ]}
                title="PNG to PDF FAQs"
                subtitle="Helpful information about our image to PDF tool"
            />
        </div>
    );
}

import { ListPlus, Download } from 'lucide-react';
