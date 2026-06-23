import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import blitzImage from '../../assets/company/blitz.png';

const PROJECTS = [
  {
    title: 'Blitz India',
    category: 'Industrial Engineering Solutions',
    image: blitzImage,
    color: '#0f291e',
  },
  {
    title: 'Lumina Skincare',
    category: 'E-Commerce Website',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop',
    color: '#9AAF42',
  },
  {
    title: 'Urban Spaces',
    category: 'Real Estate Platform',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    color: '#3d6b4f',
  },
  {
    title: 'Nova Tech',
    category: 'SaaS Marketing Site',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    color: '#6aaf70',
  },
];

function ProjectCard({ project, index, scrollYProgress }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;
  
  /* Parallax effect for images based on scroll */
  const yOffset = useTransform(scrollYProgress, [0, 1], [isEven ? 0 : 50, isEven ? -50 : 0]);
  const y = useSpring(yOffset, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      style={{
        position: 'relative',
        y,
        marginTop: isEven ? 0 : '4rem',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        aspectRatio: '4/5',
        boxShadow: hovered ? '0 32px 64px rgba(0,0,0,0.15)' : '0 12px 32px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
      }}>
        {/* Image with zoom effect */}
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay */}
        <motion.div
          animate={{ opacity: hovered ? 0.4 : 0.1 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, ${project.color}, transparent)`,
            mixBlendMode: 'multiply',
          }}
        />

        {/* Hover Text Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-dark)',
          }}>
            <ArrowUpRight size={28} />
          </div>
        </motion.div>
      </div>

      {/* Info outside card */}
      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 700,
            color: 'var(--accent-dark)',
            lineHeight: 1.1,
            marginBottom: '0.4rem',
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            fontWeight: 500,
          }}>
            {project.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedWorkSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-80px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={sectionRef} style={{ background: '#f6f5f2', padding: 'clamp(4rem, 8vw, 8rem) 5%', maxWidth: '100%' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(154,175,66,0.1)',
              color: 'var(--accent-light)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              padding: '0.4rem 1rem',
              borderRadius: 50,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Selected Works
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
              color: 'var(--accent-dark)',
              maxWidth: 500,
            }}
          >
            Digital <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Experiences</em> That Inspire.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ pointerEvents: 'auto' }}
        >
          <Link
            to="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.9rem 1.8rem',
              borderRadius: 50,
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              color: 'white',
              background: 'var(--accent-dark)',
              boxShadow: '0 8px 24px rgba(15,41,30,0.2)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            View Portfolio <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
        gap: '3rem 2rem',
      }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
      </div>
    </section>
  );
}
