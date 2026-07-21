import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Extract Specific Pages from PDF | Custom Range Extractor",
  description: "Extract specific pages or custom ranges (e.g. pages 2, 5-8) from a PDF file. Free online PDF page extractor.",
  alternates: { canonical: "https://ilovepdfkit.com/extract-specific-pages-from-pdf" },
};

export default function ExtractSpecificPagesFromPdfPage() {
  return (
    <SEOLandingPage
      slug="extract-specific-pages-from-pdf"
      keyword="extract specific pages from pdf"
      pageType="A"
      angle="problem"
      h1="Extract Specific Pages from PDF"
      heroDescription="Pull out exact pages or page ranges from any PDF document without editing the original."
      intro="Only need pages 3, 7, and 12-15 from a 100-page manual? You don’t have to send the entire bloated document. Our custom page extractor lets you input exact page numbers or ranges and generates a fresh, lightweight PDF containing only the pages you want."
      steps={[
        { title: "Upload PDF", description: "Select your source PDF document." },
        { title: "Enter Page Numbers", description: "Type custom numbers or ranges (e.g., 1, 4-7)." },
        { title: "Extract & Download", description: "Download your new custom PDF immediately." }
      ]}
      features={[
        { icon: Zap, title: "Custom Page Ranges", description: "Select non-sequential or custom ranges easily." },
        { icon: Shield, title: "Data Privacy", description: "Extracted content remains completely confidential." },
        { icon: Lock, title: "No Account Required", description: "Extract pages anonymously without registration." },
        { icon: FileCheck, title: "Visual Thumbnails", description: "Click page thumbnails to toggle selection." }
      ]}
      useCases={[
        { title: "Research Papers", description: "Extract specific references or data tables." },
        { title: "Contract Excerpts", description: "Share only relevant clause pages with clients." },
        { title: "User Manuals", description: "Pull relevant troubleshooting chapter pages." }
      ]}
      midCTA={{ text: "Extract Specific Pages →", href: "/split-pdf" }}
      bottomCTA={{ headline: "Extract only the pages you need from any PDF.", text: "Extract Pages Free", href: "/split-pdf" }}
      faqs={[
        { question: "How do I specify custom page ranges?", answer: "Type ranges like \"1-3, 5, 8-10\" or click the visual thumbnails in the editor preview." },
        { question: "Does extracting pages delete them from the original PDF?", answer: "No, your original file remains unchanged; a new custom PDF is generated." }
      ]}
      faqTitle="Custom Page Extractor FAQ"
      faqSubtitle="Targeted PDF page extraction"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Split PDF", href: "/split-pdf" },
        { name: "Extract Specific Pages", href: "/extract-specific-pages-from-pdf" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
