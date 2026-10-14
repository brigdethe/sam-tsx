import { assuranceCategories } from './categories-assurance.js'
import { defenceCategories } from './categories-defence.js'
import { operationsCategories } from './categories-operations.js'
import { securityTechnologies } from './technologies.js'
import type { SecurityTechnology, ServiceCategory, ServiceDetail } from './types.js'

export type { Highlight, SecurityTechnology, ServiceCategory, ServiceDetail } from './types.js'
export { brandImages, type ImageKey } from './images.js'
export { icons, type IconName } from './icons.js'
export { securityTechnologies }

/** Every service category, in menu order. */
export const serviceCategories: ServiceCategory[] = [
  ...operationsCategories,
  ...defenceCategories,
  ...assuranceCategories,
]

export const SERVICES_ROOT = '/services'
export const TECHNOLOGIES_ROOT = '/technologies'

export const categoryPath = (category: ServiceCategory) => `${SERVICES_ROOT}/${category.slug}`
export const servicePath = (category: ServiceCategory, service: ServiceDetail) =>
  `${SERVICES_ROOT}/${category.slug}/${service.slug}`
export const technologyPath = (technology: SecurityTechnology) =>
  `${TECHNOLOGIES_ROOT}/${technology.slug}`

export type ServicePage = {
  path: string
  category: ServiceCategory
  service: ServiceDetail
}

/** Every sub-service page, in menu order. */
export const servicePages: ServicePage[] = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    path: servicePath(category, service),
    category,
    service,
  })),
)

const servicePageByPath = new Map(servicePages.map((page) => [page.path, page]))

export function findServicePage(path: string): ServicePage | undefined {
  return servicePageByPath.get(path)
}

export function findTechnology(slug: string | undefined): SecurityTechnology | undefined {
  return slug ? securityTechnologies.find((technology) => technology.slug === slug) : undefined
}

/** A link shown in menus and card grids. */
export type CatalogLink = {
  href: string
  name: string
  summary: string
}

/** A category's own services followed by its cross-links, for menus and hub pages. */
export function categoryLinks(category: ServiceCategory): CatalogLink[] {
  return [
    ...category.services.map((service) => ({
      href: servicePath(category, service),
      name: service.name,
      summary: service.summary,
    })),
    ...(category.crossLinks ?? []).map((link) => ({ ...link })),
  ]
}

/** Up to `limit` other services from the same category, starting after the current one. */
export function siblingServices(page: ServicePage, limit = 3): CatalogLink[] {
  const { category, service } = page
  const others = category.services.filter((item) => item.slug !== service.slug)
  const start = category.services.findIndex((item) => item.slug === service.slug)
  const rotated = [...others.slice(start), ...others.slice(0, start)]
  return rotated.slice(0, limit).map((item) => ({
    href: servicePath(category, item),
    name: item.name,
    summary: item.summary,
  }))
}

/** Technologies whose related services include this service. */
export function technologiesForService(path: string): SecurityTechnology[] {
  return securityTechnologies.filter((technology) => technology.relatedServices.includes(path))
}

export const catalogStats = {
  categories: serviceCategories.length,
  services: servicePages.length,
  technologies: securityTechnologies.length,
}
