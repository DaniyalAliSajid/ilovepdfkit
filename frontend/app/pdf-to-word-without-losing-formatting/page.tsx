import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF to Word Without Losing Formatting Free | iLovePDFKit",
  description: "Convert PDF to Word DOCX without losing formatting, fonts, tables, or margins. 100% free online PDF to Word converter.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-to-word-without-losing-formatting" },
};

export default function PdfToWordWithoutLosingFormattingPage() {
  return (
    <SEOLandingPage
      slug="pdf-to-word-without-losing-formatting"
      keyword="pdf to word without losing formatting"
      pageType="A"
      angle="quality"
      h1="PDF to Word Without Losing Formatting"
      heroDescription="Retain exact layout, margins, bullet points, and tables when converting PDF to Word."
      intro="Converting a PDF to Word usually results in broken tables, missing fonts, and mangled page layouts. Our high-precision PDF to Word converter analyzes document structure down to paragraph spacing and table grid borders, outputting an editable Word DOCX file that matches your original PDF pixel for pixel."
      steps={[
        { title: "Upload PDF", description: "Select the PDF document you want to convert." },
        { title: "Layout Parsing", description: "Advanced structural font and table extraction." },
        { title: "Download Word DOCX", description: "Get an exact formatted Word document." }
      ]}
      features={[
        { icon: Zap, title: "Layout Preservation", description: "Keeps margins, columns, and line spacing intact." },
        { icon: Shield, title: "Table Structure", description: "Extracts tables into native Word table grids." },
        { icon: Lock, title: "No Watermarks", description: "Outputs clean, fully editable Word files." },
        { icon: FileCheck, title: "Font Mapping", description: "Maps embedded PDF fonts to standard Word typography." }
      ]}
      useCases={[
        { title: "Editable Resumes", description: "Convert PDF resumes into editable Word files without re-formatting." },
        { title: "Legal Contracts", description: "Modify contract terms in Word while preserving formatting." },
        { title: "Academic Reports", description: "Edit PDF papers with intact tables and citations." }
      ]}
      midCTA={{ text: "Convert PDF to Word Free →", href: "/pdf-to-word" }}
      bottomCTA={{ headline: "Convert PDF to Word with 100% formatting accuracy.", text: "Convert to Word Free", href: "/pdf-to-word" }}
      faqs={[
        { question: "Will my tables stay editable in Word?", answer: "Yes, tables are extracted as native Microsoft Word table elements." },
        { question: "Does this work on scanned PDFs?", answer: "For scanned PDFs, use our Convert Scanned PDF to Word tool with OCR." }
      ]}
      faqTitle="PDF to Word Formatting FAQ"
      faqSubtitle="Exact document layout preservation"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to Word", href: "/pdf-to-word" },
        { name: "Preserve Formatting", href: "/pdf-to-word-without-losing-formatting" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
