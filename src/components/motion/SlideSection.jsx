import styles from './SlideSection.module.css'

export default function SlideSection({
  children,
  tone = 'light',
  className = '',
  id,
  contain = true,
  style,
}) {
  return (
    <section
      id={id}
      style={style}
      className={`${styles.slide} ${styles[tone] || ''} ${className}`}
    >
      <div className={styles.panel}>
        {contain ? <div className={styles.container}>{children}</div> : children}
      </div>
    </section>
  )
}
