import { Footer } from '../../components/layout/Footer.js'
import { SiteDocument } from '../../components/layout/SiteDocument.js'
import type { PartnerPageConfig } from './content/partnerPages.js'
import PageHead from './head.js'
import PageRuntime from './runtime.js'
import Categories from './sections/Categories.js'
import Hero from './sections/Hero.js'
import QuoteSection from './sections/QuoteSection.js'

export function PartnerServiceDocument({ config }: { config: PartnerPageConfig }) {
  return (
    <SiteDocument
      currentPath={config.path}
      pageId={config.pageId}
      head={<PageHead config={config} />}
      runtime={<PageRuntime config={config} />}
    >
      <Hero config={config} />
      <Categories config={config} />
      <QuoteSection config={config} />
      <div className={'page-wrapper is-overflow-hidden is-no-padding'}>
        <Footer />
      </div>
    </SiteDocument>
  )
}
