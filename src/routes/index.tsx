/**
 * Routes Configuration
 * Centralized routing setup with lazy loading
 */

import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Loading } from '@/components/common/Loading'

// Lazy load pages for code splitting
const Home = lazy(() => import('@/pages/Home').then((module) => ({ default: module.Home })))
const PeopleForPlanet = lazy(() => import('@/pages/PeopleForPlanet').then((module) => ({ default: module.PeopleForPlanet })))
const BusinessForPlanet = lazy(() => import('@/pages/BusinessForPlanet').then((module) => ({ default: module.BusinessForPlanet })))
const About = lazy(() => import('@/pages/About').then((module) => ({ default: module.About })))

/**
 * Application routes configuration
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'people-for-the-planet',
        element: (
          <Suspense fallback={<Loading />}>
            <PeopleForPlanet />
          </Suspense>
        ),
      },
      {
        path: 'business-for-the-planet',
        element: (
          <Suspense fallback={<Loading />}>
            <BusinessForPlanet />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
])

/**
 * Routes component
 * @returns RouterProvider with configured routes
 */
export const Routes: React.FC = () => {
  return <RouterProvider router={router} />
}

