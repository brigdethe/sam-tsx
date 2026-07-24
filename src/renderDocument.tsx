import { renderToStaticMarkup } from 'react-dom/server'
import { getPageDocument } from './sitePages.js'

export function renderDocument(path = '/'): string | undefined {
  const PageDocument = getPageDocument(path)

  if (!PageDocument) {
    return undefined
  }

  return `<!DOCTYPE html>${renderToStaticMarkup(<PageDocument />)}`
}
