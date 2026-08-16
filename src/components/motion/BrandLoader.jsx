import { useEffect, useState } from 'react'

function LogoMark() {
  return (
    <>
      <p className="ib-splash-mark">
        <span className="ib-core">i</span>
        <span className="ib-clip ib-clip-mid">ndic</span>
        <span className="ib-core">b</span>
        <span className="ib-clip ib-clip-end">iz</span>
        <span className="ib-dot">.</span>
      </p>
      <span className="ib-bar" />
    </>
  )
}

export default function BrandLoader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    try {
      sessionStorage.removeItem('indicbiz-loader')
    } catch {
      /* ignore */
    }

    document.getElementById('ib-splash')?.remove()
    document.body.dataset.loader = 'true'

    const leave = window.setTimeout(() => setLeaving(true), 2700)
    const done = window.setTimeout(() => {
      setVisible(false)
      delete document.body.dataset.loader
    }, 3400)

    return () => {
      window.clearTimeout(leave)
      window.clearTimeout(done)
      delete document.body.dataset.loader
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`ib-splash${leaving ? ' is-leaving' : ''}`}
      aria-hidden="true"
    >
      <LogoMark />
    </div>
  )
}
