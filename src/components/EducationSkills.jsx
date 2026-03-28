import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma, FaCloud, FaChartBar } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiExpress, SiPostman, SiVite, SiC } from 'react-icons/si';
import { Magnetic } from './Magnetic';
import styles from './EducationSkills.module.css';

// Orbit Rings Config
const innerOrbit = [
    { icon: <SiCplusplus />, name: 'C++', color: '#00599C' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaNodeJs />, name: 'Node', color: '#339933' },
    { icon: <SiMongodb />, name: 'Mongo', color: '#47A248' }
];

const middleOrbit = [
    { icon: <SiJavascript />, name: 'JS', color: '#F7DF1E' },
    { icon: <SiHtml5 />, name: 'HTML', color: '#E34F26' },
    { icon: <SiCss3 />, name: 'CSS', color: '#1572B6' },
    { icon: <SiExpress />, name: 'Express', color: '#ffffff' }
];

const outerOrbit = [
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaGithub />, name: 'GitHub', color: '#ffffff' },
    { icon: <SiVite />, name: 'Vite', color: '#646CFF' },
    { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
    { icon: <FaFigma />, name: 'Figma', color: '#F24E1E' }
];

// Detailed Skills Content
const detailedSkills = [
    {
        category: "Languages",
        items: [
            { name: "C", icon: <SiC />, color: "#A8B9CC" },
            { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
            { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
            { name: "Vite", icon: <SiVite />, color: "#646CFF" },
            { name: "Recharts", icon: <FaChartBar />, color: "#22B5BF" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
            { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
            { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
            { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
            { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
            { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
            { name: "CI/CD", icon: <FaCloud />, color: "#3498db" }
        ]
    }
];

export const EducationSkills = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Left Column: Education & Orbit */}
                <div className={styles.column}>
                    <h2 className={styles.heading}>Education</h2>
                    <div className={`${styles.timeline} glass`}>
                        <div className={styles.timelineItem}>
                            <div className={styles.dot}></div>
                            <h3 className={styles.school}>Swaminarayan University</h3>
                            <span className={styles.year}>2025 – 2029</span>
                            <p className={styles.degree}>B.E. in Computer Engineering</p>
                        </div>
                        <div className={styles.timelineItem} style={{ marginTop: '30px' }}>
                            <div className={styles.dot}></div>
                            <h3 className={styles.school}>C.M. Science College</h3>
                            <span className={styles.year}>Intermediate</span>
                            <p className={styles.degree}>Higher Secondary Education</p>
                        </div>
                    </div>

                </div>

                {/* Right Column: Floating Grid */}
                <div className={styles.column}>
                    <h2 className={styles.heading}>Technical Skills</h2>
                    <div className={styles.skillsGrid}>
                        {detailedSkills.map((cat) => (
                            <div key={cat.category} className={styles.skillCategoryGroup}>
                                <h3 className={styles.catTitle}>{cat.category}</h3>
                                <div className={styles.floatingRow}>
                                    {cat.items.map((item) => (
                                        <Magnetic key={item.name}>
                                            <motion.div
                                                className={`${styles.skillCard} glass`}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className={styles.cardIcon} style={{ color: item.color }}>
                                                    {item.icon}
                                                </span>
                                                <span className={styles.cardName}>{item.name}</span>
                                            </motion.div>
                                        </Magnetic>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
