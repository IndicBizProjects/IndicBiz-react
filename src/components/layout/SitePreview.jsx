import { useState } from 'react'
import MagneticBtn from '../primitives/MagneticBtn'

export default function SitePreview({
  url,
  title,
  embeddable = true,
  screenshots = [],
  fallbackImage,
  fallbackAlt,
}) {
  const host = safeHost(url)
  const frames = [fallbackImage, ...screenshots]
    .filter(Boolean)
    .filter((src, i, list) => list.indexOf(src) === i)
    .filter((src) => !/\/work\/.+\.png$/.test(String(src)))

  const [blocked, setBlocked] = useState(!embeddable)
  const [index, setIndex] = useState(0)
  const showCapture = blocked || !embeddable
  const current = frames[index] || fallbackImage

  const prev = () => setIndex((i) => (i - 1 + frames.length) % frames.length)
  const next = () => setIndex((i) => (i + 1) % frames.length)

  return (
    <div className="ag-card wd-preview">
      <div className="wd-browser-bar">
        <span className="wd-dots" aria-hidden="true">
          <i /><i /><i />
        </span>
        <p className="wd-browser-url">{host}</p>
        <div className="wd-browser-open">
          <MagneticBtn href={url} variant="dark" size="sm" target="_blank" rel="noreferrer">
            Open live
          </MagneticBtn>
        </div>
      </div>

      <div className="wd-browser-stage">
        {!showCapture && (
          <iframe
            src={url}
            title={`${title} live preview`}
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            onError={() => setBlocked(true)}
          />
        )}

        {showCapture && current && (
          <div className="wd-preview-fallback">
            <img src={current} alt={fallbackAlt || `${title} site preview`} />
          </div>
        )}
      </div>

      {showCapture && (
        <div className="wd-preview-caption">
          <p>
            {embeddable
              ? 'This site cannot be embedded here.'
              : 'Live embedding is blocked by the site, so this is a captured preview.'}
          </p>
          <div className="wd-preview-actions">
            {frames.length > 1 && (
              <div className="wd-preview-nav">
                <button type="button" className="wd-preview-arrow" onClick={prev} aria-label="Previous screen">
                  ←
                </button>
                <span>{String(index + 1).padStart(2, '0')} / {String(frames.length).padStart(2, '0')}</span>
                <button type="button" className="wd-preview-arrow" onClick={next} aria-label="Next screen">
                  →
                </button>
              </div>
            )}
            <MagneticBtn href={url} variant="dark" size="md" target="_blank" rel="noreferrer">
              Open {title}
            </MagneticBtn>
          </div>
        </div>
      )}
    </div>
  )
}

function safeHost(url) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}
