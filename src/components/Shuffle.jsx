import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Shuffle = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const iterations = useRef(0);

    useEffect(() => {
        if (!isInView) return;

        // Reset iterations when text changes or view triggers
        iterations.current = 0;

        const interval = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations.current) {
                            return text[index];
                        }
                        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations.current >= text.length) {
                clearInterval(interval);
                setDisplayText(text); // Ensure final state is clean
            }

            iterations.current += 1 / 2;
        }, 50);

        return () => clearInterval(interval);
    }, [isInView, text]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
};

export default Shuffle;
