import Converter from "@/components/Converter";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rotate PDF - Rotate PDF Pages Permanently Online | ILOVEPDFKIT',
    description: 'Rotate PDF pages 90, 180 or 270 degrees clockwise. Save and download your rotated PDF instantly. Free service, no limits.',
};

export default function RotatePdfPage() {
    return (
        <div className="container" style={{ padding: "4rem 1rem", minHeight: "calc(100vh - 200px)" }}>
            <Converter type="rotate-pdf" />
        </div>
    );
}
