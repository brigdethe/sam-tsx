import {
  ServiceCtaFooter,
  ServicePageHead,
  ServicePageRuntime,
} from '../components/layout/ServicePageChrome.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import type { TechnologyPageConfig } from '../content/technologyPages.js'

const arrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'
const featureArrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'

function Hero({ config }: { config: TechnologyPageConfig }) {
  return (
    <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
      <section className={'section is-why-flow-hero'}>
        <div className={'hero-media'} aria-hidden={'true'}>
          <img
            className={'hero-media__image'}
            src={config.heroImageSrc}
            alt={''}
            loading={'eager'}
          />
          <div className={'hero-hue-overlay'} />
        </div>
        <div className={'w-layout-blockcontainer container hero-description-container w-container'}>
          <h1 data-w-id={'5688d7d9-6d15-3f37-8131-e8be09b8e9fa'}>
            <span className={'is-color-lime-300'}>
              {config.heroAccent}
              <br />
            </span>
            {config.heroRest}
          </h1>
          <div className={'hero-flex'}>
            <p data-w-id={'cf1d3dc4-a54e-773c-276f-52cfbc4a1929'} className={'hero-description'}>
              {config.heroBody}
            </p>
            <a
              data-w-id={'6edbdcda-b7a6-c67d-3d34-d671091daf17'}
              href={'/get-in-touch'}
              className={'button w-inline-block'}
            >
              <p>{'Request a quote'}</p>
              <img
                src={
                  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg'
                }
                loading={'lazy'}
                alt={''}
                className={'button-arrow'}
              />
            </a>
          </div>
        </div>
      </section>
      <section className={'section is-markets-section'}>
        <div
          data-w-id={'c0474c52-aa42-adbc-dc62-982b53513ae8'}
          className={'w-layout-blockcontainer container is-z-index-2 w-container'}
        >
          <div className={'markets-flex'}>
            <div className={'markets-left'}>
              <h2>{config.overviewTitle}</h2>
              <div className={'markets-description'}>
                <p className={'is-font-size-body-l'}>{config.overviewBody}</p>
              </div>
            </div>
            <div className={'markets-right'}>
              <div className={'flex-features'}>
                {config.overviewPoints.map((point) => (
                  <div className={'flex-feature'} key={point}>
                    <img
                      src={arrow}
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
    </div>
  )
}

function Features({ config }: { config: TechnologyPageConfig }) {
  return (
    <div className={'page-wrapper is-overflow-hidden'}>
      <section className={'section is-markets-features'}>
        <div className={'w-layout-blockcontainer container market-container w-container'}>
          {config.featureBlocks.map((block, index) => {
            const isLast = index === config.featureBlocks.length - 1
            const imageFirst = block.imageFirst ?? index % 2 === 0
            const picture = (
              <div className={'rounded-feature-picture'}>
                <img
                  src={block.imageSrc}
                  loading={'lazy'}
                  alt={block.imageAlt}
                  className={'rounded-feature-img'}
                />
              </div>
            )
            const copy = (
              <div className={'info-feature-desc'}>
                <h3 className={'is-space-24 is-md-space-16'}>{block.title}</h3>
                <p className={'is-font-size-body-m is-space-32 is-md-space-24'}>{block.body}</p>
                <div className={'flex-features'}>
                  {block.points.map((point) => (
                    <div className={'flex-feature'} key={point}>
                      <img
                        src={featureArrow}
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
            )
            return (
              <div
                className={isLast ? 'info-feature-flex last-flex' : 'info-feature-flex'}
                key={block.title}
              >
                {imageFirst ? (
                  <>
                    {picture}
                    {copy}
                  </>
                ) : (
                  <>
                    {copy}
                    {picture}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export function TechnologyServiceDocument({ config }: { config: TechnologyPageConfig }) {
  return (
    <SiteDocument
      currentPath={config.path}
      pageId={config.pageId}
      head={<ServicePageHead title={config.title} description={config.description} />}
      runtime={<ServicePageRuntime />}
    >
      <Hero config={config} />
      <Features config={config} />
      <ServiceCtaFooter accent={config.ctaAccent} rest={config.ctaRest} body={config.ctaBody} />
    </SiteDocument>
  )
}
