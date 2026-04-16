import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { projects } from './Gallery';
import styles from './ProjectDetail.module.css';

export const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project Not Found</h2>
                <button onClick={() => navigate('/')} className={styles.backBtn}>
                    <FaArrowLeft /> Back to Home
                </button>
            </div>
        );
    }

    return (
        <motion.div 
            className={styles.projectDetailContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.header}>
                <Link to="/#projects" className={styles.backBtn}>
                    <FaArrowLeft /> Back to Projects
                </Link>
            </div>
            
            <div className={styles.content}>
                <motion.div 
                    className={styles.imageContainer}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <img src={project.image} alt={project.title} className={styles.image} />
                </motion.div>

                <motion.div 
                    className={styles.infoContainer}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className={styles.title}>{project.title}</h1>
                    
                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>

                    <div className={styles.description}>
                        <p>{project.description}</p>
                    </div>

                    <div className={styles.links}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <FaGithub /> View Source
                        </a>
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        {project.video && (
                            <a href={project.video} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                <FaYoutube /> Watch Video
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
