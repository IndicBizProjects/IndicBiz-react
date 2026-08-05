export const SERVICES = [
  {
    id: 'brand-identity',
    number: '01',
    icon: 'pen',
    title: 'Brand identity',
    short: 'A distinct visual and verbal system people remember.',
    overview: 'We uncover what makes your business meaningful, then turn that truth into a cohesive identity built to work everywhere.',
    accent: '#b9c97a',
    bestFor: ['New ventures preparing to launch', 'Businesses that have outgrown their identity', 'Teams struggling with inconsistent communication'],
    outcomes: ['A clearer market position', 'A flexible identity system', 'Practical guidance for consistent use'],
    deliverables: [
      'Positioning and creative direction',
      'Logo system and responsive marks',
      'Typography and colour system',
      'Voice, messaging and brand guidelines',
    ],
  },
  {
    id: 'web-experiences',
    number: '02',
    icon: 'code',
    title: 'Web experiences',
    short: 'Fast, expressive websites engineered to earn attention.',
    overview: 'Strategy, design and development come together in responsive digital experiences that feel effortless and perform under pressure.',
    accent: '#86b99d',
    bestFor: ['Businesses replacing a limiting website', 'Teams launching a new digital service', 'Brands that need stronger conversion journeys'],
    outcomes: ['Clear content and navigation', 'Responsive, accessible interfaces', 'A maintainable foundation for growth'],
    deliverables: [
      'Content and information architecture',
      'Responsive UI design systems',
      'React development and CMS integration',
      'Accessibility and performance optimisation',
    ],
  },
  {
    id: 'product-design',
    number: '03',
    icon: 'layers',
    title: 'Product design',
    short: 'Useful interfaces for complex products and services.',
    overview: 'We simplify demanding workflows through research, prototyping and scalable interface systems your team can confidently extend.',
    accent: '#e5bf83',
    bestFor: ['Teams validating a product idea', 'Products with confusing or fragmented flows', 'Organisations building a scalable UI system'],
    outcomes: ['Shared product priorities', 'Testable interaction models', 'Reusable interface patterns'],
    deliverables: [
      'User journeys and product strategy',
      'Wireframes and interactive prototypes',
      'Interface and component systems',
      'Usability testing and handoff',
    ],
  },
  {
    id: 'growth-seo',
    number: '04',
    icon: 'trend',
    title: 'Growth & SEO',
    short: 'A practical growth foundation built on real signals.',
    overview: 'We improve discoverability and conversion with technical rigour, useful content and continuous, evidence-led iteration.',
    accent: '#d1a3a4',
    bestFor: ['Websites with weak organic visibility', 'Teams unsure what to improve next', 'Businesses preparing to scale acquisition'],
    outcomes: ['A prioritised improvement roadmap', 'A healthier technical foundation', 'More useful measurement and content'],
    deliverables: [
      'Technical SEO and analytics audit',
      'Core Web Vitals improvements',
      'Content and search strategy',
      'Conversion journey optimisation',
    ],
  },
]

export const SERVICE_PROCESS = [
  { number: '01', title: 'Discover', description: 'Goals, audience and constraints become a focused brief.' },
  { number: '02', title: 'Define', description: 'We agree the direction, scope and measures of success.' },
  { number: '03', title: 'Design', description: 'Ideas move quickly from concepts into tested systems.' },
  { number: '04', title: 'Deliver', description: 'We launch carefully, measure and continue improving.' },
]

export const SERVICES_PAGE = {
  eyebrow: 'Capabilities',
  title: 'One partner from first idea to meaningful growth.',
  description: 'Small senior teams, direct collaboration and work built around outcomes—not unnecessary deliverables.',
  rowAction: 'Explore service',
  process: {
    eyebrow: 'How we work',
    title: 'A clear path, without the theatre.',
    description: 'Simple stages keep decisions visible and momentum high.',
  },
  cta: {
    eyebrow: 'Not sure where to begin?',
    title: 'Start with the business problem.',
    description: 'We will help identify the smallest, strongest next move.',
    action: { label: 'Talk it through', to: '/contact' },
  },
}

export const SERVICE_DETAIL_COPY = {
  deliverablesEyebrow: 'Typical scope',
  deliverablesTitle: 'What the work can include.',
  fitEyebrow: 'Where it helps',
  fitTitle: 'A strong fit for these situations.',
  outcomesEyebrow: 'Intended outcomes',
  outcomesTitle: 'What the engagement is designed to improve.',
  processEyebrow: 'Our approach',
  processTitle: 'Built together, one useful decision at a time.',
}
