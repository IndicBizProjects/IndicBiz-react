/**
 * motions/Presence.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * AnimatePresence wrappers for exit animations, page transitions,
 * modals, slideshows, and conditional rendering.
 *
 * Source: motion.dev/docs/react-animate-presence
 *
 * Components exported:
 *   <PageTransition>  — wrap route/page content for enter+exit
 *   <ModalPresence>   — overlay + panel enter/exit
 *   <Slideshow>       — keyed single-child crossfade/slide
 *   <ListPresence>    — animated list with add/remove items
 *
 * Usage:
 *   // Route-level page transition:
 *   import { PageTransition } from '@/motions/Presence'
 *   <PageTransition routeKey={location.pathname}>
 *     <PageComponent />
 *   </PageTransition>
 *
 *   // Modal:
 *   import { ModalPresence } from '@/motions/Presence'
 *   <ModalPresence isOpen={open} onClose={() => setOpen(false)}>
 *     <div className="modal-content">...</div>
 *   </ModalPresence>
 */

import { AnimatePresence, motion } from 'motion/react'
import {
  pageFade,
  pageSlideRight,
  overlayVariant,
  modalVariant,
  springSnappy,
  tweenFast,
} from './presets'

// ─── PageTransition ──────────────────────────────────────────────────────────

/**
 * Wraps page content with AnimatePresence for route transitions.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string}  props.routeKey         unique key per route (e.g. pathname)
 * @param {'fade'|'slideRight'|'slideLeft'|'slideUp'} [props.mode='fade']
 * @param {'sync'|'wait'|'popLayout'} [props.presenceMode='wait']
 */
export function PageTransition({
  children,
  routeKey,
  mode = 'fade',
  presenceMode = 'wait',
}) {
  const VARIANTS = {
    fade: pageFade,
    slideRight: pageSlideRight,
    slideLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0, transition: springSnappy },
      exit:    { opacity: 0, x:  40, transition: tweenFast },
    },
    slideUp: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0, transition: springSnappy },
      exit:    { opacity: 0, y: 30, transition: tweenFast },
    },
  }

  const v = VARIANTS[mode] ?? VARIANTS.fade

  return (
    <AnimatePresence mode={presenceMode}>
      <motion.div
        key={routeKey}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// ─── ModalPresence ───────────────────────────────────────────────────────────

/**
 * Animated modal with overlay backdrop.
 *
 * @param {object}  props
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose        called when backdrop is clicked
 * @param {React.ReactNode} props.children  modal content
 * @param {string}  [props.overlayClass]    class for backdrop div
 * @param {string}  [props.panelClass]      class for panel div
 */
export function ModalPresence({
  isOpen,
  onClose,
  children,
  overlayClass = '',
  panelClass = '',
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-overlay"
          className={overlayClass}
          variants={overlayVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
        >
          <motion.div
            key="modal-panel"
            className={panelClass}
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Slideshow ────────────────────────────────────────────────────────────────

/**
 * Crossfade/slide between keyed single child elements.
 * Change `activeKey` to animate between states.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children  single child per render
 * @param {string|number} props.activeKey   change to trigger transition
 * @param {'crossfade'|'slideRight'|'slideLeft'} [props.effect='crossfade']
 * @param {string}  [props.className]
 */
export function Slideshow({ children, activeKey, effect = 'crossfade', className }) {
  const EFFECT = {
    crossfade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit:    { opacity: 0 },
      transition: { duration: 0.35 },
    },
    slideRight: {
      initial: { opacity: 0, x:  60 },
      animate: { opacity: 1, x:   0 },
      exit:    { opacity: 0, x: -40 },
      transition: springSnappy,
    },
    slideLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x:   0 },
      exit:    { opacity: 0, x:  40 },
      transition: springSnappy,
    },
  }

  const v = EFFECT[effect] ?? EFFECT.crossfade

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKey}
          initial={v.initial}
          animate={v.animate}
          exit={v.exit}
          transition={v.transition}
          style={{ width: '100%' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── ListPresence ─────────────────────────────────────────────────────────────

/**
 * Render an animated list where items can be added/removed.
 * Each child MUST have a unique `key` prop.
 *
 * @param {object}  props
 * @param {React.ReactNode[]} props.children   list items
 * @param {'sync'|'popLayout'} [props.mode='popLayout']
 * @param {string}  [props.className]
 * @param {string}  [props.as='ul']
 */
export function ListPresence({ children, mode = 'popLayout', className, as = 'ul' }) {
  const Tag = as

  return (
    <Tag className={className}>
      <AnimatePresence mode={mode}>
        {children}
      </AnimatePresence>
    </Tag>
  )
}

/**
 * Individual list item for use inside <ListPresence>.
 * Must have a unique `key` at the parent.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {string}  [props.className]
 */
export function ListItem({ children, className, ...rest }) {
  return (
    <motion.li
      className={className}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      transition={springSnappy}
      {...rest}
    >
      {children}
    </motion.li>
  )
}
