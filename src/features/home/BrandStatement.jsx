import FadeIn from '../../components/motion/FadeIn'
import TextReveal from '../../components/motion/TextReveal'

export default function BrandStatement() {
  return (
    <section
      style={{
        background: 'var(--bg-dark)',
        color: 'var(--ink-inv)',
        padding: 'clamp(6rem, 14vw, 12rem) var(--layout-gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--layout-wide)', margin: '0 auto' }}>
        <FadeIn threshold={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              color: 'var(--ink-inv)',
              maxWidth: '20ch',
            }}
          >
            We believe the best brands{' '}
            <em
              style={{
                fontStyle: 'normal',
                color: 'var(--accent)',
              }}
            >
              earn their place
            </em>{' '}
            in the world — through clarity, craft, and consistency.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} threshold={0.2}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
              marginTop: 'clamp(4rem, 8vw, 7rem)',
              paddingTop: '2rem',
              borderTop: '1px solid var(--line-inv)',
            }}
          >
            {[
              { value: '6+', label: 'Specialists, one focused team' },
              { value: '4', label: 'Connected capabilities' },
              { value: '∞', label: 'Direct client collaboration' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    color: 'var(--ink-inv)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-inv-soft)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
