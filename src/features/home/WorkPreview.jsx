import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '../../app/router'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { WORK_PROJECTS } from '../../data/work'

// Project card images — use placeholders until real images arrive
const PROJECT_IMAGES = {
  'editorial-platform': '/work/editorial-platform.svg',
  'operations-dashboard': '/work/operations-dashboard.svg',
  'hospitality-launch': '/work/hospitality-launch.svg',
}

const FEATURED = WORK_PROJECTS.slice(0, 3)

export default function WorkPreview() {
  return (
    <section
      style={{
        background: 'var(--bg-canvas)',
        padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>

        {/* Header */}
        <FadeIn>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            <div>
              <Eyebrow style={{ marginBottom: '1rem' }}>Selected work</Eyebrow>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'var(--text-headline)',
                  letterSpacing: '-0.04em',
                  color: 'var(--ink)',
                  marginTop: '0.75rem',
                }}
              >
                Problems we are<br />equipped to solve.
              </h2>
            </div>
            <Link
              to="/work"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--ink-mid)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexShrink: 0,
                borderBottom: '1px solid var(--line-mid)',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              View all work →
            </Link>
          </div>
        </FadeIn>

        {/* Project list */}
        <FadeInStagger stagger={0.12}>
          {FEATURED.map((project, i) => (
            <StaggerItem key={project.id}>
              <WorkCard project={project} index={i} />
            </StaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}

function WorkCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.article
      ref={ref}
      data-cursor="view"
      style={{
        display: 'grid',
        gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'center',
        padding: 'clamp(2.5rem, 5vw, 4rem) 0',
        borderBottom: '1px solid var(--line)',
        cursor: 'pointer',
      }}
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      {/* Text content — order based on index */}
      {index % 2 === 0 && (
        <div>
          <ProjectContent project={project} />
        </div>
      )}

      {/* Image placeholder */}
      <div
        style={{
          aspectRatio: '16/10',
          borderRadius: 'var(--radius-md)',
          background: project.accent + '22',
          border: '1px solid var(--line)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${project.accent}33 0%, ${project.accent}11 100%)`,
          }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: project.accent,
            background: 'var(--bg-surface)',
            padding: '0.3rem 0.6rem',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {project.category}
        </div>
      </div>

      {index % 2 !== 0 && (
        <div>
          <ProjectContent project={project} />
        </div>
      )}
    </motion.article>
  )
}

function ProjectContent({ project }) {
  return (
    <div>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
        }}
      >
        {project.number}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
          margin: '0.75rem 0 1rem',
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body)',
          color: 'var(--ink-mid)',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
          maxWidth: '40ch',
        }}
      >
        {project.summary}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {project.focus.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
              background: 'var(--line)',
              padding: '0.25rem 0.6rem',
              borderRadius: 'var(--radius-pill)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
