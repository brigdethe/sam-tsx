import { featureArrow } from '../../../content/icons.js'
import { TechnologyPageConfig } from '../content/technologyPages.js'

export default function Features({ config }: { config: TechnologyPageConfig }) {
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
