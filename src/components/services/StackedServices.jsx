import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, PenTool, Smartphone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: '01',
    title: 'Brand Identity',
    description: 'We craft memorable brands that resonate. From logo design and typography systems to comprehensive brand guidelines, we build the visual foundation of your business.',
    icon: <PenTool size={40} color="var(--accent-light)" />,
    color: '#0f291e',
    textColor: 'white',
    link: '/services/brand-identity'
  },
  {
    id: '02',
    title: 'Web Experiences',
    description: 'High-performance, immersive websites that convert. We specialize in custom WebGL, complex React architectures, and headless CMS integrations.',
    icon: <Code size={40} color="var(--accent-light)" />,
    color: '#1a3a2a',
    textColor: 'white',
    link: '/services/web-experiences'
  },
  {
    id: '03',
    title: 'Product Design',
    description: 'User-centric UI/UX design for web and mobile applications. We map complex user journeys into intuitive, beautiful, and accessible interfaces.',
    icon: <Smartphone size={40} color="var(--accent-light)" />,
    color: '#f6f4f0',
    textColor: 'var(--accent-dark)',
    link: '/services/product-design'
  },
  {
    id: '04',
    title: 'Growth & SEO',
    description: 'Data-driven marketing strategies to scale your digital presence. Technical SEO, performance optimization, and conversion rate optimization (CRO).',
    icon: <Target size={40} color="var(--accent-light)" />,
    color: '#9AAF42',
    textColor: 'var(--accent-dark)',
    link: '/services/growth-seo'
  }
];

function StackedCard({ service, index, progress, targetScale }) {
  const containerRef = useRef(null);

  // Map the overall scroll progress to individual card properties
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);
  const opacity = useTransform(progress, [index * 0.25, 1], [1, 0.5]);
  
  return (
    <div 
      ref={containerRef}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
      }}
    >
      <motion.div
        style={{
          background: service.color,
          color: service.textColor,
          width: '100%',
          maxWidth: 1000,
          borderRadius: 40,
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          scale,
          opacity,
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
          transformOrigin: 'top center',
          position: 'relative',
          top: `calc(-10vh + ${index * 25}px)`
        }}
        className="service-card-grid"
      >
        {/* Left Side */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 700,
            opacity: 0.5,
            marginBottom: '1rem'
          }}>
            {service.id}
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-1.5px',
            marginBottom: '1.5rem'
          }}>
            {service.title}
          </h2>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            opacity: 0.8,
            lineHeight: 1.6,
            maxWidth: 400,
            marginBottom: '3rem'
          }}>
            {service.description}
          </p>

          <motion.div whileHover={{ x: 5 }} style={{ display: 'inline-block' }}>
            <Link to={service.link} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: service.textColor,
              textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              borderBottom: `1px solid ${service.textColor === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
              paddingBottom: '0.5rem',
            }}>
              Discuss this service <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Icon/Graphic */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: service.textColor === 'white' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
          borderRadius: 30,
          aspectRatio: '1',
          maxWidth: 400,
          width: '100%',
          justifySelf: 'end'
        }}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {service.icon}
          </motion.div>
        </div>

        {/* Inline CSS for the grid layout based on screen size */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .service-card-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}} />
      </motion.div>
    </div>
  );
}

export default function StackedServices() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} style={{ position: 'relative', paddingBottom: '10vh' }}>
      <div style={{ padding: '0 5%' }}>
        {SERVICES.map((service, i) => {
          const targetScale = 1 - ((SERVICES.length - i) * 0.05);
          return (
            <StackedCard 
              key={i} 
              index={i} 
              service={service} 
              progress={scrollYProgress} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
