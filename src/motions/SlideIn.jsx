/**
 * motions/SlideIn.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Directional slide-in animations (left / right / up / down).
 *
 * Source: motion.dev/docs/react-motion-component (whileInView + initial/animate)
 *
 * Usage:
 *   import { SlideIn } from '@/motions/SlideIn'
 *
 *   <SlideIn from="left" delay={0.1}>
 *     <Card />
 *   </SlideIn>
 */

import { motion } from 'motion/react'
import { springSoft, viewportOnce } from './presets'

const OFFSETS = {
  left:  { x: -48, y: 0 },
  right: { x:  48, y: 0 },
  up:    { x: 0,  y:  40 },
  down:  { x: 0,  y: -40 },
}

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'left'|'right'|'up'|'down'} [props.from='up']  slide direction
 * @param {number}  [props.delay=0]
 * @param {number}  [props.distance]   custom distance override (px)
 * @param {object}  [props.transition] override transition
 * @param {object}  [props.viewport]   override viewport options
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function SlideIn({
  children,
  from = 'up',
  delay = 0,
  distance,
  transition,
  viewport,
  className,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div
  const base = OFFSETS[from] ?? OFFSETS.up

  const initial = {
    opacity: 0,
    x: distance != null && (from === 'left' || from === 'right')
      ? (from === 'left' ? -distance : distance)
      : base.x,
    y: distance != null && (from === 'up' || from === 'down')
      ? (from === 'down' ? -distance : distance)
      : base.y,
  }

  const resolvedTransition = transition ?? { ...springSoft, delay }

  return (
    <Tag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport ?? viewportOnce}
      transition={resolvedTransition}
      {...rest}
    >
      {children}
    </Tag>
  )
}
