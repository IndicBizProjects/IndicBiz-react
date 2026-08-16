/**
 * motions/presets.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Central animation token library sourced from motion.dev/docs.
 *
 * Usage:
 *   import { springSoft, fadeUp, staggerContainer } from '@/motions/presets'
 */

// ─── EASING CURVES ───────────────────────────────────────────────────────────

/** Premium expo-out curve: fast start, silky settle */
export const easeOut = [0.16, 1, 0.3, 1]

/** Standard ease-in-out */
export const easeInOut = [0.42, 0, 0.58, 1]

/** Sharp out — great for UI elements popping in */
export const easeSharpOut = [0.0, 0.0, 0.2, 1]

/** Anticipation easing (slight pull-back before launch) */
export const anticipate = [0.38, 0.005, 0.215, 1]

// ─── TWEEN TRANSITIONS ───────────────────────────────────────────────────────

/** Standard 700ms tween with premium ease */
export const tween = { duration: 0.7, ease: easeOut }

/** Snappy 400ms tween */
export const tweenFast = { duration: 0.4, ease: easeOut }

/** Slow 1s tween — for hero/large reveals */
export const tweenSlow = { duration: 1.0, ease: easeOut }

/** Linear (used for scroll-linked values) */
export const tweenLinear = { duration: 0.4, ease: 'linear' }

// ─── SPRING TRANSITIONS ──────────────────────────────────────────────────────

/**
 * Soft spring — default for scroll-reveal entrances.
 * visualDuration + bounce API (Motion v11+)
 */
export const springSoft = {
  type: 'spring',
  visualDuration: 0.55,
  bounce: 0.08,
}

/** Snappy spring — page transitions, modals */
export const springSnappy = {
  type: 'spring',
  visualDuration: 0.4,
  bounce: 0.12,
}

/** Hover spring — responsive, lively feel for card lifts */
export const springHover = {
  type: 'spring',
  stiffness: 380,
  damping: 28,
}

/** Tap/press spring — tight, fast feedback */
export const springTap = {
  type: 'spring',
  stiffness: 600,
  damping: 32,
}

/** Bouncy spring — great for attention-grab animations */
export const springBouncy = {
  type: 'spring',
  stiffness: 260,
  damping: 12,
  mass: 1,
}

/** Heavy spring — large page elements, hero sections */
export const springHeavy = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 1.2,
}

// ─── VIEWPORT OPTIONS ────────────────────────────────────────────────────────

/**
 * Trigger once when 20% of the element enters the viewport.
 * Use for most scroll-reveal animations.
 */
export const viewportOnce = { once: true, amount: 0.2 }

/** Trigger every time the element enters/leaves the viewport */
export const viewportRepeat = { once: false, amount: 0.15 }

/** Trigger only when fully visible */
export const viewportFull = { once: true, amount: 1 }

/** Trigger early — fires as soon as any pixel enters */
export const viewportEarly = { once: true, amount: 0.05 }

// ─── FADE VARIANTS ───────────────────────────────────────────────────────────

/** Simple opacity fade-in */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tween },
}

/** Fade up — most common scroll reveal */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSoft },
}

/** Fade down */
export const fadeDown = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: springSoft },
}

/** Fade from left */
export const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: springSoft },
}

/** Fade from right */
export const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: springSoft },
}

// ─── SCALE VARIANTS ──────────────────────────────────────────────────────────

/** Scale up from 90% */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: springSoft },
}

/** Scale up from center — modal/popup entrance */
export const scalePop = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: springSnappy },
  exit: { opacity: 0, scale: 0.85, transition: tweenFast },
}

/** Clip reveal from bottom — banner/hero type */
export const clipRevealUp = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.9, ease: easeOut } },
}

/** Clip reveal from left */
export const clipRevealLeft = {
  hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.8, ease: easeOut } },
}

// ─── STAGGER CONTAINERS ──────────────────────────────────────────────────────

/**
 * Factory: creates a stagger container variant.
 * @param {number} stagger  - delay between each child (default 0.08s)
 * @param {number} delay    - initial delay before first child (default 0s)
 */
export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

/**
 * Factory: stagger container with exit stagger (reverse order).
 */
export const staggerContainerExit = (stagger = 0.05, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
  exit: {
    transition: {
      staggerChildren: stagger,
      staggerDirection: -1,
    },
  },
})

// ─── PAGE / ROUTE TRANSITIONS ────────────────────────────────────────────────

/** Page fade — simple cross-fade between routes */
export const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: tweenFast },
  exit: { opacity: 0, transition: tweenFast },
}

/** Page slide from right (push navigation) */
export const pageSlideRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: springSnappy },
  exit: { opacity: 0, x: -40, transition: tweenFast },
}

/** Page slide from left (back navigation) */
export const pageSlideLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: springSnappy },
  exit: { opacity: 0, x: 40, transition: tweenFast },
}

/** Page slide up (bottom sheet / modal sheet) */
export const pageSlideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: springSnappy },
  exit: { opacity: 0, y: 30, transition: tweenFast },
}

// ─── MODAL / OVERLAY VARIANTS ────────────────────────────────────────────────

/** Overlay backdrop */
export const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

/** Modal panel */
export const modalVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: springSnappy },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: tweenFast },
}

// ─── HOVER TARGETS ───────────────────────────────────────────────────────────

/** Lift card on hover */
export const hoverLiftTarget = { y: -4 }

/** Scale card up on hover */
export const hoverScaleTarget = { scale: 1.03 }

/** Subtle brightness boost on hover */
export const hoverGlowTarget = { filter: 'brightness(1.05)' }

/** Scale down (press) */
export const tapPressTarget = { scale: 0.97 }

// ─── DRAG DEFAULTS ───────────────────────────────────────────────────────────

/** Default drag transition (inertia) */
export const dragInertia = {
  type: 'inertia',
  power: 0.3,
  timeConstant: 200,
  modifyTarget: (t) => Math.round(t / 100) * 100, // snap to 100px grid
}

// ─── SCROLL OFFSET HELPERS ───────────────────────────────────────────────────

/**
 * Track element entering from the bottom.
 * Use with: useScroll({ target: ref, offset: scrollOffsetEnter })
 */
export const scrollOffsetEnter = ['start end', 'end end']

/**
 * Track element exiting at the top.
 * Use with: useScroll({ target: ref, offset: scrollOffsetExit })
 */
export const scrollOffsetExit = ['start start', 'end start']

/**
 * Full viewport traversal (element travels through whole screen).
 */
export const scrollOffsetFull = ['start end', 'end start']
