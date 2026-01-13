import { Metadata } from 'next';
import AdvertiseContent from './AdvertiseContent';

export const metadata: Metadata = {
    title: 'Advertise With Us - Reach PDF Professionals | iLovePDFKit',
    description: 'Grow your brand by partnering with iLovePDFKit. Reach a global audience of document professionals, students, and businesses.',
    keywords: 'advertise ilovepdfkit, b2b advertising, document tool sponsorship, digital marketing',
};

export default function AdvertisePage() {
    return <AdvertiseContent />;
}
