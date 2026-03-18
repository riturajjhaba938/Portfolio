import React, { useState } from 'react';
import styles from './VisionaryAbout.module.css';

const VisionaryAbout = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            className={styles.aboutContainer}
            onMouseMove={handleMouseMove}
            style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` }}
        >
            <div className={styles.glowEffect} />
            <h2 className={styles.title}>The Visionary Developer</h2>
            <div className={styles.paragraph}>
                <p>
                    I don't just write code; I architect digital ecosystems. Currently a first-year university student,
                    I have bypassed the traditional learning curve by diving headfirst into the
                    <span className={styles.highlight}> MERN stack</span> and database architecture.
                </p>
                <br />
                <p>
                    I chose <span className={styles.highlight}>React</span> for its declarative power in managing complex UI states
                    and <span className={styles.highlight}>MongoDB</span> for its schema flexibility—tools that allow me
                    to build with the speed and scale that modern users demand. My journey is fueled by a fascination with
                    how data moves through the world, whether I’m monitoring the health of India’s digital identity through
                    Aadhaar Plus or optimizing document-based models to handle high-concurrency workloads.
                </p>
                <br />
                <p>
                    I believe that great software should feel weightless for the user, no matter how heavy the logic is behind the scenes.
                    Though I graduate from <span className={styles.highlight}>Swaminarayan University</span> in <span className={styles.highlight}>2029</span>,
                    I am already bridging the gap between academic theory and the fast-paced reality of production-grade development, proving that
                    <strong> speed of learning is my greatest competitive advantage.</strong>
                </p>
            </div>
        </section>
    );
};

export default VisionaryAbout;
