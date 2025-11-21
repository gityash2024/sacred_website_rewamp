import { useState } from 'react'
import { SEO } from '@/components/common/SEO'
import styles from './BusinessForPlanet.module.css'

import Whatisgoodfornaturecanbegoodforyourbusiess from '@/assets/Whatisgoodfornaturecanbegoodforyourbusiess.png'
import plantbox from '@/assets/plantbox.png'
import dron from '@/assets/dron.svg'
import fly from '@/assets/fly.svg'

import bussionconnection from '@/assets/bussionconnection.svg'
import tree from '@/assets/tree.svg'
import dotdotbox from '@/assets/dotdotbox.svg'
import plant from '@/assets/plant.svg'
import Prosperity from '@/assets/Prosperity.svg'
import purpose from '@/assets/purpose.svg'
import dotdotbox_1 from '@/assets/dotdotbox_1.svg'

import Imaginethepossibilitiessilder_1 from '@/assets/Imaginethepossibilitiessilder_1.png'
import Imaginethepossibilitiessilder_2 from '@/assets/Imaginethepossibilitiessilder_2.png'
import Imaginethepossibilitiessilder_3 from '@/assets/Imaginethepossibilitiessilder_3.png'
import Imaginethepossibilitiessilder_4 from '@/assets/Imaginethepossibilitiessilder_4.png'
import Imaginethepossibilitiessilder_5 from '@/assets/Imaginethepossibilitiessilder_5.png'
import Imaginethepossibilitiessilder_6 from '@/assets/Imaginethepossibilitiessilder_6.png'

// 4 section 
import growyourbussion from '@/assets/growyourbussion.svg'

// 5 section 
import Sacreddeedsmust from '@/assets/Sacreddeedsmust.svg'
import bracit1 from '@/assets/bracit1.png'
import bracit2 from '@/assets/bracit2.png'
import Businessesreimagined_1 from '@/assets/Businessesreimagined_1.svg'
import Businessesreimagined_2 from '@/assets/Businessesreimagined_2.svg'
import Businessesreimagined_3 from '@/assets/Businessesreimagined_3.svg'
import Businessesreimagined_4 from '@/assets/Businessesreimagined_4.svg'
import Businessesreimagined_5 from '@/assets/Businessesreimagined_5.svg'
import Businessesreimagined_6 from '@/assets/Businessesreimagined_6.svg'
import Businessesreimagined_7 from '@/assets/Businessesreimagined_7.svg'
import Businessesreimagined_8 from '@/assets/Businessesreimagined_8.svg'
import Businessesreimagined_9 from '@/assets/Businessesreimagined_9.svg'
import Businessesreimagined_10 from '@/assets/Businessesreimagined_10.svg'
import Businessesreimagined_11 from '@/assets/Businessesreimagined_11.svg'
import arrow from '@/assets/arrow.svg'
// 6 section 

// 7 section 
import TheSacredGrovesisa from '@/assets/TheSacredGrovesisa.svg'
import earth from '@/assets/earth.png'

export const BusinessForPlanet: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)

  const sliderImages = [
    Imaginethepossibilitiessilder_1,
    Imaginethepossibilitiessilder_2,
    Imaginethepossibilitiessilder_3,
    Imaginethepossibilitiessilder_4,
    Imaginethepossibilitiessilder_5,
    Imaginethepossibilitiessilder_6
  ]

  const tabs = [
    'Partnership for the Planet',
    'MyEarth Point',
    'Junk to Jungles',
    'Seeds of Recognition',
    'Brand a Habitat'
  ]

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
            and enter new markets.<br /><br />

            Together, we can design business models, products, and ideas that drive
            growth and protect habitats. Here, creativity is currency, and nature
            is our ultimate shareholder.<br /><br />

            This isn’t philanthropy. This isn’t CSR.
            It’s a new form of ownership—one that rewards people, businesses,
            and the planet for generations to come.
          </p>
        </div>
      </div>

      <section className={styles.section3}>
        <div className={styles.tabHeader}>
          {tabs.map((item, index) => (
            <button
              key={index}
              className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className={styles.section3Content}>
          <div className={styles.sliderBox}>
            <div
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {sliderImages.map((img, i) => (
                <img key={i} src={img} className={styles.sliderImg} />
              ))}
            </div>

            <div className={styles.sliderDots}>
              {sliderImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot} ${slideIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => setSlideIndex(idx)}
                />
              ))}
            </div>
          </div>

          <div className={styles.textRight}>
            <h3 className={styles.headingRight}>Imagine<br />the possibilities</h3>

            <ul className={styles.rightList}>
              <li>Hospitality</li>
              <li>Travel and Tourism</li>
              <li>Finance</li>
              <li>Real Estate</li>
              <li>Health and Wellness</li>
              <li>Food & Beverage</li>
              <li>Beauty and Lifestyle</li>
              <li>Retail</li>
              <li>Sports</li>
            </ul>

            <button className={styles.exploreBtn}>
              LET’S EXPLORE <img src={fly} />
            </button>
          </div>
        </div>
      </section>
      {/* 4 section */}
   <section className={styles.section4}>
  <div className={styles.sec4Left}>
    <h2 className={styles.sec4Heading}>
      Tangible Gains for your Business<br />
      <span>Grow your business in partnership with nature.</span>
    </h2>

    <img src={growyourbussion} className={styles.sec4Image} />
  </div>

  <div className={styles.sec4Right}>
    <ul className={styles.sec4List}>
      <li>New Customers & Markets</li>
      <li>Engagement & Retention</li>
      <li>Gamified Experiences</li>
      <li>Brand Value & Differentiation</li>
      <li>Scalable Climate Action</li>
      <li>Verified Impact</li>
      <li>ESG Goals</li>
      <li>Positive Media Coverage</li>
      <li>Advocacy</li>
    </ul>
  </div>
</section>

{/* 5 section */}

<section className={styles.section5}>
  <img src={Sacreddeedsmust} className={styles.sec5Logo} />

  <h2 className={styles.sec5Heading}>
    Businesses we’ve reimagined with nature
  </h2>


  <div className={styles.sec5BraceWrapper}>
    <img src={bracit1} className={styles.sec5BraceLeft} />
    <div className={styles.sec5Grid}>
      <img src={Businessesreimagined_1} />
      <img src={Businessesreimagined_2} />
      <img src={Businessesreimagined_3} />
      <img src={Businessesreimagined_4} />
      <img src={Businessesreimagined_5} />
      <img src={Businessesreimagined_6} />
      <img src={Businessesreimagined_7} />
      <img src={Businessesreimagined_8} />
      <img src={Businessesreimagined_9} />
      <img src={Businessesreimagined_10} />
      <img src={Businessesreimagined_11} />
    </div>
    <img src={bracit2} className={styles.sec5BraceRight} />
  </div>

  <button className={styles.sec5Button}>
    CO CREATE WITH US <img src={arrow} />
  </button>
</section>

{/* 6 section */}

{/* 7 section */}
<section className={styles.section7} style={{ backgroundImage: `url(${earth})` }}>
  <div className={styles.sec7Content}>
    <div className={styles.sec7Left}>
      <img src={TheSacredGrovesisa} className={styles.sec7Logo} />
      
      <h2 className={styles.sec7Heading}>
        The Sacred Groves is a<br />
        Community Interest<br />
        Company, incorporated<br />
        in the United Kingdom,<br />
        reimagining business in<br />
        partnership with<br />
        nature — our ultimate<br />
        shareholder.
      </h2>

      <p className={styles.sec7Para}>
        With Guardians in over <strong>30 countries</strong>, we protect<br />
        three biodiverse habitats in the UK and Canada.<br />
        By 2030, our goal is to safeguard a million acres of<br />
        critical ecosystems across the planet.
      </p>
    </div>
  </div>
</section>

    </>
  )
}

  
