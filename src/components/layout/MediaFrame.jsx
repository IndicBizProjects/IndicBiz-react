import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { easeOut, viewportOnce } from '../../lib/motion'

export default function MediaFrame({
  src,
  alt = '',
  className = '',
  style,
  radius = '28px',
  parallax = true,
  aspect = '16 / 9',
  objectPosition,
  imgStyle,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1])

  return (
    <motion.div
      ref={ref}
      className={`ag-media ${className}`.trim()}
      style={{ borderRadius: radius, aspectRatio: aspect, ...style }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.75, ease: easeOut }}
    >
      {parallax ? (
        <motion.img
          src={src}
          alt={alt}
          className="ag-media-shift"
          style={{ y, scale, objectPosition, ...imgStyle }}
          loading="lazy"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          style={{ objectPosition, ...imgStyle }}
          loading="lazy"
        />
      )}
    </motion.div>
  )
}
