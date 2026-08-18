import { useEffect } from 'react'
import { useRouter } from './routerContext'
import { getRouteSeo, buildJsonLdGraph, GLOBAL_SEO } from '../data/seo'

function setOrCreateMeta(selector, attributeName, attributeValue, content) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attributeName, attributeValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setOrCreateLink(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function setOrCreateHreflang(hreflang, href) {
  let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', hreflang)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function PageMeta() {
  const { pathname } = useRouter()

  useEffect(() => {
    const seo = getRouteSeo(pathname)
    const jsonLd = buildJsonLdGraph(pathname, seo)

    // 1. Page Title
    document.title = seo.title

    // 2. Standard Meta Tags
    setOrCreateMeta('meta[name="description"]', 'name', 'description', seo.description)
    setOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', (seo.keywords || GLOBAL_SEO.keywords).join(', '))
    setOrCreateMeta('meta[name="author"]', 'name', 'author', GLOBAL_SEO.legalName)
    setOrCreateMeta('meta[name="robots"]', 'name', 'robots', seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setOrCreateMeta('meta[name="theme-color"]', 'name', 'theme-color', GLOBAL_SEO.themeColor)

    // 3. Geo & Location Metadata
    setOrCreateMeta('meta[name="geo.region"]', 'name', 'geo.region', GLOBAL_SEO.geoRegion)
    setOrCreateMeta('meta[name="geo.placename"]', 'name', 'geo.placename', GLOBAL_SEO.geoPlacename)

    // 4. Canonical Tag
    setOrCreateLink('canonical', seo.url)

    // 4.5. Global Targeting (hreflang)
    setOrCreateHreflang('x-default', seo.url)
    setOrCreateHreflang('en-US', seo.url)
    setOrCreateHreflang('en-GB', seo.url)
    setOrCreateHreflang('en-IN', seo.url)

    // 5. Open Graph Meta Tags
    setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', seo.title)
    setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', seo.description)
    setOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', seo.url)
    setOrCreateMeta('meta[property="og:type"]', 'property', 'og:type', seo.ogType || 'website')
    setOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', GLOBAL_SEO.siteName)
    setOrCreateMeta('meta[property="og:locale"]', 'property', 'og:locale', GLOBAL_SEO.locale)
    setOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', GLOBAL_SEO.defaultImage)
    setOrCreateMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', GLOBAL_SEO.defaultImageAlt)

    // 6. Twitter Card Meta Tags
    setOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setOrCreateMeta('meta[name="twitter:site"]', 'name', 'twitter:site', GLOBAL_SEO.twitterHandle)
    setOrCreateMeta('meta[name="twitter:creator"]', 'name', 'twitter:creator', GLOBAL_SEO.twitterHandle)
    setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
    setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description)
    setOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', GLOBAL_SEO.defaultImage)

    // 7. Dynamic Schema.org JSON-LD Graph Injection
    let scriptTag = document.querySelector('script#ib-schema-graph')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.id = 'ib-schema-graph'
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(jsonLd)
  }, [pathname])

  return null
}