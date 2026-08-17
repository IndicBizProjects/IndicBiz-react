import brandIdentityImage from '../assets/Services/brandidentity.png'
import webExperiencesImage from '../assets/Services/webexp.png'
import productDesignImage from '../assets/Services/productdesign.jpg'
import growthSeoImage from '../assets/Services/growth.jpg'

export const SERVICES = [
  {
    id: 'brand-identity',
    number: '01',
    icon: 'pen',
    title: 'Brand identity',
    short: 'Logo, motion, cards, profiles, and the system that holds it together.',
    overview: 'We uncover what makes your business meaningful, then turn that truth into a complete identity: logo, logo animation, business cards, company profiles and every piece the team needs to stay consistent.',
    accent: '#b9c97a',
    image: brandIdentityImage,
    bestFor: ['New ventures preparing to launch', 'Businesses that have outgrown their identity', 'Teams struggling with inconsistent communication'],
    outcomes: ['A mark people remember', 'A kit ready for print and digital', 'Practical rules the team can follow'],
    deliverables: [
      'Logo system and responsive marks',
      'Logo animation and motion marks',
      'Business cards and stationery',
      'Company profiles and brand guidelines',
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
    image: webExperiencesImage,
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
    image: productDesignImage,
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
    image: growthSeoImage,
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
  description: 'Small senior teams, direct collaboration and work built around outcomes, not unnecessary deliverables.',
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

export const PRODUCT_DESIGN_DETAIL = {
  featuredTitle: 'Journeys, prototypes, systems, handoff.',
  heroAction: 'Start a product brief',
  ctaTitle: 'Ready to simplify a demanding product?',
  chip: 'Research, prototypes and systems your team can extend.',
  story: {
    eyebrow: 'The complete product engagement',
    title: 'Not a set of screens. A model you can build on.',
    lead: 'Most product work we take on is already in motion. Screens exist. Users get stuck. Teams disagree on what matters next.',
    paragraphs: [
      'We start with the work people are trying to finish, not a gallery of mockups. Journeys, constraints and the decisions that keep getting stuck become the brief.',
      'Then we prototype the important flows, test whether the model holds, and leave a reusable interface system engineering can extend without waiting on us for every new screen.',
    ],
  },
  featured: [
    {
      number: '01',
      title: 'User journeys',
      body: 'Map the real tasks, the friction, and the smallest set of product decisions that would make the next phase useful.',
    },
    {
      number: '02',
      title: 'Prototypes',
      body: 'Low-to-high fidelity models of the critical flows so stakeholders and users can react to something concrete.',
    },
    {
      number: '03',
      title: 'Interface systems',
      body: 'A coherent visual and interaction language, layouts, states, empty views and the pieces that repeat.',
    },
    {
      number: '04',
      title: 'Testing and handoff',
      body: 'Observed use where it reduces risk, then organised files, specs and conversation with the people who will build it.',
    },
  ],
  kit: {
    eyebrow: 'And everything around it',
    title: 'The rest of the system, ready to use.',
    description: 'Product work is only useful if the next feature can reuse what we leave. A typical engagement can include the pieces below, scoped to the slice you need.',
    items: [
      { title: 'Product strategy', body: 'Priorities, jobs-to-be-done and a written view of what can wait.' },
      { title: 'Task models', body: 'How people move through the product when they are trying to finish something.' },
      { title: 'Wireframes', body: 'Structure first, so we do not decorate a flow that is still wrong.' },
      { title: 'Component library', body: 'Reusable patterns, states and empty views engineering can keep extending.' },
      { title: 'Usability notes', body: 'What we saw when people tried the prototype, and what we changed because of it.' },
      { title: 'Build-ready handoff', body: 'Organised files and a conversation with the people who will implement it.' },
    ],
  },
  outcomes: [
    {
      title: 'Shared product priorities',
      body: 'A clear view of who the product is for, which jobs matter first, and what can wait.',
    },
    {
      title: 'Testable interaction models',
      body: 'Flows you can click through and argue about before they become expensive to change.',
    },
    {
      title: 'Reusable interface patterns',
      body: 'Components, states and rules the team can apply to the next feature without starting over.',
    },
  ],
  situations: [
    {
      title: 'Validating a product idea',
      body: 'You need a credible task model and a prototype before committing to a full build.',
    },
    {
      title: 'Confusing or fragmented flows',
      body: 'Users bounce between screens added one feature at a time. The product needs a calmer structure.',
    },
    {
      title: 'Building a scalable UI system',
      body: 'New screens keep drifting. You need shared patterns, not another one-off mockup.',
    },
  ],
  method: {
    eyebrow: 'How product work runs',
    title: 'Research, then something you can try, then a system.',
    description: 'We do not start by drawing screens. We agree the jobs, prototype the slice, then leave a system the team can extend.',
    steps: [
      {
        number: '01',
        title: 'Listen to the work',
        body: 'A pass through the current product or idea, time with the people who know the users, and a written list of the jobs.',
      },
      {
        number: '02',
        title: 'Agree the slice',
        body: 'We pick the flows that unlock the most clarity. Scope stays written: what is in, what is later, and how we will know it is working.',
      },
      {
        number: '03',
        title: 'Prototype the model',
        body: 'Wireframes become clickable paths. We review with you, adjust the task model, and only then raise fidelity.',
      },
      {
        number: '04',
        title: 'System and handoff',
        body: 'Patterns are documented, files are organised, and we sit with engineering so the first build does not invent a second product.',
      },
    ],
  },
  working: {
    eyebrow: 'Working together',
    title: 'Direct with the people designing the product.',
    need: {
      title: 'What we need from you',
      items: [
        'Access to the current product, or a clear description of the idea',
        'Time with the people who know the users and the constraints',
        'A point of view on what success looks like in the next phase',
        'Someone who can decide when the work needs a call',
      ],
    },
    leave: {
      title: 'What you leave with',
      items: [
        'A written brief and the journeys we agreed to solve',
        'Prototypes of the critical flows',
        'An interface system the team can keep using',
        'Notes from testing and a practical handoff',
      ],
    },
  },
  engagement: {
    eyebrow: 'Shape and timing',
    title: 'Start with a slice, not the whole platform.',
    body: 'Focused product work usually sits in a three-to-six-week phase. Larger platforms are planned as transparent stages. Complex or ongoing product work is scoped as a Partnership engagement.',
    action: { label: 'See engagement shapes', to: '/pricing' },
  },
}

export const BRAND_IDENTITY_DETAIL = {
  featuredTitle: 'Logo, motion, cards, profiles.',
  heroAction: 'Start an identity',
  ctaTitle: 'Ready for an identity that works everywhere?',
  chip: 'From the mark to the things people actually hold and send.',
  story: {
    eyebrow: 'The complete identity',
    title: 'Not a logo file. The whole kit.',
    lead: 'A brand only works if it can leave the presentation and still look like itself, on a card, in a profile, in motion, in an inbox.',
    paragraphs: [
      'We start with what the business stands for, then design the mark and the system around it. The same identity should feel natural on a business card, a company profile, a website header and a short logo animation.',
      'Logo craft and logo animation are made by Asish Tom Anish at NeoPixel Studio. IndicBiz holds the system; Asish brings the mark and the motion. You leave with files, rules and everyday applications, so the next person who needs a card, a deck or a social avatar does not have to invent the brand again.',
    ],
  },
  collab: {
    eyebrow: 'In collaboration with',
    name: 'NeoPixel Studio',
    person: 'Asish Tom Anish',
    personRole: 'Logo and motion',
    body: 'IndicBiz holds the identity system. Asish Tom Anish crafts the still mark and the moving mark, so both belong to the same idea.',
    covers: ['Logo', 'Logo animation'],
  },
  featured: [
    {
      number: '01',
      title: 'Logo',
      collab: true,
      body: 'Primary mark, wordmark and responsive lockups that stay clear at every size, from a favicon to a signboard. Crafted by Asish Tom Anish.',
    },
    {
      number: '02',
      title: 'Logo animation',
      collab: true,
      body: 'Motion versions of the mark for websites, reels, intros and presentations. Animated by Asish Tom Anish so the identity can move without falling apart.',
    },
    {
      number: '03',
      title: 'Business cards',
      body: 'Print-ready cards that carry the system: type, colour, finish notes and a layout people actually want to keep.',
    },
    {
      number: '04',
      title: 'Company profiles',
      body: 'A designed company or capability document for pitches, partners and stakeholders, written and composed to the identity.',
    },
  ],
  kit: {
    eyebrow: 'And everything around it',
    title: 'The rest of the system, ready to use.',
    description: 'Identity work is only useful if the everyday pieces are designed too. A typical engagement can include the full kit below, scoped to what you will actually use.',
    items: [
      { title: 'Typography and colour', body: 'Type pairings, a colour system and usage rules that stay readable in print and on screen.' },
      { title: 'Voice and messaging', body: 'How the brand speaks: a short positioning line, tone notes and language the team can reuse.' },
      { title: 'Brand guidelines', body: 'A practical guide for clear space, do-nots, file use and how new applications should be made.' },
      { title: 'Stationery', body: 'Letterheads, compliment slips and related print pieces that match the cards and profile.' },
      { title: 'Digital kit', body: 'Email signatures, social avatars, cover images and the small marks used every day.' },
      { title: 'Presentation templates', body: 'Deck masters so the next pitch uses the same type, colour and logo behaviour.' },
    ],
  },
  outcomes: [
    {
      title: 'A mark people remember',
      body: 'A logo system with enough versions to work hard, plus motion when the brand needs to introduce itself on screen.',
    },
    {
      title: 'A kit ready for print and digital',
      body: 'Cards, profiles, stationery and digital assets designed as one family, not leftover files from different jobs.',
    },
    {
      title: 'Practical rules the team can follow',
      body: 'Guidelines written for the next person who has to make something, not a book that never leaves the folder.',
    },
  ],
  situations: [
    {
      title: 'Launching a new venture',
      body: 'You need a credible name-on-a-card identity before the website, the pitch and the first hire.',
    },
    {
      title: 'The look has been outgrown',
      body: 'The business is more serious than the current mark, and the files no longer cover cards, profiles or digital use.',
    },
    {
      title: 'Every piece looks different',
      body: 'Cards, decks, the site and social each invent their own version. The identity needs one system.',
    },
  ],
  method: {
    eyebrow: 'How identity work runs',
    title: 'Direction first, then the mark, then the kit.',
    description: 'We do not start by drawing logos. We agree what the brand must do, then design the system and apply it to the pieces you will use first.',
    steps: [
      {
        number: '01',
        title: 'Find the truth',
        body: 'What the business offers, who it is for, and what must feel different. That becomes the brief for the mark and the voice.',
      },
      {
        number: '02',
        title: 'Design the system',
        body: 'Logo explorations and motion by Asish Tom Anish at NeoPixel Studio, plus type and colour, enough to know the identity holds still and in movement.',
      },
      {
        number: '03',
        title: 'Build the kit',
        body: 'Business cards, company profile, stationery, digital assets and the other applications in scope.',
      },
      {
        number: '04',
        title: 'Hand it over',
        body: 'Organised files, export versions and a guide the team can follow without writing back for every new piece.',
      },
    ],
  },
  working: {
    eyebrow: 'Working together',
    title: 'Built with the people who will use it.',
    need: {
      title: 'What we need from you',
      items: [
        'A clear sense of the offer, audience and any names already in play',
        'Examples of identities you respect, and ones you want to avoid',
        'The first pieces you actually need: cards, profile, site, deck',
        'Someone who can approve the direction so the kit can be finished',
      ],
    },
    leave: {
      title: 'What you leave with',
      items: [
        'Logo files and responsive lockups, still and in motion, crafted by Asish Tom Anish',
        'Business cards and a company profile ready to use',
        'The wider kit agreed in scope, stationery, digital, templates',
        'Guidelines and a file structure the team can keep tidy',
      ],
    },
  },
  engagement: {
    eyebrow: 'Shape and timing',
    title: 'Start with the mark, or take the full kit.',
    body: 'A focused identity can begin with logo, cards and a profile. A complete system adds motion, stationery, digital assets and guidelines. Scope is written before work starts, and larger brand-plus-web work sits in Momentum or Partnership.',
    action: { label: 'See engagement shapes', to: '/pricing' },
  },
}

export const WEB_EXPERIENCES_DETAIL = {
  featuredTitle: 'Structure, design, build, performance.',
  heroAction: 'Start a website',
  ctaTitle: 'Ready for a site that can carry the work?',
  chip: 'Strategy, design and React, built to stay maintainable.',
  story: {
    eyebrow: 'The complete web engagement',
    title: 'Not a template. A site the team can keep.',
    lead: 'Most websites we replace have grown faster than the structure around them. Pages exist. Finding anything useful has become hard.',
    paragraphs: [
      'We start with content and journeys, what people need to read, book, enquire or trust, then design an interface that makes those jobs obvious.',
      'Then we build it in React, with a foundation the team can update. Performance and accessibility are part of the work, not a later pass.',
    ],
  },
  featured: [
    {
      number: '01',
      title: 'Information architecture',
      body: 'Content models, navigation and page structure so people can find the next useful step without hunting.',
    },
    {
      number: '02',
      title: 'Interface design',
      body: 'Responsive layouts, type, colour and components that feel like the brand and stay clear on a phone.',
    },
    {
      number: '03',
      title: 'React development',
      body: 'A maintainable front-end, with CMS integration where the team needs to keep publishing without us.',
    },
    {
      number: '04',
      title: 'Performance and access',
      body: 'Core Web Vitals, keyboard and screen-reader care, and the checks that keep the site usable under pressure.',
    },
  ],
  kit: {
    eyebrow: 'And everything around it',
    title: 'The rest of the build, ready to use.',
    description: 'A website is only useful if the team can keep it honest after launch. A typical engagement can include the pieces below, scoped to what you will actually run.',
    items: [
      { title: 'Content and IA', body: 'What belongs on the site, in what order, and what can wait for a later phase.' },
      { title: 'Design system', body: 'Reusable UI pieces so new pages do not invent a second look.' },
      { title: 'CMS setup', body: 'A publishing model the team can use without breaking the layout.' },
      { title: 'Forms and journeys', body: 'Enquiry, booking or conversion paths designed as part of the site, not bolted on.' },
      { title: 'Launch checks', body: 'Performance, accessibility and a punch-list before the site goes live.' },
      { title: 'Handover', body: 'Repo access, guidance and the first weeks of support so ownership is real.' },
    ],
  },
  outcomes: [
    {
      title: 'Clear content and navigation',
      body: 'People can find the offer, the proof and the next step without a maze of leftover pages.',
    },
    {
      title: 'Responsive, accessible interfaces',
      body: 'The site holds up on a phone, with a keyboard, and for people who cannot rely on colour or mouse alone.',
    },
    {
      title: 'A maintainable foundation',
      body: 'A React build the team can keep updating, without starting a new site every time the offer changes.',
    },
  ],
  situations: [
    {
      title: 'Replacing a limiting website',
      body: 'The current site cannot carry the offer, the content or the brand. You need a cleaner foundation.',
    },
    {
      title: 'Launching a digital service',
      body: 'A new product or service needs a public face that explains itself and can take an enquiry.',
    },
    {
      title: 'Weak conversion journeys',
      body: 'Traffic arrives, then stalls. The path from interest to contact needs to be designed, not hoped for.',
    },
  ],
  method: {
    eyebrow: 'How web work runs',
    title: 'Content first, then the interface, then the build.',
    description: 'We do not start by decorating a homepage. We agree what the site must do, then design and engineer it as one piece.',
    steps: [
      {
        number: '01',
        title: 'Map the content',
        body: 'What the business offers, who it is for, and which pages and journeys actually matter.',
      },
      {
        number: '02',
        title: 'Design the system',
        body: 'Layouts, components and the key templates, enough to know the site will hold as content grows.',
      },
      {
        number: '03',
        title: 'Build and integrate',
        body: 'React development, CMS where needed, and the forms or booking paths in scope.',
      },
      {
        number: '04',
        title: 'Launch and hand over',
        body: 'Performance and access checks, then organised files and a handover the team can run with.',
      },
    ],
  },
  working: {
    eyebrow: 'Working together',
    title: 'Built with the people who will keep the site.',
    need: {
      title: 'What we need from you',
      items: [
        'The current site, or a clear list of what the new one must do',
        'Content that exists, or time with the people who will write it',
        'Brand files if they exist, or a decision to design them with us',
        'Someone who can approve structure and go-live',
      ],
    },
    leave: {
      title: 'What you leave with',
      items: [
        'A live, responsive site on a maintainable React foundation',
        'A content and navigation model the team understands',
        'CMS access and guidance where publishing is in scope',
        'Performance notes and a practical handover',
      ],
    },
  },
  engagement: {
    eyebrow: 'Shape and timing',
    title: 'Start with the pages that matter, or take the full site.',
    body: 'A focused site can begin with the core journeys and a React foundation. Larger platforms add CMS, more templates and conversion work. Scope is written before work starts. Complex or ongoing web work sits in Momentum or Partnership.',
    action: { label: 'See engagement shapes', to: '/pricing' },
  },
}

export const GROWTH_SEO_DETAIL = {
  featuredTitle: 'Audit, technical health, content, conversion.',
  heroAction: 'Start a growth plan',
  ctaTitle: 'Ready for a growth foundation you can trust?',
  chip: 'Discoverability and conversion, built on real signals.',
  story: {
    eyebrow: 'The complete growth engagement',
    title: 'Not a ranking promise. A clearer next move.',
    lead: 'Most growth work we take on starts with a site that is hard to find, hard to measure, or hard to convert. The team can feel the stall. They cannot see the cause.',
    paragraphs: [
      'We start with the technical foundation and the journeys people actually take, then decide what is worth fixing first.',
      'Content, search and conversion work follow the evidence. We do not invent traffic numbers or guarantee positions. We leave a roadmap the team can keep using.',
    ],
  },
  featured: [
    {
      number: '01',
      title: 'Technical audit',
      body: 'Indexation, structure, analytics and the errors that quietly stop the site being found or understood.',
    },
    {
      number: '02',
      title: 'Core Web Vitals',
      body: 'The performance work that makes pages usable, and gives search a healthier site to rank.',
    },
    {
      number: '03',
      title: 'Content and search',
      body: 'What to write, what to fix, and how pages should answer the questions people are already asking.',
    },
    {
      number: '04',
      title: 'Conversion journeys',
      body: 'The path from arrival to enquiry, forms, offers and the pages that currently lose people.',
    },
  ],
  kit: {
    eyebrow: 'And everything around it',
    title: 'The rest of the foundation, ready to use.',
    description: 'Growth work is only useful if the team knows what to do next month. A typical engagement can include the pieces below, scoped to the signals you already have.',
    items: [
      { title: 'Analytics hygiene', body: 'Measurement that answers a real question, not a dashboard nobody trusts.' },
      { title: 'On-page structure', body: 'Titles, headings and internal links that help people and search understand the page.' },
      { title: 'Content roadmap', body: 'A prioritised list of pages to improve or write, tied to actual demand.' },
      { title: 'Technical fixes', body: 'The crawl, speed and markup issues that should not wait for a redesign.' },
      { title: 'Conversion notes', body: 'Where journeys stall, and the smallest changes that would make the next step clearer.' },
      { title: 'Iteration plan', body: 'What to review after launch, so the work does not freeze as a one-off report.' },
    ],
  },
  outcomes: [
    {
      title: 'A prioritised improvement roadmap',
      body: 'A written order of work: what to fix first, what can wait, and why.',
    },
    {
      title: 'A healthier technical foundation',
      body: 'A site that can be crawled, loaded and understood, without invented ranking claims.',
    },
    {
      title: 'More useful measurement and content',
      body: 'Analytics and pages that help the team decide, not just report activity.',
    },
  ],
  situations: [
    {
      title: 'Weak organic visibility',
      body: 'The site exists, but the people who need it cannot find it. You need a technical and content diagnosis.',
    },
    {
      title: 'Unsure what to improve next',
      body: 'There is traffic, or there is not. Either way, the team needs a ranked list, not another generic audit PDF.',
    },
    {
      title: 'Preparing to scale acquisition',
      body: 'Paid or content investment is coming. The site and measurement need to be ready to learn from it.',
    },
  ],
  method: {
    eyebrow: 'How growth work runs',
    title: 'Evidence first, then the smallest useful fix.',
    description: 'We do not start with a content calendar. We see how the site is found, loaded and used, then choose the work that would change a decision.',
    steps: [
      {
        number: '01',
        title: 'Read the signals',
        body: 'Technical crawl, analytics if they exist, and a pass through the journeys that should convert.',
      },
      {
        number: '02',
        title: 'Write the order',
        body: 'A roadmap: what is broken, what is unclear, and what is worth doing in the next phase.',
      },
      {
        number: '03',
        title: 'Fix the foundation',
        body: 'Technical health, Core Web Vitals and the on-page work that makes the next content useful.',
      },
      {
        number: '04',
        title: 'Leave the loop',
        body: 'Measurement, a content plan and a review cadence so the team can keep improving without us in the room.',
      },
    ],
  },
  working: {
    eyebrow: 'Working together',
    title: 'Built with the people who will keep iterating.',
    need: {
      title: 'What we need from you',
      items: [
        'Access to the live site, Search Console and analytics if they exist',
        'A honest view of where leads or sales currently come from',
        'The pages or offers you consider most important',
        'Someone who can approve the order of work',
      ],
    },
    leave: {
      title: 'What you leave with',
      items: [
        'A technical and content diagnosis, written in plain language',
        'The foundation fixes agreed in scope',
        'A prioritised roadmap the team can keep using',
        'Clearer measurement for the next phase',
      ],
    },
  },
  engagement: {
    eyebrow: 'Shape and timing',
    title: 'Start with the diagnosis, or take the improvement phase.',
    body: 'A focused growth engagement can begin with audit and roadmap. A fuller phase adds technical fixes, content and conversion work. Scope is written before work starts. Ongoing optimisation sits in Partnership.',
    action: { label: 'See engagement shapes', to: '/pricing' },
  },
}

export const SERVICE_DETAILS = {
  'brand-identity': BRAND_IDENTITY_DETAIL,
  'web-experiences': WEB_EXPERIENCES_DETAIL,
  'product-design': PRODUCT_DESIGN_DETAIL,
  'growth-seo': GROWTH_SEO_DETAIL,
}
