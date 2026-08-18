import { useEffect } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import ErrorBoundary from './ErrorBoundary'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import PageMeta from './PageMeta'
import AppRoutes from './routes'
import ScrollManager from './ScrollManager'
import { SITE_UI } from '../data/site'
import BrandLoader from '../components/motion/BrandLoader'
import ScrollProgress from '../components/motion/ScrollProgress'
import WhatsAppFAB from '../components/layout/WhatsAppFAB'
import { useRouter } from './routerContext'
import { setLenis } from '../lib/scroll'

function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    setLenis(lenis)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      setLenis(null)
      lenis.destroy()
    }
  }, [])
  return null
}
export default function App() {
  const { pathname } = useRouter()
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
      <ErrorBoundary>
        <LenisProvider />
        <ScrollManager />
        <BrandLoader />
        <ScrollProgress />
        <a className="skip-link" href="#main-content">{SITE_UI.skipLink}</a>
        <PageMeta />
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <AnimatePresence mode="wait" initial={false}>
            <AppRoutes key={pathname} />
          </AnimatePresence>
        </main>
        <WhatsAppFAB />
        <Footer />
      </ErrorBoundary>
    </MotionConfig>
  )
}
