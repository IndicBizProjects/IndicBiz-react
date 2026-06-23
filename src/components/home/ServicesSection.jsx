import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layout, Smartphone, PenTool, Package, FileText, TrendingUp } from 'lucide-react';

const SERVICES = [
  {
    title: 'Websites',
    desc: 'Standard, Premium & Custom websites that convert visitors into customers.',
    icon: Layout,
  },
  {
    title: 'Mobile Apps',
    desc: 'Scalable, secure & high performance apps for iOS & Android.',
    icon: Smartphone,
  },
  {
    title: 'Branding',
    desc: 'Logos, brand identity, brand voice & guidelines that make you unforgettable.',
    icon: PenTool,
  },
  {
    title: 'Design',
    desc: 'Packaging, visiting cards, letterheads & marketing materials that speak quality.',
    icon: Package,
  },
  {
    title: 'Business Assets',
    desc: 'Company profiles, templates, pitch decks & everything your business needs.',
    icon: FileText,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const { title, desc, icon: Icon } = service;

  // Bento logic: Make the 4th item (index 3) and 7th item (index 6) span 2 columns to break the symmetry
  const isWide = index === 3 || index === 6;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className={`bento-card ${isWide ? 'bento-wide' : ''}`}
      style={{
        background: 'white',
        borderRadius: 24,
        padding: '3rem 2.5rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 320,
        boxShadow: hovered ? '0 24px 48px rgba(0,0,0,0.06)' : '0 4px 24px rgba(0,0,0,0.02)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div>
        {/* Top Icon Block */}
        <div
          style={{
            width: 52,
            height: 52,
            background: '#f4f5f0',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f291e',
            marginBottom: '2rem',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        >
          <Icon size={24} strokeWidth={1.5} color={hovered ? '#9AAF42' : '#0f291e'} style={{ transition: 'color 0.3s ease' }} />
        </div>

        {/* Text Content */}
        <h3 style={{ 
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2rem', 
          fontWeight: 600, 
          marginBottom: '0.75rem', 
          color: '#0f291e',
          letterSpacing: '-0.5px'
        }}>
          {title}
        </h3>
        <p style={{ 
          fontFamily: "'Space Grotesk', sans-serif",
          color: '#666666', 
          fontSize: '0.95rem', 
          lineHeight: 1.6, 
          fontWeight: 500,
        }}>
          {desc}
        </p>
      </div>

      {/* Bottom Arrow Circle */}
      <div
        style={{
          marginTop: '2.5rem',
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: hovered ? '#fcfdfa' : 'transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <ArrowUpRight 
          size={18} 
          color="#0f291e"
          style={{ 
            transform: hovered ? 'translate(2px, -2px)' : 'none', 
            transition: 'transform 0.3s ease' 
          }} 
        />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ 
      background: '#f6f5f2', 
      padding: '6rem 5% 8rem', 
    }}>
      {/* Responsive styles for Bento Grid spanning */}
      <style>{`
        .bento-card { grid-column: span 1; }
        @media (min-width: 768px) {
          .bento-card.bento-wide { grid-column: span 2; }
        }
      `}</style>
      
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Header Area */}
        <div
          ref={ref}
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
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Capabilities Badge */}
            <div
              style={{
                display: 'inline-block',
                background: '#eceee3',
                color: '#8b9d3b',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                padding: '0.45rem 1.25rem',
                borderRadius: 50,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Capabilities
            </div>
            
            {/* Main Title */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 600,
                letterSpacing: '-2px',
                lineHeight: 1.05,
                color: '#0f291e',
              }}
            >
              Digital <br />
              <em style={{ fontStyle: 'italic', color: '#9AAF42' }}>Craftsmanship</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ pointerEvents: 'auto' }}
          >
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.8rem',
                borderRadius: 50,
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                color: '#0f291e',
                border: '1px solid #dcdad4',
                background: 'transparent',
                transition: 'all 0.3s ease',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              View All Services <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* 2x2 Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
