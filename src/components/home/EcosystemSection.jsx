import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layout, Smartphone, PenTool, Package, Megaphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  { Icon: Layout,    label: 'Website',    deg: 270 },
  { Icon: Smartphone,label: 'Apps',       deg: 342 },
  { Icon: PenTool,   label: 'Branding',   deg: 54  },
  { Icon: Megaphone, label: 'Marketing',  deg: 126 },
  { Icon: Package,   label: 'Packaging',  deg: 198 },
];

const STATS = [
  { value: 50,  suffix: '+', label: 'Businesses Served' },
  { value: 100, suffix: '%', label: 'Success Rate' },
  { value: 12,  suffix: '',  label: 'Awards Won' },
  { value: 5,   suffix: '★', label: 'Client Rating' },
];

function useCountUp(ref, target, suffix, inView) {
  useEffect(() => {
    if (!inView || !ref.current) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power3.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.val) + suffix;
        }
      },
    });
    return () => tween.kill();
  }, [inView, target, suffix, ref]);
}

function StatItem({ value, suffix, label, index }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-20px' });
  useCountUp(ref, value, suffix, inView);
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ textAlign: 'center' }}
    >
      <div
        ref={ref}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1,
          letterSpacing: '-1px',
        }}
      >
        0{suffix}
      </div>
      <p style={{ 
        fontFamily: "'Space Grotesk', sans-serif",
        color: 'rgba(255,255,255,0.5)', 
        fontSize: '0.75rem', 
        marginTop: '0.5rem', 
        fontWeight: 600, 
        letterSpacing: '1.5px', 
        textTransform: 'uppercase' 
      }}>
        {label}
      </p>
    </motion.div>
  );
}

/* ── Ecosystem Diagram (Scroll-driven rotation) ───────────────────────── */

export default function EcosystemSection() {
  const sectionRef = useRef(null);
  const diagramRef = useRef(null);
  const nodesRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!diagramRef.current || !nodesRef.current || !sectionRef.current) return;
    
    // Rotate the entire diagram based on scroll position!
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, // Smooth scrubbing
      }
    });

    // Rotate the ring container clockwise
    tl.to(diagramRef.current, { rotation: 180, ease: 'none' }, 0);
    // Counter-rotate the individual nodes on their own axes so the text stays perfectly upright!
    tl.to('.ecosystem-node', { rotation: -180, ease: 'none' }, 0);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div style={{ background: '#f6f5f2', paddingBottom: '2rem' }}>
      <section
        ref={sectionRef}
        style={{
          background: '#0a1710', // Deep premium dark green
          borderRadius: 48,
          padding: 'clamp(4rem, 8vw, 7rem) 5%',
          margin: '0 3%',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 32px 64px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }}>
        
        {/* ── Top: text + diagram ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ 
              display: 'inline-block', 
              background: 'rgba(154,175,66,0.15)', 
              color: 'var(--accent-light)', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              letterSpacing: '2.5px', 
              textTransform: 'uppercase', 
              padding: '0.45rem 1rem', 
              borderRadius: 50, 
              marginBottom: '1.5rem',
              fontFamily: "'Space Grotesk', sans-serif" 
            }}>
              Connected Ecosystem
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-2px',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              One Partner.<br />
              <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Every Solution.</em>
            </h2>
            <p style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.65)', 
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', 
              lineHeight: 1.7, 
              marginBottom: '2.5rem', 
              maxWidth: 440 
            }}>
              We create a connected digital ecosystem that helps your business grow 10× faster — from idea to execution, beautifully crafted and technically sound.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', pointerEvents: 'auto' }}>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)',
                  transition: 'background 0.3s ease',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                Discover How <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D + 2D Orbit Diagram */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 360, height: 360 }}>
              
              {/* Central 3D Orb - Rotating with the container */}
              <div ref={diagramRef} style={{ position: 'absolute', inset: 0 }}>
                {/* 3D Orb removed per request */}

                {/* Rotating ring SVG */}
                <svg width="360" height="360" viewBox="0 0 360 360" style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
                  <circle cx="180" cy="180" r="150" fill="none" stroke="rgba(154,175,66,0.2)" strokeWidth="1.5" strokeDasharray="4 8" />
                  <circle cx="180" cy="180" r="150" fill="none" stroke="rgba(154,175,66,0.05)" strokeWidth="40" />
                </svg>

                {/* Nodes container (counter-rotates so icons stay upright) */}
                <div ref={nodesRef} style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
                  {NODES.map(({ Icon, label, deg }) => {
                    const rad = (deg * Math.PI) / 180;
                    const r = 150;
                    const cx = 180 + r * Math.cos(rad);
                    const cy = 180 + r * Math.sin(rad);
                    return (
                      <div
                        key={label}
                        className="ecosystem-node"
                        style={{
                          position: 'absolute',
                          left: cx - 35,
                          top: cy - 35,
                          width: 70,
                          height: 70,
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '50%',
                          backdropFilter: 'blur(8px)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 4,
                          fontSize: '0.6rem',
                          color: 'white',
                          fontWeight: 700,
                          fontFamily: "'Space Grotesk', sans-serif",
                          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                        }}
                      >
                        <Icon size={20} color="var(--accent-light)" strokeWidth={1.8} />
                        <span style={{ letterSpacing: '0.5px' }}>{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '3rem',
          paddingTop: '3.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {STATS.map((s, i) => <StatItem key={s.label} {...s} index={i} />)}
        </div>
      </div>
      </section>
    </div>
  );
}
