/**
 * Recognized Globally Page Component
 * Page showcasing global recognition
 */
import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './RecognizedGlobally.module.css'

/**
 * Recognized Globally page component
 * @returns Recognized Globally page JSX element
 */
export const RecognizedGlobally: React.FC = () => {
  return (
    <>
      <SEO
        title={`Recognized Globally | ${DEFAULT_SEO.title}`}
        description={DEFAULT_SEO.description}
        keywords={DEFAULT_SEO.keywords}
        ogImage={DEFAULT_SEO.ogImage}
      />
      
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Recognized Globally</h1>
          <p className={styles.description}>
            This page showcases global recognition and achievements.
          </p>
        </div>
      </section>
    </>
  )
}

