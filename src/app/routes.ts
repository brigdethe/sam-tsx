import { createElement, type ComponentType } from 'react'
import { SamDocument } from '../App.js'
import AboutUsDocument from '../pages/about-us/index.js'
import { RetailBrokersDocument } from '../pages/cybersecurity-services/index.js'
import { GetInTouchDocument } from '../pages/get-in-touch/index.js'
import PrivacyPolicyDocument from '../pages/legal/privacy-policy/index.js'
import TermsOfUseDocument from '../pages/legal/terms-of-use/index.js'
import { partnerPageConfigs } from '../pages/partners/content/partnerPages.js'
import { PartnerServiceDocument } from '../pages/partners/index.js'
import ProductsAppetiteDocument from '../pages/services/index.js'
import { CarriersDocument } from '../pages/software-development/index.js'
import { technologyPageConfigs } from '../pages/technologies/content/technologyPages.js'
import { TechnologyServiceDocument } from '../pages/technologies/index.js'

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
}

export const siteRoutes = Object.keys(pageDocuments)

export function getPageDocument(path: string): ComponentType | undefined {
  const normalizedPath = path === '/' ? path : path.replace(/\/+$/, '')
  return pageDocuments[normalizedPath]
}
