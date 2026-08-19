import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from '../../app/router'

const VARIANT_MAP = {
  accent: 'dark',
  dark: 'dark',
  primary: 'dark',
  glass: 'light',
  outline: 'light',
  neo: 'light',
  secondary: 'light',
  light: 'light',
}

/**
 * MagneticBtn — 3D button with magnetic cursor attraction on desktop
 * and responsive spring tap feedback on touch/mobile devices.
 */
export default function MagneticBtn({
  children,
  to,
  href,
  onClick,
  variant = 'dark',
  size = 'md',
  glow = false,
  className = '',
  type = 'button',
  disabled = false,
  style,
  ...props
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 18, stiffness: 220, mass: 0.2 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    x.set(distanceX * 0.22)
    y.set(distanceY * 0.22)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const tone = VARIANT_MAP[variant] || 'dark'
  const classes = `btn3d btn3d--${tone} btn3d--${size} ${glow ? 'btn3d--glow' : ''} ${className}`.trim()

  const inner = (
    <>
      <span className="btn3d-shine" aria-hidden="true" />
      <span className="btn3d-face">{children}</span>
    </>
  )

  const shared = {
    className: classes,
    style,
    ...props,
  }

  return (
    <motion.div
      ref={ref}
      className="btn3d-wrap"
      style={{ x: springX, y: springY, display: 'inline-flex' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {to ? (
        <Link to={to} onClick={onClick} {...shared}>{inner}</Link>
      ) : href ? (
        <a href={href} onClick={onClick} {...shared}>{inner}</a>
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} {...shared}>
          {inner}
        </button>
      )}
    </motion.div>
  )
}
