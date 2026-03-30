import styles from './Education.module.css';

export const Education = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
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
            </div>
        </section>
    );
};
