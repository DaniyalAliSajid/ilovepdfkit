import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Scissors, FileDigit, GripHorizontal, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Split PDF by Pages | Extract Every Page Instantly',
  description: 'Picture this: you have a 50-page PDF but only need page 12. Split PDF by pages easily and extract exactly what you need in seconds.',
  alternates: { canonical: 'https://ilovepdfkit.com/split-pdf-by-pages' },
};

export default function SplitPdfByPagesPage() {
  return (
    <SEOLandingPage
      slug="split-pdf-by-pages"
      keyword="split pdf by pages"
      pageType="A"
      angle="use-case"
      h1="Split PDF by Pages Online"
      heroDescription="Break apart large PDF documents instantly. Extract every single page into its own neat PDF file."
      intro="Picture this: a coworker completely ignored your request and emailed you a massive 50-page master PDF document. You only need the invoice on page 12 to process a payment, but sending the entire huge file to accounting will confuse them. You need to pull that single page out. When you split PDF by pages using our extraction tool, you solve this problem instantly. The tool takes the large bulky document and surgically bursts it apart, giving you a neatly organized ZIP folder where every single page is its own separate, perfectly formatted PDF file. No printing, no re-scanning, no hassle."
      steps={[
        { title: 'Upload Master PDF', description: 'Drag your large, multi-page document into the splitter.' },
        { title: 'Initiate Split', description: 'Click Convert to start the extraction process.' },
        { title: 'Wait Seconds', description: 'Our system bursts the PDF into individual page files.' },
        { title: 'Download ZIP', description: 'Receive an organized folder containing every single page.' },
      ]}
      features={[
        { icon: Scissors, title: 'Clean Cuts', description: 'Extracts pages flawlessly without damaging graphics.' },
        { icon: FileDigit, title: 'Batch Bursting', description: 'Explodes a 100-page file into 100 separate PDFs.' },
        { icon: GripHorizontal, title: 'Organized Output', description: 'Neatly packages all separated files into one ZIP.' },
        { icon: FileCheck, title: 'Format Preserved', description: 'Text remains selectable and searchable.' },
      ]}
      useCases={[
        { title: 'Invoicing', description: 'Extract single monthly invoices from a massive yearly ledger.' },
        { title: 'Legal Discovery', description: 'Pull specific exhibits out of a massive court filing.' },
        { title: 'Teacher Handouts', description: 'Separate a full textbook PDF into individual daily worksheets.' },
      ]}
      midCTA={{ text: 'Split Your Pages →', href: '/split-pdf' }}
      bottomCTA={{ headline: 'Stop sending people 50 pages.', text: 'Split PDF Files Now', href: '/split-pdf' }}
      faqs={[
        { question: 'Will splitting the PDF change the size of the pages?', answer: 'No. The extracted pages will retain the exact same dimensions, orientation, and margins as the original master document.' },
        { question: 'How do I download 50 separate PDFs at once?', answer: 'Our tool automatically compresses all your newly separated PDF pages into a single ZIP file. You just download the ZIP and extract it on your computer.' },
        { question: 'Can I extract text or images instead of just pages?', answer: 'This specific tool splits the document by its pages. If you need a different format, you can use our PDF to Word or PDF to JPG converters.' },
      ]}
      faqTitle="Splitting PDFs FAQ"
      faqSubtitle="Extracting exact pages easily"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Split PDF', href: '/split-pdf' },
        { name: 'Split by Pages', href: '/split-pdf-by-pages' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
