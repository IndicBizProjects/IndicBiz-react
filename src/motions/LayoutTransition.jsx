/**
 * motions/LayoutTransition.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Layout animation components using Motion's FLIP algorithm.
 *
 * Source: motion.dev/docs/react-layout-animations
 *
 * Components exported:
 *   <LayoutBox>         — single element that auto-animates layout changes
 *   <SharedElement>     — pair two elements with layoutId for shared animation
 *   <SortableList>      — list that animates item reordering
 *   <Accordion>         — expandable panel with layout animation
 *   <LayoutGroup>       — sync layout animations across separate components
 *
 * Key concepts (from docs):
 *   - Add `layout` prop to auto-animate size/position changes
 *   - Use `layoutId` to animate shared elements between components
 *   - Use `LayoutGroup` to sync animations across sibling components
 *   - Set `style={{ borderRadius }}` not className to fix scale distortion
 *   - Children of `layout` elements should also have `layout` to fix stretching
 */

import { useState } from 'react'
import { motion, LayoutGroup, AnimatePresence } from 'motion/react'
import { springSoft, springSnappy } from './presets'

// ─── LayoutBox ────────────────────────────────────────────────────────────────

/**
 * An element that auto-animates its size/position whenever a layout change occurs.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {'position'|'size'|true} [props.layout=true]
 * @param {object}  [props.transition]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function LayoutBox({
  children,
  layout = true,
  transition,
  className,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      layout={layout}
      transition={transition ?? springSoft}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── SharedElement ───────────────────────────────────────────────────────────

/**
 * Render this component in two places with the same `layoutId` to create
 * a shared element transition (e.g. expanding a card to a modal).
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {string}  props.layoutId         must be unique across the page
 * @param {object}  [props.transition]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function SharedElement({ children, layoutId, transition, className, as = 'div', ...rest }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      layoutId={layoutId}
      transition={transition ?? springSnappy}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── Accordion ────────────────────────────────────────────────────────────────

/**
 * Animated accordion panel.
 * Uses `layout` on the outer motion.div so surrounding elements reflow smoothly.
 *
 * @param {object}  props
 * @param {string}  props.title           header text
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.defaultOpen=false]
 * @param {string}  [props.className]
 * @param {string}  [props.titleClass]
 * @param {string}  [props.bodyClass]
 */
export function Accordion({
  title,
  children,
  defaultOpen = false,
  className = '',
  titleClass = '',
  bodyClass = '',
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div layout className={className} style={{ overflow: 'hidden' }}>
      <motion.button
        layout="position"
        className={titleClass}
        onClick={() => setIsOpen((v) => !v)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {title}
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            className={bodyClass}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={springSoft}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── SortableList ─────────────────────────────────────────────────────────────

/**
 * Render a list whose items animate to their new positions on reorder.
 * Each child MUST have a unique `key`.
 * Parent manages state; this only handles animation.
 *
 * @param {object}  props
 * @param {React.ReactNode[]} props.children
 * @param {string}  [props.groupId]    provide to sync with sibling lists
 * @param {string}  [props.className]
 * @param {string}  [props.as='ul']
 */
export function SortableList({ children, groupId, className, as = 'ul' }) {
  const Tag = as

  return (
    <LayoutGroup id={groupId}>
      <Tag className={className}>
        {children}
      </Tag>
    </LayoutGroup>
  )
}

/**
 * Individual animated list item for <SortableList>.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {string}  [props.className]
 */
export function SortableItem({ children, className, ...rest }) {
  return (
    <motion.li
      className={className}
      layout
      transition={springSnappy}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      {...rest}
    >
      {children}
    </motion.li>
  )
}

// ─── TabIndicator ─────────────────────────────────────────────────────────────

/**
 * Animated tab underline using layoutId.
 * Place this inside each tab button; only the active one renders it.
 *
 * Example:
 *   {tabs.map(tab => (
 *     <button key={tab} onClick={() => setActive(tab)}>
 *       {tab}
 *       {active === tab && <TabIndicator layoutId="tab-indicator" />}
 *     </button>
 *   ))}
 *
 * @param {object}  props
 * @param {string}  props.layoutId     must be consistent across all tabs
 * @param {string}  [props.color]
 * @param {number}  [props.height=2]
 * @param {string}  [props.className]
 */
export function TabIndicator({
  layoutId = 'tab-indicator',
  color = 'var(--color-accent, #0ea5e9)',
  height = 2,
  className,
}) {
  return (
    <motion.div
      layoutId={layoutId}
      className={className}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height,
        background: color,
        borderRadius: height,
      }}
      transition={springSnappy}
    />
  )
}
