import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Convert DOC to PDF Online Free | Legacy Word File Converter",
  description: "Convert legacy Microsoft Word .DOC files to PDF online free. Fast, secure, and preserves document formatting.",
  alternates: { canonical: "https://ilovepdfkit.com/convert-doc-to-pdf-online" },
};

export default function ConvertDocToPdfOnlinePage() {
  return (
    <SEOLandingPage
      slug="convert-doc-to-pdf-online"
      keyword="convert doc to pdf online"
      pageType="A"
      angle="speed"
      h1="Convert Legacy DOC to PDF Online"
      heroDescription="Transform older .DOC Word files (Word 97-2003) into modern PDF format."
      intro="Have older Microsoft Word documents saved in legacy .doc format? Modern devices often struggle to open old Word files. Our online DOC converter upgrades legacy .doc files into standard, universal PDF files that open easily on any computer or smartphone."
      steps={[
        { title: "Select .DOC File", description: "Upload your legacy Word .doc file." },
        { title: "Convert Format", description: "Fast cloud conversion to PDF." },
        { title: "Download PDF", description: "Save your modern PDF document." }
      ]}
      features={[
        { icon: Zap, title: "Legacy Format Support", description: "Full compatibility with Word 97, 2000, 2003 .doc files." },
        { icon: Shield, title: "Layout Accuracy", description: "Prevents paragraph shifts and font errors." },
        { icon: Lock, title: "Free Converter", description: "No need to buy old Microsoft Word licenses." },
        { icon: FileCheck, title: "Instant Preview", description: "Download clean PDF immediately." }
      ]}
      useCases={[
        { title: "Archived Documents", description: "Convert old company Word archives to PDF." },
        { title: "Legacy Templates", description: "Update old .doc forms into universal PDFs." },
        { title: "Cross-Platform Sharing", description: "Share old Word files with mobile users." }
      ]}
      midCTA={{ text: "Convert DOC to PDF Free →", href: "/word-to-pdf" }}
      bottomCTA={{ headline: "Convert old .DOC files to modern PDFs easily.", text: "Convert DOC Free", href: "/word-to-pdf" }}
      faqs={[
        { question: "Can I convert .doc files without Microsoft Word installed?", answer: "Yes, our cloud service converts files without needing Word installed locally." },
        { question: "Is .doc converted the same as .docx?", answer: "Both legacy .doc and modern .docx convert to identical high-quality PDFs." }
      ]}
      faqTitle="DOC to PDF Converter FAQ"
      faqSubtitle="Legacy Word conversion guide"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Word to PDF", href: "/word-to-pdf" },
        { name: "Convert .DOC", href: "/convert-doc-to-pdf-online" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
