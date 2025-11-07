/**
 * Home Page Component
 * Main landing page for Sacred Groves
 */

import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './Home.module.css'

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
      <main className={styles.home} id="main-content">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              {/* Habitat Card */}
              <div className={styles.habitatCard}>
                <div className={styles.cardIcons}>
                  <img src="/assets/icons/tree.svg" alt="" aria-hidden="true" />
                  <img src="/assets/icons/plant.svg" alt="" aria-hidden="true" />
                  <img src="/assets/icons/deer.svg" alt="" aria-hidden="true" />
                </div>
                <div className={styles.cardInfo}>
                  <h3>Alexandre Dupont</h3>
                  <p><strong>Location:</strong> (52.29995, -3.49735)</p>
                  <p><strong>Elevation:</strong> 225.0 Meter</p>
                  <p><strong>Habitat Name:</strong> Gigrin Prysg, UK</p>
                  <p><strong>Habitat Type:</strong> Ancient Oak Woodland</p>
                  <p><strong>Supporting From:</strong> Apr 06, 2021</p>
                </div>
              </div>

              {/* Forest Indicators Card */}
              <div className={styles.indicatorsCard}>
                <div className={styles.mapView}>
                  <img src="/assets/images/map-view.jpg" alt="Forest location map" />
                </div>
                <h4>Forest Indicators</h4>
                <div className={styles.indicators}>
                  <div className={styles.indicator}>
                    <img src="/assets/icons/temp.svg" alt="" aria-hidden="true" />
                    <div>
                      <span className={styles.value}>6.6°C</span>
                      <span className={styles.label}>Temp</span>
                    </div>
                  </div>
                  <div className={styles.indicator}>
                    <img src="/assets/icons/humidity.svg" alt="" aria-hidden="true" />
                    <div>
                      <span className={styles.value}>90%</span>
                      <span className={styles.label}>Humidity</span>
                    </div>
                  </div>
                  <div className={styles.weather}>
                    <img src="/assets/icons/cloud.svg" alt="" aria-hidden="true" />
                    <span>Partly Cloudy</span>
                  </div>
                  <div className={styles.indicator}>
                    <img src="/assets/icons/carbon.svg" alt="" aria-hidden="true" />
                    <div>
                      <span className={styles.value}>98.64%</span>
                      <span className={styles.label}>Woodland Quality</span>
                    </div>
                  </div>
                </div>
                <p className={styles.dataNote}>Data recorded on 8 Nov 2025, 00:00 AM UTC</p>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.globeContainer}>
                <img src="/assets/images/globe.png" alt="" className={styles.globe} aria-hidden="true" />
              </div>
              <h1 className={styles.heroTitle}>
                One Planet<br />
                Many Guardians<br />
                One Sacred Promise
              </h1>
              <p className={styles.heroSubtitle}>May the forest be with you.</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.missionSection}>
          <div className={styles.missionContent}>
            <div className={styles.missionLeft}>
              <div className={styles.missionIcons}>
                <img src="/assets/icons/bird.svg" alt="" aria-hidden="true" />
                <img src="/assets/icons/chat.svg" alt="" aria-hidden="true" />
                <img src="/assets/icons/bee.svg" alt="" aria-hidden="true" />
                <img src="/assets/icons/sun.svg" alt="" aria-hidden="true" />
              </div>
              <h2 className={styles.missionTitle}>
                Using technology, economics,<br />
                creativity, and science,<br />
                <strong>to let forests grow wild.</strong>
              </h2>
              <div className={styles.missionText}>
                <p>
                  Sacred Groves is a <strong>Community Interest Company</strong> incorporated in the United Kingdom, reimagining business with nature our ultimate shareholder.
                </p>
                <p>
                  With Guardians in over <strong>30 countries</strong>, we protect three biodiverse habitats in the UK and Canada. By 2030, our goal is to safeguard a million acres of critical ecosystems across the planet.
                </p>
              </div>
            </div>

            <div className={styles.missionRight}>
              <div className={styles.locationCard}>
                <img src="/assets/images/ocean-sanctuary.jpg" alt="Ocean Sanctuary" />
                <p className={styles.locationName}>Ocean Sanctuary,<br />Nova Scotia, Canada</p>
                <p className={styles.locationCoords}>Location: (43.830926030499996, -64.978644436)</p>
              </div>

              <div className={styles.locationCard}>
                <img src="/assets/images/coed-rhyal.jpg" alt="Coed Rhyal" />
                <p className={styles.locationName}>Coed Rhyal<br />Wales, United Kingdom</p>
                <p className={styles.locationCoords}>Location: (51.70079, -4.274065)</p>
              </div>

              <div className={styles.locationCard}>
                <img src="/assets/images/gigrin-prysg.jpg" alt="Gigrin Prysg" />
                <p className={styles.locationName}>Gigrin Prysg<br />Wales, United Kingdom</p>
                <p className={styles.locationCoords}>Location: (52.29995, -3.49735)</p>
              </div>

              <div className={styles.networkBadge}>
                <img src="/assets/logos/wales-forest.svg" alt="Coedwig Genedlaethol Cymru National Forest for Wales" />
              </div>

              <p className={styles.networkText}>
                Once marked for private sale, these forests are now a part of the 'National Forest for Wales' network, helping build a contiguous green corridor across the Welsh country.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsCard}>
            <div className={styles.statsIcon}>
              <img src="/assets/icons/soccer-field.svg" alt="" aria-hidden="true" />
            </div>
            <h2 className={styles.statsNumber}>06</h2>
            <p className={styles.statsText}>
              Soccer pitches of tropical primary forest lost since you landed on our website.
            </p>
            <p className={styles.statsSource}>
              <strong>Source:</strong><br />
              World Resources Institute, May 2025
            </p>
          </div>

          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>Become a Guardian of the Wild.</h2>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButton}>
                PEOPLE FOR THE PLANET
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </button>
              <button className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
                BUSINESS FOR THE PLANET
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </button>
            </div>
            <p className={styles.locationFooter}>
              Ocean Sanctuary, Nova Scotia, Canada - Location: (43.830926030499996, -64.978644436)
            </p>
          </div>
        </section>

        {/* People for Planet Section */}
        <section className={styles.peopleSection}>
          <div className={styles.peopleLeft}>
            <img src="/assets/images/person-forest.jpg" alt="Person standing in forest" className={styles.peopleImage} />
          </div>
          <div className={styles.peopleRight}>
            <div className={styles.peopleIcons}>
              <img src="/assets/icons/elephant.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/tree-group.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/elephant-small.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/arrows-down.svg" alt="" aria-hidden="true" />
            </div>
            <h2 className={styles.sectionTitle}>
              People<br />
              <em>for the</em> Planet
            </h2>
            <p className={styles.sectionSubtitle}>
              Protect a biodiverse habitat in your name.
            </p>
            <ul className={styles.featureList}>
              <li>Protect a Habitat</li>
              <li>Gift a Habitat</li>
            </ul>
            <button className={styles.joinButton}>
              JOIN US
              <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
            </button>
          </div>
        </section>

        {/* Business for Planet Section */}
        <section className={styles.businessSection}>
          <div className={styles.businessLeft}>
            <div className={styles.businessIcons}>
              <img src="/assets/icons/tree-tech.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/leaf-tech.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/circuit.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/analytics.svg" alt="" aria-hidden="true" />
            </div>
            <h2 className={styles.sectionTitle}>
              Business<br />
              <em>for the</em> Planet
            </h2>
            <p className={styles.sectionDescription}>
              Co-create new economic models for People, Planet, Prosperity, and Purpose.
            </p>
            <ul className={styles.featureList}>
              <li>Partnership for the Planet</li>
              <li>myEarth Point</li>
              <li>Junk to Jungles</li>
              <li>Seeds of Recognition</li>
              <li>Brand a Habitat</li>
            </ul>
            <button className={styles.joinButton}>
              JOIN US
              <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
            </button>
          </div>
          <div className={styles.businessRight}>
            <img src="/assets/images/moss-box.png" alt="Decorative moss in box" className={styles.businessImage} />
          </div>
        </section>

        {/* Recognition Section */}
        <section className={styles.recognitionSection}>
          <div className={styles.recognitionHeader}>
            <div className={styles.recognitionIcons}>
              <img src="/assets/icons/tree-simple.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/plant-simple.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/deer-simple.svg" alt="" aria-hidden="true" />
            </div>
            <h2 className={styles.recognitionTitle}>Our impact is being recognized globally.</h2>
          </div>
          
          <div className={styles.recognitionGrid}>
            <div className={styles.recognitionCard}>
              <div className={styles.recognitionLogo}>
                <img src="/assets/logos/wales-forest-badge.svg" alt="Coedwig Genedlaethol Cymru National Forest for Wales" />
              </div>
              <p>
                Gigrin Prysg and Coed Rhyal have been recognised by the Welsh Government for their rare temperate rainforests and vital role in local ecosystems.
              </p>
            </div>

            <div className={styles.recognitionCard}>
              <div className={styles.recognitionLogo}>
                <img src="/assets/logos/pwc.svg" alt="PWC Net Zero Future50 Middle East" />
              </div>
              <p>
                Featured in PwC's Net Zero Future50 – Middle East report.
              </p>
            </div>

            <div className={styles.recognitionCard}>
              <div className={styles.recognitionLogo}>
                <img src="/assets/logos/microsoft.svg" alt="Microsoft Entrepreneurship for Positive Impact" />
              </div>
              <p>
                Part of the Microsoft Entrepreneurship for Positive Impact Accelerator.
              </p>
            </div>
          </div>

          <button className={styles.arrowButton} aria-label="Next">
            <img src="/assets/icons/arrow-right.svg" alt="" />
          </button>
        </section>

        {/* Trust Section */}
        <section className={styles.trustSection}>
          <div className={styles.trustLeft}>
            <div className={styles.trustIcons}>
              <img src="/assets/icons/tree-outline.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/deer-outline.svg" alt="" aria-hidden="true" />
            </div>
            <div className={styles.trustSeal}>
              <img src="/assets/images/trust-seal.png" alt="" className={styles.sealImage} aria-hidden="true" />
            </div>
            <h2 className={styles.trustTitle}>Sacred Groves<br />Seal of Trust</h2>
          </div>

          <div className={styles.trustRight}>
            <ul className={styles.trustList}>
              <li>
                <span>WE'RE FULLY REGULATED</span>
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </li>
              <li>
                <span>WE'RE GOVERNED BY ENGLISH LAW</span>
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </li>
              <li>
                <span>WE'RE PART OF THE 'NATIONAL FOREST FOR WALES' NETWORK</span>
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </li>
              <li>
                <span>WE'RE TRUSTED BY GUARDIANS FROM 30+ COUNTRIES</span>
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </li>
              <li>
                <span>WE'RE TRANSPARENT</span>
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </li>
              <li>
                <span>ALL PAYMENTS ARE SECURE</span>
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </li>
              <li>
                <span>ALL TRANSACTIONS ARE TRACEABLE</span>
                <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
              </li>
            </ul>
          </div>
        </section>

        {/* Wild Tech Section */}
        <section className={styles.wildTechSection}>
          <div className={styles.wildTechLeft}>
            <img src="/assets/images/forest-canopy.jpg" alt="Forest canopy view" className={styles.wildTechImage} />
            <div className={styles.techBadges}>
              <div className={styles.techBadge}>
                <img src="/assets/icons/network.svg" alt="" aria-hidden="true" />
              </div>
              <div className={styles.techBadge}>
                <img src="/assets/icons/link.svg" alt="" aria-hidden="true" />
              </div>
              <div className={styles.techBadge}>
                <img src="/assets/icons/wifi.svg" alt="" aria-hidden="true" />
              </div>
              <div className={styles.techBadge}>
                <img src="/assets/icons/analytics-badge.svg" alt="" aria-hidden="true" />
              </div>
              <div className={styles.techBadge}>
                <img src="/assets/icons/tools.svg" alt="" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className={styles.wildTechRight}>
            <div className={styles.wildTechIcons}>
              <img src="/assets/icons/trees-tech.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/multiply.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/card.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/circle.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/molecule.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/arrows-tech.svg" alt="" aria-hidden="true" />
            </div>
            <h2 className={styles.wildTechTitle}>
              <em>Built with</em><br />
              Wild Tech
            </h2>
            <p className={styles.wildTechSubtitle}>
              Inspired by Nature.<br />
              Built for Nature.
            </p>
            <p className={styles.wildTechDescription}>
              Our technology learns from nature itself, the world's most brilliant designer.
            </p>
            <p className={styles.wildTechDescription}>
              Wild Tech powers our <strong>Assisted Natural Regeneration</strong> model, enabling real, on-ground recovery. Blending art, science, and technology, our mission is to build ecosystems where every living thing can thrive  from vast rivers to the smallest fungi.
            </p>
            <ul className={styles.techList}>
              <li>Blockchain</li>
              <li>Cloud</li>
              <li>Virtual Visits</li>
              <li>Advanced Analytics</li>
              <li>Satellites</li>
            </ul>
          </div>
        </section>

        {/* Daily Actions Section */}
        <section className={styles.dailyActionsSection}>
          <div className={styles.dailyActionsLeft}>
            <div className={styles.dailyIcons}>
              <img src="/assets/icons/bird-daily.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/chat-daily.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/bee-daily.svg" alt="" aria-hidden="true" />
              <img src="/assets/icons/sun-daily.svg" alt="" aria-hidden="true" />
            </div>
            <h2 className={styles.dailyTitle}>
              You can do something positive<br />
              for nature every day.
            </h2>
            <p className={styles.dailyDescription}>
              Every choice you make, from how you bank to what you buy, shapes the world we share.
            </p>
            <p className={styles.dailyDescription}>
              We partner with brands that share this vision, making it easy to live your values and let your everyday actions give back to nature.
            </p>
          </div>

          <div className={styles.dailyActionsRight}>
            <div className={styles.actionCard}>
              <h3>Invest <em>for the</em> Planet</h3>
              <p>
                Your everyday banking can protect real forests. Ruya Bank's NatureProtect has already safeguarded over 100,000 sq ft of habitats with Sacred Groves, proof that deposits too can serve a higher purpose.
              </p>
              <div className={styles.actionImages}>
                <img src="/assets/images/invest-1.jpg" alt="" />
                <img src="/assets/images/invest-2.jpg" alt="" />
              </div>
            </div>

            <div className={styles.actionCard}>
              <h3>Shop <em>for the</em> Planet</h3>
              <p>
                What if every piece you owned kept a tree standing? K. Salamoon's Forest Splendors, unveiled at Paris Fashion Week 2024, draws its spirit from the wild, with every purchase directly financing forest conservation.
              </p>
              <div className={styles.actionImages}>
                <img src="/assets/images/shop-1.jpg" alt="" />
                <img src="/assets/images/shop-2.jpg" alt="" />
              </div>
            </div>

            <div className={styles.actionCard}>
              <h3>Learn <em>for the</em> Planet</h3>
              <p>
                Because education is the clearest path to change. Eaton Business School and Saatchi & Saatchi's Offset Boxset are conserving real habitats globally through our Sacred Groves Clusters.
              </p>
              <div className={styles.actionImages}>
                <img src="/assets/images/learn-1.jpg" alt="" />
                <img src="/assets/images/learn-2.jpg" alt="" />
              </div>
            </div>

            <div className={styles.actionCard}>
              <h3>Joy <em>for the</em> Planet</h3>
              <p>
                Discover the art of conservation with Pyaarnation—an Instagram art store where every artwork sold protects a square foot of habitat, transforming creativity into traceable climate impact.
              </p>
              <div className={styles.actionImages}>
                <img src="/assets/images/joy-1.jpg" alt="" />
                <img src="/assets/images/joy-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Social Feed Section */}
        <section className={styles.socialSection}>
          <div className={styles.socialHeader}>
            <div className={styles.sdgBadges}>
              <img src="/assets/icons/sdg-12.svg" alt="SDG 12: Responsible Consumption and Production" />
              <img src="/assets/icons/sdg-13.svg" alt="SDG 13: Climate Action" />
              <img src="/assets/icons/sdg-15.svg" alt="SDG 15: Life on Land" />
              <img src="/assets/icons/sdg-17.svg" alt="SDG 17: Partnerships for the Goals" />
            </div>
            <p className={styles.sdgText}>
              Aligned with<br />
              the UN<br />
              Sustainable<br />
              Development<br />
              Goals.
            </p>
          </div>

          <button className={styles.followButton}>
            FOLLOW US
            <img src="/assets/icons/arrow.svg" alt="" aria-hidden="true" />
          </button>

          <div className={styles.socialFeed}>
            <button className={styles.feedArrow} aria-label="Previous">
              <img src="/assets/icons/arrow-left.svg" alt="" />
            </button>

            <div className={styles.feedCards}>
              <article className={styles.feedCard}>
                <div className={styles.feedHeader}>
                  <img src="/assets/logos/sacred-groves-small.svg" alt="Sacred Groves" />
                  <span>Sacred Groves</span>
                  <time>5 days ago</time>
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                </div>
                <h4>Guardian Spotlight: When Fine Jewellery Honours Beauty and...</h4>
                <button className={styles.readMore}>Read more</button>
                <img src="/assets/images/feed-1.jpg" alt="" className={styles.feedImage} />
                <div className={styles.feedActions}>
                  <button aria-label="Like"><img src="/assets/icons/heart.svg" alt="" /> 101</button>
                  <button aria-label="Comment"><img src="/assets/icons/comment.svg" alt="" /> 50</button>
                  <button aria-label="Share"><img src="/assets/icons/share.svg" alt="" /> Share</button>
                </div>
              </article>

              <article className={styles.feedCard}>
                <div className={styles.feedHeader}>
                  <img src="/assets/logos/sacred-groves-small.svg" alt="Sacred Groves" />
                  <span>Sacred Groves</span>
                  <time>5 days ago</time>
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                </div>
                <h4>Guardian Spotlight: When Fine Jewellery Honours Beauty and...</h4>
                <button className={styles.readMore}>Read more</button>
                <img src="/assets/images/feed-2.jpg" alt="" className={styles.feedImage} />
                <div className={styles.feedActions}>
                  <button aria-label="Like"><img src="/assets/icons/heart.svg" alt="" /> 101</button>
                  <button aria-label="Comment"><img src="/assets/icons/comment.svg" alt="" /> 50</button>
                  <button aria-label="Share"><img src="/assets/icons/share.svg" alt="" /> Share</button>
                </div>
              </article>

              <article className={styles.feedCard}>
                <div className={styles.feedHeader}>
                  <img src="/assets/logos/sacred-groves-small.svg" alt="Sacred Groves" />
                  <span>Sacred Groves</span>
                  <time>5 days ago</time>
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                </div>
                <h4>Guardian Spotlight: When Fine Jewellery Honours Beauty and...</h4>
                <button className={styles.readMore}>Read more</button>
                <img src="/assets/images/feed-3.jpg" alt="" className={styles.feedImage} />
                <div className={styles.feedActions}>
                  <button aria-label="Like"><img src="/assets/icons/heart.svg" alt="" /> 101</button>
                  <button aria-label="Comment"><img src="/assets/icons/comment.svg" alt="" /> 50</button>
                  <button aria-label="Share"><img src="/assets/icons/share.svg" alt="" /> Share</button>
                </div>
              </article>
            </div>

            <button className={styles.feedArrow} aria-label="Next">
              <img src="/assets/icons/arrow-right.svg" alt="" />
            </button>
          </div>
        </section>
      </main>
    </>
  )
}