import { ArrowUpRight } from 'lucide-react'
import { Link } from '../../app/router'
import { useRouter } from '../../app/routerContext'
import SlideSection from '../../components/motion/SlideSection'
import { CTASection, Eyebrow, ProcessGrid, Section, SectionHeader } from '../../components/primitives/ui'
import { SERVICE_DETAIL_COPY, SERVICE_PROCESS, SERVICES, SERVICES_PAGE } from '../../data/services'
import NotFoundPage from '../../pages/NotFoundPage'
import styles from '../shared/pages.module.css'

export function ServicesContent() {
  return (
    <>
      <SlideSection className={styles.compactHero}>
        <Eyebrow>{SERVICES_PAGE.eyebrow}</Eyebrow>
        <h1>{SERVICES_PAGE.title}</h1>
        <p>{SERVICES_PAGE.description}</p>
      </SlideSection>
      <Section tone="surface">
        <div className={styles.serviceList}>
          {SERVICES.map((service) => (
            <article className={styles.serviceRow} key={service.id} style={{ '--service-accent': service.accent }}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <div>
                <p>{service.short}</p>
                <Link to={`/services/${service.id}`}>
                  {SERVICES_PAGE.rowAction} <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader {...SERVICES_PAGE.process} />
        <ProcessGrid steps={SERVICE_PROCESS} />
      </Section>
      <CTASection content={SERVICES_PAGE.cta} />
    </>
  )
}

export function ServiceDetailContent() {
  const { pathname } = useRouter()
  const id = pathname.split('/')[2]
  const service = SERVICES.find((item) => item.id === id)

  if (!service) return <NotFoundPage />

  return (
    <>
      <SlideSection className={styles.detailHero} style={{ '--service-accent': service.accent }}>
        <Eyebrow>{service.number} · {SERVICES_PAGE.eyebrow}</Eyebrow>
        <h1>{service.title}</h1>
      </SlideSection>
      <Section>
        <div className={styles.detailIntro}>
          <Eyebrow>{service.short}</Eyebrow>
          <p>{service.overview}</p>
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeader eyebrow={SERVICE_DETAIL_COPY.fitEyebrow} title={SERVICE_DETAIL_COPY.fitTitle} />
        <ul className={styles.insightGrid}>
          {service.bestFor.map((item, index) => (
            <li className={styles.insightCard} key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionHeader eyebrow={SERVICE_DETAIL_COPY.deliverablesEyebrow} title={SERVICE_DETAIL_COPY.deliverablesTitle} />
        <ul className={styles.deliverables}>
          {service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
        </ul>
      </Section>
      <Section tone="surface">
        <SectionHeader eyebrow={SERVICE_DETAIL_COPY.outcomesEyebrow} title={SERVICE_DETAIL_COPY.outcomesTitle} />
        <ul className={styles.insightGrid}>
          {service.outcomes.map((item, index) => (
            <li className={styles.insightCard} key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionHeader eyebrow={SERVICE_DETAIL_COPY.processEyebrow} title={SERVICE_DETAIL_COPY.processTitle} />
        <ProcessGrid steps={SERVICE_PROCESS} />
      </Section>
      <CTASection content={SERVICES_PAGE.cta} />
    </>
  )
}
