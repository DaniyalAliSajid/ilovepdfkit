import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF Tools for Accountants & CPAs | Tax & Financial Suite",
  description: "Convert PDF financial statements into Excel, compress tax return packets, and lock fillable PDF forms free.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-tools-for-accountants" },
};

export default function PdfToolsForAccountantsPage() {
  return (
    <SEOLandingPage
      slug="pdf-tools-for-accountants"
      keyword="pdf tools for accountants"
      pageType="C"
      angle="audience"
      h1="PDF Tools for Accountants & CPAs"
      heroDescription="Automate accounting document workflows: convert PDF tables to Excel, compress tax returns, and flatten forms."
      intro="Tax season demands speed and accuracy. Manually re-keying bank statement tables into Excel wastes accounting hours, while sending uncompressed client tax packets causes email bounces. Our accounting PDF suite equips CPAs and bookkeepers with free, high-speed tools."
      steps={[
        { title: "PDF to Excel", description: "Extract financial tables directly into structured Excel columns." },
        { title: "Compress Tax Packets", description: "Shrink heavy return PDFs for fast client emailing." },
        { title: "Flatten Form Fields", description: "Lock completed tax forms into read-only PDFs." }
      ]}
      features={[
        { icon: Zap, title: "Table Extraction", description: "Converts PDF tables into formula-ready Excel spreadsheets." },
        { icon: Shield, title: "Client Email Optimization", description: "Compresses multi-page tax filings below 5MB." },
        { icon: Lock, title: "Form Locking", description: "Flattens fillable forms to prevent client tampering." },
        { icon: FileCheck, title: "Bank Statement OCR", description: "Extracts data from scanned statement photos." }
      ]}
      toolSpotlights={[
        { name: "PDF to Excel Converter", href: "/pdf-to-excel", description: "Extract PDF bank statements into Excel spreadsheets.", icon: Zap },
        { name: "Compress Tax Returns", href: "/compress-pdf", description: "Shrink heavy audit and tax filings for client emailing.", icon: Lock },
        { name: "Flatten Tax Forms", href: "/protect-pdf", description: "Lock filled form fields to make returns read-only.", icon: Shield }
      ]}
      midCTA={{ text: "Explore Accounting Suite →", href: "/" }}
      bottomCTA={{ headline: "Speed up your accounting document processing.", text: "Use CPA Suite Free", href: "/" }}
      faqs={[
        { question: "Does PDF to Excel preserve column alignment?", answer: "Yes, financial figures are mapped cleanly into separate columns." },
        { question: "Is it safe for client tax data?", answer: "Yes, encrypted transfer and instant server file purges guarantee privacy." }
      ]}
      faqTitle="Accountant PDF Suite FAQ"
      faqSubtitle="Financial document automation"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Accountant Tools", href: "/pdf-tools-for-accountants" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
