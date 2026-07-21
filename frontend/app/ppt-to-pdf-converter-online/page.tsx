import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PPT to PDF Converter Online Free | PowerPoint to PDF",
  description: "Convert PowerPoint (PPT/PPTX) presentations to PDF online free. Keep fonts, animation layouts, and slide graphics intact.",
  alternates: { canonical: "https://ilovepdfkit.com/ppt-to-pdf-converter-online" },
};

export default function PptToPdfConverterOnlinePage() {
  return (
    <SEOLandingPage
      slug="ppt-to-pdf-converter-online"
      keyword="ppt to pdf converter online"
      pageType="A"
      angle="speed"
      h1="PPT to PDF Converter Online Free"
      heroDescription="Convert PowerPoint slides (PPT/PPTX) into high-resolution, universal PDF documents."
      intro="Sending PowerPoint PPT files to clients often leads to missing font errors or broken slide layouts if the recipient does not have your exact fonts installed. Converting your PPT presentation to PDF ensures your slides look identical on every screen, tablet, or projector."
      steps={[
        { title: "Upload PPT/PPTX", description: "Select your PowerPoint file." },
        { title: "Render PDF", description: "High-definition slide vector rendering." },
        { title: "Download Clean PDF", description: "Get a crisp, shareable PDF deck." }
      ]}
      features={[
        { icon: Zap, title: "Font Embedding", description: "Embeds typography so slides render perfectly anywhere." },
        { icon: Shield, title: "Universal Compatibility", description: "View slides on any computer or smartphone." },
        { icon: Lock, title: "Free Online Tool", description: "No software or Office subscription needed." },
        { icon: FileCheck, title: "Print Ready", description: "Generates print-perfect slide handouts." }
      ]}
      useCases={[
        { title: "Client Pitch Decks", description: "Send immutable, professional PDF proposals." },
        { title: "Handout Printing", description: "Print slide handouts without alignment shifts." },
        { title: "Webinar Distributables", description: "Share presentation materials safely after webinars." }
      ]}
      midCTA={{ text: "Convert PPT to PDF Free →", href: "/ppt-to-pdf" }}
      bottomCTA={{ headline: "Convert PowerPoint presentations to PDF cleanly.", text: "Convert PPT Free", href: "/ppt-to-pdf" }}
      faqs={[
        { question: "Will slide animations appear in PDF?", answer: "PDFs store static slides; final slide states are rendered clearly." },
        { question: "Supports both .ppt and .pptx formats?", answer: "Yes, supports legacy .ppt and modern .pptx PowerPoint files." }
      ]}
      faqTitle="PPT to PDF Converter FAQ"
      faqSubtitle="PowerPoint conversion guide"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PPT to PDF", href: "/ppt-to-pdf" },
        { name: "Convert PPT", href: "/ppt-to-pdf-converter-online" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
