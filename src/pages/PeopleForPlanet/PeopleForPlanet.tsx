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
import arrow from '@/assets/arrow.svg' // Used for active button

// Section 3
import Wesecurebiodi from '@/assets/Wesecurebiodi.svg'
import SacredGroglobalscale from '@/assets/SacredGroglobalscale.png'
import onesecurelogo from '@/assets/onesecurelogo.svg'
import twosecurelogo from '@/assets/twosecurelogo.svg'
import threesecurelogo from '@/assets/threesecurelogo.svg'
import foursecurelogo from '@/assets/foursecurelogo.svg'
import fivesecurelogo from '@/assets/fivesecurelogo.svg'
import playbutton from '@/assets/playbutton.svg'
// 4 section
import ImpactCompass from '@/assets/ImpactCompass.png'
import ProtectaHabitat from '@/assets/ProtectaHabitat.svg'
import BritishPoundbackground from '@/assets/BritishPoundbackground.svg' // Note: This is now only a placeholder import as background is done via CSS color/div
import BritishPoundlogo from '@/assets/BritishPoundlogo.svg'
import Arrow1 from '@/assets/Arrow1.svg' // Used for quantity arrows
// 5 section
import GiftaHabitatilogo from '@/assets/GiftaHabitatilogo.svg'
import dotdotbox from '@/assets/dotdotbox.png'
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
                <img src={BecomeaGuardian_1} className={styles.mainImg} alt="Guardian 1" />
                <img src={connection} className={styles.iconTop} alt="Connection icon" />
                <img src={frog} className={styles.iconBottom} alt="Frog icon" />
              </div>

              <div className={styles.imgWrapper}>
                <img src={BecomeaGuardian_2} className={styles.mainImg} alt="Guardian 2" />
                <img src={sun} className={styles.iconTop} alt="Sun icon" />
                <img src={butterfly} className={styles.iconBottom} alt="Butterfly icon" />
              </div>
            </div>

            <div className={styles.guardianRight}>
              <img
                src={BecomeaGuardianlogo}
                className={styles.guardianLogo}
                alt="Become a Guardian logo"
              />

              <h2 className={styles.guardianTitle}>
                Become a Guardian
                <br />
                of the Wild.
              </h2>

              <p className={styles.guardianText}>
                Doing something positive for nature is easier than we think.
              </p>

              <p className={styles.guardianText}>
                With Guardians in over 30 countries, we’re protecting biodiverse forests.
              </p>

              <p className={styles.guardianText}>A small step can truly make a big difference.</p>

              <div className={styles.btnGroup}>
                <button className={styles.guardianBtn}>
                  <span>GIFT A HABITAT</span>
                  <img src={arrow} alt="Arrow" />
                </button>

                <button className={styles.guardianBtn}>
                  <span>PROTECT A HABITAT</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WILD TECH */}
        <section className={styles.wildSection}>
          <div className={styles.wildWrapper}>
            {/* LEFT 2x2 GRID */}
            <div className={styles.leftGrid}>
              {/* CARD 01 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <img src={onesecurelogo} className={styles.cardIcon} alt="Secure logo 1" />
                <div className={styles.cardNum}>01</div>
                <div className={styles.cardText}>
                  We secure biodiverse habitats and forests across the world.
                </div>
              </div>

              {/* CARD 02 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <img src={twosecurelogo} className={styles.cardIcon} alt="Secure logo 2" />
                <div className={styles.cardNum}>02</div>
                <div className={styles.cardText}>
                  We virtually divide them into Sacred Groves Clusters (SGCs).
                </div>
              </div>

              {/* CARD 03 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <img src={threesecurelogo} className={styles.cardIcon} alt="Secure logo 3" />
                <div className={styles.cardNum}>03</div>
                <div className={styles.cardText}>
                  Every Sacred Groves Cluster is assigned a unique ID.
                </div>
              </div>

              {/* CARD 04 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <img src={foursecurelogo} className={styles.cardIcon} alt="Secure logo 4" />
                <div className={styles.cardNum}>04</div>
                <div className={styles.cardText}>
                  Guardians can protect each Sacred Groves Cluster for a fee, for a period of 10
                  years.
                </div>
              </div>
            </div>

            {/* RIGHT SIDE BIG CARD */}
            <div className={styles.rightSection}>
              <img
                src={SacredGroglobalscale}
                className={styles.rightBg}
                alt="Sacred Grove background"
              />

              <div className={styles.rightContent}>
                <h2 className={styles.wildTitle}>
                  Our Sacred
                  <br />
                  Groves Clusters
                  <br />
                  <span>Built with</span>
                  <br />
                  Wild Tech
                </h2>

                <div className={styles.stepRow}>
                  <img src={fivesecurelogo} className={styles.stepIcon} alt="Secure logo 5" />
                  <div className={styles.stepNum}>05</div>
                </div>

                <div className={styles.stepDesc}>
                  Sacred Groves is a platform for sustainable impact at a global scale.
                </div>

                <div className={styles.videoBox}>
                  <img
                    src={SacredGroglobalscale}
                    className={styles.videoThumb}
                    alt="Video thumbnail"
                  />
                  <a href="https://youtu.be/yW7uG1JpN9Q" target="_blank" className={styles.playBtn}>
                    <img src={playbutton} alt="Play button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — IMPACT COMPASS */}
        <section className={styles.habitatSection}>
          <div className={styles.habitatWrapper}>
            {/* LEFT SIDE: Impact Graphic */}
            <div className={styles.habitatLeft}>
              <div className={styles.impactCompassContainer}>
                {/* Using ImpactCompass.png for the central graphic, figures, and metrics */}
                <img
                  src={ImpactCompass}
                  className={styles.impactCompassGraphic}
                  alt="Impact Compass Graphic with metrics and figures"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Text and Button */}
            <div className={styles.habitatRight}>
              <div className={styles.habitatLogoContainer}>
                <img
                  src={ProtectaHabitat}
                  className={styles.habitatLogo}
                  alt="Protect a Habitat Logo"
                />
              </div>

              <h2 className={styles.habitatTitle}>
                Protect
                <br />a Habitat
              </h2>

              <p className={styles.habitatText}>Imagine a forest in your name.</p>
              <p className={styles.habitatText}>
                With Sacred Groves Clusters, your climate action protects real acres of forest - a
                simple, tangible step toward regeneration.
              </p>

              {/* FIXED: ACT NOW button with nested content and arrow */}
              <button className={styles.actNowBtn}>
                <div className={styles.actNowInnerContent}>
                  <span>ACT NOW</span>
                  <div className={styles.actNowAvatars}></div>
                </div>
                <img src={arrow} className={styles.actNowArrow} alt="Act Now Arrow" />
              </button>
            </div>
          </div>

          {/* Controls at the bottom, centered relative to the section */}
          <div className={styles.controlsSection}>
            <div className={styles.controlsWrapper}>
              {/* FIXED: Price Box: £ 40 with custom dark circle background */}
              <div className={styles.controlBox}>
                <div className={styles.priceContent}>
                  <div className={styles.poundLogoCircle}>
                    <img src={BritishPoundlogo} className={styles.poundLogo} alt="Pound logo" />
                  </div>
                  <span className={styles.priceValue}>40</span>
                </div>
              </div>

              {/* FIXED: Quantity Box: ↑ 1 Sacred Groves Cluster. Text is moved inside. Down arrow removed. */}
              <div className={styles.controlBox}>
                <div className={styles.qtyWrapper}>
                  <img src={Arrow1} className={styles.qtyArrow} alt="Up Arrow" />
                  <span className={styles.qtyNumber}>1</span>
                </div>

                <div className={styles.qtyLabel}>Sacred Groves Cluster</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* SECTION 5 — GIFT A HABITAT */}
<section className={styles.giftSection}>
  <div className={styles.giftWrapper}>
    <div className={styles.giftLeft}>
      <img src={GiftaHabitatilogo} className={styles.giftLogo} alt="Gift a Habitat logo" />
      <h2 className={styles.giftTitle}>Gift a Habitat</h2>
      <p className={styles.giftText}>
        Mark life’s special moments with a gift that lasts. A Sacred Groves Cluster is a thoughtful, planet-positive way to celebrate friends, family, and colleagues.
      </p>
     <button className={styles.giftBtn}>
              <span>GIFT NOW</span>
              {/* Arrow logo added as requested */}
              <img src={arrow} className={styles.giftBtnArrow} alt="Arrow" />
            </button>
    </div>

    <div className={styles.giftRight}>
      <img src={dotdotbox} className={styles.dotGrid} alt="dot grid" />
      <div className={styles.giftImageContainer}>
        <img src={GiftaHabitatimage} className={styles.giftMainImage} alt="Gift image main" />
      </div>

      <div className={styles.sideIcons}>
        <img src={GiftaHabitat_1} alt="icon1" className={styles.iconItem} />
        <img src={GiftaHabitat_2} alt="icon2" className={styles.iconItem} />
        <img src={GiftaHabitat_3} alt="icon3" className={styles.iconItem} />
        <img src={GiftaHabitat_4} alt="icon4" className={styles.iconItem} />
        <img src={GiftaHabitat_5} alt="icon5" className={styles.iconItem} />
        <img src={GiftaHabitat_6} alt="icon6" className={styles.iconItem} />
        <img src={GiftaHabitat_7} alt="icon7" className={styles.iconItem} />
        <img src={GiftaHabitat_2} alt="icon2" className={styles.iconItem} />

      
      </div>
    </div>
  </div>
</section>

    </>
  )
}
