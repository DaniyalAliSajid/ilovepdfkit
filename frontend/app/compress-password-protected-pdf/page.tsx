import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress Password Protected PDF Free | iLovePDFKit",
  description: "Compress encrypted or password-protected PDF files free online. Reduce file size without stripping document security.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-password-protected-pdf" },
};

export default function CompressPasswordProtectedPdfPage() {
  return (
    <SEOLandingPage
      slug="compress-password-protected-pdf"
      keyword="compress password protected pdf"
      pageType="A"
      angle="problem"
      h1="Compress Password Protected PDF"
      heroDescription="Shrink file size on encrypted or password-secured PDF files cleanly."
      intro="Need to compress a PDF that is protected by a password? Most online compressors error out when encountering encrypted files. Our security-aware compression engine allows you to authenticate your file and compress its payload without stripping security protocols."
      steps={[
        { title: "Upload Protected PDF", description: "Select your encrypted or password PDF." },
        { title: "Enter Password", description: "Authenticate document access securely." },
        { title: "Compress & Save", description: "Download your small, encrypted PDF." }
      ]}
      features={[
        { icon: Zap, title: "Encrypted File Compression", description: "Handles AES-128 and AES-256 encrypted PDFs." },
        { icon: Shield, title: "Security Preservation", description: "Re-encrypts file with password intact upon download." },
        { icon: Lock, title: "Strict Privacy", description: "Passwords are never stored or logged on servers." },
        { icon: FileCheck, title: "Heavy Compression", description: "Reduces protected file size by up to 80%." }
      ]}
      useCases={[
        { title: "Password-Protected Bank Statements", description: "Compress encrypted financial statements." },
        { title: "Secured Tax Filings", description: "Reduce size of password-locked tax documents." },
        { title: "Encrypted Legal Binders", description: "Shrink secure legal case files." }
      ]}
      midCTA={{ text: "Compress Protected PDF →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Shrink file size on password-protected PDFs safely.", text: "Compress Secured PDF", href: "/compress-pdf" }}
      faqs={[
        { question: "Will my PDF remain password protected after compression?", answer: "Yes, your document will require the password to open even after shrinking." },
        { question: "Is my password safe when typed online?", answer: "Yes, password authentication happens in encrypted temporary memory and is purged." }
      ]}
      faqTitle="Protected PDF Compression FAQ"
      faqSubtitle="Encrypted document handling"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Password Protected", href: "/compress-password-protected-pdf" }
      ]}
      themeColor="#1e3a8a"
    />
  );
}
