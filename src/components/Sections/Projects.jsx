import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import { portfolioData } from '../../data/portfolio';
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const Projects = () => {
    // Modal state now tracks the list of images and the current index being viewed
    const [zoomModal, setZoomModal] = useState({ 
        isOpen: false, 
        images: [], 
        currentIndex: 0 
    });
    const [zoomLevel, setZoomLevel] = useState(1);

    const openModal = (images, index = 0) => {
        setZoomModal({ 
            isOpen: true, 
            images: images, 
            currentIndex: index 
        });
        setZoomLevel(1); // Reset zoom on open
    };

    const closeModal = () => {
        setZoomModal(prev => ({ ...prev, isOpen: false }));
        setZoomLevel(1);
    };

    const nextModalImage = (e) => {
        e?.stopPropagation();
        setZoomModal(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }));
        setZoomLevel(1); // Reset zoom on slide change
    };

    const prevModalImage = (e) => {
        e?.stopPropagation();
        setZoomModal(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
        }));
        setZoomLevel(1); // Reset zoom on slide change
    };

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.5, 3)); // Max zoom 3x
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.5, 0.5)); // Min zoom 0.5x
    };

    // Keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!zoomModal.isOpen) return;
            
            if (e.key === 'ArrowRight') nextModalImage();
            if (e.key === 'ArrowLeft') prevModalImage();
            if (e.key === 'Escape') closeModal();
            if (e.key === '+' || e.key === '=') setZoomLevel(prev => Math.min(prev + 0.5, 3));
            if (e.key === '-' || e.key === '_') setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [zoomModal.isOpen]);

    return (
        <section id="projects" className="section">
            <div className="container">
                <SectionTitle title="PROJECT"/>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {portfolioData.projects.map((project, index) => {
                        const images = project.images && project.images.length > 0 ? project.images : [];
                        const hasImages = images.length > 0;
                        // Always show the first image on the card
                        const coverImage = hasImages ? images[0] : null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 10px 30px -10px rgba(255, 215, 0, 0.2)',
                                    borderColor: '#FFD700'
                                }}
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                <div 
                                    className="project-image-container"
                                    style={{ 
                                        marginBottom: '1.5rem', 
                                        height: '200px', 
                                        background: 'var(--color-bg-secondary)', 
                                        borderRadius: '12px', 
                                        overflow: 'hidden', 
                                        position: 'relative',
                                        cursor: hasImages ? 'pointer' : 'default',
                                    }}
                                    onClick={() => hasImages && openModal(images, 0)}
                                >
                                    {hasImages ? (
                                        <motion.img 
                                            src={coverImage} 
                                            alt={project.title} 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover',
                                                filter: 'brightness(0.7)',
                                                transition: 'filter 0.3s ease'
                                            }} 
                                            onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                                            onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0.7)'}
                                        />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)', background: '#1a1a1c' }}>
                                            <span style={{ fontSize: '3rem', opacity: 0.3 }}>💻</span>
                                        </div>
                                    )}
                                </div>
                                <h3 style={{ marginBottom: '0.8rem', fontSize: '1.5rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>{project.description}</p>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.85rem',
                                            padding: '6px 14px',
                                            borderRadius: '20px',
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            color: 'var(--color-accent)',
                                            fontWeight: 500
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Zoom Modal with Carousel */}
                <AnimatePresence>
                    {zoomModal.isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.95)', // Darker background for better focus
                                zIndex: 9999,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2rem',
                                cursor: 'zoom-out'
                            }}
                        >
                             <motion.button
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                onClick={closeModal}
                                style={{
                                    position: 'absolute',
                                    top: '30px',
                                    right: '30px',
                                    background: 'transparent',
                                    border: '2px solid #FFD700',
                                    color: '#FFD700',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    fontSize: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10001,
                                    transition: 'all 0.3s'
                                }}
                                whileHover={{ scale: 1.1, background: '#FFD700', color: '#000' }}
                            >
                                <FaTimes />
                            </motion.button>
                            
                            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => e.stopPropagation()}>
                                <motion.img
                                    key={zoomModal.currentIndex} // Re-animate on change
                                    src={zoomModal.images[zoomModal.currentIndex]}
                                    alt="Zoomed Project"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: zoomLevel }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '90vh',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                        boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                                        cursor: zoomLevel > 1 ? 'grab' : 'default'
                                    }}
                                    drag={zoomLevel > 1}
                                    dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }} // basic constraints
                                />

                                {/* Zoom Controls */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '30px',
                                    display: 'flex',
                                    gap: '1rem',
                                    zIndex: 10000
                                }}>
                                    <motion.button
                                        onClick={handleZoomOut}
                                        whileHover={{ scale: 1.1, background: '#FFD700', color: '#000' }}
                                        style={{
                                            background: 'transparent',
                                            border: '2px solid #FFD700',
                                            color: '#FFD700',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        <FaMinus />
                                    </motion.button>
                                    <motion.button
                                        onClick={handleZoomIn}
                                        whileHover={{ scale: 1.1, background: '#FFD700', color: '#000' }}
                                        style={{
                                            background: 'transparent',
                                            border: '2px solid #FFD700',
                                            color: '#FFD700',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        <FaPlus />
                                    </motion.button>
                                </div>

                                {/* Carousel Controls - Only show if zoomed out (normal view) to avoid conflict with dragging? Or just keep them? keeping them is fine. */}
                                {zoomModal.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevModalImage}
                                            style={{
                                                position: 'absolute',
                                                left: '20px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'rgba(0,0,0,0.5)',
                                                border: '1px solid #FFD700',
                                                color: '#FFD700',
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                zIndex: 10000,
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseOver={(e) => { e.currentTarget.style.background = '#FFD700'; e.currentTarget.style.color = '#000'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#FFD700'; }}
                                        >
                                            <FaChevronLeft size={20} />
                                        </button>
                                        
                                        <button
                                            onClick={nextModalImage}
                                            style={{
                                                position: 'absolute',
                                                right: '20px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'rgba(0,0,0,0.5)',
                                                border: '1px solid #FFD700',
                                                color: '#FFD700',
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                zIndex: 10000,
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseOver={(e) => { e.currentTarget.style.background = '#FFD700'; e.currentTarget.style.color = '#000'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#FFD700'; }}
                                        >
                                            <FaChevronRight size={20} />
                                        </button>

                                        {/* Image Counter */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            color: '#FFD700',
                                            fontSize: '1rem',
                                            background: 'rgba(0,0,0,0.7)',
                                            padding: '5px 15px',
                                            borderRadius: '20px',
                                            border: '1px solid rgba(255, 215, 0, 0.3)'
                                        }}>
                                            {zoomModal.currentIndex + 1} / {zoomModal.images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
