import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF Tools for Teachers & Educators | Classroom Suite",
  description: "Split worksheet packets into student pages, merge lesson plan PDFs, and convert presentation slides online free.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-tools-for-teachers" },
};

export default function PdfToolsForTeachersPage() {
  return (
    <SEOLandingPage
      slug="pdf-tools-for-teachers"
      keyword="pdf tools for teachers"
      pageType="C"
      angle="audience"
      h1="PDF Tools for Teachers & Educators"
      heroDescription="Simplify classroom paperwork: split worksheet packets, merge lesson plans, and convert presentation slides."
      intro="Teachers spend hours organizing digital handouts, splitting multi-page curriculum PDFs into individual student worksheets, and converting PowerPoint slides for online learning portals (Google Classroom, Canvas). Our free educator PDF suite handles all classroom file preparation in seconds."
      steps={[
        { title: "Split Worksheets", description: "Separate multi-page master PDFs into individual student worksheets." },
        { title: "Merge Lesson Plans", description: "Combine syllabus, handouts, and rubrics into one packet." },
        { title: "Convert Slides", description: "Turn PowerPoint presentation decks into printable PDF notes." }
      ]}
      features={[
        { icon: Zap, title: "Google Classroom Ready", description: "Create clean, lightweight PDFs for LMS uploads." },
        { icon: Shield, title: "Single Page Splitter", description: "Extract individual assignment sheets in one click." },
        { icon: Lock, title: "100% Free for Teachers", description: "No subscriptions cutting into classroom budgets." },
        { icon: FileCheck, title: "No Registration Required", description: "Use tools immediately without creating accounts." }
      ]}
      toolSpotlights={[
        { name: "Split Worksheet Packets", href: "/split-pdf", description: "Extract individual assignment pages for students.", icon: Zap },
        { name: "Merge Curriculum Files", href: "/merge-pdf", description: "Stitch syllabus, readings, and rubrics together.", icon: Shield },
        { name: "Compress Lecture Files", href: "/compress-pdf", description: "Shrink heavy PDF textbooks for fast student downloads.", icon: Lock }
      ]}
      midCTA={{ text: "Explore Teacher PDF Suite →", href: "/" }}
      bottomCTA={{ headline: "Save classroom preparation time with free PDF tools.", text: "Use Teacher Suite Free", href: "/" }}
      faqs={[
        { question: "Can I upload converted PDFs to Google Classroom?", answer: "Yes, all generated PDFs are fully compatible with Google Classroom, Canvas, and Blackboard." },
        { question: "Are there limits on how many student worksheets I can split?", answer: "No, split as many pages as you need for your classes." }
      ]}
      faqTitle="Teacher PDF Suite FAQ"
      faqSubtitle="Classroom file management guide"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Teacher Tools", href: "/pdf-tools-for-teachers" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
