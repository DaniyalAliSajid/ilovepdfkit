import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "PDF Tools for Job Seekers | Resume & Portfolio Suite",
  description: "Compress resume PDF under ATS portal limits, merge cover letter and resume, and edit PDF resume formatting free.",
  alternates: { canonical: "https://ilovepdfkit.com/pdf-tools-for-job-seekers" },
};

export default function PdfToolsForJobSeekersPage() {
  return (
    <SEOLandingPage
      slug="pdf-tools-for-job-seekers"
      keyword="pdf tools for job seekers"
      pageType="C"
      angle="audience"
      h1="PDF Tools for Job Seekers"
      heroDescription="Optimize your application: compress resumes for ATS portals, merge portfolios, and convert Word to PDF."
      intro="Applying for jobs requires flawless document presentation. ATS hiring portals frequently reject resumes over 300KB or demand single-file uploads combining your cover letter, resume, and work portfolio. Our job seeker PDF suite ensures your application slips past portal restrictions cleanly."
      steps={[
        { title: "Compress Resume", description: "Shrink resume file size under 300KB for ATS portals." },
        { title: "Merge Application Packet", description: "Stitch cover letter, resume, and references into one file." },
        { title: "Convert Word to PDF", description: "Export Word resumes to pristine PDF format." }
      ]}
      features={[
        { icon: Zap, title: "ATS Portal Optimization", description: "Ensures file size and formatting comply with hiring portals." },
        { icon: Shield, title: "Single File Assembly", description: "Combine resume, cover letter, and work samples." },
        { icon: Lock, title: "100% Free", description: "No premium fees when looking for your next job." },
        { icon: FileCheck, title: "No Watermarks", description: "Keeps your application document clean and professional." }
      ]}
      toolSpotlights={[
        { name: "Compress Resume PDF", href: "/compress-pdf", description: "Shrink resume file size under strict 300KB portal limits.", icon: Zap },
        { name: "Merge Application Packet", href: "/merge-pdf", description: "Combine cover letter, resume, and portfolio into one PDF.", icon: Shield },
        { name: "Word to PDF Resume Converter", href: "/word-to-pdf", description: "Convert Word resumes into print-perfect PDFs.", icon: Lock }
      ]}
      midCTA={{ text: "Optimize Application PDF →", href: "/" }}
      bottomCTA={{ headline: "Get your resume past ATS portal limits today.", text: "Use Job Seeker Suite Free", href: "/" }}
      faqs={[
        { question: "What file size should my resume PDF be for ATS systems?", answer: "Keeping your resume PDF under 300KB guarantees seamless parsing across all ATS systems." },
        { question: "Should I submit resume and cover letter in one PDF?", answer: "Many portals prefer a single PDF attachment combining both documents." }
      ]}
      faqTitle="Job Seeker PDF Suite FAQ"
      faqSubtitle="Resume and application optimization tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Job Seeker Tools", href: "/pdf-tools-for-job-seekers" }
      ]}
      themeColor="#6d28d9"
    />
  );
}
