import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch with iLovePDFKit',
    description: 'Have questions or feedback? Contact the iLovePDFKit team for support, feature requests, or general inquiries. We\'re here to help.',
    keywords: 'contact ilovepdfkit, pdf tool support, customer service, feedback',
    alternates: { canonical: 'https://ilovepdfkit.com/contact' },
};

export default function ContactPage() {
    return <ContactContent />;
}
