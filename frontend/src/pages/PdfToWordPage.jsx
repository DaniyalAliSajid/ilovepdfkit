import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Converter from '../components/Converter';
import { motion } from 'framer-motion';
import { Moon, Sun, FileText, ArrowLeft } from 'lucide-react';

function PdfToWordPage() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`min-h-screen py-10 ${darkMode ? 'dark' : ''}`}>
            {/* Dark Mode Toggle */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={toggleDarkMode}
                className="fixed top-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                style={{
                    background: darkMode
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    border: 'none',
                    color: 'white'
                }}
            >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>

            {/* Back to Home Button */}
            <Container>
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

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-5"
                >
                    <div className="flex justify-center items-center mb-4">
                        <div style={{ fontSize: '4rem' }}>📄</div>
                    </div>

                    <h1 className="text-gradient-primary mb-3" style={{ fontWeight: 800 }}>
                        PDF to Word Converter
                    </h1>

                    <p className="text-gray-600 text-lg mb-2">
                        Convert your PDF documents to editable Word files with pixel-perfect accuracy
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto"
                        style={{
                            height: '4px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '2px'
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Converter type="pdf-to-word" />
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-5"
                >
                    <div className="row text-center">
                        <div className="col-md-3 mb-4">
                            <div className="text-3xl mb-2">🎯</div>
                            <h6 className="font-bold">Accurate Text</h6>
                            <p className="text-sm text-gray-600">Preserve all text formatting</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="text-3xl mb-2">🖼️</div>
                            <h6 className="font-bold">Image Retention</h6>
                            <p className="text-sm text-gray-600">Keep all images intact</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="text-3xl mb-2">📐</div>
                            <h6 className="font-bold">Layout Match</h6>
                            <p className="text-sm text-gray-600">Maintain page structure</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="text-3xl mb-2">🎨</div>
                            <h6 className="font-bold">Font Styles</h6>
                            <p className="text-sm text-gray-600">Preserve fonts and colors</p>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}

export default PdfToWordPage;
