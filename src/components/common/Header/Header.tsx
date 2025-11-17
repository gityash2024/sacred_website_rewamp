import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '@/assets/logo.svg'

export const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  return (
    <header className={styles.header} role="banner">
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <div className={styles.container}>
          <Link to="/" className={styles.logo} aria-label="Sacred Groves Home">
            <img src={logo} alt="Sacred Groves" className={styles.logoImage} />
          </Link>

          <div className={styles.navRight}>
            {!searchOpen && (
              <>
                <button className={styles.signUpButton}>Sign Up</button>
                <button className={styles.loginButton}>Login</button>
              </>
            )}

            <div className={styles.searchWrap}>
              {searchOpen && (
                <input
                  ref={inputRef}
                  className={`${styles.searchInput} ${searchOpen ? styles.visible : ''}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              )}
              <button
                className={styles.searchButton}
                aria-label={searchOpen ? 'Close search' : 'Open search'}
                onClick={() => setSearchOpen(prev => !prev)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <button className={styles.menuButton} aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
