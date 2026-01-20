import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DecryptedText from './DecryptedText'

const LoadingScreen = ({ onLoadComplete }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Auto hide after shuffle animation
        const timer = setTimeout(() => {
            setIsVisible(false)
            if (onLoadComplete) onLoadComplete()
        }, 2500)

        return () => clearTimeout(timer)
    }, [onLoadComplete])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{ backgroundColor: '#0A0F1C' }}
                >
                    {/* IEDC VISAT Text with Shuffle Effect - Clean & Minimal */}
                    <div className="relative z-10 text-center">
                        <h1 style={{
                            fontSize: 'clamp(4rem, 15vw, 10rem)',
                            fontWeight: 700,
                            color: '#D9D9D9',
                            letterSpacing: '0.15em',
                            lineHeight: 1,
                            marginBottom: '0.1em',
                            margin: 0,
                            display: 'block'
                        }}>
                            <DecryptedText
                                text="IEDC"
                                animateOn="view"
                                speed={100}
                                maxIterations={40}
                                revealDirection="center"
                                sequential={true}
                            />
                        </h1>
                        <h1 style={{
                            fontSize: 'clamp(4rem, 15vw, 10rem)',
                            fontWeight: 700,
                            color: '#D9D9D9',
                            letterSpacing: '0.15em',
                            lineHeight: 1,
                            margin: 0,
                            display: 'block'
                        }}>
                            <DecryptedText
                                text="VISAT"
                                animateOn="view"
                                speed={100}
                                maxIterations={40}
                                revealDirection="center"
                                sequential={true}
                            />
                        </h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default LoadingScreen
