import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '../../app/router'
import { WORK_PROJECTS } from '../../data/work'
import { HOME_SECTIONS } from '../../data/home'

const FEATURED = WORK_PROJECTS.slice(0, 3)

export default function WorkPreview() {
  return (
    <section
      style={{
        background: 'var(--bg-canvas)',
        padding: 'clamp(5rem, 11vw, 9.5rem) var(--layout-gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--layout-wide)', margin: '0 auto' }}>
        {/* Header */}
        <HeaderRow />

        {/* Work items */}
        <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {FEATURED.map((project, i) => (
            <WorkRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HeaderRow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}
    >
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: '0.9rem',
          }}
        >
          {HOME_SECTIONS.work.eyebrow}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.04,
            color: 'var(--ink)',
            margin: 0,
          }}
        >
          {HOME_SECTIONS.work.title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.18 }}
      >
        <Link
          to={HOME_SECTIONS.work.actionTo}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink-mid)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--line-mid)',
            paddingBottom: '2px',
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-mid)'; e.currentTarget.style.borderColor = 'var(--line-mid)' }}
        >
          {HOME_SECTIONS.work.actionLabel} →
        </Link>
      </motion.div>
    </div>
  )
}

function WorkRow({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/work/${project.id}`}
        style={{ display: 'block', textDecoration: 'none' }}
      >
        <motion.article
          whileHover={{ x: 5, backgroundColor: `${project.accent}08` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '4.5rem 1fr auto',
            gap: '1.5rem 2rem',
            alignItems: 'center',
            padding: 'clamp(1.75rem, 3.5vw, 2.25rem) 1rem',
            borderTop: '1px solid var(--line)',
            cursor: 'pointer',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              color: 'var(--ink-soft)',
            }}
          >
            {project.number}
          </span>

          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.35rem, 2.4vw, 1.9rem)',
                letterSpacing: '-0.03em',
                margin: '0 0 0.35rem',
                color: 'var(--ink)',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: 'var(--ink-soft)',
                margin: 0,
              }}
            >
              {project.category} · {project.focus.slice(0, 2).join(' · ')}
            </p>
          </div>

          <motion.svg
            whileHover={{ x: 3, y: -3 }}
            style={{ color: 'var(--ink-soft)', flexShrink: 0, transition: 'color 0.2s' }}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path d="M3 15L15 3M15 3H7M15 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.article>
      </Link>
    </motion.div>
  )
}
