import AISummarizer from "@/components/AISummarizer";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Wand2, Layout, Zap, Shield } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'AI PDF Summarizer - Summarize PDF Documents Online | iLovePDFKit',
    description: 'Use our AI-powered PDF summarizer to get instant, accurate summaries of your PDF documents. Save time and extract key insights automatically for free.',
    keywords: ['ai pdf summarizer', 'summarize pdf', 'pdf summary tool', 'extract key insights pdf', 'automatic pdf summarizer', 'free ai summarizer'],
};

export default function PDFSummarizerPage() {
    const steps = [
        {
            title: "Instant Summarization",
            description: "Upload any PDF and get a comprehensive summary in seconds. Our AI analyzes the entire document to extract the most important information.",
            icon: Zap,
        },
        {
            title: "Key Insights Extraction",
            description: "Go beyond simple summaries. Our tool identifies key takeaways, main arguments, and important data points automatically.",
            icon: Wand2,
        },
        {
            title: "Smart Analysis",
            description: "Powered by advanced AI technology, our summarizer understands context and nuances, ensuring the summary is accurate and helpful.",
            icon: Layout,
        },
        {
            title: "Privacy Focused",
            description: "Your documents are processed securely and never stored. We prioritize your data privacy while providing state-of-the-art AI analysis.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <AISummarizer />

            <ToolContent
                title="AI PDF Summarizer"
                intro="Transform long PDF documents into concise, actionable summaries. Our AI-driven tool helps you save hours of reading by providing the essence of your files instantly."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How does the AI PDF Summarizer work?",
                        answer: "Our tool uses advanced Large Language Models (LLMs) to read and understand the text in your PDF. It identifies the main themes and key information to generate a structured summary."
                    },
                    {
                        question: "Is there a page limit for summarization?",
                        answer: "The AI can process documents up to approximately 300-400 pages for a single request, ensuring even long reports can be summarized effectively."
                    },
                    {
                        question: "Can I download the summary?",
                        answer: "Yes, once the AI generates the summary, you can copy it to your clipboard or download it as a plain text (.txt) file."
                    },
                    {
                        question: "Is my document data secure?",
                        answer: "Absolutely. We do not store your PDFs on our servers after processing. The text is extracted temporarily to generate the summary and then discarded."
                    }
                ]}
                title="AI Summarizer FAQs"
                subtitle="Common questions about our AI-powered summarization tool"
            />
        </div>
    );
}
