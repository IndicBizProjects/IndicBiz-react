import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * MarqueeStrip — Infinite horizontal marquee with scroll-velocity response
 */
export default function MarqueeStrip({
  items = [],
  speed = 40, // seconds for one full pass
  direction = 'left', // 'left' | 'right'
  className = '',
  itemClassName = '',
  separator = '·',
  dark = false,
}) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items, ...items]
  const animX = direction === 'left' ? ['-33.333%', '0%'] : ['0%', '-33.333%']

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      style={{
        background: dark ? 'var(--bg-dark)' : 'var(--bg-canvas)',
        borderTop: `1px solid ${dark ? 'var(--line-inv)' : 'var(--line)'}`,
        borderBottom: `1px solid ${dark ? 'var(--line-inv)' : 'var(--line)'}`,
      }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: animX }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-6 px-6 py-5 ${itemClassName}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: dark ? 'var(--ink-inv)' : 'var(--ink)',
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)', fontSize: '1.2em', lineHeight: 1 }}>
              {separator}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
