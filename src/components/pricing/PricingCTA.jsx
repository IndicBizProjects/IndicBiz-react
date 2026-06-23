import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PricingCTA() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: '2rem 5%', maxWidth: 1200, margin: '0 auto' }}>
      <div
        ref={ref}
        style={{
          background: 'var(--section-dark)',
          borderRadius: 40,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 400,
          boxShadow: '0 24px 64px rgba(15,41,30,0.2)',
          textAlign: 'center',
          padding: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        {/* Background Gradients */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 
            'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(154,175,66,0.3) 0%, transparent 70%),' +
            'radial-gradient(ellipse 40% 60% at 0% 0%, rgba(15,41,30,0.8) 0%, transparent 60%)',
        }} />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}
        >
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-1.5px',
            color: 'white',
            marginBottom: '1.5rem',
          }}>
            Still Unsure Which Plan <br/>
            <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Fits Your Needs?</em>
          </h2>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            marginBottom: '3rem',
            maxWidth: 500,
            margin: '0 auto 3rem auto',
          }}>
            Book a free 30-minute discovery call. We'll audit your current digital presence and recommend the exact path forward.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', pointerEvents: 'auto' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.2rem 2.5rem',
                background: 'white',
                color: 'var(--accent-dark)',
                borderRadius: 50,
                fontWeight: 700,
                fontSize: '1.1rem',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              Book Discovery Call <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
