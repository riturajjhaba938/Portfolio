import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

export const Preloader = () => {
    // Lock scrolling while the preloader is active!
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <motion.div 
            className={styles.preloaderContainer}
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0, 
                transition: { duration: 0.8, ease: "easeInOut" } 
            }}
        >
            <div className={styles.loaderContent}>
                {/* Outer Rotating Ring */}
                <motion.div 
                    className={styles.ring}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                
                {/* Inner Counter-Rotating Ring */}
                <motion.div 
                    className={styles.ringInner}
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
                
                {/* Profile Logo */}
                <motion.img 
                    src="https://lh3.googleusercontent.com/a/ACg8ocIBrvyfONCNYzKM8RNX-FnfpqV_EjqnN4Oli9YatgicxW9LY3M=s360-c-no"
                    alt="Loading..."
                    className={styles.logoImage}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
            </div>
            
            <motion.h2 
                className={styles.loadingText}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                Crafting Digital Experience...
            </motion.h2>
        </motion.div>
    );
};
