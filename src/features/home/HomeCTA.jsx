import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import GlowOrb from '../../components/visuals/GlowOrb'
import AnimatedSight from '../../components/motion/AnimatedSight'
import { HOME_CTA } from '../../data/home'
import { BRAND } from '../../data/site'

const ease = [0.16, 1, 0.3, 1]

export default function HomeCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

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
      {/* Soft ambient orbs */}
      <GlowOrb color="#C8F04A" size="36rem" top="-8rem" right="-6rem" opacity={0.07} />
      <GlowOrb color="#9BE7D0" size="26rem" bottom="-5rem" left="8%" opacity={0.05} />

      {/* Decorative sight — light strokes */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'min(44vw, 28rem)',
          height: 'min(44vw, 28rem)',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      >
        <AnimatedSight variant="compact" interactive={false} dark />
      </div>

      <div
        ref={ref}
        style={{
          maxWidth: '44rem',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '1.5rem' }}
        >
          {HOME_CTA.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease }}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--ink)', maxWidth: '14ch', marginBottom: '1.25rem' }}
        >
          {HOME_CTA.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '2.5rem' }}
        >
          {HOME_CTA.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.22, ease }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
        >
          <MagneticBtn to={HOME_CTA.action.to} variant="dark" size="lg" glow>
            {HOME_CTA.action.label}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticBtn>
          <MagneticBtn href={`mailto:${BRAND.email}`} variant="outline" size="lg">
            {BRAND.email}
          </MagneticBtn>
        </motion.div>
      </div>
    </section>
  )
}
