import { useState } from 'react'

export default function ShareButton({ title, text, url }) {
  const [shared, setShared] = useState(false)

  const handleShare = async () => {
    const shareUrl = url || window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl })
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      } catch (err) {
        console.error('Clipboard error:', err)
      }
    }
  }

  return (
    <button onClick={handleShare} className="ag-btn ag-btn-light ag-btn-md">
      <span className="ag-btn-text">
        {shared ? 'Link Copied!' : 'Share Project'}
      </span>
    </button>
  )
}
