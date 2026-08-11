import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { WORK_HERO, WORK_FILTERS, WORK_PROJECTS, WORK_SECTIONS, WORK_CTA } from '../../data/work'
import { Link } from '../../app/router'
import ImageTrail from '../../components/motion/ImageTrail'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function WorkContent() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter(p => p.serviceId === activeFilter)

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-canvas)',
          backgroundImage: 'radial-gradient(var(--line) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <ImageTrail 
          items={[
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop'
          ]}
        >
          <div style={{ padding: 'calc(var(--header-height) + clamp(4rem, 8vw, 7rem)) var(--layout-gutter) clamp(4rem, 8vw, 6rem)', maxWidth: 'var(--layout-max)', margin: '0 auto', position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
            <FadeIn>
              <Eyebrow>{WORK_HERO.eyebrow}</Eyebrow>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'var(--text-hero)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.0,
                  color: 'var(--ink)',
                  maxWidth: '18ch',
                  marginTop: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                {WORK_HERO.title}
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-mid)', maxWidth: '52ch', lineHeight: 1.7 }}>
                {WORK_HERO.description}
              </p>
            </FadeIn>
          </div>
        </ImageTrail>
      </section>

      {/* Projects */}
      <section style={{ background: 'var(--bg-canvas)', padding: 'clamp(4rem, 8vw, 7rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>

          {/* Filters */}
          <FadeIn style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} role="group" aria-label="Filter by service">
              {WORK_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    border: `1.5px solid ${activeFilter === filter.id ? 'var(--ink)' : 'var(--line-mid)'}`,
                    background: activeFilter === filter.id ? 'var(--ink)' : 'transparent',
                    color: activeFilter === filter.id ? 'var(--bg-canvas)' : 'var(--ink-mid)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Project list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <FadeInStagger stagger={0.1}>
                {filtered.map((project, i) => (
                  <StaggerItem key={project.id}>
                    <WorkProjectCard project={project} index={i} />
                  </StaggerItem>
                ))}
              </FadeInStagger>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-dark)', color: 'var(--ink-inv)', padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn>
            <Eyebrow light>{WORK_CTA.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-headline)', letterSpacing: '-0.04em', color: 'var(--ink-inv)', marginTop: '0.75rem', marginBottom: '1.25rem', maxWidth: '18ch' }}>
              {WORK_CTA.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-inv-soft)', maxWidth: '44ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {WORK_CTA.description}
            </p>
            <Link
              to={WORK_CTA.action.to}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', borderRadius: 'var(--radius-pill)', background: 'var(--accent)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
            >
              {WORK_CTA.action.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}

function WorkProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/work/${project.id}`} style={{ display: 'block', textDecoration: 'none' }}>
      <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="view"
      style={{
        display: 'grid',
        gridTemplateColumns: '3rem 1fr',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        padding: 'clamp(2rem, 4vw, 3rem) 0',
        borderBottom: '1px solid var(--line)',
        cursor: 'pointer',
      }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          color: 'var(--accent-dark)',
          paddingTop: '0.2rem',
        }}
      >
        {project.number}
      </span>

      {/* Content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                marginBottom: '0.25rem',
                transition: 'color 0.2s',
              }}
            >
              {project.title}
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: project.accent,
              }}
            >
              {project.category}
            </span>
          </div>
          <motion.svg
            animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
            width="20" height="20" viewBox="0 0 20 20" fill="none"
            style={{ color: 'var(--ink-soft)', flexShrink: 0, marginTop: '0.3rem' }}
          >
            <path d="M4 16L16 4M16 4H8M16 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </div>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: '60ch', marginBottom: '1.25rem' }}>
          {project.summary}
        </p>

        {/* Challenge / Approach / Outcome */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'Challenge', text: project.challenge },
            { label: 'Approach', text: project.approach },
            { label: 'Outcome', text: project.outcome },
          ].map((item) => (
            <div key={item.label}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '0.4rem' }}>
                {item.label}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      </article>
    </Link>
  )
}
