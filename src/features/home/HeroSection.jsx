import { motion } from 'framer-motion'
import { Link } from '../../app/router'
import Aurora from '../../components/motion/Aurora'
import TextPressure from '../../components/motion/TextPressure'

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'var(--layout-gutter)',
        overflow: 'hidden',
        background: 'var(--bg-canvas)',
      }}
    >
      {/* Aurora Glow Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.85, transform: 'scale(1.1)' }}>
        <Aurora
          colorStops={['#E8C87A', '#C8F04A', '#A8CC30']}
          amplitude={1.2}
          blend={0.5}
        />
      </div>

      {/* Grid Overlay for texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        backgroundImage: 'radial-gradient(var(--line-mid) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.5,
        pointerEvents: 'none'
      }} />

      {/* Content Overlay */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 'var(--layout-wide)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', cursor: 'default' }}
        >
          {/* TextPressure stretches to fill width and reacts to mouse */}
          <div style={{ height: 'clamp(8rem, 25vw, 18rem)', width: '100%', position: 'relative' }}>
            <TextPressure
              text="INDICBIZ"
              fontFamily="var(--font-display)"
              fontUrl="" // Not using external, we use our local Playfair Display
              textColor="var(--ink)"
              strokeColor="var(--accent)"
              flex={true}
              alpha={false}
              italic={true}
              weight={true}
              scale={false}
              minFontSize={60}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '1rem', maxWidth: '40rem' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-title)',
            color: 'var(--ink-mid)',
            lineHeight: 1.4,
            fontWeight: 400,
          }}>
            Digital clarity for ambitious brands.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '3rem',
          }}
        >
          <Link
            to="/work"
            data-cursor="pointer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '1.25rem 2.5rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--ink)',
              color: 'var(--bg-canvas)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            Explore our work
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
