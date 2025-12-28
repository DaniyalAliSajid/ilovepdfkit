'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Send, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
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
