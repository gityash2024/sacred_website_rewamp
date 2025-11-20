/**
 * People For The Planet Page Component
 */
import { SEO } from '@/components/common/SEO'
import styles from './PeopleForPlanet.module.css'

import PeopleforthePlanetlogo from '@/assets/PeopleforthePlanetlogo.png'

// Section 2
import BecomeaGuardian_1 from '@/assets/BecomeaGuardian_1.png'
import BecomeaGuardian_2 from '@/assets/BecomeaGuardian_2.png'
import BecomeaGuardianlogo from '@/assets/BecomeaGuardianlogo.svg'
import connection from '@/assets/connection.svg'
import frog from '@/assets/frog.svg'
import sun from '@/assets/sun.svg'
import butterfly from '@/assets/butterfly.svg'
import arrow from '@/assets/arrow.svg'

// Section 3
import Wesecurebiodi from '@/assets/Wesecurebiodi.svg'
import SacredGroglobalscale from '@/assets/SacredGroglobalscale.png'
import onesecurelogo from '@/assets/onesecurelogo.svg'
import twosecurelogo from '@/assets/twosecurelogo.svg'
import threesecurelogo from '@/assets/threesecurelogo.svg'
import foursecurelogo from '@/assets/foursecurelogo.svg'
import fivesecurelogo from '@/assets/fivesecurelogo.svg'
import playbutton from '@/assets/playbutton.svg'

export const PeopleForPlanet: React.FC = () => {
  return (
    <>
      <SEO
        title="People for the Planet - Sacred Groves"
        description="Protect a biodiverse habitat in your name."
      />

      <div className={styles.pageWrapper}>

        {/* SECTION 1 — HERO */}
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

        {/* SECTION 2 — GUARDIAN */}
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
                Doing something positive for nature is easier than we think.
              </p>

              <p className={styles.guardianText}>
                With Guardians in over 30 countries, we’re protecting biodiverse forests.
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

        {/* SECTION 3 — WILD TECH */}
       {/* SECTION 3 — Wild Tech */}
<section className={styles.wildSection}>
  <div className={styles.wildWrapper}>

    {/* LEFT 2x2 GRID */}
    <div className={styles.leftGrid}>
      
      {/* CARD 01 */}
      <div className={styles.gridCard}>
        <img src={Wesecurebiodi} className={styles.cardBg} />
        <img src={onesecurelogo} className={styles.cardIcon} />
        <div className={styles.cardNum}>01</div>
        <div className={styles.cardText}>
          We secure biodiverse habitats and forests across the world.
        </div>
      </div>

      {/* CARD 02 */}
      <div className={styles.gridCard}>
        <img src={Wesecurebiodi} className={styles.cardBg} />
        <img src={twosecurelogo} className={styles.cardIcon} />
        <div className={styles.cardNum}>02</div>
        <div className={styles.cardText}>
          We virtually divide them into Sacred Groves Clusters (SGCs).
        </div>
      </div>

      {/* CARD 03 */}
      <div className={styles.gridCard}>
        <img src={Wesecurebiodi} className={styles.cardBg} />
        <img src={threesecurelogo} className={styles.cardIcon} />
        <div className={styles.cardNum}>03</div>
        <div className={styles.cardText}>
          Every Sacred Groves Cluster is assigned a unique ID.
        </div>
      </div>

      {/* CARD 04 */}
      <div className={styles.gridCard}>
        <img src={Wesecurebiodi} className={styles.cardBg} />
        <img src={foursecurelogo} className={styles.cardIcon} />
        <div className={styles.cardNum}>04</div>
        <div className={styles.cardText}>
          Guardians can protect each Sacred Groves Cluster for a fee,
          for a period of 10 years.
        </div>
      </div>
    </div>

    {/* RIGHT SIDE BIG CARD */}
    <div className={styles.rightSection}>
      <img src={SacredGroglobalscale} className={styles.rightBg} />

      <div className={styles.rightContent}>
        <h2 className={styles.wildTitle}>
          Our Sacred<br />Groves Clusters<br />
          <span>Built with</span><br />Wild Tech
        </h2>

        <div className={styles.stepRow}>
          <img src={fivesecurelogo} className={styles.stepIcon} />
          <div className={styles.stepNum}>05</div>
        </div>

        <div className={styles.stepDesc}>
          Sacred Groves is a platform for sustainable impact at a global scale.
        </div>

        <div className={styles.videoBox}>
          <img src={SacredGroglobalscale} className={styles.videoThumb} />
          <a
            href="https://youtu.be/yW7uG1JpN9Q"
            target="_blank"
            className={styles.playBtn}
          >
            <img src={playbutton} />
          </a>
        </div>
      </div>
    </div>

  </div>
</section>


      </div>
    </>
  )
}
