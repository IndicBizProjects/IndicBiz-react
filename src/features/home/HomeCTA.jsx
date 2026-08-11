import { Link } from '../../app/router'
import FadeIn from '../../components/motion/FadeIn'

export default function HomeCTA() {
  return (
    <section
      style={{
        background: 'var(--bg-dark)',
        color: 'var(--ink-inv)',
        padding: 'clamp(6rem, 14vw, 12rem) var(--layout-gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
        <FadeIn threshold={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-label)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-inv-soft)',
              marginBottom: '2rem',
            }}
          >
            Have an idea?
          </p>
        </FadeIn>

        <FadeIn delay={0.1} threshold={0.2}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--ink-inv)',
              maxWidth: '16ch',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            Let's turn it into something people value.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} threshold={0.2}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/contact"
              data-cursor="pointer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.25rem',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--accent)',
                color: 'var(--ink)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              Tell us about it
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--ink-inv-soft)',
              }}
            >
              Or email us at{' '}
              <a
                href="mailto:hello@indicbiz.com"
                style={{ color: 'var(--ink-inv)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                hello@indicbiz.com
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
