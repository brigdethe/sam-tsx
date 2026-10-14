import { contactIcon } from '../../../content/icons.js'
import { PartnerPageConfig } from '../content/partnerPages.js'

export default function QuoteSection({ config }: { config: PartnerPageConfig }) {
  return (
    <div className={'page-wrapper dark-wrapper touch-hero'}>
      <section
        id={'partner-quote'}
        className={'section is-get-in-touch-section partner-quote-section'}
      >
        <div className={'partner-quote-media'} aria-hidden={'true'}>
          <img
            className={'partner-quote-media__img'}
            src={config.heroImageSrc}
            alt={''}
            loading={'lazy'}
          />
          <div className={'partner-quote-media__overlay'} />
        </div>
        <div className={'w-layout-blockcontainer container hero-description-container w-container'}>
          <div className={'git-hero'}>
            <div className={'git-left'}>
              <h2 className={'is-h2'}>{config.quoteHeading}</h2>
              <p className={'is-md-font-size-body-l is-bottom-48 is-sm-bottom-32'}>
                {config.quoteBody}
              </p>
              <p className={'is-bottom-48 is-sm-bottom-32'}>
                {'We supply and support '}
                {config.navLabel}
                {
                  ' for businesses and public organisations across Ghana from our office in Adjiriganor, Accra.'
                }
              </p>
              <div className={'text-with-icon is-bottom-24'}>
                <img src={contactIcon} loading={'lazy'} alt={''} />
                <div className={'mail-wrapper'}>
                  <p className={'is-font-size-body-m'}>
                    <span className={'is-opacity-60'}>{'Phone '}</span>
                    {'- '}
                    <a href={'tel:0551111551'} className={'link-on-dark'}>
                      {'0551111551'}
                    </a>
                  </p>
                </div>
              </div>
              <div className={'text-with-icon'}>
                <img src={contactIcon} loading={'lazy'} alt={''} />
                <div className={'mail-wrapper'}>
                  <p className={'is-font-size-body-m'}>
                    <span className={'is-opacity-60'}>{'Email '}</span>
                    {'- '}
                    <a href={'mailto:info@maddygroupltd.com'} className={'link-on-dark'}>
                      {'info@maddygroupltd.com'}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={'git-right'}>
              <div className={'form-block w-form'}>
                <form
                  id={'partner-quote-form'}
                  name={'partner-quote-form'}
                  data-name={'Partner Quote Form'}
                  method={'post'}
                  action={'/get-in-touch'}
                  className={'form'}
                >
                  <input type={'hidden'} name={'partner'} value={config.navLabel} />
                  <input
                    className={'text-field w-input'}
                    maxLength={256}
                    name={'name'}
                    data-name={'Name'}
                    placeholder={'Full name'}
                    type={'text'}
                    id={'partner-name'}
                    required
                  />
                  <input
                    className={'text-field w-input'}
                    maxLength={256}
                    name={'email'}
                    data-name={'E-mail'}
                    placeholder={'E-mail address'}
                    type={'email'}
                    id={'partner-email'}
                    required
                  />
                  <input
                    className={'text-field w-input'}
                    maxLength={256}
                    name={'company'}
                    data-name={'Company name'}
                    placeholder={'Company name'}
                    type={'text'}
                    id={'partner-company'}
                    required
                  />
                  <select
                    id={'partner-interest'}
                    name={'interest'}
                    data-name={'Interest'}
                    required
                    className={'text-field select-field w-select'}
                  >
                    <option value={''}>{'What are you interested in?'}</option>
                    {config.quoteInterests.map((interest) => (
                      <option value={interest} key={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  <textarea
                    required
                    placeholder={'Tell us what you need'}
                    maxLength={5000}
                    id={'partner-message'}
                    name={'message'}
                    data-name={'Text Message'}
                    className={'text-field message-area w-input'}
                  ></textarea>
                  <input
                    type={'submit'}
                    data-wait={'Please wait...'}
                    className={'button submit-button w-button'}
                    value={'Request a quote'}
                  />
                </form>
                <div className={'success-message w-form-done'}>
                  <div>
                    {'Thank you. We have received your request and will be in touch shortly.'}
                  </div>
                </div>
                <div className={'error-message w-form-fail'}>
                  <div>
                    {
                      'Something went wrong while sending the form. Please try again or email info@maddygroupltd.com.'
                    }
                  </div>
                </div>
              </div>
              <div className={'git-right-bg'}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
