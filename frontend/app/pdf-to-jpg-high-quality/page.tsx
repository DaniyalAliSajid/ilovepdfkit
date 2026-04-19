import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Image as ImageIcon, CheckCircle, Smartphone, SlidersHorizontal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Convert PDF to JPG High Quality | Extract HD Images',
  description: 'Convert PDF to JPG high quality images. Extract pages as crisp, HD image files without compression artifacts. Perfect for uploading to social media.',
  alternates: { canonical: 'https://ilovepdfkit.com/pdf-to-jpg-high-quality' },
};

export default function PdfToJpgHighQualityPage() {
  return (
    <SEOLandingPage
      slug="pdf-to-jpg-high-quality"
      keyword="pdf to jpg high quality"
      pageType="A"
      angle="quality"
      h1="Convert PDF to High-Quality JPG"
      heroDescription="Turn flat PDF pages into crisp, high-resolution JPG images. Perfect for graphic designers, social media, and presentations."
      intro="Social media platforms like Instagram or LinkedIn do not allow you to upload a PDF directly to your feed. If you have an infographic, a poster design, or a presentation slide trapped inside a PDF, you need a way to extract it. But simply taking a screenshot ruins the resolution. You need an engine that can convert PDF to JPG high quality. Our extraction tool renders the internal vector graphics of your PDF and exports them as beautiful, crisp, HD image files. No ugly compression artifacts, no blurry text—just pristine graphics ready for your website or feed."
      steps={[
        { title: 'Upload PDF', description: 'Drag the document containing the graphics into our converter.' },
        { title: 'High-Res Rendering', description: 'Our servers process the vectors into high-fidelity image data.' },
        { title: 'ZIP Packaging', description: 'Every converted page is packaged into a convenient ZIP archive.' },
        { title: 'Unzip & Post', description: 'Extract your pristine JPGs and upload them anywhere.' },
      ]}
      features={[
        { icon: ImageIcon, title: 'HD Resolution', description: 'Images are exported with clarity, perfect for zooming.' },
        { icon: CheckCircle, title: 'Lossless Conversion', description: 'Say goodbye to pixelated text and jagged lines.' },
        { icon: Smartphone, title: 'Social Ready', description: 'The exact format required by Instagram and LinkedIn.' },
        { icon: SlidersHorizontal, title: 'Full Document Support', description: 'Convert a 10-page PDF into 10 separate JPGs.' },
      ]}
      useCases={[
        { title: 'Social Media Posts', description: 'Turn an eBook cover PDF into an Instagram post.' },
        { title: 'Web Design Assets', description: 'Extract vector client logos trapped in PDF brand guidelines.' },
        { title: 'Presentation Slides', description: 'Convert key pages into images for use in PowerPoint.' },
      ]}
      midCTA={{ text: 'Convert to HD JPG →', href: '/pdf-to-jpg' }}
      bottomCTA={{ headline: 'Free your design from the PDF trap.', text: 'Extract Images Now', href: '/pdf-to-jpg' }}
      faqs={[
        { question: 'Will the converted JPGs be blurry?', answer: 'No. Taking a screenshot makes images blurry, but our converter actively renders the PDF source code into a high DPI image, guaranteeing crisp edges and clear text.' },
        { question: 'What if my PDF has multiple pages?', answer: 'Our tool handles multi-page PDFs perfectly. If you upload a 5-page PDF, you will receive a ZIP file containing 5 separate, high-quality JPG images.' },
        { question: 'Can I extract just the images inside the PDF, rather than the whole page?', answer: 'Currently, this tool converts the entire page into a single JPG (best for presentations and posters). For extracting embedded graphic files, you would use a specialized asset extraction tool.' },
      ]}
      faqTitle="Quality Extraction FAQs"
      faqSubtitle="Getting the best images from your files"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert to JPG', href: '/pdf-to-jpg' },
        { name: 'High Quality PNG/JPG', href: '/pdf-to-jpg-high-quality' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
