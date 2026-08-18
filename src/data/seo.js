import { BRAND, SOCIAL_LINKS } from './site'
import { SERVICES } from './services'
import { WORK_PROJECTS } from './work'
import { CONTACT_FAQS } from './contact'
import { PRICING_FAQS } from './pricing'
import { TEAM } from './about'

export const SITE_URL = 'https://indicbiz.com'
export const DEFAULT_OG_IMAGE = 'https://indicbiz.com/favicon.svg'

export const GLOBAL_SEO = {
  siteName: 'IndicBiz',
  legalName: 'IndicBiz Digital',
  siteUrl: SITE_URL,
  locale: 'en_US',
  twitterHandle: '@IndicBiz',
  defaultImage: DEFAULT_OG_IMAGE,
  defaultImageAlt: 'IndicBiz — Digital clarity for ambitious businesses',
  themeColor: '#08090B',
  geoRegion: 'IN',
  geoPlacename: 'India',
  keywords: [
    'IndicBiz',
    'IndicBiz Digital',
    'digital agency India',
    'creative agency',
    'brand identity design',
    'logo design India',
    'web development agency',
    'React development',
    'product design UI UX',
    'SEO agency India',
    'growth marketing',
    'digital strategy agency',
    'high performance websites',
    'independent digital studio',
  ],
}

export const STUDIO_KNOWLEDGE_FAQS = [
  {
    question: 'Who is IndicBiz and what does the studio do?',
    answer:
      'IndicBiz is an independent digital studio based in India that combines brand identity, bespoke React 19 web development, UI/UX product design, and SEO/AEO growth systems to build high-performance digital presence for ambitious businesses worldwide.',
  },
  {
    question: 'Does IndicBiz work with international clients?',
    answer:
      'Yes. IndicBiz partners with founders, startups, and established enterprises across North America, Europe, the Middle East, and Asia-Pacific using remote-first asynchronous workflows.',
  },
  {
    question: 'What services does IndicBiz offer?',
    answer:
      'IndicBiz offers 4 core integrated services: 1) Brand Strategy & Identity (positioning, logo systems, motion marks, guidelines), 2) Web Experiences (React 19, Vite, Tailwind CSS v4, GSAP, Lenis, WebGL), 3) Product Design (user journeys, interactive Figma prototypes, design systems), and 4) Growth & SEO (technical SEO, AEO for AI search engines, Core Web Vitals, CRO).',
  },
  {
    question: 'What tech stack does IndicBiz build websites with?',
    answer:
      'IndicBiz builds custom frontend architectures using React 19, Vite, Next.js, Node.js, Tailwind CSS v4, Framer Motion, GSAP, Lenis smooth scrolling, Three.js/WebGL shaders, and semantic HTML5 optimized for 95+ Core Web Vitals.',
  },
  {
    question: 'What is Answer Engine Optimization (AEO) and does IndicBiz optimize for it?',
    answer:
      'Answer Engine Optimization (AEO) is the practice of structuring content, Schema.org graphs, and llms.txt specifications so AI search engines (ChatGPT, Perplexity, Claude, Copilot) cite and recommend your brand accurately. IndicBiz integrates AEO standards into every build.',
  },
  {
    question: 'How are projects structured and priced?',
    answer:
      'IndicBiz operates on transparent fixed-fee milestone agreements and ongoing monthly retainers with direct access to senior practitioners, transparent check-ins, and complete handover of all source code, Figma files, and IP.',
  },
  {
    question: 'How do you start a project with IndicBiz?',
    answer:
      'Submit your project requirements at https://indicbiz.com/contact or email info@indicbiz.com. We review the scope and reply within 2 business days.',
  },
]

export const STATIC_ROUTE_SEO = {
  '/': {
    title: 'IndicBiz | Digital clarity for ambitious businesses',
    description: 'We bring together brand strategy, creative identity, high-performance web development, and digital growth to turn ambitious business ideas into clear, measurable outcomes.',
    keywords: ['IndicBiz', 'digital agency', 'brand identity', 'web development', 'product design UI UX', 'digital growth SEO'],
    ogType: 'website',
    priority: 1.0,
    changefreq: 'weekly',
  },
  '/services': {
    title: 'Digital Capabilities & Services | IndicBiz',
    description: 'Explore IndicBiz capabilities across Brand Identity, Web Experiences, Product Design, and Growth & SEO. Built for ambitious brands that value clarity and performance.',
    keywords: ['brand strategy services', 'custom website design', 'React development services', 'UI UX product design', 'technical SEO services', 'digital agency capabilities'],
    ogType: 'website',
    priority: 0.9,
    changefreq: 'weekly',
  },
  '/work': {
    title: 'Selected Work & Case Studies | IndicBiz',
    description: 'Explore verified case studies and digital engagements across brand identity, travel platforms, engineering corporate presence, and product interfaces.',
    keywords: ['IndicBiz portfolio', 'web design case studies', 'branding projects', 'React web applications', 'corporate website design portfolio'],
    ogType: 'website',
    priority: 0.9,
    changefreq: 'weekly',
  },
  '/about': {
    title: 'About the Studio | IndicBiz',
    description: 'Meet the independent team behind IndicBiz. Direct collaboration, thoughtful craft, transparent decisions, and digital systems built for long-term momentum.',
    keywords: ['about IndicBiz', 'independent design studio India', 'creative team', 'digital agency founders', 'design engineering team'],
    ogType: 'website',
    priority: 0.7,
    changefreq: 'monthly',
  },
  '/pricing': {
    title: 'Engagement Models & Pricing | IndicBiz',
    description: 'Transparent starting points and structured engagement options for ambitious brands at every stage—from early foundation to full digital partnerships.',
    keywords: ['digital agency pricing', 'branding project cost', 'website development pricing India', 'agency engagement models'],
    ogType: 'website',
    priority: 0.7,
    changefreq: 'monthly',
  },
  '/contact': {
    title: 'Start a Project | IndicBiz',
    description: 'Tell IndicBiz what you are building. Receive a thoughtful, direct proposal with scope and milestones within two business days.',
    keywords: ['hire digital agency', 'start a project IndicBiz', 'contact creative agency', 'website quote', 'brand design enquiry'],
    ogType: 'website',
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/indic': {
    title: 'IndicBiz Identity & Wordmark | IndicBiz',
    description: 'The philosophy, character, and visual grammar behind the IndicBiz wordmark and digital identity.',
    keywords: ['IndicBiz logo', 'brand wordmark', 'visual identity story'],
    ogType: 'website',
    priority: 0.5,
    changefreq: 'yearly',
  },
}

/**
 * Resolves SEO metadata dynamically for any route (including /services/:id and /work/:id)
 */
export function getRouteSeo(pathname) {
  const cleanPath = String(pathname || '/').replace(/\/+$/, '') || '/'

  // 1. Check exact static route
  if (STATIC_ROUTE_SEO[cleanPath]) {
    return {
      pathname: cleanPath,
      url: `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`,
      ...STATIC_ROUTE_SEO[cleanPath],
    }
  }

  // 2. Dynamic Service Detail: /services/:id
  if (cleanPath.startsWith('/services/')) {
    const serviceId = cleanPath.replace('/services/', '')
    const service = SERVICES.find((s) => s.id === serviceId)
    if (service) {
      return {
        pathname: cleanPath,
        url: `${SITE_URL}${cleanPath}`,
        title: `${service.title} Services | IndicBiz`,
        description: `${service.overview} Deliverables include ${service.deliverables.slice(0, 3).join(', ')}.`,
        keywords: [service.title, `${service.title} agency`, ...service.deliverables, ...service.outcomes, 'IndicBiz services'],
        ogType: 'article',
        priority: 0.8,
        changefreq: 'monthly',
        serviceData: service,
      }
    }
  }

  // 3. Dynamic Work Case Study Detail: /work/:id
  if (cleanPath.startsWith('/work/')) {
    const projectId = cleanPath.replace('/work/', '')
    const project = WORK_PROJECTS.find((p) => p.id === projectId)
    if (project) {
      return {
        pathname: cleanPath,
        url: `${SITE_URL}${cleanPath}`,
        title: `${project.title} — ${project.category} Case Study | IndicBiz`,
        description: `${project.summary} Challenge: ${project.challenge} Outcome: ${project.outcome}`,
        keywords: [project.title, project.category, ...project.focus, 'IndicBiz case study', 'portfolio engagement'],
        ogType: 'article',
        priority: 0.8,
        changefreq: 'monthly',
        projectData: project,
      }
    }
  }

  // Fallback default
  return {
    pathname: cleanPath,
    url: `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`,
    ...STATIC_ROUTE_SEO['/'],
  }
}

/**
 * Builds Schema.org JSON-LD structured data graph for the given route
 */
export function buildJsonLdGraph(pathname, seo) {
  const cleanPath = String(pathname || '/').replace(/\/+$/, '') || '/'

  // 1. Organization & ProfessionalService Schema
  const organizationSchema = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: BRAND.name.replace(/\.$/, ''),
    legalName: BRAND.legalName,
    alternateName: 'IndicBiz',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
      width: 512,
      height: 512,
    },
    image: DEFAULT_OG_IMAGE,
    description: BRAND.tagline,
    email: BRAND.email,
    telephone: BRAND.phone,
    priceRange: '₹₹ - ₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'India',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.5937,
      longitude: 78.9629,
    },
    sameAs: SOCIAL_LINKS.map((s) => s.href),
    founder: TEAM.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
    })),
    knowsAbout: [
      'Brand Strategy',
      'Logo & Motion Design',
      'Web Development',
      'React Applications',
      'UI/UX Design',
      'Search Engine Optimization',
      'Answer Engine Optimization',
      'Conversion Rate Optimization',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
  }

  // 2. WebSite Schema
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'IndicBiz',
    alternateName: 'IndicBiz Digital Agency',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-US',
  }

  // 3. BreadcrumbList Schema
  const breadcrumbItems = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }]
  if (cleanPath !== '/') {
    const segments = cleanPath.split('/').filter(Boolean)
    let currentUrl = SITE_URL
    segments.forEach((seg, idx) => {
      currentUrl += `/${seg}`
      const formattedName = seg
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: idx + 2,
        name: formattedName,
        item: currentUrl,
      })
    })
  }

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${cleanPath}#breadcrumb`,
    itemListElement: breadcrumbItems,
  }

  const graph = [organizationSchema, websiteSchema, breadcrumbSchema]

  // 4. Route-specific: Service Schema
  if (seo.serviceData) {
    const service = seo.serviceData
    graph.push({
      '@type': 'Service',
      '@id': `${SITE_URL}${cleanPath}#service`,
      name: service.title,
      serviceType: service.title,
      description: service.overview,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.title} Deliverables`,
        itemListElement: service.deliverables.map((item, idx) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item,
          },
          position: idx + 1,
        })),
      },
    })
  }

  // 5. Route-specific: CreativeWork / Portfolio Case Study Schema
  if (seo.projectData) {
    const project = seo.projectData
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${SITE_URL}${cleanPath}#case-study`,
      headline: project.title,
      alternativeHeadline: project.category,
      description: project.summary,
      creator: {
        '@id': `${SITE_URL}/#organization`,
      },
      genre: project.category,
      keywords: (project.focus || []).join(', '),
      mainEntityOfPage: `${SITE_URL}${cleanPath}`,
      url: project.websiteUrl || `${SITE_URL}${cleanPath}`,
      datePublished: '2025-01-01',
    })
  }

  // 6. Route-specific: FAQPage Schema (For Home, About, Contact, Pricing, or Services)
  let faqs = []
  if (cleanPath === '/' || cleanPath === '/about' || cleanPath === '/services') {
    faqs = [...faqs, ...STUDIO_KNOWLEDGE_FAQS]
  }
  if (cleanPath === '/' || cleanPath === '/contact') {
    faqs = [...faqs, ...CONTACT_FAQS]
  }
  if (cleanPath === '/' || cleanPath === '/pricing') {
    faqs = [...faqs, ...PRICING_FAQS]
  }

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${SITE_URL}${cleanPath}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
