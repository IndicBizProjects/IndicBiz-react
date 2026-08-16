import { motion } from 'framer-motion'

/**
 * NeoCard — soft neumorphic card. Use on light --bg-canvas (#F4F5F7) backgrounds.
 * variant: 'raised' | 'inset' | 'flat'
 */
export default function NeoCard({
  children,
  className = '',
  style,
  variant = 'raised',
  accent = false,
  hover = true,
  ...props
}) {
  const shadowMap = {
    raised: accent
      ? 'var(--neo-accent-glow)'
      : 'var(--neo-shadow-md)',
    inset: 'var(--neo-inset-md)',
    flat: 'var(--neo-shadow-sm)',
  }

  const base = {
    background: 'var(--neo-bg)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: shadowMap[variant],
    border: '1px solid rgba(255, 255, 255, 0.72)',
    ...style,
  }

  return (
    <motion.div
      className={className}
      style={base}
      whileHover={hover && variant !== 'inset' ? { y: -4, boxShadow: 'var(--neo-shadow-xl)' } : undefined}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
