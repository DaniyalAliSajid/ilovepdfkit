import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Convert PDF to PowerPoint Free Online | iLovePDFKit",
  description: "Convert PDF to PowerPoint presentation (PPT/PPTX) free online. Turn PDF pages into editable presentation slides.",
  alternates: { canonical: "https://ilovepdfkit.com/convert-pdf-to-powerpoint-free" },
};

export default function ConvertPdfToPowerpointFreePage() {
  return (
    <SEOLandingPage
      slug="convert-pdf-to-powerpoint-free"
      keyword="convert pdf to powerpoint free"
      pageType="A"
      angle="use-case"
      h1="Convert PDF to PowerPoint Free"
      heroDescription="Transform PDF pages into editable PowerPoint slides (PPT/PPTX) in seconds."
      intro="Received a presentation in PDF format and need to present or edit the slides? Rebuilding a presentation from scratch is tedious. Our PDF to PowerPoint converter transforms every PDF page into an individual slide in Microsoft PowerPoint, keeping text frames and visual graphics intact."
      steps={[
        { title: "Upload PDF Deck", description: "Select the presentation PDF file." },
        { title: "Slide Generation", description: "Converts PDF pages into PowerPoint slides." },
        { title: "Download PPTX", description: "Open and edit in Microsoft PowerPoint." }
      ]}
      features={[
        { icon: Zap, title: "Slide Creation", description: "Maps PDF pages to individual PPTX slides." },
        { icon: Shield, title: "Vector Graphics", description: "Preserves diagrams, charts, and slide elements." },
        { icon: Lock, title: "Free Converter", description: "No software purchases or subscriptions." },
        { icon: FileCheck, title: "Editable Text Frames", description: "Keeps slide text blocks editable." }
      ]}
      useCases={[
        { title: "Re-purposing Pitch Decks", description: "Edit PDF client pitch decks in PowerPoint." },
        { title: "Lecture Slides", description: "Convert professor PDF slides into editable PPT." },
        { title: "Webinar Presentations", description: "Update outdated PDF presentation slides." }
      ]}
      midCTA={{ text: "Convert PDF to PPT Free →", href: "/pdf-to-ppt" }}
      bottomCTA={{ headline: "Turn any PDF presentation into editable PowerPoint slides.", text: "Convert to PPT Free", href: "/pdf-to-ppt" }}
      faqs={[
        { question: "Will the presentation layout remain the same?", answer: "Yes, slide dimensions, backgrounds, and element positions are preserved." },
        { question: "Can I edit the text on converted slides?", answer: "Yes, text is extracted as editable PowerPoint text boxes." }
      ]}
      faqTitle="PDF to PowerPoint FAQ"
      faqSubtitle="Slide conversion guidance"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PDF to PPT", href: "/pdf-to-ppt" },
        { name: "Convert to PowerPoint", href: "/convert-pdf-to-powerpoint-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
