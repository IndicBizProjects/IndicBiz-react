import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

/**
 * CountUp — animates a number from 0 to target when it enters viewport.
 * Handles numeric prefixes/suffixes and special string values.
 */
export default function CountUp({
  value,
  duration = 1.8,
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  style,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const [display, setDisplay] = useState('0')

  const numericValue = parseFloat(value)
  const isNumeric = !isNaN(numericValue) && value !== 'Direct' && value !== '∞'

  useEffect(() => {
    if (!isInView) return
    if (!isNumeric) {
      setDisplay(String(value))
      return undefined
    }

    const controls = animate(0, numericValue, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    })

    return () => controls.stop()
  }, [isInView, numericValue, duration, delay, decimals, isNumeric, value])

  return (
    <span ref={ref} className={className} style={style} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}{display}{suffix}
    </span>
  )
}
