import { ProjectCard } from './ProjectCard';
import styles from './Gallery.module.css';

const projects = [
    {
        id: 1,
        title: 'Aadhaar Plus',
        description: 'Digital Identity Monitoring system ensuring secure and scalable identity verification.',
        tags: ['React', 'Node.js', 'MongoDB', 'Biometrics'],
        github: 'https://github.com/riturajjhaba938/aadhaar-plus.git',
        demo: 'https://udai-n6dk.onrender.com/login'
    },
    {
        id: 4,
        title: 'AI Study Planner',
        description: 'An intelligent productivity tool that leverages AI to automate personalized study schedules. Features dynamic state management and adaptive learning milestones.',
        tags: ['React', 'AI Integration', 'State Management', 'UI/UX'],
        github: 'https://github.com/riturajjhaba938/AI-Study-Planner.git',
        demo: 'https://ai-study-planner-u1qg.onrender.com'
    },
    {
        id: 2,
        title: 'CODE-BROS',
        description: 'Real-time Collaboration Hub for developers to code, chat, and build together.',
        tags: ['Socket.io', 'Express', 'React', 'WebRTC'],
        github: 'https://github.com/riturajjhaba938/CODE-BROS.git',
        demo: 'https://bucolic-halva-1aeb9c.netlify.app/'
    },
    {
        id: 3,
        title: 'Games-Have-Fun',
        description: 'A collection of interactive Logic Games designed to challenge and entertain.',
        tags: ['JavaScript', 'Canvas API', 'Game Design'],
        github: 'https://github.com/riturajjhaba938/Games-Have-Fun-.git',
        demo: '#'
    }
];

export const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2 className={styles.heading}>Project Gallery</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};
