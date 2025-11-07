/**
 * Home Page Component
 * Main landing page
 */

import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './Home.module.css'

/**
 * Home page component
 * @returns Home page JSX element
 */
export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title={DEFAULT_SEO.title}
        description={DEFAULT_SEO.description}
        keywords={DEFAULT_SEO.keywords}
        ogImage={DEFAULT_SEO.ogImage}
      />
      <article className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Home Page</h1>
            <p className={styles.subtitle}>UI/UX Coming Soon</p>
            <p className={styles.description}>
              This is a production-ready React.js static website built with TypeScript, Vite, and
              modern best practices.
            </p>
          </div>
        </section>
      </article>
    </>
  )
}

