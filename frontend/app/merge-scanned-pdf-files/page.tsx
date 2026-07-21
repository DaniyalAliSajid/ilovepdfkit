import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Merge Scanned PDF Files Online Free | iLovePDFKit",
  description: "Combine multiple scanned PDF files into one clean document online. Free, fast, and maintains high image resolution.",
  alternates: { canonical: "https://ilovepdfkit.com/merge-scanned-pdf-files" },
};

export default function MergeScannedPdfFilesPage() {
  return (
    <SEOLandingPage
      slug="merge-scanned-pdf-files"
      keyword="merge scanned pdf files"
      pageType="A"
      angle="use-case"
      h1="Merge Scanned PDF Files Online"
      heroDescription="Combine multiple scanned document pages into a single organized master PDF."
      intro="When scanning multi-page documents on physical scanners or mobile scanner apps, pages often save as separate PDF files. Merging scanned PDF files manually is tedious. Our online PDF merger stitches all your scanned pages into one neatly organized PDF document in seconds."
      steps={[
        { title: "Upload Scanned PDFs", description: "Select all scanned PDF files you want to combine." },
        { title: "Arrange Page Order", description: "Drag and drop files to ensure correct page sequence." },
        { title: "Merge & Download", description: "Combine all scans into one single PDF file." }
      ]}
      features={[
        { icon: Zap, title: "Instant Merging", description: "Stitches multi-page scans in seconds." },
        { icon: Shield, title: "High Quality", description: "Preserves scan resolution and OCR clarity." },
        { icon: Lock, title: "Private & Secure", description: "Files deleted automatically after download." },
        { icon: FileCheck, title: "Visual Reordering", description: "Preview thumbnails before stitching." }
      ]}
      useCases={[
        { title: "Multi-Page Contracts", description: "Merge separately scanned signature pages into one document." },
        { title: "Medical Records", description: "Combine patient chart scans into a master record." },
        { title: "Tax & Receipt Packets", description: "Bundle financial scans for tax submission." }
      ]}
      midCTA={{ text: "Merge Scanned PDFs Now →", href: "/merge-pdf" }}
      bottomCTA={{ headline: "Combine all your scanned documents into one file.", text: "Merge Scanned PDFs", href: "/merge-pdf" }}
      faqs={[
        { question: "Can I reorder pages before merging scanned PDFs?", answer: "Yes, drag and drop file thumbnails to set the exact order before clicking Merge." },
        { question: "Is there a limit on how many scanned pages I can combine?", answer: "You can combine dozens of pages at once without lag." }
      ]}
      faqTitle="Merge Scanned PDF FAQ"
      faqSubtitle="Combine scanned pages easily"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Merge PDF", href: "/merge-pdf" },
        { name: "Merge Scanned PDFs", href: "/merge-scanned-pdf-files" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
