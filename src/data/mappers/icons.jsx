import { Code2, Layers3, PenTool, TrendingUp } from 'lucide-react'

const ICONS = {
  code: Code2,
  layers: Layers3,
  pen: PenTool,
  trend: TrendingUp,
}

export function DataIcon({ name, ...props }) {
  const Icon = ICONS[name]
  return Icon ? <Icon aria-hidden="true" {...props} /> : null
}
