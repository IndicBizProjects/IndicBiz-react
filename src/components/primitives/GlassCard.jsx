import { motion } from 'framer-motion'

/**
 * GlassCard — frosted glass card primitive.
 * Light-mode: white frosted panel with subtle shadow.
 * Add accent prop for chartreuse highlight border.
 */
export default function GlassCard({
  children,
  className = '',
  style,
  accent = false,
  hover = true,
  as: Tag = 'div',
  onClick,
  ...props
}) {
  const base = {
    position: 'relative',
    background: 'var(--glass-bg)',
    border: `1px solid ${accent ? 'var(--glass-border-accent)' : 'var(--glass-border)'}`,
    backdropFilter: 'var(--glass-blur)',
    WebkitBackdropFilter: 'var(--glass-blur)',
    boxShadow: accent ? 'var(--glass-shadow-accent)' : 'var(--glass-shadow)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    ...style,
  }

  return (
    <motion.div
      className={className}
      style={base}
      whileHover={hover ? { scale: 1.012, y: -3 } : undefined}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      onClick={onClick}
      {...props}
    >
      {/* Inner highlight top-edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
          pointerEvents: 'none',
        }}
      />
      {/* Accent glow orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-30%',
          left: '15%',
          width: '55%',
          height: '55%',
          borderRadius: '50%',
          background: accent
            ? 'radial-gradient(circle, rgba(200,240,74,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(200,240,74,0.04) 0%, transparent 70%)',
          filter: 'blur(12px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  )
}
