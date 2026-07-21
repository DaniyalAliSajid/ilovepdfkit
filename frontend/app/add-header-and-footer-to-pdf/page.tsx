import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Add Header and Footer to PDF Online Free | iLovePDFKit",
  description: "Add page numbers, dates, and custom text headers and footers to PDF documents free online.",
  alternates: { canonical: "https://ilovepdfkit.com/add-header-and-footer-to-pdf" },
};

export default function AddHeaderAndFooterToPdfPage() {
  return (
    <SEOLandingPage
      slug="add-header-and-footer-to-pdf"
      keyword="add header and footer to pdf"
      pageType="A"
      angle="use-case"
      h1="Add Header and Footer to PDF"
      heroDescription="Format PDF documents professionally by stamping page numbers, dates, and headers/footers."
      intro="Preparing academic papers, legal exhibits, or business proposals requires clean page numbering and document headers. Our header and footer editor lets you stamp custom header titles, dates, page numbers, and confidentiality notices cleanly across all pages."
      steps={[
        { title: "Upload PDF Document", description: "Select the document needing headers/footers." },
        { title: "Configure Header & Footer", description: "Set text alignment, font size, and page numbering format." },
        { title: "Download Formatted PDF", description: "Save your professionally formatted PDF." }
      ]}
      features={[
        { icon: Zap, title: "Flexible Placement", description: "Add text to top-left, center, top-right, or bottom margins." },
        { icon: Shield, title: "Dynamic Page Numbers", description: "Auto-formats \"Page X of Y\" or standard numbering." },
        { icon: Lock, title: "100% Free Tool", description: "Format documents without buying Adobe Acrobat." },
        { icon: FileCheck, title: "Custom Formatting", description: "Adjust typography, color, and margin padding." }
      ]}
      useCases={[
        { title: "Academic Dissertations", description: "Add required page numbers and header titles." },
        { title: "Legal Briefs", description: "Stamp case numbers and page footers across filings." },
        { title: "Corporate Proposals", description: "Add company header titles and date stamps." }
      ]}
      midCTA={{ text: "Add Header & Footer Free →", href: "/add-page-numbers" }}
      bottomCTA={{ headline: "Format your PDFs with clean headers, footers, and page numbers.", text: "Add Header & Footer", href: "/add-page-numbers" }}
      faqs={[
        { question: "Can I omit headers on the first page?", answer: "Yes, check the \"Skip Cover Page\" option to start numbering from page 2." },
        { question: "What page number formats are supported?", answer: "Supports \"1, 2, 3\", \"Page 1 of 10\", and Roman numerals." }
      ]}
      faqTitle="Header and Footer FAQ"
      faqSubtitle="Document pagination tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Add Page Numbers", href: "/add-page-numbers" },
        { name: "Header & Footer", href: "/add-header-and-footer-to-pdf" }
      ]}
      themeColor="#1e3a8a"
    />
  );
}
