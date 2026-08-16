/**
 * motions/Scroll.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Scroll-linked animation components.
 *
 * Source: motion.dev/docs/react-use-scroll
 *         motion.dev/docs/react-scroll-animations
 *
 * Components exported:
 *   <ScrollProgress>   — thin progress bar at top of page
 *   <Parallax>         — element that moves at a different rate to scroll
 *   <ScrollRevealText> — text that fades word-by-word as user scrolls
 *   <ScrollScale>      — element that scales from/to based on scroll
 *   <ScrollOpacity>    — element whose opacity is linked to scroll position
 *
 * Usage:
 *   import { ScrollProgress, Parallax } from '@/motions/Scroll'
 *
 *   // At top of layout:
 *   <ScrollProgress color="var(--color-accent)" />
 *
 *   // Parallax background image:
 *   <Parallax speed={0.4}>
 *     <img src="hero.jpg" />
 *   </Parallax>
 */

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react'

// ─── ScrollProgress ──────────────────────────────────────────────────────────

/**
 * Thin horizontal bar at the top of the viewport showing page read progress.
 *
 * Source: motion.dev/docs/react-use-scroll — "Page scroll" example
 *
 * @param {object} props
 * @param {string} [props.color='var(--color-accent, #0ea5e9)']
 * @param {number} [props.height=2]
 * @param {number} [props.zIndex=120]
 */
export function ScrollProgress({
  color = 'var(--color-accent, #0ea5e9)',
  height = 2,
  zIndex = 120,
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height,
        background: color,
        transformOrigin: '0%',
        zIndex,
      }}
    />
  )
}

// ─── Parallax ─────────────────────────────────────────────────────────────────

/**
 * Wraps children in a parallax scroll effect.
 * The child moves at `speed` × scroll amount relative to the viewport.
 *
 * Source: motion.dev/docs/react-use-scroll — "Element position" + useTransform
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.speed=0.3]   0 = no movement, 1 = moves with scroll
 *                                       negative = moves opposite direction
 * @param {'y'|'x'} [props.axis='y']
 * @param {string}  [props.className]
 */
export function Parallax({ children, speed = 0.3, axis = 'y', className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const movement = useTransform(scrollYProgress, [0, 1], [`${-speed * 60}%`, `${speed * 60}%`])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={axis === 'y' ? { y: movement } : { x: movement }}>
        {children}
      </motion.div>
    </div>
  )
}

// ─── ScrollScale ─────────────────────────────────────────────────────────────

/**
 * Element scales between `fromScale` and `toScale` as it moves through viewport.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.fromScale=0.8]  scale when element enters bottom
 * @param {number}  [props.toScale=1]      scale when element is at top
 * @param {string}  [props.className]
 */
export function ScrollScale({ children, fromScale = 0.8, toScale = 1, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [fromScale, toScale])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale }}>
        {children}
      </motion.div>
    </div>
  )
}

// ─── ScrollOpacity ───────────────────────────────────────────────────────────

/**
 * Element fades in as it enters the viewport (scroll-linked, not triggered).
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {[number, number]} [props.inputRange=[0, 0.5]]   scroll progress range
 * @param {[number, number]} [props.outputRange=[0, 1]]    opacity range
 * @param {string}  [props.className]
 */
export function ScrollOpacity({
  children,
  inputRange = [0, 0.5],
  outputRange = [0, 1],
  className,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, inputRange, outputRange)

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ opacity }}>
        {children}
      </motion.div>
    </div>
  )
}

// ─── ScrollRevealText ─────────────────────────────────────────────────────────

/**
 * Splits text into words and reveals them one by one as the user scrolls.
 *
 * Source: motion.dev/docs/react-scroll-animations — stagger + scroll
 *
 * @param {object}  props
 * @param {string}  props.text             the string to reveal
 * @param {string}  [props.as='p']         element tag
 * @param {string}  [props.className]
 * @param {number}  [props.stagger=0.04]   seconds between each word
 * @param {number}  [props.delay=0]
 */
export function ScrollRevealText({ text, as = 'p', className, stagger = 0.04, delay = 0 }) {
  const words = text.split(' ')
  const Tag = as

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em', lineHeight: 1.4 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', visualDuration: 0.45, bounce: 0.1 },
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
