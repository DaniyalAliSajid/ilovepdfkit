import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { BookOpen, GraduationCap, PenTool, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free PDF Tools for Students | Edit & Compress Study Materials',
  description: 'The ultimate suite of free PDF tools for students. Compress assignments, merge research papers, and convert textbook chapters easily on any device.',
  alternates: { canonical: 'https://ilovepdfkit.com/pdf-tools-for-students' },
};

export default function PdfToolsForStudentsPage() {
  return (
    <SEOLandingPage
      slug="pdf-tools-for-students"
      keyword="pdf tools for students"
      pageType="C"
      angle="audience"
      h1="The Ultimate PDF Toolkit for Students"
      heroDescription="Compress massive assignments, merge research papers, and organize your study materials easily without spending a dime."
      intro="Being a student involves an endless stream of digital paper: massive textbook PDFs, disjointed syllabus files, research papers, and thesis drafts. When the university submission portal strictly limits uploads to 2MB, trying to shrink a 15MB design portfolio quickly becomes a nightmare. Between tuition and textbooks, you shouldn't have to pay for a premium Adobe Acrobat subscription just to manage your coursework. We built this suite of free PDF tools for students to handle everything your professors throw at you. No hidden fees, no required accounts, and no ugly watermarks on your final assignments."
      steps={[
        { title: 'Select a Tool', description: 'Choose from our most popular tools designed for coursework below.' },
        { title: 'Upload Assignment', description: 'Drag and drop your document straight from your laptop or phone.' },
        { title: 'Fast Processing', description: 'Our servers instantly format your file for university portals.' },
        { title: 'Download Free', description: 'Get your clean, watermark-free document ready for submission.' },
      ]}
      features={[
        { icon: BookOpen, title: 'No Watermarks', description: 'Keep your essays and portfolios looking completely professional.' },
        { icon: GraduationCap, title: '100% Free Forever', description: 'No hidden subscription fees targeted at students.' },
        { icon: PenTool, title: 'No Installation', description: 'Works perfectly on library computers and personal Chromebooks.' },
        { icon: CheckCircle, title: 'Portal Ready', description: 'Optimize PDFs perfectly for Blackboard, Canvas, and Moodle.' },
      ]}
      toolSpotlights={[
        { name: 'Compress PDF', href: '/compress-pdf', description: 'Shrink massive assignments to bypass strict portal file-size limits.', icon: BookOpen },
        { name: 'Merge PDF', href: '/merge-pdf', description: 'Stitch separate essay drafts and bibliographies into one master file.', icon: GraduationCap },
        { name: 'Split PDF', href: '/split-pdf', description: 'Extract a single required reading chapter from a massive 500-page textbook PDF.', icon: PenTool },
        { name: 'PDF to Word', href: '/pdf-to-word', description: 'Convert locked handouts into editable Word files to take your own notes.', icon: CheckCircle },
      ]}
      midCTA={{ text: 'Explore All Tools â†’', href: '/' }}
      bottomCTA={{ headline: 'Ace your assignments. Not your budget.', text: 'Start Managing Your PDFs', href: '/' }}
      faqs={[
        { question: 'Do I need to create a student account or verify my .edu email?', answer: 'No! Unlike other platforms that offer "student discounts", our platform requires absolutely no account creation. Every tool is completely free for everyone to use immediately.' },
        { question: 'Are these tools safe to use on shared library computers?', answer: 'Yes. Because our toolkit is entirely browser-based, you do not need to install any software on public computers. Furthermore, all uploaded and processed files are permanently deleted from our servers shortly after you download them, ensuring your privacy.' },
        { question: 'Will compressing my design portfolio ruin the image quality?', answer: 'If you choose our "Recommended Compression" setting, the file size will shrink dramatically while maintaining the high visual quality necessary for design and photography portfolios.' },
      ]}
      faqTitle="Student Toolkit FAQs"
      faqSubtitle="Answers on managing coursework"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Student Tools', href: '/pdf-tools-for-students' },
      ]}
      themeColor="#6d28d9"
      internalLinksOverride={{ parentTool: { href: '/', text: 'View All Tools' } }}
    />
  );
}
