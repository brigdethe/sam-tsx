import { SiteDocument } from '../../components/layout/SiteDocument.js'
import PageHead from './head.js'
import PageRuntime from './runtime.js'
import ProductsAdditions from './sections/ProductsAdditions.js'
import ProductsDirectory from './sections/ProductsDirectory.js'
import ProductsFooterArea from './sections/ProductsFooterArea.js'
import ProductsHero from './sections/ProductsHero.js'

export default function ProductsAppetiteDocument() {
  return (
    <SiteDocument
      currentPath={'/services'}
      pageId={'6627b50ad2ace3686c70ddc6'}
      head={<PageHead />}
      runtime={<PageRuntime />}
    >
      <ProductsHero />
      <ProductsDirectory />
      <ProductsAdditions />
      <ProductsFooterArea />
    </SiteDocument>
  )
}
