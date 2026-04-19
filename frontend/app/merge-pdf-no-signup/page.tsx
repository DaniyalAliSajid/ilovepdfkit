import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { UserX, Mail, Fingerprint, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Merge PDF No Signup | Combine Without an Account',
  description: 'Your file. Your rules. Merge PDF without creating an account or verifying an email. Instantly combine your documents with complete anonymity.',
  alternates: { canonical: 'https://ilovepdfkit.com/merge-pdf-no-signup' },
};

export default function MergePdfNoSignupPage() {
  return (
    <SEOLandingPage
      slug="merge-pdf-no-signup"
      keyword="merge pdf no signup"
      pageType="A"
      angle="privacy"
      h1="Merge PDF Without Signing Up"
      heroDescription="Skip the registration forms. Combine your PDF files instantly without handing over your email or creating an account."
      intro="Your file. Your rules. No email required, no account created, and no unexpected newsletters filling up your inbox. You just want to connect two PDFs together; you shouldn't have to surrender your personal data to do it. We allow you to merge PDF with no signup instantly from your browser. We don't want your email address, and we don't track who you are. By stripping away user accounts, we provide a frictionless, highly private merging experience. Just drop your files, get your combined document, and leave."
      steps={[
        { title: 'Upload Anonymously', description: 'Upload the PDFs you need to combine. We track files, not users.' },
        { title: 'Organize', description: 'Reorder the pages safely within the browser.' },
        { title: 'Produce', description: 'Click merge to generate the final document.' },
        { title: 'Download & Disappear', description: 'Save the file. Since there is no account, there is no footprint.' },
      ]}
      features={[
        { icon: UserX, title: 'Zero Registration', description: 'No forms, no passwords, no email verification.' },
        { icon: Mail, title: 'No Spam', description: 'Because we don\'t ask for your email, we can\'t spam it.' },
        { icon: Fingerprint, title: 'Anonymous Use', description: 'Process your files without tying them to an identity.' },
        { icon: Lock, title: 'Secure Deletion', description: 'All merged files are automatically purged from our servers.' },
      ]}
      useCases={[
        { title: 'Shared Work Computers', description: 'Safely merge sensitive documents without leaving account traces.' },
        { title: 'One-time Tasks', description: 'Fix a document quickly without committing to a new software subscription.' },
        { title: 'Confidential Memos', description: 'Ensure leaked internal company PDFs aren\'t tied to your personal email.' },
      ]}
      midCTA={{ text: 'Merge Anonymously →', href: '/merge-pdf' }}
      bottomCTA={{ headline: 'No logins. Just results.', text: 'Merge PDF Now', href: '/merge-pdf' }}
      faqs={[
        { question: 'Do you keep the merged PDF on file?', answer: 'No. Since our system does not use accounts, there are no user folders to store documents in. All processed files are permanently deleted from our servers.' },
        { question: 'Is there a limit on how many times I can use the tool without an account?', answer: 'No. You can come back and merge PDFs anonymously as many times as you need to.' },
        { question: 'How is the connection secured if there is no login?', answer: 'Your connection to our site is fully encrypted via 256-bit SSL/HTTPS, ensuring that your files cannot be intercepted while uploading or downloading, regardless of your account status.' },
      ]}
      faqTitle="Anonymity & Security FAQs"
      faqSubtitle="Merging documents without the data tracking"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Merge PDF', href: '/merge-pdf' },
        { name: 'Merge Free No Signup', href: '/merge-pdf-no-signup' },
      ]}
      themeColor="#8b5cf6"
    />
  );
}
