import type { ReactNode } from 'react'
import {
  ServiceCtaFooter,
  ServicePageHead,
  ServicePageRuntime,
} from '../components/layout/ServicePageChrome.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import {
  ApproachFeature,
  CapabilityCards,
  CatalogHero,
  CatalogOverview,
  LinkCardGrid,
  OutcomesSection,
  StackTags,
  type Crumb,
  type LinkCard,
} from '../components/sections/CatalogSections.js'
import {
  SERVICES_ROOT,
  TECHNOLOGIES_ROOT,
  categoryLinks,
  categoryPath,
  findServicePage,
  findTechnology,
  securityTechnologies,
  serviceCategories,
  siblingServices,
  technologiesForService,
  technologyPath,
  type IconName,
  type SecurityTechnology,
  type ServiceCategory,
  type ServicePage,
} from '../content/catalog/index.js'
import { parentSolution, technologyNavItems } from '../content/technologyNav.js'

const PAGE_ID = 'maddy-catalog'
const home: Crumb = { href: '/', label: 'Home' }
const servicesCrumb: Crumb = { href: SERVICES_ROOT, label: 'Services' }
const technologiesCrumb: Crumb = { href: TECHNOLOGIES_ROOT, label: 'Technologies' }

export const pageTitle = (name: string) => `${name} | Maddy Group Ltd`

function technologyCard(technology: SecurityTechnology, meta?: string): LinkCard {
  return {
    href: technologyPath(technology),
    name: technology.name,
    summary: technology.summary,
    icon: technology.icon,
    ...(meta ? { meta } : {}),
  }
}

/** Up to six cards, trimmed to whole rows of three when there are enough. */
function fillRows<T>(cards: T[]): T[] {
  const count = Math.min(6, cards.length)
  return cards.slice(0, count >= 3 ? count - (count % 3) : count)
}

/** The next `count` items after `index`, wrapping round. */
function following<T>(items: T[], index: number, count: number): T[] {
  const out: T[] = []
  for (let step = 1; step <= Math.min(count, items.length - 1); step++) {
    out.push(items[(index + step) % items.length]!)
  }
  return out
}

function CatalogDocument({
  path,
  title,
  description,
  children,
}: {
  path: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <SiteDocument
      currentPath={path}
      pageId={PAGE_ID}
      head={<ServicePageHead title={title} description={description} />}
      runtime={<ServicePageRuntime />}
    >
      {children}
    </SiteDocument>
  )
}

/** A technology's breadcrumb parent: the solution it sits under in the menu. */
function solutionCrumb(technology: SecurityTechnology): Crumb {
  const solution = parentSolution(technology.slug)
  return solution ? { href: solution.href, label: solution.label } : technologiesCrumb
}

/* ---------------------------------------------------------------- service */

export function ServiceDetailDocument({ page }: { page: ServicePage }) {
  const { category, service, path } = page
  const [heroImage, featureImage] = category.images
  const siblings = siblingServices(page, 6).map((link) => ({
    ...link,
    icon: category.icon,
    meta: category.name,
  }))
  const technologies = technologiesForService(path)
  const fallbackTechnology = findTechnology(category.technology)
  const technologyCards = (
    technologies.length ? technologies : fallbackTechnology ? [fallbackTechnology] : []
  ).map((technology) => technologyCard(technology, 'Technology'))

  return (
    <CatalogDocument path={path} title={pageTitle(service.name)} description={service.heroBody}>
      <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
        <CatalogHero
          crumbs={[home, servicesCrumb, { href: categoryPath(category), label: category.name }]}
          current={service.name}
          icon={category.icon}
          accent={`${service.name} `}
          rest={service.tagline}
          body={service.heroBody}
          image={heroImage}
        />
        <CatalogOverview
          title={'How we help'}
          body={service.overviewBody}
          points={service.points}
        />
      </div>
      <div className={'page-wrapper is-overflow-hidden'}>
        <CapabilityCards
          eyebrow={'What’s included'}
          title={'Built around your environment'}
          intro={`Every ${service.name} engagement is scoped to your systems, risks and team, with clear outcomes agreed before work starts.`}
          items={service.capabilities}
          icon={category.icon}
        />
        <ApproachFeature
          title={'A clear path from scope to results'}
          body={category.overviewBody}
          steps={category.approach}
          image={featureImage}
        />
        <OutcomesSection
          deliverables={service.deliverables}
          benefits={category.benefits}
          benefitsTitle={'Why it matters'}
        />
        <LinkCardGrid
          eyebrow={'Keep exploring'}
          title={`More in ${category.name}`}
          cards={fillRows([...technologyCards.slice(0, 2), ...siblings])}
        />
      </div>
      <ServiceCtaFooter
        accent={'Ready to discuss '}
        rest={service.name}
        body={
          'Tell us about your environment, timelines and goals. We will come back with a clear scope and quote.'
        }
      />
    </CatalogDocument>
  )
}

/* --------------------------------------------------------------- category */

export function ServiceCategoryDocument({ category }: { category: ServiceCategory }) {
  const path = categoryPath(category)
  const index = serviceCategories.indexOf(category)
  const [heroImage, featureImage] = category.images
  const cards: LinkCard[] = categoryLinks(category).map((link, position) => ({
    ...link,
    icon: category.icon,
    meta: String(position + 1).padStart(2, '0'),
  }))
  const technology = findTechnology(category.technology)
  const others: LinkCard[] = following(serviceCategories, index, technology ? 2 : 3).map(
    (other) => ({
      href: categoryPath(other),
      name: other.name,
      summary: other.summary,
      icon: other.icon,
      meta: 'Practice area',
    }),
  )

  return (
    <CatalogDocument path={path} title={pageTitle(category.name)} description={category.heroBody}>
      <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
        <CatalogHero
          crumbs={[home, servicesCrumb]}
          current={category.name}
          icon={category.icon}
          accent={`${category.name} `}
          rest={category.tagline}
          body={category.heroBody}
          image={heroImage}
        />
        <CatalogOverview
          title={'Why it matters'}
          body={category.overviewBody}
          points={category.benefits.map((benefit) => `${benefit.title}: ${benefit.body}`)}
        />
      </div>
      <div className={'page-wrapper is-overflow-hidden'}>
        <LinkCardGrid
          id={'services'}
          eyebrow={'Services'}
          title={`${category.name} services`}
          intro={
            category.summary + '. Choose a service to see what it covers and what you receive.'
          }
          cards={cards}
        />
        <ApproachFeature
          title={'How every engagement runs'}
          body={'The same disciplined approach, whichever service you choose.'}
          steps={category.approach}
          image={featureImage}
        />
        <LinkCardGrid
          eyebrow={'Keep exploring'}
          title={'Related areas'}
          cards={[...(technology ? [technologyCard(technology, 'Technology')] : []), ...others]}
          tinted
        />
      </div>
      <ServiceCtaFooter
        accent={'Ready to strengthen '}
        rest={category.name}
        body={'Tell us what you need protected. We will come back with a clear scope and quote.'}
      />
    </CatalogDocument>
  )
}

/* ------------------------------------------------------------- technology */

export function SecurityTechnologyDocument({ technology }: { technology: SecurityTechnology }) {
  const path = technologyPath(technology)
  const index = securityTechnologies.indexOf(technology)
  const [heroImage] = technology.images
  const services: LinkCard[] = technology.relatedServices.flatMap((servicePath) => {
    const page = findServicePage(servicePath)
    return page
      ? [
          {
            href: page.path,
            name: page.service.name,
            summary: page.service.summary,
            icon: page.category.icon,
            meta: page.category.name,
          },
        ]
      : []
  })
  const others = following(securityTechnologies, index, 3).map((other) => technologyCard(other))

  return (
    <CatalogDocument
      path={path}
      title={pageTitle(technology.name)}
      description={technology.heroBody}
    >
      <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
        <CatalogHero
          crumbs={[home, solutionCrumb(technology)]}
          current={technology.name}
          icon={technology.icon}
          accent={`${technology.name} `}
          rest={technology.tagline}
          body={technology.heroBody}
          image={heroImage}
        />
        <CatalogOverview
          title={'What we deploy'}
          body={technology.overviewBody}
          points={technology.points}
          aside={<StackTags title={'Technology categories'} tags={technology.stack} />}
        />
      </div>
      <div className={'page-wrapper is-overflow-hidden'}>
        <CapabilityCards
          eyebrow={'Capabilities'}
          title={'Designed, deployed and run by our engineers'}
          intro={
            'We select technology on merit, configure it for your environment and stay with you to operate and improve it.'
          }
          items={technology.capabilities}
          icon={technology.icon}
        />
        <LinkCardGrid
          eyebrow={'Services'}
          title={'Services that deliver it'}
          cards={services}
          tinted
        />
        <LinkCardGrid eyebrow={'Keep exploring'} title={'Other technologies'} cards={others} />
      </div>
      <ServiceCtaFooter
        accent={'Ready to deploy '}
        rest={technology.name}
        body={'Tell us what you run today and where you want to be. We will come back with a plan.'}
      />
    </CatalogDocument>
  )
}

/* ------------------------------------------------------- technologies hub */

const solutionIcons: Record<string, IconName> = {
  '/cybersecurity-services': 'shield',
  '/software-development': 'code2',
  '/software-products': 'grid',
  '/iot-smart-cards': 'card',
  '/uav': 'drone',
  '/ict-procurement': 'cart',
  '/training': 'graduation',
}

const solutionSummaries: Record<string, string> = {
  '/cybersecurity-services': 'Penetration tests and vulnerability assessments',
  '/software-development': 'Custom software, websites, portals and integrations',
  '/software-products': 'Maddy Memo, Security Ops, MaddyOps and MaddyCMS',
  '/iot-smart-cards': 'Sensor networks, smart cards and secure access',
  '/uav': 'Aerial surveillance, mapping and inspection',
  '/ict-procurement': 'Equipment sourcing and software licensing',
  '/training': 'Cybersecurity training for staff and partners',
}

export function TechnologiesHubDocument() {
  const technologies = securityTechnologies.map((technology) => technologyCard(technology))
  const solutions: LinkCard[] = technologyNavItems.map((item) => ({
    href: item.href,
    name: item.label,
    summary: solutionSummaries[item.href] ?? '',
    icon: solutionIcons[item.href] ?? 'shield',
    meta: 'Maddy solution',
  }))

  return (
    <CatalogDocument
      path={TECHNOLOGIES_ROOT}
      title={pageTitle('Technologies')}
      description={
        'Security technologies Maddy Group designs, deploys and runs: SOC, data, endpoint, email, network, cloud, application and identity security, incident response and vulnerability management.'
      }
    >
      <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
        <CatalogHero
          crumbs={[home]}
          current={'Technologies'}
          accent={'Security technology '}
          rest={'that works together'}
          body={
            'Eleven technology domains, selected on merit, configured for your environment and operated by engineers in Accra.'
          }
          image={'serverRack'}
        />
        <CatalogOverview
          title={'One team, every layer'}
          body={
            'Tools only protect you when they are chosen well, configured properly and watched every day. We cover the full security stack and connect it, so signals from one layer strengthen the others.'
          }
          points={[
            'Vendor-neutral selection and proof-of-concept testing',
            'Design, deployment and tuning by our engineers',
            'Integration with your SOC, IT and development workflows',
            'Ongoing operation, reporting and improvement',
          ]}
        />
      </div>
      <div className={'page-wrapper is-overflow-hidden'}>
        <LinkCardGrid
          eyebrow={'Security technologies'}
          title={'Explore by domain'}
          cards={technologies}
        />
        <LinkCardGrid
          eyebrow={'Maddy solutions'}
          title={'Beyond cybersecurity'}
          intro={
            'Software, connected devices, aerial operations, procurement and training from the same team.'
          }
          cards={solutions}
          tinted
        />
      </div>
      <ServiceCtaFooter
        accent={'Ready to '}
        rest={'plan your stack'}
        body={'Tell us what you run today and where you want to be. We will come back with a plan.'}
      />
    </CatalogDocument>
  )
}
