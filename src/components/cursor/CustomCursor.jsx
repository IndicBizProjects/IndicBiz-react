import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

/**
 * CustomCursor — IndicBiz studio pointer for fine pointers only.
 * Ink disc + lagging ring, mix-blend invert on the page, olive label on actions.
 *
 * data-cursor:
 *   view     → filled ink disc, "View"
 *   open     → filled ink disc, "Open"
 *   pointer  → hover grow
 */
export default function CustomCursor() {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)

  const dotX = useSpring(cursorX, { stiffness: 900, damping: 38, mass: 0.18 })
  const dotY = useSpring(cursorY, { stiffness: 900, damping: 38, mass: 0.18 })
  const ringX = useSpring(cursorX, { stiffness: 220, damping: 26, mass: 0.55 })
  const ringY = useSpring(cursorY, { stiffness: 220, damping: 26, mass: 0.55 })

  const [label, setLabel] = useState('')
  const [state, setState] = useState('default')
  const [pressed, setPressed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isTouch = useRef(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduce.matches) {
      isTouch.current = true
      return
    }
    setMounted(true)

    const onMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onOver = (e) => {
      if (e.target.closest('input, textarea, select, [contenteditable="true"]')) {
        setState('text')
        setLabel('')
        return
      }

      const target = e.target.closest('[data-cursor], a, button, [role="button"]')
      if (!target) {
        setState('default')
        setLabel('')
        return
      }

      const type = target.dataset?.cursor
      if (type === 'view') {
        setState('action')
        setLabel('View')
        return
      }
      if (type === 'open') {
        setState('action')
        setLabel('Open')
        return
      }

      setState('hover')
      setLabel('')
    }

    const onLeave = () => {
      setState('default')
      setLabel('')
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [cursorX, cursorY])

  if (isTouch.current || !mounted) return null

  const action = state === 'action'
  const hover = state === 'hover'
  const text = state === 'text'
  const ringSize = action ? 88 : hover ? 52 : text ? 22 : 30

  return (
    <>
      <motion.div
        aria-hidden="true"
        className={`ib-cursor-ring is-${state}${pressed ? ' is-pressed' : ''}`}
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="ib-cursor-ring-face"
          animate={{
            width: text ? 2 : ringSize,
            height: ringSize,
            borderRadius: text ? 2 : action ? 999 : 999,
            scale: pressed && !action ? 0.82 : 1,
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        >
          <AnimatePresence mode="wait">
            {label && (
              <motion.span
                key={label}
                className="ib-cursor-label"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="ib-cursor-dot"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="ib-cursor-dot-face"
          animate={{
            width: action || text ? 0 : hover ? 5 : 8,
            height: action || text ? 0 : hover ? 5 : 8,
            opacity: action || text ? 0 : 1,
            scale: pressed ? 0.7 : 1,
          }}
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        />
      </motion.div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }

        .ib-cursor-ring,
        .ib-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          translate: -50% -50%;
          z-index: 9998;
          pointer-events: none;
        }

        .ib-cursor-dot { z-index: 9999; }

        .ib-cursor-ring-face {
          display: grid;
          place-items: center;
          border: 1.5px solid #f7f7f7;
          background: transparent;
          mix-blend-mode: difference;
        }

        .ib-cursor-ring.is-hover .ib-cursor-ring-face {
          border-color: #f7f7f7;
          background: rgba(247, 247, 247, 0.12);
        }

        .ib-cursor-ring.is-action .ib-cursor-ring-face {
          border-color: #0d2426;
          background: #0d2426;
          mix-blend-mode: normal;
          box-shadow: 0 16px 32px rgba(13, 36, 38, 0.22);
        }

        .ib-cursor-ring.is-text .ib-cursor-ring-face {
          border: none;
          background: #f7f7f7;
        }

        .ib-cursor-dot-face {
          border-radius: 50%;
          background: #b9c97a;
          box-shadow: 0 0 0 1px rgba(13, 36, 38, 0.08);
        }

        .ib-cursor-label {
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b9c97a;
        }
      `}</style>
    </>
  )
}
