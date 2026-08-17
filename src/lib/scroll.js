let lenis = null

export function setLenis(instance) {
  lenis = instance
}

export function getLenis() {
  return lenis
}

export function normalizePath(path) {
  const value = String(path || '/')
  const trimmed = value.replace(/\/+$/, '')
  return trimmed || '/'
}

export function splitLocation(to) {
  const url = new URL(to, window.location.origin)
  return {
    pathname: normalizePath(url.pathname),
    hash: url.hash || '',
    search: url.search || '',
  }
}

export function scrollPageToTop() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true })
  }
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function scrollPageToId(hash, offset = -104) {
  const id = String(hash || '').replace(/^#/, '')
  if (!id) {
    scrollPageToTop()
    return
  }

  const el = document.getElementById(id)
  if (!el) {
    scrollPageToTop()
    return
  }

  if (lenis) {
    lenis.scrollTo(el, { immediate: true, force: true, offset })
    return
  }

  const top = el.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo(0, Math.max(0, top))
}

export function restorePageScroll(to = window.location.pathname + window.location.hash) {
  const { hash } = splitLocation(to)
  requestAnimationFrame(() => {
    if (hash) scrollPageToId(hash)
    else scrollPageToTop()
  })
}
