import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * ParallaxLayer — scroll-driven parallax depth wrapper.
 * speed: positive = moves up faster (foreground), negative = moves down slower (background)
 */
export default function ParallaxLayer({
  children,
  speed = -0.2,
  direction = 'vertical',
  className = '',
  style,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' ? [`${speed * 100}px`, `${-speed * 100}px`] : ['0px', '0px']
  )
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'horizontal' ? [`${speed * 100}px`, `${-speed * 100}px`] : ['0px', '0px']
  )

  const y = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.4 })
  const x = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.4 })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, x, ...style }}
    >
      {children}
    </motion.div>
  )
}

/**
 * ParallaxScale — scales element on scroll. Good for hero images.
 */
export function ParallaxScale({ children, from = 1.08, to = 1, className = '', style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [from, to])
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 16 })

  return (
    <motion.div ref={ref} className={className} style={{ scale: smoothScale, ...style }}>
      {children}
    </motion.div>
  )
}

/**
 * ParallaxOpacity — fades element as it scrolls out of view.
 */
export function ParallaxOpacity({ children, className = '', style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', '60% start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div ref={ref} className={className} style={{ opacity, ...style }}>
      {children}
    </motion.div>
  )
}
