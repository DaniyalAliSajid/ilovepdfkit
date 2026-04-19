import Converter from "@/components/Converter";
import ToolContent from "@/components/ToolContent";
import { Metadata } from 'next';
import { Unlock, ShieldX, KeyRound, Zap } from 'lucide-react';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: 'Unlock PDF - Remove Password from PDF Free | iLovePDFKit',
    description: 'Remove PDF password online. Unlock protected PDF files easily. Bypass restrictions on copying and printing. Free and secure.',
    keywords: ['unlock pdf', 'remove pdf password', 'decrypt pdf', 'pdf password remover', 'unprotect pdf'],
    alternates: {
        canonical: 'https://ilovepdfkit.com/unlock-pdf'
    }
};

export default function UnlockPdfPage() {
    const steps = [
        {
            title: "How to Unlock a PDF",
            description: (
                <ol>
                    <li>Upload your password-protected PDF document.</li>
                    <li>If it asks for an open password, enter it in the password field.</li>
                    <li>Click 'Convert Now' to remove the encryption.</li>
                    <li>Download your fully unlocked, restriction-free PDF.</li>
                </ol>
            ),
            icon: Unlock,
        },
        {
            title: "Remove Restrictions",
            description: "Are you blocked from copying text, editing, or printing a PDF? Use our tool to instantly strip away annoying owner restrictions.",
            icon: ShieldX,
        },
        {
            title: "Safe Decryption",
            description: "If you have the password but want to remove it for easier sharing, our tool decrypts the file flawlessly without damaging the contents.",
            icon: KeyRound,
        },
        {
            title: "Browser-Based Speed",
            description: "Unlock your documents from any device—Mac, Windows, iOS, or Android—without downloading any specialized cracking software.",
            icon: Zap,
        }
    ];

    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="unlock-pdf" />

            <ToolContent
                title="Remove Password from PDF"
                intro="Instantly unlock secure PDF files. Strip away passwords and remove editing, copying, or printing restrictions."
                sections={steps}
            />

            <FAQ
                customFaqs={[
                    {
                        question: "Can I unlock a PDF without the password?",
                        answer: "If the PDF only has 'owner' restrictions (preventing printing or copying), we can usually remove them automatically. If the PDF requires a 'user' password to open, you must provide that password first so we can decrypt and remove it."
                    },
                    {
                        question: "Is this legal?",
                        answer: "You should only unlock PDFs that you have the legal right to access and modify, such as your own documents where you forgot the password."
                    },
                    {
                        question: "Will the contents change after unlocking?",
                        answer: "No. The text, images, and layout of your PDF will remain exactly the same. We only remove the encryption wrapper."
                    },
                    {
                        question: "Do you keep a copy of the unlocked file or password?",
                        answer: "Never. Passwords are never saved, and all files—both the uploaded encrypted version and the processed unlocked version—are deleted from our servers automatically."
                    }
                ]}
                title="Unlock PDF FAQs"
                subtitle="Common questions about PDF decryption and restrictions"
            />
        </div>
    );
}
