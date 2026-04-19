import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';

export const metadata: Metadata = {
  title: 'How to Compress PDF to 100KB | Step-by-Step Guide',
  description: 'It sounds complicated, but shrinking a file is easy. Learn exactly how to compress PDF to 100KB in four simple steps.',
  alternates: { canonical: 'https://ilovepdfkit.com/how-to-compress-pdf-to-100kb' },
};

export default function HowToCompressPdfTo100kbPage() {
  return (
    <SEOLandingPage
      slug="how-to-compress-pdf-to-100kb"
      keyword="how to compress pdf to 100kb"
      pageType="B"
      angle="how-to"
      h1="How to Compress PDF to 100KB"
      heroDescription="A quick, step-by-step tutorial on reducing your massive PDF files down to exactly 100KB using our free web tool."
      intro="It sounds complicated, but knowing how to compress a PDF to 100KB takes exactly four simple steps. When a portal throws an error and demands a tiny file size, you don't have time to download heavy desktop software or play with complicated DPI settings in Adobe Acrobat. Our browser-based tool abstracts all that complexity away. If you follow this guide, you will have your document optimized, resized, and ready to upload anywhere in less than 30 seconds."
      steps={[
        { title: 'Open the Compressor Tool', description: 'Navigate to the top of this page or click the "Compress PDF" link in the menu to access our dedicated size-reduction engine.' },
        { title: 'Upload Your Document', description: 'Securely upload your oversized PDF. You can drag and drop it directly from your desktop or select it from your mobile device files.' },
        { title: 'Choose Extreme Compression', description: 'Because 100KB is a very aggressive target, choose the "Extreme Compression" setting. This instructs our engine to prioritize maximum file size reduction.' },
        { title: 'Download and Verify', description: 'Click Convert. Once processed, download the new file and check the file properties to verify it has safely crossed below the 100KB threshold.' },
      ]}
      features={[]} // Type B pages rely primarily on the steps and intro
      useCases={[
        { title: 'Digital Job Applications', description: 'Ensure your resume successfully parses through strict ATS systems without error.' },
        { title: 'Government Visas', description: 'Hit the exact kb limits mandated by slow bureaucratic e-portals.' },
        { title: 'Email Attachments', description: 'Guarantee your file sends instantly, even on weak 3G networks.' },
      ]}
      midCTA={{ text: 'Follow the Steps Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Ready to shrink your file?', text: 'Compress PDF for Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'How do I know how much compression is applied?', answer: 'The tool will show you the exact original file size and the new, compressed file size on the download screen, so you can see exactly how much data was saved.' },
        { question: 'Can I compress a password-protected PDF?', answer: 'No, if the file is encrypted, the compression engine cannot read the image data to shrink it. You must unlock the PDF first.' },
        { question: 'What if the compressed PDF is still too large?', answer: 'If your PDF is 50 pages long and heavy with images, getting it to 100KB might be physically impossible without deleting content. Try splitting the PDF into separate files first.' },
      ]}
      faqTitle="Compression Tutorial FAQs"
      faqSubtitle="Guidance on shrinking your documents"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'How to Compress to 100KB', href: '/how-to-compress-pdf-to-100kb' },
      ]}
      themeColor="#10b981"
    />
  );
}
