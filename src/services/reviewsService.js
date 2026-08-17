import { REVIEW_RATING_FACTORS, projectIdFromLabel } from '../data/reviews'

const DEFAULT_REVIEWS_SHEET_ID = '1pUbsor9BjR5L63BQ0Q6A21mopKAtwaPRyVvk5_Rn_iQ'
const DEFAULT_REVIEWS_SHEET_NAME = 'Form Responses 1'

export async function loadPublishedReviews() {
  const jsonUrl = import.meta.env.VITE_REVIEWS_FEED_URL
  const csvUrl =
    import.meta.env.VITE_REVIEWS_CSV_URL ||
    sheetCsvUrl(
      import.meta.env.VITE_REVIEWS_SHEET_ID || DEFAULT_REVIEWS_SHEET_ID,
      import.meta.env.VITE_REVIEWS_SHEET_NAME || DEFAULT_REVIEWS_SHEET_NAME,
    )

  try {
    if (jsonUrl) {
      const reviews = await fetchJsonReviews(jsonUrl)
      if (reviews.length) return reviews
    }
    if (csvUrl) {
      const reviews = await fetchCsvReviews(csvUrl)
      if (reviews.length) return reviews
    }
  } catch (error) {
    console.warn('Reviews feed unavailable.', error)
  }

  return []
}

function sheetCsvUrl(sheetId, sheetName) {
  if (!sheetId) return ''
  const tab = encodeURIComponent(sheetName || 'Form_Responses')
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${tab}`
}

async function fetchJsonReviews(url) {
  const response = await fetch(url, { credentials: 'omit' })
  if (!response.ok) throw new Error(`Reviews feed ${response.status}`)
  const data = await response.json()
  const rows = Array.isArray(data) ? data : data.reviews
  return (rows || []).map(normalizeReview).filter(isVisibleReview)
}

async function fetchCsvReviews(url) {
  const response = await fetch(url, { credentials: 'omit' })
  if (!response.ok) throw new Error(`Reviews CSV ${response.status}`)
  const text = await response.text()
  return parseCsv(text).map(normalizeReview).filter(isVisibleReview)
}

function normalizeReview(row) {
  const get = (...keys) => {
    const hit = keys.find((key) => row[key] != null && String(row[key]).trim() !== '')
    return hit ? String(row[hit]).trim() : ''
  }

  const project = get('project', 'Project')
  const featured = get('featured', 'Featured')
  const approved = get('approved', 'Approved')
  const ratings = Object.fromEntries(
    REVIEW_RATING_FACTORS.map((factor) => [factor.key, Number(get(...factor.columns)) || 0]),
  )
  const overall = Number(get('rating', 'Rating', 'Overall', 'Overall experience')) || averageRating(Object.values(ratings))

  return {
    name: get('name', 'Name', 'Client name'),
    company: get('company', 'Company / Business', 'Name of your company', 'Company name', 'Company'),
    role: get('role', 'Role'),
    category: get('category', 'Service(s) taken', 'Service taken', 'Category'),
    rating: overall,
    ratings,
    quote: get('quote', 'Review', 'review'),
    projectId: get('projectId') || projectIdFromLabel(project),
    featured: isYes(featured),
    approved: approved ? isYes(approved) : true,
  }
}

function averageRating(values) {
  const scored = values.filter((value) => value > 0)
  if (!scored.length) return 0
  return Math.round(scored.reduce((sum, value) => sum + value, 0) / scored.length)
}

function isVisibleReview(review) {
  return Boolean(review.approved && review.quote && (review.name || review.company))
}

function isYes(value) {
  return /^(yes|true|1)$/i.test(String(value).trim())
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean)
  if (!lines.length) return []

  const headers = splitCsvLine(lines[0])
  return lines.slice(1).map((line) => {
    const cells = splitCsvLine(line)
    return headers.reduce((row, header, i) => {
      row[header] = cells[i] || ''
      return row
    }, {})
  })
}

function splitCsvLine(line) {
  const cells = []
  let current = ''
  let quoted = false

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]
    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"'
        i += 1
      } else {
        quoted = !quoted
      }
    } else if (char === ',' && !quoted) {
      cells.push(current)
      current = ''
    } else {
      current += char
    }
  }

  cells.push(current)
  return cells
}
