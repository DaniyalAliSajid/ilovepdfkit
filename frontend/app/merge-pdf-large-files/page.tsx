import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Merge Large PDF Files Free | Stitch Heavy PDFs Online",
  description: "Merge large PDF files online without browser crashes or file size limit errors. Fast, secure, and handles heavy documents.",
  alternates: { canonical: "https://ilovepdfkit.com/merge-pdf-large-files" },
};

export default function MergePdfLargeFilesPage() {
  return (
    <SEOLandingPage
      slug="merge-pdf-large-files"
      keyword="merge pdf large files"
      pageType="A"
      angle="problem"
      h1="Merge Large PDF Files Online"
      heroDescription="Stitch heavy, multi-megabyte PDF files together smoothly without memory crashes."
      intro="Most web PDF tools crash or throw errors when you try to merge large PDF files exceeding 50MB. Our high-capacity merging server architecture handles heavy PDF documents efficiently, letting you combine massive files without freezing your browser."
      steps={[
        { title: "Upload Large PDFs", description: "Select heavy PDF files up to 100MB+." },
        { title: "Set Page Order", description: "Organize document order in visual grid." },
        { title: "Merge & Save", description: "Download the compiled master PDF." }
      ]}
      features={[
        { icon: Zap, title: "High-Capacity Engine", description: "Handles large files without freezing." },
        { icon: Shield, title: "Secure Transfer", description: "256-bit SSL encryption for enterprise files." },
        { icon: Lock, title: "No File Size Paywall", description: "Free merging for large files." },
        { icon: FileCheck, title: "Memory Optimized", description: "Fast processing for heavy multi-page documents." }
      ]}
      useCases={[
        { title: "Architectural Blueprints", description: "Combine heavy CAD graphic PDF sets." },
        { title: "Legal Case Binders", description: "Stitch hundreds of legal exhibit pages." },
        { title: "Financial Audits", description: "Merge comprehensive annual financial statements." }
      ]}
      midCTA={{ text: "Merge Large PDFs Now →", href: "/merge-pdf" }}
      bottomCTA={{ headline: "Combine heavy PDF documents without errors.", text: "Merge Large PDFs", href: "/merge-pdf" }}
      faqs={[
        { question: "What is the maximum file size for merging?", answer: "Our system supports large files up to 100MB per document." },
        { question: "Will merging large PDFs slow down my computer?", answer: "No, processing occurs on fast cloud infrastructure, not your local RAM." }
      ]}
      faqTitle="Large PDF Merging FAQ"
      faqSubtitle="Heavy document processing"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Merge PDF", href: "/merge-pdf" },
        { name: "Merge Large Files", href: "/merge-pdf-large-files" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
