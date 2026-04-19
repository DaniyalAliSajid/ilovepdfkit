import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Type, Edit3, ClipboardList, PenTool } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PDF to Word Editable | Convert PDF to DOCX Free',
  description: 'Convert PDF to Word editable format instantly. Make text changes, update resumes, and edit contracts without losing the original layout.',
  alternates: { canonical: 'https://ilovepdfkit.com/pdf-to-word-editable' },
};

export default function PdfToWordEditablePage() {
  return (
    <SEOLandingPage
      slug="pdf-to-word-editable"
      keyword="pdf to word editable"
      pageType="A"
      angle="use-case"
      h1="Convert PDF to Word Editable Format"
      heroDescription="Turn flat PDF documents into fully editable Word files (.docx) instantly, perfect for updating resumes, contracts, and reports."
      intro="It is incredibly frustrating when you find a typo in your resume but only have the PDF version saved on your computer. PDFs were intentionally designed to look identical on every screen, which makes them notoriously difficult to edit. When you need to make critical text changes, you need a PDF to Word editable converter. Our tool doesn't just paste an image of your PDF into a Word wrapper—it actively reconstructs the document. It extracts the raw text, recreates the paragraphs, aligns the images, and delivers a native .docx file where every single word is ready for you to tweak, delete, or rewrite in Microsoft Word or Google Docs."
      steps={[
        { title: 'Upload PDF', description: 'Drag the locked PDF document into the converter zone.' },
        { title: 'Extract Text', description: 'Our engine reads and converts the text into Word format.' },
        { title: 'Format Reconstruction', description: 'Headers, footers, and images are placed in their correct positions.' },
        { title: 'Download DOCX', description: 'Open your new editable file directly in Microsoft Word.' },
      ]}
      features={[
        { icon: Type, title: 'Fully Editable Text', description: 'Every letter and paragraph can be rewritten instantly.' },
        { icon: Edit3, title: 'Formatting Kept', description: 'Bullet points and bold text stay intact.' },
        { icon: ClipboardList, title: 'No Watermarks', description: 'The converted document is clean and ready for professional use.' },
        { icon: PenTool, title: 'Instant Conversion', description: 'Turn massive documents into Word files in seconds.' },
      ]}
      useCases={[
        { title: 'Updating Resumes', description: 'Fix a typo in your CV without needing the original design file.' },
        { title: 'Editing Contracts', description: 'Import a vendor contract to make red-line changes in Word.' },
        { title: 'Reusing Proposals', description: 'Take an old PDF pitch deck and update the client names.' },
      ]}
      midCTA={{ text: 'Make PDF Editable →', href: '/pdf-to-word' }}
      bottomCTA={{ headline: 'Unlock your text instantly.', text: 'Convert to Word Now', href: '/pdf-to-word' }}
      faqs={[
        { question: 'Will the Word document look exactly like the PDF?', answer: 'Our converter goes to great lengths to reconstruct the formatting, including headers and margins. While complex graphic-heavy layouts might require minor tweaks, standard text documents will look practically identical.' },
        { question: 'Is the text actually editable, or is it just an image?', answer: 'It is 100% native, editable text. You can delete paragraphs, change font sizes, and rewrite sentences exactly as if you had typed the document from scratch in Microsoft Word.' },
        { question: 'Does this tool work with scanned PDFs?', answer: 'For standard text-based PDFs, it works perfectly. If the PDF is a scan of a piece of paper (with no selectable text), it will export the image into the Word file.' },
      ]}
      faqTitle="Editable Document FAQs"
      faqSubtitle="Answers on converting to Word"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert to Word', href: '/pdf-to-word' },
        { name: 'PDF to Word Editable', href: '/pdf-to-word-editable' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
