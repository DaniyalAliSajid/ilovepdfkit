import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';

export const metadata: Metadata = {
  title: 'How to Merge PDF Files Online | Easy Step-by-Step Guide',
  description: 'Need to stitch ten invoices into one document? Learn exactly how to merge PDF files online for free in this quick, visual tutorial.',
  alternates: { canonical: 'https://ilovepdfkit.com/how-to-merge-pdf-files-online' },
};

export default function HowToMergePdfFilesOnlinePage() {
  return (
    <SEOLandingPage
      slug="how-to-merge-pdf-files-online"
      keyword="how to merge pdf files online"
      pageType="B"
      angle="how-to"
      h1="How to Merge PDF Files Online"
      heroDescription="A quick, step-by-step tutorial on stitching multiple separate PDF files into a single, organized master document for free."
      intro="If you have ever tried to email eight separate PDF attachments to a client, you know how unprofessional it looks. Creating a single, unified document is much cleaner, but learning how to merge PDF files online sounds like it requires specialized, expensive software. It doesn't. Our browser-based merging utility is designed to handle this exact task visually. You don't need to type in complex file paths or page ranges. You simply drop the files onto your screen, arrange them visually, and click a button. Follow these four steps to combine your files right now."
      steps={[
        { title: 'Access the Tool', description: 'Click on the "Merge PDF" link in the main navigation menu at the top of the screen to open the combining utility.' },
        { title: 'Add Your Files', description: 'Select all the PDF files you want to combine. You can upload them one by one, or highlight a whole group on your desktop and drag them into the upload box.' },
        { title: 'Reorder Visually', description: 'Once uploaded, you will see a thumbnail for every file. Click and drag these thumbnails left or right until they are in the exact chronological order you want the final document to read.' },
        { title: 'Merge and Save', description: 'Click the "Merge PDF" button. Our cloud servers will zip the files together instantly, and the newly combined master document will automatically begin downloading.' },
      ]}
      features={[]} // Type B uses intro and steps primarily
      useCases={[
        { title: 'Tax Consolidation', description: 'Stitch together 1099s, W2s, and healthcare forms for your accountant.' },
        { title: 'Portfolio Creation', description: 'Combine separate brand identity PDFs into one master portfolio submission.' },
        { title: 'Legal Briefs', description: 'Combine primary legal arguments with dozens of scanned evidentiary exhibits.' },
      ]}
      midCTA={{ text: 'Start Merging Now →', href: '/merge-pdf' }}
      bottomCTA={{ headline: 'Ready to organize your files?', text: 'Combine PDFs Now', href: '/merge-pdf' }}
      faqs={[
        { question: 'Will merging files change the page formatting?', answer: 'No. The merging process simply links the files end-to-end. The layout, fonts, and dimensions of each individual page remain exactly as they were in the original files.' },
        { question: 'What happens if the files I merge are different physical sizes?', answer: 'The resulting PDF will contain pages of varying sizes. For example, if you merge a standard letter page followed by a wide presentation slide, the master PDF will correctly display both formats.' },
        { question: 'Can I merge password-protected PDFs?', answer: 'Our system cannot merge encrypted files because it cannot read their data structure. You must use our Unlock PDF tool to remove the passwords first.' },
      ]}
      faqTitle="Merging Tutorial FAQs"
      faqSubtitle="Extra help for combining documents"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Merge PDF', href: '/merge-pdf' },
        { name: 'How to Merge Online', href: '/how-to-merge-pdf-files-online' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
