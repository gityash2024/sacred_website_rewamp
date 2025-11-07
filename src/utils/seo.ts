/**
 * SEO utility functions
 */

import { APP_NAME, APP_URL } from '@/constants'

/**
 * Generates structured data (JSON-LD) for Organization schema
 * @param organizationName - Name of the organization
 * @param websiteUrl - URL of the website
 * @param logoUrl - URL of the organization logo
 * @returns JSON-LD structured data object
 */
export const generateOrganizationSchema = (
  organizationName: string = APP_NAME,
  websiteUrl: string = APP_URL,
  logoUrl?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationName,
    url: websiteUrl,
    ...(logoUrl && { logo: logoUrl }),
  }
}

/**
 * Generates full canonical URL
 * @param path - Path to append to base URL
 * @returns Full canonical URL
 */
export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = APP_URL.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

