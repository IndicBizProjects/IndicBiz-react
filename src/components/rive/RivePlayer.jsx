import { useEffect, useState } from 'react'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

/**
 * RivePlayer — clean, production-ready Rive embed.
 * Parent must give the wrapper an explicit width/height.
 */
export default function RivePlayer({
  src,
  stateMachines,
  animations,
  artboard,
  autoplay = true,
  fit = Fit.Contain,
  alignment = Alignment.Center,
  className = '',
  style,
  onReady,
}) {
  const [failed, setFailed] = useState(false)

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines,
    animations,
    artboard,
    autoplay,
    layout: new Layout({ fit, alignment }),
    onLoad: () => onReady?.(true),
    onLoadError: () => {
      setFailed(true)
      onReady?.(false)
    },
  })

  useEffect(() => () => rive?.cleanup(), [rive])

  if (failed) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'grid',
          placeItems: 'center',
          background: 'radial-gradient(circle at 40% 35%, rgba(200,240,74,0.12), transparent 55%)',
        }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className={className} style={{ width: '100%', height: '100%', ...style }}>
      <RiveComponent style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export { Fit, Alignment }
