import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { ArrowLeftRight, Monitor, Cpu, CheckSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rearrange PDF Pages Online | Visual Page Organizer',
  description: 'When your scanned document is totally out of order, our tool lets you rearrange PDF pages online instantly. Drag, drop, and reorganize easily.',
  alternates: { canonical: 'https://ilovepdfkit.com/rearrange-pdf-pages-online' },
};

export default function RearrangePdfPagesOnlinePage() {
  return (
    <SEOLandingPage
      slug="rearrange-pdf-pages-online"
      keyword="rearrange pdf pages online"
      pageType="A"
      angle="speed"
      h1="Rearrange PDF Pages Online Instantly"
      heroDescription="Did the scanner mess up the order? Drag and drop entire documents to rearrange PDF pages exactly how you need them."
      intro="It is incredibly frustrating when you finish scanning a 20-page contract only to realize you fed the papers through the machine backwards. Suddenly your document reads from page 20 down to page 1. Instead of starting over, you can use our tools to rearrange PDF pages online quickly. The easiest workaround is to break the faulty document down into single pages using our Split PDF tool, and then stitch them back together in the perfect order using our visual Merge PDF tool. It takes seconds, saves you the hassle of rescanning, and guarantees absolute precision."
      steps={[
        { title: 'Split the File', description: 'Upload your out-of-order PDF to the Split tool and extract all pages into a ZIP folder.' },
        { title: 'Unzip the Pages', description: 'Open the ZIP file on your computer to view the individual pages.' },
        { title: 'Upload to Merge', description: 'Drag the individual pages into our visual Merge PDF tool in the correct order.' },
        { title: 'Finalize Document', description: 'Click merge to stitch them back together into one perfect, ordered PDF.' },
      ]}
      features={[
        { icon: ArrowLeftRight, title: 'Total Control', description: 'Fix backward scans or completely reshuffle a presentation.' },
        { icon: Monitor, title: 'No Installs', description: 'Fix your documents directly in your web browser.' },
        { icon: Cpu, title: 'Fast Processing', description: 'Splitting and merging takes a combined 15 seconds.' },
        { icon: CheckSquare, title: 'Visual Verification', description: 'See thumbnails of the pages before you combine them.' },
      ]}
      useCases={[
        { title: 'Backwards Scans', description: 'Quickly reverse the order of documents fed incorrectly into a scanner.' },
        { title: 'Portfolio Updates', description: 'Move your newest work to the very front of an existing PDF portfolio.' },
        { title: 'Presentation Fixes', description: 'Fix slide order without having to re-export from PowerPoint.' },
      ]}
      midCTA={{ text: 'Start Rearranging →', href: '/delete-pdf-pages' }}
      bottomCTA={{ headline: 'Put your document back together perfectly.', text: 'Organize Your System Free', href: '/merge-pdf' }}
      faqs={[
        { question: 'How do I rearrange the file pages?', answer: 'The easiest way is to use our Delete PDF Pages tool to remove unwanted ones, or use our visual Merge PDF tool to combine pages in precisely the right order.' },
        { question: 'Will repacking the PDF reduce the quality?', answer: 'No. The data inside the PDF pages is completely preserved during the process. No visual quality is lost.' },
        { question: 'Is this faster than just rescanning the document?', answer: 'Absolutely. Rescanning can take minutes and introduces the chance for new errors. Trimming and merging takes mere seconds of processing time.' },
      ]}
      faqTitle="Rearranging FAQs"
      faqSubtitle="Answers on reorganizing your files"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Merge PDF', href: '/merge-pdf' },
        { name: 'Rearrange Pages', href: '/rearrange-pdf-pages-online' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
