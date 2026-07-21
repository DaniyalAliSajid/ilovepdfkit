import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Combine PDF Files Free Online | Fast & Easy PDF Joiner",
  description: "Combine PDF files free online in seconds. Join multiple PDFs into one document without signups or watermarks.",
  alternates: { canonical: "https://ilovepdfkit.com/combine-pdf-files-free" },
};

export default function CombinePdfFilesFreePage() {
  return (
    <SEOLandingPage
      slug="combine-pdf-files-free"
      keyword="combine pdf files free"
      pageType="A"
      angle="speed"
      h1="Combine PDF Files Free Online"
      heroDescription="Join multiple separate PDF documents into a unified file fast and effortlessly."
      intro="Need to join several PDF files into one? Whether you are consolidating chapters, combining reports, or assembling presentation decks, our free PDF joiner lets you combine PDF files online without installing bloated software or registering an account."
      steps={[
        { title: "Select PDF Files", description: "Choose two or more PDF files from your device." },
        { title: "Organize Sequence", description: "Drag files into your desired page order." },
        { title: "Download Combined PDF", description: "Get your merged file instantly." }
      ]}
      features={[
        { icon: Zap, title: "Lightning Fast", description: "Joins files instantly in your browser." },
        { icon: Shield, title: "No Watermarks", description: "Keeps your combined PDF clean and professional." },
        { icon: Lock, title: "No Sign-up", description: "Start combining files without creating an account." },
        { icon: FileCheck, title: "Cross-Platform", description: "Works on Windows, Mac, iOS, and Android." }
      ]}
      useCases={[
        { title: "Project Reports", description: "Join individual section PDFs into a master report." },
        { title: "Resume & Cover Letter", description: "Combine resume and portfolio into a single upload." },
        { title: "Ebooks & Handouts", description: "Stitch document chapters into one complete book." }
      ]}
      midCTA={{ text: "Combine PDF Files Free →", href: "/merge-pdf" }}
      bottomCTA={{ headline: "Join your PDF documents together now.", text: "Combine PDFs Free", href: "/merge-pdf" }}
      faqs={[
        { question: "Is combining PDF files completely free?", answer: "Yes, 100% free with zero hidden fees or daily task caps." },
        { question: "Will my original files be modified?", answer: "No, your uploaded files remain untouched; a new combined file is generated." }
      ]}
      faqTitle="Combine PDF Files FAQ"
      faqSubtitle="Quick answer guide"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Merge PDF", href: "/merge-pdf" },
        { name: "Combine PDFs Free", href: "/combine-pdf-files-free" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
