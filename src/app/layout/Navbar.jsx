import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from '../router'
import { BRAND, PRIMARY_NAV, SITE_UI } from '../../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.dataset.menuOpen = String(open)
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => {
      delete document.body.dataset.menuOpen
      window.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      {/* Desktop / Main Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 var(--layout-gutter)',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(245, 240, 232, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        }}
        aria-label={SITE_UI.primaryNavLabel}
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label={SITE_UI.homeLabel}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '-0.04em',
            color: 'var(--ink)',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          {BRAND.name}
        </Link>

        {/* Desktop Nav — center */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            margin: '0 auto',
          }}
          aria-label="Primary navigation"
        >
          {PRIMARY_NAV.filter(item => item.to !== '/').map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={{ textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'nav-active' : ''}
            >
              {({ isActive }) => (
                <motion.span
                  whileHover={{ color: 'var(--ink)' }}
                  style={{
                    display: 'inline-block',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: isActive ? 'var(--ink)' : 'var(--ink-soft)',
                    background: isActive ? 'var(--line)' : 'transparent',
                    transition: 'color 0.2s, background 0.2s',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.label}
                </motion.span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <Link
            to="/contact"
            data-cursor="pointer"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.55rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--ink)',
              color: 'var(--bg-canvas)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.875rem',
              letterSpacing: '-0.01em',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            className="nav-cta"
          >
            {SITE_UI.headerAction}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? SITE_UI.closeNavLabel : SITE_UI.openNavLabel}
            onClick={() => setOpen(v => !v)}
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '40px',
              height: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            className="mobile-menu-btn"
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--ink)', transformOrigin: 'center' }} />
            <motion.span animate={{ opacity: open ? 0 : 1 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--ink)' }} />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--ink)', transformOrigin: 'center' }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Full-screen Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'var(--bg-dark)',
              display: 'flex',
              flexDirection: 'column',
              padding: 'calc(var(--header-height) + 2rem) var(--layout-gutter) 3rem',
              overflowY: 'auto',
            }}
            aria-label={SITE_UI.mobileNavLabel}
          >
            <nav style={{ flex: 1 }}>
              {PRIMARY_NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeMenu}
                    tabIndex={open ? 0 : -1}
                    style={{ textDecoration: 'none' }}
                  >
                    {({ isActive }) => (
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '1.5rem',
                        padding: '1.25rem 0',
                        borderBottom: '1px solid var(--line-inv)',
                      }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 800,
                          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                          letterSpacing: '-0.04em',
                          color: isActive ? 'var(--accent)' : 'var(--ink-inv)',
                          lineHeight: 1,
                        }}>
                          {item.label}
                        </span>
                      </div>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ marginTop: '2rem' }}
            >
              <Link
                to="/contact"
                onClick={closeMenu}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 2rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--accent)',
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                {SITE_UI.headerAction}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-cta { display: inline-flex !important; }
        }
      `}</style>
    </>
  )
}
