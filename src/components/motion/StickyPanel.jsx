import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

/**
 * StickyPanel — left column sticks while right column scrolls.
 * items: array of { id, heading, body, eyebrow? }
 */
export default function StickyPanel({
  items = [],
  leftContent,
  renderItem,
  className = '',
  style,
  accentColor = 'var(--accent)',
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'start',
        ...style,
      }}
    >
      {/* Sticky left */}
      <div style={{ position: 'sticky', top: 'calc(var(--header-height) + 2rem)' }}>
        {leftContent || (
          <div>
            {items.map((item, i) => (
              <StickyNavItem
                key={item.id ?? i}
                item={item}
                active={activeIndex === i}
                accentColor={accentColor}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Scrolling right panels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
        {items.map((item, i) => (
          <ScrollPanel
            key={item.id ?? i}
            item={item}
            index={i}
            onActivate={setActiveIndex}
            renderItem={renderItem}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  )
}

function StickyNavItem({ item, active, accentColor, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.25rem 0',
        borderBottom: '1px solid var(--line)',
        background: 'none',
        border: 'none',
        borderBottom: '1px solid var(--line)',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        opacity: active ? 1 : 0.38,
        transition: 'opacity 0.3s ease',
      }}
    >
      <motion.span
        style={{
          width: 3,
          height: 28,
          borderRadius: 2,
          background: active ? accentColor : 'var(--line-mid)',
          flexShrink: 0,
          transition: 'background 0.3s ease',
        }}
        layoutId="stickyBar"
      />
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
          letterSpacing: '-0.03em',
          color: active ? 'var(--ink)' : 'var(--ink-mid)',
          transition: 'color 0.3s ease',
        }}
      >
        {item.heading}
      </span>
    </button>
  )
}

function ScrollPanel({ item, index, onActivate, renderItem, accentColor }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  // Update active index when this panel is in view
  if (isInView) onActivate(index)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {renderItem ? (
        renderItem(item, index)
      ) : (
        <div>
          {item.eyebrow && (
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: accentColor,
              marginBottom: '0.75rem',
            }}>
              {item.eyebrow}
            </p>
          )}
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            letterSpacing: '-0.03em',
            marginBottom: '0.9rem',
            lineHeight: 1.08,
          }}>
            {item.heading}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-lg)',
            lineHeight: 1.7,
            color: 'var(--ink-mid)',
          }}>
            {item.body}
          </p>
        </div>
      )}
    </motion.div>
  )
}
