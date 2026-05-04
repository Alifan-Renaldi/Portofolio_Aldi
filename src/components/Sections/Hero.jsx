import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
    // Rotating Job Titles
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = ["Software Developer", "UI/UX Designer", "Tech Enthusiast"];

    // Typewriter State
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const typeSpeed = isDeleting ? 50 : 100; // Faster deleting
        const pauseTime = 3000; // Pause at end of word

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward
                if (displayedText.length < currentTitle.length) {
                    setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
                } else {
                    // Finished typing, pause then delete
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
                } else {
                    // Finished deleting, move to next title
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting && displayedText.length === currentTitle.length ? pauseTime : typeSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, titleIndex]);

    // Neon Yellow Theme Colors
    const neonYellow = '#FFE800'; // Bright Neon Yellow
    const neonGlow = '0 0 20px rgba(255, 232, 0, 0.4)';
    // Tech Grid Background Animation
    const BackgroundGrid = () => (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
            opacity: 0.15,
            pointerEvents: 'none'
        }}>
            {/* Moving Grid Lines */}
            <div style={{
                position: 'absolute',
                width: '200%',
                height: '200%',
                background: `linear-gradient(transparent 0%, ${neonYellow} 2%, transparent 3%), linear-gradient(90deg, transparent 0%, ${neonYellow} 2%, transparent 3%)`,
                backgroundSize: '100px 100px',
                transform: 'perspective(500px) rotateX(60deg)',
                animation: 'gridMove 20s linear infinite',
                top: '-50%',
                left: '-50%'
            }} />

            {/* Floating Tech Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        background: neonYellow,
                        borderRadius: '50%',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        boxShadow: '0 0 10px ' + neonYellow
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            <style>{`
                @keyframes gridMove {
                    0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
                    100% { transform: perspective(500px) rotateX(60deg) translateY(100px); }
                }
            `}</style>
        </div>
    );

    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 'var(--header-height)',
            background: 'var(--color-bg-primary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <BackgroundGrid />

            <div className="hero-container container">
                {portfolioData.hero.imgUrl && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hero-image-wrapper"
                        style={{
                            border: `4px solid ${neonYellow}`,
                            boxShadow: neonGlow,
                            zIndex: 2,
                            position: 'relative'
                        }}
                    >
                        <img
                            src={portfolioData.hero.imgUrl}
                            alt={portfolioData.hero.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                )}

                <div className="hero-content" style={{ zIndex: 2, position: 'relative' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: neonYellow, fontSize: '1.2rem', fontWeight: 600, letterSpacing: '2px', display: 'block', marginBottom: '1rem', textShadow: '0 0 10px rgba(255,232,0,0.3)' }}
                    >
                        {portfolioData.hero.greeting}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', margin: '0 0 1rem 0', lineHeight: 1.1 }}
                    >
                        {portfolioData.hero.name}
                    </motion.h1>
                    <div style={{
                        height: '2rem',
                        marginBottom: '2rem',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#fff',
                        position: 'relative'
                    }}>
                        <span>{displayedText}</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            style={{ color: neonYellow, marginLeft: '2px' }}
                        >
                            _
                        </motion.span>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}
                    >
                        {portfolioData.hero.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <motion.a
                            href={portfolioData.hero.kontakUrl}
                            target="_blank"
                            whileHover={{ scale: 1.05, boxShadow: neonGlow }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '12px 30px',
                                border: `2px solid ${neonYellow}`,
                                borderRadius: '30px',
                                color: neonYellow,
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 0 10px rgba(255, 232, 0, 0.1)',
                                background: 'rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(4px)',
                                transition: 'all 0.3s'
                            }}
                        >
                            Hire me
                        </motion.a>
                        <motion.a
                            href={portfolioData.hero.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: neonGlow }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '12px 30px',
                                background: neonYellow,
                                border: `2px solid ${neonYellow}`,
                                borderRadius: '30px',
                                color: '#000',
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 0 10px rgba(255, 232, 0, 0.2)',
                                transition: 'all 0.3s'
                            }}
                        >
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <style>{`
                .hero-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    position: relative;
                }
                .hero-image-wrapper {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    overflow: hidden;
                    /* styles handled inline */
                }
                .hero-content {
                    position: relative;
                }
                @media (min-width: 900px) {
                    .hero-container {
                        flex-direction: row-reverse;
                        justify-content: center;
                        gap: 4rem;
                        text-align: left;
                    }
                    .hero-content {
                        text-align: left;
                        align-items: flex-start;
                        display: flex;
                        flex-direction: column;
                        position: relative;
                    }
                    .hero-content p {
                        margin: 0 0 2.5rem 0 !important;
                    }
                    .hero-content > div {
                        justify-content: flex-start !important;
                    }
                    .hero-image-wrapper {
                        width: 350px;
                        height: 350px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
