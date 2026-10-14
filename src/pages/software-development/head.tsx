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
      <title>{'Software Development in Accra, Ghana | Maddy Group Ltd'}</title>
      <meta
        content={
          'Custom software, websites, portals and systems integration from Maddy Group Ltd in Accra. Pricing is by quote.'
        }
        name={'description'}
      />
      <meta
        content={'Software Development in Accra, Ghana | Maddy Group Ltd'}
        property={'og:title'}
      />
      <meta
        content={
          'Custom software, websites, portals and systems integration from Maddy Group Ltd in Accra. Pricing is by quote.'
        }
        property={'og:description'}
      />
      <meta
        content={'Software Development in Accra, Ghana | Maddy Group Ltd'}
        name={'twitter:title'}
      />
      <meta
        content={
          'Custom software, websites, portals and systems integration from Maddy Group Ltd in Accra. Pricing is by quote.'
        }
        name={'twitter:description'}
      />
      <meta property={'og:type'} content={'website'} />
      <meta content={'summary_large_image'} name={'twitter:card'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/styles/webflow.css'} rel={'stylesheet'} type={'text/css'} />
      <link href={'/styles/maddy-theme.css'} rel={'stylesheet'} type={'text/css'} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.carriers[0] }} />
      <script
        type={'text/javascript'}
        dangerouslySetInnerHTML={{ __html: sitePageCode.carriers[1] }}
      />
      <SiteIcons />
    </>
  )
}
