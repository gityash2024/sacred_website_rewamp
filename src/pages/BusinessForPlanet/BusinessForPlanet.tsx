/**
 * Business For The Planet Page Component
 */
import { SEO } from '@/components/common/SEO'
import styles from './BusinessForPlanet.module.css'

export const BusinessForPlanet: React.FC = () => {
  return (
    <>
      <SEO
        title="Business for the Planet - Sacred Groves"
        description="Co-create new economic models for People, Planet, Prosperity, and Purpose."
        keywords="business partnership, sustainability, ESG, climate action, business for planet"
      />
      
      <div className={styles.container}>
        <h1>Business for the Planet</h1>
        <p>This page is under construction.</p>
      </div>
    </>
  )
}

