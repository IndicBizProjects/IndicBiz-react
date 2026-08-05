import { useEffect, useRef } from 'react'
import { useRouter } from './routerContext'

export default function ScrollManager() {
  const { pathname } = useRouter()
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.querySelector('main')?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])

  return null
}
