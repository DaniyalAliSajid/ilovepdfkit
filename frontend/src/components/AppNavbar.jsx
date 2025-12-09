import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const AppNavbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <Navbar
            expand="lg"
            className="py-3"
            fixed="top"
            style={{
                background: isHome ? 'transparent' : 'rgba(255, 255, 255, 0.85)',
                backdropFilter: isHome ? 'none' : 'blur(12px)',
                boxShadow: isHome ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                zIndex: 9999
            }}
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary-gradient)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                    }}>
                        <FileText color="white" size={24} />
                    </div>
                    <span className="gradient-text" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
                        DocConverter Pro
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none', boxShadow: 'none' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" className="px-4" style={{ fontWeight: 600, color: '#4a5568', fontSize: '1.05rem' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="px-4" style={{ fontWeight: 600, color: '#4a5568', fontSize: '1.05rem' }}>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="px-4" style={{ fontWeight: 600, color: '#4a5568', fontSize: '1.05rem' }}>Contact Us</Nav.Link>
                        <Link to="/pdf-to-word" className="ms-md-3 mt-3 mt-lg-0">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-premium"
                                style={{
                                    background: 'var(--primary-gradient)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    padding: '10px 24px',
                                    fontWeight: 600,
                                    color: 'white',
                                    fontSize: '1rem'
                                }}
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
