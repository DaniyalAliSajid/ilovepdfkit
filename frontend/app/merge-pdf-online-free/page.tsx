import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { FastForward, CreditCard, Clock, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Merge PDF Online Free | Combine PDF Files Instantly',
  description: 'In 5 seconds, you can combine multiple documents into one. Merge PDF online free with zero wait times and no hidden paywalls.',
  alternates: { canonical: 'https://ilovepdfkit.com/merge-pdf-online-free' },
};

export default function MergePdfOnlineFreePage() {
  return (
    <SEOLandingPage
      slug="merge-pdf-online-free"
      keyword="merge pdf online free"
      pageType="A"
      angle="speed"
      h1="Merge PDF Online Free — Instantly"
      heroDescription="Combine as many PDFs as you need into a single organized document. Fast, free, and incredibly easy to use."
      intro="In 10 seconds, you can combine a dozen scattered documents into one polished file. When you're trying to prep a presentation or send a coherent report to your manager, you don't have time to battle with clunky software or hit a surprise paywall right before downloading. You just need to merge PDF online free, and you need it done instantly. Our fast cloud-processing cluster takes your separate PDFs, stitches them together in exactly the order you choose, and delivers the single combined file back to you immediately."
      steps={[
        { title: 'Upload Files', description: 'Drag all the PDFs you want to merge into the browser.' },
        { title: 'Reorder', description: 'Drag the icons to ensure they are in the perfect sequence.' },
        { title: 'Merge Instantly', description: 'Click the button and watch it combine in a flash.' },
        { title: 'Download', description: 'Get your single, combined PDF file entirely for free.' },
      ]}
      features={[
        { icon: FastForward, title: 'Instant Processing', description: 'Our servers stitch files together incredibly fast.' },
        { icon: CreditCard, title: '100% Free', description: 'No hidden paywalls when you click download.' },
        { icon: Clock, title: 'No Waiting In Line', description: 'No processing queues, even for large merges.' },
        { icon: Layers, title: 'Unlimited Files', description: 'Merge 2 files or 20 files—it handles it all.' },
      ]}
      useCases={[
        { title: 'Meeting Prep', description: 'Combine separate department reports into one master deck.' },
        { title: 'Tax Returns', description: 'Merge your W2s, 1099s, and receipts into one clean package.' },
        { title: 'Client Portfolios', description: 'Stitch together different creative assets for a single pitch.' },
      ]}
      midCTA={{ text: 'Combine Your Files →', href: '/merge-pdf' }}
      bottomCTA={{ headline: 'Stop managing a hundred files.', text: 'Merge PDF For Free', href: '/merge-pdf' }}
      faqs={[
        { question: 'Is it completely free to merge PDFs here?', answer: 'Yes. There are no limits on the tool, no hidden watermarks, and no surprise paywalls asking for a subscription when you try to download the final file.' },
        { question: 'How many PDF files can I merge at once?', answer: 'Our high-speed servers can easily handle dozens of files at once. You can drag and drop an entire folder of PDFs into the tool.' },
        { question: 'Will merging them slow down the download?', answer: 'No, the processing happens almost instantaneously on our cloud servers, so the download is ready the moment you click the button.' },
      ]}
      faqTitle="Free Merging FAQs"
      faqSubtitle="Answers about speed and cost"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Merge PDF', href: '/merge-pdf' },
        { name: 'Merge Online Free', href: '/merge-pdf-online-free' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
