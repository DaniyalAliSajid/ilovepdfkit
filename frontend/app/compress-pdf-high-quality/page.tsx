import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Award, Image as ImageIcon, Eye, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF High Quality | Shrink Size, Keep Quality',
  description: 'Compress PDF files without losing quality. Our advanced algorithms reduce file size while keeping text sharp and images crystal clear.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-high-quality' },
};

export default function CompressPdfHighQualityPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-high-quality"
      keyword="compress pdf high quality"
      pageType="A"
      angle="quality"
      h1="Compress PDF in High Quality"
      heroDescription="Shrink your file size dramatically without destroying your photos or blurring your text."
      intro="Standard PDF compressors are blunt instruments. They take a 20MB file and crush it down to 2MB, but they do it by turning your beautiful photographs into pixelated messes and making your text blurry and hard to read. If you are sending a professional portfolio or a high-end presentation, this is unacceptable. You need to compress the PDF in high quality. Our smart compression engine selectively targets invisible structural data and carefully optimizes images using advanced algorithms, dramatically reducing the file size while remaining visually identical to the original."
      steps={[
        { title: 'Upload PDF', description: 'Upload your high-resolution portfolio or presentation.' },
        { title: 'Select Recommended Mode', description: 'Choose "Recommended Compression" to prioritize visual fidelity.' },
        { title: 'Download Pristine File', description: 'Receive a smaller file that still looks perfect.' },
      ]}
      features={[
        { icon: Award, title: 'Smart Optimization', description: 'Only removes unnecessary data, not visible quality.' },
        { icon: ImageIcon, title: 'Photo Preservation', description: 'Keeps high-resolution photos looking vibrant and sharp.' },
        { icon: Eye, title: 'Crisp Text', description: 'Ensures all vector text remains perfectly legible.' },
        { icon: FileCheck, title: 'Print Ready', description: 'Compressed files still look fantastic when printed on paper.' },
      ]}
      useCases={[
        { title: 'Design Portfolios', description: 'Email design portfolios without ruining the image quality.' },
        { title: 'Marketing Decks', description: 'Share corporate presentations while keeping logos perfectly sharp.' },
      ]}
      midCTA={{ text: 'Compress with Quality →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Don\'t compromise on visual quality.', text: 'Compress High Quality', href: '/compress-pdf' }}
      faqs={[
        { question: 'Will my client notice the compression?', answer: 'No. Our high-quality compression is virtually indistinguishable from the original document when viewed on standard screens or printed.' },
        { question: 'How much smaller will the file get?', answer: 'High-quality compression typically reduces the file size by 40% to 60%, depending on how much invisible metadata the original file contains.' },
        { question: 'How do I compress a PDF without losing image quality?', answer: 'Choose our "Recommended" or "Low" compression modes. These modes focus entirely on removing invisible code and metadata while leaving your images completely untouched.' },
        { question: 'Does compressing a PDF ruin the pictures for printing?', answer: 'Standard compressors might, but our high-quality optimization protects image resolution, ensuring your document remains perfectly sharp for both digital viewing and physical printing.' },
      ]}
      faqTitle="High Quality Compression — FAQ"
      faqSubtitle="Answers about resolution and visual fidelity"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'High Quality Compress', href: '/compress-pdf-high-quality' },
      ]}
      themeColor="#10b981"
    />
  );
}
