import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import MagneticBtn from '../../components/primitives/MagneticBtn'
import FadeIn from '../../components/motion/FadeIn'
import {
  CONTACT_HERO,
  CONTACT_CHANNELS,
  CONTACT_PROCESS,
  CONTACT_FAQS,
  CONTACT_SECTIONS,
  PROJECT_TYPES,
  PROJECT_STATUS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  SOURCE_OPTIONS,
  FORM_COPY,
  FORM_INITIAL_VALUES,
} from '../../data/contact'
import { BRAND, SOCIAL_LINKS } from '../../data/site'
import { createEnquiryMailto, submitProjectEnquiry } from '../../services/contactService'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export default function ContactContent() {
  const [form, setForm] = useState(FORM_INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function setField(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: '' }))
  }

  function toggleService(service) {
    setForm((f) => {
      const next = f.services.includes(service)
        ? f.services.filter((item) => item !== service)
        : [...f.services, service]
      return { ...f, services: next, otherService: next.includes('Something else') ? f.otherService : '' }
    })
    if (errors.services) setErrors((e) => ({ ...e, services: '' }))
  }

  async function submit(e) {
    e.preventDefault()
    const nextErrors = {
      name: form.name.trim() ? '' : FORM_COPY.errors.name,
      email: emailOk(form.email) ? '' : FORM_COPY.errors.email,
      services: form.services.length ? '' : FORM_COPY.errors.service,
      message: form.message.trim() ? '' : FORM_COPY.errors.message,
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setSending(true)
    try {
      const result = await submitProjectEnquiry(form)
      if (!result.delivered) {
        window.location.href = createEnquiryMailto(form, BRAND.email)
      }
      setSent(true)
    } catch {
      setErrors((current) => ({ ...current, submit: FORM_COPY.errors.submit }))
    } finally {
      setSending(false)
    }
  }

  return (
    <motion.div className="ag-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero eyebrow={CONTACT_HERO.eyebrow} title={CONTACT_HERO.title} description={CONTACT_HERO.description} />

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap ct-layout">
          <motion.form
            className="ag-card ct-form"
            onSubmit={submit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div className="ct-success">
                <p className="ag-eyebrow">Sent</p>
                <h2 className="ag-h2">{FORM_COPY.success.title}</h2>
                <p className="ag-lede">{FORM_COPY.success.delivered}</p>
                <p className="ct-hint">{FORM_COPY.success.fallback}</p>
                <MagneticBtn href={`mailto:${BRAND.email}`} variant="dark" size="md">
                  {FORM_COPY.success.action}
                </MagneticBtn>
              </div>
            ) : (
              <>
                <header className="ct-form-head">
                  <p className="ag-eyebrow">{FORM_COPY.intro.eyebrow}</p>
                  <h2>{FORM_COPY.intro.title}</h2>
                  <p>{FORM_COPY.intro.description}</p>
                </header>

                <FormSection {...FORM_COPY.sections[0]}>
                  <div className="ct-fields">
                    <Field
                      label={FORM_COPY.fields.name}
                      value={form.name}
                      onChange={(v) => setField('name', v)}
                      placeholder={FORM_COPY.placeholders.name}
                      required
                      error={errors.name}
                      autoComplete="name"
                    />
                    <Field
                      label={FORM_COPY.fields.email}
                      value={form.email}
                      onChange={(v) => setField('email', v)}
                      type="email"
                      placeholder={FORM_COPY.placeholders.email}
                      required
                      error={errors.email}
                      autoComplete="email"
                    />
                    <Field
                      label={FORM_COPY.fields.phone}
                      value={form.phone}
                      onChange={(v) => setField('phone', v)}
                      type="tel"
                      placeholder={FORM_COPY.placeholders.phone}
                      hint={FORM_COPY.hints.phone}
                      autoComplete="tel"
                    />
                    <Field
                      label={FORM_COPY.fields.company}
                      value={form.company}
                      onChange={(v) => setField('company', v)}
                      placeholder={FORM_COPY.placeholders.company}
                      autoComplete="organization"
                    />
                    <Field
                      className="ct-span-2"
                      label={FORM_COPY.fields.role}
                      value={form.role}
                      onChange={(v) => setField('role', v)}
                      placeholder={FORM_COPY.placeholders.role}
                      autoComplete="organization-title"
                    />
                  </div>
                </FormSection>

                <FormSection {...FORM_COPY.sections[1]}>
                  <ChoiceGroup
                    label={FORM_COPY.fields.services}
                    required
                    error={errors.services}
                  >
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleService(type)}
                        className={`btn3d-chip${form.services.includes(type) ? ' is-active' : ''}`}
                      >
                        {type}
                      </button>
                    ))}
                  </ChoiceGroup>

                  {form.services.includes('Something else') && (
                    <Field
                      label={FORM_COPY.fields.otherService}
                      value={form.otherService}
                      onChange={(v) => setField('otherService', v)}
                      placeholder={FORM_COPY.placeholders.otherService}
                    />
                  )}

                  <ChoiceGroup label={FORM_COPY.fields.status}>
                    {PROJECT_STATUS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setField('status', opt)}
                        className={`btn3d-chip${form.status === opt ? ' is-active' : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </ChoiceGroup>

                  <Field
                    label={FORM_COPY.fields.website}
                    value={form.website}
                    onChange={(v) => setField('website', v)}
                    placeholder={FORM_COPY.placeholders.website}
                    hint={FORM_COPY.hints.website}
                    autoComplete="url"
                  />
                </FormSection>

                <FormSection {...FORM_COPY.sections[2]}>
                  <ChoiceGroup label={FORM_COPY.fields.budget} hint={FORM_COPY.hints.budget}>
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setField('budget', opt)}
                        className={`btn3d-chip${form.budget === opt ? ' is-active' : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </ChoiceGroup>
                  <ChoiceGroup label={FORM_COPY.fields.timeline}>
                    {TIMELINE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setField('timeline', opt)}
                        className={`btn3d-chip${form.timeline === opt ? ' is-active' : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </ChoiceGroup>
                </FormSection>

                <FormSection {...FORM_COPY.sections[3]}>
                  <Field
                    as="textarea"
                    label={FORM_COPY.fields.message}
                    value={form.message}
                    onChange={(v) => setField('message', v)}
                    placeholder={FORM_COPY.placeholders.message}
                    hint={FORM_COPY.hints.message}
                    required
                    error={errors.message}
                    rows={6}
                  />
                  <ChoiceGroup label={FORM_COPY.fields.source}>
                    {SOURCE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setField('source', opt)}
                        className={`btn3d-chip${form.source === opt ? ' is-active' : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </ChoiceGroup>
                </FormSection>

                <div className="ct-submit">
                  <MagneticBtn type="submit" variant="dark" size="md" disabled={sending}>
                    {sending ? FORM_COPY.actions.sending : FORM_COPY.actions.submit}
                  </MagneticBtn>
                  {errors.submit ? <p className="ct-error">{errors.submit}</p> : (
                    <p>We reply to {BRAND.email} within two working days.</p>
                  )}
                </div>
              </>
            )}
          </motion.form>

          <aside className="ct-aside">
            <FadeIn y={16}>
              <div className="ag-card ct-side">
                <p className="ag-eyebrow">{CONTACT_SECTIONS.channels.eyebrow}</p>
                <h2>{CONTACT_SECTIONS.channels.title}</h2>
                <p>Average reply within two working days.</p>
                <ul>
                  {CONTACT_CHANNELS.map((ch) => (
                    <li key={ch.title}>
                      <span>{ch.title}</span>
                      {ch.href ? <a href={ch.href}>{ch.value}</a> : <strong>{ch.value}</strong>}
                    </li>
                  ))}
                </ul>
                <div className="ct-social">
                  {SOCIAL_LINKS.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn y={16} delay={0.08}>
              <div className="ag-card ct-side">
                <p className="ag-eyebrow">{CONTACT_SECTIONS.process.eyebrow}</p>
                <h2>{CONTACT_SECTIONS.process.title}</h2>
                <ol className="ct-steps">
                  {CONTACT_PROCESS.map((step) => (
                    <li key={step.number}>
                      <span>{step.number}</span>
                      <div>
                        <strong>{step.title}</strong>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      <section className="ag-section" style={{ paddingTop: 0 }}>
        <div className="ag-wrap">
          <FadeIn y={10}>
            <p className="ag-eyebrow">{CONTACT_SECTIONS.faqs.eyebrow}</p>
            <h2 className="ag-h2" style={{ marginBottom: '1.5rem' }}>{CONTACT_SECTIONS.faqs.title}</h2>
          </FadeIn>
          <div className="ag-card ct-faqs">
            {CONTACT_FAQS.map((faq, i) => (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function FormSection({ number, title, description, children }) {
  return (
    <section className="ct-block">
      <header>
        <p className="ag-eyebrow">{number}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </header>
      {children}
    </section>
  )
}

function ChoiceGroup({ label, hint, required, error, children }) {
  return (
    <div className={`ct-choice${error ? ' is-invalid' : ''}`}>
      <p className="ct-label">
        {label}
        {required ? <abbr title="Required">*</abbr> : null}
      </p>
      <div className="ct-chips">{children}</div>
      {error ? <p className="ct-error">{error}</p> : hint ? <p className="ct-hint">{hint}</p> : null}
    </div>
  )
}

function Field({
  as = 'input',
  label,
  value,
  onChange,
  type = 'text',
  required,
  error,
  hint,
  placeholder,
  autoComplete,
  rows = 5,
  className = '',
}) {
  const Tag = as
  return (
    <label className={`ct-field${error ? ' is-invalid' : ''}${className ? ` ${className}` : ''}`}>
      <span className="ct-label">
        {label}
        {required ? <abbr title="Required">*</abbr> : null}
      </span>
      <Tag
        type={as === 'input' ? type : undefined}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        rows={as === 'textarea' ? rows : undefined}
        onChange={(e) => onChange(e.target.value)}
      />
      {error ? <span className="ct-error">{error}</span> : hint ? <span className="ct-hint">{hint}</span> : null}
    </label>
  )
}
