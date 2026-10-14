import { arrow } from '../../../content/icons.js'
import { TechnologyPageConfig } from '../content/technologyPages.js'

export default function Hero({ config }: { config: TechnologyPageConfig }) {
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
              className={'button w-inline-block text-white'}
            >
              <p>{'Request a quote'}</p>
              <img
                src={
                  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg'
                }
                loading={'lazy'}
                alt={''}
                className={'button-arrow inversed'}
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
