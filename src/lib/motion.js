export const easeOut = [0.16, 1, 0.3, 1]
export const easeInOut = [0.65, 0, 0.35, 1]
export const easeSnappy = [0.25, 1, 0.5, 1]

export const tween = {
  duration: 0.7,
  ease: easeOut,
}

export const springSoft = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 0.8,
}

export const springHover = {
  type: 'spring',
  stiffness: 380,
  damping: 26,
  mass: 0.5,
}

export const springSnappy = {
  type: 'spring',
  stiffness: 420,
  damping: 30,
}

export const springBouncy = {
  type: 'spring',
  stiffness: 320,
  damping: 18,
  mass: 0.6,
}

export const springCard = {
  type: 'spring',
  stiffness: 340,
  damping: 26,
}

export const tapScale = {
  scale: 0.96,
  transition: { duration: 0.12, ease: 'easeOut' },
}

export const tapButton = {
  scale: 0.94,
  y: 1,
  transition: { duration: 0.1, ease: 'easeOut' },
}

export const viewportOnce = {
  once: true,
  amount: 0.2,
}

export const viewportEarly = {
  once: true,
  amount: 0.1,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSoft,
  },
}

export const fadeUpScale = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSoft,
  },
}

export const tagPop = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springBouncy,
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springSoft,
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springSoft,
  },
}

export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

export const staggerFast = (stagger = 0.05, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})
