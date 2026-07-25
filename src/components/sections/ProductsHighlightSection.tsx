const products = [
  'Maddy Memo',
  'Maddy Security Ops',
  'MaddyOps',
  'MaddyCMS',
]

export function ProductsHighlightSection() {
  return (
    <section className="section is-investors-section">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="is-text-center is-space-24">
          {"Software "}
          <br />
          {"products"}
        </h2>
        <p className="is-font-size-body-m is-text-center is-color-grey-600" style={{ maxWidth: '40rem', margin: '0 auto 2rem' }}>
          {"Our own platforms sit alongside custom build work. Ask for a demo or quote for any product below."}
        </p>
        <div className="investors-logos">
          <div className="logos-container">
            {products.map((name, index) => (
              <div
                key={name}
                className={`framed-logo${index === 0 ? ' _1' : index === 1 ? ' _2' : index === 2 ? ' _3' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem 1.25rem',
                  textAlign: 'center',
                }}
              >
                <div className="is-font-size-title-m">{name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="is-text-center" style={{ marginTop: '2rem' }}>
          <a href="/software-products" className="button w-inline-block">
            <p>{"Explore software products"}</p>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
              alt=""
              className="button-arrow"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
