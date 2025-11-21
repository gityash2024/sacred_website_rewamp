/**
 * Home Page Component
 * Main landing page for Sacred Groves
 */
import { useState, useEffect } from 'react'
import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import { RecognizedGlobally } from '../RecognizedGlobally/RecognizedGlobally'
import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop'
import { FadeInSection } from '@/components/common/FadeInSection/FadeInSection'
import { useTypewriter } from '@/hooks/useTypewriter'
import styles from './Home.module.css'
import earth from '@/assets/earth.png'
import Alexandrelogo from '@/assets/Alexandrelogo.svg'
import guardian_button_arrow from '@/assets/gaurdian_button_arrow.svg'

import temp from '@/assets/temp.svg'

import coedwing from '@/assets/coedwing.svg'
import Usingtechnology from '@/assets/Usingtechnology.svg'
import map from '@/assets/map.png'
import BecomeaGuardianoftheWild from '@/assets/BecomeaGuardianoftheWild.jpg'
import Soccerlogo from '@/assets/Soccerlogo.svg'
import girl from '@/assets/girl.png'
import hathi from '@/assets/hathi.svg'
import arrow from '@/assets/arrow.svg'
import BusinesforthePlanet from '@/assets/BusinesforthePlanet.svg'
import plantbox from '@/assets/plantbox.png'
import HeroMap1 from '@/assets/hero_section_map_1.svg'
import HeroMap2 from '@/assets/hero_section_map_2.svg'
import HeroMap3 from '@/assets/hero_section_map_3.svg'
import PartyCloudy from '@/assets/hero_section_party_cloud_weather.svg'
import mobileHeroBg from '@/assets/mobile_hero_homepage.png'
import mobilePeopleBg from '@/assets/mobile_poeple_for_the_planet_homepage.png'
interface HabitatData {
  guardianName: string
  location: string
  elevation: string
  habitatName: string
  habitatType: string
  supportingFrom: string
  temperature: string
  humidity: string
  weather: string
  greenCoverDensity: string
  dataTimestamp: string
  mapImage: string
}

const HABITAT_DATA: HabitatData[] = [
  {
    guardianName: 'Alexandre Dupont',
    location: '(51.70079, -4.274005)',
    elevation: '72.37 Meter',
    habitatName: 'Coed Rhyal, UK',
    habitatType: 'Ancient Oak Woodland',
    supportingFrom: 'Aug 04, 2023',
    temperature: '9.2°C',
    humidity: '80%',
    weather: 'Cloudy',
    greenCoverDensity: '99.25%',
    dataTimestamp: 'Data recorded on 4 Nov 2025, 00:00 AM UTC',
    mapImage: HeroMap1
  },
  {
    guardianName: 'Alexandre Dupont',
    location: '(51.70079, -4.274005)',
    elevation: '25.26 Meter',
    habitatName: 'Ocean Sanctuary, Canada',
    habitatType: 'Rocky Lakeshore',
    supportingFrom: 'Sep 15, 2025',
    temperature: '3.7°C',
    humidity: '79%',
    weather: 'Clear',
    greenCoverDensity: '80.0%',
    dataTimestamp: 'Data recorded on 4 Nov 2025, 00:00 AM UTC',
    mapImage: HeroMap2
  },
  {
    guardianName: 'Alexandre Dupont',
    location: '(52.291995, -3.49735)',
    elevation: '225.0 Meter',
    habitatName: 'Gigrin Prysg, UK',
    habitatType: 'Ancient Oak Woodland',
    supportingFrom: 'Apr 06, 2021',
    temperature: '6.6°C',
    humidity: '90%',
    weather: 'Partly Cloudy',
    greenCoverDensity: '98.64%',
    dataTimestamp: 'Data recorded on 4 Nov 2025, 00:00 AM UTC',
    mapImage: HeroMap3
  }
]

/**
 * Home page component
 * @returns Home page JSX element
 */
export const Home: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const currentData = HABITAT_DATA[currentCardIndex]
  const [soccerPitchCount, setSoccerPitchCount] = useState(0)
  const [pageLoadTime] = useState(Date.now())
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0)

  // Typewriter effects for climate numbers
  const temperature = useTypewriter(currentData.temperature, 30)
  const humidity = useTypewriter(currentData.humidity, 30)
  const greenCoverDensity = useTypewriter(currentData.greenCoverDensity, 30)

  // Cycle cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % HABITAT_DATA.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Soccer pitch ticker: 18 pitches per minute = 1 pitch every 3.33 seconds
  useEffect(() => {
    const updateSoccerPitchCount = () => {
      const elapsedSeconds = (Date.now() - pageLoadTime) / 1000
      // 18 pitches per minute = 0.3 pitches per second
      // So every 3.33 seconds, we add 1 pitch
      const count = Math.floor(elapsedSeconds / 3.33)
      setSoccerPitchCount(count)
    }

    // Update immediately
    updateSoccerPitchCount()

    // Update every 3.33 seconds (3333 milliseconds)
    const interval = setInterval(updateSoccerPitchCount, 3333)

    return () => clearInterval(interval)
  }, [pageLoadTime])

  return (
    <>
      <SEO
        title={DEFAULT_SEO.title}
        description={DEFAULT_SEO.description}
        keywords={DEFAULT_SEO.keywords}
        ogImage={DEFAULT_SEO.ogImage}
      />

      {/* ORIGINAL Hero Section with Earth Background */}
      <FadeInSection>
        <section className={styles.heroSection}>
          {/* Background Earth Image */}
          <div className={styles.earthBackground}>
            <img src={earth} alt="Earth" className={styles.earthImage} />
            <img src={mobileHeroBg} alt="Earth Mobile" className={styles.mobileEarthImage} />
          </div>

          <div className={styles.container}>
            {/* Left Side - Cards */}
            <div className={styles.leftSection}>
              {/* Guardian Card */}
              <div className={styles.guardianCard} key={`guardian-${currentCardIndex}`}>
                <div className={styles.logoSection}>
                  <img src={Alexandrelogo} alt={currentData.guardianName} className={styles.guardianLogo} />
                </div>
                <h3 className={styles.guardianName}>{currentData.guardianName}</h3>
                <div className={styles.infoSection}>
                  <span className={styles.infoLabel}>Location: </span>
                  <span className={styles.infoValue}>{currentData.location}</span>
                </div>
                <div className={styles.infoSection}>
                  <span className={styles.infoLabel}>Elevation: </span>
                  <span className={styles.infoValue}>{currentData.elevation}</span>
                </div>
                <div className={styles.infoSection}>
                  <span className={styles.infoLabel}>Habitat Name: </span>
                  <span className={styles.infoValue}>{currentData.habitatName}</span>
                </div>
                <div className={styles.infoSection}>
                  <span className={styles.infoLabel}>Habitat Type: </span>
                  <span className={styles.infoValue}>{currentData.habitatType}</span>
                </div>
                <div className={styles.infoSection}>
                  <span className={styles.infoLabel}>Supporting From: </span>
                  <span className={styles.infoValue}>{currentData.supportingFrom}</span>
                </div>
              </div>

              {/* Forest Indicators Card */}
              <div className={styles.indicatorsCard} key={`indicators-${currentCardIndex}`}>
                <div className={styles.mapSection}>
                  <img src={currentData.mapImage} alt="Forest Map" className={styles.mapImage} />
                </div>
                <h4 className={styles.indicatorsTitle}>Forest Indicators</h4>

                <div className={styles.indicatorsGrid}>
                  <div className={styles.indicator}>
                    <img src={temp} alt="Temperature" className={styles.indicatorIcon} />
                    <div className={styles.indicatorContent}>
                      <span className={styles.indicatorValue}>{temperature}</span>
                      <span className={styles.indicatorLabel}>Temperature</span>
                    </div>
                  </div>

                  <div className={styles.indicator}>
                    <div className={styles.indicatorContent}>
                      <span className={styles.indicatorValue}>{humidity}</span>
                      <span className={styles.indicatorLabel}>Humidity</span>
                    </div>
                  </div>
                </div>

                <div className={styles.weatherSection}>
                  <img src={PartyCloudy} alt="Weather" className={styles.weatherIcon} />
                  <div className={styles.weatherContent}>
                    <span className={styles.weatherValue}>{currentData.weather}</span>
                    <span className={styles.weatherLabel}>Weather</span>
                  </div>
                </div>

                <div className={styles.densitySection}>
                  <div className={styles.densityContent}>
                    <span className={styles.densityValue}>{greenCoverDensity}</span>
                    <span className={styles.densityLabel}>Green Cover Density</span>
                  </div>
                </div>


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
      </FadeInSection>


      {/* NEW Split Background Section */}
      <FadeInSection>
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
                  Sacred Groves is a <strong>Community Interest Company</strong> <br /> incorporated in the United Kingdom, reimagining <br /> business in partnership with nature — our ultimate <br /> shareholder.
                </p>

                <p className={styles.paragraph}>
                  With Guardians in over <strong>30 countries</strong>, we protect <br /> three biodiverse habitats in the UK and Canada.<br />
                  By 2030, our goal is to safeguard a million acres of <br /> critical ecosystems across the planet.
                </p>
              </div>
            </div>

            {/* Right Side - Dark Background */}
            <div className={styles.darkSection}>
              {/* DESKTOP CONTENT */}
              <div className={styles.desktopContent}>
                {/* National Forest Logo with Text */}
                <div className={styles.forestLogoWrapper}>
                  <img src={coedwing} alt="Coedwig Genedlaethol Cymru - National Forest for Wales" className={styles.forestLogo} />
                  <div className={styles.forestLogoText}>
                    <p className={styles.forestLogoTitle}>Coedwig<br />Genedlaethol Cymru</p>
                    <p className={styles.forestLogoSubtitle}>National Forest<br />for Wales</p>
                  </div>
                </div>

                {/* Bottom Description */}
                <div className={styles.forestDescription}>
                  <p className={styles.forestText}>
                    Once marked for private sale, these forests are now a part of the 'National Forest for Wales' network, helping build a contiguous green corridor across the Welsh country.
                  </p>
                </div>
              </div>

              {/* MOBILE CAROUSEL CONTENT */}
              <div className={styles.mobileCarousel}>
                {/* Carousel Slide */}
                <div className={styles.carouselSlide}>
                  {/* Logo for Wales (Only show for first 2 slides) */}
                  {mobileCarouselIndex !== 2 && (
                    <div className={styles.mobileForestLogoWrapper}>
                      <img src={coedwing} alt="Coedwig Genedlaethol Cymru" className={styles.mobileForestLogo} />
                      <div className={styles.mobileForestLogoText}>
                        <p className={styles.mobileForestLogoTitle}>Coedwig<br />Genedlaethol Cymru</p>
                        <p className={styles.mobileForestLogoSubtitle}>National Forest<br />for Wales</p>
                      </div>
                    </div>
                  )}

                  {/* Text */}
                  <p className={styles.mobileCarouselText}>
                    {mobileCarouselIndex === 2
                      ? "Ocean Sanctuary is a biodiverse habitat on the South Shore of Nova Scotia, protecting coastal forests and wetlands."
                      : "Once marked for private sale, these forests are now a part of the 'National Forest for Wales' network, helping build a contiguous green corridor across the Welsh country."
                    }
                  </p>

                  {/* Map Image */}
                  <div className={styles.mobileMapContainer}>
                    <img
                      src={map}
                      alt="Habitat Map"
                      className={styles.mobileMapImage}
                    />
                  </div>

                  {/* Location Info */}
                  <div className={styles.mobileLocationInfo}>
                    <h3 className={styles.mobileLocationName}>
                      {mobileCarouselIndex === 0 ? "Coed Rhyal" : mobileCarouselIndex === 1 ? "Gigrin Prysg" : "Ocean Sanctuary"}
                    </h3>
                    <p className={styles.mobileLocationCountry}>
                      {mobileCarouselIndex === 0 ? "Wales, United Kingdom" : mobileCarouselIndex === 1 ? "Wales, United Kingdom" : "Nova Scotia, Canada"}
                    </p>
                    <p className={styles.mobileLocationCoords}>
                      {mobileCarouselIndex === 0 ? "Location: (51.70079, -4.274005)" : mobileCarouselIndex === 1 ? "Location: (52.291995, -3.49735)" : "Location: (43.8392603, -64.978444)"}
                    </p>
                  </div>
                </div>

                {/* Carousel Dots */}
                <div className={styles.carouselDots}>
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${mobileCarouselIndex === index ? styles.activeDot : ''}`}
                      onClick={() => setMobileCarouselIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Single Map Image showing all 3 habitats - Positioned Absolute (DESKTOP ONLY) */}
            <div className={styles.habitatMapContainer}>
              <img src={map} alt="Sacred Groves Habitats" className={styles.habitatMapFull} />
            </div>
          </div>
        </section>
      </FadeInSection>


      {/* Third Section - Guardian of the Wild */}
      <section className={styles.guardianSection}>
        <div className={styles.guardianBackground}>
          <img src={BecomeaGuardianoftheWild} alt="Ocean Sanctuary" className={styles.guardianBgImage} />
        </div>

        <div className={styles.guardianContent}>
          <div className={styles.guardianLayout}>
            {/* Left Card */}
            <FadeInSection delay="0.2s">
              <div className={styles.soccerCard}>
                <div className={styles.soccerIconWrapper}>
                  <img src={Soccerlogo} alt="Soccer Field" className={styles.soccerIcon} />
                </div>
                <div className={styles.soccerNumber}>
                  {String(soccerPitchCount).padStart(2, '0')}
                </div>
                <div className={styles.desktopSoccerText}>
                  <p className={styles.soccerText}>
                    Soccer pitches of tropical primary forest lost since you landed on our website.
                  </p>
                  <div className={styles.soccerSource}>
                    <p className={styles.sourceLabel}>Source:</p>
                    <p className={styles.sourceValue}>World Resources Institute, May 2025</p>
                  </div>
                </div>
              </div>
              {/* Mobile Soccer Text - Outside the card */}
              <div className={styles.mobileSoccerText}>
                <p className={styles.soccerText}>
                  Soccer pitches of tropical primary forest lost since you landed on our website.
                </p>
                <div className={styles.soccerSource}>
                  <p className={styles.sourceLabel}>Source:</p>
                  <p className={styles.sourceValue}>World Resources Institute, May 2025</p>
                </div>
              </div>
            </FadeInSection>

            {/* Middle Section - Heading and Buttons */}
            <FadeInSection delay="0.4s">
              <div className={styles.guardianMiddle}>
                <h2 className={styles.guardianHeading}>Become a Guardian of the Wild.</h2>

                <div className={styles.guardianButtons}>
                  <a href="/people-for-the-planet" target="_blank" rel="noopener noreferrer" className={styles.guardianBtn}>
                    PEOPLE FOR THE PLANET
                    <img src={guardian_button_arrow} style={{ marginLeft: '20px' }} alt="Arrow" className={styles.joinArrow} />
                  </a>
                  <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer" className={styles.guardianBtn}>
                    BUSINESS FOR THE PLANET
                    <img src={guardian_button_arrow} style={{ marginLeft: '20px' }} alt="Arrow" className={styles.joinArrow} />
                  </a>
                </div>
              </div>
            </FadeInSection>

            {/* Right Location Text */}
            <FadeInSection delay="0.6s">
              <div className={styles.locationText}>
                <p>Ocean Sanctuary, Nova Scotia, Canada - Location: (43.839260304999996, -64.978444436)</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>



      {/* Fourth Section - People for the Planet */}
      <section className={styles.peopleSection}>
        <div className={styles.peopleContainer} style={{ '--mobile-bg-image': `url(${mobilePeopleBg})` } as any}>
          {/* Left Side - Image */}
          <FadeInSection className={styles.peopleImageSection} delay="0.2s">
            <img src={girl} alt="Person in nature" className={styles.peopleImage} />
          </FadeInSection>

          {/* Right Side - Content */}
          <FadeInSection className={styles.peopleContentSection} delay="0.4s">
            {/* Wildlife Icons */}
            <div className={styles.wildlifeIcons}>
              <img src={hathi} alt="Wildlife icons" className={styles.wildlifeIconsImage} />
            </div>

            {/* Main Heading */}
            <h2 className={styles.peopleHeading}>
              People <br />
              <span className={styles.peopleHeadingItalic}> for the </span>
              Planet
            </h2>

            {/* Subheading */}
            <p className={styles.peopleSubheading}>
              Protect a biodiverse habitat<br />
              in your name.
            </p>

            {/* Benefits List */}
            <ul className={styles.benefitsList}>
              <li>Protect a Habitat</li>
              <li>Gift a Habitat</li>
            </ul>

            {/* CTA Button */}
            <a href="https://application.sacredgroves.earth/signup" target="_blank" rel="noopener noreferrer" className={styles.joinButton}>
              JOIN US
              <img src={arrow} alt="Arrow" className={styles.joinArrow} />
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Fifth Section - Business for the Planet */}
      <section className={styles.businessSection}>
        <div className={styles.businessContainer}>
          {/* Left Side - Content */}
          <FadeInSection className={styles.businessContentSection} delay="0.2s">
            {/* Icons */}
            <div className={styles.businessIcons}>
              <img src={BusinesforthePlanet} alt="Technology Icons" className={styles.businessIconsImage} />
            </div>

            {/* Main Heading */}
            <h2 className={styles.businessHeading}>
              Business<br />
              <span className={styles.businessHeadingItalic}>for the</span><br />
              Planet
            </h2>

            {/* Subheading */}
            <p className={styles.businessSubheading}>
              Co-create new economic models<br />
              for People, Planet, Prosperity,<br />
              and Purpose.
            </p>

            {/* Benefits List */}
            <ul className={styles.businessList}>
              <li>Partnership for the Planet</li>
              <li>myEarth Point</li>
              <li>Junk to Jungles</li>
              <li>Seeds of Recognition</li>
              <li>Brand a Habitat</li>
            </ul>

            {/* CTA Button */}
            <a href="https://application.sacredgroves.earth/signup" target="_blank" rel="noopener noreferrer" className={styles.businessJoinButton}>
              JOIN US
              <img src={arrow} alt="Arrow" className={styles.businessJoinArrow} />
            </a>
          </FadeInSection>

          {/* Right Side - Image */}
          <FadeInSection className={styles.businessImageSection} delay="0.4s">
            <img src={plantbox} alt="Plant box" className={styles.businessImage} />
          </FadeInSection>
        </div>
      </section>


      {/* Recognized Globally Section */}
      <RecognizedGlobally />

      <ScrollToTop />
    </>
  )
}