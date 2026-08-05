export const BRAND = {
  name: 'indicbiz.',
  legalName: 'IndicBiz Digital',
  tagline: 'Digital clarity for ambitious businesses.',
  email: 'hello@indicbiz.com',
  phone: '+91 90000 00000',
  location: 'India · Working worldwide',
}

export const SITE_UI = {
  skipLink: 'Skip to content',
  homeLabel: 'IndicBiz home',
  primaryNavLabel: 'Primary navigation',
  mobileNavLabel: 'Mobile navigation',
  openNavLabel: 'Open navigation',
  closeNavLabel: 'Close navigation',
  headerAction: 'Let’s talk',
  contactGroup: 'Contact',
}

export const PRIMARY_NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'X', href: 'https://x.com/' },
]

export const FOOTER_GROUPS = [
  { title: 'Explore', links: PRIMARY_NAV.slice(1) },
  {
    title: 'Services',
    links: [
      { label: 'Brand identity', to: '/services/brand-identity' },
      { label: 'Web experiences', to: '/services/web-experiences' },
      { label: 'Product design', to: '/services/product-design' },
      { label: 'Growth & SEO', to: '/services/growth-seo' },
    ],
  },
]

export const ROUTE_META = {
  '/': {
    title: 'IndicBiz — Digital clarity for ambitious businesses',
    description: 'Brand, product and web experiences designed to help ambitious businesses grow.',
  },
  '/services': {
    title: 'Services — IndicBiz',
    description: 'Explore brand, web, product and growth services from IndicBiz.',
  },
  '/work': {
    title: 'Our Work — IndicBiz',
    description: 'Selected engagements across brand, web, product and growth from IndicBiz.',
  },
  '/about': {
    title: 'About — IndicBiz',
    description: 'Meet the independent team building useful and memorable digital experiences.',
  },
  '/pricing': {
    title: 'Pricing — IndicBiz',
    description: 'Clear, flexible engagement options for brands at every stage.',
  },
  '/contact': {
    title: 'Start a project — IndicBiz',
    description: 'Tell IndicBiz what you are building and get a thoughtful project response.',
  },
}

export const NOT_FOUND = {
  code: '404',
  title: 'This page wandered off.',
  action: { label: 'Return home', to: '/' },
}

export const ERROR_PAGE = {
  eyebrow: 'Something went wrong',
  title: 'The page could not be displayed.',
  description: 'Try refreshing the page or return to the homepage.',
  action: { label: 'Return home', to: '/' },
}

export const LOGO_PAGE = {
  eyebrow: 'IndicBiz identity',
  title: 'Clarity. Character. Momentum.',
  description: 'The wordmark is intentionally direct: a confident name, a human full stop, and room for the work to speak.',
}
