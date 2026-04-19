import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Target, FileOutput, ShieldAlert, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Extract Pages from PDF | Instant Online PDF Extractor',
  description: 'When you need to pull specific information out of a massive PDF file, use our tool to seamlessly extract pages from PDF documents.',
  alternates: { canonical: 'https://ilovepdfkit.com/extract-pages-from-pdf' },
};

export default function ExtractPagesFromPdfPage() {
  return (
    <SEOLandingPage
      slug="extract-pages-from-pdf"
      keyword="extract pages from pdf"
      pageType="A"
      angle="problem"
      h1="Extract Pages from Any PDF"
      heroDescription="Pull the exact pages you need from a massive document. Turn a 100-page file into individual, usable PDFs."
      intro="When you receive a massive PDF download but you only need a single chapter to study or one specific form to sign, dealing with the whole file is an annoyance. You don't want to scroll through 99 irrelevant pages every time you open it. This is exactly why you need to extract pages from PDF files. Our dedicated extraction utility acts like a digital scalpel. Instead of printing and re-scanning, just upload the file and our tool will burst it apart. We deliver every single page directly to you in an organized folder, letting you grab exactly what you need and delete the rest."
      steps={[
        { title: 'Upload Document', description: 'Drag your large, cumbersome PDF into the extraction tool.' },
        { title: 'Start Extraction', description: 'Hit the convert button. No complex ranges to type in.' },
        { title: 'Instant Burst', description: 'The server separates the entire document instantly.' },
        { title: 'Download All', description: 'Get a ZIP folder containing every page as its own file.' },
      ]}
      features={[
        { icon: Target, title: 'Precision Extraction', description: 'Flawlessly separates complex PDF structures.' },
        { icon: FileOutput, title: 'High Export Quality', description: 'Vector graphics and fonts remain sharp.' },
        { icon: ShieldAlert, title: 'Secure Handling', description: 'Your sensitive master files are wiped automatically.' },
        { icon: Zap, title: 'Lightning Fast', description: 'Extracts 100 pages in fewer than 10 seconds.' },
      ]}
      useCases={[
        { title: 'Academic Research', description: 'Pull a single relevant chapter out of an enormous master thesis.' },
        { title: 'HR Paperwork', description: 'Extract the signature-required page from an employee handbook.' },
        { title: 'Client Presentations', description: 'Isolate the pricing tier page from a massive company pitch deck.' },
      ]}
      midCTA={{ text: 'Extract Your Pages →', href: '/split-pdf' }}
      bottomCTA={{ headline: 'Get exactly what you need.', text: 'Extract PDF Pages Free', href: '/split-pdf' }}
      faqs={[
        { question: 'Will extracting pages change the text into an image?', answer: 'No. The extraction process is lossless. If the text was selectable and searchable in the original document, it will remain selectable in the extracted pages.' },
        { question: 'What do I do if I only want one page, not all of them?', answer: 'Because our tool separates every page into a ZIP file, you simply open the ZIP, grab the one page you need, and delete the rest. It is incredibly fast.' },
        { question: 'Can I extract pages from a locked PDF?', answer: 'If the PDF requires a password to open, you will need to unlock it first. Once unlocked, you can extract the pages freely.' },
      ]}
      faqTitle="PDF Extraction FAQs"
      faqSubtitle="Answers for pulling pages apart"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Split PDF', href: '/split-pdf' },
        { name: 'Extract Pages', href: '/extract-pages-from-pdf' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
