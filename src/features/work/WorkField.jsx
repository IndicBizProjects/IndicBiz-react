import { useReducedMotion } from 'framer-motion'
import Topography from '../../components/backgrounds/Topography/Topography'

export default function WorkField() {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null

  return (
    <div className="wk-page-field" aria-hidden="true">
      <Topography
        lowColor="#4d9096"
        midColor="#b9c97a"
        highColor="#0d2426"
        speed={0.22}
        morphAmount={2.35}
        morphSpeed={0.04}
        bands={2.6}
        thickness={0.014}
        scale={1.12}
        pixelSize={1}
        glow={0.45}
        colorMode="elevation"
        contrast={2.4}
        brightness={1}
        fillBands
        opacity={0.5}
        grain
        grainIntensity={0.02}
        mouseInteraction
        mouseRadius={0.34}
        mouseStrength={0.42}
      />
    </div>
  )
}
