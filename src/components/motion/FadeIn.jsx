import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * FadeIn — Scroll-triggered fade + translate animation
 * Wraps any children with an entrance animation when they enter the viewport
 */
export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  y = 32,
  x = 0,
  scale = 1,
  once = true,
  threshold = 0.15,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x, scale: scale === 1 ? 0.98 : scale }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeInStagger — Stagger children FadeIn animations
 */
export function FadeInStagger({ children, className = '', stagger = 0.08, delay = 0, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem — Must be used inside FadeInStagger
 */
export function StaggerItem({ children, className = '' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
