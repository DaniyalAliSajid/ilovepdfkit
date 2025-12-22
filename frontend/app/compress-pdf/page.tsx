import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Compress PDF - ILOVEPDFKIT',
    description: 'Reduce the size of your PDF files without compromising quality.',
};

export default function CompressPdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="compress-pdf" />
        </div>
    );
}
