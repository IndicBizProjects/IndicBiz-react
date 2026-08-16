/**
 * motions/FadeIn.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Scroll-triggered entrance animations using whileInView.
 *
 * Source: motion.dev/docs/react-motion-component (whileInView section)
 *
 * Components exported:
 *   <FadeIn>        — simple opacity + y fade-up
 *   <FadeInStagger> — wrapper that staggers its children
 *   <StaggerItem>   — child item for use inside FadeInStagger
 *
 * Usage:
 *   import { FadeIn, FadeInStagger, StaggerItem } from '@/motions/FadeIn'
 *
 *   <FadeIn>
 *     <h2>Hello</h2>
 *   </FadeIn>
 *
 *   <FadeInStagger stagger={0.06}>
 *     {items.map(i => <StaggerItem key={i.id}><Card /></StaggerItem>)}
 *   </FadeInStagger>
 */

import { motion } from 'motion/react'
import { fadeUp, springSoft, staggerContainer, viewportOnce } from './presets'

// ─── FadeIn ──────────────────────────────────────────────────────────────────

/**
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {string}  [props.className]
 * @param {number}  [props.y=28]          vertical travel distance
 * @param {number}  [props.delay=0]       delay in seconds
 * @param {object}  [props.transition]    override transition
 * @param {object}  [props.viewport]      override viewport options
 * @param {string}  [props.as='div']      element tag
 */
export function FadeIn({
  children,
  className,
  y = 28,
  delay = 0,
  transition,
  viewport,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div

  const resolvedTransition = transition ?? {
    ...springSoft,
    delay,
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport ?? viewportOnce}
      transition={resolvedTransition}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── FadeInStagger (container) ───────────────────────────────────────────────

/**
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {string}  [props.className]
 * @param {number}  [props.stagger=0.08]  delay between children
 * @param {number}  [props.delay=0]       delay before first child
 * @param {object}  [props.viewport]      override viewport options
 * @param {string}  [props.as='div']      element tag
 */
export function FadeInStagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  viewport,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div
  const container = staggerContainer(stagger, delay)

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport ?? viewportOnce}
      variants={container}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── StaggerItem (child) ─────────────────────────────────────────────────────

/**
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {string}  [props.className]
 * @param {number}  [props.y=28]          vertical travel distance
 * @param {object}  [props.variants]      custom variants (overrides fadeUp)
 * @param {string}  [props.as='div']      element tag
 */
export function StaggerItem({
  children,
  className,
  y = 28,
  variants,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div

  const resolvedVariants = variants ?? {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: springSoft },
  }

  return (
    <Tag
      className={className}
      variants={resolvedVariants}
      {...rest}
    >
      {children}
    </Tag>
  )
}
