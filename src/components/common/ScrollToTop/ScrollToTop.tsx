import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';


const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className={styles.scrollToTop}>
                    <span className={styles.arrow}>↑</span>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
