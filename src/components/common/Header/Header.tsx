import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '@/assets/logo.svg'

// Icons
import arrowSidebar from '@/assets/arrow-sidebar.svg'
import activeArrowSidebar from '@/assets/active-arrow-sidebar.svg'
import flowerIcon from '@/assets/BusinesforthePlanet.svg' // Placeholder for flower icon

interface SubmenuItem {
  title: string;
  location?: string;
}

interface MenuItem {
  title: string;
  hasSubmenu: boolean;
  submenu?: SubmenuItem[];
  link?: string;
}

export const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const searchContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus()
    }
  }, [searchOpen])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchOpen) {
        const target = event.target as HTMLElement
        // Check if click is outside search container and not on any search button
        if (
          searchContainerRef.current &&
          !searchContainerRef.current.contains(target) &&
          !target.closest(`.${styles.searchButton}`) &&
          !target.closest(`.${styles.searchWrap}`)
        ) {
          setSearchOpen(false)
        }
      }
    }

    if (searchOpen) {
      // Use a small delay to avoid immediate closure when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 100)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [searchOpen])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [sidebarOpen])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    setActiveSubmenu(null) // Reset submenu on close
  }

  const toggleSubmenu = (title: string) => {
    if (activeSubmenu === title) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(title)
    }
  }

  const menuItems: MenuItem[] = [
    {
      title: 'OUR SACRED GROVES',
      hasSubmenu: true,
      submenu: [
        { title: 'Coed Rhyal', location: 'Wales, United Kingdom' },
        { title: 'Gigrin Prysg Wales', location: 'United Kingdom' },
        { title: 'Ocean Sanctuary', location: 'Nova Scotia, Canada' },
      ]
    },
    {
      title: 'PEOPLE FOR THE PLANET',
      hasSubmenu: true,
      submenu: [
        { title: 'Protect a Habitat' },
        { title: 'Gift a Habitat' },
      ]
    },
    {
      title: 'BUSINESS FOR THE PLANET',
      hasSubmenu: true,
      submenu: [
        { title: 'Partnership for the Planet' },
        { title: 'myEarth Points' },
        { title: 'Junk to Jungles' },
        { title: 'Seeds of recognition' },
        { title: 'Brand a Habitat' },
      ]
    },
    {
      title: 'ABOUT US',
      hasSubmenu: false,
      link: '/about'
    }
  ]

  const popularSearches = [
    'Business for the Planet',
    'Stories that inspire us'
  ]

  return (
    <header className={`${styles.header} ${sidebarOpen ? styles.headerHidden : ''} ${searchOpen ? styles.searchExpanded : ''}`} role="banner">
      <div className={styles.headerContent}>
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
                  <a href="https://application.sacredgroves.earth/signup" target="_blank" rel="noopener noreferrer" className={styles.signUpButton}>Sign Up</a>
                  <a href="https://application.sacredgroves.earth/login" target="_blank" rel="noopener noreferrer" className={styles.loginButton}>Login</a>
                </>
              )}

              <div className={styles.searchWrap} ref={searchContainerRef}>
                {searchOpen && (
                  <div className={styles.searchExpandedContent}>
                    <div className={styles.searchInputContainer}>
                  <input
                    ref={inputRef}
                        className={styles.searchInputExpanded}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                      <button
                        className={styles.searchButton}
                        aria-label="Close search"
                        onClick={() => setSearchOpen(false)}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    <div className={styles.popularSearches}>
                      <p className={styles.popularSearchesLabel}>Popular searches</p>
                      <ul className={styles.popularSearchesList}>
                        {popularSearches.map((search, index) => (
                          <li key={index}>
                            <button
                              className={styles.popularSearchItem}
                              onClick={() => {
                                // Handle search click - you can add navigation logic here
                                setSearchOpen(false)
                              }}
                            >
                              {search}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {!searchOpen && (
                <button
                  className={styles.searchButton}
                    aria-label="Open search"
                    onClick={() => setSearchOpen(true)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                )}
              </div>

              {!searchOpen && (
              <button
                className={styles.menuButton}
                aria-label="Menu"
                onClick={toggleSidebar}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`${styles.sidebarOverlay} ${sidebarOpen ? styles.open : ''}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.sidebarHeader}>
          <img src={logo} alt="Sacred Groves" className={styles.sidebarLogo} />
        </div>

        <div className={styles.sidebarContent}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuListItem}>
                {item.hasSubmenu ? (
                  <>
                    <div
                      className={`${styles.menuItem} ${activeSubmenu === item.title ? styles.active : ''}`}
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      <img
                        src={activeSubmenu === item.title ? activeArrowSidebar : arrowSidebar}
                        alt="Arrow"
                        className={styles.menuArrow}
                      />
                      {item.title}
                    </div>

                    {/* Accordion Submenu */}
                    <div className={`${styles.accordionContent} ${activeSubmenu === item.title ? styles.expanded : ''}`}>
                      <ul className={styles.submenuList}>
                        {item.submenu?.map((subItem, subIndex) => (
                          <li key={subIndex} className={styles.submenuItem}>
                            <span>{subItem.title}</span>
                            {subItem.location && (
                              <span className={styles.submenuItemLocation}>{subItem.location}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.link || '#'}
                    className={`${styles.menuItem} ${styles.menuItemSingle}`}
                    onClick={toggleSidebar}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className={styles.mobileAuthButtons}>
            <a href="https://application.sacredgroves.earth/signup" target="_blank" rel="noopener noreferrer" className={styles.mobileSignUpButton}>Sign Up</a>
            <a href="https://application.sacredgroves.earth/login" target="_blank" rel="noopener noreferrer" className={styles.mobileLoginButton}>Login</a>
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <div className={styles.footerIcons}>
            <img src={flowerIcon} alt="Business for the Planet" className={styles.footerIcon} />
          </div>
        </div>
      </div>
    </header>
  )
}
