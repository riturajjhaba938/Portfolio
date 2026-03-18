import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Magnetic } from './Magnetic';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Gallery.module.css';

export const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={styles.cardWrapper}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
            }}
            whileHover={{ y: -10 }}
        >
            <motion.div
                className={`${styles.card} glass`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <div style={{ transform: "translateZ(50px)" }}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>

                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>

                    <div className={styles.links}>
                        <Magnetic>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                <FaGithub /> Code
                            </a>
                        </Magnetic>
                        {project.demo && (
                            <Magnetic>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                    <FaExternalLinkAlt /> Live
                                </a>
                            </Magnetic>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
