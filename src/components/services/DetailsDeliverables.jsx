import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function DetailsDeliverables({ service }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{ padding: '6rem 5%', background: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
        
        {/* Overview Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '3rem' }}
        >
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: 'var(--accent-dark)',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              marginBottom: '1.5rem'
            }}>
              The <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Philosophy.</em>
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}>
              {service.overview}
            </p>
          </div>
        </motion.div>

        <div style={{ width: '100%', height: '1px', background: 'rgba(15,41,30,0.1)' }} />

        {/* Deliverables Grid */}
        <div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--accent-dark)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '3rem'
          }}>
            Key Deliverables
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
            {service.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-color)',
                  borderRadius: 24,
                  border: '1px solid rgba(15,41,30,0.05)'
                }}
              >
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--accent-dark)',
                  marginBottom: '1rem'
                }}>
                  {item.title}
                </div>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
