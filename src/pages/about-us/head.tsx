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
      <title>{'About Maddy Group Ltd | Cybersecurity Company in Accra'}</title>
      <meta
        content={
          'Maddy Group Ltd is a technology and cybersecurity company in Accra, Ghana. Meet the leadership behind secure systems and reliable software.'
        }
        name={'description'}
      />
      <meta
        content={'About Maddy Group Ltd | Cybersecurity Company in Accra'}
        property={'og:title'}
      />
      <meta
        content={
          'Maddy Group Ltd is a technology and cybersecurity company in Accra, Ghana. Meet the leadership behind secure systems and reliable software.'
        }
        property={'og:description'}
      />
      <meta
        content={'About Maddy Group Ltd | Cybersecurity Company in Accra'}
        name={'twitter:title'}
      />
      <meta
        content={
          'Maddy Group Ltd is a technology and cybersecurity company in Accra, Ghana. Meet the leadership behind secure systems and reliable software.'
        }
        name={'twitter:description'}
      />
      <meta property={'og:type'} content={'website'} />
      <meta content={'summary_large_image'} name={'twitter:card'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/styles/webflow.css'} rel={'stylesheet'} type={'text/css'} />
      <link href={'/styles/maddy-theme.css'} rel={'stylesheet'} type={'text/css'} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[0] }} />
      <script
        type={'text/javascript'}
        dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[1] }}
      />
      <SiteIcons />
    </>
  )
}
