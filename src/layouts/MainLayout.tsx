/**
 * Main Layout Component
 * Wraps pages with Header and Footer
 */

import { Outlet } from 'react-router-dom'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import styles from './MainLayout.module.css'

/**
 * Main layout wrapper component
 * Uses Outlet for nested routes
 * @returns Layout JSX element
 */
export const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main id="main-content" className={styles.main} role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

