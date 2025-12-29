'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    CheckCircle,
    AlertCircle,
    Send,
    Target,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import styles from './page.module.css';
import { getBaseUrl } from '@/utils/api';

export default function AdvertisePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: 'Advertising Inquiry',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            const baseUrl = getBaseUrl();
            const payload = {
                ...formData,
                subject: `Advertise Inquiry: ${formData.company || 'New Partner'}`
            };

            const response = await fetch(`${baseUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', subject: 'Advertising Inquiry', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Failed to send inquiry. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

    const benefits = [
        {
            icon: Users,
            title: 'Large Active Audience',
            description: 'Reach thousands of professionals, students, and businesses who use our tools daily for their document needs.'
        },
        {
            icon: Target,
            title: 'Targeted Demographics',
            description: 'Connect with a tech-savvy audience actively looking for productivity solutions and digital tools.'
        },
        {
            icon: TrendingUp,
            title: 'High Engagement',
            description: 'Our users spend significant time on page during document processing, providing excellent visibility for your brand.'
        },
        {
            icon: Zap,
            title: 'Flexible Ad Placements',
            description: 'From banner ads to sponsored tools, we offer various ways to integrate your message seamlessly.'
        }
    ];

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div className={styles.header}>
                <h1 className={styles.title}>Advertise With Us</h1>
                <p className={styles.subtitle}>
                    Partner with iLovePDFKit and get your brand in front of a global audience of document professionals and creators.
                </p>
            </div>

            <div className={styles.grid}>
                {/* Benefits Side */}
                <div>
                    <h2 className={styles.sectionTitle}>Why Partner With Us?</h2>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>
                                <benefit.icon size={28} />
                            </div>
                            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                            <p className={styles.benefitText}>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Form Side */}
                <div>
                    <div className={styles.formCard}>
                        <h2 className={styles.formTitle}>Get in Touch</h2>
                        <p className={styles.formSubtitle}>Fill out the form below and our advertising team will get back to you within 24 hours.</p>

                        {status === 'success' && (
                            <div className={styles.successMessage}>
                                <CheckCircle size={20} />
                                <span>Inquiry sent successfully! We'll contact you soon.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className={styles.errorMessage}>
                                <AlertCircle size={20} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="John Doe"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Work Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="john@company.com"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>Company/Website</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Company Name"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>How can we help you?</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        rows={5}
                                        placeholder="Tell us about your advertising goals..."
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <span className={styles.spinner}></span>
                                                Sending Inquiry...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Send Inquiry
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
