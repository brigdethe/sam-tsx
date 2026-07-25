import { createElement, type ComponentType } from 'react'
import { SamDocument } from './App.js'
import { technologyPageConfigs } from './content/technologyPages.js'
import { AboutUsDocument } from './pages/AboutUsPage.js'
import { CarriersDocument } from './pages/CarriersPage.js'
import { GetInTouchDocument } from './pages/GetInTouchPage.js'
import { PrivacyPolicyDocument, TermsOfUseDocument } from './pages/LegalPages.js'
import { ProductsAppetiteDocument } from './pages/ProductsAppetitePage.js'
import { RetailBrokersDocument } from './pages/RetailBrokersPage.js'
import { TechnologyServiceDocument } from './pages/TechnologyServicePage.js'

const technologyDocuments = Object.fromEntries(
  technologyPageConfigs.map((config) => [
    config.path,
    function TechnologyPage() {
      return createElement(TechnologyServiceDocument, { config })
    },
  ]),
) as Record<string, ComponentType>

const pageDocuments: Record<string, ComponentType> = {
  '/': SamDocument,
  '/products-appetite': ProductsAppetiteDocument,
  '/retail-brokers': RetailBrokersDocument,
  '/carriers': CarriersDocument,
  '/about-us': AboutUsDocument,
  '/get-in-touch': GetInTouchDocument,
  '/privacy-policy': PrivacyPolicyDocument,
  '/terms-of-use': TermsOfUseDocument,
  ...technologyDocuments,
}

export const siteRoutes = Object.keys(pageDocuments)

export function getPageDocument(path: string): ComponentType | undefined {
  const normalizedPath = path === '/' ? path : path.replace(/\/+$/, '')
  return pageDocuments[normalizedPath]
}
