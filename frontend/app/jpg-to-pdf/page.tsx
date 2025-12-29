import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Images, Maximize, Settings, Shield } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'JPG to PDF Converter - Combine Images to PDF | iLovePDFKit',
    description: 'Convert JPG, PNG, and other images to PDF. Merge multiple photos into one PDF file. Auto-alignment and compression included.',
    keywords: ['jpg to pdf', 'image to pdf', 'png to pdf', 'photos to pdf', 'combine images', 'merge jpg'],
};

export default function JpgToPdfPage() {
    const steps = [
        {
            title: "Convert Images to PDF",
            description: (
                <ol>
                    <li>Select or drag and drop your JPG/PNG images.</li>
                    <li>Drag images to reorder them if needed.</li>
                    <li>Click 'Convert' to merge them into a single PDF.</li>
                </ol>
            ),
            icon: Images,
        },
        {
            title: "Support for Multiple Formats",
            description: "We support JPG, JPEG, PNG, BMP, and GIF. You can mix and match different image formats and combine them all into one professional PDF document.",
            icon: Settings,
        },
        {
            title: "Auto-Optimization",
            description: "Our tool automatically adjusts the orientation and margins of your images to ensure the best fit on standard PDF pages (A4).",
            icon: Maximize,
        },
        {
            title: "Private & Secure",
            description: "Your photos stay private. All files are processed securely on our servers and permanently deleted after a short period. No one else has access to your files.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="jpg-to-pdf" />

            <ToolContent
                title="JPG to PDF Converter"
                intro="The best online tool to convert and merge your images into a single PDF document. Fast, easy, and free."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I convert multiple JPGs to one PDF?",
                        answer: "You can select or drag and drop multiple JPG, PNG, or other image files into our converter. Once uploaded, you can reorder them as you like and then combine them into a single PDF document."
                    },
                    {
                        question: "Is there a limit to how many images I can combine?",
                        answer: "No, you can merge as many images as you need. Our tool is optimized to handle large batches of photos efficiently without compromising quality."
                    },
                    {
                        question: "Does the tool support PNG and other formats?",
                        answer: "Yes, besides JPG, we support PNG, BMP, GIF, and TIFF. You can mix different image formats in one upload and they will all be converted into the same PDF."
                    },
                    {
                        question: "Will my images be compressed?",
                        answer: "Our tool auto-optimizes images for PDF while maintaining visual quality. This ensures your final PDF file size is manageable for emailing or sharing without looking pixelated."
                    }
                ]}
                title="JPG to PDF Conversion FAQs"
                subtitle="Common questions about merging images into PDF files"
            />
        </div>
    );
}
