const ABSTRACT_IP_API_KEY =
  import.meta.env.VITE_ABSTRACT_IP_API_KEY || '744c856ae71df2d5ef4c571e43997ff0'

export async function locateVisitor() {
  if (!ABSTRACT_IP_API_KEY) return emptyVisitor()

  try {
    const response = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${ABSTRACT_IP_API_KEY}`,
    )
    if (!response.ok) return emptyVisitor()

    const data = await response.json()
    const city = data.city || ''
    const region = data.region || ''
    const country = data.country || ''

    return {
      ip: data.ip_address || '',
      city,
      region,
      country,
      countryCode: data.country_code || '',
      postal: data.postal_code || '',
      isp: data.connection?.isp_name || '',
      org: data.connection?.organization_name || '',
      timezone: data.timezone?.name || '',
      vpn: data.security?.is_vpn ? 'Yes' : 'No',
      location: [city, region, country].filter(Boolean).join(', '),
    }
  } catch {
    return emptyVisitor()
  }
}

function emptyVisitor() {
  return {
    ip: '',
    city: '',
    region: '',
    country: '',
    countryCode: '',
    postal: '',
    isp: '',
    org: '',
    timezone: '',
    vpn: '',
    location: '',
  }
}
