import { motion } from 'framer-motion'
import { easeOut, springSoft, staggerContainer, viewportOnce } from '../../lib/motion'

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  y = 32,
  x = 0,
  scale = 1,
  once = true,
  threshold = 0.15,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, x, scale: scale === 1 ? 0.98 : scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({ children, className = '', stagger = 0.08, delay = 0, threshold = 0.12 }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, amount: threshold }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={{
      hidden: { opacity: 0, y: 28 },
      visible: {
        opacity: 1,
        y: 0,
        transition: springSoft,
      },
    }}
    >
      {children}
    </motion.div>
  )
}
