/**
 * SEO metadata types
 */
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  type?: string
  noindex?: boolean
  nofollow?: boolean
}

/**
 * Route configuration type
 */
export interface RouteConfig {
  path: string
  element: React.LazyExoticComponent<React.ComponentType>
}

