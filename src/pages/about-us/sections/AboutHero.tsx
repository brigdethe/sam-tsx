import { ArrowFillContent } from '../../../components/ui/ArrowFill.js'

export default function AboutHero() {
  return (
    <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
      <section className={'section is-why-about-hero'}>
        <div className={'hero-media'} aria-hidden={'true'}>
          <video
            className={'hero-media__video'}
            autoPlay
            loop
            muted
            playsInline
            preload={'auto'}
            poster={'/images/leadership-hero.jpg'}
          >
            <source src={'/images/leadership-hero.mp4'} type={'video/mp4'} />
          </video>
        </div>
        <div className={'w-layout-blockcontainer container hero-description-container w-container'}>
          <h1 data-w-id={'5688d7d9-6d15-3f37-8131-e8be09b8e9fa'}>
            <span className={'is-color-lime-300'}>{'People '}</span>
            {'Who\u00a0Care '}
            <br />
            <span className={'is-color-lime-300'}>{'Technology '}</span>
            {'That Delivers'}
          </h1>
          <div className={'hero-flex long-flex'}>
            <p
              data-w-id={'cf1d3dc4-a54e-773c-276f-52cfbc4a1929'}
              className={'hero-description extended-h-description'}
            >
              {
                'Maddy Group Ltd is a technology and cybersecurity company based in Accra. We protect digital infrastructure and support growth through reliable technology, delivered with integrity and professional care.'
              }
            </p>
            <a
              data-w-id={'6edbdcda-b7a6-c67d-3d34-d671091daf17'}
              href={'/get-in-touch'}
              className={'button is-black-button w-inline-block arrow-fill arrow-fill--button'}
            >
              <ArrowFillContent label={'Request a quote'} />
            </a>
          </div>
        </div>
      </section>
      <section className={'section is-about-more-section'}>
        <div
          data-w-id={'c0474c52-aa42-adbc-dc62-982b53513ae8'}
          className={'w-layout-blockcontainer container is-z-index-2 w-container'}
        >
          <h2 className={'is-h1'}>
            {'Technology with '}
            <br />
            {'professional care'}
          </h2>
          <div className={'about-flex'}>
            <div className={'about-right'}>
              <p className={'is-font-size-body-l'}>
                {
                  'We provide cybersecurity, software development and managed technology services to businesses and public organisations across Ghana. Our team covers assessment, response, cloud, DevOps, product and engineering.'
                }
              </p>
              <div className={'flex-about-description'}>
                <div className={'is-width-50 is-xs-width-100'}>
                  <p className={'is-font-size-body-l'}>
                    {
                      'Our values are integrity, excellence, innovation and client focus. With 10+ years of experience, we have worked with 20+ public and private organisations across banking, energy, maritime, aviation, law enforcement, health and government.'
                    }
                  </p>
                </div>
                <div className={'is-width-50 is-xs-width-100'}>
                  <p className={'is-font-size-body-l'}>
                    {
                      'Based in Adjiriganor, Accra. Reach us at info@maddygroupltd.com or 0551111551. Postal: P.O. Box 10606, Accra North.'
                    }
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
