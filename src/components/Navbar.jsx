import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        
        if (location.pathname === '/') {
            // If already on homepage, just smooth scroll
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on a different route, navigate back to home with the hash
            navigate(`/#${targetId}`);
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
                onClick={(e) => handleNavClick(e, 'home')}
                whileHover="hover"
                initial="initial"
                animate="animate"
                style={{ cursor: 'pointer' }}
            >
                <motion.div 
                    className={styles.logoIcon}
                    variants={{
                        hover: { rotate: 90, scale: 1.1 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <img 
                        src="https://lh3.googleusercontent.com/a/ACg8ocIBrvyfONCNYzKM8RNX-FnfpqV_EjqnN4Oli9YatgicxW9LY3M=s360-c-no" 
                        alt="Profile Logo"
                        style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                    />
                </motion.div>
            </motion.div>

            <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={`/#${link.target}`}
                        className={styles.link}
                        onClick={(e) => handleNavClick(e, link.target)}
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
