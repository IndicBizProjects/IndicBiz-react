import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html, MeshDistortMaterial, Environment, Line } from '@react-three/drei';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import * as THREE from 'three';
import AnimatedTextCycle from '../ui/animated-text-cycle';

const ORBIT_RADIUS = 2.8;

const NODES = [
  { name: 'Website', position: [0, ORBIT_RADIUS, 0], color: '#9AAF42' },
  { name: 'Apps', position: [ORBIT_RADIUS, 0, 0], color: '#e6ecdf' },
  { name: 'Branding', position: [0, -ORBIT_RADIUS, 0], color: '#9AAF42' },
  { name: 'Growth', position: [-ORBIT_RADIUS, 0, 0], color: '#e6ecdf' },
];

/* ── 3D Orbit Graph (Scroll & Mouse Tracking) ───────────────────────── */
function HeroEcosystem({ scrollYProgress }) {
  const groupRef = useRef();
  const orbitRef = useRef();
  const { viewport } = useThree();

  // Smooth scroll values
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  
  // Target rotation for mouse tracking
  const mouseTarget = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    const scrollVal = smoothScroll.get();
    const t = state.clock.elapsedTime;
    
    // Smoothly track mouse position for subtle parallax tilt
    mouseTarget.current.x = THREE.MathUtils.lerp(mouseTarget.current.x, state.pointer.x * 0.5, 0.1);
    mouseTarget.current.y = THREE.MathUtils.lerp(mouseTarget.current.y, state.pointer.y * 0.5, 0.1);
    
    // Idle rotation for the ecosystem ring
    if (orbitRef.current) {
      orbitRef.current.rotation.y = t * 0.12;
      orbitRef.current.rotation.z = Math.sin(t * 0.3) * 0.03;
    }
    
    // Combine Scroll + Mouse Tracking for the entire group
    if (groupRef.current) {
      // Base position pushed to the right
      const baseX = 4.2;
      const baseY = 0;
      
      // Scroll translations (moves down and right as you scroll)
      groupRef.current.position.x = baseX + (scrollVal * 4);
      groupRef.current.position.y = baseY - (scrollVal * 2);
      
      // Scale down smoothly on scroll
      groupRef.current.scale.setScalar(1 - scrollVal * 0.35);
      
      // Rotation = Base Tilt + Mouse Tracking + Scroll Tilt
      groupRef.current.rotation.x = 0.3 - mouseTarget.current.y + (scrollVal * Math.PI * 0.3);
      groupRef.current.rotation.y = -0.2 + mouseTarget.current.x;
    }
  });

  return (
    <group ref={groupRef} position={[4.2, 0, -2]}>
      
      {/* Central Core Node */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh scale={1.4}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial 
            color="#091a13" 
            distort={0.15} 
            speed={1.5} 
            metalness={0.9} 
            roughness={0.05} 
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Glowing inner core */}
        <mesh scale={1.4}>
          <sphereGeometry args={[0.95, 32, 32]} />
          <meshBasicMaterial color="#9AAF42" wireframe transparent opacity={0.1} />
        </mesh>
      </Float>

      {/* Orbiting Nodes & Connections */}
      <group ref={orbitRef}>
        
        {/* The Main Orbit Track */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[ORBIT_RADIUS, 0.015, 64, 128]} />
          <meshPhysicalMaterial 
            color="#9AAF42" 
            transmission={0.5}
            transparent 
            opacity={0.6} 
            roughness={0.2}
          />
        </mesh>

        {NODES.map((node, i) => (
          <group key={i} position={node.position}>
            {/* Connecting line */}
            <Line
              points={[[0, 0, 0], [-node.position[0], -node.position[1], -node.position[2]]]}
              color="rgba(154,175,66,0.3)"
              lineWidth={2}
              transparent
            />
            
            {/* Inner Emissive Core */}
            <mesh>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial 
                color={node.color} 
                emissive={node.color}
                emissiveIntensity={2}
                toneMapped={false}
              />
            </mesh>

            {/* Outer Glass Sphere */}
            <mesh>
              <sphereGeometry args={[0.35, 32, 32]} />
              <meshPhysicalMaterial 
                color={node.color} 
                roughness={0.1} 
                transmission={0.9}
                thickness={0.5}
                clearcoat={1}
                transparent
                opacity={0.8}
              />
            </mesh>
            
            {/* Glowing ring around node */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.55, 0.008, 16, 64]} />
              <meshBasicMaterial color="#9AAF42" transparent opacity={0.5} />
            </mesh>

            {/* Premium DOM Typography */}
            <Html center position={[0, -0.7, 0]} zIndexRange={[100, 0]}>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--accent-dark)',
                letterSpacing: '3px',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(8px)',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid rgba(154,175,66,0.2)',
                whiteSpace: 'nowrap'
              }}>
                {node.name.toUpperCase()}
              </div>
            </Html>
          </group>
        ))}
        
        {/* Subtle floating data particles */}
        {[...Array(15)].map((_, i) => {
          const angle = (i / 15) * Math.PI * 2;
          const radius = ORBIT_RADIUS + (Math.random() * 0.4 - 0.2);
          return (
            <mesh
              key={`particle-${i}`}
              position={[Math.cos(angle) * radius, (Math.random() - 0.5) * 1.2, Math.sin(angle) * radius]}
            >
              <sphereGeometry args={[Math.random() * 0.03 + 0.015]} />
              <meshBasicMaterial color={i % 3 === 0 ? "#ffffff" : "#9AAF42"} transparent opacity={Math.random() * 0.5 + 0.3} />
            </mesh>
          );
        })}
      </group>
      
    </group>
  );
}

function HeroScene({ scrollYProgress }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#9AAF42" />
      <pointLight position={[5, 2, 2]} intensity={4} color="#c5d87a" />
      <Environment preset="studio" />
      <HeroEcosystem scrollYProgress={scrollYProgress} />
    </>
  );
}

/* ── Word reveal ─────────────────────────────────────────────────────────── */
function SplitReveal({ text, delay = 0, style = {}, className = '' }) {
  const words = text.split(' ');
  return (
    <span style={{ display: 'inline' }}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={className}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em', ...style }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ['start start', 'end start'] 
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.7, delay: 0.1, ease: 'power3.out' });
      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 0.8, delay: 0.9, ease: 'power3.out' });
      gsap.from('.hero-ctas', { opacity: 0, y: 20, duration: 0.8, delay: 1.1, ease: 'power3.out' });
      gsap.from('.hero-trust', { opacity: 0, y: 16, duration: 0.8, delay: 1.3, ease: 'power3.out' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 'clamp(100px,14vw,140px)',
        paddingBottom: '4rem',
      }}
    >
      {/* ── 3D canvas — absolute inside hero section, controlled by scroll & mouse ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'auto' /* Enabled to capture mouse movements for tracking */
        }}
      >
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} style={{ background: 'transparent' }}>
          <HeroScene scrollYProgress={scrollYProgress} />
        </Canvas>
      </motion.div>

      {/* ── Aurora overlay (masking behind text) ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background:
          'radial-gradient(ellipse 60% 70% at 20% 50%, rgba(246,244,240,0.95) 0%, rgba(246,244,240,0.8) 40%, transparent 70%),' +
          'radial-gradient(ellipse 40% 60% at 0% 0%, rgba(246,244,240,0.7) 0%, transparent 50%)',
      }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 5%', maxWidth: 720, width: '100%', pointerEvents: 'none' }}>
        
        {/* Badge */}
        <div className="hero-badge" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(154,175,66,0.12)', border: '1px solid rgba(154,175,66,0.35)',
          color: 'var(--accent-light)', borderRadius: 50,
          padding: '0.4rem 1rem', fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.75rem',
          backdropFilter: 'blur(8px)',
          fontFamily: "'Space Grotesk', sans-serif",
          pointerEvents: 'auto'
        }}>
          <Sparkles size={12} /> Details That Define
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
          fontWeight: 700,
          lineHeight: 0.9,
          letterSpacing: '-3px',
          color: 'var(--accent-dark)',
          marginBottom: '1.75rem',
          overflow: 'hidden',
          pointerEvents: 'auto'
        }}>
          <div style={{ overflow: 'hidden' }}>
            <SplitReveal text="Building" delay={0.15} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline-block', fontStyle: 'italic', color: 'var(--accent-light)' }}
            >
              <AnimatedTextCycle
                words={['Businesses.', 'Brands.', 'Websites.', 'Apps.', 'Growth.']}
                interval={2500}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
              />
            </motion.span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <SplitReveal text="Not Just" delay={0.6}
              style={{
                background: 'linear-gradient(135deg, var(--accent-dark) 0%, var(--accent-light) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
            />
            <SplitReveal text="Websites." delay={0.75}
              style={{
                background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent-dark) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
            />
          </div>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          color: 'var(--text-secondary)',
          maxWidth: 480, lineHeight: 1.75, marginBottom: '2.5rem',
          pointerEvents: 'auto'
        }}>
          From branding and websites to apps and digital growth — IndicBiz helps businesses
          become brands people trust and remember.
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem', pointerEvents: 'auto' }}>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.95rem 2rem',
              background: 'var(--accent-dark)', color: 'white',
              borderRadius: 50, fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: '0 12px 32px rgba(15,41,30,0.3)',
            }}>
              Start Your Project <ArrowUpRight size={16} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.95rem 2rem',
              background: 'rgba(255,255,255,0.7)', color: 'var(--accent-dark)',
              borderRadius: 50, fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif",
              border: '1px solid rgba(15,41,30,0.12)', backdropFilter: 'blur(12px)',
            }}>
              View Services <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
