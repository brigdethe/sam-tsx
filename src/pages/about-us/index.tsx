import { SiteDocument } from '../../components/layout/SiteDocument.js'
import { Footer } from '../../components/layout/Footer.js'
import PageHead from './head.js'
import PageRuntime from './runtime.js'
import AboutDetails from './sections/AboutDetails.js'
import AboutCallToAction from './sections/AboutCallToAction.js'
import AboutHero from './sections/AboutHero.js'
import LeadershipSection from './sections/LeadershipSection.js'

export default function AboutUsDocument() {
  return (
    <SiteDocument
      currentPath={'/about-us'}
      pageId={'6627b50ad2ace3686c70ddc4'}
      head={<PageHead />}
      runtime={<PageRuntime />}
    >
      <AboutHero />
      <AboutDetails />
      <LeadershipSection />
      <AboutCallToAction />
      <Footer />
    </SiteDocument>
  )
}
