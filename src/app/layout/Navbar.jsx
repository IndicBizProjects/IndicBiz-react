import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from '../router'
import { BRAND, PRIMARY_NAV, SITE_UI } from '../../data/site'
import styles from './layout.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.dataset.menuOpen = String(open)
    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      delete document.body.dataset.menuOpen
      window.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={styles.header}>
      <Link className={styles.brand} to="/" onClick={closeMenu} aria-label={SITE_UI.homeLabel}>
        {BRAND.name}
      </Link>
      <nav className={styles.desktopNav} aria-label={SITE_UI.primaryNavLabel}>
        {PRIMARY_NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className={styles.headerCta} to="/contact">
        {SITE_UI.headerAction} <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
      <button
        className={styles.menuButton}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? SITE_UI.closeNavLabel : SITE_UI.openNavLabel}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div id="mobile-navigation" className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ''}`}>
        <nav aria-label={SITE_UI.mobileNavLabel} aria-hidden={!open}>
          {PRIMARY_NAV.map((item, index) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={closeMenu} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
