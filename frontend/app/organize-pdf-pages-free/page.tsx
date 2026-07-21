import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Organize PDF Pages Free Online | Reorder, Delete & Rotate",
  description: "Organize PDF pages free online. Drag and drop to reorder, delete unwanted pages, or rotate orientation in visual grid.",
  alternates: { canonical: "https://ilovepdfkit.com/organize-pdf-pages-free" },
};

export default function OrganizePdfPagesFreePage() {
  return (
    <SEOLandingPage
      slug="organize-pdf-pages-free"
      keyword="organize pdf pages free"
      pageType="A"
      angle="speed"
      h1="Organize PDF Pages Online Free"
      heroDescription="Complete visual PDF page manager: reorder, delete, and rotate pages in seconds."
      intro="Managing complex PDF documents requires flexible controls. Our free visual PDF organizer gives you a complete drag-and-drop workspace where you can reorder page sequences, delete unnecessary pages, and rotate sideways sheets all in one smooth step."
      steps={[
        { title: "Upload Document", description: "Drop your PDF file into the organizer visual grid." },
        { title: "Reorder, Delete, Rotate", description: "Drag pages into order and make quick adjustments." },
        { title: "Export Clean PDF", description: "Download your perfectly arranged PDF file." }
      ]}
      features={[
        { icon: Zap, title: "Drag & Drop Workspace", description: "Intuitive visual grid for total document control." },
        { icon: Shield, title: "All-in-One Utility", description: "Reorder, delete, and rotate in a single action." },
        { icon: Lock, title: "100% Free", description: "No hidden paywalls or watermark penalties." },
        { icon: FileCheck, title: "Fast Processing", description: "Instant page re-indexing in cloud." }
      ]}
      useCases={[
        { title: "Presentation Prep", description: "Arrange slides into logical speaking order." },
        { title: "Portfolio Curation", description: "Structure work samples for maximum visual impact." },
        { title: "Contract Assembly", description: "Ensure legal clauses follow exact page sequence." }
      ]}
      midCTA={{ text: "Organize PDF Pages →", href: "/delete-pdf-pages" }}
      bottomCTA={{ headline: "Take total visual control of your PDF structure.", text: "Organize PDF Free", href: "/delete-pdf-pages" }}
      faqs={[
        { question: "Is there a limit on how many pages I can organize?", answer: "You can organize documents with over 100 pages smoothly." },
        { question: "Do I need to sign up to organize my files?", answer: "No registration required; start organizing immediately." }
      ]}
      faqTitle="Organize PDF Pages FAQ"
      faqSubtitle="Visual PDF page management"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Organize PDF", href: "/delete-pdf-pages" },
        { name: "Organize PDF Pages", href: "/organize-pdf-pages-free" }
      ]}
      themeColor="#8b5cf6"
    />
  );
}
