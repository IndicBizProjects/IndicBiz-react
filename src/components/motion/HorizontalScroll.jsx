import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * HorizontalScroll — GSAP ScrollTrigger-powered horizontal scroll section.
 * The section pins vertically and scrolls its children horizontally.
 *
 * children should be a flat list of panels (full-height, fixed-width).
 * panelWidth: CSS width of each panel, e.g. '80vw' or '640px'
 */
export default function HorizontalScroll({
  children,
  panelWidth = '80vw',
  gap = '2rem',
  className = '',
  style,
  scrub = 1.2,
}) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const totalWidth = track.scrollWidth
      const viewportWidth = containerRef.current?.offsetWidth || window.innerWidth

      gsap.to(track, {
        x: -(totalWidth - viewportWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalWidth - viewportWidth + 120}`,
          pin: true,
          scrub,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [scrub])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow: 'hidden',
        height: '100dvh',
        ...style,
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap,
          alignItems: 'stretch',
          height: '100%',
          paddingInline: 'var(--layout-gutter)',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * HScrollPanel — individual panel inside a HorizontalScroll
 */
export function HScrollPanel({ children, style, className = '' }) {
  return (
    <div
      className={className}
      style={{
        flexShrink: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
