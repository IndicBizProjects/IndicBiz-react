import { motion } from 'framer-motion';

export default function NeonCard() {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)' }}
      style={{
        width: '200px',
        height: '250px',
        background: '#1A1A2E',
        borderRadius: '16px',
        padding: '1.5rem',
        border: '1px solid rgba(0, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#E0E0E0',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #00FFFF, #0088FF)', marginBottom: '1rem' }} />
      <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#00FFFF' }}>Hover Me</h3>
      <p style={{ fontSize: '0.8rem', textAlign: 'center', opacity: 0.7, marginTop: '0.5rem' }}>Interact to see the neon glow effect.</p>
    </motion.div>
  );
}
