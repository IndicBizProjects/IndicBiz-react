import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn from '../../components/motion/FadeIn'
import { CONTACT_HERO, CONTACT_CHANNELS, PROJECT_TYPES, BUDGET_OPTIONS, TIMELINE_OPTIONS, FORM_COPY, FORM_INITIAL_VALUES } from '../../data/contact'
import { PRICING_FAQS as FAQS } from '../../data/pricing'
import { BRAND } from '../../data/site'

const pageVariants = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0, transition: { duration: 0.2 } } }

export default function ContactContent() {
  const [form, setForm] = useState(FORM_INITIAL_VALUES)
  const [sent, setSent] = useState(false)

  function setField(key, value) {
    setForm(f => ({ ...f, [key]: value }))
  }
  function toggleService(s) {
    setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s] }))
  }
  function submit(e) {
    e.preventDefault()
    const body = [
      `Services: ${form.services.join(', ')}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      form.message ? `\n${form.message}` : null,
    ].filter(Boolean).join('\n')
    window.location.href = `mailto:${BRAND.email}?subject=New project enquiry&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <motion.div className="ag-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero eyebrow={CONTACT_HERO.eyebrow} title="Reach us at any time" description={CONTACT_HERO.description} />

      <section className="ag-section ag-ghost-wrap" style={{ paddingTop: 0, overflow: 'hidden' }}>
        <motion.span
          className="ag-ghost-text"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.038 }}
          viewport={{ once: true, amount: 0.05 }}
          style={{ fontSize: 'clamp(5rem, 13vw, 11rem)' }}
        >
          CONTACT
        </motion.span>

        <div className="ag-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="ag-card"
            style={{ padding: '2rem' }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(13,36,38,0.1)' }}
            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.4rem', letterSpacing: '-0.04em' }}>Direct</p>
            <p style={{ color: '#505050', marginBottom: '1.5rem' }}>Average reply within two working days.</p>
            {CONTACT_CHANNELS.map((ch, i) => (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.06 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4 }}
                style={{ padding: '0.85rem 0', borderTop: '1px solid rgba(13,36,38,0.08)' }}
              >
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#505050' }}>{ch.title}</p>
                {ch.href ? <a href={ch.href} style={{ fontWeight: 600 }}>{ch.value}</a> : <p style={{ fontWeight: 600 }}>{ch.value}</p>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="ag-card"
            style={{ padding: '2rem' }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(13,36,38,0.1)' }}
            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
          >
            {sent ? (
              <div>
                <h3 className="ag-h2" style={{ fontSize: '2rem' }}>{FORM_COPY.success.title}</h3>
                <p className="ag-lede" style={{ marginTop: '0.75rem' }}>{FORM_COPY.success.delivered}</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p className="ag-eyebrow">Project type</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {PROJECT_TYPES.map((type) => (
                    <button key={type} type="button" onClick={() => toggleService(type)} className={`btn3d-chip${form.services.includes(type) ? ' is-active' : ''}`} style={{ textTransform: 'none', fontFamily: 'var(--font-body)' }}>
                      {type}
                    </button>
                  ))}
                </div>
                <Field label={FORM_COPY.fields.name} value={form.name} onChange={v => setField('name', v)} required />
                <Field label={FORM_COPY.fields.email} value={form.email} onChange={v => setField('email', v)} type="email" required />
                <Field label={FORM_COPY.fields.company} value={form.company} onChange={v => setField('company', v)} />
                <p className="ag-eyebrow">Budget</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1rem' }}>
                  {BUDGET_OPTIONS.map((opt) => (
                    <button key={opt} type="button" onClick={() => setField('budget', opt)} className={`btn3d-chip${form.budget === opt ? ' is-active' : ''}`}>{opt}</button>
                  ))}
                </div>
                <p className="ag-eyebrow">Timeline</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1rem' }}>
                  {TIMELINE_OPTIONS.map((opt) => (
                    <button key={opt} type="button" onClick={() => setField('timeline', opt)} className={`btn3d-chip${form.timeline === opt ? ' is-active' : ''}`}>{opt}</button>
                  ))}
                </div>
                <label style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#505050', marginBottom: '0.4rem' }}>{FORM_COPY.fields.message}</label>
                <textarea value={form.message} onChange={e => setField('message', e.target.value)} rows={5} style={inputStyle} />
                <div style={{ marginTop: '1.25rem' }}>
                  <MagneticBtn type="submit" variant="dark" size="md">{FORM_COPY.actions.submit}</MagneticBtn>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-wrap">
          <FadeIn y={10}>
            <p className="ag-eyebrow">FAQs</p>
            <h2 className="ag-h2" style={{ marginBottom: '1.5rem' }}>Questions & answers</h2>
          </FadeIn>
          <div className="ag-card" style={{ padding: '1.5rem 2rem' }}>
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.055, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4 }}
                style={{ padding: '1rem 0', borderBottom: '1px solid rgba(13,36,38,0.08)' }}
              >
                <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>{faq.question}</p>
                <p style={{ color: '#505050' }}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: '16px',
  border: 'none',
  background: '#f7f7f7',
  boxShadow: 'inset 0 0 5px rgba(166,166,166,0.35)',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  marginBottom: '1rem',
  boxSizing: 'border-box',
}

function Field({ label, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#505050', marginBottom: '0.4rem' }}>{label}</label>
      <input type={type} value={value} required={required} onChange={e => onChange(e.target.value)} style={inputStyle} />
    </div>
  )
}
