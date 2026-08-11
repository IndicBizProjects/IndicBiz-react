import { motion } from 'framer-motion';

export default function GlowingButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: '0.75rem 2rem',
        background: 'linear-gradient(45deg, #FF007A, #7A00FF)',
        border: 'none',
        borderRadius: '50px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 10px 20px rgba(122, 0, 255, 0.4)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      Hover Me!
    </motion.button>
  );
}
