import FadeIn, { FadeInStagger, StaggerItem } from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { SERVICES } from '../../data/services'

export default function ServicesStrip() {
  return (
    <section
      style={{
        background: 'var(--bg-surface)',
        padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
        <FadeIn style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <Eyebrow>What we do</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'var(--text-headline)',
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
              marginTop: '0.75rem',
              maxWidth: '18ch',
            }}
          >
            Connected capabilities. One clear outcome.
          </h2>
        </FadeIn>

        <FadeInStagger stagger={0.1}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  alignItems: 'center',
                  gap: 'clamp(1.5rem, 4vw, 3rem)',
                  padding: 'clamp(1.5rem, 3vw, 2rem) 0',
                  borderBottom: '1px solid var(--line)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200, 240, 74, 0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--accent-dark)',
                    fontWeight: 500,
                    minWidth: '2rem',
                  }}
                >
                  {service.number}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      letterSpacing: '-0.03em',
                      color: 'var(--ink)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {service.short}
                  </p>
                </div>

                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ color: 'var(--ink-soft)', flexShrink: 0 }}>
                  <path d="M3 15L15 3M15 3H7M15 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </StaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
