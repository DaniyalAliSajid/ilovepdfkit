import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { UserX, Zap, FileOutput, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JPG to PDF No Login | Convert Images to PDF Anonymously',
  description: 'Convert JPG to PDF with no login required. Stitch your photos into a single PDF document instantly and securely. 100% free online.',
  alternates: { canonical: 'https://ilovepdfkit.com/jpg-to-pdf-no-login' },
};

export default function JpgToPdfNoLoginPage() {
  return (
    <SEOLandingPage
      slug="jpg-to-pdf-no-login"
      keyword="jpg to pdf no login"
      pageType="A"
      angle="privacy"
      h1="Convert JPG to PDF — No Login Needed"
      heroDescription="Stitch your photos and scanned images into a single, clean PDF document instantly without ever creating an account."
      intro="If you just took four photos of a signed contract with your phone, sending them individually to your boss looks highly unprofessional. You need to combine them into one standard document. But when you look for a tool, every website demands your email address or wants you to start a 'free trial'. You shouldn't have to surrender your personal data just to do a basic file conversion. Our utility lets you convert JPG to PDF with no login required whatsoever. Drag your images onto the canvas, arrange them visually, and download your fresh PDF in total anonymity."
      steps={[
        { title: 'Upload Anonymously', description: 'Drag and drop your JPG or PNG images into the browser.' },
        { title: 'Arrange Visually', description: 'Drag the image thumbnails to ensure they are in the correct order.' },
        { title: 'Stitch Together', description: 'Click Convert to compile the images into a single file.' },
        { title: 'Download & Disappear', description: 'Get your PDF instantly and securely close the tab.' },
      ]}
      features={[
        { icon: UserX, title: 'Zero Friction', description: 'No email required. No account registration screens.' },
        { icon: Zap, title: 'Instant Compile', description: 'Our servers act rapidly to create your file.' },
        { icon: FileOutput, title: 'Adjustable Margins', description: 'Choose whether you want borders around your images.' },
        { icon: Shield, title: 'Total Privacy', description: 'Your photos are automatically deleted after processing.' },
      ]}
      useCases={[
        { title: 'Scanned Documents', description: 'Turn phone photos of receipts into a proper expense report.' },
        { title: 'ID Verification', description: 'Combine photos of the front and back of your passport safely.' },
        { title: 'Photo Portfolios', description: 'Create a clean, standardized PDF booklet of your photography.' },
      ]}
      midCTA={{ text: 'Convert Anonymously →', href: '/jpg-to-pdf' }}
      bottomCTA={{ headline: 'No accounts. Just conversions.', text: 'Turn Photos into PDFs', href: '/jpg-to-pdf' }}
      faqs={[
        { question: 'Since I don\'t have an account, where do my uploaded photos go?', answer: 'Nowhere. Since there is no user profile to attach the images to, all processed files exist only in our temporary memory buffer and are automatically wiped from servers within hours.' },
        { question: 'Is the tool completely free to use?', answer: 'Yes. Core conversions like turning JPGs into a PDF are entirely free and require no subscription to download the final result.' },
        { question: 'Can I upload PNG files as well?', answer: 'Absolutely. Our converter handles almost all standard image formats including JPG, JPEG, and PNG.' },
      ]}
      faqTitle="Anonymous Image Conversion FAQs"
      faqSubtitle="How we handle your photos securely"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Convert from JPG', href: '/jpg-to-pdf' },
        { name: 'JPG to PDF Free', href: '/jpg-to-pdf-no-login' },
      ]}
      themeColor="#6d28d9"
    />
  );
}
