import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '../../app/router'
import NeoCard from '../../components/primitives/NeoCard'
import GlowOrb from '../../components/visuals/GlowOrb'
import { SERVICES } from '../../data/services'
import { HOME_SECTIONS } from '../../data/home'

const SERVICE_ICONS = {
  'brand-identity': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  'web-experiences': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
  'product-design': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  ),
  'growth-seo': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
    </svg>
  ),
}

export default function ServicesStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      style={{
        background: '#ffffff',
        padding: 'clamp(5rem, 11vw, 9.5rem) var(--layout-gutter)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GlowOrb color="#C8F04A" size="35rem" top="-6rem" right="-4rem" opacity={0.05} />

      <div ref={ref} style={{ maxWidth: 'var(--layout-wide)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '0.9rem' }}
            >
              {HOME_SECTIONS.services.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', letterSpacing: '-0.04em', lineHeight: 1.04, color: 'var(--ink)', margin: 0 }}
            >
              {HOME_SECTIONS.services.title}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/services"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mid)', textDecoration: 'none', borderBottom: '1px solid var(--line-mid)', paddingBottom: '2px' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-mid)' }}
            >
              All services →
            </Link>
          </motion.div>
        </div>

        {/* NeoCard grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '1.25rem',
          }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/services/${service.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <NeoCard
                  accent={i === 1}
                  style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)', minHeight: '14rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ color: i === 1 ? 'var(--accent-dark)' : 'var(--ink-soft)' }}>
                      {SERVICE_ICONS[service.id]}
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--ink-soft)', opacity: 0.6 }}>
                      {service.number}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '0.55rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: '30ch' }}>
                      {service.short}
                    </p>
                  </div>
                </NeoCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
