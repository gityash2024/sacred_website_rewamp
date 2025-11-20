/**
 * Business For The Planet Page Component
 */
import { SEO } from '@/components/common/SEO'
import styles from './BusinessForPlanet.module.css'

import Whatisgoodfornaturecanbegoodforyourbusiess from '@/assets/Whatisgoodfornaturecanbegoodforyourbusiess.png'
import plantbox from '@/assets/plantbox.png'
import dron from '@/assets/dron.svg'
import fly from '@/assets/fly.svg'

// section 2 
import bussionconnection from '@/assets/bussionconnection.svg'
import tree from '@/assets/tree.svg'
import dotdotbox from '@/assets/dotdotbox.svg'
import plant from '@/assets/plant.svg'
import Prosperity from '@/assets/Prosperity.svg'
import purpose from '@/assets/purpose.svg'
import dotdotbox_1 from '@/assets/dotdotbox_1.svg'

// section 3
import Imaginethepossibilitiessilder_1 from '@/assets/Imaginethepossibilitiessilder_1.png'
import Imaginethepossibilitiessilder_2 from '@/assets/Imaginethepossibilitiessilder_2.png'
import Imaginethepossibilitiessilder_3 from '@/assets/Imaginethepossibilitiessilder_3.png'
import Imaginethepossibilitiessilder_4 from '@/assets/Imaginethepossibilitiessilder_4.png'
import Imaginethepossibilitiessilder_5 from '@/assets/Imaginethepossibilitiessilder_5.png'
import Imaginethepossibilitiessilder_6 from '@/assets/Imaginethepossibilitiessilder_6.png'

export const BusinessForPlanet: React.FC = () => {
  return (
    <>
      <SEO
        title="Business for the Planet - Sacred Groves"
        description="Co-create new economic models for People, Planet, Prosperity, and Purpose."
        keywords="business partnership, sustainability, ESG, climate action, business for planet"
      />

      <div className={styles.heroSection}>
        <img src={Whatisgoodfornaturecanbegoodforyourbusiess} className={styles.bgImg} />

        <div className={styles.textBlock}>
          <h2>
            What is<br />
            <span>good for nature</span><br />
            can be<br />
            <span>good for your business</span>
          </h2>
        </div>

        <img src={dron} className={styles.dronLogo} />
        <img src={fly} className={styles.flyLogo} />

        <img src={plantbox} className={styles.ringBox} />
      </div>

            {/* SECTION 2 */}
      <div className={styles.section2}>
        <div className={styles.sec2Left}>
          <img src={bussionconnection} className={styles.sec2TopIcon} />
          <img src={tree} className={styles.sec2CenterIcon} />

          <p className={styles.sec2SmallTitle}>Creating new<br />economic<br />models for</p>

          <div className={styles.sec2MainHeading}>
            <span>People</span>
            <img src={plant} className={styles.dotBox} />
            <span>Planet</span>
            <img src={Prosperity} className={styles.dotBox} />
            <span>Prosperity</span>
            <img src={purpose} className={styles.dotBox} />
            <span>Purpose</span>
          </div>
        </div>

        <div className={styles.sec2Right}>
          <img src={dotdotbox_1} className={styles.gridTop} />
          <img src={dotdotbox_1} className={styles.gridBottom} />

          <p className={styles.sec2Para}>
            Reimagine your business with nature at its core.
            When you align your business growth with the planet’s wellbeing,
            you create new value, discover new revenue streams, build deeper trust,
            and enter new markets. <br /><br />

            Together, we can design business models, products, and ideas that drive
            growth and protect habitats. Here, creativity is currency, and nature
            is our ultimate shareholder. <br /><br />

            This isn’t philanthropy. This isn’t CSR.
            It’s a new form of ownership—one that rewards people, businesses, and
            the planet, today and for generations to come.
          </p>
        </div>
      </div>

    </>
  )
}
