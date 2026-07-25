import type { ComponentType } from 'react'
import { SamDocument } from './App.js'
import { AboutUsDocument } from './pages/AboutUsPage.js'
import { CarriersDocument } from './pages/CarriersPage.js'
import { GetInTouchDocument } from './pages/GetInTouchPage.js'
import { PrivacyPolicyDocument, TermsOfUseDocument } from './pages/LegalPages.js'
import { ProductsAppetiteDocument } from './pages/ProductsAppetitePage.js'
import { RetailBrokersDocument } from './pages/RetailBrokersPage.js'

const pageDocuments: Record<string, ComponentType> = {
  '/': SamDocument,
  '/products-appetite': ProductsAppetiteDocument,
  '/retail-brokers': RetailBrokersDocument,
  '/carriers': CarriersDocument,
  '/about-us': AboutUsDocument,
  '/get-in-touch': GetInTouchDocument,
  '/privacy-policy': PrivacyPolicyDocument,
  '/terms-of-use': TermsOfUseDocument,
}

export const siteRoutes = Object.keys(pageDocuments)

export function getPageDocument(path: string): ComponentType | undefined {
  const normalizedPath = path === '/' ? path : path.replace(/\/+$/, '')
  return pageDocuments[normalizedPath]
}
