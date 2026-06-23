import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Star, Zap } from 'lucide-react';

const PLANS = [
  {
    name: 'Standard',
    price: '₹15,000',
    range: '– ₹30,000',
    tagline: 'Perfect to get started',
    features: ['Up to 5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO', '1 Month Support'],
    cta: '/services',
    popular: false,
    color: '#0f291e',
  },
  {
    name: 'Premium',
    price: '₹40,000',
    range: '– ₹80,000',
    tagline: 'Most chosen by growing brands',
    features: ['Up to 15 Pages', 'CMS / Blog', 'Advanced SEO', 'Speed Optimization', '3 Months Support'],
    cta: '/services',
    popular: true,
    color: '#9AAF42',
  },
  {
    name: 'Custom',
    price: 'Tailored',
    range: 'Quote',
    tagline: 'Enterprise-grade solutions',
    features: ['Unlimited Pages', 'Custom Functionality', 'Integrations', 'Advanced Features', 'Priority Support'],
    cta: '/contact',
    popular: false,
    color: '#0f291e',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

function PlanCard({ plan, index }) {
  const [hovered, setHovered] = useState(false);
  const { name, price, range, tagline, features, cta, popular } = plan;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: popular ? -12 : -8, transition: { duration: 0.4, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        background: popular ? 'var(--accent-dark)' : 'white',
        border: popular ? '1px solid rgba(154,175,66,0.3)' : '1px solid rgba(15,41,30,0.08)',
        borderRadius: 32,
        padding: 'clamp(2.5rem, 4vw, 3rem) clamp(2rem, 3vw, 2.5rem)',
        overflow: 'hidden',
        transform: popular ? 'translateY(-16px)' : undefined,
        boxShadow: popular
          ? '0 32px 64px rgba(15,41,30,0.25)'
          : hovered ? '0 24px 48px rgba(0,0,0,0.06)' : '0 4px 12px rgba(0,0,0,0.02)',
        transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Popular glow halo */}
      {popular && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(154,175,66,0.25) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Hover corner blob for light cards */}
      {!popular && (
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at top right, rgba(15,41,30,0.03) 0%, transparent 50%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
        }} />
      )}

      {/* Badge */}
      {popular && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'var(--accent-light)',
          color: 'white',
          fontSize: '0.7rem',
          fontWeight: 800,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          padding: '0.4rem 1.25rem',
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          boxShadow: '0 8px 24px rgba(154,175,66,0.4)',
          fontFamily: "'Space Grotesk', sans-serif",
          zIndex: 2,
        }}>
          <Star size={12} fill="white" /> Most Popular
        </div>
      )}

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '2.5rem' }}>
        <p style={{ 
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.85rem', 
          fontWeight: 700, 
          letterSpacing: '1.5px', 
          textTransform: 'uppercase', 
          color: popular ? 'rgba(255,255,255,0.6)' : 'var(--text-secondary)', 
          marginBottom: '1rem' 
        }}>
          {name}
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', 
            fontWeight: 700, 
            color: popular ? 'white' : 'var(--accent-dark)', 
            lineHeight: 1,
            letterSpacing: '-1.5px' 
          }}>
            {price}
          </span>
          <span style={{ 
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.1rem', 
            color: popular ? 'rgba(255,255,255,0.5)' : 'var(--text-secondary)', 
            fontWeight: 500 
          }}>
            {range}
          </span>
        </div>
        <p style={{ 
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1rem', 
          color: popular ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)' 
        }}>
          {tagline}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: popular ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)', marginBottom: '2.5rem' }} />

      {/* Features */}
      <ul style={{ listStyle: 'none', marginBottom: '3rem', position: 'relative', zIndex: 1, flex: 1 }}>
        {features.map((f) => (
          <li key={f} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            marginBottom: '1.25rem', 
            fontSize: '1.05rem', 
            fontFamily: "'Space Grotesk', sans-serif",
            color: popular ? 'rgba(255,255,255,0.9)' : 'var(--text-primary)' 
          }}>
            <CheckCircle2 size={18} style={{ color: popular ? 'var(--accent-light)' : 'var(--accent-light)', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ position: 'relative', zIndex: 1, pointerEvents: 'auto', marginTop: 'auto' }}>
        <Link
          to={cta}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            width: '100%',
            padding: '1.2rem',
            borderRadius: 50,
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            fontFamily: "'Space Grotesk', sans-serif",
            background: popular
              ? 'linear-gradient(135deg, var(--accent-light), #7a9a35)'
              : 'transparent',
            color: popular ? 'white' : 'var(--accent-dark)',
            border: popular ? 'none' : '1.5px solid rgba(15,41,30,0.2)',
            boxShadow: popular ? '0 12px 32px rgba(154,175,66,0.35)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          {name === 'Custom' ? 'Let\'s Talk' : 'Get Started'} <ArrowUpRight size={18} />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 5%', maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: '4.5rem' }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(154,175,66,0.1)',
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
          <Zap size={14} /> Website Packages
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            lineHeight: 1,
            color: 'var(--accent-dark)',
            marginBottom: '1.25rem',
          }}
        >
          Transparent <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Pricing</em>
        </h2>
        <p style={{ 
          fontFamily: "'Space Grotesk', sans-serif",
          color: 'var(--text-secondary)', 
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          maxWidth: 500,
          margin: '0 auto'
        }}>
          Custom solutions for custom goals — crafted with precision.
        </p>
      </motion.div>

      {/* Plans grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '2.5rem',
        alignItems: 'stretch',
      }}>
        {PLANS.map((p, i) => <PlanCard key={p.name} plan={p} index={i} />)}
      </div>
    </section>
  );
}
