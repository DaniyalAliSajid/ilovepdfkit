import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { FileImage, Layers, Zap, Download } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'PDF to JPG Converter - High Quality Images | iLovePDFKit',
    description: 'Convert PDF pages to high-resolution JPG images. Download as individual files or ZIP archive. Fast, free, and secure.',
    keywords: ['pdf to jpg', 'convert pdf to image', 'pdf to png', 'extract images from pdf', 'pdf to picture', 'online pdf converter'],
};

export default function PdfToJpgPage() {
    const steps = [
        {
            title: "How to Convert PDF to JPG",
            description: (
                <ol>
                    <li>Upload your PDF document to the converter.</li>
                    <li>Choose "Convert entire pages" or "Extract images".</li>
                    <li>We will process the file efficiently.</li>
                    <li>Download your high-quality JPG images immediately.</li>
                </ol>
            ),
            icon: FileImage,
        },
        {
            title: "High-Resolution Output",
            description: "Our tool ensures that your images retain the highest possible quality. Whether it's complex graphics or simple text, the output JPGs will be crisp and clear.",
            icon: Layers,
        },
        {
            title: "Bulk Conversion",
            description: "Have a large PDF with many pages? We convert all pages at once and provide them in a handy ZIP file for easy downloading.",
            icon: Download,
        },
        {
            title: "Instant & Free",
            description: "No waiting time or limits. Convert as many PDF files to JPG as you need, completely free of charge. Works in any modern browser.",
            icon: Zap,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="pdf-to-jpg" />

            <ToolContent
                title="Convert PDF to JPG Images"
                intro="Turn your PDF pages into high-quality JPG images in seconds. No watermarks, no registration."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I convert a PDF to an image file?",
                        answer: "Upload your PDF document to our tool. We will process each page and convert it into a high-resolution JPG image. You can download them one by one or as a combined ZIP file."
                    },
                    {
                        question: "Is the JPG quality high enough for printing?",
                        answer: "Yes, our converter produces sharp, high-resolution JPG images that maintain the clarity of text and graphics from your original PDF, making them suitable for professional use."
                    },
                    {
                        question: "Can I extract specific images from a PDF?",
                        answer: "Currently, our tool converts entire pages to JPG. If you need single images, you can convert the page and then crop it, or look for our specialized image extraction tool in the future."
                    },
                    {
                        question: "Is this PDF to JPG tool free?",
                        answer: "Absolutely! You can convert as many PDF files to JPG images as you want without any cost or subscription requirements."
                    }
                ]}
                title="PDF to JPG Conversion FAQs"
                subtitle="Common questions about converting PDF pages to images"
            />
        </div>
    );
}
