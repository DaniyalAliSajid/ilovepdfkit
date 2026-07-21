import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "HTML to PDF Converter Free Online | Render Webpages to PDF",
  description: "Convert HTML code or webpage URLs into PDF documents free online. Retains CSS styles, images, and layout.",
  alternates: { canonical: "https://ilovepdfkit.com/html-to-pdf-converter-free" },
};

export default function HtmlToPdfConverterFreePage() {
  return (
    <SEOLandingPage
      slug="html-to-pdf-converter-free"
      keyword="html to pdf converter free"
      pageType="A"
      angle="speed"
      h1="HTML to PDF Converter Free Online"
      heroDescription="Render HTML files or raw web code into clean PDF documents."
      intro="Need to save a webpage or HTML code snippet as a PDF document? Printing web pages directly from browser often breaks CSS styling and page breaks. Our HTML to PDF converter renders HTML and CSS cleanly into structured PDF pages."
      steps={[
        { title: "Upload HTML File", description: "Select your .html file or paste code." },
        { title: "CSS Rendering", description: "Applies styles and image layouts." },
        { title: "Download PDF", description: "Save your rendered web PDF." }
      ]}
      features={[
        { icon: Zap, title: "CSS & Style Support", description: "Renders custom fonts, colors, and layout grids." },
        { icon: Shield, title: "Clean Page Breaks", description: "Prevents broken images across page splits." },
        { icon: Lock, title: "Free Converter", description: "No expensive web snapshot software needed." },
        { icon: FileCheck, title: "Clickable Links", description: "Preserves hyperlinks in generated PDF." }
      ]}
      useCases={[
        { title: "Web Invoices", description: "Convert HTML email invoices into PDF records." },
        { title: "Article Archiving", description: "Save web articles and blog posts as offline PDFs." },
        { title: "Receipt Printing", description: "Render e-commerce checkout HTML into PDFs." }
      ]}
      midCTA={{ text: "Convert HTML to PDF Free →", href: "/" }}
      bottomCTA={{ headline: "Render HTML code into formatted PDF files.", text: "Convert HTML Free", href: "/" }}
      faqs={[
        { question: "Does it support external CSS stylesheets?", answer: "Yes, inline and embedded CSS styles are rendered accurately." },
        { question: "Will hyperlinks remain clickable in the PDF?", answer: "Yes, HTML href links are converted to active PDF links." }
      ]}
      faqTitle="HTML to PDF FAQ"
      faqSubtitle="Web rendering guidance"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Convert PDF", href: "/" },
        { name: "HTML to PDF", href: "/html-to-pdf-converter-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
