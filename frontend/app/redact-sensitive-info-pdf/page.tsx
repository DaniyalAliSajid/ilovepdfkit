import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Redact Sensitive Info from PDF Free | Permanently Black Out Text",
  description: "Black out social security numbers, financial details, and private text in PDF files. Secure online PDF redaction tool.",
  alternates: { canonical: "https://ilovepdfkit.com/redact-sensitive-info-pdf" },
};

export default function RedactSensitiveInfoPdfPage() {
  return (
    <SEOLandingPage
      slug="redact-sensitive-info-pdf"
      keyword="redact sensitive info pdf"
      pageType="A"
      angle="privacy"
      h1="Redact Sensitive Info from PDF"
      heroDescription="Permanently remove and black out private text, SSNs, and credit card numbers from PDFs."
      intro="Simply drawing a black box over sensitive text in basic PDF viewers does NOT remove the underlying data—users can still highlight and copy the hidden text! True redaction permanently deletes the underlying text stream while burning opaque black boxes onto the page."
      steps={[
        { title: "Upload PDF", description: "Select the file containing private data." },
        { title: "Highlight Text to Redact", description: "Select SSNs, names, or numbers to black out." },
        { title: "Apply Permanent Redaction", description: "Permanently burn out data and download." }
      ]}
      features={[
        { icon: Zap, title: "Permanent Data Removal", description: "Deletes underlying text layers completely so data cannot be copied." },
        { icon: Shield, title: "Confidentiality Shield", description: "Guarantees compliance with privacy standards." },
        { icon: Lock, title: "Zero Data Retention", description: "Files auto-purged from cloud servers." },
        { icon: FileCheck, title: "Opaque Black Boxes", description: "Burns solid black bars over sensitive areas." }
      ]}
      useCases={[
        { title: "Legal Filings", description: "Redact personal identifying info (PII) before court submission." },
        { title: "Financial Statements", description: "Black out bank account numbers before sharing audits." },
        { title: "Medical Records", description: "Redact patient confidential data for research sharing." }
      ]}
      midCTA={{ text: "Redact PDF Info Free →", href: "/protect-pdf" }}
      bottomCTA={{ headline: "Permanently remove confidential info from your PDFs.", text: "Redact PDF Free", href: "/protect-pdf" }}
      faqs={[
        { question: "Is this true redaction or just a visual black box?", answer: "It is true redaction; underlying text bytes are deleted permanently from the file stream." },
        { question: "Can someone copy text from under the black box?", answer: "No, the underlying text data no longer exists in the file." }
      ]}
      faqTitle="PDF Redaction FAQ"
      faqSubtitle="Permanent privacy protection"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Protect PDF", href: "/protect-pdf" },
        { name: "Redact PDF", href: "/redact-sensitive-info-pdf" }
      ]}
      themeColor="#1e3a8a"
    />
  );
}
