import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaPalette, FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import SectionTitle from '../Common/SectionTitle';

const iconMap = {
    "React": <FaReact size={40} color="#61DAFB" />,
    "Node.js": <FaNodeJs size={40} color="#339933" />,
    "UI/UX Design": <FaPalette size={40} color="#FF61F6" />,
    "JavaScript": <FaJs size={40} color="#F7DF1E" />,
    "TypeScript": <SiTypescript size={40} color="#3178C6" />,
    "SQL": <FaDatabase size={40} color="#00758F" />,
    "HTML": <FaHtml5 size={40} color="#E34F26" />,
    "CSS": <FaCss3Alt size={40} color="#1572B6" />,
    "PHP": <FaPhp size={40} color="#777BB4" />,
    "Laravel": <FaLaravel size={40} color="#FF2D20" />,
    "Figma": <FaFigma size={40} color="#F24E1E" />,
};

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <SectionTitle title="SKILLS"/>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gap: '1rem'
                }}>
                    <style>{`
                    .skills-grid { grid-template-columns: 1fr; }
                    @media (min-width: 768px) {
                        .skills-grid { grid-template-columns: 1fr 1fr; }
                    }
                `}</style>
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -5, 
                                boxShadow: '0 10px 30px -10px rgba(255, 215, 0, 0.2)', 
                                borderColor: '#FFD700' 
                            }}
                            className="glass-panel"
                            style={{
                                padding: '1.5rem',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                minHeight: 'auto', // Allow content to determine height, grid will stretch
                                height: '100%',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', width: '100%' }}>
                                <div style={{ filter: 'drop-shadow(0 0 8px rgba(255,232,0,0.2))' }}>
                                    {iconMap[skill.name] || <div style={{ fontSize: '2.5rem' }}>💻</div>}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{skill.name}</h3>
                            </div>

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                flexGrow: 1,
                                textAlign: 'left',
                                width: '100%'
                            }}>
                                {skill.description}
                            </p>

                            <div style={{ width: '100%', marginTop: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                                    <span>Proficiency</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: '6px',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '3px',
                                    overflow: 'hidden'
                                }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        style={{
                                            height: '100%',
                                            background: 'var(--color-accent)',
                                            boxShadow: '0 0 10px var(--color-accent)'
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
