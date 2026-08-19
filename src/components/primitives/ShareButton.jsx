import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { springHover, tapScale } from '../../lib/motion'

export default function ShareButton({ title, text, url }) {
  const [shared, setShared] = useState(false)

  const handleShare = async () => {
    const shareUrl = url || window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl })
        setShared(true)
        setTimeout(() => setShared(false), 2400)
      } catch (err) {
        if (err.name !== 'AbortError') console.error('Error sharing:', err)
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setShared(true)
        setTimeout(() => setShared(false), 2400)
      } catch (err) {
        console.error('Clipboard error:', err)
      }
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleShare}
      className="btn3d btn3d--light btn3d--md"
      whileHover={{ scale: 1.025 }}
      whileTap={tapScale}
      transition={springHover}
    >
      <span className="btn3d-shine" aria-hidden="true" />
      <span className="btn3d-face" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
        <AnimatePresence mode="wait" initial={false}>
          {shared ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              ✓ Link Copied!
            </motion.span>
          ) : (
            <motion.span
              key="share"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              Share Project ↗
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  )
}
