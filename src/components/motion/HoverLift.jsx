import { motion } from 'framer-motion'
import { springHover } from '../../lib/motion'

export default function HoverLift({ children, className = '', y = -4, style }) {
  return (
    <motion.div
      className={className}
      style={{ height: '100%', ...style }}
      whileHover={{ y }}
      transition={springHover}
    >
      {children}
    </motion.div>
  )
}
