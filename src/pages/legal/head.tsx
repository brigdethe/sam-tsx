import { SiteIcons } from '../../components/layout/SiteIcons.js'
import { sitePageCode } from '../../content/sitePageCode.js'

export function LegalHead({ title, description }: { title: string; description: string }) {
  return (
    <>
      <meta charSet={'utf-8'} />
      <link
        href={'https://assets-global.website-files.com'}
        rel={'preconnect'}
        crossOrigin={'anonymous'}
      />
      <title>{title}</title>
      <meta content={description} name={'description'} />
      <meta content={title} property={'og:title'} />
      <meta content={description} property={'og:description'} />
      <meta content={title} name={'twitter:title'} />
      <meta content={description} name={'twitter:description'} />
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
