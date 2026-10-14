import { Footer } from './Footer.js'
import { SiteIcons } from './SiteIcons.js'
import { sitePageCode } from '../../content/sitePageCode.js'

/* Shared head, CTA band and scripts for the service-style pages (technology,
   catalogue category, sub-service and hub pages), so every one of them ships
   the same markup, Webflow interactions and integrity-checked jQuery. */

export function ServicePageHead({ title, description }: { title: string; description: string }) {
  return (
    <>
      <meta charSet={'utf-8'} />
      <link
        href={'https://assets-global.website-files.com'}
        rel={'preconnect'}
        crossOrigin={'anonymous'}
      />
      <title>{title}</title>
      <meta content={description} name={'description'} />
      <meta content={title} property={'og:title'} />
      <meta content={description} property={'og:description'} />
      <meta content={title} name={'twitter:title'} />
      <meta content={description} name={'twitter:description'} />
      <meta property={'og:type'} content={'website'} />
      <meta content={'summary_large_image'} name={'twitter:card'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/styles/webflow.css'} rel={'stylesheet'} type={'text/css'} />
      <link href={'/styles/maddy-theme.css'} rel={'stylesheet'} type={'text/css'} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[0] }} />
      <script
        type={'text/javascript'}
        dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[1] }}
      />
      <SiteIcons />
    </>
  )
}

export function ServiceCtaFooter({
  accent,
  rest,
  body,
  label = 'Request a quote',
}: {
  accent: string
  rest: string
  body: string
  label?: string
}) {
  return (
    <div className={'page-wrapper is-overflow-hidden is-no-padding'}>
      <section className={'section is-cta-section'}>
        <div className={'w-layout-blockcontainer container is-relative is-z-index-2 w-container'}>
          <div className={'cta-copy'}>
            <div>
              <h3
                data-w-id={'0789e90d-14d7-de60-3e7d-d2524d2e4fa3'}
                className={'is-color-lime-300'}
              >
                {accent}
              </h3>
              <h3 data-w-id={'6f019d19-8439-ebb1-03aa-e83ff562296c'}>{rest}</h3>
              <p className={'cta-sub'}>{body}</p>
            </div>
            <a
              data-w-id={'6f019d19-8439-ebb1-03aa-e83ff5622970'}
              href={'/get-in-touch'}
              className={'button is-black-button w-inline-block'}
            >
              <p>{label}</p>
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
        <div data-w-id={'6f019d19-8439-ebb1-03aa-e83ff5622974'} className={'kv-footer'}>
          <img
            src={
              'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp'
            }
            loading={'lazy'}
            sizes={'100vw'}
            srcSet={
              'https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-800.webp 800w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1080.webp 1080w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1600.webp 1600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp 2880w'
            }
            alt={''}
            className={'kv-footer-desktop'}
          />
          <img
            src={
              'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp'
            }
            loading={'lazy'}
            sizes={'(max-width: 767px) 100vw, 750px'}
            srcSet={
              'https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp 750w'
            }
            alt={''}
            className={'kv-footer-mobile'}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function ServicePageRuntime() {
  return (
    <>
      <script
        src={'/vendor/jquery.js'}
        type={'text/javascript'}
        integrity={'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='}
        crossOrigin={'anonymous'}
      ></script>
      <script src={'/vendor/webflow.js'} type={'text/javascript'}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[4] }} />
    </>
  )
}
