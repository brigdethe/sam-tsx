import { SiteIcons } from '../../components/layout/SiteIcons.js'
import { sitePageCode } from '../../content/sitePageCode.js'
import { PartnerPageConfig } from './content/partnerPages.js'

export default function PageHead({ config }: { config: PartnerPageConfig }) {
  return (
    <>
      <meta charSet={'utf-8'} />
      <link
        href={'https://assets-global.website-files.com'}
        rel={'preconnect'}
        crossOrigin={'anonymous'}
      />
      <title>{config.title}</title>
      <meta content={config.description} name={'description'} />
      <meta content={config.title} property={'og:title'} />
      <meta content={config.description} property={'og:description'} />
      <meta content={config.title} name={'twitter:title'} />
      <meta content={config.description} name={'twitter:description'} />
      <meta property={'og:type'} content={'website'} />
      <meta content={'summary_large_image'} name={'twitter:card'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/styles/webflow.css'} rel={'stylesheet'} type={'text/css'} />
      <link href={'/styles/maddy-theme.css'} rel={'stylesheet'} type={'text/css'} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[0] }} />
      <script
        type={'text/javascript'}
        dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[1] }}
      />
      <SiteIcons />
    </>
  )
}
