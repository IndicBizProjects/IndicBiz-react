import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We dive deep into your brand, market, and audience to build a comprehensive roadmap that aligns with your ultimate business goals.'
  },
  {
    num: '02',
    title: 'Design & Architecture',
    desc: 'Translating strategy into stunning visual identities and user interfaces. We map out wireframes, user journeys, and high-fidelity prototypes.'
  },
  {
    num: '03',
    title: 'Development & Engineering',
    desc: 'Writing clean, scalable code. We build robust front-end experiences and powerful back-end systems using modern, performant stacks.'
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'Rigorous QA testing followed by a seamless deployment. Post-launch, we monitor analytics and optimize for continuous growth and SEO.'
  }
];

export default function ServicesProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{ padding: '8rem 5%', background: 'white', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              display: 'inline-block',
              background: 'rgba(154,175,66,0.1)',
              color: 'var(--accent-dark)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '0.4rem 1.25rem',
              borderRadius: 50,
              marginBottom: '1rem',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Our Workflow
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: 'var(--accent-dark)',
              letterSpacing: '-1.5px',
              lineHeight: 1.1
            }}>
              How We <em style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>Execute.</em>
            </h2>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                padding: '2rem',
                borderLeft: '1px solid rgba(15,41,30,0.1)',
              }}
            >
              {/* Dot on the timeline */}
              <div style={{
                position: 'absolute', top: '2.5rem', left: '-5px',
                width: 9, height: 9, borderRadius: '50%',
                background: 'var(--accent-light)',
                boxShadow: '0 0 0 4px white'
              }} />

              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2rem',
                fontWeight: 800,
                color: 'rgba(15,41,30,0.05)',
                marginBottom: '1rem',
                lineHeight: 1
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--accent-dark)',
                marginBottom: '1rem'
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
