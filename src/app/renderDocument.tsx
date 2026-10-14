import { renderToStaticMarkup } from 'react-dom/server'
import { getPageDocument } from './routes.js'
import { NotFoundDocument } from '../pages/error/not-found/index.js'

export function renderDocument(path = '/'): string | undefined {
  const PageDocument = getPageDocument(path)

  if (!PageDocument) {
    return undefined
  }

  return `<!DOCTYPE html>${renderToStaticMarkup(<PageDocument />)}`
}

export function renderNotFound(): string {
  return `<!DOCTYPE html>${renderToStaticMarkup(<NotFoundDocument />)}`
}
