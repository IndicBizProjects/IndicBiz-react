/**
 * motions/ScaleIn.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Scale-in entrance animation (zoom from small → full size).
 * Also exports a ClipReveal variant using clipPath.
 *
 * Source: motion.dev/docs/react-motion-component, react-animation
 *
 * Usage:
 *   import { ScaleIn, ClipReveal } from '@/motions/ScaleIn'
 *
 *   <ScaleIn>
 *     <img src="..." />
 *   </ScaleIn>
 *
 *   <ClipReveal direction="up">
 *     <h1>Revealed headline</h1>
 *   </ClipReveal>
 */

import { motion } from 'motion/react'
import { springSoft, easeOut, viewportOnce } from './presets'

// ─── ScaleIn ─────────────────────────────────────────────────────────────────

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.from=0.9]   starting scale value
 * @param {number}  [props.delay=0]
 * @param {object}  [props.transition] override transition
 * @param {object}  [props.viewport]   override viewport options
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function ScaleIn({
  children,
  from = 0.9,
  delay = 0,
  transition,
  viewport,
  className,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, scale: from }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport ?? viewportOnce}
      transition={transition ?? { ...springSoft, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── ClipReveal ───────────────────────────────────────────────────────────────

const CLIP_INITIAL = {
  up:    'inset(100% 0% 0% 0%)',
  down:  'inset(0% 0% 100% 0%)',
  left:  'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
}

/**
 * Reveals an element with a clip-path wipe.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'up'|'down'|'left'|'right'} [props.direction='up']
 * @param {number}  [props.duration=0.9]
 * @param {number}  [props.delay=0]
 * @param {object}  [props.viewport]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function ClipReveal({
  children,
  direction = 'up',
  duration = 0.9,
  delay = 0,
  viewport,
  className,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      initial={{ clipPath: CLIP_INITIAL[direction] ?? CLIP_INITIAL.up }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={viewport ?? viewportOnce}
      transition={{ duration, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
