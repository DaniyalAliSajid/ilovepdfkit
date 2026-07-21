import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "TXT to PDF Online Free | Text File to PDF Converter",
  description: "Convert plain text (.txt) files to clean, formatted PDF documents free online. Fast, simple, and customizable typography.",
  alternates: { canonical: "https://ilovepdfkit.com/txt-to-pdf-online-free" },
};

export default function TxtToPdfOnlineFreePage() {
  return (
    <SEOLandingPage
      slug="txt-to-pdf-online-free"
      keyword="txt to pdf online free"
      pageType="A"
      angle="speed"
      h1="TXT to PDF Online Free"
      heroDescription="Convert plain text files (.txt) into clean, printable PDF documents."
      intro="Plain text files (.txt) lack formatting and open unpredictably depending on text editor settings. Converting your TXT file to PDF wraps raw text into clean, printable pages with standard margins and professional typography."
      steps={[
        { title: "Upload .TXT File", description: "Select your plain text file." },
        { title: "Format PDF", description: "Applies standard typography and page margins." },
        { title: "Download PDF", description: "Save your formatted PDF document." }
      ]}
      features={[
        { icon: Zap, title: "Instant Formatting", description: "Turns raw text into clean PDF pages in seconds." },
        { icon: Shield, title: "Code & Log Friendly", description: "Preserves line breaks and code indents cleanly." },
        { icon: Lock, title: "100% Free", description: "No registration or software required." },
        { icon: FileCheck, title: "Printable Layout", description: "Generates standard A4/Letter size PDF pages." }
      ]}
      useCases={[
        { title: "Code & Script Exports", description: "Convert source code text files to readable PDFs." },
        { title: "Server Logs", description: "Archive plain text log files as printable PDFs." },
        { title: "Notes & Transcripts", description: "Turn raw meeting notes into structured PDFs." }
      ]}
      midCTA={{ text: "Convert TXT to PDF Free →", href: "/" }}
      bottomCTA={{ headline: "Convert raw text files into clean PDFs.", text: "Convert TXT Free", href: "/" }}
      faqs={[
        { question: "Will my line breaks be preserved?", answer: "Yes, all line breaks and indents are mapped to the PDF." },
        { question: "Does it support special characters?", answer: "Yes, UTF-8 encoding ensures global character support." }
      ]}
      faqTitle="TXT to PDF Converter FAQ"
      faqSubtitle="Plain text conversion guide"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Convert PDF", href: "/" },
        { name: "TXT to PDF", href: "/txt-to-pdf-online-free" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
