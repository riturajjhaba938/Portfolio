import { motion, useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { ScrollReveal } from './ui/scroll-reveal';

export const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end center"]
    });

    const aboutText = "Architecting pixel-perfect, engaging, and accessible digital experiences. Bridging the gap between reactive UI and robust backend systems.";

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const title = "Rituraj Jha";
    const subtitle = "Aspiring Full Stack Developer";

    return (
        <section ref={targetRef} className={styles.hero}>
            <div
                className={styles.spotlight}
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 152, 219, 0.15), transparent 80%)`
                }}
            />

            <div className={styles.heroLayout}>
                {/* Left Side: Profile */}
                <div className={styles.leftCol}>
                    <motion.div
                        className={styles.profileContainer}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                    >
                        <img
                            src="https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774858266/sample1_loomjv.jpg"
                            alt="Rituraj Jha"
                            className={styles.profileImage}
                            fetchPriority="high"
                        />
                    </motion.div>

                    <motion.h1 className={styles.title}>
                        {title.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                className={styles.char}
                                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 50
                                }}
                                whileHover={{
                                    y: -20,
                                    color: "#3498db",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.div
                        className={styles.subtitleWrapper}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
                    >
                        <p className={styles.subtitle}>{subtitle}</p>
                    </motion.div>
                </div>

                {/* Right Side: Scroll Reveal */}
                <div className={styles.rightCol}>
                    <ScrollReveal text={aboutText} progress={scrollYProgress} />
                </div>
            </div>
        </section>
    );
};
