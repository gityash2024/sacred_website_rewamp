/**
 * Loading Component
 * Loading spinner for lazy-loaded routes
 */

import styles from './Loading.module.css'

/**
 * Loading component for Suspense fallback
 * @returns Loading JSX element
 */
export const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer} role="status" aria-label="Loading">
      <div className={styles.spinner} aria-hidden="true"></div>
      <span className={styles.srOnly}>Loading...</span>
    </div>
  )
}

