import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollProgressText } from '../../components/motion/ScrollRevealText'
import CountUp from '../../components/motion/CountUp'
import NeoCard from '../../components/primitives/NeoCard'
import GlowOrb from '../../components/visuals/GlowOrb'
import { HOME_STATS } from '../../data/home'

export default function BrandStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section
      style={{
        background: 'var(--bg-canvas)',
        color: 'var(--ink)',
        padding: 'clamp(6rem, 14vw, 12rem) var(--layout-gutter)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GlowOrb color="#C8F04A" size="28rem" top="5%" right="-4rem" opacity={0.06} />
      <GlowOrb color="#9BE7D0" size="22rem" bottom="-2rem" left="8%" opacity={0.05} />

      <div
        style={{
          maxWidth: 'var(--layout-wide)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Scroll-progress text reveal */}
        <ScrollProgressText
          text="The best brands earn their place through clarity, craft, and calm consistency."
          as="p"
          activeColor="var(--ink)"
          inactiveColor="rgba(11,12,15,0.18)"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.06,
            maxWidth: '18ch',
          }}
        />

        {/* Stat row */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.25rem',
            marginTop: 'clamp(4rem, 8vw, 7rem)',
            paddingTop: '2rem',
            borderTop: '1px solid var(--line)',
          }}
        >
          {HOME_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <NeoCard style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                  color: 'var(--ink)',
                  marginBottom: '0.5rem',
                }}>
                  <CountUp value={stat.value} duration={1.8} delay={0.15 + i * 0.1} />
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-soft)',
                }}>
                  {stat.label}
                </p>
              </NeoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
