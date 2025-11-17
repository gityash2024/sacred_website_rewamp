/**
 * Common Sections Component
 * Reusable sections used across multiple pages
 */
import React from 'react'
import { LinkedInPostsSlider } from './LinkedInPostsSlider'
import styles from './CommonSections.module.css'
import align_1 from '@/assets/align_1.svg'
import align_2 from '@/assets/align_2.svg'
import align_3 from '@/assets/align_3.svg'
import align_4 from '@/assets/align_4.svg'

/**
 * Aligned with UN SDGs Section
 */
export const AlignedWithUNSDGs: React.FC = () => {
  return (
    <section className={styles.alignedSection}>
      <div className={styles.alignedContainer}>
        {/* Top Row - Heading and SDG Icons */}
        <div className={styles.alignedTopRow}>
          {/* Left Side - Heading */}
          <div className={styles.alignedLeft}>
            <h2 className={styles.alignedHeading}>
              Aligned with<br />
              the UN<br />
              Sustainable<br />
              Development<br />
              Goals.
            </h2>
          </div>

          {/* Right Side - SDG Icons */}
          <div className={styles.alignedTopRight}>
            <div className={styles.sdgIcons}>
              <img src={align_1} alt="SDG 12: Responsible Consumption" className={styles.sdgIcon} />
              <img src={align_2} alt="SDG 13: Climate Action" className={styles.sdgIcon} />
              <img src={align_3} alt="SDG 15: Life on Land" className={styles.sdgIcon} />
              <img src={align_4} alt="SDG 17: Partnerships" className={styles.sdgIcon} />
            </div>
          </div>
        </div>

        {/* Bottom Row - LinkedIn Posts Slider (Full Width) */}
        <div className={styles.alignedBottomRow}>
          <LinkedInPostsSlider />
        </div>
      </div>
    </section>
  )
}

