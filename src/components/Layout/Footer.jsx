import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            marginTop: '4rem',
            borderTop: '1px solid var(--color-glass-border)'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}><FaGithub /></a>
                    <a href="https://linkedin.com/in/alifan-renaldi-4b8498180" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}><FaLinkedin /></a>
                    <a href="mailto:aldi24ter@gmail.com" style={{ fontSize: '1.5rem' }}><FaEnvelope /></a>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
