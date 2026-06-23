import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Minus, Zap } from 'lucide-react';

const FEATURES = [
  {
    category: 'Design & Strategy',
    items: [
      { name: 'Custom UI/UX Design', standard: true, premium: true, custom: true },
      { name: 'Brand Identity Integration', standard: true, premium: true, custom: true },
      { name: 'Wireframing & Prototyping', standard: false, premium: true, custom: true },
      { name: 'User Journey Mapping', standard: false, premium: true, custom: true },
      { name: 'A/B Testing Strategies', standard: false, premium: false, custom: true },
    ]
  },
  {
    category: 'Development & Engineering',
    items: [
      { name: 'Pages Included', standard: 'Up to 5', premium: 'Up to 15', custom: 'Unlimited' },
      { name: 'Mobile Responsive', standard: true, premium: true, custom: true },
      { name: 'Premium Animations (GSAP)', standard: false, premium: true, custom: true },
      { name: '3D WebGL Elements', standard: false, premium: 'Basic', custom: 'Advanced' },
      { name: 'Custom CMS Integration', standard: false, premium: true, custom: true },
      { name: 'E-commerce Capability', standard: false, premium: false, custom: true },
    ]
  },
  {
    category: 'Marketing & SEO',
    items: [
      { name: 'On-Page SEO Setup', standard: true, premium: true, custom: true },
      { name: 'Performance Optimization', standard: 'Standard (90+ score)', premium: 'Extreme (95+ score)', custom: 'Enterprise Scale' },
      { name: 'Google Analytics Setup', standard: true, premium: true, custom: true },
      { name: 'Advanced Event Tracking', standard: false, premium: true, custom: true },
      { name: 'CRM Integration', standard: false, premium: false, custom: true },
    ]
  },
  {
    category: 'Support & Maintenance',
    items: [
      { name: 'Included Support', standard: '1 Month', premium: '3 Months', custom: '12 Months' },
      { name: 'Response Time', standard: '48 Hours', premium: '24 Hours', custom: 'Dedicated Slack' },
      { name: 'Monthly Audits', standard: false, premium: true, custom: true },
    ]
  }
];

export default function PricingDetailed() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const renderValue = (val) => {
    if (val === true) return <Check size={20} color="var(--accent-light)" />;
    if (val === false) return <Minus size={20} color="rgba(0,0,0,0.15)" />;
    return <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 600 }}>{val}</span>;
  };

  return (
    <section ref={ref} style={{ padding: '4rem 5% 8rem', maxWidth: 1200, margin: '0 auto' }}>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
         <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: 'var(--accent-dark)',
          marginBottom: '1rem',
          letterSpacing: '-1.5px'
        }}>
          Compare <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Features</em>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'white',
          borderRadius: 32,
          border: '1px solid rgba(15,41,30,0.08)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.04)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div style={{ minWidth: 800 }}>
          {/* Table Header */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr 1fr 1fr', 
            padding: '2rem 1rem',
            borderBottom: '1px solid rgba(15,41,30,0.1)',
            background: 'rgba(154,175,66,0.03)',
            alignItems: 'end',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}>
            <div style={{ padding: '0 1.5rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent-dark)' }}>
                Plan Details
              </h3>
            </div>
            
            {['Standard', 'Premium', 'Custom'].map((plan, idx) => (
              <div 
                key={plan} 
                style={{ textAlign: 'center', padding: '0 1rem', position: 'relative' }}
                onMouseEnter={() => setHoveredColumn(idx)}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                {plan === 'Premium' && (
                  <div style={{ 
                    position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--accent-light)', color: 'white', fontSize: '0.65rem',
                    fontWeight: 700, padding: '0.2rem 0.8rem', borderRadius: 50,
                    textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', gap: 4, alignItems: 'center'
                  }}>
                    <Zap size={10} fill="white" /> Popular
                  </div>
                )}
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-dark)', marginBottom: '0.2rem' }}>
                  {plan}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {plan === 'Standard' ? '₹15k - ₹30k' : plan === 'Premium' ? '₹40k - ₹80k' : 'Tailored Quote'}
                </p>
              </div>
            ))}
          </div>

          {/* Table Body */}
          {FEATURES.map((section, sIdx) => (
            <div key={section.category}>
              <div style={{ 
                padding: '1.5rem 2.5rem 1rem', 
                background: 'rgba(15,41,30,0.02)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--accent-dark)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {section.category}
              </div>

              {section.items.map((item, iIdx) => (
                <div 
                  key={item.name}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '2fr 1fr 1fr 1fr', 
                    padding: '1.25rem 1rem',
                    borderBottom: (sIdx === FEATURES.length - 1 && iIdx === section.items.length - 1) ? 'none' : '1px solid rgba(15,41,30,0.06)',
                    background: hoveredColumn !== null ? 'transparent' : 'white',
                    transition: 'background 0.3s',
                  }}
                >
                  <div style={{ 
                    padding: '0 1.5rem', 
                    fontFamily: "'Space Grotesk', sans-serif", 
                    fontSize: '0.95rem', 
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}>
                    {item.name}
                  </div>
                  
                  <div style={{ 
                    textAlign: 'center', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: hoveredColumn === 0 ? 'rgba(154,175,66,0.05)' : 'transparent',
                    borderRadius: 8, transition: 'background 0.3s'
                  }}>
                    {renderValue(item.standard)}
                  </div>
                  <div style={{ 
                    textAlign: 'center', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: hoveredColumn === 1 ? 'rgba(154,175,66,0.05)' : 'transparent',
                    borderRadius: 8, transition: 'background 0.3s'
                  }}>
                    {renderValue(item.premium)}
                  </div>
                  <div style={{ 
                    textAlign: 'center', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: hoveredColumn === 2 ? 'rgba(154,175,66,0.05)' : 'transparent',
                    borderRadius: 8, transition: 'background 0.3s'
                  }}>
                    {renderValue(item.custom)}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Table Footer Actions */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr 1fr 1fr', 
            padding: '2rem 1rem',
            background: 'rgba(154,175,66,0.03)',
            borderTop: '1px solid rgba(15,41,30,0.1)',
          }}>
            <div></div>
            {['/services', '/services', '/contact'].map((link, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '0 1rem' }}>
                <Link
                  to={link}
                  style={{
                    display: 'inline-block',
                    padding: '0.8rem 1.5rem',
                    background: idx === 1 ? 'var(--accent-dark)' : 'transparent',
                    color: idx === 1 ? 'white' : 'var(--accent-dark)',
                    border: idx === 1 ? 'none' : '1px solid rgba(15,41,30,0.2)',
                    borderRadius: 50,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Choose {['Standard', 'Premium', 'Custom'][idx]}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
