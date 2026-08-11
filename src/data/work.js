export const WORK_HERO = {
  eyebrow: 'Our work',
  title: 'Selected engagements and the problems behind them.',
  description: 'A focused look at the kinds of digital challenges we take on—identity, websites, products and growth—without invented awards or unsupported results.',
}

export const WORK_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'brand-identity', label: 'Brand' },
  { id: 'web-experiences', label: 'Web' },
  { id: 'product-design', label: 'Product' },
  { id: 'growth-seo', label: 'Growth' },
]

export const WORK_PROJECTS = [
  {
    id: 'destinize-tours',
    number: '01',
    title: 'Destinize Tours',
    category: 'Web experiences',
    serviceId: 'web-experiences',
    summary: 'A comprehensive travel booking platform and website rebuilt for clarity, speed and day-to-day usability.',
    challenge: 'Content had grown faster than the structure around it, making discovery and booking harder than they needed to be.',
    approach: 'We reorganised information architecture, refined the interface and delivered a responsive React foundation ready for ongoing content work.',
    outcome: 'Clearer navigation, faster page performance and a booking flow the team can maintain with confidence.',
    focus: ['Information architecture', 'Responsive UI', 'Performance'],
    image: '/work/destinize-tours.png',
    gallery: [
      '/work/destinize-tours-1.png',
      '/work/destinize-tours-2.png',
      '/work/destinize-tours-3.png',
      '/work/destinize-tours-4.png'
    ],
    imageAlt: 'Destinize Tours website preview',
    websiteUrl: 'https://destinizetours.com/',
    accent: '#86b99d',
  },
  {
    id: 'blitz-india-engineering',
    number: '02',
    title: 'Blitz India Engineering',
    category: 'Corporate presence',
    serviceId: 'web-experiences',
    summary: 'A professional corporate website designed to showcase engineering capabilities and establish industry trust.',
    challenge: 'The business needed an identity that felt distinctive and a digital presence that clearly communicated their engineering expertise.',
    approach: 'We clarified positioning, built a flexible visual system and translated it into practical brand and digital guidance.',
    outcome: 'A coherent corporate identity ready for web and everyday communication with stakeholders.',
    focus: ['Positioning', 'Visual system', 'Corporate identity'],
    image: '/work/blitz-india.png',
    gallery: [
      '/work/blitz-india-1.png',
      '/work/blitz-india-2.png',
      '/work/blitz-india-3.png',
      '/work/blitz-india-4.png'
    ],
    imageAlt: 'Blitz India Engineering website preview',
    websiteUrl: 'https://blitzindiaengineering.com/',
    accent: '#e5bf83',
  },
  {
    id: 'tamooz',
    number: '03',
    title: 'Tamooz',
    category: 'Product design',
    serviceId: 'product-design',
    summary: 'A modern product interface designed to turn complex data into calm, actionable decisions.',
    challenge: 'Users were struggling to navigate the application and see priorities at a glance.',
    approach: 'Through journey mapping and prototyping, we defined a clearer task model and a reusable component system for core workflows.',
    outcome: 'A more focused product experience with shared patterns the engineering team can extend.',
    focus: ['User journeys', 'Prototyping', 'Design systems'],
    image: '/work/tamooz.png',
    gallery: [
      '/work/tamooz-1.png',
      '/work/tamooz-2.png',
      '/work/tamooz-3.png',
      '/work/tamooz-4.png'
    ],
    imageAlt: 'Tamooz product preview',
    websiteUrl: 'https://tamooz.vercel.app/',
    accent: '#d1a3a4',
  },
]

export const WORK_SECTIONS = {
  projects: {
    eyebrow: 'Selected work',
    title: 'Engagements shaped around real business problems.',
    description: 'Each project below represents a typical IndicBiz engagement pattern. Details describe the problem type, approach and intended outcome.',
  },
  method: {
    eyebrow: 'How we present work',
    title: 'Honest context over manufactured case studies.',
  },
}

export const WORK_UI = {
  filterLabel: 'Filter projects by service',
  relatedService: 'Related service',
  visitWebsite: 'Visit website',
  challenge: 'Challenge',
  approach: 'Approach',
  outcome: 'Outcome',
}

export const WORK_METHOD = [
  {
    number: '01',
    title: 'Problem first',
    description: 'We lead with the challenge and the decisions that mattered, not decorative screenshots alone.',
  },
  {
    number: '02',
    title: 'Practical outcomes',
    description: 'We describe what the engagement was designed to improve—clarity, usability, systems and momentum.',
  },
  {
    number: '03',
    title: 'No invented claims',
    description: 'Where client-specific results are not available to share, we keep the language representative and honest.',
  },
]

export const WORK_CTA = {
  eyebrow: 'Have a similar challenge?',
  title: 'Bring us the problem you need solved next.',
  description: 'Share the context and constraints. We will recommend the leanest useful starting point.',
  action: { label: 'Start a project', to: '/contact' },
}
