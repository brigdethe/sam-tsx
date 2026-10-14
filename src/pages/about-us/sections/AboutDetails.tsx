export default function AboutDetails() {
  return (
    <div id={'find-flow'} className={'page-wrapper is-overflow-hidden'}>
      <section className={'section is-markets-features'}>
        <div className={'w-layout-blockcontainer container market-container w-container'}>
          <div className={'info-feature-flex last-flex'}>
            <div className={'rounded-feature-picture about-logo'}>
              <img
                src={'/images/brand/accra-stem-team-zeal-33920053.jpg'}
                loading={'lazy'}
                alt={'Young technology students collaborating on an electronics project in Accra'}
                className={'rounded-feature-img'}
              />
            </div>
            <div className={'info-feature-desc'}>
              <h3 className={'is-space-24 is-md-space-16 is-h2-mobile'}>{'Mission'}</h3>
              <p className={'is-font-size-body-m is-md-font-size-body-l'}>
                {
                  'Maddy Group Ltd works to protect the digital infrastructure of its clients and to support their growth through reliable technology, delivered with integrity and professional care.'
                }
                <br />
                <br />
                {
                  'From security assessments to software builds, we stay close to the problem and ship work you can run day to day.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
