export default function ProductsAdditions() {
  return (
    <div className={'page-wrapper is-overflow-hidden'}>
      <section id={'software-products'} className={'section is-coverages-section'}>
        <div className={'w-layout-blockcontainer container w-container'}>
          <div className={'coverages-flex'}>
            <h2>{'Software products'}</h2>
            <div className={'is-font-size-body-m'}>
              {'Flagship platforms we build and support. Request a demo or quote.'}
            </div>
          </div>
          <div className={'coverages-grid'}>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'Maddy Memo'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Intranet-first memos, internal mail and announcements on your own server, with offline resilience and audit-ready records.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'Maddy Security Ops'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Investigation and OSINT workflows for law enforcement and corporate security, including case intake, link analysis and command oversight.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'MaddyOps suite'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Industrial operations modules for command view, fleet telemetry, energy, shifts, safety, stock, sales, messaging and secure ID.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'MaddyCMS'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Centralised SMS, email and WhatsApp messaging with delivery analytics, templates, approvals and ERP-friendly APIs.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'Maddy AkontaX'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Multi-tenant financial resource planning for startups: transactions, approvals, assets, payroll and role-based access.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'BeaconOS'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {'HR platform for African workforces, with Ghana as the first market focus.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={'section is-coverages-section'}>
        <div className={'w-layout-blockcontainer container w-container'}>
          <div className={'coverages-flex'}>
            <h2>{'More services'}</h2>
            <div className={'is-font-size-body-m'}>
              {'Additional lines that sit alongside cybersecurity, software and IoT.'}
            </div>
          </div>
          <div className={'coverages-grid'}>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'UAV operations'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Aerial surveillance, mapping, infrastructure inspection, agricultural monitoring, construction documentation and thermal imaging using platforms such as NEXTECH, DELTAQUAD and JOUAV.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'ICT procurement'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Equipment sourcing and software licensing so teams can buy the tools they need without running a separate procurement project.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'Training'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Cybersecurity training programmes for staff and partners, including focused courses such as third-party risk management.'
                }
              </p>
            </div>
            <div className={'coverage'}>
              <div className={'is-font-size-title-l is-color-purple-500 f-coverage'}>
                <strong>{'Website timelines'}</strong>
              </div>
              <p className={'is-font-size-body-m'}>
                {
                  'Indicative delivery: simple sites in 2 to 4 weeks, e-commerce in 6 to 8 weeks, and complex applications in 8 to 16 weeks. Exact scopes are quoted per project.'
                }
              </p>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a href={'/get-in-touch'} className={'button w-inline-block text-white'}>
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
    </div>
  )
}
