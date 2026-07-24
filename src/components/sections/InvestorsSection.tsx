const publicPartners = [
  {
    name: 'CardLogix',
    detail: 'Smart cards and biometric enrolment',
  },
  {
    name: 'ZenduIT',
    detail: 'Fleet management and telematics',
  },
  {
    name: 'Zaelet Precision',
    detail: 'Geospatial and surveying solutions',
  },
]

export function InvestorsSection() {
  return (
    <section className="section is-investors-section">
      <div className="w-layout-blockcontainer container w-container">
        <h2
          data-w-id="9c1c2636-75b4-763c-b450-7bbbe77e3539"
          className="is-text-center"
        >
          {"Our Trusted "}
          <br />
          {"Partners"}
        </h2>
        <div className="investors-logos">
          <div className="logos-container">
            {publicPartners.map((partner, index) => (
              <div
                key={partner.name}
                className={`framed-logo${index === 0 ? ' _1' : index === 1 ? ' _2' : index === 2 ? ' _3' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '1.25rem 1.5rem',
                  minHeight: '7.5rem',
                  textAlign: 'left',
                }}
              >
                <div className="is-font-size-title-m">{partner.name}</div>
                <p
                  className="is-font-size-body-m is-color-grey-600"
                  style={{ margin: '0.45rem 0 0' }}
                >
                  {partner.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
