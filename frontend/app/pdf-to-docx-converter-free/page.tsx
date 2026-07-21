import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF to DOCX Converter Free Online | Fast & Clean Export",
  description: "Convert PDF to DOCX format free online. Fast, accurate, and compatible with Microsoft Word 2016, 2019, 365.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-to-docx-converter-free" },
};

export default function PdfToDocxConverterFreePage() {
  return (
    <SEOLandingPage
      slug="pdf-to-docx-converter-free"
      keyword="pdf to docx converter free"
      pageType="A"
      angle="speed"
      h1="PDF to DOCX Converter Free"
      heroDescription="Export PDF documents to native Microsoft Word DOCX format in seconds."
      intro="Need a native DOCX file for modern Microsoft Word, Office 365, or Google Docs? Our online PDF to DOCX converter exports clean, uncorrupted DOCX files that open smoothly across all word processing software without compatibility errors."
      steps={[
        { title: "Upload PDF", description: "Drop your PDF file into the converter." },
        { title: "Export to DOCX", description: "Fast cloud format transformation." },
        { title: "Download DOCX", description: "Open directly in Office 365 or Google Docs." }
      ]}
      features={[
        { icon: Zap, title: "Native DOCX Output", description: "Fully compatible with Word 365, 2021, and Google Docs." },
        { icon: Shield, title: "Clean File Export", description: "No file corruption or missing font errors." },
        { icon: Lock, title: "Free & Fast", description: "Convert unlimited files without account setup." },
        { icon: FileCheck, title: "Image Retention", description: "Preserves images and graphic illustrations." }
      ]}
      useCases={[
        { title: "Office 365 Editing", description: "Convert PDFs for editing in modern cloud Word." },
        { title: "Google Docs Workflow", description: "Upload converted DOCX directly into Google Docs." },
        { title: "Team Collaboration", description: "Share editable DOCX files with colleagues." }
      ]}
      midCTA={{ text: "Convert PDF to DOCX →", href: "/pdf-to-word" }}
      bottomCTA={{ headline: "Export clean DOCX files from any PDF.", text: "Convert to DOCX Free", href: "/pdf-to-word" }}
      faqs={[
        { question: "What is the difference between DOC and DOCX?", answer: "DOCX is the modern XML format used by Microsoft Word 2007 and newer." },
        { question: "Can I convert DOCX back to PDF later?", answer: "Yes, use our Word to PDF tool to convert DOCX back to PDF." }
      ]}
      faqTitle="PDF to DOCX FAQ"
      faqSubtitle="Modern Word format export"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to Word", href: "/pdf-to-word" },
        { name: "PDF to DOCX", href: "/pdf-to-docx-converter-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
