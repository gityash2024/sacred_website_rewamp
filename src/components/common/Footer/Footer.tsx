/**
 * Footer Component
 * Site footer with copyright and links
 */

import styles from './Footer.module.css'

/**
 * Footer component
 * @returns Footer JSX element
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} Sacred Website. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

