import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * AnimatedSight — premium abstract graphic for hero / feature moments.
 * Smooth orbital geometry + soft glow, mouse-reactive parallax.
 */
export default function AnimatedSight({
  variant = 'hero',
  interactive = true,
  dark = false,
  className = '',
  style,
}) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 })

  const rot = useTransform(sx, [-0.5, 0.5], [-8, 8])
  const tiltY = useTransform(sy, [-0.5, 0.5], [6, -6])
  const shiftX = useTransform(sx, [-0.5, 0.5], [-18, 18])
  const shiftY = useTransform(sy, [-0.5, 0.5], [-12, 12])

  useEffect(() => {
    if (!interactive) return undefined
    const el = ref.current
    if (!el) return undefined

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mx.set(x)
      my.set(y)
    }
    const onLeave = () => {
      mx.set(0)
      my.set(0)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [interactive, mx, my])

  const isCompact = variant === 'compact'
  // Stroke colors adapt to light (dark=true) or dark bg context
  const ringStroke = dark ? 'rgba(11,12,15,0.22)' : 'rgba(242,243,245,0.22)'
  const diamondStroke = dark ? 'rgba(11,12,15,0.30)' : 'rgba(242,243,245,0.35)'
  const tickStroke = dark ? 'rgba(11,12,15,0.35)' : 'rgba(242,243,245,0.45)'
  const vignette = dark
    ? 'radial-gradient(circle at center, transparent 42%, rgba(244,245,247,0.35) 78%, rgba(244,245,247,0.72) 100%)'
    : 'radial-gradient(circle at center, transparent 42%, rgba(8,9,11,0.35) 78%, rgba(8,9,11,0.72) 100%)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        isolation: 'isolate',
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Soft atmospheric field */}
      <div
        style={{
          position: 'absolute',
          inset: '8%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 45% 40%, rgba(200,240,74,0.22) 0%, rgba(155,231,208,0.08) 38%, transparent 68%)',
          filter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          rotate: rot,
          y: tiltY,
          x: shiftX,
        }}
      >
        <svg
          viewBox="0 0 640 640"
          width={isCompact ? '88%' : '94%'}
          height={isCompact ? '88%' : '94%'}
          fill="none"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="sightRing" x1="80" y1="80" x2="560" y2="560" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8F04A" stopOpacity="0.85" />
              <stop offset="0.55" stopColor="#9BE7D0" stopOpacity="0.55" />
              <stop offset="1" stopColor="#F2F3F5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="sightCore" x1="250" y1="220" x2="400" y2="420" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8F04A" />
              <stop offset="1" stopColor="#9BE7D0" />
            </linearGradient>
            <filter id="sightGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer thin ring */}
          <motion.circle
            cx="320"
            cy="320"
            r="248"
            stroke="url(#sightRing)"
            strokeWidth="1.2"
            strokeDasharray="4 10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55, rotate: 360 }}
            transition={{ opacity: { duration: 1.2 }, rotate: { duration: 48, repeat: Infinity, ease: 'linear' } }}
            style={{ transformOrigin: '320px 320px' }}
          />

          {/* Mid ring */}
          <motion.circle
            cx="320"
            cy="320"
            r="186"
            stroke={ringStroke}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, rotate: -360 }}
            transition={{
              pathLength: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.8 },
              rotate: { duration: 36, repeat: Infinity, ease: 'linear' },
            }}
            style={{ transformOrigin: '320px 320px' }}
          />

          {/* Accent arc */}
          <motion.path
            d="M320 92 A228 228 0 0 1 528 320"
            stroke="url(#sightRing)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Floating nodes */}
          {[
            { cx: 320, cy: 92, r: 5, delay: 0.3 },
            { cx: 508, cy: 220, r: 4, delay: 0.45 },
            { cx: 470, cy: 448, r: 4.5, delay: 0.55 },
            { cx: 170, cy: 470, r: 3.5, delay: 0.65 },
            { cx: 124, cy: 250, r: 4, delay: 0.75 },
          ].map((n) => (
            <motion.circle
              key={`${n.cx}-${n.cy}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="#C8F04A"
              filter="url(#sightGlow)"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0.45, 1, 0.45], scale: [0.9, 1.15, 0.9] }}
              transition={{
                opacity: { duration: 3.2, delay: n.delay, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 3.2, delay: n.delay, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          ))}

          {/* Inner diamond frame */}
          <motion.path
            d="M320 190 L430 320 L320 450 L210 320 Z"
            stroke={diamondStroke}
            strokeWidth="1.25"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: '320px 320px', y: shiftY }}
          />

          {/* Core */}
          <motion.circle
            cx="320"
            cy="320"
            r="28"
            fill="url(#sightCore)"
            filter="url(#sightGlow)"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            cx="320"
            cy="320"
            r="56"
            stroke="rgba(200,240,74,0.35)"
            strokeWidth="1"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 4.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '320px 320px' }}
          />

          {/* Crosshair ticks */}
          {[
            'M320 150 V178',
            'M320 462 V490',
            'M150 320 H178',
            'M462 320 H490',
          ].map((d) => (
            <motion.path
              key={d}
              d={d}
              stroke={tickStroke}
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Soft vignette edge */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: vignette,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
