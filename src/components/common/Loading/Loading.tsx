/**
 * Loading Component
 * Beautiful animated loader matching the Sacred Groves theme
 */

import React from 'react'
import styles from './Loading.module.css'
import logo from '@/assets/logo.svg'

/**
 * Loading component for Suspense fallback
 * @returns Loading JSX element
 */
export const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer} role="status" aria-label="Loading">
      <div className={styles.loaderWrapper}>
        {/* Animated Background Circles */}
        <div className={styles.circleContainer}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>

        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Sacred Groves" className={styles.logo} />
        </div>

        {/* Animated Leaves/Orbs */}
        <div className={styles.orbContainer}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
          <div className={styles.orb4}></div>
        </div>

        {/* Loading Text */}
        <div className={styles.loadingText}>
          {/* <span className={styles.text}>Loading</span> */}
          <span className={styles.dots}>
            <span className={styles.dot1}>.</span>
            <span className={styles.dot2}>.</span>
            <span className={styles.dot3}>.</span>
          </span>
        </div>
      </div>
      {/* <span className={styles.srOnly}>Loading...</span> */}
    </div>
  )
}

