import { motion } from 'framer-motion'
import { springHover, tapScale } from '../../lib/motion'

export default function HoverLift({ children, className = '', y = -5, scale = 1.015, style, ...props }) {
  return (
    <motion.div
      className={className}
      style={{ height: '100%', ...style }}
      whileHover={{ y, scale }}
      whileTap={tapScale}
      transition={springHover}
      {...props}
    >
      {children}
    </motion.div>
  )
}
