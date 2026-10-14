export default function ProductsHero() {
  return (
    <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
      <section className={'section is-products-hero'}>
        <div className={'hero-media'} aria-hidden={'true'}>
          <img
            className={'hero-media__image'}
            src={'/images/brand/accra-growth-prince-enos-31800284.jpg'}
            alt={''}
            loading={'eager'}
          />
          <div className={'hero-hue-overlay'} />
        </div>
        <div className={'w-layout-blockcontainer container hero-description-container w-container'}>
          <div className={'max-width _820px'}>
            <h1
              data-w-id={'5688d7d9-6d15-3f37-8131-e8be09b8e9fa'}
              className={'is-mobile-hero-title'}
            >
              {'Our '}
              <span className={'is-color-lime-300'}>{'services'}</span>
              {' for secure '}
              <span className={'is-color-lime-300'}>{'growth'}</span>
            </h1>
          </div>
          <div className={'hero-flex'}>
            <p
              data-w-id={'cf1d3dc4-a54e-773c-276f-52cfbc4a1929'}
              className={'hero-description extended-h-description'}
            >
              {
                'Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training for organisations in Ghana. Pricing is by quote.'
              }
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
      <section className={'section is-products-logos'}>
        <div
          data-w-id={'c0474c52-aa42-adbc-dc62-982b53513ae8'}
          className={'w-layout-blockcontainer container is-z-index-2 w-container'}
        >
          <h4>{'Technology partners'}</h4>
          <div className={'logo-loop'}>
            {[0, 1, 2].map((loopIndex) => (
              <div className={'logo-loop-container'} key={loopIndex}>
                <div className={'looped-logo dark-looped'}>
                  <img
                    src={
                      'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/CrowdStrike_logo.svg'
                    }
                    loading={'lazy'}
                    alt={'CrowdStrike'}
                    className={'logo-loop-image bigger'}
                  />
                </div>
                <div className={'looped-logo dark-looped'}>
                  <img
                    src={
                      'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/McAfee_logo.svg'
                    }
                    loading={'lazy'}
                    alt={'McAfee'}
                    className={'logo-loop-image bigger'}
                  />
                </div>
                <div className={'looped-logo dark-looped'}>
                  <img
                    src={
                      'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/cisco-ar21.svg'
                    }
                    loading={'lazy'}
                    alt={'Cisco'}
                    className={'logo-loop-image bigger'}
                  />
                </div>
                <div className={'looped-logo dark-looped'}>
                  <img
                    src={
                      'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/awsbadge.png'
                    }
                    loading={'lazy'}
                    alt={'Amazon Web Services'}
                    className={'logo-loop-image bigger'}
                  />
                </div>
                <div className={'looped-logo dark-looped'}>
                  <img
                    src={
                      'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googlecloudbadge.png'
                    }
                    loading={'lazy'}
                    alt={'Google Cloud'}
                    className={'logo-loop-image bigger'}
                  />
                </div>
                <div className={'looped-logo dark-looped'}>
                  <img
                    src={
                      'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googleworkspacebadge.png'
                    }
                    loading={'lazy'}
                    alt={'Google Workspace'}
                    className={'logo-loop-image bigger'}
                  />
                </div>
                <div className={'looped-logo dark-looped'}>
                  <img
                    src={
                      'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/ibm.webp'
                    }
                    loading={'lazy'}
                    alt={'IBM'}
                    className={'logo-loop-image bigger'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={'maddy-section-backdrop'} aria-hidden={'true'} />
      </section>
    </div>
  )
}
