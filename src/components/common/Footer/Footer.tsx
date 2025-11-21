import styles from './Footer.module.css'
import footerlogo from '@/assets/footerlogo.svg'
import linkedln from '@/assets/linkedln.svg'
import youtube from '@/assets/youtube.svg'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import alogo from '@/assets/alogo.svg'
import PlayStoreLogo from '@/assets/PlayStoreLogo.svg'
import footerlogo_1 from '@/assets/footerlogo_1.svg'
import footerlogo_2 from '@/assets/footerlogo_2.svg'
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.followContainer}>
        <a href="https://www.linkedin.com/company/the-sacred-groves/" target="_blank" rel="noopener noreferrer" className={styles.followButton}>
          FOLLOW US
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <h3>About Us</h3>
            <a href="#">Note from our Founders</a>
            <a href="#">Our Story</a>
          </div>

          <div>
            <h3>Our Sacred Groves</h3>
            <a href="#">Coed Rhyal<br />Wales, United Kingdom</a>
            <a href="#">Gigrin Prysg<br />Wales, United Kingdom</a>
            <a href="#">Ocean Sanctuary<br />Nova Scotia, Canada</a>
            <a href="#">Art and Science of Conservation</a>
            <a href="#">Wild Tech</a>
          </div>

          <div>
            <h3>People for the Planet</h3>
            <a href="/people-for-the-planet" target="_blank" rel="noopener noreferrer">Protect a Habitat</a>
            <a href="/people-for-the-planet" target="_blank" rel="noopener noreferrer">Gift a Habitat</a>
          </div>

          <div>
            <h3>Business for the Planet</h3>
            <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer">Partnership for the Planet</a>
            <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer">myEarth Point</a>
            <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer">Junk to Jungles</a>
            <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer">Seeds of Recognition</a>
            <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer">Brand a Habitat</a>
            <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer">Sacred Groves India</a>
          </div>

          <div>
            <h3>Resources</h3>
            <a href="#">Stories that Inspire us</a>
            <a href="#">Media Centre</a>
            <a href="#">Knowledge Centre</a>

            <h3 className={styles.legalHeading}>Legal</h3>
            <a href="#">Disclosures</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>

          <div className={styles.contactSection}>
            <img src={footerlogo} alt="Sacred Groves" className={styles.logo} />
            <p>The Sacred Groves CIC, 124 City Road,<br />London, England, EC1V 2NX</p>
            <div className={styles.socialIcons}>
              <a href="#"><img src={linkedln} alt="LinkedIn" /></a>
              <a href="#"><img src={youtube} alt="YouTube" /></a>
              <a href="#"><img src={instagram} alt="Instagram" /></a>
              <a href="#"><img src={facebook} alt="Facebook" /></a>
            </div>
            <a href="mailto:connect@sacredgroves.earth" className={styles.mail}>
              connect@sacredgroves.earth
            </a>
            <h3 className={styles.downloadHeading}>Download our App</h3>
            <div className={styles.appButtons}>
              <img src={alogo} alt="App Store" className={styles.appStoreIcon} />
              <img src={PlayStoreLogo} alt="Play Store" className={styles.playStoreIcon} />
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <img src={footerlogo_1} alt="" className={styles.leftIcons} />
          <p>
            <span className={styles.copyrightFirst}>© 2020–{currentYear} The Sacred Groves. All rights reserved.</span>
            <br />
            <span className={styles.copyrightSecond}>SACRED GROVES and the SG Sacred Groves Logo are registered trade mark belonging to The Sacred Groves C.I.C.</span>
          </p>
          <img src={footerlogo_2} alt="" className={styles.rightIcons} />
        </div>
      </div>
    </footer>
  )
}
