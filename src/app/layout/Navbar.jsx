import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from '../router'
import { PRIMARY_NAV, SITE_UI } from '../../data/site'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import BrandMark from '../../components/primitives/BrandMark'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `ag-pill-link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ib-nav-end">
            <span className="nav-cta">
              <MagneticBtn to="/contact" variant="dark" size="sm">
                {SITE_UI.headerAction}
              </MagneticBtn>
            </span>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? SITE_UI.closeNavLabel : SITE_UI.openNavLabel}
              onClick={() => setOpen((v) => !v)}
              className="mobile-menu-btn"
            >
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
              <motion.span animate={{ opacity: open ? 0 : 1 }} />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="ib-nav-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <nav>
              {PRIMARY_NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) => `ag-pill-link${isActive ? ' is-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <MagneticBtn to="/contact" variant="dark" size="lg" onClick={closeMenu}>
              {SITE_UI.headerAction}
            </MagneticBtn>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
