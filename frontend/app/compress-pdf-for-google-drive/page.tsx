import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Zap, Shield, Lock, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Compress PDF for Google Drive | Save Cloud Storage",
  description: "Compress PDF files before uploading to Google Drive. Save cloud storage space and share lightweight documents quickly.",
  alternates: { canonical: "https://ilovepdfkit.com/compress-pdf-for-google-drive" },
};

export default function CompressPdfForGoogleDrivePage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-for-google-drive"
      keyword="compress pdf for google drive"
      pageType="A"
      angle="use-case"
      h1="Compress PDF for Google Drive Uploads"
      heroDescription="Save Google Workspace cloud quota and make file sharing faster by shrinking PDFs."
      intro="Uploading uncompressed 50MB PDFs rapidly consumes your 15GB Google Drive cloud allocation. By compressing your PDFs prior to uploading, you save valuable cloud storage space and enable teammates to preview and download files instantly."
      steps={[
        { title: "Select File", description: "Choose your heavy PDF file." },
        { title: "Compress", description: "Shrink file size up to 90% in cloud." },
        { title: "Upload to Drive", description: "Save the optimized PDF into Google Drive." }
      ]}
      features={[
        { icon: Zap, title: "Storage Saver", description: "Free up cloud quota across Google Workspace." },
        { icon: Shield, title: "Secure Transfer", description: "End-to-end encrypted file processing." },
        { icon: Lock, title: "No Installation", description: "Works on browser without Drive plugins." },
        { icon: FileCheck, title: "Fast Web View", description: "Optimized for instant browser rendering." }
      ]}
      useCases={[
        { title: "Shared Team Folders", description: "Keep Google Drive workspace folders lightweight." },
        { title: "Archiving Documents", description: "Store hundreds of PDFs without hitting quota caps." },
        { title: "Mobile Viewing", description: "Allow quick previews on mobile Drive apps." }
      ]}
      midCTA={{ text: "Compress PDF for Drive →", href: "/compress-pdf" }}
      bottomCTA={{ headline: "Save Google Drive storage now.", text: "Compress PDF Free", href: "/compress-pdf" }}
      faqs={[
        { question: "Why compress PDFs before Google Drive upload?", answer: "It reduces storage consumption and allows users on slow mobile connections to open previews faster." },
        { question: "Can I upload the compressed file back to Drive?", answer: "Yes, download the compressed file and drag it into Google Drive as normal." }
      ]}
      faqTitle="Google Drive PDF Compression FAQ"
      faqSubtitle="Cloud storage optimization tips"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "For Google Drive", href: "/compress-pdf-for-google-drive" }
      ]}
      themeColor="#10b981"
    />
  );
}
