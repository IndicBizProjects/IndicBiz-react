import { locateVisitor } from './visitorLocation'

function flattenEnquiry(payload) {
  return {
    name: payload.name?.trim() || '',
    email: payload.email?.trim() || '',
    phone: payload.phone?.trim() || '',
    company: payload.company?.trim() || '',
    role: payload.role?.trim() || '',
    services: Array.isArray(payload.services) ? payload.services.join(', ') : payload.services || '',
    otherService: payload.otherService?.trim() || '',
    status: payload.status || '',
    website: payload.website?.trim() || '',
    budget: payload.budget || '',
    timeline: payload.timeline || '',
    message: payload.message?.trim() || '',
    source: payload.source || '',
    ip: payload.ip || '',
    city: payload.city || '',
    region: payload.region || '',
    country: payload.country || '',
    postal: payload.postal || '',
    isp: payload.isp || '',
    timezone: payload.timezone || '',
    vpn: payload.vpn || '',
    location: payload.location || '',
  }
}

const DEFAULT_CONTACT_API_URL =
  'https://script.google.com/macros/s/AKfycby4t7GDnn7n7Y_pxbI_EVqj2dqcZ_gCsExG2NphqX9YrN-qrAYr4CDCo5mhIBbVmHSQ/exec'

export async function submitProjectEnquiry(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL || DEFAULT_CONTACT_API_URL
  const visitor = await locateVisitor()
  const body = flattenEnquiry({ ...payload, ...visitor })

  if (!endpoint) {
    return { delivered: false, payload: body }
  }

  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body),
  })

  return { delivered: true, payload: body }
}

export function createEnquiryMailto(payload, recipient) {
  const services = Array.isArray(payload.services) ? payload.services.join(', ') : payload.services || ''
  const subject = encodeURIComponent(`Project enquiry from ${payload.name}`)
  const body = encodeURIComponent([
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Company: ${payload.company || 'Not provided'}`,
    `Role: ${payload.role || 'Not provided'}`,
    `Services: ${services}${payload.otherService ? ` (${payload.otherService})` : ''}`,
    `Status: ${payload.status || 'Not provided'}`,
    `Website: ${payload.website || 'Not provided'}`,
    `Budget: ${payload.budget || 'Not provided'}`,
    `Timeline: ${payload.timeline || 'Not provided'}`,
    `Source: ${payload.source || 'Not provided'}`,
    payload.location ? `Location: ${payload.location}` : '',
    '',
    payload.message,
  ].filter((line) => line !== undefined).join('\n'))

  return `mailto:${recipient}?subject=${subject}&body=${body}`
}
