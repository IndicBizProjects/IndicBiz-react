import { Link } from '../../app/router'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

/**
 * Button — Premium magnetic button with hover animation
 * variant: 'primary' | 'secondary' | 'ghost' | 'dark'
 */
export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const baseStyles = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    cursor: 'pointer',
    border: 'none',
    transition: 'background var(--dur-fast), color var(--dur-fast)',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  }

  const sizeMap = {
    sm: { padding: '0.5rem 1.25rem', fontSize: '0.875rem', borderRadius: 'var(--radius-pill)' },
    md: { padding: '0.75rem 1.75rem', fontSize: '1rem', borderRadius: 'var(--radius-pill)' },
    lg: { padding: '1rem 2.25rem', fontSize: '1.05rem', borderRadius: 'var(--radius-pill)' },
  }

  const variantMap = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--ink)',
      boxShadow: '0 0 0 0 var(--accent)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1.5px solid var(--line-mid)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
    },
    dark: {
      background: 'var(--ink)',
      color: 'var(--bg-canvas)',
    },
    'dark-outline': {
      background: 'transparent',
      color: 'var(--ink-inv)',
      border: '1.5px solid var(--line-inv-mid)',
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--ink)',
    },
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      style={{
        ...baseStyles,
        ...sizeMap[size],
        ...variantMap[variant],
        opacity: disabled ? 0.5 : 1,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

/**
 * ButtonLink — Same as Button but renders as an anchor/router Link
 */
export function ButtonLink({ to, href, children, variant = 'primary', size = 'md', className = '', ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const sizeMap = {
    sm: { padding: '0.5rem 1.25rem', fontSize: '0.875rem', borderRadius: 'var(--radius-pill)' },
    md: { padding: '0.75rem 1.75rem', fontSize: '1rem', borderRadius: 'var(--radius-pill)' },
    lg: { padding: '1rem 2.25rem', fontSize: '1.05rem', borderRadius: 'var(--radius-pill)' },
  }

  const variantMap = {
    primary: { background: 'var(--accent)', color: 'var(--ink)' },
    secondary: { background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--line-mid)' },
    ghost: { background: 'transparent', color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: '4px' },
    dark: { background: 'var(--ink)', color: 'var(--bg-canvas)' },
    'dark-outline': { background: 'transparent', color: 'var(--ink-inv)', border: '1.5px solid var(--line-inv-mid)' },
    'inv-primary': { background: 'var(--accent)', color: 'var(--ink)' },
  }

  const sharedStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    cursor: 'pointer',
    textDecoration: 'none',
    userSelect: 'none',
    ...sizeMap[size],
    ...variantMap[variant],
  }

  const Tag = to ? Link : 'a'
  const linkProps = to ? { to } : { href }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
      style={{ display: 'inline-block' }}
    >
      <motion.a
        style={sharedStyle}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={className}
        href={to || href}
        onClick={(e) => {
          if (to) {
            // handled by Link
          }
        }}
        {...props}
      >
        {children}
      </motion.a>
    </motion.div>
  )
}
