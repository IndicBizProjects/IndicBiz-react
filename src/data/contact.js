export const CONTACT_HERO = {
  eyebrow: 'Start a project',
  title: 'Tell us where you want to go.',
  description: 'Share the people, the work and the constraints. We reply within two working days with relevant questions and a realistic next step.',
}

export const PROJECT_TYPES = [
  'Brand identity',
  'Website or web app',
  'Product design',
  'Growth and SEO',
  'Something else',
]

export const PROJECT_STATUS = [
  'New project',
  'Redesign',
  'Improve what we have',
  'Not sure yet',
]

export const BUDGET_OPTIONS = ['₹15k to ₹30k', '₹40k to ₹80k', '₹80k to ₹2L', '₹2L+', 'Not sure yet']
export const TIMELINE_OPTIONS = ['Within 1 month', '1 to 3 months', '3 to 6 months', 'Exploring']
export const SOURCE_OPTIONS = ['Referral', 'LinkedIn', 'Instagram', 'Search', 'Other']

export const FORM_INITIAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  services: [],
  otherService: '',
  status: 'New project',
  website: '',
  budget: '',
  timeline: '',
  message: '',
  source: '',
}

export const FORM_COPY = {
  intro: {
    eyebrow: 'Project enquiry',
    title: 'Share enough for a useful reply',
    description: 'Required fields are marked. The rest helps us come back with the right questions, not a generic note.',
  },
  sections: [
    { number: '01', title: 'About you', description: 'Who should we reply to?' },
    { number: '02', title: 'The work', description: 'What do you need help with?' },
    { number: '03', title: 'Scope', description: 'Estimates are fine. We can refine these together.' },
    { number: '04', title: 'Context', description: 'What should we understand before we reply?' },
  ],
  fields: {
    name: 'Your name',
    email: 'Work email',
    phone: 'Phone',
    company: 'Company or project',
    role: 'Your role',
    services: 'Project type',
    otherService: 'Tell us what you need',
    status: 'Where things stand',
    website: 'Current website',
    budget: 'Indicative budget',
    timeline: 'Ideal timing',
    message: 'What should change?',
    source: 'How did you hear about us?',
  },
  hints: {
    phone: 'Optional, but useful for a quick conversation.',
    website: 'Optional. Include a link if one exists.',
    message: 'Goals, constraints, deadline and who decides all help.',
    budget: 'Choose the closest range. We will not treat this as a quote.',
  },
  placeholders: {
    name: 'Full name',
    email: 'you@company.com',
    phone: '+91',
    company: 'Studio, brand or working title',
    role: 'Founder, marketing, product…',
    otherService: 'Packaging, motion, a mix of the above…',
    website: 'https://',
    message: 'What is not working today, and what should be different after this work?',
  },
  actions: { submit: 'Send enquiry', sending: 'Sending…' },
  errors: {
    service: 'Choose at least one project type.',
    name: 'Enter your name.',
    email: 'Enter a valid work email.',
    message: 'Add a short note on what you need.',
    submit: 'We could not send your enquiry. Please email us directly.',
  },
  success: {
    title: 'Enquiry received.',
    delivered: 'Thank you. We will reply within two working days.',
    fallback: 'If you need to add anything, write to us directly.',
    action: 'Email us instead',
  },
}

export const CONTACT_CHANNELS = [
  { title: 'New business', value: 'info@indicbiz.com', href: 'mailto:info@indicbiz.com' },
  { title: 'Quick conversation', value: '+91 76590 42808', href: 'tel:+917659042808' },
  { title: 'Where we work', value: 'India · Worldwide', href: null },
]

export const CONTACT_PROCESS = [
  { number: '01', title: 'You share the context', description: 'People, work, timing and what should change.' },
  { number: '02', title: 'We reply in two working days', description: 'With relevant questions, not a generic pitch.' },
  { number: '03', title: 'We shape a focused next step', description: 'A clear proposal if the fit is right.' },
]

export const CONTACT_FAQS = [
  {
    question: 'How soon will we hear back?',
    answer: 'Within two working days. If the fit is clear, we will suggest a short call or a written next step.',
  },
  {
    question: 'What should I include?',
    answer: 'Who you are, what you need help with, timing, and what should be different after the work. A rough budget range is enough.',
  },
  {
    question: 'Do we need a finished brief?',
    answer: 'No. A useful enquiry can be unfinished. We help shape the smallest, strongest next move from the context you have.',
  },
  {
    question: 'Can we start with a smaller phase?',
    answer: 'Yes. A focused discovery or design phase is often the best way to reduce risk before a larger build.',
  },
]

export const CONTACT_SECTIONS = {
  channels: { eyebrow: 'Direct contact', title: 'Prefer a conversation?' },
  process: { eyebrow: 'What happens next', title: 'A straightforward first step.' },
  faqs: { eyebrow: 'Questions', title: 'Before you write.' },
}
