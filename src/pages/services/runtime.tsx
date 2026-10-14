import { sitePageCode } from '../../content/sitePageCode.js'

export default function PageRuntime() {
  return (
    <>
      <script
        src={'/vendor/jquery.js'}
        type={'text/javascript'}
        integrity={'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='}
        crossOrigin={'anonymous'}
      ></script>
      <script src={'/vendor/webflow.js'} type={'text/javascript'}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[4] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[5] }} />
    </>
  )
}
