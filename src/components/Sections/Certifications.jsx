import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import SectionTitle from '../Common/SectionTitle';

const Carousel = ({ items, title, handleImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1); // Default 1 for column layout

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000); 

        return () => clearInterval(interval);
    }, [currentIndex, itemsPerPage, items.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    // Calculate visible items for seamless looping
    const getVisibleItems = () => {
        const visibleItems = [];
        const totalItems = items.length;
        if (totalItems === 0) return visibleItems;

        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % totalItems;
            visibleItems.push(items[index]);
        }
        return visibleItems;
    };

    const visibleItems = getVisibleItems();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                    fontSize: '2rem',
                    color: '#fff',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderBottom: '2px solid #FFD700',
                    display: 'inline-block',
                    alignSelf: 'center',
                    paddingBottom: '0.5rem'
                }}
            >
                {title}
            </motion.h3>

            <div style={{ position: 'relative', padding: '0 50px' }}>
                {/* Previous Button */}
                <button 
                    onClick={prevSlide}
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid #FFD700',
                        color: '#FFD700',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#FFD700'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#FFD700'; }}
                >
                    &#10094;
                </button>

                {/* Slides Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr', // Always 1 column per section
                    gap: '2rem',
                    transition: 'all 0.5s ease-in-out'
                }}>
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item, index) => (
                            <motion.div
                                key={`${item.title}-${index}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 10px 30px -10px rgba(255, 215, 0, 0.2)',
                                    borderColor: '#FFD700'
                                }}
                                style={{
                                    background: '#111',
                                    border: '1px solid #333',
                                    borderRadius: '16px',
                                    padding: '0', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    position: 'relative'
                                }}
                            >
                                {/* Decorative Top Line */}
                                <div style={{ height: '4px', background: 'linear-gradient(90deg, #FFD700, #B8860B)', width: '100%' }}></div>

                                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <div 
                                        onClick={() => handleImageClick(item.image)}
                                        style={{ 
                                            marginBottom: '1.5rem', 
                                            height: '250px', 
                                            background: '#0a0a0a', 
                                            borderRadius: '8px', 
                                            overflow: 'hidden', 
                                            position: 'relative',
                                            border: '1px solid #222',
                                            cursor: item.image ? 'pointer' : 'default'
                                        }}
                                    >
                                        {item.image ? (
                                            <motion.img 
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                                src={item.image} 
                                                alt={item.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                                                <div style={{ 
                                                    width: '60px', 
                                                    height: '60px', 
                                                    borderRadius: '50%', 
                                                    background: 'rgba(255, 215, 0, 0.1)', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    color: '#FFD700',
                                                    fontSize: '1.5rem',
                                                    border: '1px solid rgba(255, 215, 0, 0.2)'
                                                }}>
                                                    📜
                                                </div>
                                                <span style={{ color: '#444', fontSize: '0.9rem', letterSpacing: '1px' }}>CERTIFICATE</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h3 style={{ 
                                        marginBottom: '1rem', 
                                        fontSize: '1.5rem', 
                                        color: '#fff', 
                                        fontWeight: '700' 
                                    }}>
                                        {item.title}
                                    </h3>
                                    
                                    <p style={{ 
                                        color: '#888', 
                                        marginBottom: '2rem', 
                                        flexGrow: 1, 
                                        fontSize: '0.95rem', 
                                        lineHeight: '1.6' 
                                    }}>
                                        {item.description}
                                    </p>
                                    
                                    <div style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        borderTop: '1px solid #222',
                                        paddingTop: '1.5rem'
                                    }}>
                                        <span style={{ color: '#666', fontSize: '0.85rem' }}>ISSUED BY</span>
                                        <span style={{
                                            fontSize: '0.9rem',
                                            padding: '6px 16px',
                                            borderRadius: '4px',
                                            background: '#FFD700',
                                            color: '#000',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {item.issuer}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Next Button */}
                <button 
                    onClick={nextSlide}
                    style={{
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid #FFD700',
                        color: '#FFD700',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#FFD700'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#FFD700'; }}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

const Certifications = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = (image) => {
        if (image) {
            setSelectedImage(image);
            setIsZoomed(false);
        }
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsZoomed(false);
    };

    const toggleZoom = (e) => {
        e.stopPropagation();
        setIsZoomed(!isZoomed);
    };

    return (
        <section id="certifications" className="section" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.03) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionTitle title="ACHIEVEMENTS" />

                <div 
                    className="cert-course-container"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '4rem'
                    }}
                >
                    <Carousel 
                        items={portfolioData.certifications || []} 
                        title="Certifications" 
                        handleImageClick={handleImageClick}
                    />
                    
                    <Carousel 
                        items={portfolioData.courses || []} 
                        title="Courses" 
                        handleImageClick={handleImageClick}
                    />
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onClick={handleCloseModal}
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
                        
                        <motion.img
                            src={selectedImage}
                            alt="Certificate Fullscreen"
                            onClick={toggleZoom}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ 
                                scale: isZoomed ? 2 : 1, 
                                opacity: 1,
                                x: isZoomed ? 0 : 0, 
                                y: isZoomed ? 0 : 0 
                            }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                objectFit: 'contain',
                                cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                                borderRadius: '8px',
                                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                            }}
                        />
                        
                        {!isZoomed && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    color: '#888',
                                    background: 'rgba(0,0,0,0.5)',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    pointerEvents: 'none'
                                }}
                            >
                                Click image to zoom
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
