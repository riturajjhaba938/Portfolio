import { ProjectCard } from './ProjectCard';
import styles from './Gallery.module.css';

const projects = [
    {
        id: 1,
        title: 'Aadhaar Plus',
        description: 'Digital Identity Monitoring system with real-time migration analytics.',
        tags: ['MERN', 'Recharts', 'MongoDB'],
        github: 'https://github.com/riturajjhaba938/aadhaar-plus.git',
        demo: 'https://udai-n6dk.onrender.com/',
        video: 'https://youtu.be/DEk041Yd_lU?si=eJfHiIw4pxdPauup',
        image: '/projects/aadhaar-plus.png'
    },
    {
        id: 2,
        title: 'AI Study Planner',
        description: 'Intelligent productivity tool using Generative AI for automated scheduling.',
        tags: ['React', 'Node.js', 'AI Integration'],
        github: 'https://github.com/riturajjhaba938/AI-Study-Planner.git',
        demo: 'https://ai-study-planner-u1qg.onrender.com',
        video: 'https://youtu.be/TULmlNcDTJQ?si=KqGLrqYkStRuiAEe',
        image: 'https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774689966/Ai_Study_Planner_f8mxmc.png'
    },
    {
        id: 3,
        title: 'CURA',
        description: 'Clinical Intelligence Platform for personal healthcare management.',
        tags: ['React', 'Healthcare Tech', 'UI/UX'],
        github: 'https://github.com/riturajjhaba938/CURA.git',
        demo: 'https://cura-nu-six.vercel.app/',
        image: 'https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774689966/CURA_bdwhx8.png'
    },
    {
        id: 4,
        title: 'Aether',
        description: "AI-powered 'Second Brain' for synthesizing lectures and notes (Hackathon Winner).",
        tags: ['LLMs', 'Vector Search', 'Hackathon'],
        github: 'https://github.com/riturajjhaba938/Aether.git',
        demo: 'https://aether-five-tau.vercel.app/',
        image: 'https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774689965/Aether_uvcjgk.png'
    },
    {
        id: 5,
        title: 'Gap Graph',
        description: 'AI tool for career trajectory mapping and skill gap analysis.',
        tags: ['Python', 'NLP', 'React'],
        github: 'https://github.com/riturajjhaba938/GapGraph.git',
        demo: 'https://gap-graph.vercel.app/upload',
        video: 'https://youtu.be/HWOBS1By8BM',
        image: 'https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774689965/Gap_Graph_ycpzjc.png'
    },
    {
        id: 6,
        title: "Waiter's Menu",
        description: 'Interactive digital menu system for optimized restaurant service.',
        tags: ['Frontend', 'Logic', 'Responsive Design'],
        github: 'https://github.com/riturajjhaba938/Waiters-s-menu.git',
        demo: 'https://waiters-s-menu.vercel.app/',
        image: 'https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774689965/Waiter_s_Menu_rfg3q7.png'
    },
    {
        id: 7,
        title: 'Web-Template',
        description: 'Professional landing page architecture for modern SAAS products.',
        tags: ['UI/UX', 'Vite', 'CSS Modules'],
        github: 'https://github.com/riturajjhaba938/WebPage_Templates.git',
        demo: 'https://vedafai.vercel.app/',
        image: 'https://res.cloudinary.com/dtqsbbz5r/image/upload/f_auto,q_auto/v1774689966/Web_template_vedifai_jz7zjc.png'
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
