import { motion } from 'framer-motion'
import { easeOut, springSoft, staggerContainer, viewportOnce } from '../../lib/motion'

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  y = 32,
  x = 0,
  direction,
  scale = 1,
  blur = false,
  once = true,
  threshold = 0.15,
  style,
  ...props
}) {
  let initialX = x
  let initialY = y

  if (direction === 'up') {
    initialY = 32
    initialX = 0
  } else if (direction === 'down') {
    initialY = -32
    initialX = 0
  } else if (direction === 'left') {
    initialX = 32
    initialY = 0
  } else if (direction === 'right') {
    initialX = -32
    initialY = 0
  } else if (direction === 'none') {
    initialX = 0
    initialY = 0
  }

  const initialStyle = {
    opacity: 0,
    y: initialY,
    x: initialX,
    scale: scale === 1 ? 0.98 : scale,
    ...(blur ? { filter: 'blur(8px)' } : {}),
  }

  const animateStyle = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    ...(blur ? { filter: 'blur(0px)' } : {}),
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={initialStyle}
      whileInView={animateStyle}
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay, ease: easeOut }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({ children, className = '', stagger = 0.08, delay = 0, threshold = 0.12, style, ...props }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, amount: threshold }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', style, variants, ...props }) {
  const defaultVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: springSoft,
    },
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants || defaultVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}
