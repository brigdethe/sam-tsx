import { createElement, type ComponentType } from 'react'
import { SamDocument } from './App.js'
import {
  categoryPath,
  securityTechnologies,
  serviceCategories,
  servicePages,
  technologyPath,
  TECHNOLOGIES_ROOT,
} from './content/catalog/index.js'
import { partnerPageConfigs } from './content/partnerPages.js'
import { technologyPageConfigs } from './content/technologyPages.js'
import { AboutUsDocument } from './pages/AboutUsPage.js'
import {
  SecurityTechnologyDocument,
  ServiceCategoryDocument,
  ServiceDetailDocument,
  TechnologiesHubDocument,
} from './pages/CatalogPages.js'
import { CarriersDocument } from './pages/CarriersPage.js'
import { GetInTouchDocument } from './pages/GetInTouchPage.js'
import { PrivacyPolicyDocument, TermsOfUseDocument } from './pages/LegalPages.js'
import { PartnerServiceDocument } from './pages/PartnerServicePage.js'
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

const partnerDocuments = Object.fromEntries(
  partnerPageConfigs.map((config) => [
    config.path,
    function PartnerPage() {
      return createElement(PartnerServiceDocument, { config })
    },
  ]),
) as Record<string, ComponentType>

/** Practice areas, their sub-services and the security technology pages. */
const catalogDocuments: Record<string, ComponentType> = {
  [TECHNOLOGIES_ROOT]: TechnologiesHubDocument,
  ...Object.fromEntries(
    serviceCategories.map((category) => [
      categoryPath(category),
      function ServiceCategoryPage() {
        return createElement(ServiceCategoryDocument, { category })
      },
    ]),
  ),
  ...Object.fromEntries(
    servicePages.map((page) => [
      page.path,
      function ServicePage() {
        return createElement(ServiceDetailDocument, { page })
      },
    ]),
  ),
  ...Object.fromEntries(
    securityTechnologies.map((technology) => [
      technologyPath(technology),
      function SecurityTechnologyPage() {
        return createElement(SecurityTechnologyDocument, { technology })
      },
    ]),
  ),
}

const pageDocuments: Record<string, ComponentType> = {
  '/': SamDocument,
  '/services': ProductsAppetiteDocument,
  '/cybersecurity-services': RetailBrokersDocument,
  '/software-development': CarriersDocument,
  '/about-us': AboutUsDocument,
  '/get-in-touch': GetInTouchDocument,
  '/privacy-policy': PrivacyPolicyDocument,
  '/terms-of-use': TermsOfUseDocument,
  ...technologyDocuments,
  ...partnerDocuments,
  ...catalogDocuments,
}

export const siteRoutes = Object.keys(pageDocuments)

export function getPageDocument(path: string): ComponentType | undefined {
  const normalizedPath = path === '/' ? path : path.replace(/\/+$/, '')
  return pageDocuments[normalizedPath]
}
