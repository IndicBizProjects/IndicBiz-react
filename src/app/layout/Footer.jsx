import { Link } from '../router'
import { BRAND, FOOTER_GROUPS, SITE_UI, SOCIAL_LINKS } from '../../data/site'
import FadeIn from '../../components/motion/FadeIn'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-dark)',
        color: 'var(--ink-inv)',
        paddingTop: 'clamp(4rem, 10vw, 8rem)',
        paddingBottom: 'clamp(2rem, 4vw, 3rem)',
        paddingLeft: 'var(--layout-gutter)',
        paddingRight: 'var(--layout-gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
        {/* Top — Big CTA line */}
        <FadeIn>
          <div
            style={{
              borderBottom: '1px solid var(--line-inv)',
              paddingBottom: 'clamp(3rem, 6vw, 5rem)',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-label)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
              }}
            >
              Ready to begin?
            </p>
            <a
              href="mailto:hello@indicbiz.com"
              data-cursor="open"
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'var(--ink-inv)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-inv)' }}
            >
              hello@indicbiz.com
            </a>
          </div>
        </FadeIn>

        {/* Middle — Nav grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          {/* Brand column */}
          <FadeIn delay={0.05}>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  letterSpacing: '-0.04em',
                  color: 'var(--ink-inv)',
                  marginBottom: '0.75rem',
                }}
              >
                {BRAND.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--ink-inv-soft)',
                  lineHeight: 1.6,
                  maxWidth: '220px',
                }}
              >
                {BRAND.tagline}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-inv-soft)',
                  marginTop: '1rem',
                }}
              >
                {BRAND.location}
              </p>
            </div>
          </FadeIn>

          {/* Nav groups */}
          {FOOTER_GROUPS.map((group, gi) => (
            <FadeIn key={group.title} delay={0.1 + gi * 0.07}>
              <nav aria-label={`${group.title} links`}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-label)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-inv-soft)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {group.title}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {group.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--ink-inv)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        opacity: 0.8,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.opacity = '1' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-inv)'; e.currentTarget.style.opacity = '0.8' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </FadeIn>
          ))}

          {/* Social column */}
          <FadeIn delay={0.24}>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-label)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-inv-soft)',
                  marginBottom: '1.25rem',
                }}
              >
                Social
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--ink-inv)',
                      textDecoration: 'none',
                      opacity: 0.8,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.opacity = '1' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-inv)'; e.currentTarget.style.opacity = '0.8' }}
                  >
                    {social.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--line-inv)',
          }}
        >
          <small
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              color: 'var(--ink-inv-soft)',
            }}
          >
            © {year} {BRAND.legalName}. All rights reserved.
          </small>
          <small
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              color: 'var(--ink-inv-soft)',
            }}
          >
            Crafted with intent.
          </small>
        </div>
      </div>
    </footer>
  )
}
