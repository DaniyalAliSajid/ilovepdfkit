import { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';
import { MessageCircle, Smartphone, Wifi, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compress PDF for WhatsApp | Reduce PDF Size for Mobile Chat',
  description: 'Picture this: you are on a weak cellular connection trying to send a contract via chat. Compress PDF for WhatsApp to share files instantly on mobile.',
  alternates: { canonical: 'https://ilovepdfkit.com/compress-pdf-for-whatsapp' },
};

export default function CompressPdfForWhatsappPage() {
  return (
    <SEOLandingPage
      slug="compress-pdf-for-whatsapp"
      keyword="compress pdf for whatsapp"
      pageType="A"
      angle="use-case"
      h1="Compress PDF for WhatsApp Sharing"
      heroDescription="Make your PDFs small enough to send instantly over messaging apps, saving cellular data and preventing failed uploads."
      intro="Picture this: you're trying to send a signed contract to a vendor via mobile chat, but you're on a weak 3G connection and the 15MB file just keeps freezing at 99%. Waiting for massive files to upload on mobile networks is infuriating. When you compress a PDF for WhatsApp using our tool, you instantly solve this problem. Mobile chats are designed for speed, not bulk. By shrinking your document down to a fraction of its original size, you guarantee immediate delivery, save your recipient's cellular data, and ensure they can open the document on their phone without lag."
      steps={[
        { title: 'Upload on Mobile', description: 'Select the oversized PDF from your phone or PC.' },
        { title: 'Shrink', description: 'Hit compress to optimize the file for cellular transfer.' },
        { title: 'Download', description: 'Save the new, lightweight file to your device.' },
        { title: 'Share in Chat', description: 'Send the optimized file instantly via WhatsApp.' },
      ]}
      features={[
        { icon: MessageCircle, title: 'Chat Optimized', description: 'Perfect sizing for WhatsApp, Telegram, or Messenger.' },
        { icon: Smartphone, title: 'Mobile Friendly', description: 'Process files directly from your phone browser.' },
        { icon: Wifi, title: 'Data Saver', description: 'Stop wasting expensive cellular data on 20MB uploads.' },
        { icon: Share2, title: 'Instant Sharing', description: 'Smaller files mean immediate delivery times.' },
      ]}
      useCases={[
        { title: 'Quick Contacts', description: 'Share signed NDAs or quick contracts with clients instantly.' },
        { title: 'Menu Sharing', description: 'Restaurants can send lightweight PDF menus to customers.' },
        { title: 'Event Tickets', description: 'Ensure event tickets load immediately on attendees\' screens.' },
      ]}
      midCTA={{ text: 'Optimize for WhatsApp →', href: '/compress-pdf' }}
      bottomCTA={{ headline: 'Share PDFs instantly in chat.', text: 'Compress File Now', href: '/compress-pdf' }}
      faqs={[
        { question: 'Does WhatsApp have a PDF file size limit?', answer: 'Yes. WhatsApp currently caps document transfers at 100MB. While you won\'t often hit the hard limit, sending anything over 5MB on mobile data results in very slow upload and download times.' },
        { question: 'Will the compressed PDF be readable on a phone screen?', answer: 'Absolutely. We preserve text clarity so that when your recipient pinches to zoom on their smartphone, the text remains crisp and entirely legible.' },
        { question: 'Can I compress a PDF directly on my iPhone or Android?', answer: 'Yes. iLovePDFKit is fully responsive. You can compress files directly in Safari or Chrome on your mobile device without downloading any apps.' },
      ]}
      faqTitle="WhatsApp Compression FAQs"
      faqSubtitle="Rules for sharing documents on mobile"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compress PDF', href: '/compress-pdf' },
        { name: 'Compress for WhatsApp', href: '/compress-pdf-for-whatsapp' },
      ]}
      themeColor="#10b981"
    />
  );
}
