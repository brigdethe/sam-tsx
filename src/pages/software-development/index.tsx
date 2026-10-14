import { SiteDocument } from '../../components/layout/SiteDocument.js'
import PageHead from './head.js'
import PageRuntime from './runtime.js'
import CarriersFeatures from './sections/CarriersFeatures.js'
import CarriersFooterArea from './sections/CarriersFooterArea.js'
import CarriersHero from './sections/CarriersHero.js'

export function CarriersDocument() {
  return (
    <SiteDocument
      currentPath={'/software-development'}
      pageId={'6627b50ad2ace3686c70ddc3'}
      head={<PageHead />}
      runtime={<PageRuntime />}
    >
      <CarriersHero />
      <CarriersFeatures />
      <CarriersFooterArea />
    </SiteDocument>
  )
}
