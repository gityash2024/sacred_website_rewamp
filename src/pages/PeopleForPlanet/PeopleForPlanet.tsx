/**
 * People For The Planet Page Component
 */
import { SEO } from '@/components/common/SEO'
import styles from './PeopleForPlanet.module.css'
// 1 section
import PeopleforthePlanetlogo from '@/assets/PeopleforthePlanetlogo.png'
// 2 section
import BecomeaGuardian_1 from '@/assets/BecomeaGuardian_1.png'
import BecomeaGuardian_2 from '@/assets/BecomeaGuardian_2.png'
import BecomeaGuardianlogo from '@/assets/BecomeaGuardianlogo.svg'
import connection from '@/assets/connection.svg'
import frog from '@/assets/frog.svg'
import sun from '@/assets/sun.svg'
import butterfly from '@/assets/butterfly.svg'
import arrow from '@/assets/arrow.svg'
// 3 section
import Wesecurebiodi from '@/assets/Wesecurebiodi.svg'
import SacredGroglobalscale from '@/assets/SacredGroglobalscale.png'
import onesecurelogo from '@/assets/onesecurelogo.svg'
import twosecurelogo from '@/assets/twosecurelogo.svg'
import threesecurelogo from '@/assets/threesecurelogo.svg'
import foursecurelogo from '@/assets/foursecurelogo.svg'
import foursecurelogo_1 from '@/assets/foursecurelogo_1.svg'
import fivesecurelogo from '@/assets/fivesecurelogo.svg'
import playbutton from '@/assets/playbutton.svg'
// 4 section 
import ProtectaHabitat from '@/assets/ProtectaHabitat.svg'
import ImpactCompass from '@/assets/ImpactCompass.png'
import BritishPoundbackground from '@/assets/BritishPoundbackground.svg'
import BritishPoundlogo from '@/assets/BritishPoundlogo.svg'

// 5 section 
import GiftaHabitatilogo from '@/assets/GiftaHabitatilogo.svg'
import GiftaHabitatimage from '@/assets/GiftaHabitatimage.png'
import GiftaHabitat_1 from '@/assets/GiftaHabitat_1.svg'
import GiftaHabitat_2 from '@/assets/GiftaHabitat_2.svg'
import GiftaHabitat_3 from '@/assets/GiftaHabitat_3.svg'
import GiftaHabitat_4 from '@/assets/GiftaHabitat_4.svg'
import GiftaHabitat_5 from '@/assets/GiftaHabitat_5.svg'
import GiftaHabitat_6 from '@/assets/GiftaHabitat_6.svg'
import GiftaHabitat_7 from '@/assets/GiftaHabitat_7.svg'

// 6 section
import Sacreddeedsmust from '@/assets/Sacreddeedsmust.svg'
import Certificateimage from '@/assets/Certificateimage.svg'
import certificateimagelogo from '@/assets/certificateimagelogo.svg'
import VirtualBackground from '@/assets/VirtualBackground.svg'
import virtualbacklogo from '@/assets/virtualbacklogo.png'
import virtualbackcenterlogo_1 from '@/assets/virtualbackcenterlogo_1.svg'
import virtualbackcenterlogo_2 from '@/assets/virtualbackcenterlogo_2.svg'

export const PeopleForPlanet: React.FC = () => {
  return (
    <>
      <SEO
        title="People for the Planet - Sacred Groves"
        description="Protect a biodiverse habitat in your name. Become a Guardian and make a positive impact on nature."
        keywords="protect habitat, gift habitat, guardian, nature conservation"
      />

      <div className={styles.pageWrapper}>
        <section
          className={styles.heroSection}
          style={{ backgroundImage: `url(${PeopleforthePlanetlogo})` }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              What if protecting a habitat was as easy as sending a text?
            </h1>
          </div>
        </section>

        <section className={styles.guardianSection}>
          <div className={styles.guardianGrid}>
            <div className={styles.guardianLeft}>
              <div className={styles.imgWrapper}>
                <img src={BecomeaGuardian_1} className={styles.mainImg} />
                <img src={connection} className={styles.iconTop} />
                <img src={frog} className={styles.iconBottom} />
              </div>

              <div className={styles.imgWrapper}>
                <img src={BecomeaGuardian_2} className={styles.mainImg} />
                <img src={sun} className={styles.iconTop} />
                <img src={butterfly} className={styles.iconBottom} />
              </div>
            </div>

            <div className={styles.guardianRight}>
              <img src={BecomeaGuardianlogo} className={styles.guardianLogo} />

              <h2 className={styles.guardianTitle}>
                Become a Guardian<br />of the Wild.
              </h2>

              <p className={styles.guardianText}>
                Doing something positive for nature is easier than we think. With a simple click, you can protect a habitat — or even gift one.
              </p>

              <p className={styles.guardianText}>
                With Guardians in over 30 countries, we’re protecting biodiverse forests in the UK and Canada, proof that when people come together, the planet thrives.
              </p>

              <p className={styles.guardianText}>
                A small step can truly make a big difference.
              </p>

              <div className={styles.btnGroup}>
               <button className={styles.guardianBtn}>
  <span>GIFT A HABITAT</span>
  <img src={arrow} />
</button>

<button className={styles.guardianBtn}>
  <span>PROTECT A HABITAT</span>
  <img src={arrow} />
</button>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}