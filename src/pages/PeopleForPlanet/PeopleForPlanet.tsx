/**
 * People For The Planet Page Component
 */
import { SEO } from '@/components/common/SEO'
import styles from './PeopleForPlanet.module.css'

export const PeopleForPlanet: React.FC = () => {
  return (
    <>
      <SEO
        title="People for the Planet - Sacred Groves"
        description="Protect a biodiverse habitat in your name. Become a Guardian and make a positive impact on nature."
        keywords="protect habitat, gift habitat, guardian, nature conservation"
      />
      
      <div className={styles.container}>
        <h1>People for the Planet</h1>
        <p>This page is under construction.</p>
      </div>
    </>
  )
}

