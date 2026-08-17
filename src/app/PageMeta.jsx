import { useEffect } from 'react'
import { ROUTE_META } from '../data/site'
import { useRouter } from './routerContext'

export default function PageMeta() {
  const { pathname } = useRouter()

  useEffect(() => {
    const servicePath = pathname.startsWith('/services/') ? '/services' : pathname
    const meta = ROUTE_META[servicePath] || ROUTE_META['/']
    document.title = meta.title

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }
    description.content = meta.description
  }, [pathname])
  return null
}