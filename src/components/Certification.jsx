import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Certification.module.css';

// Importing image directly - user needs to place 'certificate.jpg' in src/assets
// If using Vite, we can usually just refer to it, or import it if in src.
// We'll assume the user will place it there.
// Ideally, we import it to get the hashed URL in production.
// import certificateImg from '../assets/certificate.jpg'; 

export const Certification = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"] // Start when top enters bottom of viewport
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 1], ["45deg", "0deg"]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <section className={styles.section} ref={ref}>
            <motion.div
                className={styles.certCard}
                style={{
                    scale,
                    opacity,
                    rotateX,
                    y,
                    transformPerspective: "1000px"
                }}
            >
                <div className={styles.glow} />
                <a
                    href="https://www.udemy.com/certificate/UC-09cab497-38e1-4be3-a498-6994e4039d3b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkWrapper}
                >
                    <div className={styles.content}>
                        <h2 className={styles.title}>Certified Node</h2>

                        {/* Certificate Image Container */}
                        <div className={styles.imageContainer}>
                            {/* Placeholder or dynamic import if file exists. 
                             Using a relative path for now, expecting file in public or assets. 
                             If in public, just /certificate.jpg. If src/assets, we need import. 
                             I'll assume src/assets for better bundling, but hardcode valid ref. 
                         */}
                            <img
                                src="/certificate.jpg"
                                alt="MongoDB Developer Certificate"
                                className={styles.certImage}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>

                        <h3 className={styles.certName}>MongoDB Developer Certification</h3>
                        <p className={styles.platform}>Udemy</p>
                        <div className={styles.credential}>
                            <span className={styles.label}>Credential ID:</span>
                            <code className={styles.id}>UC-09cab497-38e1-4be3-a498-6994e4039d3b</code>
                        </div>
                    </div>
                </a>
            </motion.div>
        </section>
    );
};
