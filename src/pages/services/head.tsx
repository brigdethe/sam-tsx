import { SiteIcons } from '../../components/layout/SiteIcons.js'
import { sitePageCode } from '../../content/sitePageCode.js'

export default function PageHead() {
  return (
    <>
      <meta charSet={'utf-8'} />
      <link
        href={'https://assets-global.website-files.com'}
        rel={'preconnect'}
        crossOrigin={'anonymous'}
      />
      <title>{'Cybersecurity & IT Services in Ghana | Maddy Group Ltd'}</title>
      <meta
        content={
          'Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training from Maddy Group Ltd in Accra.'
        }
        name={'description'}
      />
      <meta
        content={'Cybersecurity & IT Services in Ghana | Maddy Group Ltd'}
        property={'og:title'}
      />
      <meta
        content={
          'Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training from Maddy Group Ltd in Accra.'
        }
        property={'og:description'}
      />
      <meta
        content={'Cybersecurity & IT Services in Ghana | Maddy Group Ltd'}
        name={'twitter:title'}
      />
      <meta
        content={
          'Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training from Maddy Group Ltd in Accra.'
        }
        name={'twitter:description'}
      />
      <meta property={'og:type'} content={'website'} />
      <meta content={'summary_large_image'} name={'twitter:card'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/styles/webflow.css'} rel={'stylesheet'} type={'text/css'} />
      <link href={'/styles/maddy-theme.css'} rel={'stylesheet'} type={'text/css'} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[0] }} />
      <script
        type={'text/javascript'}
        dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[1] }}
      />
      <SiteIcons />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[2] }} />
    </>
  )
}
