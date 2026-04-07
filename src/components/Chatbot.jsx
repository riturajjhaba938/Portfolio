import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaRobot } from 'react-icons/fa';
import styles from './Chatbot.module.css';

const faqData = [
  {
    id: 1,
    question: "What are your core skills?",
    answer: "My core skills include React, Node.js, Express, MongoDB, and modern CSS frameworks like Tailwind. I specialize in building responsive, full-stack MERN web applications!"
  },
  {
    id: 2,
    question: "Are you open to full-time roles?",
    answer: "Yes! I am actively looking for full-time Full Stack Developer roles where I can contribute to impactful, user-centric projects."
  },
  {
    id: 3,
    question: "How can I contact you?",
    answer: "You can reach me via Email: riturajjha.100@gmail.com, or Phone/WhatsApp! You can also use the Contact form at the bottom of the page or connect with me via LinkedIn. I'd love to chat!"
  },
  {
    id: 4,
    question: "Tell me about your best project.",
    answer: "Some of my favorite projects include CURA (a comprehensive healthcare platform), Gap Graph, AI Study Planner (which won 2nd Runner-up at UnsaidTalks!), and my customizable Web Templates. Each project involves solving real-world problems with advanced full-stack technologies!"
  }
];

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi there! I am Rituraj\'s virtual assistant. Try asking me a question below!' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    
    // Auto-scroll to latest message
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleQuestionClick = (faq) => {
        // Add user question to timeline
        setMessages(prev => [...prev, { type: 'user', text: faq.question }]);
        setIsTyping(true);
        
        // Simulate bot typing delay
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: faq.answer }]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className={styles.chatbotContainer}>
            {/* Chatbot Toggle Button */}
            <motion.button
                className={styles.fab}
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 50 : 0, pointerEvents: isOpen ? 'none' : 'auto' }}
            >
                <FaCommentDots />
            </motion.button>

            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className={styles.chatWindow}
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className={styles.header}>
                            <div className={styles.headerLeft}>
                                <FaRobot className={styles.botIcon} />
                                <h3>Portfolio Assistant</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}><FaTimes /></button>
                        </div>
                        
                        {/* Chat History */}
                        <div className={styles.messagesContainer}>
                            {messages.map((msg, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className={`${styles.message} ${msg.type === 'bot' ? styles.botMessage : styles.userMessage}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div 
                                    className={`${styles.message} ${styles.botMessage}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className={styles.typingIndicator}>
                                        <span></span><span></span><span></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Preset Options */}
                        <div className={styles.optionsContainer}>
                            <p className={styles.optionsTitle}>Ask me a question:</p>
                            <div className={styles.optionsList}>
                                {faqData.map(faq => (
                                    <button 
                                        key={faq.id} 
                                        className={styles.optionBtn}
                                        onClick={() => handleQuestionClick(faq)}
                                        disabled={isTyping}
                                    >
                                        {faq.question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
