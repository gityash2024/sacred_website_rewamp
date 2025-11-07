/**
 * Header Component
 * Main navigation header with skip link for accessibility
 */

import { Link } from 'react-router-dom'
import styles from './Header.module.css'

/**
 * Header component with navigation
 * @returns Header JSX element
 */
export const Header: React.FC = () => {
  return (
    <header className={styles.header} role="banner">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <div className={styles.container}>
          <Link to="/" className={styles.logo} aria-label="Home">
            Sacred Website
          </Link>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

