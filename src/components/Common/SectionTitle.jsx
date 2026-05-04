import { motion } from 'framer-motion';

const SectionTitle = ({ title, highlight }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
                fontSize: '3rem', 
                marginBottom: '3rem', 
                textAlign: 'center', 
                color: '#FFD700', 
                textShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
            }}
        >
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </motion.h2>
    );
};

export default SectionTitle;
