import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const VALUES = [
  {
    Icon: Target,
    title: 'Strategic Vision',
    text: 'We look beyond immediate requirements to ensure solutions align with your long-term goals.',
    orbColor: '#0f291e',
    accent: '#0f291e',
  },
  {
    Icon: Award,
    title: 'Design Excellence',
    text: 'Beautiful, functional design is fundamental to success. Every pixel, every interaction matters.',
    orbColor: '#9AAF42',
    accent: '#9AAF42',
  },
  {
    Icon: Users,
    title: 'Collaborative Spirit',
    text: 'We work as an extension of your team — transparent, communicative, always aligned.',
    orbColor: '#0f291e',
    accent: '#0f291e',
  },
  {
    Icon: Lightbulb,
    title: 'Innovation First',
    text: 'We stay ahead of trends, using modern technology to deliver future-proof digital products.',
    orbColor: '#9AAF42',
    accent: '#9AAF42',
  },
];

function ValueOrb({ color, hovered }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += hovered ? 0.025 : 0.008;
    ref.current.scale.setScalar(hovered ? 1.12 : 1);
  });
  return (
    <Float speed={hovered ? 3 : 1.5} floatIntensity={hovered ? 1.5 : 0.8}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.55, 0.18, 128, 16]} />
        <MeshDistortMaterial
          color={color}
          distort={hovered ? 0.4 : 0.2}
          speed={hovered ? 3 : 1.5}
          metalness={0.85}
          roughness={0.05}
        />
      </mesh>
    </Float>
  );
}

function ValueCard({ value, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      style={{
        background: hovered ? value.accent : 'white',
        border: `1px solid ${hovered ? 'transparent' : 'rgba(15,41,30,0.07)'}`,
        borderRadius: 24,
        padding: '2.5rem 2rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hovered
          ? `0 24px 50px ${value.accent}40`
          : '0 4px 20px rgba(0,0,0,0.04)',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* 3D torus knot */}
      <div style={{ width: '100%', height: 130, marginBottom: '1.5rem' }}>
        <Canvas camera={{ position: [0, 0, 3], fov: 55 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 3, 2]} intensity={5} color={value.orbColor === '#9AAF42' ? '#c5d87a' : '#6aff9e'} />
          <Environment preset="studio" />
          <ValueOrb color={hovered ? '#ffffff' : value.orbColor} hovered={hovered} />
        </Canvas>
      </div>

      {/* Icon badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 12,
        background: hovered ? 'rgba(255,255,255,0.15)' : `${value.accent}15`,
        marginBottom: '1rem',
        transition: 'background 0.4s ease',
      }}>
        <value.Icon size={22} color={hovered ? 'white' : value.accent} />
      </div>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
        fontWeight: 700,
        marginBottom: '0.65rem',
        color: hovered ? 'white' : 'var(--accent-dark)',
        letterSpacing: '-0.5px',
        transition: 'color 0.4s ease',
      }}>
        {value.title}
      </h3>

      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.88rem',
        lineHeight: 1.65,
        color: hovered ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)',
        transition: 'color 0.4s ease',
      }}>
        {value.text}
      </p>
    </motion.div>
  );
}

export default function CoreValues() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 6rem) 5%',
      background: 'var(--bg-color)',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{
          display: 'inline-block',
          background: 'rgba(154,175,66,0.1)',
          color: 'var(--accent-light)',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          padding: '0.4rem 1rem',
          borderRadius: 50,
          marginBottom: '1.25rem',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          What Drives Us
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
          fontWeight: 700,
          letterSpacing: '-1.5px',
          color: 'var(--accent-dark)',
          lineHeight: 1.05,
        }}>
          Our Core <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Values</em>
        </h2>
      </motion.div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
        gap: '1.5rem',
      }}>
        {VALUES.map((v, i) => <ValueCard key={v.title} value={v} index={i} />)}
      </div>
    </section>
  );
}
