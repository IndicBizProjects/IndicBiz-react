import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * TextReveal — Animates text line-by-line with a clip-path mask reveal.
 * Pass children as plain text or split into lines via an array.
 */
export default function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.1,
  duration = 0.75,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  // If children is a string, split into words for word-by-word reveal
  const content = typeof children === 'string' ? children : null

  if (content) {
    const words = content.split(' ')
    return (
      <span ref={ref} className={`inline-block ${className}`} aria-label={content}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={isInView ? { y: '0%', opacity: 1 } : {}}
              transition={{
                duration,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-hidden="true"
            >
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </span>
    )
  }

  // Array of lines
  const lines = Array.isArray(children) ? children : [children]
  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

/**
 * CharReveal — Character-by-character reveal
 */
export function CharReveal({ children, className = '', delay = 0, stagger = 0.025, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  const text = String(children)
  const chars = text.split('')

  return (
    <span ref={ref} className={`inline-block ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
