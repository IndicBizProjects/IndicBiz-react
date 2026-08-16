/**
 * motions/TextReveal.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Text animation utilities: word-by-word and character-by-character reveals.
 *
 * Source: motion.dev/docs/react-animation (Orchestration)
 *         motion.dev/docs/react-scroll-animations
 *
 * Components exported:
 *   <WordReveal>   — fades words in sequentially on scroll
 *   <CharReveal>   — fades chars in sequentially on scroll
 *   <BlurReveal>   — blur-to-sharp text entrance
 *   <CountUp>      — animated number counter
 *   <Typewriter>   — typewriter text entrance
 *
 * Usage:
 *   import { WordReveal, CountUp } from '@/motions/TextReveal'
 *
 *   <WordReveal text="Crafting digital presence." />
 *   <CountUp from={0} to={127} suffix="+" />
 */

import { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'motion/react'
import { springSoft } from './presets'

// ─── WordReveal ───────────────────────────────────────────────────────────────

/**
 * Reveals text one word at a time on scroll entry.
 *
 * @param {object}  props
 * @param {string}  props.text
 * @param {string}  [props.as='p']
 * @param {string}  [props.className]
 * @param {number}  [props.stagger=0.05]   seconds between words
 * @param {number}  [props.delay=0]
 * @param {number}  [props.y=16]           word lift distance
 */
export function WordReveal({ text, as = 'p', className, stagger = 0.05, delay = 0, y = 16 }) {
  const words = text.split(' ')

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y },
            visible: {
              opacity: 1,
              y: 0,
              transition: { ...springSoft },
            },
          }}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// ─── CharReveal ───────────────────────────────────────────────────────────────

/**
 * Reveals text one character at a time.
 *
 * @param {object}  props
 * @param {string}  props.text
 * @param {string}  [props.as='span']
 * @param {string}  [props.className]
 * @param {number}  [props.stagger=0.025]
 * @param {number}  [props.delay=0]
 */
export function CharReveal({ text, as = 'span', className, stagger = 0.025, delay = 0 }) {
  const chars = text.split('')

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      style={{ display: 'inline-flex', overflow: 'hidden' }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: '100%' },
            visible: {
              opacity: 1,
              y: '0%',
              transition: { type: 'spring', stiffness: 300, damping: 24 },
            },
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ─── BlurReveal ───────────────────────────────────────────────────────────────

/**
 * Text fades in from blur.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {string}  [props.as='div']
 * @param {string}  [props.className]
 * @param {number}  [props.delay=0]
 * @param {number}  [props.duration=0.7]
 */
export function BlurReveal({ children, as = 'div', className, delay = 0, duration = 0.7 }) {
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Tag>
  )
}

// ─── CountUp ─────────────────────────────────────────────────────────────────

/**
 * Animated number counter using Motion's animate() function.
 *
 * Source: motion.dev/docs (animate imperative API + useInView)
 *
 * @param {object}  props
 * @param {number}  [props.from=0]
 * @param {number}  props.to             target number
 * @param {string}  [props.prefix='']    e.g. '$'
 * @param {string}  [props.suffix='']    e.g. '+'
 * @param {number}  [props.duration=2]   seconds
 * @param {string}  [props.as='span']
 * @param {string}  [props.className]
 */
export function CountUp({ from = 0, to, prefix = '', suffix = '', duration = 2, as = 'span', className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const el = ref.current

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        el.textContent = prefix + Math.round(value) + suffix
      },
    })

    return () => controls.stop()
  }, [isInView, from, to, prefix, suffix, duration])

  const Tag = as
  return <Tag ref={ref} className={className}>{prefix}{from}{suffix}</Tag>
}

// ─── Typewriter ───────────────────────────────────────────────────────────────

/**
 * Reveals text character by character at a consistent speed.
 *
 * @param {object}  props
 * @param {string}  props.text
 * @param {number}  [props.speed=0.03]  seconds per character
 * @param {number}  [props.delay=0]
 * @param {string}  [props.as='span']
 * @param {string}  [props.className]
 */
export function Typewriter({ text, speed = 0.03, delay = 0, as = 'span', className }) {
  const chars = text.split('')

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0 } },
          }}
          style={{ whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}
