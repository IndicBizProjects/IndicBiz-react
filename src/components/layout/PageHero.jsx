import { motion } from 'framer-motion'
import ScrollRevealText from '../motion/ScrollRevealText'
import FadeIn from '../motion/FadeIn'

const ease = [0.16, 1, 0.3, 1]

export default function PageHero({ eyebrow, title, description, actions }) {
  return (
    <section
      className="ag-section"
      style={{ paddingTop: 'clamp(8.5rem, 14vw, 11rem)', textAlign: 'center' }}
    >
      <div className="ag-wrap">
        {eyebrow && (
          <motion.p
            className="ag-eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          <ScrollRevealText
            text={title}
            reveal="slide"
            stagger={0.055}
            delay={0.06}
            as="h1"
            className="ag-h1"
            style={{
              justifyContent: 'center',
              maxWidth: '16ch',
              margin: '0 auto 1.1rem',
              fontSize: 'clamp(2.15rem, 7vw, 5.4rem)',
            }}
          />
        </motion.div>

        {description && (
          <FadeIn delay={0.18} y={14}>
            <p className="ag-lede" style={{ margin: '0 auto 1.75rem' }}>{description}</p>
          </FadeIn>
        )}
        {actions && (
          <FadeIn delay={0.28} y={10}>
            {actions}
          </FadeIn>
        )}
      </div>
    </section>
  )
}
