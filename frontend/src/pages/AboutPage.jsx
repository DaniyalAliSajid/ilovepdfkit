import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Target, Zap, Users, Award, ArrowLeft } from 'lucide-react';

function AboutPage() {
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
                        About Us
                    </h1>
                    <p className="text-gray-600 text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        We're on a mission to make document conversion simple, fast, and accessible to everyone.
                    </p>
                </motion.div>

                {/* Our Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-5"
                >
                    <Card className="border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                        <Card.Body className="p-5">
                            <h2 className="mb-4" style={{ fontWeight: 700 }}>Our Story</h2>
                            <p className="text-gray-600" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Document Converter Pro was born from a simple idea: document conversion should be effortless.
                                We noticed that many existing tools either compromised on quality or were too complex to use.
                                That's why we built a solution that combines pixel-perfect accuracy with an intuitive, beautiful interface.
                            </p>
                            <p className="text-gray-600 mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Today, we're proud to serve thousands of users worldwide, helping them convert documents
                                while preserving every detail - from fonts and images to formatting and layout.
                            </p>
                        </Card.Body>
                    </Card>
                </motion.div>

                {/* Our Values */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-5"
                >
                    <h2 className="text-center mb-5" style={{ fontWeight: 700, fontSize: '2rem' }}>
                        Our Values
                    </h2>
                    <Row className="g-4">
                        {[
                            {
                                icon: Target,
                                title: 'Precision',
                                desc: 'We obsess over every pixel to ensure your documents are converted with absolute accuracy.',
                                gradient: 'var(--primary-gradient)'
                            },
                            {
                                icon: Zap,
                                title: 'Speed',
                                desc: 'Time is valuable. Our optimized engine delivers lightning-fast conversions without compromise.',
                                gradient: 'var(--success-gradient)'
                            },
                            {
                                icon: Users,
                                title: 'User-First',
                                desc: 'Every feature we build starts with one question: How can we make this better for our users?',
                                gradient: 'var(--secondary-gradient)'
                            },
                            {
                                icon: Award,
                                title: 'Excellence',
                                desc: 'We are never satisfied with "good enough." We constantly push for excellence in everything we do.',
                                gradient: 'var(--danger-gradient)'
                            }
                        ].map((value, index) => (
                            <Col md={6} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Card className="border-0 shadow-lg h-100 card-hover" style={{ borderRadius: '20px' }}>
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start">
                                                <div style={{
                                                    width: '64px',
                                                    height: '64px',
                                                    borderRadius: '16px',
                                                    background: value.gradient,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '20px',
                                                    flexShrink: 0
                                                }}>
                                                    <value.icon size={32} color="white" />
                                                </div>
                                                <div>
                                                    <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>{value.title}</h4>
                                                    <p className="text-gray-600 mb-0" style={{ lineHeight: '1.6' }}>
                                                        {value.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="my-5"
                >
                    <Card className="border-0 shadow-lg" style={{
                        borderRadius: '20px',
                        background: 'var(--primary-gradient)',
                        color: 'white'
                    }}>
                        <Card.Body className="p-5">
                            <h2 className="text-center mb-5" style={{ fontWeight: 700, color: 'white' }}>
                                By the Numbers
                            </h2>
                            <Row className="text-center">
                                <Col md={4} className="mb-4 mb-md-0">
                                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'white' }}>100,000+</h3>
                                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Documents Converted</p>
                                </Col>
                                <Col md={4} className="mb-4 mb-md-0">
                                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'white' }}>100,000+</h3>
                                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Happy Users</p>
                                </Col>
                                <Col md={4}>
                                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'white' }}>100%</h3>
                                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Accuracy Rate</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-5"
                >
                    <h3 className="mb-4" style={{ fontWeight: 700 }}>Ready to get started?</h3>
                    <Link to="/">
                        <motion.button
                            className="btn btn-lg btn-premium"
                            style={{
                                background: 'var(--primary-gradient)',
                                border: 'none',
                                borderRadius: '50px',
                                padding: '14px 40px',
                                fontWeight: 600,
                                color: 'white'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Converting Now
                        </motion.button>
                    </Link>
                </motion.div>
            </Container>
        </div>
    );
}

export default AboutPage;
