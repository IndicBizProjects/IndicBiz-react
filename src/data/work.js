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
    id: 'editorial-platform',
    number: '01',
    title: 'Editorial platform',
    category: 'Web experiences',
    serviceId: 'web-experiences',
    summary: 'A publishing-focused website rebuilt for clarity, speed and day-to-day usability.',
    challenge: 'Content had grown faster than the structure around it, making discovery and publishing harder than they needed to be.',
    approach: 'We reorganised information architecture, refined the interface and delivered a responsive React foundation ready for ongoing content work.',
    outcome: 'Clearer navigation, faster page performance and a publishing flow the team can maintain with confidence.',
    focus: ['Information architecture', 'Responsive UI', 'Performance'],
    image: '/work/editorial-platform.svg',
    imageAlt: 'Editorial platform website preview placeholder',
    websiteUrl: '',
    accent: '#86b99d',
  },
  {
    id: 'operations-dashboard',
    number: '02',
    title: 'Operations dashboard',
    category: 'Product design',
    serviceId: 'product-design',
    summary: 'A product interface designed to turn dense operational data into calm, actionable decisions.',
    challenge: 'Teams were switching between fragmented tools and struggling to see priorities at a glance.',
    approach: 'Through journey mapping and prototyping, we defined a clearer task model and a reusable component system for core workflows.',
    outcome: 'A more focused product experience with shared patterns the engineering team can extend.',
    focus: ['User journeys', 'Prototyping', 'Design systems'],
    image: '/work/operations-dashboard.svg',
    imageAlt: 'Operations dashboard product preview placeholder',
    websiteUrl: '',
    accent: '#e5bf83',
  },
  {
    id: 'hospitality-launch',
    number: '03',
    title: 'Hospitality launch',
    category: 'Brand identity',
    serviceId: 'brand-identity',
    summary: 'A warm brand system created to carry a hospitality business from first impression to digital presence.',
    challenge: 'The business needed an identity that felt distinctive without becoming difficult to apply across channels.',
    approach: 'We clarified positioning, built a flexible visual system and translated it into practical brand and digital guidance.',
    outcome: 'A coherent identity ready for print, web and everyday communication.',
    focus: ['Positioning', 'Visual system', 'Brand guidelines'],
    image: '/work/hospitality-launch.svg',
    imageAlt: 'Hospitality brand website preview placeholder',
    websiteUrl: '',
    accent: '#d1a3a4',
  },
  {
    id: 'search-foundation',
    number: '04',
    title: 'Search foundation',
    category: 'Growth & SEO',
    serviceId: 'growth-seo',
    summary: 'A practical growth engagement focused on technical health, content clarity and conversion priorities.',
    challenge: 'Organic visibility was limited and improvement efforts lacked a clear order of importance.',
    approach: 'We audited technical and content foundations, prioritised high-impact fixes and defined a measured roadmap for continued growth.',
    outcome: 'A healthier site foundation and a clearer sequence of improvements to pursue next.',
    focus: ['Technical SEO', 'Content strategy', 'Conversion'],
    image: '/work/search-foundation.svg',
    imageAlt: 'Search performance dashboard preview placeholder',
    websiteUrl: '',
    accent: '#b9c97a',
  },
  {
    id: 'studio-presence',
    number: '05',
    title: 'Studio presence',
    category: 'Web experiences',
    serviceId: 'web-experiences',
    summary: 'A premium marketing site designed to explain services, process and next steps without unnecessary noise.',
    challenge: 'The business needed a digital presence that felt considered while remaining easy to navigate and update.',
    approach: 'We shaped a restrained visual language, clear page hierarchy and a modular React build for long-term maintainability.',
    outcome: 'A website that presents the offer clearly and supports stronger first conversations.',
    focus: ['Brand expression', 'Content hierarchy', 'React build'],
    image: '/work/studio-presence.svg',
    imageAlt: 'Creative studio website preview placeholder',
    websiteUrl: '',
    accent: '#86b99d',
  },
  {
    id: 'service-system',
    number: '06',
    title: 'Service system',
    category: 'Product design',
    serviceId: 'product-design',
    summary: 'An interface system created to help a service team manage requests, status and handoffs more clearly.',
    challenge: 'Internal process lived across spreadsheets and messaging tools, creating avoidable friction.',
    approach: 'We mapped the real workflow, designed a focused product surface and prepared reusable states for common service scenarios.',
    outcome: 'A clearer operating rhythm and an interface the team can grow without redesigning from scratch.',
    focus: ['Workflow design', 'Interface systems', 'Handoff'],
    image: '/work/service-system.svg',
    imageAlt: 'Service management interface preview placeholder',
    websiteUrl: '',
    accent: '#e5bf83',
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
