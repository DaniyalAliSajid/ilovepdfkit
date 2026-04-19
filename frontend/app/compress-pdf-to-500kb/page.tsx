import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Eye, Image as ImageIcon, Search, Crosshair } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF to 500KB Without Losing Quality | High Res PDF',
  description: 'There is a myth that compressed PDFs always look pixelated. Reduce your PDF size to 500KB while keeping text crisp and images readable.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-to-500kb' },
};

export default function CompressPdfTo500kbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-500kb"
      keyword="compress pdf to 500kb"
      pageType="A"
      angle="quality"
      h1="Compress PDF to 500KB Without Blurring"
      heroDescription="Reduce your file size exactly to the 500KB tier while keeping charts, text, and photos perfectly crisp and legible."
      intro="There's a myth that compressed PDFs always look pixelated, blurry, and unprofessional. But when you need to compress a PDF to 500KB for an important portfolio or client presentation, poor quality isn't an option. Our smart compression engine focuses on optimization, not destruction. By intelligently downsampling images only where necessary and preserving text vector graphics, we ensure your newly sized 500KB file looks practically identical to the original."
      steps={[
        { title: 'Upload File', description: 'Import your high-resolution PDF.' },
        { title: 'Choose Mode', description: 'Select the Recommended setting to prioritize visual quality.' },
        { title: 'Optimize', description: 'Our engine carefully reduces file bloat without touching text vectors.' },
        { title: 'Inspect & Save', description: 'Download your 500KB document and review the crisp results.' },
      ]}
      features={[
        { icon: Eye, title: 'Lossless Text', description: 'Fonts and vectors remain 100% sharp and readable.' },
        { icon: ImageIcon, title: 'Smart Images', description: 'Photos are downsampled intelligently, avoiding artifacts.' },
        { icon: Search, title: 'Print Ready', description: 'Optimized files still look great when printed.' },
        { icon: Crosshair, title: 'Exact Sizing', description: 'Get as close to 500KB as mathematically possible.' },
      ]}
      useCases={[
        { title: 'Design Portfolios', description: 'Send high-quality work samples under email attachment limits.' },
        { title: 'Financial Reports', description: 'Ensure tiny numbers in balance sheets remain readable.' },
        { title: 'Digital Contracts', description: 'Keep signatures and fine print perfectly clear.' },
      ]}
      midCTA={{ text: 'Optimize Quality Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Don\'t sacrifice quality.', text: 'Compress Your PDF Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'Will compressing a PDF to 500KB ruin the image quality?', answer: 'Not with our tool. We use intelligent downsampling that preserves the visual fidelity of photographs and graphics while drastically reducing their file size footprint.' },
        { question: 'How do I know my text will remain readable?', answer: 'Text in PDFs is rarely the cause of large file sizes. Our compressor leaves text vectors untouched, ensuring letters are always perfectly crisp no matter the final size.' },
        { question: 'Can I compress a password-protected PDF?', answer: 'Yes, but you will first need to use our Unlock PDF tool to remove the password before running it through the compressor.' },
      ]}
      faqTitle="500KB & Quality FAQs"
      faqSubtitle="Learn about lossless PDF compression"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress to 500KB', href: '/compress-pdf-to-500kb' },
      ]}
      themeColor="#10b981"
    />
  );
}
