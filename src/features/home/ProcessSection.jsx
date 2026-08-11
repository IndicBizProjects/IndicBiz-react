import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { SERVICE_PROCESS } from '../../data/services'

export default function ProcessSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      style={{
        background: 'var(--bg-canvas)',
        padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
        <FadeIn>
          <Eyebrow>How we work</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'var(--text-headline)',
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
              marginTop: '0.75rem',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            A clear path,<br />without the theatre.
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Step selector */}
          <FadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {SERVICE_PROCESS.map((step, i) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActive(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem 0',
                    borderBottom: '1px solid var(--line)',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid var(--line)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'opacity 0.2s',
                    opacity: active === i ? 1 : 0.45,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      color: active === i ? 'var(--accent-dark)' : 'var(--ink-soft)',
                      minWidth: '2rem',
                      transition: 'color 0.2s',
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                      letterSpacing: '-0.03em',
                      color: 'var(--ink)',
                    }}
                  >
                    {step.title}
                  </span>
                  {active === i && (
                    <motion.span
                      layoutId="activeIndicator"
                      style={{
                        marginLeft: 'auto',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Active step detail */}
          <FadeIn delay={0.1}>
            <div
              style={{
                position: 'sticky',
                top: 'calc(var(--header-height) + 2rem)',
                background: 'var(--bg-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--ink-inv)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    Step {SERVICE_PROCESS[active].number}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      letterSpacing: '-0.04em',
                      color: 'var(--ink-inv)',
                      marginBottom: '1.25rem',
                      lineHeight: 1,
                    }}
                  >
                    {SERVICE_PROCESS[active].title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body-lg)',
                      color: 'var(--ink-inv-soft)',
                      lineHeight: 1.7,
                    }}
                  >
                    {SERVICE_PROCESS[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [data-process-grid] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
