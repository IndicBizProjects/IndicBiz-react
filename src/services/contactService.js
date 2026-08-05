export async function submitProjectEnquiry(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL

  if (!endpoint) {
    return { delivered: false, payload }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Contact request failed')
  }

  return { delivered: true }
}

export function createEnquiryMailto(payload, recipient) {
  const subject = encodeURIComponent(`Project enquiry from ${payload.name}`)
  const body = encodeURIComponent([
    `Name: ${payload.name}`,
    `Company: ${payload.company || 'Not provided'}`,
    `Email: ${payload.email}`,
    `Services: ${payload.services.join(', ')}`,
    `Budget: ${payload.budget}`,
    `Timeline: ${payload.timeline}`,
    '',
    payload.message,
  ].join('\n'))

  return `mailto:${recipient}?subject=${subject}&body=${body}`
}
