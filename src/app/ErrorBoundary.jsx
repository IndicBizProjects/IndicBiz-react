import { Component } from 'react'
import { Link } from './router'
import { ERROR_PAGE } from '../data/site'
import styles from '../features/shared/pages.module.css'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className={styles.notFound}>
          <p>{ERROR_PAGE.eyebrow}</p>
          <h1>{ERROR_PAGE.title}</h1>
          <p>{ERROR_PAGE.description}</p>
          <Link to={ERROR_PAGE.action.to}>{ERROR_PAGE.action.label}</Link>
        </main>
      )
    }
    return this.props.children
  }
}
