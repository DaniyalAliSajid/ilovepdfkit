import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';

export const metadata: Metadata = {
  title: 'How to Split PDF Pages | Step-by-Step PDF Extraction Guide',
  description: 'Need one page from a massive document? Follow this simple visual guide to learn how to split PDF pages instantly and securely online.',
  alternates: { canonical: 'https://ilovepdfkit.com/how-to-split-pdf-pages' },
};

export default function HowToSplitPdfPagesPage() {
  return (
    <SEOLandingPage
      slug="how-to-split-pdf-pages"
      keyword="how to split pdf pages"
      pageType="B"
      angle="how-to"
      h1="How to Split PDF Pages Online"
      heroDescription="A simple, straightforward tutorial on extracting every page of a massive PDF into its own separate, manageable file."
      intro="If somebody sends you a 100-page corporate manual but you only need the single page outlining the dress code, you shouldn't have to keep the massive file on your hard drive. Knowing how to split PDF pages is an essential digital skill that saves both storage space and headaches. Our extraction engine acts as a digital hole-punch, bursting the heavy document down into individual pages instantly. Follow these quick steps to cleanly rip your document apart, grab the exact pages you need, and delete the rest."
      steps={[
        { title: 'Open the Splitter', description: 'Navigate to the "Split PDF" tool using the menu at the top of the website.' },
        { title: 'Upload the Master File', description: 'Drag and drop the large, multi-page PDF document that contains the pages you want to extract.' },
        { title: 'Extract All Pages', description: 'Once uploaded, click the "Convert Now" button. The server will immediately begin separating the document page by page.' },
        { title: 'Download the ZIP Archive', description: 'The tool will automatically download a ZIP file to your computer. Unzip it to reveal a folder containing every single page as its own perfectly formatted PDF file.' },
      ]}
      features={[]}
      useCases={[
        { title: 'Invoice Extraction', description: 'Pull individual monthly bills out of a massive end-of-year accounting ledger.' },
        { title: 'Redacting Information', description: 'Extract pages to manually delete sensitive appendices before sending a contract to a client.' },
        { title: 'Course Packets', description: 'Break down a massive textbook PDF into individual daily reading assignments for students.' },
      ]}
      midCTA={{ text: 'Start Splitting Now →', href: '/split-pdf' }}
      bottomCTA={{ headline: 'Break apart the clutter.', text: 'Split Your PDF Free', href: '/split-pdf' }}
      faqs={[
        { question: 'Why does the tool download a ZIP file instead of a PDF?', answer: 'Because the tool separates a single document into dozens (or hundreds) of individual single-page PDF files, a ZIP archive is the only way to quickly and cleanly transfer all those files to your computer at once.' },
        { question: 'Will splitting the document ruin the text formatting?', answer: 'No. The extraction process is completely lossless. The text, fonts, margins, and graphics on the individual pages will look identical to how they looked in the master document.' },
        { question: 'How do I combine the pages I want to keep?', answer: 'Once you have your ZIP folder of single pages, simply delete the files you do not want. Then, take the remaining PDF files and upload them to our "Merge PDF" tool to stitch them into a new document.' },
      ]}
      faqTitle="Splitting Tutorial FAQs"
      faqSubtitle="Answers on extracting documents"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Split PDF', href: '/split-pdf' },
        { name: 'How to Split Pages', href: '/how-to-split-pdf-pages' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
