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
      <title>{'Contact Maddy Group Ltd | Accra, Ghana'}</title>
      <meta
        content={
          'Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com.'
        }
        name={'description'}
      />
      <meta content={'Contact Maddy Group Ltd | Accra, Ghana'} property={'og:title'} />
      <meta
        content={
          'Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com.'
        }
        property={'og:description'}
      />
      <meta content={'Contact Maddy Group Ltd | Accra, Ghana'} name={'twitter:title'} />
      <meta
        content={
          'Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com.'
        }
        name={'twitter:description'}
      />
      <meta property={'og:type'} content={'website'} />
      <meta content={'summary_large_image'} name={'twitter:card'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/styles/webflow.css'} rel={'stylesheet'} type={'text/css'} />
      <link href={'/styles/maddy-theme.css'} rel={'stylesheet'} type={'text/css'} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[0] }} />
      <script
        type={'text/javascript'}
        dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[1] }}
      />
      <SiteIcons />
    </>
  )
}
