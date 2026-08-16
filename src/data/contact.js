export const CONTACT_HERO = {
  eyebrow: 'Start a project',
  title: 'Tell us where you want to go.',
  description: 'A few useful details help us respond with relevant questions, a realistic direction and the right next step.',
}

export const PROJECT_TYPES = [
  'Brand identity',
  'Website or web app',
  'Product design',
  'Growth and SEO',
  'Something else',
]

export const BUDGET_OPTIONS = ['₹15k to ₹30k', '₹40k to ₹80k', '₹80k to ₹2L', '₹2L+']
export const TIMELINE_OPTIONS = ['Within 1 month', '1 to 3 months', '3 to 6 months', 'Exploring']

export const FORM_STEPS = [
  { number: 1, label: 'Project' },
  { number: 2, label: 'Details' },
  { number: 3, label: 'Scope' },
  { number: 4, label: 'Context' },
]

export const FORM_INITIAL_VALUES = {
  services: [],
  name: '',
  email: '',
  company: '',
  budget: BUDGET_OPTIONS[1],
  timeline: TIMELINE_OPTIONS[1],
  message: '',
}

export const FORM_COPY = {
  panels: [
    { title: 'What can we help you create?', description: 'Choose every area that feels relevant.' },
    { title: 'Who should we respond to?', description: 'Only the details needed for a useful reply.' },
    { title: 'What shape is the project?', description: 'Estimates are fine. We can refine these together.' },
    { title: 'What should we understand?', description: 'Goals, context, constraints or simply the rough idea.' },
  ],
  fields: {
    name: 'Your name',
    email: 'Work email',
    company: 'Company or project',
    budget: 'Indicative budget',
    timeline: 'Ideal timing',
    message: 'Project context',
  },
  actions: { back: 'Back', next: 'Continue', submit: 'Send enquiry', sending: 'Sending…' },
  errors: {
    service: 'Choose at least one project type.',
    name: 'Enter your name.',
    email: 'Enter a valid email address.',
    submit: 'We could not prepare your enquiry. Please email us directly.',
  },
  success: {
    title: 'Your enquiry is ready.',
    delivered: 'Thank you. We will reply within two working days.',
    fallback: 'Email delivery is not connected yet. Use the button below to send these details from your email app.',
    action: 'Open email draft',
  },
}

export const CONTACT_CHANNELS = [
  { title: 'New business', value: 'hello@indicbiz.com', href: 'mailto:hello@indicbiz.com' },
  { title: 'Quick conversation', value: '+91 90000 00000', href: 'tel:+919000000000' },
  { title: 'Where we work', value: 'India · Worldwide', href: null },
]

export const CONTACT_PROCESS = [
  { number: '01', title: 'You share the context' },
  { number: '02', title: 'We respond within two working days' },
  { number: '03', title: 'We shape a focused proposal' },
]

export const PROJECT_PREP = [
  { number: '01', title: 'The change you need', description: 'Describe what should be different for the business or its customers.' },
  { number: '02', title: 'The current constraint', description: 'Share what is slowing progress: clarity, capability, time, technology or something else.' },
  { number: '03', title: 'The people involved', description: 'Knowing who decides, contributes and approves helps us suggest a workable process.' },
  { number: '04', title: 'The useful deadline', description: 'Tell us what drives the timing so priorities can be shaped realistically.' },
]

export const CONTACT_SECTIONS = {
  channels: { eyebrow: 'Direct contact', title: 'Prefer a conversation?' },
  preparation: { eyebrow: 'Before you write', title: 'A useful brief can be simple.' },
  process: { eyebrow: 'What happens next', title: 'A straightforward first step.' },
  progressLabel: 'Form progress',
}
