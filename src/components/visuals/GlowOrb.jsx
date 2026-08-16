import { motion } from 'framer-motion'

/**
 * GlowOrb — ambient radial gradient orb.
 * Floats gently and creates atmospheric depth on dark backgrounds.
 */
export default function GlowOrb({
  color = '#C8F04A',
  size = '40rem',
  top,
  left,
  right,
  bottom,
  opacity = 0.18,
  blur = '80px',
  animate: shouldAnimate = true,
  style,
}) {
  const pos = { top, left, right, bottom }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
        filter: `blur(${blur})`,
        opacity,
        pointerEvents: 'none',
        ...pos,
        ...style,
      }}
      {...(shouldAnimate
        ? {
            animate: {
              scale: [1, 1.12, 1],
              opacity: [opacity, opacity * 1.35, opacity],
            },
            transition: {
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }
        : {})}
    />
  )
}
