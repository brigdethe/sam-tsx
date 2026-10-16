import Accordion, { AccordionItem } from '../layout/Accordion.js'

type Product = {
  name: string
  label: string
  description: string
  image: string
  imageAlt: string
  color: string
  images?: { src: string; alt: string }[]
}

// Product summaries are based on the supplied product-detail copy.
const products: Product[] = [
  {
    name: 'Maddy Memo',
    label: 'Internal communications',
    description:
      'Manage official memos, correspondence and document approvals in one secure workspace. Route documents through clear approval stages, track decisions and keep searchable records under your organisation’s control.',
    image: '/images/brand/software-collaboration-mizuno-k-12899191.jpg',
    imageAlt: 'Colleagues working together on a shared document',
    color: '#010535',
  },
  {
    name: 'MaddyOps',
    label: 'Industrial operations',
    description:
      'Connect fleet, assets, energy, safety, shifts, inventory and operational activity in one configurable environment. Give teams central visibility and clearer reporting across departments and locations.',
    image: '/images/brand/industrial-automation-freek-wolsink-34222005.jpg',
    imageAlt: 'Automated industrial equipment on a production line',
    color: '#143674',
  },
  {
    name: 'BeaconOS',
    label: 'HR platform',
    description:
      'Manage the employee lifecycle—from recruitment and onboarding through attendance, leave, payroll and performance—in one connected HR platform. Give HR teams, managers and employees practical self-service tools.',
    image: '/images/beacon-os.png',
    imageAlt: 'The BeaconOS dashboard',
    color: '#1E40AF',
    images: [
      { src: '/images/BeaconOS Full.png', alt: 'BeaconOS Full' },
      { src: '/images/BeaconOS One.png', alt: 'BeaconOS One' },
      { src: '/images/BeaconOS Two.png', alt: 'BeaconOS Two' },
      { src: '/images/BeaconOS Three.png', alt: 'BeaconOS Three' },
    ],
  },
]

// The gallery is a flat list so a product can contribute more than one picture
// later without changing the rows above. A row opens the first entry that
// names it.
type Shot = {
  product: string
  title: string
  desc: string
  url: string
}

const shots: Shot[] = products.map((product) => ({
  product: product.name,
  title: product.name,
  desc: product.label,
  url: product.image,
}))

const items: AccordionItem[] = products.map((product) => ({
  id: product.name.toLowerCase().replace(/\s+/g, '-'),
  caption: product.label,
  title: product.name,
  description: product.description,
  color: product.color,
  images: product.images || [],
}))

// The dialog renders the first shot server side so it is never empty before
// the script runs. Indexed access is checked, hence the fallback.
const firstShot: Shot = shots[0] ?? {
  product: '',
  title: '',
  desc: '',
  url: '',
}

export function ProductsHighlightSection() {
  return (
    <section className="section is-investors-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="product-showcase__head">
          <h2 className="is-space-24">
            {'Software '}
            <br />
            {'products'}
          </h2>
          <p className="is-font-size-body-m is-color-grey-600 product-showcase__intro">
            {
              'Our own platforms sit alongside custom build work. Ask for a demo or quote for any product below.'
            }
          </p>
        </div>

        <div className="product-showcase" data-product-showcase="true">
          <div className="product-showcase__rows">
            <Accordion items={items} />
          </div>

          <div className="product-showcase__panel" data-product-panel="true" aria-hidden="true">
            <div className="product-showcase__tilt" data-product-tilt="true">
              <div className="product-showcase__stack" data-product-stack="true">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="product-showcase__slide"
                    style={{ backgroundColor: product.color }}
                  >
                    <img src={product.image} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="product-showcase__badge" data-product-badge="true" aria-hidden="true">
            {'View'}
          </div>
        </div>

        <div
          className="is-text-center"
          style={{ marginTop: '3rem', marginLeft: '1rem', marginRight: '1rem' }}
        >
          <a href="/software-products" className="button w-inline-block text-white">
            <p>{'Explore software products'}</p>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
              alt=""
              className="button-arrow inversed"
            />
          </a>
        </div>
      </div>

      <dialog
        id="product-gallery"
        className="pg"
        aria-label="Software product pictures"
        data-pg-shots={JSON.stringify(shots)}
      >
        <form method="dialog">
          <button className="pg__close" aria-label="Close">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </form>

        <div className="pg__stage">
          <figure className="pg__frame is-entering" data-pg-frame="true">
            <img
              className="pg__image"
              data-pg-image="true"
              src={firstShot.url}
              alt={firstShot.title}
            />
            <figcaption className="pg__caption">
              <h3 className="pg__title" data-pg-title="true">
                {firstShot.title}
              </h3>
              <p className="pg__desc" data-pg-desc="true">
                {firstShot.desc}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="pg__dock" data-pg-dock="true">
          <div className="pg__dock-inner">
            {shots.map((shot, index) => (
              <button
                key={shot.url}
                type="button"
                className="pg__thumb"
                data-pg-index={index}
                aria-label={shot.title}
              >
                <img src={shot.url} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  )
}
