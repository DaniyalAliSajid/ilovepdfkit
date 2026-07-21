import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PNG to PDF Converter Free Online | Transparent PNG to PDF",
  description: "Convert PNG images to PDF free online. Preserves PNG transparency, high resolution, and color profiles.",
  alternates: { canonical: "https://ilovepdfkit.com/png-to-pdf-converter-free" },
};

export default function PngToPdfConverterFreePage() {
  return (
    <SEOLandingPage
      slug="png-to-pdf-converter-free"
      keyword="png to pdf converter free"
      pageType="A"
      angle="speed"
      h1="PNG to PDF Converter Free Online"
      heroDescription="Convert PNG graphics and transparent images into clean PDF documents."
      intro="Converting PNG files to PDF requires careful handling of alpha transparency channels and sharp vector line art. Our PNG to PDF converter turns transparent PNG logos, diagrams, and illustrations into crisp PDF pages without adding ugly black backgrounds."
      steps={[
        { title: "Upload PNG Images", description: "Select your PNG graphic files." },
        { title: "Adjust Layout", description: "Set page orientation and margin padding." },
        { title: "Download PDF", description: "Save your clean PDF document." }
      ]}
      features={[
        { icon: Zap, title: "Transparency Support", description: "Keeps transparent PNG backgrounds clean." },
        { icon: Shield, title: "Lossless Conversion", description: "No compression artifacts on sharp line art." },
        { icon: Lock, title: "100% Free", description: "Convert unlimited PNG images without paywalls." },
        { icon: FileCheck, title: "Multi-Image Batch", description: "Stitch multiple PNGs into one PDF file." }
      ]}
      useCases={[
        { title: "Logo & Brand Assets", description: "Convert PNG vector logos into PDF proof sheets." },
        { title: "UI Screenshots", description: "Bundle app UI PNG screenshots into a PDF presentation." },
        { title: "Infographics", description: "Turn long PNG infographics into multi-page PDFs." }
      ]}
      midCTA={{ text: "Convert PNG to PDF Free →", href: "/png-to-pdf" }}
      bottomCTA={{ headline: "Convert PNG images to PDF cleanly online.", text: "Convert PNG Free", href: "/png-to-pdf" }}
      faqs={[
        { question: "What happens to transparent PNG backgrounds?", answer: "They render cleanly on crisp white PDF pages without black box errors." },
        { question: "Can I convert multiple PNG files at once?", answer: "Yes, upload all PNGs together to combine them into one PDF." }
      ]}
      faqTitle="PNG to PDF Converter FAQ"
      faqSubtitle="Transparent image handling"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "PNG to PDF", href: "/png-to-pdf" },
        { name: "Convert PNG", href: "/png-to-pdf-converter-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
