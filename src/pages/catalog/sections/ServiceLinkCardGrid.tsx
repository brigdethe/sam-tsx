import { SectionHead, type LinkCard } from './index.js'

/** An image-free grid of equal-size service cards for a practice area. */
export function ServiceLinkCardGrid({
  eyebrow,
  title,
  intro,
  cards,
  id,
}: {
  eyebrow: string
  title: string
  intro?: string
  cards: LinkCard[]
  id?: string
}) {
  return (
    <section className={'section cat-section cat-service-section'} id={id}>
      <div className={'w-layout-blockcontainer container w-container'}>
        <SectionHead eyebrow={eyebrow} title={title} {...(intro ? { intro } : {})} />
        <ul className={'cat-service-links'}>
          {cards.map((card) => (
            <li key={card.href}>
              <a className={'cat-service-link'} href={card.href}>
                <span className={'cat-service-link__name'}>{card.name}</span>
                <span className={'cat-service-link__summary'}>{card.summary}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
