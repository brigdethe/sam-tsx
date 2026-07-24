type FooterProps = {
  brand?: 'flow' | 'maddy'
}

export function Footer({ brand = 'flow' }: FooterProps) {
    const isMaddy = brand === 'maddy'

    return (<div>
        <section className="section is-footer">
          <div className="w-layout-blockcontainer container w-container">
            <div className="footer-flex">
              <div className="footer-logo-wrapper">
                <img src={isMaddy ? "/images/maddy-group-horizontal.png" : "https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de4e_logo%20(1).png"} loading="lazy" width={isMaddy ? 200 : 111} height={isMaddy ? 48 : 37} alt={isMaddy ? "Maddy Group" : ""} className="footer-logo" style={isMaddy ? { filter: 'brightness(0) invert(1)' } : undefined}/>
              </div>
              <div className="footer-menu">
                <a href="/products-appetite" className="footer-link">
                  {isMaddy ? "Services" : "Products & Appetite"}
                </a>
                <a href="/retail-brokers" className="footer-link">
                  {isMaddy ? "Cybersecurity Services" : "Flow for Retail Agents"}
                </a>
                <a href="/carriers" className="footer-link">
                  {isMaddy ? "Software Development" : "Flow for Carriers"}
                </a>
              </div>
              <div className="footer-menu">
                <a href="/about-us" className="footer-link">
                  {"About Us"}
                </a>
              </div>
              <div className="footer-social">
                <div className="is-font-size-title-l social-title">
                  {isMaddy ? "Contact" : "Let's connect"}
                </div>
                <div className="social-footer-wrap">
                  <a data-w-id="7b6a67b9-6323-cb3c-abdf-ba2ae45ad720" href="#" className="social-button w-inline-block">
                    <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de4f_logo-linkedin%201.svg" loading="lazy" width="20" height="20" alt="" className="button-icon"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section is-footer-low">
          <div className="w-layout-blockcontainer container w-container">
            <div className="footer-flex sub-footer">
              <p className="is-font-size-body-s copyrights">
                {isMaddy ? "Copyright © 2025 Maddy Group Ltd. All Rights Reserved." : "© Copyright 2024 – All rights reserved"}
              </p>
              <div className="legal-pages-menu">
                <a href="#" className="footer-link is-font-size-body-s">
                  {"Terms & Conditions"}
                </a>
                <a href="#" className="footer-link is-font-size-body-s">
                  {"Privacy Policy"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>);
}
