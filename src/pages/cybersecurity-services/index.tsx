import { SiteDocument } from '../../components/layout/SiteDocument.js'
import PageHead from './head.js'
import PageRuntime from './runtime.js'
import RetailBrokersFeatures from './sections/RetailBrokersFeatures.js'
import RetailBrokersFooterArea from './sections/RetailBrokersFooterArea.js'
import RetailBrokersHero from './sections/RetailBrokersHero.js'

export function RetailBrokersDocument() {
  return (
    <SiteDocument
      currentPath={'/cybersecurity-services'}
      pageId={'6627b50ad2ace3686c70ddc2'}
      head={<PageHead />}
      runtime={<PageRuntime />}
    >
      <RetailBrokersHero />
      <RetailBrokersFeatures />
      <RetailBrokersFooterArea />
    </SiteDocument>
  )
}
