import { lazy, Suspense } from 'react'
import { useRouter } from './routerContext'

const HomePage = lazy(() => import('../pages/HomePage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ServicePage = lazy(() => import('../pages/ServicePage'))
const WorkPage = lazy(() => import('../pages/WorkPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const LogoPage = lazy(() => import('../pages/LogoPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

export default function AppRoutes() {
  const { pathname } = useRouter()
  let Page = NotFoundPage

  if (pathname === '/') Page = HomePage
  else if (pathname === '/services') Page = ServicesPage
  else if (/^\/services\/[^/]+\/?$/.test(pathname)) Page = ServicePage
  else if (pathname === '/work') Page = WorkPage
  else if (pathname === '/about') Page = AboutPage
  else if (pathname === '/pricing') Page = PricingPage
  else if (pathname === '/contact') Page = ContactPage
  else if (pathname === '/indic') Page = LogoPage

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}
