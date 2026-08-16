import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import GlassCard from '../../components/primitives/GlassCard'
import GlowOrb from '../../components/visuals/GlowOrb'
import { SERVICE_PROCESS } from '../../data/services'

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const step = SERVICE_PROCESS[active]

  return (
    <section
      style={{
        background: 'var(--bg-canvas)',
        padding: 'clamp(5rem, 11vw, 9.5rem) var(--layout-gutter)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div ref={ref} style={{ maxWidth: 'var(--layout-wide)', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '0.9rem' }}>
            How we work
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', letterSpacing: '-0.04em', lineHeight: 1.04, color: 'var(--ink)', margin: 0 }}>
            A clear path,<br />without the theatre.
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Step selectors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {SERVICE_PROCESS.map((item, i) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr auto',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.35rem 0',
                  borderTop: '1px solid var(--line)',
                  background: 'none',
                  border: 'none',
                  borderTop: '1px solid var(--line)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  opacity: active === i ? 1 : 0.38,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', color: active === i ? 'var(--accent-dark)' : 'var(--ink-soft)', transition: 'color 0.3s' }}>
                  {item.number}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
                  {item.title}
                </span>
                {active === i && (
                  <motion.span
                    layoutId="processDot"
                    style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Active step panel — neumorphic light */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                position: 'sticky',
                top: 'calc(var(--header-height) + 2rem)',
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden',
                minHeight: '22rem',
              }}
            >
              <GlowOrb color="#C8F04A" size="20rem" top="-4rem" right="-4rem" opacity={0.07} animate />

              <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(2rem, 4vw, 3rem)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-dark)', marginBottom: '1.25rem' }}>
                      Step {step.number}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--ink)', marginBottom: '1rem', lineHeight: 1.04 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                      {step.description}
                    </p>

                    {/* Progress bar */}
                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '0.4rem' }}>
                      {SERVICE_PROCESS.map((_, i) => (
                        <div
                          key={i}
                          style={{
                            height: 3,
                            flex: 1,
                            borderRadius: 2,
                            background: i <= active ? 'var(--accent-dark)' : 'var(--line-mid)',
                            transition: 'background 0.3s ease',
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
