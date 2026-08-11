import { motion } from 'framer-motion'
import { Link } from '../../app/router'
import { useRouter } from '../../app/routerContext'
import FadeIn from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { SERVICES } from '../../data/services'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function ServiceDetailContent() {
  const { pathname } = useRouter()
  // Extract ID from pathname (e.g. "/services/brand-identity" -> "brand-identity")
  const id = pathname.split('/').filter(Boolean).pop()
  
  const service = SERVICES.find(s => s.id === id)
  
  if (!service) {
    return (
      <div style={{ padding: 'clamp(8rem, 15vw, 12rem) var(--layout-gutter)', textAlign: 'center', background: 'var(--bg-canvas)', minHeight: '80vh' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--ink)' }}>Service not found</h1>
        <Link to="/services" style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-mid)' }}>← Back to all services</Link>
      </div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ background: 'var(--bg-canvas)' }}>
      {/* Hero */}
      <section
        style={{
          padding: 'calc(var(--header-height) + clamp(4rem, 8vw, 7rem)) var(--layout-gutter) clamp(4rem, 8vw, 6rem)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn>
            <Link to="/services" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
              ← All Services
            </Link>
            <br />
            <Eyebrow>{service.number} — Service</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'var(--text-hero)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: 'var(--ink)',
                maxWidth: '16ch',
                marginTop: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {service.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-mid)', maxWidth: '48ch', lineHeight: 1.7 }}>
              {service.overview}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '1.5rem' }}>Deliverables</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {service.deliverables.map((item) => (
                <li key={item} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-body)', color: 'var(--ink-mid)' }}>
                  <span style={{ color: 'var(--accent-dark)' }}>✦</span> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'var(--bg-dark)', color: 'var(--ink-inv)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', marginBottom: '1rem' }}>Ready to start?</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--ink-inv-soft)', lineHeight: 1.6, marginBottom: '2rem' }}>We typically begin {service.title.toLowerCase()} engagements with a structured discovery workshop.</p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-pill)',
                  background: 'var(--accent)', color: 'var(--ink)',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none'
                }}
              >
                Discuss a project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
