import { featureArrow } from '../../../content/icons.js'
import { PartnerPageConfig } from '../content/partnerPages.js'

export default function Categories({ config }: { config: PartnerPageConfig }) {
  return (
    <div className={'page-wrapper is-overflow-hidden'}>
      <section className={'section is-markets-features'}>
        <div className={'w-layout-blockcontainer container market-container w-container'}>
          <div className={'partner-cats-head'}>
            <h2>{config.categoriesTitle}</h2>
            <p className={'is-font-size-body-l is-color-grey-600'}>{config.categoriesIntro}</p>
          </div>
          <div className={'partner-cats-grid'}>
            {config.categories.map((category) => (
              <div className={'partner-cat-card'} key={category.title}>
                <h3 className={'is-font-size-title-m'}>{category.title}</h3>
                <p className={'is-font-size-body-m is-color-grey-600 partner-cat-card__body'}>
                  {category.body}
                </p>
                <div className={'flex-features'}>
                  {category.items.map((item) => (
                    <div className={'flex-feature'} key={item}>
                      <img
                        src={featureArrow}
                        loading={'lazy'}
                        width={'16'}
                        height={'16'}
                        alt={''}
                        className={'arrow-pointer'}
                      />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
