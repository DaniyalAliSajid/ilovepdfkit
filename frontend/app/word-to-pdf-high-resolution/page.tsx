import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Word to PDF High Resolution Free | Print Quality Converter",
  description: "Convert Word DOCX to high-resolution PDF for professional printing. Preserves vector graphics, embedded fonts, and margins.",
  alternates: { canonical: "https://ilovepdfkit.com/word-to-pdf-high-resolution" },
};

export default function WordToPdfHighResolutionPage() {
  return (
    <SEOLandingPage
      slug="word-to-pdf-high-resolution"
      keyword="word to pdf high resolution"
      pageType="A"
      angle="quality"
      h1="Word to PDF High Resolution Converter"
      heroDescription="Turn Microsoft Word documents into crisp, print-ready HD PDF files."
      intro="Standard Word exports often compress embedded images, rendering blurred graphics when printed. Our high-resolution Word to PDF converter ensures high DPI photo preservation, exact font subset embedding, and sharp vector line output suitable for commercial printing."
      steps={[
        { title: "Upload Word DOCX", description: "Select your Word document." },
        { title: "High-Res Rendering", description: "Convert with 300+ DPI graphics preservation." },
        { title: "Download HD PDF", description: "Save your print-ready PDF file." }
      ]}
      features={[
        { icon: Zap, title: "Print Quality Output", description: "Preserves 300 DPI image assets for crisp printing." },
        { icon: Shield, title: "Font Embedding", description: "Includes custom typography data cleanly." },
        { icon: Lock, title: "100% Free", description: "No subscription required to export HD PDFs." },
        { icon: FileCheck, title: "Exact Layout Match", description: "Guarantees zero page breaks or margin shifts." }
      ]}
      useCases={[
        { title: "Book Printing", description: "Export Word book manuscripts for self-publishing printers." },
        { title: "Corporate Brochures", description: "Generate high-res marketing PDF brochures from Word." },
        { title: "Official Certificates", description: "Create sharp printable certificates." }
      ]}
      midCTA={{ text: "Convert Word to HD PDF →", href: "/word-to-pdf" }}
      bottomCTA={{ headline: "Convert Word files into print-ready high-res PDFs.", text: "Convert Word Free", href: "/word-to-pdf" }}
      faqs={[
        { question: "Will my custom Word fonts look identical in PDF?", answer: "Yes, fonts are embedded as vector outlines during PDF compilation." },
        { question: "Does this support docx and doc formats?", answer: "Yes, both .doc and .docx formats are fully supported." }
      ]}
      faqTitle="Word to High-Res PDF FAQ"
      faqSubtitle="Print-ready PDF export"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Word to PDF", href: "/word-to-pdf" },
        { name: "High Resolution", href: "/word-to-pdf-high-resolution" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
