/**
 * Eyebrow — Small label/category text component
 * Used above section headlines for hierarchy
 */
export default function Eyebrow({ children, className = '', light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-label)',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: light ? 'var(--ink-inv-soft)' : 'var(--ink-soft)',
        userSelect: 'none',
      }}
    >
      <span
        style={{
          width: '1.5rem',
          height: '1px',
          background: light ? 'var(--ink-inv-soft)' : 'var(--accent)',
          display: 'inline-block',
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
