import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { Shield, Lock, FileKey, EyeOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Protect PDF with Password | Encrypt PDF Documents Securely',
  description: 'Keep prying eyes out of your sensitive data. Protect PDF with password encryption instantly using AES-256 bit security.',
  alternates: { canonical: 'https://ilovepdfkit.com/protect-pdf-with-password' },
};

export default function ProtectPdfWithPasswordPage() {
  return (
    <SEOLandingPage
      slug="protect-pdf-with-password"
      keyword="protect pdf with password"
      pageType="A"
      angle="privacy"
      h1="Protect PDF with Password Securely"
      heroDescription="Lock your confidential documents with military-grade AES-256 encryption. Ensure only authorized people can open your files."
      intro="Emailing a sensitive legal contract, a medical history record, or a financial ledger as a plain PDF is a massive security risk. If that email is forwarded or intercepted, your private data is instantly exposed to prying eyes. You must protect PDF with password encryption before letting sensitive files leave your computer. Our security tool wraps your document in an unbreakable AES-256 bit encryption layer. Once locked, the file becomes completely inaccessible to anyone—human or machine—who does not possess the exact passcode you created."
      steps={[
        { title: 'Upload Document', description: 'Securely upload your sensitive PDF file.' },
        { title: 'Set Password', description: 'Type a strong, memorable password into the security field.' },
        { title: 'Encrypt File', description: 'Our servers wrap the file in AES-256 encryption.' },
        { title: 'Download Securely', description: 'Save the locked file. It cannot be opened without the key.' },
      ]}
      features={[
        { icon: Shield, title: 'AES-256 Security', description: 'The absolute gold standard in file encryption.' },
        { icon: Lock, title: 'Unbreakable Lock', description: 'Brute-forcing the file without the password is impossible.' },
        { icon: FileKey, title: 'Password Required', description: 'Forces a password prompt every time the file is opened.' },
        { icon: EyeOff, title: 'Zero Data Retention', description: 'Your unprotected original file is wiped from our servers.' },
      ]}
      useCases={[
        { title: 'Financial Records', description: 'Lock tax returns and bank statements before emailing your accountant.' },
        { title: 'Legal Contracts', description: 'Protect NDAs and merger agreements from unauthorized viewing.' },
        { title: 'Medical Data', description: 'Ensure HIPAA compliance when sharing personal health records.' },
      ]}
      midCTA={{ text: 'Encrypt Your File →', href: '/protect-pdf' }}
      bottomCTA={{ headline: 'Lock down your sensitive data.', text: 'Protect PDF Now', href: '/protect-pdf' }}
      faqs={[
        { question: 'What kind of encryption is used to protect the PDF?', answer: 'We utilize AES-256 bit encryption. This is the industry-standard cryptographic protocol used by banks and government agencies to secure confidential data.' },
        { question: 'What happens if I forget the password I set?', answer: 'If you lose the password, the document cannot be opened. We do not store your passwords on our servers, which means we cannot recover them for you. Always keep a backup of the original file or store the password in a secure manager.' },
        { question: 'Is it safe to type the password on this website?', answer: 'Yes. The connection between your browser and our secure servers is encrypted via HTTPS. The password is only used momentarily to lock the file and is instantly discarded from memory.' },
      ]}
      faqTitle="Encryption Security FAQs"
      faqSubtitle="Understanging how we secure your files"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Protect PDF', href: '/protect-pdf' },
        { name: 'Protect With Password', href: '/protect-pdf-with-password' },
      ]}
      themeColor="#1e3a8a"
    />
  );
}
