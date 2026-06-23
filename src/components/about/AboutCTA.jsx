import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { ArrowUpRight } from 'lucide-react';

function CTAOrb() {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.18;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.4) * 0.25;
  });
  return (
    <Float speed={1.5} floatIntensity={1.2} rotationIntensity={0.4}>
      <mesh ref={ref} scale={2.5}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#9AAF42"
          distort={0.35}
          speed={1.5}
          metalness={0.9}
          roughness={0.02}
          transmission={0.12}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function AboutCTA() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 4rem) 5%', maxWidth: 1200, margin: '0 auto' }}>
      <div
        ref={ref}
        style={{
          background: 'var(--section-dark)',
          borderRadius: 32,
          overflow: 'hidden',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          alignItems: 'center',
          minHeight: 420,
        }}
      >
        {/* Aurora overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(154,175,66,0.25) 0%, transparent 60%),' +
            'radial-gradient(ellipse 40% 60% at 20% 30%, rgba(154,175,66,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', position: 'relative', zIndex: 1 }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(154,175,66,0.15)',
            color: '#a8b88d',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            padding: '0.4rem 1rem',
            borderRadius: 50,
            marginBottom: '1.5rem',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Let's Create Together
          </div>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-2px',
            color: 'white',
            marginBottom: '1.5rem',
          }}>
            Ready to Build
            <br />
            <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Something</em>
            <br />
            Extraordinary?
          </h2>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: 380,
          }}>
            Whether you need a brand identity, a stunning website, or a full digital ecosystem —
            IndicBiz has the team and talent to make it happen.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', pointerEvents: 'auto' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, var(--accent-light), #7a9a35)',
                  color: 'white',
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: '0 8px 24px rgba(154,175,66,0.35)',
                }}
              >
                Start a Project <ArrowUpRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
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
                  fontFamily: "'Space Grotesk', sans-serif",
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                See Our Work <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 3D Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: 380, position: 'relative', zIndex: 1 }}
        >
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[3, 3, 3]} intensity={6} color="#9AAF42" />
            <pointLight position={[-3, -2, 1]} intensity={3} color="#ffffff" />
            <Environment preset="studio" />
            <CTAOrb />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
