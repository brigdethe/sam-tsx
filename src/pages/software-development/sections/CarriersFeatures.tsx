export default function CarriersFeatures() {
  return (
    <div className={'page-wrapper is-overflow-hidden'}>
      <section className={'section is-markets-features'}>
        <div className={'w-layout-blockcontainer container market-container w-container'}>
          <div className={'info-feature-flex'}>
            <div className={'rounded-feature-picture'}>
              <img
                src={'/images/brand/developer-woman-christina-morillo-1181359.jpg'}
                loading={'lazy'}
                alt={'Software developer writing and reviewing application code'}
                className={'rounded-feature-img'}
              />
            </div>
            <div className={'info-feature-desc'}>
              <h3 className={'is-space-24 is-md-space-16'}>{'Custom applications'}</h3>
              <p className={'is-font-size-body-m is-space-32 is-md-space-24'}>
                {
                  'Purpose-built apps for internal operations or customer-facing work, sized to your timeline and budget.'
                }
              </p>
              <div className={'flex-features'}>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>{'Cross-platform delivery for Windows, macOS, Linux, iOS and Android'}</p>
                </div>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>{'Support and maintenance packages after launch'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'info-feature-flex'}>
            <div className={'info-feature-desc'}>
              <h3 className={'is-space-24'}>{'Websites and portals'}</h3>
              <p className={'is-font-size-body-m is-space-32'}>
                {
                  'Corporate sites, content systems, payment flows and hosting arrangements that are ready for day-to-day use by your team and customers.'
                }
              </p>
              <div className={'flex-features'}>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>{'CMS and customer portal options when content teams need control'}</p>
                </div>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>
                    {'Indicative timelines from simple sites in weeks to complex apps over months'}
                  </p>
                </div>
              </div>
            </div>
            <div className={'rounded-feature-picture'}>
              <img
                src={'/images/brand/software-collaboration-mizuno-k-12899191.jpg'}
                loading={'lazy'}
                alt={'Developers reviewing code together'}
                className={'rounded-feature-img'}
              />
            </div>
          </div>
          <div className={'info-feature-flex last-flex'}>
            <div className={'rounded-feature-picture'}>
              <img
                src={'/images/brand/accra-tech-mentoring-zeal-33920051.jpg'}
                loading={'lazy'}
                alt={'Students receiving hands-on technology mentoring in Accra'}
                className={'rounded-feature-img'}
              />
            </div>
            <div className={'info-feature-desc'}>
              <h3 className={'is-space-24'}>{'Integration and support'}</h3>
              <p className={'is-font-size-body-m is-space-32'}>
                {'Connect new software to the databases and third-party tools you already run.'}
                <br />
                <br />
                {
                  'Then keep it maintained as your processes change, with clear ownership after go-live.'
                }
              </p>
              <div className={'flex-features'}>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>{'APIs and data flows that reduce silos between systems'}</p>
                </div>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>{'Hosting, cloud deployment and iterative improvements'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
