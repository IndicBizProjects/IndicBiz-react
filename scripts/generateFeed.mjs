import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://indicbiz.com'
const OUTPUT_FILE = path.resolve('public/feed.xml')
const WORK_FILE = path.resolve('src/data/work.js')

const workContent = fs.readFileSync(WORK_FILE, 'utf-8')

const projects = []
// Match id, title, and summary from the objects in work.js
const regex = /id:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)',[\s\S]*?summary:\s*'([^']+)'/g

let match
while ((match = regex.exec(workContent)) !== null) {
  projects.push({
    id: match[1],
    title: match[2],
    summary: match[3],
  })
}

const today = new Date().toUTCString()

const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>IndicBiz Work</title>
  <link>${SITE_URL}</link>
  <description>Digital clarity for ambitious businesses. Selected engagements.</description>
  <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${projects
  .map(
    (p) => `  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${SITE_URL}/work/${p.id}</link>
    <guid isPermaLink="true">${SITE_URL}/work/${p.id}</guid>
    <description><![CDATA[${p.summary}]]></description>
    <pubDate>${today}</pubDate>
  </item>`
  )
  .join('\n')}
</channel>
</rss>`

fs.writeFileSync(OUTPUT_FILE, xml.trim() + '\n', 'utf-8')
console.log(`✅ Generated RSS feed with ${projects.length} items at ${OUTPUT_FILE}`)
