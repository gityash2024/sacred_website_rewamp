import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FadeInSectionProps {
    children: React.ReactNode;
    delay?: string;
    className?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = '0s', className = '' }) => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
};
