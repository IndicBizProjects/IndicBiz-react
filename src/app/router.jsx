import { useEffect, useMemo, useState } from 'react'
import { RouterContext, useRouter } from './routerContext'

export function RouterProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  const value = useMemo(() => ({
    pathname,
    navigate(to, { replace = false } = {}) {
      window.history[replace ? 'replaceState' : 'pushState']({}, '', to)
      setPathname(window.location.pathname)
    },
  }), [pathname])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function Link({ to, children, onClick, ...props }) {
  const { navigate } = useRouter()
  const handleClick = (event) => {
    onClick?.(event)
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) return
    event.preventDefault()
    navigate(to)
  }

  return <a href={to} onClick={handleClick} {...props}>{children}</a>
}

export function NavLink({ to, end = false, className, children, ...props }) {
  const { pathname } = useRouter()
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`)
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className
  const resolvedChildren = typeof children === 'function' ? children({ isActive }) : children
  
  return <Link to={to} className={resolvedClassName} aria-current={isActive ? 'page' : undefined} {...props}>{resolvedChildren}</Link>
}
