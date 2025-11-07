/**
 * SEO Component
 * Handles dynamic meta tags, Open Graph, Twitter Cards, and structured data
 */

import { Helmet } from 'react-helmet-async'
import type { SEOProps } from '@/types'
import { APP_NAME, APP_URL, DEFAULT_OG_IMAGE } from '@/constants'
import { generateOrganizationSchema, getCanonicalUrl } from '@/utils/seo'

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode
}

/**
 * SEO Component for managing page metadata
 * @param props - SEO configuration props
 * @returns Helmet component with meta tags
 */
export const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  type = 'website',
  noindex = false,
  nofollow = false,
}) => {
  const pageTitle = title ? `${title} | ${APP_NAME}` : APP_NAME
  const pageDescription = description || `${APP_NAME} - A modern, production-ready website`
  const pageImage = ogImage || DEFAULT_OG_IMAGE
  const canonical = canonicalUrl || getCanonicalUrl(window.location.pathname)
  const fullImageUrl = pageImage.startsWith('http') ? pageImage : `${APP_URL}${pageImage}`

  const organizationSchema = generateOrganizationSchema()

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={APP_NAME} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  )
}

