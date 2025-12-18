'use client';

import Link from 'next/link';
import { Mail, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import styles from './page.module.css';


export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className={styles.container}>
            <Link href="/" style={{ color: '#667eea', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
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
                    <h3 className={styles.sectionTitle} style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.5rem' }}>Get in Touch</h3>

                    <div className={styles.inTouchCard}>
                        <div className={styles.iconWrapper} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                            <Mail size={24} />
                        </div>
                        <div>
                            <h6 className={styles.cardTitle}>Email</h6>
                            <a href="mailto:support@ilovepdfkit.com" className={styles.cardLink}>support@ilovepdfkit.com</a>
                        </div>
                    </div>

                    <div className={styles.inTouchCard}>
                        <div className={styles.iconWrapper} style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h6 className={styles.cardTitle}>Live Chat</h6>
                            <p style={{ margin: 0, color: '#718096' }}>Available 24/7</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Name</label>
                                    <input type="text" className={styles.input} placeholder="Your name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email</label>
                                    <input type="email" className={styles.input} placeholder="your.email@example.com" required />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>Subject</label>
                                    <input type="text" className={styles.input} placeholder="How can we help?" required />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>Message</label>
                                    <textarea className={styles.textarea} rows={6} placeholder="Tell us more about your inquiry..." required></textarea>
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <button type="submit" className={styles.submitButton}>
                                        <Send size={20} /> Send Message
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
