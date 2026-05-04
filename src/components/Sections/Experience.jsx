import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <SectionTitle title="EXPERIENCE"/>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                borderLeft: '2px solid var(--color-accent)',
                                paddingLeft: '2rem',
                                paddingBottom: '3rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-11px',
                                top: '0',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: 'var(--color-accent)',
                                border: '4px solid var(--color-bg-secondary)'
                            }} />

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                            <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.1rem' }}>{exp.company}</h4>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem', fontStyle: 'italic', fontWeight: 'bold' }}>{exp.period}</p>
                            <p style={{ color: '#BFC9D1' }}>{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
