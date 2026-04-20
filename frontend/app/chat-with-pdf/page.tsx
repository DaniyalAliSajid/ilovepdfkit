import ChatInterface from "@/components/ChatInterface";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { MessageSquare, Zap, Shield, FileSearch } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Chat with PDF - Interactive AI PDF Assistant | iLovePDFKit',
    description: 'Chat with your PDF documents using AI. Ask questions, get explanations, and find specific information within your PDFs instantly for free.',
    keywords: ['chat with pdf', 'ai pdf assistant', 'pdf question answering', 'interactive pdf', 'understand pdf with ai', 'ask pdf questions'],
};

export default function ChatWithPdfPage() {
    const steps = [
        {
            title: "Interactive Conversation",
            description: "Have a real conversation with your documents. Ask questions naturally and get detailed answers based directly on the PDF content.",
            icon: MessageSquare,
        },
        {
            title: "Deep Understanding",
            description: "Our AI doesn't just search for keywords; it understands the context of your document, allowing it to explain complex concepts and provide insights.",
            icon: FileSearch,
        },
        {
            title: "Lightning Fast",
            description: "Powered by high-performance neural networks, you get responses in milliseconds, making the research process faster than ever.",
            icon: Zap,
        },
        {
            title: "Secure & Private",
            description: "Your files are processed in real-time and are never stored on our servers. Your privacy and data security are our top priorities.",
            icon: Shield,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <ChatInterface />

            <ToolContent
                title="Chat with your PDF"
                intro="Stop wasting time scrolling through pages. Our AI-powered chat allows you to extract exactly what you need from any PDF through a simple, interactive conversation."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How do I start chatting with my PDF?",
                        answer: "Simply upload your PDF file. Our tool will read the document, and you can start asking questions in the chat box immediately."
                    },
                    {
                        question: "What kind of questions can I ask?",
                        answer: "You can ask for specific facts, summaries of sections, explanations of complex terms, or even ask the AI to compare different parts of the document."
                    },
                    {
                        question: "Does the AI remember our previous messages?",
                        answer: "Yes, the chat maintains history during your session, so you can ask follow-up questions and have a continuous conversation about the document."
                    },
                    {
                        question: "Can I use this for academic or legal papers?",
                        answer: "Absolutely. The AI is highly capable of understanding technical, academic, and legal language, making it a perfect research assistant."
                    }
                ]}
                title="Chat with PDF FAQs"
                subtitle="Everything you need to know about our interactive PDF tool"
            />
        </div>
    );
}
