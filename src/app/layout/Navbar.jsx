import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from '../router'
import { useRouter } from '../routerContext'
import { PRIMARY_NAV, SITE_UI } from '../../data/site'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import BrandMark from '../../components/primitives/BrandMark'

export default function Navbar() {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevPath, setPrevPath] = useState(pathname)

  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    document.body.dataset.menuOpen = String(open)
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => {
      delete document.body.dataset.menuOpen
      window.removeEventListener('keydown', handleKey)
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <motion.header
        className={`ib-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        aria-label={SITE_UI.primaryNavLabel}
      >
        <div className="ib-nav-bar">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label={SITE_UI.homeLabel}
            className="ib-nav-brand"
          >
            <BrandMark />
          </Link>

          <nav className="ag-pill-nav nav-desktop" aria-label="Primary navigation">
            {PRIMARY_NAV.map((item) => {
              const isActive = item.end
                ? pathname === item.to
                : pathname === item.to || pathname.startsWith(`${item.to}/`)

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`ag-pill-link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="ag-pill-active-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, color: isActive ? '#0d2426' : '#505050', fontWeight: isActive ? 600 : 500 }}>
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </nav>

          <div className="ib-nav-end">
            <span className="nav-cta">
              <MagneticBtn to="/contact" variant="dark" size="sm">
                {SITE_UI.headerAction}
              </MagneticBtn>
            </span>
            <motion.button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? SITE_UI.closeNavLabel : SITE_UI.openNavLabel}
              onClick={() => setOpen((v) => !v)}
              className="mobile-menu-btn"
              whileTap={{ scale: 0.9 }}
            >
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} transition={{ duration: 0.25 }} />
              <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.2 }} />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} transition={{ duration: 0.25 }} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="ib-nav-mobile"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav>
              {PRIMARY_NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={closeMenu}
                    className={({ isActive }) => `ag-pill-link${isActive ? ' is-active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <MagneticBtn to="/contact" variant="dark" size="lg" onClick={closeMenu} style={{ width: '100%' }}>
                {SITE_UI.headerAction}
              </MagneticBtn>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
