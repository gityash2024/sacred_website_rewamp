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
const MyEarthPoint = lazy(() => import('@/pages/MyEarthPoint').then((module) => ({ default: module.MyEarthPoint })))
const JunkToJungles = lazy(() => import('@/pages/JunkToJungles').then((module) => ({ default: module.JunkToJungles })))
const India = lazy(() => import('@/pages/India').then((module) => ({ default: module.India })))
const PartnershipForPlanet = lazy(() => import('@/pages/PartnershipForPlanet').then((module) => ({ default: module.PartnershipForPlanet })))
const StoriesThatInspire = lazy(() => import('@/pages/StoriesThatInspire').then((module) => ({ default: module.StoriesThatInspire })))
const OurSacredGroves = lazy(() => import('@/pages/OurSacredGroves').then((module) => ({ default: module.OurSacredGroves })))
const CoedRhyal = lazy(() => import('@/pages/CoedRhyal').then((module) => ({ default: module.CoedRhyal })))
const GirginPrysg = lazy(() => import('@/pages/GirginPrysg').then((module) => ({ default: module.GirginPrysg })))
const OceanSanctuary = lazy(() => import('@/pages/OceanSanctuary').then((module) => ({ default: module.OceanSanctuary })))

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
      {
        path: 'my-earth-point',
        element: (
          <Suspense fallback={<Loading />}>
            <MyEarthPoint />
          </Suspense>
        ),
      },
      {
        path: 'junk-to-jungles',
        element: (
          <Suspense fallback={<Loading />}>
            <JunkToJungles />
          </Suspense>
        ),
      },
      {
        path: 'india',
        element: (
          <Suspense fallback={<Loading />}>
            <India />
          </Suspense>
        ),
      },
      {
        path: 'partnership-for-the-planet',
        element: (
          <Suspense fallback={<Loading />}>
            <PartnershipForPlanet />
          </Suspense>
        ),
      },
      {
        path: 'stories-that-inspire',
        element: (
          <Suspense fallback={<Loading />}>
            <StoriesThatInspire />
          </Suspense>
        ),
      },
      {
        path: 'our-sacred-groves',
        element: (
          <Suspense fallback={<Loading />}>
            <OurSacredGroves />
          </Suspense>
        ),
      },
      {
        path: 'coed-rhyal',
        element: (
          <Suspense fallback={<Loading />}>
            <CoedRhyal />
          </Suspense>
        ),
      },
      {
        path: 'girgin-prysg',
        element: (
          <Suspense fallback={<Loading />}>
            <GirginPrysg />
          </Suspense>
        ),
      },
      {
        path: 'ocean-sanctuary',
        element: (
          <Suspense fallback={<Loading />}>
            <OceanSanctuary />
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

