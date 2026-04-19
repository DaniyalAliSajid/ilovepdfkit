import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Layers, Move, CheckCircle2, Sliders } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Merge Multiple PDF Files | Combine PDFs into One',
  description: 'Picture this: you have 15 separate invoices and need to send them as one file. Merge multiple PDF files easily with our visual drag-and-drop tool.',
  alternates: { canonical: 'https://ilovepdfkit.com/merge-multiple-pdf-files' },
};

export default function MergeMultiplePdfFilesPage() {
  return (
    <SEOLandingPage
      slug="merge-multiple-pdf-files"
      keyword="merge multiple pdf files"
      pageType="A"
      angle="use-case"
      h1="Merge Multiple PDF Files into One"
      heroDescription="Stitch together endless documents with our visual drag-and-drop builder. Easy reordering, flawless combining."
      intro="Picture this: it's tax season, and your accountant asked for your financial records. You have 15 different PDF receipts, W2s, and bank statements scattered across your desktop. Sending them as 15 separate email attachments is guaranteed to cause a headache. You need to merge multiple PDF files into one clean, organized master document. Our visual merging tool lets you drag and drop all your files onto the screen. You can clearly see each document, drag them into the exact chronological order you want, and combine them with a single click."
      steps={[
        { title: 'Drop All Files', description: 'Select or drop 2, 10, or 50 PDFs into the upload area.' },
        { title: 'Visually Reorder', description: 'Click and drag the file thumbnails into your desired sequence.' },
        { title: 'Combine', description: 'Hit the merge button to stitch them together seamlessly.' },
        { title: 'Get One File', description: 'Download your single, unified PDF document.' },
      ]}
      features={[
        { icon: Layers, title: 'Bulk Upload', description: 'Handle massive amounts of separate PDFs at once.' },
        { icon: Move, title: 'Drag & Drop', description: 'Easily rearrange the order with your mouse.' },
        { icon: CheckCircle2, title: 'Visual Confirmation', description: 'See thumbnails of your files before merging.' },
        { icon: Sliders, title: 'Page Consistency', description: 'Different sized pages are merged perfectly.' },
      ]}
      useCases={[
        { title: 'Tax Preparation', description: 'Combine dozens of separate receipts and forms.' },
        { title: 'Legal Case Files', description: 'Organize various exhibits and briefs into a single packet.' },
        { title: 'Real Estate Closings', description: 'Keep all addendums and contracts in one continuous file.' },
      ]}
      midCTA={{ text: 'Combine All Your Files →', href: '/merge-pdf' }}
      bottomCTA={{ headline: 'Turn chaos into order.', text: 'Merge Multiple PDFs Now', href: '/merge-pdf' }}
      faqs={[
        { question: 'What if some of the PDFs I want to merge have different page sizes?', answer: 'Our tool handles varying page sizes flawlessly. A letter-sized document and a legal-sized document will remain their respective sizes within the new, unified PDF.' },
        { question: 'Is there a limit to how many files I can merge at once?', answer: 'For standard use, you can freely merge dozens of files at the same time without hitting any limitations.' },
        { question: 'Can I remove a file if I uploaded it by accident?', answer: 'Yes, in the visual reordering screen, there is a delete button on every thumbnail. You can remove mistakes before hitting the final merge button.' },
      ]}
      faqTitle="Merging Multiple Files FAQs"
      faqSubtitle="Organize large batches of documents"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Merge PDF', href: '/merge-pdf' },
        { name: 'Merge Multiple Files', href: '/merge-multiple-pdf-files' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
