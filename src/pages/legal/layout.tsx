import { ReactNode } from 'react'
import { Footer } from '../../components/layout/Footer.js'

export default function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <div className={'page-wrapper is-overflow-hidden'}>
        <section className={'section is-about-more-section'}>
          <div className={'w-layout-blockcontainer container is-z-index-2 w-container'}>
            <h1 className={'is-space-24'}>{title}</h1>
            <div className={'about-flex'}>
              <div className={'about-right'} style={{ maxWidth: '48rem' }}>
                {children}
                <p className={'is-font-size-body-m'} style={{ marginTop: '2rem' }}>
                  {
                    'This page is provided for general information and should be reviewed by counsel before use as a final legal policy.'
                  }
                </p>
              </div>
            </div>
          </div>
          <div className={'maddy-section-backdrop'} aria-hidden={'true'} />
        </section>
      </div>
      {/* A sibling, as on the other pages: nested inside the wrapper above, the
		  footer picked up its 1rem bottom padding as a strip below the footer. */}
      <div className={'page-wrapper is-overflow-hidden is-no-padding'}>
        <Footer />
      </div>
    </>
  )
}
