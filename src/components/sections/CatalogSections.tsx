import type { ReactNode } from 'react'
import type { IconName } from '../../content/catalog/icons.js'
import { brandImages, type Highlight, type ImageKey } from '../../content/catalog/index.js'
import { ArrowRightIcon } from '../ui/ArrowFill.js'
import { CatalogIcon } from '../ui/CatalogIcon.js'

/* Building blocks for the catalogue pages (sub-services, practice areas and
   technologies). The hero, overview, feature and CTA sections reuse the classes
   of the existing technology pages so every page shares one look; the card,
   step and tag sections below add the extra structure a service page needs. */

const buttonArrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg'
const pointArrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'

export type Crumb = { href: string; label: string }

function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function CatalogHero({
  crumbs,
  current,
  accent,
  rest,
  body,
  image,
  icon,
}: {
  crumbs: Crumb[]
  current: string
  accent: string
  rest: string
  body: string
  image: ImageKey
  icon?: IconName
}) {
  return (
    <section className={'section is-why-flow-hero cat-hero'}>
      <div className={'hero-media'} aria-hidden={'true'}>
        <img
          className={'hero-media__image'}
          src={brandImages[image].src}
          alt={''}
          loading={'eager'}
        />
        <div className={'hero-hue-overlay'} />
      </div>
      <div className={'w-layout-blockcontainer container hero-description-container w-container'}>
        <nav className={'cat-crumbs'} aria-label={'Breadcrumb'}>
          <ol>
            {crumbs.map((crumb) => (
              <li key={crumb.href}>
                <a href={crumb.href}>{crumb.label}</a>
              </li>
            ))}
            <li aria-current={'page'}>
              {icon ? <CatalogIcon name={icon} className={'cat-crumbs__icon'} /> : null}
              {current}
            </li>
          </ol>
        </nav>
        <h1 data-w-id={'5688d7d9-6d15-3f37-8131-e8be09b8e9fa'}>
          <span className={'is-color-lime-300'}>
            {accent}
            <br />
          </span>
          {rest}
        </h1>
        <div className={'hero-flex'}>
          <p data-w-id={'cf1d3dc4-a54e-773c-276f-52cfbc4a1929'} className={'hero-description'}>
            {body}
          </p>
          <a
            data-w-id={'6edbdcda-b7a6-c67d-3d34-d671091daf17'}
            href={'/get-in-touch'}
            className={'button w-inline-block'}
          >
            <p>{'Request a quote'}</p>
            <img src={buttonArrow} loading={'lazy'} alt={''} className={'button-arrow'} />
          </a>
        </div>
      </div>
    </section>
  )
}

export function CatalogOverview({
  title,
  body,
  points,
  aside,
}: {
  title: string
  body: string
  points: string[]
  aside?: ReactNode
}) {
  return (
    <section className={'section is-markets-section'}>
      <div
        data-w-id={'c0474c52-aa42-adbc-dc62-982b53513ae8'}
        className={'w-layout-blockcontainer container is-z-index-2 w-container'}
      >
        <div className={'markets-flex'}>
          <div className={'markets-left'}>
            <h2>{title}</h2>
            <div className={'markets-description'}>
              <p className={'is-font-size-body-l'}>{body}</p>
            </div>
            {aside}
          </div>
          <div className={'markets-right'}>
            <div className={'flex-features'}>
              {points.map((point) => (
                <div className={'flex-feature'} key={point}>
                  <img
                    src={pointArrow}
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={'maddy-section-backdrop'} aria-hidden={'true'} />
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <div className={'cat-head'}>
      <p className={'cat-eyebrow'}>{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className={'is-font-size-body-m cat-head__intro'}>{intro}</p> : null}
    </div>
  )
}

/** Numbered capability cards. */
export function CapabilityCards({
  eyebrow,
  title,
  intro,
  items,
  icon,
}: {
  eyebrow: string
  title: string
  intro?: string
  items: Highlight[]
  icon?: IconName
}) {
  return (
    <section className={'section cat-section'}>
      <div className={'w-layout-blockcontainer container w-container'}>
        <SectionHead eyebrow={eyebrow} title={title} {...(intro ? { intro } : {})} />
        <ol className={'cat-cards'}>
          {items.map((item, index) => (
            <li className={'cat-card'} key={item.title}>
              <div className={'cat-card__top'}>
                {icon ? (
                  <span className={'cat-card__icon'}>
                    <CatalogIcon name={icon} />
                  </span>
                ) : null}
                <span className={'cat-card__index'}>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={'cat-card__title'}>{item.title}</h3>
              <p className={'cat-card__body'}>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** Photo beside a numbered list of steps (the delivery approach). */
export function ApproachFeature({
  title,
  body,
  steps,
  image,
}: {
  title: string
  body: string
  steps: Highlight[]
  image: ImageKey
}) {
  return (
    <section className={'section cat-section is-approach'}>
      <div className={'w-layout-blockcontainer container w-container'}>
        <div className={'cat-approach'}>
          <div className={'rounded-feature-picture cat-approach__picture'}>
            <img
              src={brandImages[image].src}
              loading={'lazy'}
              alt={brandImages[image].alt}
              className={'rounded-feature-img'}
            />
          </div>
          <div className={'cat-approach__copy'}>
            <p className={'cat-eyebrow'}>{'How we deliver'}</p>
            <h2>{title}</h2>
            <p className={'is-font-size-body-m cat-head__intro'}>{body}</p>
            <ol className={'cat-steps'}>
              {steps.map((step, index) => (
                <li className={'cat-step'} key={step.title}>
                  <span className={'cat-step__num'} aria-hidden={'true'}>
                    {index + 1}
                  </span>
                  <div>
                    <h3 className={'cat-step__title'}>{step.title}</h3>
                    <p className={'cat-step__body'}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

/** "What you receive" checklist beside benefit tiles. */
export function OutcomesSection({
  deliverables,
  benefits,
  benefitsTitle,
}: {
  deliverables: string[]
  benefits: Highlight[]
  benefitsTitle: string
}) {
  return (
    <section className={'section cat-section is-tinted'}>
      <div className={'w-layout-blockcontainer container w-container'}>
        <div className={'cat-outcomes'}>
          <div className={'cat-deliverables'}>
            <p className={'cat-eyebrow'}>{'Deliverables'}</p>
            <h2>{'What you receive'}</h2>
            <ul className={'cat-checks'}>
              {deliverables.map((item) => (
                <li key={item}>
                  <CheckIcon className={'cat-checks__icon'} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={'cat-benefits'}>
            <p className={'cat-eyebrow'}>{'Outcomes'}</p>
            <h2>{benefitsTitle}</h2>
            <div className={'cat-benefits__grid'}>
              {benefits.map((benefit) => (
                <div className={'cat-benefit'} key={benefit.title}>
                  <h3 className={'cat-benefit__title'}>{benefit.title}</h3>
                  <p className={'cat-benefit__body'}>{benefit.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export type LinkCard = {
  href: string
  name: string
  summary: string
  icon?: IconName
  meta?: string
}

/** A grid of linked cards (services in an area, related services, technologies). */
export function LinkCardGrid({
  eyebrow,
  title,
  intro,
  cards,
  tinted = false,
  id,
}: {
  eyebrow: string
  title: string
  intro?: string
  cards: LinkCard[]
  tinted?: boolean
  id?: string
}) {
  return (
    <section className={`section cat-section${tinted ? ' is-tinted' : ''}`} id={id}>
      <div className={'w-layout-blockcontainer container w-container'}>
        <SectionHead eyebrow={eyebrow} title={title} {...(intro ? { intro } : {})} />
        {/* Four cards read better as two rows of two than three and one. */}
        <ul className={cards.length === 4 ? 'cat-links is-two-up' : 'cat-links'}>
          {cards.map((card) => (
            <li key={card.href}>
              <a className={'cat-link'} href={card.href}>
                {card.icon ? (
                  <span className={'cat-link__icon'}>
                    <CatalogIcon name={card.icon} />
                  </span>
                ) : null}
                <span className={'cat-link__text'}>
                  {card.meta ? <span className={'cat-link__meta'}>{card.meta}</span> : null}
                  <span className={'cat-link__name'}>{card.name}</span>
                  <span className={'cat-link__summary'}>{card.summary}</span>
                </span>
                <span className={'cat-link__arrow'} aria-hidden={'true'}>
                  <ArrowRightIcon className={'cat-link__arrow-svg'} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Technology categories shown as tags. */
export function StackTags({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className={'cat-stack'}>
      <p className={'cat-stack__title'}>{title}</p>
      <ul className={'cat-tags'}>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
