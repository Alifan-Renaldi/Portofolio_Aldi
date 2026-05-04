import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Experience', href: '#experience' },
        { title: 'Projects', href: '#projects' },
        { title: 'Certifications', href: '#certifications' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(10, 10, 11, 0.8)', // Dark background matching theme but translucent
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--color-glass-border)',
                transform: 'none',
                maxWidth: 'none',
                borderRadius: 0
            }}
        >
            <div style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '4px', fontStyle: 'bold' }}>
                Alifan Renaldi<span style={{ color: 'var(--color-accent)' }}></span>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                {navLinks.map((link) => (
                    <motion.a
                        key={link.title}
                        href={link.href}
                        whileHover={{ color: "var(--color-accent)" }}
                        style={{ fontSize: '0.9rem', fontWeight: 600, position: 'relative', letterSpacing: '1px' }}
                        className="nav-link"
                    >
                        {link.title}
                        <span className="nav-underline" style={{
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0,
                            width: '0%',
                            height: '2px',
                            background: 'var(--color-accent)',
                            transition: 'width 0.3s ease'
                        }} />
                    </motion.a>
                ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-icon" onClick={toggleMenu} style={{ fontSize: '1.5rem' }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="glass-panel"
                        style={{
                            position: 'absolute',
                            top: '70px',
                            left: 0,
                            width: '100%',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            padding: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.title}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                whileHover={{ scale: 1.1, color: "var(--color-accent)" }}
                                whileTap={{ scale: 0.95 }}
                                style={{ fontSize: '1.2rem', fontWeight: 600 }}
                            >
                                {link.title}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .mobile-menu-icon { display: none; cursor: pointer; }
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-menu-icon { display: block; }
                }
                .nav-link:hover { color: var(--color-accent); }
                .nav-link:hover .nav-underline { width: 100% !important; }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
