import { Metadata } from 'next';
import DeletePdfPagesContent from './DeletePdfPagesContent';

export const metadata: Metadata = {
    title: 'Delete PDF Pages - Remove Pages from PDF Online | iLovePDFKit',
    description: 'Remove unwanted pages from your PDF document visually. Select page thumbnails and delete them instantly. Free, secure, and easy PDF trimmer.',
    keywords: ['delete pdf pages', 'remove pages from pdf', 'pdf trimmer', 'pdf page remover', 'delete specific pdf pages', 'online pdf editor'],
    alternates: { canonical: 'https://ilovepdfkit.com/delete-pdf-pages' },
};

export default function DeletePdfPagesPage() {
    return <DeletePdfPagesContent />;
}
