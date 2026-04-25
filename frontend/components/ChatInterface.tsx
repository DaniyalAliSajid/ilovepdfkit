'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, AlertCircle, Trash2, Copy, Check, Upload, FileText, RefreshCw, Sparkles, Brain, ArrowDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import FileDropzone from './FileDropzone';
import styles from './Converter.module.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatInterface = () => {
    const [file, setFile] = useState<File | null>(null);
    const [pdfText, setPdfText] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [extracting, setExtracting] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const themeColor = '#2563EB';
    const themeGradient = 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)';
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    
    const maxFileSize = 10 * 1024 * 1024; // 10MB

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleFileSelect = async (selectedFile: File | File[] | null) => {
        const fileToUse = Array.isArray(selectedFile) ? selectedFile[0] : selectedFile;
        
        if (fileToUse && fileToUse.size > maxFileSize) {
            setError(`File is too large for free AI mode. Max 10MB allowed.`);
            setFile(null);
            return;
        }

        setFile(fileToUse);
        setPdfText(null);
        setMessages([]);
        setError(null);

        if (fileToUse) {
            handleExtractText(fileToUse);
        }
    };

    const handleExtractText = async (fileToUse: File) => {
        setExtracting(true);
        setError(null);
        const formData = new FormData();
        formData.append('file', fileToUse);

        try {
            const response = await fetch(`${baseUrl}/api/convert/ai-extract-text`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to read PDF context');
            
            setPdfText(data.text);
            const welcomeMsg = data.text.includes('[Note:') 
                ? `Hello! I've analyzed the first 20 pages of **${fileToUse.name}**. You can now ask me questions about this portion.`
                : `Hello! I've analyzed **${fileToUse.name}**. You can now ask me anything about its content.`;
                
            setMessages([{ role: 'assistant', content: welcomeMsg }]);
        } catch (err: any) {
            setError(err.message || 'Could not extract text from PDF. The server might be starting up.');
        } finally {
            setExtracting(false);
        }
    };

    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!input.trim() || !pdfText || loading) return;

        const userMsg = input.trim();
        setInput('');
        const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
        setMessages(newMessages);
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${baseUrl}/api/convert/ai-chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pdf_text: pdfText,
                    message: userMsg,
                    history: messages.slice(-5).map(m => ({ role: m.role, content: m.content }))
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error(data.error || 'You have reached the daily free chat limit.');
                }
                throw new Error(data.error || 'Chat failed. Please try again.');
            }
            
            setMessages([...newMessages, { role: 'assistant', content: data.response }]);
        } catch (err: any) {
            setError(err.message || 'Failed to get a response. The AI might be busy, please try again in a moment.');
        } finally {
            setLoading(false);
        }
    };


    const handleCopy = (content: string, index: number) => {
        navigator.clipboard.writeText(content);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const clearChat = () => {
        if (confirm('Clear entire conversation?')) {
            setMessages([{ role: 'assistant', content: `Ready to chat about **${file?.name}** again!` }]);
        }
    };

    return (
        <div className={`${styles.converterCard} ${styles.glassCard}`} style={{ maxWidth: '1000px' }}>
            <div className={styles.header} style={{ background: themeGradient }}>
                <h2 className={styles.headerTitle}>Chat with PDF</h2>
                <p style={{ opacity: 0.9, fontSize: '0.9rem', marginTop: '0.5rem' }}>Professional AI Assistant for Document Analysis</p>
            </div>

            <div className={styles.body}>
                {!pdfText && !extracting && (
                    <FileDropzone
                        onFileSelect={handleFileSelect}
                        accept=".pdf"
                        type="chat"
                        themeColor={themeColor}
                        themeGradient={themeGradient}
                    />
                )}

                {extracting && (
                    <div className={styles.loadingContainer}>
                        <div className="pulsing-brain">
                            <Brain size={60} color={themeColor} />
                        </div>
                        <p style={{ marginTop: '1.5rem', fontWeight: 600, color: themeColor }}>Reading document context...</p>
                        <div className={styles.shimmer} style={{ height: '4px', width: '200px', borderRadius: '2px', marginTop: '1rem' }}></div>
                    </div>
                )}

                {error && (
                    <div className={`${styles.alert} ${styles.alertError}`} style={{ marginTop: '1rem' }}>
                        <AlertCircle size={20} />
                        <span>{error}</span>
                    </div>
                )}

                {pdfText && (
                    <div className="chat-container">
                        <div className="chat-meta">
                            <div className="file-card">
                                <div className="file-icon" style={{ background: themeColor }}>
                                    <FileText size={18} color="white" />
                                </div>
                                <div className="file-info">
                                    <span className="file-name">{file?.name}</span>
                                    <span className="file-status">Context Loaded</span>
                                </div>
                            </div>
                            <button onClick={clearChat} className="clear-btn">
                                <Trash2 size={16} /> Reset Chat
                            </button>
                        </div>

                        <div className="messages-area">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`message-wrapper ${msg.role}`}>
                                    <div className="avatar">
                                        {msg.role === 'user' ? <User size={18} /> : <Sparkles size={18} />}
                                    </div>
                                    <div className="message-content">
                                        <div className="markdown-chat">
                                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                                        </div>
                                        {msg.role === 'assistant' && (
                                            <button onClick={() => handleCopy(msg.content, idx)} className="copy-inner">
                                                {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="message-wrapper assistant">
                                    <div className="avatar pulsing"><Brain size={18} /></div>
                                    <div className="message-content thinking">
                                        <div className="typing-indicator">
                                            <span></span><span></span><span></span>
                                        </div>
                                        <span className="thinking-text">AI is thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSend} className="input-area">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything about the document..."
                                disabled={loading}
                            />
                            <button type="submit" disabled={!input.trim() || loading} style={{ background: themeGradient }}>
                                <Send size={20} />
                            </button>
                        </form>
                        
                        <div className="footer-actions">
                            <button 
                                className="change-file-btn"
                                onClick={() => {setPdfText(null); setFile(null); setMessages([]);}}
                            >
                                <Upload size={14} /> Analyze Different Document
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .chat-container {
                    display: flex;
                    flex-direction: column;
                    height: 650px;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    background: white;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                }
                .chat-meta {
                    padding: 1rem 1.25rem;
                    background: #fdfdfd;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .file-card {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.5rem;
                    border-radius: 12px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    max-width: 70%;
                }
                .file-icon {
                    padding: 0.5rem;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .file-info {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                .file-name {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #1e293b;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .file-status {
                    font-size: 0.7rem;
                    color: #10b981;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .clear-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.85rem;
                    color: #64748b;
                    border: 1px solid #e2e8f0;
                    padding: 0.4rem 0.75rem;
                    border-radius: 8px;
                    background: white;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .clear-btn:hover { color: #ef4444; border-color: #fecaca; background: #fef2f2; }
                
                .messages-area {
                    flex: 1;
                    overflow-y: auto;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    background: #fcfcfc;
                    background-image: radial-gradient(#cbd5e1 0.5px, transparent 0.5px);
                    background-size: 24px 24px;
                }
                
                .message-wrapper {
                    display: flex;
                    gap: 1rem;
                    max-width: 85%;
                }
                .message-wrapper.assistant { align-self: flex-start; }
                .message-wrapper.user { align-self: flex-end; flex-direction: row-reverse; }
                
                .avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }
                .message-wrapper.assistant .avatar { background: white; color: #4f46e5; border: 1px solid #e0e7ff; }
                .message-wrapper.user .avatar { background: #1e293b; color: white; }
                
                .message-content {
                    padding: 1rem 1.25rem;
                    border-radius: 18px;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    position: relative;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
                }
                .message-wrapper.assistant .message-content {
                    background: white;
                    color: #334155;
                    border-top-left-radius: 2px;
                    border: 1px solid #f1f5f9;
                }
                .message-wrapper.user .message-content {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                    color: white;
                    border-top-right-radius: 2px;
                }
                
                .markdown-chat :global(p) { margin-bottom: 0.5rem; }
                .markdown-chat :global(p:last-child) { margin-bottom: 0; }
                .markdown-chat :global(strong) { font-weight: 700; }
                .markdown-chat :global(ul), .markdown-chat :global(ol) { margin: 0.5rem 0; padding-left: 1.25rem; }
                
                .copy-inner {
                    position: absolute;
                    bottom: -22px;
                    right: 4px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #94a3b8;
                    cursor: pointer;
                    opacity: 0;
                    transition: all 0.2s;
                    border-radius: 6px;
                    padding: 2px;
                }
                .message-wrapper.assistant:hover .copy-inner { opacity: 1; }
                .copy-inner:hover { color: #2563eb; border-color: #dbeafe; }
                
                .thinking {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: #f8fafc !important;
                }
                .thinking-text { font-size: 0.85rem; color: #64748b; font-style: italic; }
                
                .typing-indicator { display: flex; gap: 3px; }
                .typing-indicator span {
                    width: 6px; height: 6px; background: #cbd5e1; border-radius: 50%;
                    animation: bounce 1.4s infinite ease-in-out both;
                }
                .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
                .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

                .input-area {
                    padding: 1.25rem 1.5rem;
                    background: white;
                    border-top: 1px solid #f1f5f9;
                    display: flex;
                    gap: 1rem;
                }
                .input-area input {
                    flex: 1;
                    padding: 0.85rem 1.25rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    outline: none;
                    transition: all 0.2s;
                    font-size: 0.95rem;
                    background: #f8fafc;
                }
                .input-area input:focus { border-color: #2563eb; background: white; box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); }
                .input-area button {
                    color: white;
                    border: none;
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                .input-area button:hover:not(:disabled) { transform: scale(1.05); filter: brightness(1.1); }
                .input-area button:disabled { opacity: 0.5; cursor: not-allowed; }
                
                .footer-actions { padding: 0.5rem 1.5rem 1rem; display: flex; justify-content: center; background: white; }
                .change-file-btn {
                    background: none;
                    border: none;
                    color: #94a3b8;
                    font-size: 0.8rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }
                .change-file-btn:hover { color: #64748b; text-decoration: underline; }
                
                @keyframes bounce {
                    0%, 80%, 100% { transform: scale(0); }
                    40% { transform: scale(1); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.7; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .pulsing { animation: pulse 2s infinite ease-in-out; }
                .pulsing-brain { animation: pulse 2.5s infinite ease-in-out; }
            `}</style>
        </div>
    );
};

export default ChatInterface;
