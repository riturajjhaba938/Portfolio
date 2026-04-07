import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import styles from './Certification.module.css';

const hackathons = [
    {
        id: 1,
        name: "Aether",
        event: "Dev Heat (IIIT Surat)",
        description: "Finalist at National Level Hackathon. AI-powered 'Second Brain' for synthesizing lectures and notes.",
        org: "IIIT Surat | Collab: GDG",
        teamSize: "3",
        role: "Full Stack Developer (Team Lead)",
        techStage: "Finalist",
        certificateImage: "https://res.cloudinary.com/dtqsbbz5r/image/upload/q_auto/f_auto/v1774872228/DevHeat_page-0001_eiaisj.jpg",
        photoImage: "https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774873053/IIIT_Surat_Pes_qewffp.jpg",
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        name: "AI Study Planner",
        event: "UnsaidTalks",
        description: "2nd Runner-up for AI-driven academic automation.",
        org: "UnsaidTalks",
        teamSize: "Individual",
        role: "Full Stack Developer",
        techStage: "Winner",
        certificateImage: "https://res.cloudinary.com/dtqsbbz5r/image/upload/q_auto/f_auto/v1774871798/AI-Study-Planner-Hackathon-08FB8A42D1CF_n5gncz.jpg",
        photoImage: "https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774689966/Ai_Study_Planner_f8mxmc.png",
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        name: "CURA",
        event: "HackCrux v2 (LNMIIT)",
        description: "Clinical Intelligence Platform integration.",
        org: "LNMIIT Jaipur | Collab: TensorFlow User Group & GDG",
        teamSize: "4",
        role: "Backend & AI Integration (Team Lead)",
        techStage: "Participation",
        certificateImage: "https://res.cloudinary.com/dtqsbbz5r/image/upload/q_auto/f_auto/v1774872228/DevHeat_page-0001_eiaisj.jpg",
        photoImage: "https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774873054/LNMIIT_Pres_k9tput.jpg",
        github: "#",
        demo: "#"
    }
];

export const Certification = () => {
    const ref = useRef(null);
    const [selectedHackathon, setSelectedHackathon] = useState(null);

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Hackathons & Achievements</h2>
                
                <div className={styles.grid}>
                    {hackathons.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.flipCard}
                            onClick={() => setSelectedHackathon(item)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.flipCardInner}>
                                {/* Front: Certificate */}
                                <div className={styles.flipCardFront}>
                                    <img src={item.certificateImage} alt={`${item.name} Certificate`} className={styles.cardImage} />
                                    <div className={styles.cardOverlay}>
                                        <h3 className={styles.certName}>{item.name}</h3>
                                        <p className={styles.platform}>{item.techStage}</p>
                                    </div>
                                    <div className={styles.clickHint}>Click to View Details</div>
                                </div>
                                
                                {/* Back: Hackathon Photo */}
                                <div className={styles.flipCardBack}>
                                    <img src={item.photoImage} alt={`${item.name} Photo`} className={styles.cardImage} />
                                    <div className={styles.cardOverlay}>
                                        <h3 className={styles.certName}>Event Photo</h3>
                                        <p className={styles.platform}>{item.event}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Popup Overlay */}
            <AnimatePresence>
                {selectedHackathon && (
                    <motion.div 
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedHackathon(null)}
                    >
                        <motion.div 
                            className={styles.modalContent}
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={styles.modalHeader}>
                                <div className={styles.modalText}>
                                    <h3>{selectedHackathon.name} <span className={styles.techStageBadge}>{selectedHackathon.techStage}</span></h3>
                                    <p className={styles.modalDesc}>{selectedHackathon.description}</p>
                                    <div className={styles.modalDetailsRow}>
                                        <span><strong>Event:</strong> {selectedHackathon.event}</span>
                                        <span><strong>Role:</strong> {selectedHackathon.role}</span>
                                        <span><strong>Team Size:</strong> {selectedHackathon.teamSize}</span>
                                    </div>
                                    <div className={styles.modalLinks}>
                                        {selectedHackathon.github && (
                                            <a href={selectedHackathon.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                                <FaGithub /> Code
                                            </a>
                                        )}
                                        {selectedHackathon.demo && (
                                            <a href={selectedHackathon.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                                <FaExternalLinkAlt /> Live
                                            </a>
                                        )}
                                        {selectedHackathon.video && (
                                            <a href={selectedHackathon.video} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                                <FaYoutube /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <button className={styles.closeBtn} onClick={() => setSelectedHackathon(null)}>&times;</button>
                            </div>

                            <div className={styles.modalImages}>
                                <div className={styles.modalImagePanel}>
                                    <h4>Certificate</h4>
                                    <img src={selectedHackathon.certificateImage} alt="Certificate" className={styles.modalImg} />
                                </div>
                                <div className={styles.modalImagePanel}>
                                    <h4>Event Photo</h4>
                                    <img src={selectedHackathon.photoImage} alt="Event" className={styles.modalImg} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
