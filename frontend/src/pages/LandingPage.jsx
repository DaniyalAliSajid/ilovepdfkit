import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FileText, ArrowRight, Zap, Lock, Target, Github, Twitter, Mail, TrendingUp, Users, Award } from 'lucide-react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function LandingPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animated Counter Component - Fixed to animate once
    const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }, []); // Empty dependency array ensures it runs once

        return <span>{count.toLocaleString()}{suffix}</span>;
    };

    // 3D Card Tilt Component
    const TiltCard = ({ children, gradient }) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-100, 100], [5, -5]);
        const rotateY = useTransform(x, [-100, 100], [-5, 5]);

        const handleMouseMove = (event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            x.set(event.clientX - centerX);
            y.set(event.clientY - centerY);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return (
            <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3 }}
            >
                <Link to={gradient.includes('667eea') ? '/pdf-to-word' : '/word-to-pdf'} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Card className="converter-card h-100 border-0 shadow-lg card-hover" style={{
                        background: gradient,
                        color: 'white',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        transform: 'translateZ(50px)'
                    }}>
                        {children}
                    </Card>
                </Link>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Top Navigation - Moved to Global AppNavbar */}

            {/* Hero Section */}
            <Container className="py-5">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-5"
                >
                    <motion.div
                        className="flex justify-center items-center mb-4 floating"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div style={{
                            background: 'var(--primary-gradient)',
                            padding: '20px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)'
                        }}>
                            <FileText size={64} color="white" />
                        </div>
                    </motion.div>

                    <motion.h1
                        className="gradient-text mb-4"
                        style={{ fontWeight: 800 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Document Converter Pro
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 text-xl mb-4"
                        style={{ maxWidth: '700px', margin: '0 auto' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Transform your documents with pixel-perfect accuracy. Convert between PDF and Word formats while preserving images, fonts, and formatting.
                    </motion.p>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '150px' }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mx-auto pulse-glow"
                        style={{
                            height: '4px',
                            background: 'var(--primary-gradient)',
                            borderRadius: '2px'
                        }}
                    />
                </motion.div>

                {/* Converter Tools Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="my-5"
                >
                    <h2 className="text-center mb-5" style={{ fontWeight: 700, fontSize: '2rem' }}>
                        Choose Your Conversion Tool
                    </h2>

                    <Row className="justify-content-center g-4">
                        {/* PDF to Word Card */}
                        <Col md={6} lg={5}>
                            <TiltCard gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                                <Card.Body className="p-5">
                                    <div className="text-center mb-4">
                                        <motion.div
                                            className="mb-3"
                                            style={{ fontSize: '4rem' }}
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                        >
                                            📄
                                        </motion.div>
                                        <h3 style={{ fontWeight: 700, fontSize: '1.8rem' }}>PDF to Word</h3>
                                    </div>
                                    <p className="mb-4" style={{ fontSize: '1.1rem', opacity: 0.95 }}>
                                        Convert PDF documents to editable Word files with perfect formatting preservation
                                    </p>
                                    <ul className="list-unstyled mb-4">
                                        {['Preserve images and layout', 'Maintain fonts and styles', 'Keep page count intact', 'Extract text accurately'].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                className="mb-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + i * 0.1 }}
                                            >
                                                ✓ {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="text-center">
                                        <span className="btn btn-light btn-lg btn-premium" style={{ borderRadius: '50px', fontWeight: 600 }}>
                                            Start Converting <ArrowRight className="ms-2" size={20} style={{ display: 'inline' }} />
                                        </span>
                                    </div>
                                </Card.Body>
                            </TiltCard>
                        </Col>

                        {/* Word to PDF Card */}
                        <Col md={6} lg={5}>
                            <TiltCard gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
                                <Card.Body className="p-5">
                                    <div className="text-center mb-4">
                                        <motion.div
                                            className="mb-3"
                                            style={{ fontSize: '4rem' }}
                                            animate={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                        >
                                            📝
                                        </motion.div>
                                        <h3 style={{ fontWeight: 700, fontSize: '1.8rem' }}>Word to PDF</h3>
                                    </div>
                                    <p className="mb-4" style={{ fontSize: '1.1rem', opacity: 0.95 }}>
                                        Convert Word documents to professional PDF files with complete fidelity
                                    </p>
                                    <ul className="list-unstyled mb-4">
                                        {['Preserve all formatting', 'Keep images intact', 'Maintain document structure', 'Professional output quality'].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                className="mb-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + i * 0.1 }}
                                            >
                                                ✓ {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="text-center">
                                        <span className="btn btn-light btn-lg btn-premium" style={{ borderRadius: '50px', fontWeight: 600 }}>
                                            Start Converting <ArrowRight className="ms-2" size={20} style={{ display: 'inline' }} />
                                        </span>
                                    </div>
                                </Card.Body>
                            </TiltCard>
                        </Col>
                    </Row>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-5 pt-5"
                >
                    <h2 className="text-center mb-5" style={{ fontWeight: 700, fontSize: '2rem' }}>
                        Why Choose Document Converter Pro?
                    </h2>

                    <Row className="text-center g-4">
                        {[
                            { icon: Zap, title: 'Lightning Fast', desc: 'Convert documents in seconds with our optimized conversion engine', gradient: 'var(--primary-gradient)', delay: 0 },
                            { icon: Lock, title: 'Secure & Private', desc: 'Your files are processed securely and never stored on our servers', gradient: 'var(--secondary-gradient)', delay: 0.1 },
                            { icon: Target, title: 'Pixel Perfect', desc: 'Maintain exact formatting, images, fonts, and layout accuracy', gradient: 'var(--primary-gradient)', delay: 0.2 }
                        ].map((feature, index) => (
                            <Col md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + feature.delay }}
                                    whileHover={{ scale: 1.08, y: -10 }}
                                    className="p-4"
                                >
                                    <motion.div
                                        className="mb-3"
                                        style={{
                                            width: '90px',
                                            height: '90px',
                                            margin: '0 auto',
                                            borderRadius: '50%',
                                            background: feature.gradient,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
                                        }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <feature.icon size={44} color="white" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-3" style={{ fontWeight: 700 }}>{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>

                {/* Stats Section - Moved to Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="my-5 pt-5"
                >
                    <Row className="text-center g-4">
                        {[
                            { icon: TrendingUp, value: 100000, suffix: '+', label: 'Conversions' },
                            { icon: Users, value: 100000, suffix: '+', label: 'Happy Users' },
                            { icon: Award, value: 100, suffix: '%', label: 'Accuracy' }
                        ].map((stat, index) => (
                            <Col md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                                    className="glass-card p-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <stat.icon size={32} className="mb-2" style={{ color: 'hsl(245, 75%, 70%)' }} />
                                    <h3 className="text-gradient-primary mb-1" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </h3>
                                    <p className="text-gray-600 mb-0">{stat.label}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>

            {/* Enhanced Footer with Wave Divider */}
            <div className="wave-divider mt-5">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ fill: '#f8f9fa' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
            <footer className="text-center py-5" style={{ background: '#f8f9fa' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <div className="d-flex justify-content-center gap-4 mb-4">
                        {[
                            { icon: Github, href: 'https://github.com' },
                            { icon: Twitter, href: 'https://twitter.com' },
                            { icon: Mail, href: 'mailto:contact@documentconverter.pro' }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-gray-400 hover:text-gray-600"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'white',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={22} />
                            </motion.a>
                        ))}
                    </div>

                    <div className="d-flex justify-content-center gap-4 mb-3">
                        <Link to="/about" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 500 }}>
                            About Us
                        </Link>
                        <span style={{ color: '#cbd5e0' }}>•</span>
                        <Link to="/contact" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 500 }}>
                            Contact Us
                        </Link>
                    </div>

                    <p className="text-gray-400 text-sm mb-2">
                        © 2025 Document Converter Pro. All rights reserved.
                    </p>

                    <p className="text-gray-400 text-xs">
                        Made with <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            style={{ display: 'inline-block' }}
                        >❤️</motion.span> for seamless document conversion
                    </p>
                </motion.div>
            </footer>
        </div>
    );
}

export default LandingPage;
