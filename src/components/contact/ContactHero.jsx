import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ContactHero() {
  return (
    <section style={{ 
      padding: 'clamp(6rem, 12vw, 10rem) 5% 4rem', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{
          display: 'inline-block',
          background: 'rgba(141, 159, 112, 0.15)',
          color: '#8d9f70',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          padding: '0.4rem 1rem',
          borderRadius: 50,
          marginBottom: '2rem',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          Start Your Project
        </div>
        
        <h1 style={{ 
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3.5rem, 8vw, 7rem)', 
          lineHeight: 1, 
          letterSpacing: '-2px',
          color: '#0f291e',
          marginBottom: '1.5rem',
          fontWeight: 700
        }}>
          Let's Build <br />
          <em style={{ fontStyle: 'italic', color: '#8d9f70' }}>Something</em> Amazing.
        </h1>
        
        <p style={{ 
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
          color: 'rgba(15, 41, 30, 0.6)',
          maxWidth: '500px', 
          margin: '0 auto 3rem auto',
          lineHeight: 1.6
        }}>
          Tell us about your business. We'll help you build the right website, brand, app, or digital system.
        </p>

      </motion.div>
    </section>
  );
}
