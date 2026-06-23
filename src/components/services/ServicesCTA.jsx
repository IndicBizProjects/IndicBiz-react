import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{ padding: '6rem 5% 4rem', background: 'var(--bg-color)' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        background: 'var(--accent-dark)',
        borderRadius: 40,
        padding: 'clamp(4rem, 8vw, 6rem) 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 30px 60px rgba(15,41,30,0.15)'
      }}>
        
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(154,175,66,0.2) 0%, transparent 70%)'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}
        >
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            marginBottom: '1.5rem'
          }}>
            Ready to Build Your <br />
            <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Digital Future?</em>
          </h2>
          
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            marginBottom: '3rem',
            maxWidth: 500,
            margin: '0 auto 3rem auto'
          }}>
            Whether you need a complete rebrand or a high-performance web application, our team is ready to deliver.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '1.2rem 2.5rem',
              background: 'white', color: 'var(--accent-dark)',
              borderRadius: 50, fontWeight: 700, fontSize: '1.1rem',
              textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Let's Talk <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
