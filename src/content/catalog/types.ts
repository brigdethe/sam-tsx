import type { IconName } from './icons.js'
import type { ImageKey } from './images.js'

/** A titled point: a capability, an approach step or a benefit. */
export type Highlight = { title: string; body: string }

/** One sub-service, rendered at /services/<category>/<slug>. */
export type ServiceDetail = {
  slug: string
  name: string
  /** One line for menus and cards (keep under ~70 characters). */
  summary: string
  /** Second line of the hero heading, after the service name. */
  tagline: string
  heroBody: string
  overviewBody: string
  /** What the engagement covers (4–5 items). */
  points: string[]
  /** What's included (3 items). */
  capabilities: Highlight[]
  /** What the client receives at the end (4 items). */
  deliverables: string[]
  /** Search keywords for the page description, when they add something. */
  keywords?: string[]
}

/** A menu entry that points at a page owned elsewhere (another category or an existing page). */
export type ServiceCrossLink = {
  name: string
  summary: string
  href: string
}

export type ServiceCategory = {
  slug: string
  name: string
  /** One line for the menu rail and category cards. */
  summary: string
  icon: IconName
  tagline: string
  heroBody: string
  overviewBody: string
  approach: Highlight[]
  benefits: Highlight[]
  /** Hero, feature and alternate photography for the category's pages. */
  images: [ImageKey, ImageKey, ImageKey]
  /** The matching page under /technologies, if there is one. */
  technology?: string
  services: ServiceDetail[]
  /** Listed in the menu after the category's own services. */
  crossLinks?: ServiceCrossLink[]
}

/** One technology domain, rendered at /technologies/<slug>. */
export type SecurityTechnology = {
  slug: string
  name: string
  summary: string
  icon: IconName
  tagline: string
  heroBody: string
  overviewBody: string
  points: string[]
  capabilities: Highlight[]
  /** Technology categories we design, deploy and run in this domain. */
  stack: string[]
  /** Service paths (/services/...) that deliver this technology. */
  relatedServices: string[]
  images: [ImageKey, ImageKey]
}
