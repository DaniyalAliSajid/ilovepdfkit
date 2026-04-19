import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Type, Brush, Settings2, FileDigit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Add Page Numbers to PDF | Number Pages Online',
  description: 'Organize your massive documents perfectly. Add page numbers to PDF files online with customizable typography, margins, and starting digits.',
  alternates: { canonical: 'https://ilovepdfkit.com/add-page-numbers-to-pdf' },
};

export default function AddPageNumbersToPdfPage() {
  return (
    <SEOLandingPage
      slug="add-page-numbers-to-pdf"
      keyword="add page numbers to pdf"
      pageType="A"
      angle="quality"
      h1="Add Page Numbers to PDF Documents"
      heroDescription="Insert perfectly aligned, completely customizable page numbers into your PDF documents for a polished, professional finish."
      intro="It is the final hour before handing in an academic thesis or printing a massive legal exhibit, and you realize you forgot to add pagination before exporting the file. Trying to navigate a 100-page document without numbering is a chaotic experience for any reviewer. Luckily, you don't need to return to your original Word or InDesign files to fix this oversite. You can simply add page numbers to PDF documents directly using our online utility. With total control over typography, placement positioning, and starting digit offsets, you can instantly stamp organized, professional numbers onto every single page of your document."
      steps={[
        { title: 'Upload File', description: 'Drag the unnumbered PDF into the tooling canvas.' },
        { title: 'Select Positioning', description: 'Choose whether numbers go in the top, bottom, left, or right margins.' },
        { title: 'Adjust Typography', description: 'Pick your font style, alignment, and starting number.' },
        { title: 'Stamp & Download', description: 'Click Convert to apply the pagination permanently.' },
      ]}
      features={[
        { icon: Settings2, title: 'Total Control', description: 'Place numbers perfectly in any margin position.' },
        { icon: Brush, title: 'Typography Options', description: 'Ensure the numbers match your document\'s font styling.' },
        { icon: FileDigit, title: 'Starting Offsets', description: 'Skip cover pages and start numbering exactly where you want.' },
        { icon: Type, title: 'Clear Text', description: 'Numbers are stamped as crisp, vector text, not blurry images.' },
      ]}
      useCases={[
        { title: 'Academic Thesis', description: 'Number massive research papers before submitting to advisors.' },
        { title: 'Legal Exhibits', description: 'Ensure court documents can be accurately referenced by page.' },
        { title: 'Print Readiness', description: 'Format manuscripts perfectly before sending them to a bindery.' },
      ]}
      midCTA={{ text: 'Add Page Numbers →', href: '/add-page-numbers' }}
      bottomCTA={{ headline: 'Organize your document instantly.', text: 'Add Page Numbers Free', href: '/add-page-numbers' }}
      faqs={[
        { question: 'Can I start numbering on page 3 instead of page 1?', answer: 'Yes. Our tool allows you to set a custom "starting page" offset. This is perfect for skipping cover pages, tables of contents, or title sheets.' },
        { question: 'Will the page numbers cover up my document text?', answer: 'It is highly unlikely. The page numbers are stamped into the document\'s outer margins (headers and footers). As long as your original PDF has standard margins, the text will not clash.' },
        { question: 'Can I edit the page numbers after I add them?', answer: 'Once stamped and downloaded, the numbers become a permanent part of the PDF. If you made a mistake, you should re-upload your original file and adjust the settings to stamp it again.' },
      ]}
      faqTitle="Pagination Formatting FAQs"
      faqSubtitle="Answers on styling your numbers"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Add Page Numbers', href: '/add-page-numbers' },
        { name: 'Number Pages', href: '/add-page-numbers-to-pdf' },
      ]}
      themeColor="#1e3a8a"
    />
  );
}
