'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Send, ArrowLeft, CheckCircle, AlertCircle, Facebook, Linkedin, Twitter } from 'lucide-react';
import styles from './page.module.css';

// Custom Pinterest SVG Icon since Lucide doesn't have it
const PinterestIcon = ({ size = 24, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.85 6.35 9.31-.09-.79-.17-2.01.04-2.88.19-.8.19-.8 1.25-5.32 0 0-.32-.64-.32-1.59 0-1.49.86-2.61 1.94-2.61.92 0 1.36.69 1.36 1.52 0 .92-.59 2.3-.89 3.58-.25 1.07.54 1.95 1.59 1.95 1.91 0 3.38-2.01 3.38-4.91 0-2.58-1.85-4.38-4.51-4.38-3.05 0-4.84 2.29-4.84 4.65 0 .89.34 1.84.77 2.36.08.1.09.19.07.28l-.25 1.05c-.03.13-.1.16-.24.09-1.29-.6-2.09-2.5-2.09-4.03 0-3.28 2.38-6.29 6.87-6.29 3.61 0 6.42 2.57 6.42 6.01 0 3.59-2.26 6.48-5.4 6.48-1.05 0-2.04-.55-2.38-1.19 0 0-.52 1.98-.65 2.47-.23.88-.86 1.98-1.28 2.65 1 .3 2.05.47 3.14.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
);

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
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
            // Call backend Flask API
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ilovepdfkit-api.onrender.com';
            const response = await fetch(`${baseUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <div className={styles.grid}>
                {/* Contact Info */}
                <div>
                    <h3 className={styles.sectionTitle}>Get in Touch</h3>

                    <div className={styles.inTouchCard}>
                        <div className={styles.iconWrapper}>
                            <Mail size={24} />
                        </div>
                        <div>
                            <h6 className={styles.cardTitle}>Email</h6>
                            <a href="mailto:support@ilovepdfkit.com" className={styles.cardLink}>
                                support@ilovepdfkit.com
                            </a>
                        </div>
                    </div>
                    
                    {/* Social Media Section */}
                    <div className={styles.socialSection}>
                        <h3 className={styles.sectionTitle}>Connect with Us</h3>
                        <div className={styles.socialGrid}>
                            <a href="https://www.facebook.com/ilovepdfkit" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} ${styles.facebook}`}>
                                <span className={styles.socialIcon}><Facebook size={20} /></span>
                                Facebook
                            </a>
                            <a href="https://www.linkedin.com/company/ilovepdfkit" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} ${styles.linkedin}`}>
                                <span className={styles.socialIcon}><Linkedin size={20} /></span>
                                LinkedIn
                            </a>
                            <a href="https://x.com/ilovepdfkit" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} ${styles.twitter}`}>
                                <span className={styles.socialIcon}><Twitter size={20} /></span>
                                X (Twitter)
                            </a>
                            <a href="https://www.pinterest.com/ilovepdfkit/" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} ${styles.pinterest}`}>
                                <span className={styles.socialIcon}><PinterestIcon size={20} /></span>
                                Pinterest
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>Send us a Message</h3>

                        {status === 'success' && (
                            <div className={styles.successMessage}>
                                <CheckCircle size={20} />
                                <span>Message sent successfully! We'll get back to you soon.</span>
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
                                    <label className={styles.label}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Your name"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="your.email@example.com"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="How can we help?"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        rows={6}
                                        placeholder="Tell us more about your inquiry..."
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
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Send Message
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
