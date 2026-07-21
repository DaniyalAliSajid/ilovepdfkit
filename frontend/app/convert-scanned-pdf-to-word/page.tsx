import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Convert Scanned PDF to Word Online Free | OCR Converter",
  description: "Convert scanned PDF files to editable Word documents free online using OCR. Turn image PDFs into text in seconds.",
  alternates: { canonical: "https://ilovepdfkit.com/convert-scanned-pdf-to-word" },
};

export default function ConvertScannedPdfToWordPage() {
  return (
    <SEOLandingPage
      slug="convert-scanned-pdf-to-word"
      keyword="convert scanned pdf to word"
      pageType="A"
      angle="problem"
      h1="Convert Scanned PDF to Word (OCR)"
      heroDescription="Extract editable text from scanned paper documents and photo PDFs using optical character recognition."
      intro="Normal PDF converters fail on scanned documents because the PDF contains image pixels instead of selectable text layers. Our Optical Character Recognition (OCR) engine scans every image pixel, identifies character typography, and converts your non-selectable scanned PDF into a fully editable Word DOCX document."
      steps={[
        { title: "Upload Scanned PDF", description: "Select your scanned paper or photo PDF." },
        { title: "Run OCR Recognition", description: "Extract typography and paragraph blocks." },
        { title: "Download Editable Word", description: "Get a Word file with editable text." }
      ]}
      features={[
        { icon: Zap, title: "Advanced OCR Engine", description: "Recognizes printed characters with extreme precision." },
        { icon: Shield, title: "Multi-Language", description: "Supports English, European, and global character sets." },
        { icon: Lock, title: "100% Free OCR", description: "No page charges or subscription requirements." },
        { icon: FileCheck, title: "Text Formatting", description: "Preserves paragraphs and line breaks." }
      ]}
      useCases={[
        { title: "Old Paper Books", description: "Digitize paper manuscripts into editable Word files." },
        { title: "Signed Contracts", description: "Turn physical scanned contracts into editable text." },
        { title: "Printed Handouts", description: "Re-purpose printed class notes and articles." }
      ]}
      midCTA={{ text: "Convert Scanned PDF →", href: "/pdf-to-word" }}
      bottomCTA={{ headline: "Turn scanned paper PDFs into editable Word files.", text: "Convert Scan Free", href: "/pdf-to-word" }}
      faqs={[
        { question: "How accurate is the OCR conversion?", answer: "Our OCR engine achieves 98%+ text recognition accuracy on clear scans." },
        { question: "Can I edit the converted text in Microsoft Word?", answer: "Yes, all text will be fully selectable and editable." }
      ]}
      faqTitle="Scanned PDF to Word OCR FAQ"
      faqSubtitle="Optical character recognition tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to Word", href: "/pdf-to-word" },
        { name: "Scanned OCR", href: "/convert-scanned-pdf-to-word" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
