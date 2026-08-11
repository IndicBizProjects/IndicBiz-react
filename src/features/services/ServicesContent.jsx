import { motion } from 'framer-motion'
import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import MarqueeStrip from '../../components/motion/MarqueeStrip'
import { SERVICES, SERVICES_PAGE, SERVICE_PROCESS } from '../../data/services'
import { Link } from '../../app/router'
import Topography from '../../components/backgrounds/Topography/Topography'
import BlurText from '../../components/motion/BlurText'
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function ServicesContent() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15, pointerEvents: 'none' }}>
          <Topography 
            baseColor="#00FFFF"
            contourColor="#000000"
            animate={true}
            speed={0.5}
          />
        </div>
        
        {/* Soft radial gradient to ensure text readability */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(circle at center, transparent 0%, var(--bg-canvas) 80%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--layout-max)', margin: '0 auto', width: '100%', padding: '0 var(--layout-gutter)' }}>
          <FadeIn>
            <Eyebrow>{SERVICES_PAGE.eyebrow}</Eyebrow>
            <BlurText 
              text={SERVICES_PAGE.title}
              delay={50}
              animateBy="words"
              direction="bottom"
              className="services-hero-title"
              stepDuration={0.4}
            />
            {/* Inject a small style block to style BlurText since it renders a p tag by default */}
            <style>{`
              .services-hero-title {
                font-family: var(--font-display);
                font-weight: 800;
                font-size: var(--text-hero);
                letter-spacing: -0.04em;
                line-height: 1.0;
                color: var(--ink);
                max-width: 16ch;
                margin-top: 1rem;
                margin-bottom: 1.5rem;
              }
            `}</style>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-lg)',
                color: 'var(--ink-mid)',
                maxWidth: '50ch',
                lineHeight: 1.7,
              }}
            >
              {SERVICES_PAGE.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section
        style={{
          background: 'var(--bg-canvas)',
          padding: 'clamp(4rem, 8vw, 7rem) var(--layout-gutter)',
        }}
      >
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeInStagger stagger={0.1}>
            {SERVICES.map((service) => (
              <StaggerItem key={service.id}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '3rem 1fr auto',
                    alignItems: 'start',
                    gap: 'clamp(1.5rem, 3vw, 3rem)',
                    padding: 'clamp(2rem, 4vw, 3rem) 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      color: 'var(--accent-dark)',
                      paddingTop: '0.3rem',
                    }}
                  >
                    {service.number}
                  </span>

                  <div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                        letterSpacing: '-0.04em',
                        color: 'var(--ink)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {service.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--text-body)',
                        color: 'var(--ink-mid)',
                        lineHeight: 1.7,
                        maxWidth: '50ch',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.overview}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {service.deliverables.map((d) => (
                        <span
                          key={d}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: 'var(--ink-soft)',
                            background: 'var(--line)',
                            padding: '0.25rem 0.6rem',
                            borderRadius: 'var(--radius-pill)',
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ color: 'var(--ink-soft)', flexShrink: 0, marginTop: '0.4rem' }}>
                    <path d="M3 15L15 3M15 3H7M15 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Process */}
      <section
        style={{
          background: 'var(--bg-dark)',
          color: 'var(--ink-inv)',
          padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)',
        }}
      >
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <Eyebrow light>{SERVICES_PAGE.process.eyebrow}</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'var(--text-headline)',
                letterSpacing: '-0.04em',
                color: 'var(--ink-inv)',
                marginTop: '0.75rem',
              }}
            >
              {SERVICES_PAGE.process.title}
            </h2>
          </FadeIn>
          <FadeInStagger stagger={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {SERVICE_PROCESS.map((step) => (
                <StaggerItem key={step.number}>
                  <div
                    style={{
                      padding: '2rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-dark-card)',
                      border: '1px solid var(--line-inv)',
                      height: '100%',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>
                      {step.number}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--ink-inv)', marginBottom: '0.75rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--ink-inv-soft)', lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-canvas)', padding: 'clamp(5rem, 10vw, 8rem) var(--layout-gutter)' }}>
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <FadeIn>
            <Eyebrow>{SERVICES_PAGE.cta.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-headline)', letterSpacing: '-0.04em', color: 'var(--ink)', marginTop: '0.75rem', marginBottom: '1.5rem', maxWidth: '18ch' }}>
              {SERVICES_PAGE.cta.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-mid)', maxWidth: '42ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {SERVICES_PAGE.cta.description}
            </p>
            <Link
              to={SERVICES_PAGE.cta.action.to}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--ink)',
                color: 'var(--bg-canvas)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              {SERVICES_PAGE.cta.action.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
