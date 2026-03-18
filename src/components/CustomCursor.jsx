import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const isHoveringRef = useRef(false); // Track hover state without re-triggering effect loop

    const mouseX = useRef(0);
    const mouseY = useRef(0);

    // Follower position
    const followerX = useRef(0);
    const followerY = useRef(0);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;

            // Direct update for the inner diamond (instant follow)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0) rotate(45deg)`;
            }
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
                isHoveringRef.current = true;
            } else {
                setIsHovering(false);
                isHoveringRef.current = false;
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        let animationFrameId;

        const animateFollower = () => {
            // Smooth lerp for the follower
            const ease = 0.12;

            followerX.current += (mouseX.current - followerX.current) * ease;
            followerY.current += (mouseY.current - followerY.current) * ease;

            if (followerRef.current) {
                // Determine rotation: 45deg normally (diamond), 0deg on hover (square)
                // We read from ref to get fresh state inside the loop
                const rotation = isHoveringRef.current ? 0 : 45;
                const offset = 15; // Half of width (30px)

                followerRef.current.style.transform = `translate3d(${followerX.current - offset}px, ${followerY.current - offset}px, 0) rotate(${rotation}deg)`;
            }

            animationFrameId = requestAnimationFrame(animateFollower);
        };

        animateFollower();

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Empty dependency array = loop runs once and stays alive

    return (
        <>
            <div
                ref={cursorRef}
                className={`${styles.cursorDiamond} ${isHovering ? styles.hoverDiamond : ''}`}
            />
            <div
                ref={followerRef}
                className={`${styles.cursorFollower} ${isHovering ? styles.hoverFollower : ''}`}
            />
        </>
    );
};

export default CustomCursor;
