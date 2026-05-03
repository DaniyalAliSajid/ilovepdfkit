import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Target, FileWarning, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF to 150KB Online Free | Reduce PDF Size',
  description: 'When an upload portal restricts your document to exactly 150KB, use our extreme compression tool to shrink your PDF instantly without losing readability.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-to-150kb' },
};

export default function CompressPdfTo150kbPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-to-150kb"
      keyword="compress pdf to 150kb"
      pageType="A"
      angle="problem"
      h1="Compress PDF to 150KB — Free Online Tool"
      heroDescription="Your PDF was rejected because it's over 150KB. Shrink it down instantly to bypass strict portal limitations."
      intro='You just finished scanning a multi-page application, but the online portal flashes an error: "File too large (max 150KB)". Hitting this exact file size limit can be incredibly frustrating, especially when you need the text to remain legible for reviewers. Our specific compress PDF to 150KB tool is built for this exact problem. It strips away heavy, invisible metadata and downsamples images aggressively to squeeze your document right under the 150KB threshold.'
      steps={[
        { title: 'Upload PDF', description: 'Drag and drop your oversized file into the upload zone.' },
        { title: 'Select Extreme Compression', description: 'Choose our highest compression setting to target 150KB.' },
        { title: 'Download & Verify', description: 'Save the new file and check that it passes the portal requirements.' },
      ]}
      features={[
        { icon: Target, title: 'Precision Targeting', description: 'Algorithms designed to hit aggressive micro-size limits.' },
        { icon: FileWarning, title: 'Bypass Restrictions', description: 'Never get blocked by a 150KB upload error again.' },
        { icon: Zap, title: 'Fast Processing', description: 'Reduces file size by up to 90% in mere seconds.' },
        { icon: CheckCircle, title: 'Legible Text', description: 'Keeps critical text readable even under extreme compression.' },
      ]}
      useCases={[
        { title: 'Government Visas', description: 'Strict government portals often enforce 150KB limits on passport scans.' },
        { title: 'Job Portals', description: 'Older ATS platforms may reject resumes larger than 150KB.' },
      ]}
      midCTA={{ text: 'Compress to 150KB Now →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Beat the 150KB file limit.', text: 'Compress PDF Free', href: '/compress-pdf' }}
      faqs={[
        { question: 'Will my scanned document still be readable?', answer: 'Yes. While images will lose some crispness, we prioritize text retention so that names, dates, and ID numbers remain perfectly legible.' },
        { question: 'What if my PDF is 10MB?', answer: 'If your file is exceptionally large, you may need to use our Split PDF tool first to upload only the required pages, and then compress those pages.' },
        { question: 'How can I reduce my PDF file size below 150KB?', answer: 'Upload your document and select "Extreme Compression". Our algorithm will aggressively strip background data and downsample images to push the size under 150KB.' },
        { question: 'Will a 150KB PDF still be readable for official applications?', answer: 'Yes. While high-resolution photos will lose sharpness, we specifically protect text quality so names, dates, and important details remain clear to reviewers.' },
      ]}
      faqTitle="Compress to 150KB — FAQ"
      faqSubtitle="Answers for strict file size limits"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress to 150KB', href: '/compress-pdf-to-150kb' },
      ]}
      themeColor="#10b981"
    />
  );
}
