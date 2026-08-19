import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

/**
 * ScrollRevealText — splits text into words/chars and reveals via
 * clip-path or opacity as the element scrolls into view.
 *
 * mode: 'words' | 'chars' | 'lines'
 * reveal: 'clip' | 'fade' | 'slide'
 */
export default function ScrollRevealText({
  text,
  mode = 'words',
  reveal = 'clip',
  delay = 0,
  stagger = 0.04,
  className = '',
  style,
  as: Tag = 'p',
  once = true,
  highlightWords = [],
  highlightColor = '#4d9096',
  highlightClass = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.35 })

  const tokens = useMemo(() => {
    if (mode === 'chars') return text.split('')
    return text.split(' ')
  }, [text, mode])

  const getInitial = () => {
    if (reveal === 'clip') return { clipPath: 'inset(0 100% 0 0)', opacity: 1 }
    if (reveal === 'slide') return { y: '120%', opacity: 0 }
    return { opacity: 0, y: 16 }
  }

  const getAnimate = () => {
    if (reveal === 'clip') return { clipPath: 'inset(0 0% 0 0)', opacity: 1 }
    if (reveal === 'slide') return { y: '0%', opacity: 1 }
    return { opacity: 1, y: 0 }
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: mode === 'chars' ? '0.01em' : '0.22em', ...style }}
      aria-label={text}
    >
      {tokens.map((token, i) => {
        const cleanToken = token.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        const isHighlighted = highlightWords.some(
          (w) => w.toLowerCase() === cleanToken || token.toLowerCase().includes(w.toLowerCase())
        )

        return (
          <span
            key={`${token}-${i}`}
            className={reveal === 'slide' ? 'ag-reveal-mask' : undefined}
            style={{ overflow: reveal === 'slide' ? 'hidden' : 'visible', display: 'inline-block' }}
          >
            <motion.span
              className={isHighlighted ? `hm-hero-highlight ${highlightClass}`.trim() : undefined}
              style={{
                display: 'inline-block',
                paddingBottom: '0.08em',
                color: isHighlighted ? highlightColor : undefined,
              }}
              initial={getInitial()}
              animate={isInView ? getAnimate() : getInitial()}
              transition={{
                type: 'spring',
                visualDuration: reveal === 'clip' ? 0.55 : 0.6,
                bounce: 0,
                delay: delay + i * stagger,
              }}
            >
              {token}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}

/**
 * ScrollProgressText — text whose reveal is tied directly to scroll progress,
 * not just an in-view trigger. Good for large editorial display type.
 */
export function ScrollProgressText({
  text,
  className = '',
  style,
  as: Tag = 'h2',
  activeColor,
  inactiveColor = '#505050',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.2'],
  })

  const words = text.split(' ')

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.28em', ...style }}
      aria-label={text}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = (i + 1) / words.length
        return (
          <WordMask
            key={`${word}-${i}`}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          />
        )
      })}
    </Tag>
  )
}

function WordMask({ word, progress, start, end, activeColor, inactiveColor }) {
  const opacity = useTransform(progress, [start, end], [0.18, 1])
  const y = useTransform(progress, [start, end], [12, 0])

  return (
    <motion.span
      style={{
        display: 'inline-block',
        opacity,
        y,
        color: activeColor || inactiveColor || undefined,
      }}
    >
      {word}
    </motion.span>
  )
}
