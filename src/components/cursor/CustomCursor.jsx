import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * CustomCursor — Desktop-only magnetic cursor with label support
 * Reads data-cursor attribute from hovered elements:
 *   data-cursor="view"    → shows "View" label
 *   data-cursor="open"    → shows "Open" label
 *   data-cursor="large"   → large dot only
 *   data-cursor="pointer" → normal hover state
 */
export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [label, setLabel] = useState('')
  const [isHovering, setIsHovering] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const springConfig = { stiffness: 500, damping: 35, mass: 0.5 }
  const dotConfig = { stiffness: 800, damping: 40, mass: 0.3 }

  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)
  const dotX = useSpring(cursorX, dotConfig)
  const dotY = useSpring(cursorY, dotConfig)

  useEffect(() => {
    // Hide on touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const handleMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleOver = (e) => {
      const target = e.target.closest('[data-cursor]') || e.target.closest('a, button, [role="button"]')
      if (!target) {
        setIsHovering(false)
        setIsPointer(false)
        setLabel('')
        return
      }
      const cursorType = target.dataset?.cursor || 'pointer'
      setLabel(cursorType !== 'pointer' && cursorType !== 'large' ? cursorType.charAt(0).toUpperCase() + cursorType.slice(1) : '')
      setIsHovering(cursorType !== 'pointer')
      setIsPointer(cursorType === 'pointer' || !target.dataset?.cursor)
    }

    const handleLeave = () => {
      setIsHovering(false)
      setIsPointer(false)
      setLabel('')
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer ring / label circle */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? (label ? '80px' : '48px') : isPointer ? '36px' : '24px',
            height: isHovering ? (label ? '80px' : '48px') : isPointer ? '36px' : '24px',
            opacity: isHovering ? 1 : isPointer ? 0.7 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            borderRadius: '50%',
            background: 'var(--ink-inv)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--bg-dark)',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot — faster, precise */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 10000,
          pointerEvents: 'none',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'var(--accent)',
          mixBlendMode: 'normal',
        }}
      />
    </>
  )
}
