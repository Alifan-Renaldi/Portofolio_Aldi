import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import SectionTitle from '../Common/SectionTitle';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'justify',
                    }}
                >
                    <SectionTitle title="ABOUT ME"/>

                    <div className="about-text" style={{ maxWidth: '800px' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8rem' }}>
                            {portfolioData.about.bio}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
