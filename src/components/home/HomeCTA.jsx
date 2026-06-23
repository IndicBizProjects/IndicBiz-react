import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 4rem) 5%', maxWidth: 1200, margin: '0 auto', marginBottom: '4rem' }}>
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
          minHeight: 480,
          boxShadow: '0 24px 64px rgba(15,41,30,0.2)',
          textAlign: 'center',
          padding: 'clamp(3rem, 6vw, 6rem)',
        }}
      >
        {/* Background Gradients */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 
            'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(154,175,66,0.3) 0%, transparent 70%),' +
            'radial-gradient(ellipse 40% 60% at 0% 0%, rgba(15,41,30,0.8) 0%, transparent 60%)',
        }} />

        {/* Noise overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }} />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            padding: '0.4rem 1.25rem',
            borderRadius: 50,
            marginBottom: '2rem',
            fontFamily: "'Space Grotesk', sans-serif",
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            Ready To Start
          </div>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-2px',
            color: 'white',
            marginBottom: '1.5rem',
          }}>
            Ready to <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Transform</em>
            <br />Your Digital Presence?
          </h2>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            marginBottom: '3.5rem',
            maxWidth: 600,
            margin: '0 auto 3.5rem auto',
          }}>
            Join the 50+ businesses that have accelerated their growth with IndicBiz. Let's build something exceptional together.
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
              Start Your Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
