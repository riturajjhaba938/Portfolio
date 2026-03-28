import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', target: 'home' },
        { name: 'About', target: 'about' },
        { name: 'Projects', target: 'projects' },
        { name: 'Skills', target: 'skills' },
        { name: 'Contact', target: 'contact' }
    ];

    const scrollToSection = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className={styles.logoContainer} 
                onClick={(e) => scrollToSection(e, 'home')}
                whileHover="hover"
                initial="initial"
                animate="animate"
            >
                <motion.div 
                    className={styles.logoIcon}
                    variants={{
                        hover: { rotate: 90, scale: 1.1 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 5L93.3013 30V70L50 95L6.69873 70V30L50 5Z" stroke="url(#logo_grad)" strokeWidth="8" strokeLinejoin="round"/>
                        <path d="M50 25L71.6506 37.5V62.5L50 75L28.3494 62.5V37.5L50 25Z" fill="url(#logo_grad)"/>
                        <path d="M50 5V25" stroke="url(#logo_grad)" strokeWidth="8" strokeLinecap="round"/>
                        <path d="M93.3013 30L71.6506 37.5" stroke="url(#logo_grad)" strokeWidth="8" strokeLinecap="round"/>
                        <path d="M93.3013 70L71.6506 62.5" stroke="url(#logo_grad)" strokeWidth="8" strokeLinecap="round"/>
                        <path d="M50 95V75" stroke="url(#logo_grad)" strokeWidth="8" strokeLinecap="round"/>
                        <path d="M6.69873 70L28.3494 62.5" stroke="url(#logo_grad)" strokeWidth="8" strokeLinecap="round"/>
                        <path d="M6.69873 30L28.3494 37.5" stroke="url(#logo_grad)" strokeWidth="8" strokeLinecap="round"/>
                        <defs>
                            <linearGradient id="logo_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3498db"/>
                                <stop offset="1" stopColor="#8e44ad"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
                <div className={styles.logoText}>
                    <span className={styles.logoFirst}>Ritu</span>
                    <span className={styles.logoSecond}>raj</span>
                </div>
            </motion.div>

            <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={`#${link.target}`}
                        className={styles.link}
                        onClick={(e) => scrollToSection(e, link.target)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <div className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </motion.nav>
    );
};
