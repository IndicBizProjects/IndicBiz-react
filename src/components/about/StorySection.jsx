import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const MILESTONES = [
  {
    year: 'The Origin',
    title: '6 B.Tech Graduates',
    desc: 'We are a group of six working professionals who came together with a shared vision to build something meaningful outside the daily grind.',
  },
  {
    year: 'The Mission',
    title: 'Passion Over Profit',
    desc: 'We noticed businesses struggling to afford premium websites. We decided to offer our skills at incredibly low prices, driven by dedication, not money.',
  },
  {
    year: 'The Promise',
    title: 'Decency & Dedication',
    desc: 'We often do not even charge for the sites we build. We simply want to help people, support local businesses, and showcase our collective strengths.',
  },
  {
    year: 'The Future',
    title: 'For The People',
    desc: 'We are here for you and your business, not for ours. Our ultimate goal is to make world-class digital experiences accessible to everyone.',
  },
];

function TimelineOrb({ color, size = 0.6 }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y += 0.012;
      ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.7) * 0.2;
    }
  });
  return (
    <Float speed={2} floatIntensity={1}>
      <mesh ref={ref} scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color={color} distort={0.3} speed={2.5} metalness={0.8} roughness={0.1} />
      </mesh>
    </Float>
  );
}

function MilestoneCard({ milestone, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 60px 1fr',
        alignItems: 'center',
        marginBottom: '3rem',
      }}
    >
      {/* Left content */}
      <div style={{ textAlign: 'right', paddingRight: '2rem', ...(isEven ? {} : { opacity: 0, pointerEvents: 'none' }) }}>
        {isEven && (
          <>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: 'rgba(154,175,66,0.2)',
              lineHeight: 1,
              marginBottom: '0.25rem',
            }}>
              {milestone.year}
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 700,
              color: 'var(--accent-dark)',
              marginBottom: '0.5rem',
            }}>
              {milestone.title}
            </h3>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}>
              {milestone.desc}
            </p>
          </>
        )}
      </div>

      {/* Center orb */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        <div style={{ width: 1, flex: 1, background: 'linear-gradient(to bottom, transparent, rgba(154,175,66,0.3))' }} />
        <div style={{ width: 54, height: 54, position: 'relative' }}>
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 2, 2]} intensity={4} color="#9AAF42" />
            <TimelineOrb color={index === MILESTONES.length - 1 ? '#9AAF42' : '#0f291e'} size={index === MILESTONES.length - 1 ? 0.8 : 0.55} />
          </Canvas>
        </div>
        <div style={{ width: 1, flex: 1, background: 'linear-gradient(to bottom, rgba(154,175,66,0.3), transparent)' }} />
      </div>

      {/* Right content */}
      <div style={{ paddingLeft: '2rem', ...(!isEven ? {} : { opacity: 0, pointerEvents: 'none' }) }}>
        {!isEven && (
          <>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: 'rgba(154,175,66,0.2)',
              lineHeight: 1,
              marginBottom: '0.25rem',
            }}>
              {milestone.year}
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 700,
              color: 'var(--accent-dark)',
              marginBottom: '0.5rem',
            }}>
              {milestone.title}
            </h3>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}>
              {milestone.desc}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function StorySection() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 5%', maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
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
          Our Journey
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 700,
          letterSpacing: '-1.5px',
          color: 'var(--accent-dark)',
          lineHeight: 1,
        }}>
          Built with <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Passion</em>.<br />For the People.
        </h2>
      </motion.div>

      {/* Timeline */}
      {MILESTONES.map((m, i) => (
        <MilestoneCard key={m.year} milestone={m} index={i} />
      ))}
    </section>
  );
}
