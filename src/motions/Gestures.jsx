/**
 * motions/Gestures.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Hover, Tap, Focus, Drag, and Pan gesture components.
 *
 * Source: motion.dev/docs/react-motion-component (Gestures section)
 *         motion.dev/docs/react-hover-animation
 *         motion.dev/docs/react-gestures
 *
 * Components exported:
 *   <HoverLift>       — lifts element on hover
 *   <HoverScale>      — scales element on hover
 *   <HoverGlow>       — brightness boost on hover
 *   <TapPress>        — scales down on tap/press
 *   <HoverTap>        — combined hover scale + tap press (button pattern)
 *   <DraggableItem>   — draggable element with optional constraints
 *   <MagneticButton>  — element attracted to cursor (pointer-follow)
 */

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { springHover, springTap, springBouncy } from './presets'

// ─── HoverLift ────────────────────────────────────────────────────────────────

/**
 * Lifts an element upward on hover.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.y=-4]          pixels to lift
 * @param {object}  [props.transition]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function HoverLift({ children, y = -4, transition, className, as = 'div', ...rest }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      whileHover={{ y }}
      transition={transition ?? springHover}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── HoverScale ───────────────────────────────────────────────────────────────

/**
 * Scales element on hover.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.scale=1.04]
 * @param {object}  [props.transition]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function HoverScale({ children, scale = 1.04, transition, className, as = 'div', ...rest }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      whileHover={{ scale }}
      transition={transition ?? springHover}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── HoverGlow ────────────────────────────────────────────────────────────────

/**
 * Increases brightness on hover. Useful for image cards.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.brightness=1.08]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function HoverGlow({ children, brightness = 1.08, className, as = 'div', ...rest }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      whileHover={{ filter: `brightness(${brightness})` }}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── TapPress ────────────────────────────────────────────────────────────────

/**
 * Scales element slightly down on tap/press. Great for buttons.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.scale=0.96]
 * @param {object}  [props.transition]
 * @param {string}  [props.className]
 * @param {string}  [props.as='button']
 */
export function TapPress({ children, scale = 0.96, transition, className, as = 'button', ...rest }) {
  const Tag = motion[as] ?? motion.button
  return (
    <Tag
      className={className}
      whileTap={{ scale }}
      transition={transition ?? springTap}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── HoverTap ─────────────────────────────────────────────────────────────────

/**
 * Combined hover + tap animation pattern for interactive buttons/cards.
 * Hover: lifts + scales up. Tap: scales down.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.hoverY=-3]
 * @param {number}  [props.hoverScale=1.02]
 * @param {number}  [props.tapScale=0.97]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function HoverTap({
  children,
  hoverY = -3,
  hoverScale = 1.02,
  tapScale = 0.97,
  className,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      whileHover={{ y: hoverY, scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={springHover}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── FocusRing ────────────────────────────────────────────────────────────────

/**
 * Adds an outline animation on focus. Useful for accessible buttons.
 *
 * Source: motion.dev/docs/react-motion-component (whileFocus)
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string}  [props.color='var(--color-accent, #0ea5e9)']
 * @param {string}  [props.className]
 */
export function FocusRing({ children, color = 'var(--color-accent, #0ea5e9)', className, ...rest }) {
  return (
    <motion.button
      className={className}
      whileFocus={{ outline: `2px solid ${color}`, outlineOffset: '3px' }}
      transition={{ duration: 0.15 }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

// ─── DraggableItem ────────────────────────────────────────────────────────────

/**
 * Drag-enabled element.
 *
 * Source: motion.dev/docs/react-motion-component (drag section)
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'x'|'y'|boolean} [props.axis=true]  drag axis
 * @param {object}  [props.constraints]         { top, left, right, bottom }
 * @param {boolean} [props.snapToOrigin=false]  snap back when released
 * @param {number}  [props.elastic=0.5]
 * @param {string}  [props.className]
 */
export function DraggableItem({
  children,
  axis = true,
  constraints,
  snapToOrigin = false,
  elastic = 0.5,
  className,
  ...rest
}) {
  return (
    <motion.div
      className={className}
      drag={axis}
      dragConstraints={constraints}
      dragSnapToOrigin={snapToOrigin}
      dragElastic={elastic}
      whileDrag={{ scale: 0.96, cursor: 'grabbing' }}
      style={{ cursor: 'grab', touchAction: 'none' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
