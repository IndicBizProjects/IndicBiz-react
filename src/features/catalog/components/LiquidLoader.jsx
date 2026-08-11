import { motion } from 'framer-motion';

export default function LiquidLoader() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: ['0%', '-50%', '0%'],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
          style={{
            width: '15px',
            height: '15px',
            backgroundColor: '#FF3366',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
}
