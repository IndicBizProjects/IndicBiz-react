import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../../components/motion/FadeIn'
import Eyebrow from '../../components/ui/Eyebrow'
import { CONTACT_HERO, CONTACT_CHANNELS, PROJECT_TYPES, BUDGET_OPTIONS, TIMELINE_OPTIONS, FORM_COPY } from '../../data/contact'
import SplashCursor from '../../components/motion/SplashCursor'
import Magnet from '../../components/motion/Magnet'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1rem',
  borderRadius: 'var(--radius-md)',
  border: '1.5px solid var(--line-mid)',
  background: 'var(--bg-surface)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.72rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
  marginBottom: '0.5rem',
}

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple mailto fallback
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nProject type: ${form.projectType}\n\n${form.message}`
    window.location.href = `mailto:hello@indicbiz.com?subject=New project enquiry&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-dark)',
          color: 'var(--ink-inv)',
          padding: 'calc(var(--header-height) + clamp(4rem, 8vw, 7rem)) var(--layout-gutter) clamp(5rem, 10vw, 9rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 20, 0], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-5%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <SplashCursor 
          SIM_RESOLUTION={128} 
          DYE_RESOLUTION={1440}
          COLOR="#a4a29e" // Match our brand accents
        />
        <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto', position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
          <FadeIn>
            <Eyebrow light>{CONTACT_HERO.eyebrow}</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'var(--text-hero)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: 'var(--ink-inv)',
                maxWidth: '16ch',
                marginTop: '1rem',
              }}
            >
              {CONTACT_HERO.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-inv-soft)', maxWidth: '48ch', lineHeight: 1.7, marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
              {CONTACT_HERO.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section style={{ background: 'var(--bg-canvas)', padding: 'clamp(5rem, 10vw, 9rem) var(--layout-gutter)' }}>
        <div
          style={{
            maxWidth: 'var(--layout-max)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <FadeIn>
            {sent ? (
              <div style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'var(--bg-dark)', color: 'var(--ink-inv)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.04em', marginBottom: '1rem' }}>
                  Thank you.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-inv-soft)', lineHeight: 1.7 }}>
                  We'll reply within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>{FORM_COPY.fields.name}</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent-dark)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--line-mid)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>{FORM_COPY.fields.email}</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent-dark)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--line-mid)' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" style={labelStyle}>{FORM_COPY.fields.company}</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent-dark)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--line-mid)' }}
                  />
                </div>

                <div>
                  <label htmlFor="projectType" style={labelStyle}>Project type</label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, projectType: type }))}
                        style={{
                          padding: '0.45rem 1rem',
                          borderRadius: 'var(--radius-pill)',
                          border: `1.5px solid ${form.projectType === type ? 'var(--ink)' : 'var(--line-mid)'}`,
                          background: form.projectType === type ? 'var(--ink)' : 'transparent',
                          color: form.projectType === type ? 'var(--bg-canvas)' : 'var(--ink-mid)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>{FORM_COPY.fields.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent-dark)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--line-mid)' }}
                  />
                </div>

                <div>
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.95rem 2.25rem', borderRadius: 'var(--radius-pill)',
                        background: 'var(--ink)', color: 'var(--bg-canvas)',
                        fontFamily: 'var(--font-body)', fontWeight: 600,
                        fontSize: '1rem', cursor: 'pointer', border: 'none',
                        pointerEvents: 'auto'
                      }}
                    >
                      {FORM_COPY.actions.submit}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </Magnet>
                </div>
              </form>
            )}
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.15}>
            <div style={{ position: 'sticky', top: 'calc(var(--header-height) + 2rem)', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {CONTACT_CHANNELS.map((channel) => (
                <div key={channel.title} style={{ borderBottom: '1px solid var(--line)', paddingBottom: '2rem' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '0.5rem' }}>
                    {channel.title}
                  </p>
                  {channel.href ? (
                    <a href={channel.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.2s' }}>
                      {channel.value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', color: 'var(--ink)' }}>
                      {channel.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          [data-contact-grid] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  )
}
