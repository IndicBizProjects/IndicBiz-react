import { motion } from 'framer-motion'
import logo from '../../assets/logo/IndicBiz logo-01.svg'

export default function BrandMark({ className = '' }) {
  return (
    <motion.span
      className={`ib-brand ${className}`.trim()}
      whileHover="hover"
      initial="initial"
    >
      <motion.img
        src={logo}
        alt=""
        className="ib-brand-mark"
        width="36"
        height="36"
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { rotate: 8, scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 15 } },
        }}
      />
      <span className="ib-brand-word">
        indicbiz
        <motion.span
          className="brand-dot"
          variants={{
            initial: { scale: 1 },
            hover: {
              scale: [1, 1.4, 1],
              transition: { duration: 0.5, repeat: Infinity, repeatDelay: 0.8 },
            },
          }}
        >
          .
        </motion.span>
      </span>
    </motion.span>
  )
}
