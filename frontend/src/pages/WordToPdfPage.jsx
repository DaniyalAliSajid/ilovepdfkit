import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Converter from '../components/Converter';
import { motion } from 'framer-motion';
import { Moon, Sun, FileText, ArrowLeft } from 'lucide-react';

function WordToPdfPage() {
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
                            color: '#f5576c',
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
                        <div style={{ fontSize: '4rem' }}>📝</div>
                    </div>

                    <h1 className="text-gradient-primary mb-3" style={{ fontWeight: 800 }}>
                        Word to PDF Converter
                    </h1>

                    <p className="text-gray-600 text-lg mb-2">
                        Convert your Word documents to professional PDF files with complete fidelity
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto"
                        style={{
                            height: '4px',
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            borderRadius: '2px'
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Converter type="word-to-pdf" />
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
                            <div className="text-3xl mb-2">📄</div>
                            <h6 className="font-bold">Professional PDFs</h6>
                            <p className="text-sm text-gray-600">High-quality output</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="text-3xl mb-2">🖼️</div>
                            <h6 className="font-bold">Image Quality</h6>
                            <p className="text-sm text-gray-600">Preserve all images</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="text-3xl mb-2">📐</div>
                            <h6 className="font-bold">Format Lock</h6>
                            <p className="text-sm text-gray-600">Maintain all formatting</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="text-3xl mb-2">🎨</div>
                            <h6 className="font-bold">Style Retention</h6>
                            <p className="text-sm text-gray-600">Keep fonts and styles</p>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}

export default WordToPdfPage;
