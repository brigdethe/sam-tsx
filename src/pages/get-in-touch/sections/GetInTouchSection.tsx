import { Footer } from '../../../components/layout/Footer.js'

export default function GetInTouchContent() {
  return (
    <div>
      <div className={'page-wrapper dark-wrapper is-overflow-hidden'}>
        <section className={'section is-get-in-touch-section is-contact-hero'}>
          <div className={'hero-media'} aria-hidden={'true'}>
            <video
              className={'hero-media__video'}
              poster={'/images/brand/contact-bg-poster.jpg'}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={'/images/brand/contact-bg.webm'} type={'video/webm'} />
              <source src={'/images/brand/contact-bg.mp4'} type={'video/mp4'} />
            </video>
            <video
              className={'hero-media__video-whole'}
              aria-hidden={'true'}
              tabIndex={-1}
              muted
              loop
              playsInline
              preload={'none'}
            >
              <source src={'/images/brand/contact-bg.webm'} type={'video/webm'} />
              <source src={'/images/brand/contact-bg.mp4'} type={'video/mp4'} />
            </video>
            <div className={'contact-bg-overlay'}></div>
          </div>
          <div
            className={'w-layout-blockcontainer container hero-description-container w-container'}
          >
            <div className={'git-hero'}>
              <div data-w-id={'d6ec158b-413a-2252-c730-9e6331badb22'} className={'git-left'}>
                <div className={'git-intro-block'}>
                  <h1 data-w-id={'5688d7d9-6d15-3f37-8131-e8be09b8e9fa'} className={'is-h2'}>
                    {'Contact us'}
                  </h1>
                  <p className={'is-md-font-size-body-l is-bottom-48 is-sm-bottom-32 git-intro'}>
                    {
                      'Cybersecurity, software development and technology services for organisations across Africa. Tell us what you need and we will get back to you promptly.'
                    }
                  </p>
                </div>
                <div className={'git-details-block'}>
                  <div className={'text-with-icon is-bottom-24'}>
                    <span className={'phone-icon'} aria-hidden={'true'}>
                      <svg
                        width={'20'}
                        height={'20'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path
                          d={
                            'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384'
                          }
                        />
                      </svg>
                    </span>
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
                  <div className={'text-with-icon is-bottom-24'}>
                    <span className={'at-icon'} aria-hidden={'true'}>
                      <svg
                        width={'20'}
                        height={'20'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <circle
                          className={'at-icon__circle'}
                          cx={'12'}
                          cy={'12'}
                          r={'4'}
                          pathLength={1}
                        />
                        <path
                          className={'at-icon__path'}
                          d={'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'}
                          pathLength={1}
                        />
                      </svg>
                    </span>
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
                  <div className={'text-with-icon'}>
                    <span className={'pin-icon'} aria-hidden={'true'}>
                      <svg
                        width={'20'}
                        height={'20'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path
                          d={
                            'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'
                          }
                        />
                        <circle
                          className={'pin-icon__circle'}
                          cx={'12'}
                          cy={'10'}
                          r={'3'}
                          pathLength={1}
                        />
                      </svg>
                    </span>
                    <div className={'mail-wrapper'}>
                      <p className={'is-font-size-body-m'}>
                        <span className={'is-opacity-60'}>{'Office '}</span>
                        {'- GD-219-3654, Adjiriganor, Accra'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'git-right'}>
                <div className={'form-block w-form'}>
                  <form
                    id={'email-form'}
                    name={'email-form'}
                    data-name={'Email Form'}
                    method={'post'}
                    action={'/get-in-touch'}
                    className={'form'}
                  >
                    <input
                      className={'text-field w-input'}
                      maxLength={256}
                      name={'name'}
                      data-name={'Name'}
                      placeholder={'Full name'}
                      type={'text'}
                      id={'name'}
                      required
                    />
                    <input
                      className={'text-field w-input'}
                      maxLength={256}
                      name={'email'}
                      data-name={'E-mail'}
                      placeholder={'E-mail address'}
                      type={'email'}
                      id={'E-mail'}
                      required
                    />
                    <input
                      className={'text-field w-input'}
                      maxLength={256}
                      name={'company'}
                      data-name={'Company name'}
                      placeholder={'Company name'}
                      type={'text'}
                      id={'Company-name'}
                      required
                    />
                    <div className={'form-select-row'}>
                      <select
                        id={'Enquiry-type'}
                        name={'enquiry'}
                        data-name={'Enquiry type'}
                        required
                        className={'text-field select-field w-select'}
                      >
                        <option value={''}>{'How can we help?'}</option>
                        <option value={'Cybersecurity'}>{'Cybersecurity'}</option>
                        <option value={'Software development'}>{'Software development'}</option>
                        <option value={'Software products'}>{'Software products'}</option>
                        <option value={'UAV / IoT / procurement'}>
                          {'UAV, IoT or ICT procurement'}
                        </option>
                        <option value={'Training'}>{'Training'}</option>
                        <option value={'Request a quote'}>{'Request a quote'}</option>
                        <option value={'Other'}>{'Other'}</option>
                      </select>
                      <select
                        id={'Where-did-you-hear-about-us'}
                        name={'source'}
                        data-name={'Where did you hear about us?'}
                        className={'text-field select-field w-select'}
                      >
                        <option value={''}>{'How did you find us?'}</option>
                        <option value={'Referral'}>{'Referral'}</option>
                        <option value={'Search'}>{'Search'}</option>
                        <option value={'Event'}>{'Event'}</option>
                        <option value={'Other'}>{'Other'}</option>
                      </select>
                    </div>
                    <textarea
                      required
                      placeholder={'Message'}
                      maxLength={5000}
                      id={'Text-Message'}
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
                      {'Thank you. We have received your message and will be in touch shortly.'}
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
                <div
                  data-w-id={'0c45a849-9c8e-3fe9-b20e-34dfaac634ba'}
                  className={'git-right-bg'}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={'page-wrapper is-overflow-hidden is-no-padding'}>
        <Footer />
      </div>
    </div>
  )
}
