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
 * MagneticBtn — Agencya 3D button. Every variant shares the same
 * extruded pill, inset bevel, reflection, and press-in motion.
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
  const tone = VARIANT_MAP[variant] || 'dark'
  const classes = `btn3d btn3d--${tone} btn3d--${size} ${className}`.trim()

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
    <div className="btn3d-wrap">
      {to ? (
        <Link to={to} onClick={onClick} {...shared}>{inner}</Link>
      ) : href ? (
        <a href={href} onClick={onClick} {...shared}>{inner}</a>
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} {...shared}>
          {inner}
        </button>
      )}
    </div>
  )}
