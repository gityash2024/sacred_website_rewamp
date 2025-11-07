/**
 * Header Component
 * Main navigation header based on Sacred Groves design
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
          <Link to="/" className={styles.logo} aria-label="Sacred Groves Home">
            <img 
              src="/assets/logos/sacred-groves-logo.svg" 
              alt="Sacred Groves" 
              className={styles.logoImage}
            />
          </Link>
          
          <div className={styles.navRight}>
            <button className={styles.signUpButton}>Sign Up</button>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.searchButton} aria-label="Search">
              <img src="/assets/icons/search.svg" alt="" />
            </button>
            <button className={styles.menuButton} aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}