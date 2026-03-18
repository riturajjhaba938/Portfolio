import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaFileAlt, FaGithub, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Magnetic } from './Magnetic';
import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className={styles.grid}>
                    <Magnetic>
                        <a href="mailto:contact@riturajjha.dev" className={`${styles.card} glass`}>
                            <FaEnvelope className={styles.icon} />
                            <span className={styles.text}>Email Me</span>
                        </a>
                    </Magnetic>

                    {/* Resume Link */}
                    <Magnetic>
                        <a href="https://rituraj-jha-resume.tiiny.site" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass`}>
                            <FaFileAlt className={styles.icon} />
                            <span className={styles.text}>Resume</span>
                        </a>
                    </Magnetic>

                    {/* WhatsApp Link */}
                    <Magnetic>
                        <a href="https://wa.me/918969366490" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass`}>
                            <FaWhatsapp className={styles.icon} />
                            <span className={styles.text}>WhatsApp</span>
                        </a>
                    </Magnetic>

                    {/* Phone Link */}
                    <Magnetic>
                        <a href="tel:+918969366490" className={`${styles.card} glass`}>
                            <FaPhone className={styles.icon} />
                            <span className={styles.text}>Call Me</span>
                        </a>
                    </Magnetic>

                    {/* GitHub Link */}
                    <Magnetic>
                        <a href="https://github.com/riturajjhaba938" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass`}>
                            <FaGithub className={styles.icon} />
                            <span className={styles.text}>GitHub</span>
                        </a>
                    </Magnetic>

                    {/* LeetCode Link */}
                    <Magnetic>
                        <a href="https://leetcode.com/u/Riturajjhaba/" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass`}>
                            <SiLeetcode className={styles.icon} />
                            <span className={styles.text}>LeetCode</span>
                        </a>
                    </Magnetic>
                </div>

                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Rituraj Jha. Built with ❤️</p>
                </footer>
            </div>
        </section>
    );
};
