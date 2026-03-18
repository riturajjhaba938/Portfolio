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
            <div className={styles.logo} onClick={(e) => scrollToSection(e, 'home')}>
                RJ
            </div>

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
