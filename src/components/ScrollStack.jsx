import { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
    children,
    className = '',
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = '20%',
    scaleEndPosition = '10%',
    baseScale = 0.85,
    rotationAmount = 0,
    blurAmount = 0,
    smoothness = 0.12, // Lerp factor for smooth interpolation
    onStackComplete
}) => {
    const scrollerRef = useRef(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef(null);
    const cardsRef = useRef([]);
    const currentTransformsRef = useRef(new Map());
    const targetTransformsRef = useRef(new Map());
    const isAnimatingRef = useRef(false);

    const calculateProgress = useCallback((scrollTop, start, end) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value, containerHeight) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }, []);

    // Lerp function for smooth interpolation
    const lerp = useCallback((start, end, factor) => {
        return start + (end - start) * factor;
    }, []);

    const calculateTargetTransforms = useCallback(() => {
        if (!cardsRef.current.length) return;

        const scrollTop = window.scrollY;
        const containerHeight = window.innerHeight;
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        const endElement = document.querySelector('.scroll-stack-end');
        const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const cardTop = rect.top + window.scrollY;

            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                let topCardIndex = 0;
                for (let j = 0; j < cardsRef.current.length; j++) {
                    const jCard = cardsRef.current[j];
                    if (!jCard) continue;
                    const jRect = jCard.getBoundingClientRect();
                    const jCardTop = jRect.top + window.scrollY;
                    const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                    if (scrollTop >= jTriggerStart) {
                        topCardIndex = j;
                    }
                }

                if (i < topCardIndex) {
                    const depthInStack = topCardIndex - i;
                    blur = Math.max(0, depthInStack * blurAmount);
                }
            }

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            targetTransformsRef.current.set(i, {
                translateY,
                scale,
                rotation,
                blur
            });

            // Initialize current transforms if not set
            if (!currentTransformsRef.current.has(i)) {
                currentTransformsRef.current.set(i, {
                    translateY,
                    scale,
                    rotation,
                    blur
                });
            }

            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        onStackComplete,
        calculateProgress,
        parsePercentage
    ]);

    const animateTransforms = useCallback(() => {
        let needsUpdate = false;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const target = targetTransformsRef.current.get(i);
            const current = currentTransformsRef.current.get(i);

            if (!target || !current) return;

            // Lerp towards target values
            const newTransform = {
                translateY: lerp(current.translateY, target.translateY, smoothness),
                scale: lerp(current.scale, target.scale, smoothness),
                rotation: lerp(current.rotation, target.rotation, smoothness),
                blur: lerp(current.blur, target.blur, smoothness)
            };

            // Check if we need to continue animating
            const threshold = 0.01;
            if (
                Math.abs(newTransform.translateY - target.translateY) > threshold ||
                Math.abs(newTransform.scale - target.scale) > 0.001 ||
                Math.abs(newTransform.rotation - target.rotation) > threshold ||
                Math.abs(newTransform.blur - target.blur) > threshold
            ) {
                needsUpdate = true;
            }

            currentTransformsRef.current.set(i, newTransform);

            // Apply transforms
            const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
            const filter = newTransform.blur > 0.1 ? `blur(${newTransform.blur}px)` : '';

            card.style.transform = transform;
            card.style.filter = filter;
        });

        if (needsUpdate) {
            animationFrameRef.current = requestAnimationFrame(animateTransforms);
        } else {
            isAnimatingRef.current = false;
        }
    }, [lerp, smoothness]);

    const handleScroll = useCallback(() => {
        calculateTargetTransforms();

        if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            animationFrameRef.current = requestAnimationFrame(animateTransforms);
        }
    }, [calculateTargetTransforms, animateTransforms]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        // Initial update
        setTimeout(() => {
            calculateTargetTransforms();
            animateTransforms();
        }, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [handleScroll, calculateTargetTransforms, animateTransforms]);

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const cards = Array.from(document.querySelectorAll('.scroll-stack-card'));
        cardsRef.current = cards;

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
        });

        calculateTargetTransforms();

        return () => {
            stackCompletedRef.current = false;
            cardsRef.current = [];
            currentTransformsRef.current.clear();
            targetTransformsRef.current.clear();
        };
    }, [itemDistance, calculateTargetTransforms]);

    return (
        <div className={`scroll-stack-scroller window-scroll ${className}`.trim()} ref={scrollerRef}>
            <div className="scroll-stack-inner">
                {children}
                <div className="scroll-stack-end" />
            </div>
        </div>
    );
};

export default ScrollStack;
