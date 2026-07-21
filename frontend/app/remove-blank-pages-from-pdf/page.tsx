import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Remove Blank Pages from PDF Online Free | Document Cleanup",
  description: "Detect and delete blank pages from scanned PDFs automatically. Clean up documents free online.",
  alternates: { canonical: "https://ilovepdfkit.com/remove-blank-pages-from-pdf" },
};

export default function RemoveBlankPagesFromPdfPage() {
  return (
    <SEOLandingPage
      slug="remove-blank-pages-from-pdf"
      keyword="remove blank pages from pdf"
      pageType="A"
      angle="problem"
      h1="Remove Blank Pages from PDF"
      heroDescription="Instantly clean up your PDF documents by removing accidental blank scanned pages."
      intro="Blank pages in scanned contracts and reports look unprofessional and waste paper when printing. Manually hunting down empty pages in large files is tedious. Use our visual page manager to identify and delete blank pages from your PDF in seconds."
      steps={[
        { title: "Upload PDF", description: "Select the file containing blank pages." },
        { title: "Select Blank Pages", description: "Visually identify and click empty pages to delete." },
        { title: "Download Clean PDF", description: "Save your polished document free of blank pages." }
      ]}
      features={[
        { icon: Zap, title: "Visual Grid Preview", description: "Easily spot blank or empty pages." },
        { icon: Shield, title: "Clean Output", description: "Ensures professional presentation." },
        { icon: Lock, title: "Free Cleanup Tool", description: "No hidden subscription paywalls." },
        { icon: FileCheck, title: "Instant Removal", description: "Deletes selected pages instantly." }
      ]}
      useCases={[
        { title: "Double-Sided Scans", description: "Remove blank backsides created during duplex scanning." },
        { title: "Exported Reports", description: "Delete blank overflow pages from Word/Excel exports." },
        { title: "Print Prep", description: "Eliminate wasted paper by removing blank pages." }
      ]}
      midCTA={{ text: "Remove Blank Pages →", href: "/delete-pdf-pages" }}
      bottomCTA={{ headline: "Clean up your PDF documents instantly.", text: "Remove Blank Pages Free", href: "/delete-pdf-pages" }}
      faqs={[
        { question: "Can I remove multiple blank pages at once?", answer: "Yes, select all blank thumbnails in the visual grid and delete them together." },
        { question: "Will page numbering adjust automatically?", answer: "Yes, the document structure updates seamlessly." }
      ]}
      faqTitle="Remove Blank Pages FAQ"
      faqSubtitle="Document cleanup made simple"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Delete Pages", href: "/delete-pdf-pages" },
        { name: "Remove Blank Pages", href: "/remove-blank-pages-from-pdf" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
