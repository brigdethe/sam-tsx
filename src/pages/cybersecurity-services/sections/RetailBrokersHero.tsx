export default function RetailBrokersHero() {
  return (
    <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
      <section className={'section is-why-flow-hero'}>
        <div className={'hero-media'} aria-hidden={'true'}>
          <video
            className={'hero-media__video'}
            autoPlay
            loop
            muted
            playsInline
            preload={'auto'}
            poster={'/images/thunder-poster.jpg'}
          >
            <source src={'/images/thunder.webm'} type={'video/webm'} />
            <source src={'/images/thunder.mp4'} type={'video/mp4'} />
          </video>
          <div className={'hero-hue-overlay'} />
        </div>
        <div className={'w-layout-blockcontainer container hero-description-container w-container'}>
          <h1 data-w-id={'5688d7d9-6d15-3f37-8131-e8be09b8e9fa'}>
            <span className={'is-color-lime-300'}>
              {'Security assessment '}
              <br />
            </span>
            {'that finds real risk'}
          </h1>
          <div className={'hero-flex'}>
            <p data-w-id={'cf1d3dc4-a54e-773c-276f-52cfbc4a1929'} className={'hero-description'}>
              {
                'Penetration testing, vulnerability assessments and continuous testing options for organisations in Ghana. We show how an attacker could move through your systems, then help you close the gaps.'
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
      <section className={'section is-markets-section'}>
        <div
          data-w-id={'c0474c52-aa42-adbc-dc62-982b53513ae8'}
          className={'w-layout-blockcontainer container is-z-index-2 w-container'}
        >
          <div className={'markets-flex'}>
            <div className={'markets-left'}>
              <h2>{'What we assess'}</h2>
              <div className={'markets-description'}>
                <p className={'is-font-size-body-l'}>
                  {
                    'From one-off penetration tests to ongoing vulnerability management, we help you see weaknesses before someone else does. Work aligns to ISO 27001, NIST, CIS, OWASP, the Ghana Data Protection Act (Act 843) and the Cyber Security Act, 2020 (Act 1038).'
                  }
                </p>
              </div>
            </div>
            <div className={'markets-right'}>
              <div className={'flex-features'}>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>
                    {
                      'Penetration testing and vulnerability assessments, including continuous testing options'
                    }
                  </p>
                </div>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>{'Managed SOC monitoring and vulnerability management as a service'}</p>
                </div>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>
                    {'Phishing simulation, breach and attack simulation, and security training'}
                  </p>
                </div>
                <div className={'flex-feature'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'
                    }
                    loading={'lazy'}
                    width={'16'}
                    height={'16'}
                    alt={''}
                    className={'arrow-pointer'}
                  />
                  <p>
                    {'Identity, cloud and email security reviews with clear remediation priorities'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'maddy-section-backdrop'} aria-hidden={'true'} />
      </section>
    </div>
  )
}
