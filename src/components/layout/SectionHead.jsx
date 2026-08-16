import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../motion/FadeIn'
import ScrollRevealText from '../motion/ScrollRevealText'

/**
 * SectionHead — section header with optional ghost watermark text behind it.
 *
 * Props:
 *   eyebrow    string
 *   title      string
 *   description string
 *   align      'left' | 'center'
 *   ghost      string  — big transparent background text (e.g. "SERVICES")
 */
export default function SectionHead({ eyebrow, title, description, align = 'left', ghost }) {
  const center = align === 'center'
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const ghostY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <div
      ref={ref}
      className={ghost ? 'ag-ghost-wrap' : ''}
      style={{ textAlign: center ? 'center' : 'left', marginBottom: '2rem' }}
    >
      {ghost && (
        <motion.span
          className="ag-ghost-text"
          style={{ y: ghostY }}
          aria-hidden="true"
        >
          {ghost}
        </motion.span>
      )}

      {eyebrow && (
        <FadeIn y={10} duration={0.5}>
          <p className="ag-eyebrow">{eyebrow}</p>
        </FadeIn>
      )}
      {title && (
        <ScrollRevealText
          text={title}
          reveal="slide"
          stagger={0.045}
          as="h2"
          className="ag-h2"
          style={{ justifyContent: center ? 'center' : 'flex-start', marginBottom: description ? '0.85rem' : 0 }}
        />
      )}
      {description && (
        <FadeIn delay={0.12} y={14}>
          <p className="ag-lede" style={{ margin: center ? '0 auto' : 0 }}>{description}</p>
        </FadeIn>
      )}
    </div>
  )
}
