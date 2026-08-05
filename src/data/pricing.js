export const PRICING_HERO = {
  eyebrow: 'Engagements',
  title: 'Clear scope. Honest value. No mystery.',
  description: 'Choose a focused starting point. We refine the scope together before any commitment is made.',
}

export const PRICING_PLANS = [
  {
    name: 'Foundation',
    price: '₹15k–₹30k',
    description: 'For new businesses that need a credible, focused start.',
    featured: false,
    features: ['Discovery workshop', 'Focused visual direction', 'Essential web presence', 'Launch guidance'],
  },
  {
    name: 'Momentum',
    price: '₹40k–₹80k',
    description: 'For growing brands ready for a complete digital system.',
    featured: true,
    features: ['Strategy and positioning', 'Custom design system', 'Responsive React build', 'Performance and SEO'],
  },
  {
    name: 'Partnership',
    price: 'Custom',
    description: 'For complex products, platforms or ongoing growth.',
    featured: false,
    features: ['Senior embedded team', 'Flexible roadmap', 'Product and growth design', 'Continuous optimisation'],
  },
]

export const PRICING_FAQS = [
  { question: 'What determines the final price?', answer: 'Scope, complexity, content readiness and timeline. You receive a clear proposal with deliverables and milestones before work begins.' },
  { question: 'Can we start with a smaller phase?', answer: 'Yes. A focused discovery or design phase is often the best way to reduce risk before a larger build.' },
  { question: 'How long does a typical project take?', answer: 'Focused engagements usually take three to six weeks. Larger product or platform work is planned in transparent phases.' },
  { question: 'Do you support the work after launch?', answer: 'Yes. We offer handover support, improvement sprints and ongoing partnerships when they create real value.' },
]

export const ENGAGEMENT_INCLUSIONS = [
  { number: '01', title: 'A written scope', description: 'Deliverables, responsibilities, milestones and exclusions are agreed before work starts.' },
  { number: '02', title: 'Regular working reviews', description: 'You see progress throughout the engagement and know which decisions are needed next.' },
  { number: '03', title: 'Organised handover', description: 'Final assets, source files and practical guidance are prepared for continued use.' },
  { number: '04', title: 'A realistic launch plan', description: 'The final phase covers checks, ownership and the immediate post-launch priorities.' },
]

export const PRICING_SECTIONS = {
  plans: { eyebrow: 'Starting points', title: 'Choose the shape that fits today.' },
  inclusions: { eyebrow: 'Every engagement', title: 'The essentials are never optional extras.' },
  faq: { eyebrow: 'Questions', title: 'Useful details before we begin.' },
}

export const PRICING_CTA = {
  eyebrow: 'Need a precise estimate?',
  title: 'A short conversation brings the numbers into focus.',
  description: 'Tell us what you are planning and we will recommend the leanest useful scope.',
  action: { label: 'Request a proposal', to: '/contact' },
}
