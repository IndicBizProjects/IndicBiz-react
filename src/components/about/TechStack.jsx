import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Text3D, Center } from '@react-three/drei';

/* Floating 3D brand/tech logo sphere */
function TechSphere({ position, color, label, speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01 * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.3;
  });
  return (
    <Float speed={speed * 1.5} floatIntensity={1} rotationIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <MeshDistortMaterial color={color} distort={0.25} speed={2} metalness={0.9} roughness={0.05} />
      </mesh>
    </Float>
  );
}

function TechSceneInner() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 4, 3]} intensity={6} color="#9AAF42" />
      <pointLight position={[-3, -2, 2]} intensity={3} color="#ffffff" />
      <TechSphere position={[0, 0, 0]}     color="#0f291e" speed={1.0} />
      <TechSphere position={[1.8, 0.8, -0.5]}  color="#9AAF42" speed={0.8} />
      <TechSphere position={[-1.6, -0.6, 0.3]} color="#3d6b4f" speed={1.3} />
      <TechSphere position={[0.8, -1.4, 0.8]}  color="#6aaf70" speed={0.9} />
      <TechSphere position={[-0.7, 1.4, -0.4]} color="#c5d87a" speed={1.1} />
    </>
  );
}

const TECHS = [
  { name: 'React',         cat: 'Frontend'   },
  { name: 'Node.js',       cat: 'Backend'    },
  { name: 'Three.js',      cat: '3D / WebGL' },
  { name: 'GSAP',          cat: 'Animation'  },
  { name: 'Figma',         cat: 'Design'     },
  { name: 'Framer',        cat: 'Motion'     },
  { name: 'Spline',        cat: '3D Design'  },
  { name: 'TypeScript',    cat: 'Language'   },
  { name: 'MongoDB',       cat: 'Database'   },
  { name: 'Supabase',      cat: 'Backend'    },
  { name: 'Vercel',        cat: 'Deploy'     },
  { name: 'Tailwind',      cat: 'Styling'    },
];

function TechPill({ item, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08, y: -4 }}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
        background: 'white',
        border: '1px solid rgba(15,41,30,0.08)',
        borderRadius: 16,
        padding: '0.9rem 1.4rem',
        cursor: 'default',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.25s ease',
      }}
    >
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.9rem',
        fontWeight: 700,
        color: 'var(--accent-dark)',
        letterSpacing: '-0.3px',
      }}>
        {item.name}
      </span>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.65rem',
        color: 'var(--accent-light)',
        fontWeight: 600,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      }}>
        {item.cat}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 6rem) 5%',
      background: 'var(--bg-color)',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: '3rem',
        alignItems: 'center',
      }}>
        {/* Left: text + pills */}
        <div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
              Our Toolkit
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              color: 'var(--accent-dark)',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
            }}>
              Cutting-Edge <br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Technology</em>,<br />
              Human Craft.
            </h2>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: 380,
            }}>
              We use the best modern tools so your digital product is fast, scalable, and beautiful — built to last.
            </p>
          </motion.div>

          {/* Pills grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {TECHS.map((t, i) => <TechPill key={t.name} item={t} index={i} />)}
          </div>
        </div>

        {/* Right: 3D sphere cluster */}
        <div style={{ height: 360, borderRadius: 24, overflow: 'hidden', background: 'var(--section-dark)' }}>
          <Canvas camera={{ position: [0, 0, 5.5], fov: 55 }}>
            <TechSceneInner />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
