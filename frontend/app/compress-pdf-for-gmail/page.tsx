import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress PDF for Gmail Attachment Free | iLovePDFKit",
  description: "Reduce PDF size for Gmail attachments to avoid 25MB limits or bounce-backs. Send emails quickly with optimized PDFs.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-pdf-for-gmail" },
};

export default function CompressPdfForGmailPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-for-gmail"
      keyword="compress pdf for gmail"
      pageType="A"
      angle="use-case"
      h1="Compress PDF for Gmail Attachments"
      heroDescription="Avoid Google Drive links and email bounce errors by shrinking PDFs for fast Gmail delivery."
      intro="Gmail caps direct file attachments at 25MB, but even smaller 10MB–20MB PDFs cause slow upload times and bounce errors on recipient inboxes. Compressing your PDF before attaching it ensures instant delivery and saves mailbox storage."
      steps={[
        { title: "Upload PDF", description: "Select the oversized PDF for your email." },
        { title: "Optimize for Mail", description: "Compress file size while preserving legibility." },
        { title: "Attach to Gmail", description: "Download and attach directly in Gmail." }
      ]}
      features={[
        { icon: Zap, title: "Bypass Mail Limits", description: "Keep files well below Gmail attachment limits." },
        { icon: Shield, title: "Private & Safe", description: "No third-party access to your personal files." },
        { icon: Lock, title: "No Account", description: "Use directly without creating an account." },
        { icon: FileCheck, title: "Clean Rendering", description: "Preserves fonts, vector logos, and tables." }
      ]}
      useCases={[
        { title: "Client Proposals", description: "Send sales pitch decks without slow loading times." },
        { title: "Invoices & Reports", description: "Deliver financial reports cleanly via Gmail." },
        { title: "Job Resume Sending", description: "Ensure your resume arrives instantly in the inbox." }
      ]}
      midCTA={{ text: "Compress PDF for Gmail →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Send large PDFs through Gmail effortlessly.", text: "Compress for Gmail", href: "/compress-pdf" }}
      faqs={[
        { question: "What is Gmail limit for PDF attachments?", answer: "Gmail allows up to 25MB total attachments. Compressing files down to 2MB–5MB guarantees fast delivery." },
        { question: "Will image quality in the attachment drop?", answer: "Our email compression preset balances crisp image viewing with minimal file size." }
      ]}
      faqTitle="Gmail Compression FAQ"
      faqSubtitle="Fast PDF delivery via email"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Compress for Gmail", href: "/compress-pdf-for-gmail" }
      ]}
      themeColor="#10b981"
    />
  );
}
