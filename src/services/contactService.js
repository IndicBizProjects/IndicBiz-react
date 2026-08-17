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
  }
}

const DEFAULT_CONTACT_API_URL =
  'https://script.google.com/macros/s/AKfycbwrSA8KZh7TjQvMjZ4MosfFKA8jhplH3RWbDkpmDZHZDFWSd2cBAwUhUzMXP17bInUG/exec'

export async function submitProjectEnquiry(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL || DEFAULT_CONTACT_API_URL
  const body = flattenEnquiry(payload)

  if (!endpoint) {
    return { delivered: false, payload }
  }

  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body),
  })

  return { delivered: true }
}

export function createEnquiryMailto(payload, recipient) {
  const subject = encodeURIComponent(`Project enquiry from ${payload.name}`)
  const body = encodeURIComponent([
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Company: ${payload.company || 'Not provided'}`,
    `Role: ${payload.role || 'Not provided'}`,
    `Services: ${payload.services.join(', ')}${payload.otherService ? ` (${payload.otherService})` : ''}`,
    `Status: ${payload.status || 'Not provided'}`,
    `Website: ${payload.website || 'Not provided'}`,
    `Budget: ${payload.budget || 'Not provided'}`,
    `Timeline: ${payload.timeline || 'Not provided'}`,
    `Source: ${payload.source || 'Not provided'}`,
    '',
    payload.message,
  ].join('\n'))

  return `mailto:${recipient}?subject=${subject}&body=${body}`
}
