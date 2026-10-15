import { categoryPath, serviceCategories } from '../../catalog/content/index.js'

/**
 * "What we deliver" on /services: one card per cybersecurity practice area in
 * the same coverage-card design and size as the Software products cards: the
 * area name and a short description of what it covers. The whole card links to
 * the area page, which lists its services.
 */
export function ServiceCoverageGrid() {
  return (
    <div className={'coverages-grid svc-coverage-grid'}>
      {serviceCategories.map((category) => (
        <a href={categoryPath(category)} className={'coverage svc-coverage'} key={category.slug}>
          <div
            className={'is-font-size-title-l is-color-purple-500 f-coverage svc-coverage__title'}
          >
            <strong>{category.name}</strong>
          </div>
          <p className={'is-font-size-body-m'}>{category.heroBody}</p>
        </a>
      ))}
    </div>
  )
}
