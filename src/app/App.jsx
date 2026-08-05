import ErrorBoundary from './ErrorBoundary'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import PageMeta from './PageMeta'
import AppRoutes from './routes'
import ScrollManager from './ScrollManager'
import { SITE_UI } from '../data/site'

export default function App() {
  return (
    <ErrorBoundary>
      <a className="skip-link" href="#main-content">{SITE_UI.skipLink}</a>
      <PageMeta />
      <ScrollManager />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <AppRoutes />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
