import React from 'react';
import { motion } from 'framer-motion';

export default function DetailsHero({ service }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '65vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(120px, 15vw, 160px) 5% 4rem',
      backgroundColor: service.color,
      color: service.textColor,
      overflow: 'hidden',
    }}>
      
      {/* Subtle overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 60% 80% at 50% 120%, rgba(255,255,255,0.05) 0%, transparent 70%)`
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 2, maxWidth: 1000, margin: '0 auto', width: '100%', textAlign: 'center' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            background: service.textColor === 'white' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            padding: '1.5rem',
            borderRadius: 30,
            display: 'inline-flex'
          }}>
            {service.icon}
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-2px',
          marginBottom: '1.5rem',
        }}>
          {service.title}
        </h1>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
          opacity: 0.8,
          lineHeight: 1.6,
          maxWidth: 600,
          margin: '0 auto',
        }}>
          {service.subtitle}
        </p>
      </motion.div>
    </section>
  );
}
