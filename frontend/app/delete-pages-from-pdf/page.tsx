import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Trash2, ShieldX, EyeOff, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delete Pages from PDF | Secure Online PDF Editor',
  description: 'When an NDA or contract has extra blank pages, delete pages from PDF instantly. Clean up your documents without buying expensive software.',
  alternates: { canonical: 'https://ilovepdfkit.com/delete-pages-from-pdf' },
};

export default function DeletePagesFromPdfPage() {
  return (
    <SEOLandingPage
      slug="delete-pages-from-pdf"
      keyword="delete pages from pdf"
      pageType="A"
      angle="problem"
      h1="Delete Pages from PDF Instantly"
      heroDescription="Remove unwanted pages, blank scans, and irrelevant data from your PDF documents securely in your browser."
      intro="It happens all the time: you scan a stack of documents, and the scanner accidentally grabs three blank pages at the end. Or perhaps you're sending an NDA to a contractor, but you need to remove the internal compensation schedule attached to page six. You need to delete pages from PDF documents securely, but buying a $150 software license for a two-minute task is absurd. Our dedicated splitting tool offers an elegant workaround: upload your PDF, separate every page, and simply discard the pages you don't need."
      steps={[
        { title: 'Upload Document', description: 'Drag the PDF containing the unwanted pages into the tool.' },
        { title: 'Split It Up', description: 'Our engine bursts the document into individual pages.' },
        { title: 'Download the ZIP', description: 'Receive an organized folder containing every page.' },
        { title: 'Delete the Junk', description: 'Find the pages you wanted to delete, highlight them, and throw them away.' },
      ]}
      features={[
        { icon: Trash2, title: 'No Cost Fix', description: 'Avoid costly subscriptions just to delete a blank page.' },
        { icon: EyeOff, title: 'Full Control', description: 'Having individual files puts you in total control of the data.' },
        { icon: ShieldX, title: 'Secure Wiping', description: 'Your master file is immediately auto-deleted from our servers.' },
        { icon: CheckCircle, title: 'No Formatting Loss', description: 'The pages you keep look exactly as they did in the original file.' },
      ]}
      useCases={[
        { title: 'Removing Blank Scans', description: 'Clean up sloppy multi-page scans instantly.' },
        { title: 'Redacting Legal Appendices', description: 'Drop sensitive pages before sharing a legal brief.' },
        { title: 'Cutting Title Pages', description: 'Remove annoying cover sheets from downloaded web articles.' },
      ]}
      midCTA={{ text: 'Remove Unwanted Pages →', href: '/delete-pdf-pages' }}
      bottomCTA={{ headline: 'Clean up your documents.', text: 'Delete Pages Now', href: '/delete-pdf-pages' }}
      faqs={[
        { question: 'Will deleting pages reduce my file size?', answer: 'Yes. Once you identify and delete the heavy, unwanted pages, the overall footprint of your remaining file will be significantly lighter.' },
        { question: 'Is it safe to upload a contract if I just want to delete the signature page?', answer: 'Yes. Your uploads are secured by HTTPS, and we permanently delete your document from our servers shortly after processing.' },
      ]}
      faqTitle="Deleting Pages FAQ"
      faqSubtitle="Answers on document cleanup"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Delete PDF Pages', href: '/delete-pdf-pages' },
        { name: 'Delete Pages', href: '/delete-pages-from-pdf' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
