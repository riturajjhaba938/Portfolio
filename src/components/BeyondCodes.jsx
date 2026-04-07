import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeadphones, FaPenFancy, FaKeyboard, FaRunning, FaUserAstronaut, FaTimes } from 'react-icons/fa';
import styles from './BeyondCodes.module.css';

const hobbies = [
    {
        title: "Music Production",
        icon: <FaHeadphones />,
        description: "Crafting beats, mixing audio, and exploring the boundless world of sound design."
    },
    {
        title: "Lyricist",
        icon: <FaPenFancy />,
        description: "Expressing thoughts through rhyme, rhythm, and storytelling."
    },
    {
        title: "Content Writing",
        icon: <FaKeyboard />,
        description: "Penning engaging articles, technical blogs, and creative wordplay."
    },
    {
        title: "Athlete",
        icon: <FaRunning />,
        description: "Pushing physical limits on the track and maintaining an active, disciplined lifestyle."
    }
];

export const BeyondCodes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Lock body scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isModalOpen]);

    return (
        <section className={styles.section} id="beyond-codes">
            {/* Horizontal Marquee Background Text */}
            <motion.div 
                className={styles.bgText}
                animate={{ x: ["100vw", "-100%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                RITURAJ JHA
            </motion.div>
            
            <div className={styles.container}>
                <motion.h2 
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    Beyond Codes
                </motion.h2>

                {/* Mascot Box */}
                <motion.div 
                    className={styles.mascotBox}
                    onClick={() => setIsModalOpen(true)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(52, 152, 219, 0.4)" }}
                >
                    <div className={styles.speechBubble}>
                        Click Me! ✨
                    </div>
                    <motion.div 
                        className={styles.mascotIcon}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    >
                        <FaUserAstronaut />
                    </motion.div>
                    <h3 className={styles.mascotTitle}>Explore My Hobbies</h3>
                    <div className={styles.mascotGlow} />
                </motion.div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div 
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div 
                            className={styles.modalContent}
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                                <FaTimes />
                            </button>
                            
                            <h2 className={styles.modalTitle}>My Passions</h2>
                            
                            <div className={styles.grid}>
                                {hobbies.map((hobby, index) => (
                                    <div key={index} className={styles.card}>
                                        <div className={styles.iconContainer}>
                                            {hobby.icon}
                                        </div>
                                        <h3 className={styles.title}>{hobby.title}</h3>
                                        <p className={styles.desc}>{hobby.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
