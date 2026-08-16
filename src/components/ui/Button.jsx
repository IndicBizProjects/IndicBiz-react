import MagneticBtn from '../primitives/MagneticBtn'

/**
 * Button — thin wrapper so every button in the site uses the same 3D system.
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
  return (
    <MagneticBtn
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </MagneticBtn>
  )
}

export function ButtonLink({ to, href, children, variant = 'primary', size = 'md', className = '', ...props }) {
  return (
    <MagneticBtn
      to={to}
      href={href}
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </MagneticBtn>
  )
}
