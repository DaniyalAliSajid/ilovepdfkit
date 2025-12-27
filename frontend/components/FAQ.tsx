'use client';

import { useState } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
            <button
                className={styles.faqQuestion}
                onClick={onClick}
                aria-expanded={isOpen}
                type="button"
            >
                <span>{question}</span>
                <ChevronDown
                    className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}
                    size={20}
                />
            </button>
            <div
                className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}
                aria-hidden={!isOpen}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
}


interface FAQData {
    question: string;
    answer: string;
}

interface FAQProps {
    customFaqs?: FAQData[];
    title?: string;
    subtitle?: string;
}

export default function FAQ({
    customFaqs,
    title = "Frequently Asked Questions",
    subtitle = "Everything you need to know about ILOVEPDFKIT"
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const defaultFaqs: FAQData[] = [
        {
            question: 'Is my data secure when using ILOVEPDFKIT?',
            answer: 'Yes, absolutely. Your files are processed securely and are never stored on our servers. All conversions happen in real-time, and files are automatically deleted after processing. We prioritize your privacy and data security.'
        },
        {
            question: 'What file formats does ILOVEPDFKIT support?',
            answer: 'ILOVEPDFKIT supports a wide range of formats including PDF, Word (DOC/DOCX), PowerPoint (PPT/PPTX), and images (JPG/JPEG). You can convert between these formats seamlessly while maintaining formatting and quality.'
        },
        {
            question: 'Will my document formatting be preserved after conversion?',
            answer: 'Yes! ILOVEPDFKIT uses advanced conversion algorithms to maintain pixel-perfect accuracy. Your fonts, images, layouts, page counts, and formatting will be preserved exactly as they appear in the original document.'
        },
        {
            question: 'Is there a file size limit for conversions?',
            answer: 'Currently, we support files up to 50MB for optimal performance. For larger files, we recommend splitting them into smaller documents or compressing them before conversion.'
        },
        {
            question: 'Do I need to create an account to use ILOVEPDFKIT?',
            answer: 'No account is required! ILOVEPDFKIT is completely free to use without any registration. Simply upload your file, choose your conversion format, and download the converted document instantly.'
        },
        {
            question: 'How long does the conversion process take?',
            answer: 'Most conversions are completed within seconds thanks to our optimized conversion engine. The exact time depends on your file size and complexity, but typical documents convert in 5-15 seconds.'
        },
        {
            question: 'Can I convert multiple files at once?',
            answer: 'Currently, our tools process one file at a time to ensure the highest quality conversion. For batch processing, you can use our Merge PDF tool to combine multiple PDFs into one document.'
        },
        {
            question: 'What browsers are supported?',
            answer: 'ILOVEPDFKIT works on all modern browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. We recommend using the latest version of your browser for the best experience.'
        }
    ];

    const faqs = customFaqs || defaultFaqs;

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{title}</h2>
                    <p className={styles.sectionSubtitle}>{subtitle}</p>
                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Schema.org JSON-LD for SEO */}
            <Script
                id={`faq-schema-${title.replace(/\s+/g, '-').toLowerCase()}`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqs.map((faq) => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer
                            }
                        }))
                    })
                }}
            />
        </>
    );
}
