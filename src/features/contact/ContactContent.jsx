import { Eyebrow, Section, SectionHeader } from '../../components/primitives/ui'
import SlideSection from '../../components/motion/SlideSection'
import {
  BUDGET_OPTIONS,
  CONTACT_CHANNELS,
  CONTACT_HERO,
  CONTACT_PROCESS,
  CONTACT_SECTIONS,
  FORM_COPY,
  FORM_STEPS,
  PROJECT_PREP,
  PROJECT_TYPES,
  TIMELINE_OPTIONS,
} from '../../data/contact'
import { BRAND } from '../../data/site'
import { useProjectForm } from '../../hooks/useProjectForm'
import { createEnquiryMailto } from '../../services/contactService'
import styles from '../shared/pages.module.css'

function ChoiceGroup({ options, selected, onSelect, multiple = false }) {
  return (
    <div className={styles.choices}>
      {options.map((option) => {
        const active = multiple ? selected.includes(option) : selected === option
        return (
          <button
            type="button"
            className={`${styles.choice} ${active ? styles.choiceSelected : ''}`}
            aria-pressed={active}
            key={option}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

function ProjectForm() {
  const form = useProjectForm()
  const panel = FORM_COPY.panels[form.step]

  if (form.status === 'success') {
    const mailto = createEnquiryMailto(form.values, BRAND.email)
    return (
      <div className={styles.form} role="status">
        <div className={styles.formPanel}>
          <h2>{FORM_COPY.success.title}</h2>
          <p>{form.result.delivered ? FORM_COPY.success.delivered : FORM_COPY.success.fallback}</p>
          {!form.result.delivered && <a href={mailto}>{FORM_COPY.success.action}</a>}
        </div>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={form.submit} noValidate>
      <div className={styles.stepper} aria-label={CONTACT_SECTIONS.progressLabel}>
        {FORM_STEPS.map((item, index) => (
          <span className={index === form.step ? styles.stepActive : ''} key={item.number}>
            {item.number}. {item.label}
          </span>
        ))}
      </div>
      <div className={styles.formPanel}>
        <div>
          <h2>{panel.title}</h2>
          <p>{panel.description}</p>
        </div>

        {form.step === 0 && (
          <>
            <div role="group" aria-describedby={form.errors.service ? 'service-error' : undefined}>
              <ChoiceGroup options={PROJECT_TYPES} selected={form.values.services} onSelect={form.toggleService} multiple />
            </div>
            {form.errors.service && <p className={styles.error} id="service-error">{form.errors.service}</p>}
          </>
        )}

        {form.step === 1 && (
          <div className={styles.fieldGrid}>
            <div className={styles.field}>
              <label htmlFor="name">{FORM_COPY.fields.name}</label>
              <input id="name" value={form.values.name} onChange={(event) => form.update('name', event.target.value)} autoComplete="name" aria-invalid={Boolean(form.errors.name)} aria-describedby={form.errors.name ? 'name-error' : undefined} />
              {form.errors.name && <p className={styles.error} id="name-error">{form.errors.name}</p>}
            </div>
            <div className={styles.field}>
              <label htmlFor="email">{FORM_COPY.fields.email}</label>
              <input id="email" type="email" value={form.values.email} onChange={(event) => form.update('email', event.target.value)} autoComplete="email" aria-invalid={Boolean(form.errors.email)} aria-describedby={form.errors.email ? 'email-error' : undefined} />
              {form.errors.email && <p className={styles.error} id="email-error">{form.errors.email}</p>}
            </div>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <label htmlFor="company">{FORM_COPY.fields.company}</label>
              <input id="company" value={form.values.company} onChange={(event) => form.update('company', event.target.value)} autoComplete="organization" />
            </div>
          </div>
        )}

        {form.step === 2 && (
          <div className={styles.fieldGrid}>
            <div className={styles.field}>
              <label htmlFor="budget">{FORM_COPY.fields.budget}</label>
              <select id="budget" value={form.values.budget} onChange={(event) => form.update('budget', event.target.value)}>
                {BUDGET_OPTIONS.map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="timeline">{FORM_COPY.fields.timeline}</label>
              <select id="timeline" value={form.values.timeline} onChange={(event) => form.update('timeline', event.target.value)}>
                {TIMELINE_OPTIONS.map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>
          </div>
        )}

        {form.step === 3 && (
          <div className={styles.field}>
            <label htmlFor="message">{FORM_COPY.fields.message}</label>
            <textarea id="message" value={form.values.message} onChange={(event) => form.update('message', event.target.value)} />
          </div>
        )}
      </div>
      {form.errors.submit && <p className={styles.error}>{form.errors.submit}</p>}
      <div className={styles.formActions}>
        <button type="button" onClick={form.back} disabled={form.step === 0}>{FORM_COPY.actions.back}</button>
        {form.step < FORM_STEPS.length - 1 ? (
          <button type="button" onClick={form.next}>{FORM_COPY.actions.next}</button>
        ) : (
          <button type="submit" disabled={form.status === 'sending'}>
            {form.status === 'sending' ? FORM_COPY.actions.sending : FORM_COPY.actions.submit}
          </button>
        )}
      </div>
    </form>
  )
}

export default function ContactContent() {
  return (
    <>
      <SlideSection className={styles.compactHero}>
        <Eyebrow>{CONTACT_HERO.eyebrow}</Eyebrow>
        <h1>{CONTACT_HERO.title}</h1>
        <p>{CONTACT_HERO.description}</p>
      </SlideSection>
      <Section tone="surface">
        <div className={styles.contactGrid}>
          <aside>
            <SectionHeader {...CONTACT_SECTIONS.channels} />
            <div className={styles.channels}>
              {CONTACT_CHANNELS.map((channel) => (
                <div className={styles.channel} key={channel.title}>
                  <span>{channel.title}</span>
                  {channel.href ? <a href={channel.href}>{channel.value}</a> : <p>{channel.value}</p>}
                </div>
              ))}
            </div>
          </aside>
          <ProjectForm />
        </div>
      </Section>
      <Section>
        <SectionHeader {...CONTACT_SECTIONS.preparation} />
        <div className={styles.insightGrid}>
          {PROJECT_PREP.map((item) => (
            <article className={styles.insightCard} key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeader {...CONTACT_SECTIONS.process} />
        <ol className={styles.channels}>
          {CONTACT_PROCESS.map((item) => (
            <li className={styles.channel} key={item.number}>
              <span>{item.number}</span>
              <p>{item.title}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
