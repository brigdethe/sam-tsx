import { SiteDocument } from '../../components/layout/SiteDocument.js'
import PageHead from './head.js'
import PageRuntime from './runtime.js'
import GetInTouchContent from './sections/GetInTouchSection.js'

export function GetInTouchDocument() {
  return (
    <SiteDocument
      currentPath={'/get-in-touch'}
      pageId={'6627b50ad2ace3686c70ddbd'}
      head={<PageHead />}
      runtime={<PageRuntime />}
    >
      <GetInTouchContent />
    </SiteDocument>
  )
}
