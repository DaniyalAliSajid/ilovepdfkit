import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Mail, MessageCircle, Send, ArrowLeft } from 'lucide-react';

function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen" style={{ position: 'relative', overflow: 'hidden' }}>
            <Container className="py-5">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center text-decoration-none"
                        style={{
                            color: '#667eea',
                            fontWeight: 600,
                            fontSize: '1rem'
                        }}
                    >
                        <ArrowLeft size={20} className="me-2" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-5"
                >
                    <h1 className="gradient-text mb-4" style={{ fontWeight: 800 }}>
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-xl" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <Row className="g-4">
                    {/* Contact Information */}
                    <Col lg={4}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="mb-4" style={{ fontWeight: 700 }}>Get in Touch</h3>

                            <Card className="border-0 shadow-lg mb-3 card-hover" style={{ borderRadius: '16px' }}>
                                <Card.Body className="p-4">
                                    <div className="d-flex align-items-start">
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: 'var(--primary-gradient)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '16px',
                                            flexShrink: 0
                                        }}>
                                            <Mail size={24} color="white" />
                                        </div>
                                        <div>
                                            <h6 style={{ fontWeight: 600, marginBottom: '4px' }}>Email</h6>
                                            <a href="mailto:support@ilovepdfkit.com" style={{ color: '#667eea', textDecoration: 'none' }}>
                                                support@ilovepdfkit.com
                                            </a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className="border-0 shadow-lg mb-3 card-hover" style={{ borderRadius: '16px' }}>
                                <Card.Body className="p-4">
                                    <div className="d-flex align-items-start">
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: 'var(--secondary-gradient)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '16px',
                                            flexShrink: 0
                                        }}>
                                            <MessageCircle size={24} color="white" />
                                        </div>
                                        <div>
                                            <h6 style={{ fontWeight: 600, marginBottom: '4px' }}>Live Chat</h6>
                                            <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                                                Available 24/7
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>

                    {/* Contact Form */}
                    <Col lg={8}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card className="border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                                <Card.Body className="p-5">
                                    <h3 className="mb-4" style={{ fontWeight: 700 }}>Send us a Message</h3>
                                    <form onSubmit={handleSubmit}>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <label className="form-label" style={{ fontWeight: 600 }}>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your name"
                                                    required
                                                    style={{
                                                        padding: '12px',
                                                        borderRadius: '12px',
                                                        border: '2px solid #e2e8f0'
                                                    }}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <label className="form-label" style={{ fontWeight: 600 }}>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="your.email@example.com"
                                                    required
                                                    style={{
                                                        padding: '12px',
                                                        borderRadius: '12px',
                                                        border: '2px solid #e2e8f0'
                                                    }}
                                                />
                                            </Col>
                                            <Col xs={12}>
                                                <label className="form-label" style={{ fontWeight: 600 }}>Subject</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="How can we help?"
                                                    required
                                                    style={{
                                                        padding: '12px',
                                                        borderRadius: '12px',
                                                        border: '2px solid #e2e8f0'
                                                    }}
                                                />
                                            </Col>
                                            <Col xs={12}>
                                                <label className="form-label" style={{ fontWeight: 600 }}>Message</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="6"
                                                    placeholder="Tell us more about your inquiry..."
                                                    required
                                                    style={{
                                                        padding: '12px',
                                                        borderRadius: '12px',
                                                        border: '2px solid #e2e8f0'
                                                    }}
                                                ></textarea>
                                            </Col>
                                            <Col xs={12}>
                                                <motion.button
                                                    type="submit"
                                                    className="btn btn-lg btn-premium w-100"
                                                    style={{
                                                        background: 'var(--primary-gradient)',
                                                        border: 'none',
                                                        borderRadius: '12px',
                                                        padding: '14px',
                                                        fontWeight: 600,
                                                        color: 'white'
                                                    }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <Send size={20} style={{ display: 'inline', marginRight: '8px' }} />
                                                    Send Message
                                                </motion.button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactPage;
