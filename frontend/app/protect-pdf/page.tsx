import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Lock, Shield, Key, Settings, History } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Protect PDF - Add Password to PDF Online | iLovePDFKit',
    description: 'Secure your PDF files with a strong password. Encrypt your documents online for free and prevent unauthorized access.',
    keywords: ['protect pdf', 'encrypt pdf', 'password protect pdf', 'secure pdf', 'pdf lock', 'online pdf protection'],
};

export default function ProtectPdfPage() {
    const steps = [
        {
            title: "How to Protect Your PDF",
            description: (
                <ol>
                    <li>Upload the PDF file you want to secure.</li>
                    <li>Enter a strong password in the password field.</li>
                    <li>Click 'Convert Now' to encrypt your document.</li>
                    <li>Download your password-protected PDF immediately.</li>
                </ol>
            ),
            icon: Lock,
        },
        {
            title: "Strong AES-256 Encryption",
            description: "We use industrial-standard AES-256 encryption to ensure your files are protected by the strongest possible security measures available today.",
            icon: Shield,
        },
        {
            title: "Instant Processing",
            description: "Your files are encrypted in seconds. No waiting queues, no processing delays. Just upload, enter password, and you're done.",
            icon: Settings,
        },
        {
            title: "Privacy First",
            description: "We never store your passwords or your unencrypted files. Everything is processed securely and deleted automatically from our servers.",
            icon: Lock,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="protect-pdf" />

            <ToolContent
                title="Protect PDF with Password"
                intro="The easiest way to encrypt your PDF files online. Keep your sensitive documents safe with a custom password."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "How does PDF protection work?",
                        answer: "Our tool uses AES-256 bit encryption to lock your PDF. Once protected, any user attempting to open the file will be prompted for the password you set."
                    },
                    {
                        question: "Is the password saved on your servers?",
                        answer: "No, we never store your passwords. The password is used only during the encryption process and is immediately discarded."
                    },
                    {
                        question: "Can I remove the password later?",
                        answer: "Yes, you can use our 'Unlock PDF' tool (coming soon) or open the file with your password and save it without protection in Acrobat or other PDF editors."
                    },
                    {
                        question: "What happens if I lose my password?",
                        answer: "Since we do not store passwords, it is impossible for us to recover them. Please ensure you keep a record of the passwords you use to protect your documents."
                    }
                ]}
                title="Protect PDF FAQs"
                subtitle="Everything you need to know about securing your documents"
            />
        </div>
    );
}
