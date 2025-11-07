/**
 * Footer Component
 * Site footer based on Sacred Groves design
 */

import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

/**
 * Footer component
 * @returns Footer JSX element
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>About Us</h3>
            <ul className={styles.footerList}>
              <li>
                <Link to="/founders">Note from our Founders</Link>
              </li>
              <li>
                <Link to="/story">Our Story</Link>
              </li>
            </ul>
          </div>

          {/* Sacred Groves Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Our Sacred Groves</h3>
            <ul className={styles.footerList}>
              <li>
                <Link to="/coed-rhyal">Coed Rhyal<br />Wales, United Kingdom</Link>
              </li>
              <li>
                <Link to="/gigrin-prysg">Gigrin Prysg<br />Wales, United Kingdom</Link>
              </li>
              <li>
                <Link to="/ocean-sanctuary">Ocean Sanctuary<br />Nova Scotia, Canada</Link>
              </li>
              <li>
                <Link to="/art-science">Art and Science of Conservation</Link>
              </li>
              <li>
                <Link to="/wild-tech">Wild Tech</Link>
              </li>
            </ul>
          </div>

          {/* People for Planet Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>People for the Planet</h3>
            <ul className={styles.footerList}>
              <li>
                <Link to="/protect-habitat">Protect a Habitat</Link>
              </li>
              <li>
                <Link to="/gift-habitat">Gift a Habitat</Link>
              </li>
            </ul>
          </div>

          {/* Business for Planet Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Business for the Planet</h3>
            <ul className={styles.footerList}>
              <li>
                <Link to="/partnership">Partnership for the Planet</Link>
              </li>
              <li>
                <Link to="/myearth">myEarth Point</Link>
              </li>
              <li>
                <Link to="/junk-jungles">Junk to Jungles</Link>
              </li>
              <li>
                <Link to="/recognition">Seeds of Recognition</Link>
              </li>
              <li>
                <Link to="/brand-habitat">Brand a Habitat</Link>
              </li>
              <li>
                <Link to="/sacred-groves-india">Sacred Groves India</Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Resources</h3>
            <ul className={styles.footerList}>
              <li>
                <Link to="/stories">Stories that Inspire us</Link>
              </li>
              <li>
                <Link to="/media">Media Centre</Link>
              </li>
              <li>
                <Link to="/knowledge">Knowledge Centre</Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Legal</h3>
            <ul className={styles.footerList}>
              <li>
                <Link to="/disclosures">Disclosures</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Social */}
        <div className={styles.footerBottom}>
          <div className={styles.footerContact}>
            <div className={styles.footerLogo}>
              <img src="/assets/logos/sacred-groves-logo.svg" alt="Sacred Groves" />
            </div>
            <address className={styles.address}>
              The Sacred Groves CIC, 124 City Road,<br />
              London, England, EC1V 2NX
            </address>
            <a href="mailto:connect@sacredgroves.earth" className={styles.email}>
              connect@sacredgroves.earth
            </a>
          </div>

          <div className={styles.footerSocial}>
            <div className={styles.socialLinks}>
              <a 
                href="https://facebook.com/sacredgroves" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/assets/icons/facebook.svg" alt="" />
              </a>
              <a 
                href="https://linkedin.com/company/sacredgroves" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/assets/icons/linkedin.svg" alt="" />
              </a>
              <a 
                href="https://instagram.com/sacredgroves" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/assets/icons/instagram.svg" alt="" />
              </a>
              <a 
                href="https://youtube.com/@sacredgroves" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <img src="/assets/icons/youtube.svg" alt="" />
              </a>
            </div>

            <div className={styles.appDownload}>
              <p>Download our App</p>
              <div className={styles.appButtons}>
                <a 
                  href="https://apps.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Download on App Store"
                >
                  <img src="/assets/icons/app-store.svg" alt="App Store" />
                </a>
                <a 
                  href="https://play.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <img src="/assets/icons/google-play.svg" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Nature Icons */}
        <div className={styles.footerCopyright}>
          <div className={styles.natureIcons}>
            <img src="/assets/icons/tree-footer.svg" alt="" aria-hidden="true" />
            <img src="/assets/icons/plant-footer.svg" alt="" aria-hidden="true" />
            <img src="/assets/icons/arrows-footer.svg" alt="" aria-hidden="true" />
          </div>
          <p className={styles.copyright}>
            © {currentYear} The Sacred Groves. All rights reserved.<br />
            SACRED GROVES and the SG Sacred Groves Logo are registered trade mark belonging to The Sacred Groves C.I.C.
          </p>
          <div className={styles.natureIconsRight}>
            <img src="/assets/icons/tree-group-footer.svg" alt="" aria-hidden="true" />
            <img src="/assets/icons/deer-footer.svg" alt="" aria-hidden="true" />
            <img src="/assets/icons/plant-group-footer.svg" alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  )
}