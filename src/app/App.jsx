import { useEffect } from 'react'
import Lenis from 'lenis'
import { AnimatePresence } from 'framer-motion'
import ErrorBoundary from './ErrorBoundary'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import PageMeta from './PageMeta'
import AppRoutes from './routes'
import ScrollManager from './ScrollManager'
import { SITE_UI } from '../data/site'
import CustomCursor from '../components/cursor/CustomCursor'
import { useRouter } from './routerContext'

function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return null
}

export default function App() {
  const { pathname } = useRouter()

  return (
    <ErrorBoundary>
      <LenisProvider />
      <ScrollManager />
      <CustomCursor />
      <a className="skip-link" href="#main-content">{SITE_UI.skipLink}</a>
      <PageMeta />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <AnimatePresence mode="wait" initial={false}>
          <AppRoutes key={pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
