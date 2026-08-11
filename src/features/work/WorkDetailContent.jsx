import { motion } from 'framer-motion'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { WORK_PROJECTS, WORK_UI } from '../../data/work'
import { Link } from '../../app/router'
import { useRouter } from '../../app/routerContext'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function WorkDetailContent() {
  const { pathname } = useRouter()
  // Extract project id from /work/:id
  const parts = pathname.split('/')
  const projectId = parts[parts.length - 1] || parts[parts.length - 2]
  
  const project = WORK_PROJECTS.find(p => p.id === projectId)

  if (!project) {
    return (
      <div style={{ padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Project not found</h1>
        <Link to="/work" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Back to our work</Link>
      </div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-canvas)',
          padding: 'calc(var(--header-height) + clamp(4rem, 8vw, 7rem)) var(--layout-gutter) clamp(4rem, 8vw, 6rem)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn>
            <Eyebrow>{project.category}</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'var(--text-hero)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: 'var(--ink)',
                marginTop: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {project.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-mid)', maxWidth: '48ch', lineHeight: 1.7 }}>
              {project.summary}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Image */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn delay={0.1}>
            <div 
              style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                background: 'var(--bg-dark-mid)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img 
                src={project.image} 
                alt={project.imageAlt} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Details Grid */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn delay={0.2}>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(2rem, 5vw, 4rem)',
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '1rem' }}>
                  {WORK_UI.challenge}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.6 }}>
                  {project.challenge}
                </p>
              </div>
              
              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '1rem' }}>
                  {WORK_UI.approach}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.6 }}>
                  {project.approach}
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '1rem' }}>
                  {WORK_UI.outcome}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.6 }}>
                  {project.outcome}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Slideshow Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section style={{ padding: '0 0 clamp(4rem, 8vw, 7rem)', overflow: 'hidden' }}>
          <div style={{ maxWidth: '100vw' }}>
            <FadeIn>
              <div
                style={{
                  display: 'flex',
                  gap: 'clamp(1rem, 2vw, 2rem)',
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  padding: '1rem var(--layout-gutter)',
                  scrollbarWidth: 'none', // Firefox
                  msOverflowStyle: 'none', // IE/Edge
                }}
                className="hide-scrollbar"
              >
                <style>{`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {project.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: '0 0 auto',
                      width: 'min(90vw, 900px)',
                      scrollSnapAlign: 'center',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      background: 'var(--bg-dark-mid)',
                      boxShadow: 'var(--shadow-md)',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '75vh',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        display: 'block',
                      }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Focus Areas & Link */}
      <section style={{ padding: '0 var(--layout-gutter) clamp(5rem, 10vw, 9rem)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: '3rem' }}>
          <FadeIn delay={0.3}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {project.focus.map((item, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.72rem', 
                    letterSpacing: '0.05em', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: 'var(--radius-pill)', 
                    background: 'var(--line)', 
                    color: 'var(--ink-mid)' 
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            {project.websiteUrl && (
              <a 
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.9rem 2rem', borderRadius: 'var(--radius-pill)',
                  background: 'var(--ink)', color: 'var(--bg-canvas)',
                  fontFamily: 'var(--font-body)', fontWeight: 600,
                  fontSize: '0.95rem', textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {WORK_UI.visitWebsite}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </FadeIn>
        </div>
      </section>

    </motion.div>
  )
}
