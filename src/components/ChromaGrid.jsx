import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export const ChromaGrid = ({
    items,
    className = '',
    radius = 300,
    columns = 4,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = e => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardMove = e => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
            style={{
                '--r': `${radius}px`,
                '--cols': columns
            }}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {items.map((c, i) => (
                <article
                    key={i}
                    className="chroma-card"
                    onMouseMove={handleCardMove}
                    style={{
                        '--card-border': c.borderColor || '#00CFFF',
                        '--card-gradient': c.gradient || 'linear-gradient(145deg, rgba(10,15,28,0.9), rgba(10,15,28,0.95))',
                    }}
                >
                    <div className="chroma-img-wrapper">
                        <img src={c.image} alt={c.title} loading="lazy" />
                    </div>

                    {/* Socials overlaid on image/card via absolute positioning in CSS */}
                    <div className="chroma-grid-socials">
                        {c.linkedin && (
                            <a
                                href={c.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chroma-social-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="i-lucide-linkedin" />
                            </a>
                        )}
                        {c.github && (
                            <a
                                href={c.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chroma-social-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="i-lucide-github" />
                            </a>
                        )}
                        {c.instagram && (
                            <a
                                href={c.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chroma-social-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="i-lucide-instagram" />
                            </a>
                        )}
                    </div>

                    <footer className="chroma-info">
                        <div className="chroma-info-header">
                            <h3 className="name">{c.title}</h3>
                            {c.handle && <span className="handle">{c.handle}</span>}
                        </div>
                        <p className="role">{c.role}</p>
                    </footer>
                </article>
            ))}
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
