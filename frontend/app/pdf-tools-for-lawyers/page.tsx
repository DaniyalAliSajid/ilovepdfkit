import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF Tools for Lawyers & Legal Teams | Secure Legal Suite",
  description: "Compress legal filings, add Bates numbering headers, merge exhibit binders, and redact confidential case data free.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-tools-for-lawyers" },
};

export default function PdfToolsForLawyersPage() {
  return (
    <SEOLandingPage
      slug="pdf-tools-for-lawyers"
      keyword="pdf tools for lawyers"
      pageType="C"
      angle="audience"
      h1="PDF Tools for Lawyers & Legal Professionals"
      heroDescription="Secure, court-ready PDF utilities: redact private data, merge case exhibit binders, and compress filings."
      intro="Legal teams handle thousands of sensitive PDF pages daily. Court e-filing portals enforce strict file size caps, while client confidentiality demands permanent redaction and secure document merging. Our free legal PDF suite provides essential document utilities built for attorneys and paralegals."
      steps={[
        { title: "Redact PII Data", description: "Permanently black out SSNs and confidential testimony." },
        { title: "Assemble Exhibit Binders", description: "Merge separate evidence PDFs into indexed case binders." },
        { title: "Compress for E-Filing", description: "Shrink briefs under court e-filing size limits." }
      ]}
      features={[
        { icon: Zap, title: "Court E-Filing Ready", description: "Shrink legal briefs to fit strict state court portal caps." },
        { icon: Shield, title: "True Redaction", description: "Permanently delete underlying text bytes for total privacy." },
        { icon: Lock, title: "Confidentiality First", description: "Zero cloud data retention; automatic file purging." },
        { icon: FileCheck, title: "Bates & Header Stamping", description: "Add page numbers and case headers cleanly." }
      ]}
      toolSpotlights={[
        { name: "Redact Sensitive Info", href: "/protect-pdf", description: "Permanently black out private client data before filing.", icon: Shield },
        { name: "Merge Legal Exhibits", href: "/merge-pdf", description: "Stitch evidence PDFs into structured case binders.", icon: Zap },
        { name: "Compress E-Filings", href: "/compress-pdf", description: "Bypass court portal \"File Too Large\" submission errors.", icon: Lock }
      ]}
      midCTA={{ text: "Explore Legal PDF Suite →", href: "/" }}
      bottomCTA={{ headline: "Streamline your legal document preparation today.", text: "Use Legal Suite Free", href: "/" }}
      faqs={[
        { question: "Does redaction permanently remove text?", answer: "Yes, underlying text bytes are deleted from the file stream so data cannot be copied." },
        { question: "Are files stored on your servers?", answer: "No, all uploaded and processed files are shredded automatically." }
      ]}
      faqTitle="Legal PDF Suite FAQ"
      faqSubtitle="Court document compliance guide"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Legal Tools", href: "/pdf-tools-for-lawyers" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
