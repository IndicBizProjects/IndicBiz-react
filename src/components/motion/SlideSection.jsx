import { motion, useReducedMotion } from 'framer-motion'
import styles from './SlideSection.module.css'

export default function SlideSection({
  children,
  tone = 'light',
  className = '',
  id,
  contain = true,
  style,
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      style={style}
      className={`${styles.slide} ${styles[tone] || ''} ${className}`}
      initial={reduceMotion ? false : { opacity: 0.35, y: 80 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ amount: 0.4, once: false }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.panel}>
        {contain ? <div className={styles.container}>{children}</div> : children}
      </div>
    </motion.section>
  )
}
