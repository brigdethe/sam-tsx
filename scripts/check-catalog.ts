import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import {
  brandImages,
  categoryLinks,
  securityTechnologies,
  serviceCategories,
  servicePages,
} from '../src/content/catalog/index.js'
import { technologyNavItems } from '../src/content/technologyNav.js'
import { siteRoutes } from '../src/sitePages.js'

// The service catalogue drives the menus, pages, sitemap and structured data,
// so a typo there becomes a broken link. Catch it before it ships.
const routes = new Set(siteRoutes)
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const seenCategories = new Set<string>()
for (const category of serviceCategories) {
  assert.match(category.slug, slug, `category slug "${category.slug}"`)
  assert(!seenCategories.has(category.slug), `duplicate category "${category.slug}"`)
  seenCategories.add(category.slug)
  assert(category.services.length > 0, `${category.slug}: has no services`)
  assert.equal(category.approach.length, 4, `${category.slug}: needs 4 approach steps`)
  assert.equal(category.benefits.length, 4, `${category.slug}: needs 4 benefits`)
  if (category.technology) {
    assert(
      securityTechnologies.some((technology) => technology.slug === category.technology),
      `${category.slug}: unknown technology "${category.technology}"`,
    )
  }

  const seenServices = new Set<string>()
  for (const service of category.services) {
    const where = `${category.slug}/${service.slug}`
    assert.match(service.slug, slug, `service slug "${where}"`)
    assert(!seenServices.has(service.slug), `duplicate service "${where}"`)
    seenServices.add(service.slug)
    assert(service.summary.length <= 70, `${where}: summary is over 70 characters`)
    assert(service.points.length >= 4, `${where}: needs at least 4 points`)
    assert.equal(service.capabilities.length, 3, `${where}: needs 3 capabilities`)
    assert.equal(service.deliverables.length, 4, `${where}: needs 4 deliverables`)
  }

  for (const link of categoryLinks(category)) {
    const path = link.href.split('#')[0]!
    assert(routes.has(path), `${category.slug}: menu link ${link.href} has no page`)
  }
}

for (const technology of securityTechnologies) {
  assert.match(technology.slug, slug, `technology slug "${technology.slug}"`)
  for (const path of technology.relatedServices) {
    assert(routes.has(path), `${technology.slug}: related service ${path} has no page`)
  }
}

// Every technology sits under exactly one solution in the Technologies menu.
for (const technology of securityTechnologies) {
  const parents = technologyNavItems.filter((item) => item.technologies?.includes(technology.slug))
  assert.equal(parents.length, 1, `${technology.slug}: must sit under exactly one solution`)
}
for (const item of technologyNavItems) {
  for (const slug of item.technologies ?? []) {
    assert(
      securityTechnologies.some((technology) => technology.slug === slug),
      `${item.label}: unknown technology "${slug}"`,
    )
  }
}

for (const page of servicePages) assert(routes.has(page.path), `${page.path} is not routed`)

for (const [key, image] of Object.entries(brandImages)) {
  assert(existsSync(new URL(`../public${image.src}`, import.meta.url)), `image ${key} is missing`)
}

console.log(
  `Catalogue passed: ${serviceCategories.length} categories, ${servicePages.length} services, ${securityTechnologies.length} technologies`,
)
