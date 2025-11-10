/**
 * Home Page Component
 * Main landing page for Sacred Groves
 */
import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './Home.module.css'
import earth from '@/assets/earth.png'
import Alexandrelogo from '@/assets/Alexandrelogo.svg'
import ForestIndicatorsmap from '@/assets/ForestIndicatorsmap.svg'
import temp from '@/assets/temp.svg'
import cloud from '@/assets/cloud.svg'
import coedwing from '@/assets/coedwing.svg'
import Usingtechnology from '@/assets/Usingtechnology.svg'
import map from '@/assets/map.png'

// import humidity from '@/assets/humidity.svg'
// import treeDensity from '@/assets/treeDensity.svg'

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
      
      {/* ORIGINAL Hero Section with Earth Background */}
      <section className={styles.heroSection}>
        {/* Background Earth Image */}
        <div className={styles.earthBackground}>
          <img src={earth} alt="Earth" className={styles.earthImage} />
        </div>

        <div className={styles.container}>
          {/* Left Side - Cards */}
          <div className={styles.leftSection}>
            {/* Guardian Card */}
            <div className={styles.guardianCard}>
              <div className={styles.logoSection}>
                <img src={Alexandrelogo} alt="Alexandre Dupont" className={styles.guardianLogo} />
              </div>
              <h3 className={styles.guardianName}>Alexandre Dupont</h3>
              <div className={styles.infoSection}>
                <p className={styles.infoLabel}>Location:</p>
                <p className={styles.infoValue}>(52.291995, -3.49713)</p>
              </div>
              <div className={styles.infoSection}>
                <p className={styles.infoLabel}>Elevation:</p>
                <p className={styles.infoValue}>225.0 Meter</p>
              </div>
              <div className={styles.infoSection}>
                <p className={styles.infoLabel}>Habitat Name:</p>
                <p className={styles.infoValue}>Gigrin Prysg, UK</p>
              </div>
              <div className={styles.infoSection}>
                <p className={styles.infoLabel}>Habitat Type:</p>
                <p className={styles.infoValue}>Ancient Oak Woodland</p>
              </div>
              <div className={styles.infoSection}>
                <p className={styles.infoLabel}>Supporting From:</p>
                <p className={styles.infoValue}>Apr 06, 2021</p>
              </div>
            </div>

            {/* Forest Indicators Card */}
            <div className={styles.indicatorsCard}>
              <div className={styles.mapSection}>
                <img src={ForestIndicatorsmap} alt="Forest Map" className={styles.mapImage} />
              </div>
              <h4 className={styles.indicatorsTitle}>Forest Indicators</h4>
              
              <div className={styles.indicatorsGrid}>
                <div className={styles.indicator}>
                  <img src={temp} alt="Temperature" className={styles.indicatorIcon} />
                  <div className={styles.indicatorContent}>
                    <span className={styles.indicatorValue}>6.6°C</span>
                    <span className={styles.indicatorLabel}>Temperature</span>
                  </div>
                </div>
                
                <div className={styles.indicator}>
                  {/* <img src={humidity} alt="Humidity" className={styles.indicatorIcon} /> */}
                  <div className={styles.indicatorContent}>
                    <span className={styles.indicatorValue}>90%</span>
                    <span className={styles.indicatorLabel}>Humidity</span>
                  </div>
                </div>
              </div>

              <div className={styles.weatherSection}>
                <img src={cloud} alt="Weather" className={styles.weatherIcon} />
                <div className={styles.weatherContent}>
                  <span className={styles.weatherValue}>Partly Cloudy</span>
                  <span className={styles.weatherLabel}>Weather</span>
                </div>
              </div>

              <div className={styles.densitySection}>
                {/* <img src={treeDensity} alt="Tree Density" className={styles.densityIcon} /> */}
                <div className={styles.densityContent}>
                  <span className={styles.densityValue}>98.64%</span>
                  <span className={styles.densityLabel}>Green Cover Density</span>
                </div>
              </div>

              <p className={styles.dataTimestamp}>Data recorded on 4 Nov 2025, 00:00 AM UTC</p>
            </div>
          </div>

          {/* Right Side - Heading */}
          <div className={styles.headingSection}>
            <h1 className={styles.mainHeading}>
              <span className={styles.headingLine}>One Planet</span>
              <span className={styles.headingLine}>Many Guardians</span>
              <span className={styles.headingLine}>One Sacred Promise</span>
            </h1>
            <p className={styles.tagline}>May the forest be with you.</p>
          </div>
        </div>
      </section>

      {/* NEW Split Background Section */}
      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          {/* Left Side - Green Background */}
          <div className={styles.greenSection}>
            {/* Icons */}
            <div className={styles.iconRow}>
              <img src={Usingtechnology} alt="Technology Icons" className={styles.technologyIcons} />
            </div>

            {/* Main Heading */}
            <div className={styles.contentBlock}>
              <h2 className={styles.splitHeading}>
                Using technology, economics,<br />
                creativity, and science,<br />
                <span className={styles.boldText}>to let forests grow wild.</span>
              </h2>
            </div>

            {/* Description Text */}
            <div className={styles.textBlock}>
              <p className={styles.paragraph}>
                Sacred Groves is a <strong>Community Interest Company</strong> incorporated in the United Kingdom, reimagining business in partnership with nature — our ultimate shareholder.
              </p>
              
              <p className={styles.paragraph}>
                With Guardians in over <strong>30 countries</strong>, we protect three biodiverse habitats in the UK and Canada.<br />
                By 2030, our goal is to safeguard a million acres of critical ecosystems across the planet.
              </p>
            </div>
          </div>

          {/* Right Side - Dark Background */}
          <div className={styles.darkSection}>
            {/* National Forest Logo with Text */}
            <div className={styles.forestLogoWrapper}>
              <img src={coedwing} alt="Coedwig Genedlaethol Cymru - National Forest for Wales" className={styles.forestLogo} />
              <div className={styles.forestLogoText}>
                <p className={styles.forestLogoTitle}>Coedwig<br />Genedlaethol Cymru</p>
                <p className={styles.forestLogoSubtitle}>National Forest<br />for Wales</p>
              </div>
            </div>

            {/* Three Habitat Cards - Grid Layout */}
            <div className={styles.habitatCardsGrid}>
              {/* Ocean Sanctuary Card - Left */}
              <div className={styles.habitatCard}>
                <div className={styles.habitatMapWrapper}>
                  <img src={map} alt="Ocean Sanctuary" className={styles.habitatMapImage} />
                  {/* Map outline overlay would be added here */}
                  <div className={styles.habitatOverlay}>
                    <div className={styles.habitatInfo}>
                      <h3 className={styles.habitatTitle}>Ocean Sanctuary,</h3>
                      <p className={styles.habitatSubtitle}>Nova Scotia, Canada</p>
                      <p className={styles.habitatCoordinates}>Location: (43.839260304999996, -64.97844436)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coed Rhyal Card - Top Right */}
              {/* <div className={styles.habitatCard}>
                <div className={styles.habitatMapWrapper}>
                  <img src={map} alt="Coed Rhyal" className={styles.habitatMapImage} />
                  <div className={styles.habitatOverlay}>
                    <div className={styles.habitatInfo}>
                      <h3 className={styles.habitatTitle}>Coed Rhyal</h3>
                      <p className={styles.habitatSubtitle}>Wales, United Kingdom</p>
                      <p className={styles.habitatCoordinates}>Location: (51.70079, -4.274005)</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Gigrin Prysg Card - Bottom Right */}
              {/* <div className={styles.habitatCard}>
                <div className={styles.habitatMapWrapper}>
                  <img src={map} alt="Gigrin Prysg" className={styles.habitatMapImage} />
                  <div className={styles.habitatOverlay}>
                    <div className={styles.habitatInfo}>
                      <h3 className={styles.habitatTitle}>Gigrin Prysg</h3>
                      <p className={styles.habitatSubtitle}>Wales, United Kingdom</p>
                      <p className={styles.habitatCoordinates}>Location: (52.291995, -3.49735)</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Bottom Description */}
            <div className={styles.forestDescription}>
              <p className={styles.forestText}>
                Once marked for private sale, these forests are now a part of the 'National Forest for Wales' network, helping build a contiguous green corridor across the Welsh country.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}