import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Type, ShieldCheck, Pocket, Wand2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Word to PDF Online Free | Convert DOCX Instantly',
  description: 'Lock your formatting in place. Convert Word to PDF online free so your resume, contract, or essay looks the same on every screen.',
  alternates: { canonical: 'https://ilovepdfkit.com/word-to-pdf-online-free' },
};

export default function WordToPdfOnlineFreePage() {
  return (
    <SEOLandingPage
      slug="word-to-pdf-online-free"
      keyword="word to pdf online free"
      pageType="A"
      angle="speed"
      h1="Convert Word to PDF Online Free"
      heroDescription="Lock in your formatting before emailing. Turn your Word documents into universally readable PDFs instantly."
      intro="If you email a meticulously formatted Microsoft Word resume to a recruiter, there is a very high chance they open it in Google Docs or Apple Pages, and all your beautiful formatting instantly shatters. Margins break, fonts get swapped, and it looks terrible. You must convert Word to PDF online free before sending professional documents. PDFs freeze your layout in time—ensuring that the file looks identical on a Mac, a PC, or a mobile phone screen. Our high-speed cloud converter takes your `.docx` files and perfectly renders them into flat, secure PDFs without shifting a single pixel."
      steps={[
        { title: 'Upload DOCX', description: 'Drag your finished Microsoft Word document into the converter.' },
        { title: 'Lock Formatting', description: 'Our system reads the document and freezes the layout.' },
        { title: 'Instant Conversion', description: 'The server generates the PDF in under 5 seconds.' },
        { title: 'Download & Send', description: 'Download the file and email it with total confidence.' },
      ]}
      features={[
        { icon: Type, title: 'Perfect Fonts', description: 'Custom fonts are embedded directly into the file.' },
        { icon: ShieldCheck, title: 'Total Privacy', description: 'Your original and converted files are deleted automatically.' },
        { icon: Pocket, title: 'Zero Cost', description: 'No hidden paywalls when the conversion finishes.' },
        { icon: Wand2, title: 'Margin Consistency', description: 'Headers and footers remain precisely aligned.' },
      ]}
      useCases={[
        { title: 'Sending Resumes', description: 'Ensure the HR manager sees exactly what you designed.' },
        { title: 'Submitting Essays', description: 'University professors require precise MLA/APA formatting.' },
        { title: 'Finalizing Contracts', description: 'Prevent the recipient from easily altering the legal text.' },
      ]}
      midCTA={{ text: 'Convert Word to PDF →', href: '/word-to-pdf' }}
      bottomCTA={{ headline: 'Lock your layout in place.', text: 'Turn Word into PDF', href: '/word-to-pdf' }}
      faqs={[
        { question: 'Will the PDF look exactly like my Word document?', answer: 'Yes. Our conversion engine renders the file precisely as Microsoft Word would print it, locking all margins, spacing, and fonts into place.' },
        { question: 'Is it completely free to convert Word files?', answer: 'Yes. We do not place arbitrary limits or hidden paywalls at the end of the conversion process. The tool is 100% free to use.' },
        { question: 'Are my business documents secure?', answer: 'Absolutely. We use 256-bit SSL encryption during upload, and your files are permanently purged from our system automatically shortly after processing.' },
      ]}
      faqTitle="Word Conversion FAQs"
      faqSubtitle="Answers on locking your layouts"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert to PDF', href: '/word-to-pdf' },
        { name: 'Word to PDF Free', href: '/word-to-pdf-online-free' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
