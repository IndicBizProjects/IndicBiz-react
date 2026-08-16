import { motion } from 'framer-motion'

/**
 * GridLines — subtle animated perspective grid for dark hero sections.
 * Pure CSS/SVG — no WebGL needed.
 */
export default function GridLines({
  color = 'rgba(255,255,255,0.06)',
  accentColor = 'rgba(200,240,74,0.12)',
  cellSize = 72,
  perspective = true,
  animated = true,
  style,
}) {
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Horizontal lines */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
          transform: perspective ? 'perspective(800px) rotateX(12deg) translateY(-8%)' : 'none',
          transformOrigin: 'top center',
        }}
      >
        <defs>
          <pattern
            id="gridPattern"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
              fill="none"
              stroke={color}
              strokeWidth="0.75"
            />
          </pattern>
          <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#gridPattern)"
          mask="url(#gridMask)"
        />
        {/* Accent cross lines */}
        <line x1="33%" y1="0" x2="33%" y2="100%" stroke={accentColor} strokeWidth="1" opacity="0.6" />
        <line x1="66%" y1="0" x2="66%" y2="100%" stroke={accentColor} strokeWidth="1" opacity="0.6" />
      </svg>

      {/* Moving dot overlay */}
      {animated && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`,
            backgroundSize: `${cellSize}px ${cellSize}px`,
            backgroundPosition: '0 0',
          }}
          animate={{ backgroundPosition: ['0 0', `${cellSize}px ${cellSize}px`] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </motion.div>
  )
}
