import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Convert Vector PDF to SVG Free | Graphic Vector Extractor",
  description: "Convert PDF vector graphics into scalable SVG files free online. Edit PDF vectors in Figma, Illustrator, or Inkscape.",
  alternates: { canonical: "https://ilovepdfkit.com/convert-vector-pdf-to-svg" },
};

export default function ConvertVectorPdfToSvgPage() {
  return (
    <SEOLandingPage
      slug="convert-vector-pdf-to-svg"
      keyword="convert vector pdf to svg"
      pageType="A"
      angle="use-case"
      h1="Convert Vector PDF to SVG Online"
      heroDescription="Extract scalable vector paths from PDF files into editable SVG graphics."
      intro="Have a PDF logo or illustration that you need to edit in Figma, Adobe Illustrator, or web code? Converting to raster PNG ruins scalability. Our vector PDF to SVG converter extracts resolution-independent vector paths and text shapes into clean SVG code."
      steps={[
        { title: "Upload Vector PDF", description: "Select your PDF illustration or logo." },
        { title: "Extract Vector Paths", description: "Parses Bézier curves and fill colors." },
        { title: "Download SVG", description: "Import into Figma, Illustrator, or web project." }
      ]}
      features={[
        { icon: Zap, title: "Infinite Scalability", description: "SVG output scales to any dimension without pixelation." },
        { icon: Shield, title: "Figma & Illustrator Ready", description: "Import clean vector layers directly into design tools." },
        { icon: Lock, title: "100% Free", description: "No vector conversion fees or limits." },
        { icon: FileCheck, title: "Clean Code Export", description: "Optimizes SVG XML code for fast web loading." }
      ]}
      useCases={[
        { title: "Logo Extraction", description: "Convert PDF corporate logos into web SVG icons." },
        { title: "CAD Blueprint Vectors", description: "Extract architectural vector paths into SVG." },
        { title: "UI Design Assets", description: "Import PDF icon sets into Figma design systems." }
      ]}
      midCTA={{ text: "Convert Vector PDF to SVG →", href: "/" }}
      bottomCTA={{ headline: "Extract scalable SVG graphics from any vector PDF.", text: "Convert to SVG Free", href: "/" }}
      faqs={[
        { question: "Will text shapes stay vector paths in SVG?", answer: "Yes, fonts and vector outlines are preserved as vector elements." },
        { question: "Can I open the SVG in Figma?", answer: "Yes, simply drag the downloaded SVG into Figma or Illustrator." }
      ]}
      faqTitle="Vector PDF to SVG FAQ"
      faqSubtitle="Graphic design conversion tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Convert PDF", href: "/" },
        { name: "PDF to SVG", href: "/convert-vector-pdf-to-svg" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
