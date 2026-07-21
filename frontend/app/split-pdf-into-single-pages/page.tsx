import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Split PDF into Single Pages Online Free | iLovePDFKit",
  description: "Separate every page of a multi-page PDF into standalone 1-page PDF files instantly. Free online page extractor.",
  alternates: { canonical: "https://ilovepdfkit.com/split-pdf-into-single-pages" },
};

export default function SplitPdfIntoSinglePagesPage() {
  return (
    <SEOLandingPage
      slug="split-pdf-into-single-pages"
      keyword="split pdf into single pages"
      pageType="A"
      angle="use-case"
      h1="Split PDF into Single Pages"
      heroDescription="Convert a multi-page PDF document into individual 1-page PDF files in one click."
      intro="Have a 20-page PDF document and need every page saved as its own separate PDF file? Manually saving each page takes forever. Our split PDF into single pages tool automates the process, extracting every page into individual 1-page files delivered cleanly."
      steps={[
        { title: "Upload Multi-Page PDF", description: "Drop your document into the splitter." },
        { title: "Select \"Every Page\"", description: "Choose single-page extraction mode." },
        { title: "Download All Pages", description: "Save all split 1-page PDFs at once." }
      ]}
      features={[
        { icon: Zap, title: "One-Click Extraction", description: "Splits 100+ pages automatically in seconds." },
        { icon: Shield, title: "Precise Quality", description: "Preserves original text and image rendering." },
        { icon: Lock, title: "100% Free", description: "No page limits or premium fees." },
        { icon: FileCheck, title: "Clean Naming", description: "Output files systematically numbered by page." }
      ]}
      useCases={[
        { title: "Invoice Packets", description: "Separate a bulk invoice PDF into individual client invoices." },
        { title: "Student Certificates", description: "Split multi-page certificate batches into single files." },
        { title: "Form Submissions", description: "Extract specific single-page submission forms." }
      ]}
      midCTA={{ text: "Split into Single Pages →", href: "/split-pdf" }}
      bottomCTA={{ headline: "Turn any multi-page PDF into separate 1-page files.", text: "Split PDF Free", href: "/split-pdf" }}
      faqs={[
        { question: "How do I download all split single pages?", answer: "You can download them individually or as a single organized ZIP package." },
        { question: "Can I split password-protected PDFs?", answer: "Unlock the file using our Unlock PDF tool first, then split into single pages." }
      ]}
      faqTitle="Single Page Splitter FAQ"
      faqSubtitle="Instant page separation"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Split PDF", href: "/split-pdf" },
        { name: "Single Pages", href: "/split-pdf-into-single-pages" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
