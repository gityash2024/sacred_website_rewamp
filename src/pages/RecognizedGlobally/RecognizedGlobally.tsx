/**
 * Recognized Globally Page Component
 * Page showcasing global recognition
 */
import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './RecognizedGlobally.module.css'
import Alexandrelogo from '@/assets/Alexandrelogo.svg'
import bracte from '@/assets/bracte.svg'
import CGC_1 from '@/assets/CGC_1.svg'
import CGC_2 from '@/assets/CGC_2.svg'
import CGC_3 from '@/assets/CGC_3.svg'
import CGC_4 from '@/assets/CGC_4.svg'
import CGC_5 from '@/assets/CGC_5.svg'
import CGC_6 from '@/assets/CGC_6.svg'
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

