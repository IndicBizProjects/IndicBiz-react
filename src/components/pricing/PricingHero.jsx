import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedCanvas } from '../ui/animated-canvas';

export default function PricingHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'clamp(100px, 14vw, 140px)',
        paddingBottom: '4rem',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background Animated Canvas Lines */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6, zIndex: 0, pointerEvents: 'none' }}>
        <AnimatedCanvas 
          count={40} 
          lineColor={"rgba(141, 159, 112, 0.5)"} // Soft Olive
          heightMultiplier={0.35}
          speed={0.00003}
          lineWidth={1.5}
          direction={"right-to-left"}
          className="absolute inset-0"
        />
        <AnimatedCanvas 
          count={40} 
          lineColor={"rgba(15, 41, 30, 0.15)"} // Soft Deep Green
          heightMultiplier={0.35}
          speed={0.00003}
          lineWidth={1.5}
          direction={"left-to-right"}
          className="absolute inset-0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: 800, 
          padding: '3rem', 
          y, 
          opacity,
          background: 'rgba(246, 245, 242, 0.6)',
          backdropFilter: 'blur(8px)',
          borderRadius: '32px',
          border: '1px solid rgba(141, 159, 112, 0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
        }}
      >
        <div style={{
          display: 'inline-block',
          background: 'rgba(141,159,112,0.15)',
          color: '#8d9f70',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          padding: '0.4rem 1.25rem',
          borderRadius: 50,
          marginBottom: '2rem',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          Clear Investment
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3.5rem, 7vw, 6rem)',
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: '-2px',
          color: '#0f291e',
          marginBottom: '1.5rem',
        }}>
          Value Over <br /><em style={{ color: '#8d9f70', fontStyle: 'italic' }}>Volume.</em>
        </h1>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
          color: 'rgba(15, 41, 30, 0.6)',
          lineHeight: 1.7,
          maxWidth: 600,
          margin: '0 auto',
        }}>
          Transparent pricing without hidden fees. We believe in creating high-end digital products that deliver measurable return on investment.
        </p>
      </motion.div>
    </section>
  );
}
