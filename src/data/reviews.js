export const REVIEW_CATEGORIES = [
  'Brand Identity',
  'Web Services',
  'Product Design',
  'Growth & SEO',
  'Other',
]

export const REVIEW_RATING_FACTORS = [
  {
    key: 'quality',
    label: 'Quality of service',
    columns: ['Quality of service', 'Service quality', 'quality'],
  },
  {
    key: 'delivery',
    label: 'Timeliness of delivery',
    columns: ['Timeliness of delivery', 'Delivery time', 'delivery'],
  },
  {
    key: 'communication',
    label: 'Communication and response',
    columns: [
      'Communication and response',
      'Clarity of communication',
      'Speed of response',
      'Communication',
      'Response time',
      'Time of response',
      'communication',
      'response',
    ],
  },
]

export const REVIEW_PROJECTS = [
  { label: 'Destinize Tours', id: 'destinize-tours' },
  { label: 'Blitz India Engineering', id: 'blitz-india-engineering' },
  { label: 'Tamooz', id: 'tamooz' },
]

export function projectIdFromLabel(label) {
  const match = REVIEW_PROJECTS.find((item) => item.label.toLowerCase() === String(label || '').trim().toLowerCase())
  return match?.id || ''
}
