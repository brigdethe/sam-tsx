import { SiteDocument } from '../../components/layout/SiteDocument.js'
import { TechnologyPageConfig } from './content/technologyPages.js'
import PageHead from './head.js'
import PageRuntime from './runtime.js'
import Features from './sections/Features.js'
import FooterArea from './sections/FooterArea.js'
import Hero from './sections/Hero.js'

export function TechnologyServiceDocument({ config }: { config: TechnologyPageConfig }) {
  return (
    <SiteDocument
      currentPath={config.path}
      pageId={config.pageId}
      head={<PageHead config={config} />}
      runtime={<PageRuntime />}
    >
      <Hero config={config} />
      <Features config={config} />
      <FooterArea config={config} />
    </SiteDocument>
  )
}
