import { SiteDocument } from '../../../components/layout/SiteDocument.js'
import { LegalHead } from '../head.js'
import LegalShell from '../layout.js'
import { PageRuntime } from '../runtime.js'

export default function TermsOfUseDocument() {
  return (
    <SiteDocument
      currentPath={'/terms-of-use'}
      pageId={'maddy-terms-of-use'}
      head={
        <LegalHead
          title={'Terms of Use | Maddy Group Ltd'}
          description={
            'Terms of use for the Maddy Group Ltd website: website content, quotes and services, acceptable use and liability.'
          }
        />
      }
      runtime={<PageRuntime />}
    >
      <LegalShell title={'Terms of use'}>
        <p className={'is-font-size-body-l is-space-24'}>
          {
            'By using this website you agree to these terms. If you do not agree, please do not use the site.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Website content'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'Content on this site is for general information about Maddy Group Ltd services and products. It is not a binding offer, legal advice or a security guarantee. Service scopes, timelines and fees are confirmed only in a written quotation or contract.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Quotes and services'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'Submitting a form or requesting a quote does not create a contract. Engagements begin when both parties agree in writing. Pricing is provided on request.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Acceptable use'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'You must not misuse this website, attempt unauthorised access, or use site content in a way that breaches law or third-party rights.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Liability'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'To the extent permitted by Ghanaian law, we are not liable for loss arising from use of this website or reliance on general information published here. Nothing in these terms limits liability that cannot be limited by law.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Contact'}</h2>
        <p className={'is-font-size-body-m'}>
          {'Questions about these terms: info@maddygroupltd.com or 0551111551.'}
        </p>
      </LegalShell>
    </SiteDocument>
  )
}
