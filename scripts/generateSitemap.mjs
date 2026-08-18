import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://indicbiz.com'
const OUTPUT_FILE = path.resolve('public/sitemap.xml')

const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/work', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/indic', priority: '0.5', changefreq: 'yearly' },
]

const SERVICE_SLUGS = [
  'brand-identity',
  'web-experiences',
  'product-design',
  'growth-seo',
]

const WORK_SLUGS = [
  'destinize-tours',
  'blitz-india-engineering',
  'tamooz-middle-east',
  'kashvi-creations',
]

const today = new Date().toISOString().split('T')[0]

const allUrls = [
  ...STATIC_ROUTES.map((r) => ({
    loc: `${SITE_URL}${r.path === '/' ? '' : r.path}`,
    lastmod: today,
    changefreq: r.changefreq,
    priority: r.priority,
  })),
  ...SERVICE_SLUGS.map((slug) => ({
    loc: `${SITE_URL}/services/${slug}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.8',
  })),
  ...WORK_SLUGS.map((slug) => ({
    loc: `${SITE_URL}/work/${slug}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.8',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

fs.writeFileSync(OUTPUT_FILE, xml.trim() + '\n', 'utf-8')
console.log(`✅ Generated sitemap with ${allUrls.length} URLs at ${OUTPUT_FILE}`)
