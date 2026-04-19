import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { EyeOff, FileDigit, Image as ImageIcon, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF Without Losing Quality | Lossless Resizer',
  description: 'There is a myth that making files smaller means ruining them. Compress PDF without losing quality using optimal image downsampling techniques.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-without-losing-quality' },
};

export default function CompressPdfWithoutLosingQualityPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-without-losing-quality"
      keyword="compress pdf without losing quality"
      pageType="A"
      angle="quality"
      h1="Compress PDF Without Losing Quality"
      heroDescription="Reduce file size while keeping fonts crisp and images perfectly legible. Professional optimization for important documents."
      intro="There's a myth that compressed PDFs always look heavily pixelated with unreadable text. When dealing with professional presentations, legal contracts, or high-end design portfolios, a blurry document is completely unacceptable. You need to compress a PDF without losing quality. Our compression algorithms are designed differently. Instead of blindly lowering the resolution of everything on the page, we selectively optimize. We remove invisible metadata, subset fonts efficiently, and use intelligent image downsampling that reduces file weight without introducing awful compression artifacts."
      steps={[
        { title: 'Upload Original', description: 'Import your pristine, high-resolution PDF document.' },
        { title: 'Select Recommended', description: 'Choose the "Recommended" setting for optimal quality-to-size ratio.' },
        { title: 'Smart Processing', description: 'Our system analyzes and optimizes only what is necessary.' },
        { title: 'Verify Quality', description: 'Download your file and compare it. The difference is practically invisible.' },
      ]}
      features={[
        { icon: EyeOff, title: 'No Blurring', description: 'Maintains sharp edges on all graphs and text.' },
        { icon: FileDigit, title: 'Vector Preservation', description: 'SVG elements and fonts are never degraded.' },
        { icon: ImageIcon, title: 'Image Smart-Scale', description: 'Photographs are resized efficiently, not mangled.' },
        { icon: Zap, title: 'Fast Results', description: 'Get high-quality results in less than 10 seconds.' },
      ]}
      useCases={[
        { title: 'Pitch Decks', description: 'Share massive PowerPoint-to-PDF exports with clients seamlessly.' },
        { title: 'Digital Books', description: 'Optimize eBooks for online reading without ruining diagrams.' },
        { title: 'Legal Contracts', description: 'Shrink scanned contracts while ensuring signatures are clear.' },
      ]}
      midCTA={{ text: 'Compress Losslessly →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Keep it crisp. Keep it light.', text: 'Start Compressing Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'Will compressing a PDF the right way reduce image quality?', answer: 'If you choose our "Recommended Quality" mode, the visual difference is usually imperceptible to the human eye, but the file size reduction is significant.' },
        { question: 'Why are some PDFs so large to begin with?', answer: 'Usually, it is because of unoptimized images, embedded full fonts instead of subset fonts, or hidden editing metadata retained by software like Microsoft Word or Adobe Illustrator.' },
        { question: 'What if I need even more compression?', answer: 'If you need drastic reduction (e.g., under 100KB), you can select "Extreme Compression". This will noticeably reduce image quality but keeps text readable.' },
      ]}
      faqTitle="Quality Preservation FAQs"
      faqSubtitle="How we keep your files looking perfect"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress Without Quality Loss', href: '/compress-pdf-without-losing-quality' },
      ]}
      themeColor="#10b981"
    />
  );
}
