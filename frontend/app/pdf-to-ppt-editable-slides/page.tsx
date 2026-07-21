import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF to PPT Editable Slides Free | High Quality Converter",
  description: "Convert PDF to editable PPTX slides without locked background images. High-quality online PDF to PowerPoint converter.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-to-ppt-editable-slides" },
};

export default function PdfToPptEditableSlidesPage() {
  return (
    <SEOLandingPage
      slug="pdf-to-ppt-editable-slides"
      keyword="pdf to ppt editable slides"
      pageType="A"
      angle="quality"
      h1="PDF to PPT Editable Slides Converter"
      heroDescription="Extract fully editable slide elements from PDF files without locked background images."
      intro="Many cheap converters just snapshot PDF pages as flattened background photos on PPT slides, making text impossible to edit. Our advanced PDF to PPT converter parses underlying vectors and fonts, producing truly editable PowerPoint slides where you can change text, move shapes, and update colors."
      steps={[
        { title: "Select PDF File", description: "Upload your presentation PDF." },
        { title: "Element Parsing", description: "Extract editable text boxes and shapes." },
        { title: "Download Editable PPTX", description: "Save your presentation slides." }
      ]}
      features={[
        { icon: Zap, title: "Editable Text", description: "No flat image backgrounds; real editable text." },
        { icon: Shield, title: "Shape Extraction", description: "Converts lines and boxes into native PPT shapes." },
        { icon: Lock, title: "100% Free", description: "Unlimited slide conversions free." },
        { icon: FileCheck, title: "High Resolution", description: "Preserves high quality image assets." }
      ]}
      useCases={[
        { title: "Sales Presentations", description: "Update pricing tables on PDF sales decks." },
        { title: "Corporate Training", description: "Modify slide content for internal training workshops." },
        { title: "Conference Talks", description: "Customize PDF speaker decks for new events." }
      ]}
      midCTA={{ text: "Convert to Editable PPT →", href: "/pdf-to-ppt" }}
      bottomCTA={{ headline: "Get fully editable PPTX slides from any PDF.", text: "Convert PDF Free", href: "/pdf-to-ppt" }}
      faqs={[
        { question: "Why are some PDF slides hard to edit?", answer: "If a PDF was generated from scanned photos, text cannot be separated without OCR." },
        { question: "Does this work on Google Slides?", answer: "Yes, converted PPTX files upload directly into Google Slides." }
      ]}
      faqTitle="PDF to PPT Editable Slides FAQ"
      faqSubtitle="Quality slide extraction"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to PPT", href: "/pdf-to-ppt" },
        { name: "Editable Slides", href: "/pdf-to-ppt-editable-slides" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
