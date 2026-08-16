import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSight from '../../components/motion/AnimatedSight'
import GridLines from '../../components/visuals/GridLines'
import GlowOrb from '../../components/visuals/GlowOrb'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import ScrollRevealText from '../../components/motion/ScrollRevealText'
import { ParallaxOpacity } from '../../components/motion/ParallaxLayer'
import { BRAND } from '../../data/site'
import { HOME_HERO } from '../../data/home'

const ease = [0.16, 1, 0.3, 1]

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const sightY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        alignItems: 'stretch',
        overflow: 'hidden',
        background: '#ffffff',
        color: 'var(--ink)',
      }}
      aria-label="IndicBiz hero"
    >
      {/* Background grid — subtle on white */}
      <GridLines
        color="rgba(11,12,15,0.04)"
        accentColor="rgba(200,240,74,0.12)"
        cellSize={80}
        animated
        style={{ zIndex: 0 }}
      />

      {/* Soft pastel glow blobs */}
      <GlowOrb color="#C8F04A" size="36rem" top="-10rem" left="-8rem" opacity={0.07} />
      <GlowOrb color="#9BE7D0" size="26rem" bottom="-8rem" right="8%" opacity={0.06} />

      {/* Left — copy */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'calc(var(--header-height) + clamp(2.5rem, 5vw, 4rem)) clamp(1.5rem, 5vw, 4.5rem) clamp(3rem, 6vw, 5rem)',
          y: copyY,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent-dark)',
            marginBottom: '1.5rem',
          }}
        >
          {HOME_HERO.eyebrow}
        </motion.p>

        {/* Giant brand mark */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.06, ease }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            color: 'var(--ink)',
            margin: '0 0 0.15em',
          }}
        >
          {BRAND.name.replace('.', '')}
          <span style={{ color: 'var(--accent-dark)' }}>.</span>
        </motion.h1>

        {/* Scroll-reveal headline */}
        <ScrollRevealText
          text={HOME_HERO.title}
          reveal="slide"
          stagger={0.055}
          delay={0.22}
          as="p"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontStyle: 'italic',
            fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            color: 'var(--ink)',
            maxWidth: '20ch',
            marginBottom: '1.25rem',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.38, ease }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
            lineHeight: 1.65,
            color: 'var(--ink-soft)',
            maxWidth: '36ch',
            marginBottom: '2.5rem',
          }}
        >
          {HOME_HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}
        >
          <MagneticBtn to={HOME_HERO.primaryAction.to} variant="dark" size="lg" glow>
            {HOME_HERO.primaryAction.label}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticBtn>
          <MagneticBtn to={HOME_HERO.secondaryAction.to} variant="outline" size="lg">
            {HOME_HERO.secondaryAction.label}
          </MagneticBtn>
        </motion.div>

        {/* Meta tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            left: 'clamp(1.5rem, 5vw, 4.5rem)',
            display: 'flex',
            gap: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
          }}
        >
          <span>India · Worldwide</span>
          <span style={{ color: 'var(--accent-dark)', opacity: 0.6 }}>●</span>
          <span>Brand · Web · Product</span>
        </motion.div>
      </motion.div>

      {/* Right — animated visual */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
        style={{
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          background: 'var(--bg-canvas)',
          y: sightY,
        }}
        aria-hidden="true"
      >
        {/* Soft edge blending */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.12) 28%, transparent 55%)',
          pointerEvents: 'none',
        }} />

        <AnimatedSight
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          dark
        />
      </motion.div>

      {/* Scroll cue */}
      <ParallaxOpacity
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: 'clamp(1.5rem, 5vw, 4.5rem)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 24,
            height: 38,
            borderRadius: 12,
            border: '1.5px solid rgba(11,12,15,0.18)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '0.4rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 4, height: 8, borderRadius: 2, background: 'var(--accent-dark)' }}
          />
        </motion.div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', opacity: 0.5 }}>
          scroll
        </span>
      </ParallaxOpacity>
    </section>
  )
}
