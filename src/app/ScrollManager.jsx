import { useLayoutEffect } from 'react'
import { useRouter } from './routerContext'
import { restorePageScroll, scrollPageToId, scrollPageToTop } from '../lib/scroll'

export default function ScrollManager() {
  const { pathname } = useRouter()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  useLayoutEffect(() => {
    restorePageScroll(pathname + window.location.hash)
    const retry = requestAnimationFrame(() => restorePageScroll(pathname + window.location.hash))
    return () => cancelAnimationFrame(retry)
  }, [pathname])

  useLayoutEffect(() => {
    const onHashClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return

      event.preventDefault()
      if (window.location.hash !== hash) {
        window.history.pushState({}, '', hash)
      }
      scrollPageToId(hash)
    }

    document.addEventListener('click', onHashClick)
    return () => document.removeEventListener('click', onHashClick)
  }, [])

  useLayoutEffect(() => {
    const onLoad = () => {
      if (window.location.hash) scrollPageToId(window.location.hash)
      else scrollPageToTop()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return null
}
