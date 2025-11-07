/**
 * Application constants
 */

export const APP_NAME = 'Sacred Website'
export const APP_DESCRIPTION = 'A modern, production-ready React website'
export const APP_URL = import.meta.env.VITE_APP_URL || 'https://example.com'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'

/**
 * SEO Defaults
 */
export const DEFAULT_SEO = {
  title: `${APP_NAME} - Home`,
  description: APP_DESCRIPTION,
  keywords: 'react, typescript, vite, website',
  ogImage: DEFAULT_OG_IMAGE,
  type: 'website',
}

