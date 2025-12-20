import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rotate PDF Document - ILOVEPDFKIT',
    description: 'Rotate your PDF documents clockwise by 90, 180, or 270 degrees easily.',
};

export default function RotatePdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="rotate-pdf" />
        </div>
    );
}
