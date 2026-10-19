import { useId } from 'react'
import { findServicePage } from '../content/index.js'
import { SectionHead, type LinkCard } from './index.js'

export function ServiceLinkCardGrid({
  title,
  intro,
  cards,
  id,
}: {
  eyebrow?: string
  title: string
  intro?: string
  cards: LinkCard[]
  id?: string
}) {
  const layoutId = useId()

  return (
    <>
      <section className={'section cat-section cat-service-section'} id={id}>
        <div className={'w-layout-blockcontainer container w-container'}>
          <SectionHead title={title} {...(intro ? { intro } : {})} />
          <div className={'cat-service-layout'} id={layoutId}>
            <ul className={'cat-service-links'}>
              {cards.map((card, index) => {
                const panelId = `${layoutId}-panel-${index}`
                const serviceIndex = String(index)

                return (
                  <li key={card.href}>
                    <a
                      aria-controls={panelId}
                      aria-expanded={false}
                      className={'cat-service-link'}
                      data-no-page-transition={true}
                      data-service-index={serviceIndex}
                      href={card.href}
                    >
                      <span className={'cat-service-link__name'}>{card.name}</span>
                      <span className={'cat-service-link__summary'}>{card.summary}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            {cards.map((card, index) => {
              const service = findServicePage(card.href)?.service

              return (
                <aside
                  aria-labelledby={`${layoutId}-title-${index}`}
                  aria-live={'polite'}
                  className={'cat-service-detail'}
                  data-service-index={String(index)}
                  hidden={true}
                  id={`${layoutId}-panel-${index}`}
                  key={card.href}
                >
                  <button
                    aria-label={'Close service details'}
                    className={'cat-service-detail__close'}
                    data-service-close={true}
                    type={'button'}
                  >
                    <span aria-hidden={'true'}>{'×'}</span>
                  </button>
                  <h3 className={'cat-service-detail__title'} id={`${layoutId}-title-${index}`}>
                    {card.name}
                  </h3>
                  <p className={'cat-service-detail__summary'}>{card.summary}</p>
                  {service ? (
                    <div className={'cat-service-detail__content'}>
                      <section>
                        <h4>{'Overview'}</h4>
                        <p>{service.overviewBody}</p>
                      </section>
                      <section>
                        <h4>{'What we cover'}</h4>
                        <ul>
                          {service.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h4>{'Capabilities'}</h4>
                        <ul>
                          {service.capabilities.map((capability) => (
                            <li key={capability.title}>
                              <strong>{capability.title}:</strong> {capability.body}
                            </li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h4>{'What you receive'}</h4>
                        <ul>
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable}>{deliverable}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  ) : null}
                </aside>
              )
            })}
          </div>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `(() => {
            const layout = document.getElementById(${JSON.stringify(layoutId)});
            if (!layout) return;
            const cards = Array.from(layout.querySelectorAll('.cat-service-link'));
            const panels = Array.from(layout.querySelectorAll('.cat-service-detail'));
            const captureCardPositions = () => new Map(cards.map((card) => [
              card.parentElement,
              card.parentElement.getBoundingClientRect()
            ]));
            const animateCardPositions = (previousPositions) => {
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
              cards.forEach((card) => {
                const item = card.parentElement;
                const previous = previousPositions.get(item);
                if (!previous) return;
                const current = item.getBoundingClientRect();
                const x = previous.left - current.left;
                const y = previous.top - current.top;
                if (!x && !y) return;
                item.animate(
                  [{ transform: 'translate(' + x + 'px, ' + y + 'px)' }, { transform: 'translate(0, 0)' }],
                  { duration: 400, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
                );
              });
            };
            const selectService = (index) => {
              const previousPositions = captureCardPositions();
              layout.classList.toggle('is-selected', index !== null);
              cards.forEach((card) => {
                const selected = card.dataset.serviceIndex === index;
                card.classList.toggle('is-selected', selected);
                card.setAttribute('aria-expanded', String(selected));
              });
              panels.forEach((panel) => {
                panel.hidden = panel.dataset.serviceIndex !== index;
              });
              animateCardPositions(previousPositions);
            };
            layout.addEventListener('click', (event) => {
              if (!(event.target instanceof Element)) return;
              const card = event.target.closest('.cat-service-link');
              if (card && layout.contains(card)) {
                event.preventDefault();
                selectService(card.dataset.serviceIndex ?? null);
                return;
              }
              if (event.target.closest('[data-service-close]')) {
                const selected = cards.find((item) => item.getAttribute('aria-expanded') === 'true');
                selectService(null);
                selected?.focus();
              }
            });
            layout.addEventListener('keydown', (event) => {
              if (event.key !== 'Escape' || !layout.classList.contains('is-selected')) return;
              const selected = cards.find((item) => item.getAttribute('aria-expanded') === 'true');
              selectService(null);
              selected?.focus();
            });
          })();`,
        }}
      />
    </>
  )
}
