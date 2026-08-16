/**
 * motions/Stagger.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Stagger group — orchestrates sequential child entrance animations.
 *
 * Source: motion.dev/docs/react-animation (Orchestration / staggerChildren)
 *
 * Components exported:
 *   <StaggerGroup>  — the orchestrating container
 *   <StaggerChild>  — individual animated child (accepts any variant)
 *
 * How it works:
 *   - StaggerGroup uses variants with `staggerChildren` in transition.
 *   - Each StaggerChild reads the parent variant state and plays its own.
 *   - This is entirely CSS-transform based — no re-renders per frame.
 *
 * Usage:
 *   import { StaggerGroup, StaggerChild } from '@/motions/Stagger'
 *
 *   <StaggerGroup stagger={0.07} delay={0.1}>
 *     {items.map(item => (
 *       <StaggerChild key={item.id}>
 *         <Card data={item} />
 *       </StaggerChild>
 *     ))}
 *   </StaggerGroup>
 *
 *   // Horizontal slide variant:
 *   <StaggerGroup>
 *     {items.map(item => (
 *       <StaggerChild key={item.id} variant="slideLeft">
 *         <li>{item.name}</li>
 *       </StaggerChild>
 *     ))}
 *   </StaggerGroup>
 */

import { motion } from 'motion/react'
import { springSoft, viewportOnce } from './presets'

// Built-in child variants
const CHILD_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: springSoft },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: springSoft },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0, transition: springSoft },
  },
  slideRight: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0, transition: springSoft },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: springSoft },
  },
  fadeOnly: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
}

// ─── StaggerGroup ─────────────────────────────────────────────────────────────

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.stagger=0.08]    seconds between each child
 * @param {number}  [props.delay=0]         seconds before first child
 * @param {object}  [props.viewport]        override viewport config
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']        HTML element
 * @param {boolean} [props.once=true]       only trigger once
 */
export function StaggerGroup({
  children,
  stagger = 0.08,
  delay = 0,
  viewport,
  className,
  as = 'div',
  once = true,
  ...rest
}) {
  const Tag = motion[as] ?? motion.div

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport ?? { once, amount: 0.15 }}
      variants={containerVariants}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── StaggerChild ─────────────────────────────────────────────────────────────

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {keyof CHILD_VARIANTS | object} [props.variant='fadeUp']
 *   Pass a string key to use a built-in variant, or an object for custom.
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function StaggerChild({
  children,
  variant = 'fadeUp',
  className,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div

  const resolvedVariants = typeof variant === 'string'
    ? (CHILD_VARIANTS[variant] ?? CHILD_VARIANTS.fadeUp)
    : variant

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
