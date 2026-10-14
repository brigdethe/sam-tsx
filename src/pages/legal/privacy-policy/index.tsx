import { SiteDocument } from '../../../components/layout/SiteDocument.js'
import { LegalHead } from '../head.js'
import LegalShell from '../layout.js'
import { PageRuntime } from '../runtime.js'

export default function PrivacyPolicyDocument() {
  return (
    <SiteDocument
      currentPath={'/privacy-policy'}
      pageId={'maddy-privacy-policy'}
      head={
        <LegalHead
          title={'Privacy Policy | Maddy Group Ltd'}
          description={
            'How Maddy Group Ltd collects and uses personal information, with reference to the Data Protection Act, 2012 (Act 843).'
          }
        />
      }
      runtime={<PageRuntime />}
    >
      <LegalShell title={'Privacy policy'}>
        <p className={'is-font-size-body-l is-space-24'}>
          {
            'Maddy Group Ltd ("we", "us") is based in Accra, Ghana. This notice explains how we handle personal information when you contact us or use this website.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Who we are'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'Office: GD-219-3654, Adjetey Mensah Owusu St, Adjiriganor, Accra, Ghana. Postal: P.O. Box 10606, Accra North, Ghana. Email: info@maddygroupltd.com. Phone: 0551111551.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Information we collect'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'When you submit a quote or contact form, we collect the details you provide, such as your name, email address, company name, enquiry type and message. Server logs may also record technical data such as IP address and browser type for security and diagnostics.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'How we use information'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'We use contact details to respond to enquiries, prepare quotes and deliver services you request. We do not sell personal information. We process personal data in line with the Data Protection Act, 2012 (Act 843) and other applicable law.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Retention and security'}</h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'We keep enquiry records for as long as needed to complete the conversation and meet legal or contractual duties, then delete or anonymise them where practical. We apply reasonable technical and organisational measures to protect information under our control.'
          }
        </p>
        <h2 id={'cookies'} className={'is-space-16 is-font-size-title-l'}>
          {'Cookies'}
        </h2>
        <p className={'is-font-size-body-m is-space-24'}>
          {
            'This website does not set advertising cookies. It keeps one small record in your browser to remember your cookie choice. If you choose "Accept all", we may use analytics cookies to understand how the site is used; if you choose "Reject optional", none are set. Under "Manage choices" you can allow analytics and marketing cookies separately. You can change your choice at any time using the "Cookies" link at the bottom of any page.'
          }
        </p>
        <h2 className={'is-space-16 is-font-size-title-l'}>{'Your rights'}</h2>
        <p className={'is-font-size-body-m'}>
          {
            'Subject to Act 843, you may ask to access, correct or delete personal information we hold about you, or raise a concern about how it is used. Contact info@maddygroupltd.com.'
          }
        </p>
      </LegalShell>
    </SiteDocument>
  )
}
