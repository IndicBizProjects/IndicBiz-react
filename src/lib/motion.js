export const easeOut = [0.16, 1, 0.3, 1]

export const tween = {
  duration: 0.7,
  ease: easeOut,
}

export const springSoft = {
  type: 'spring',
  visualDuration: 0.55,
  bounce: 0.08,
}

export const springHover = {
  type: 'spring',
  stiffness: 380,
  damping: 28,
}

export const viewportOnce = {
  once: true,
  amount: 0.2,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
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
