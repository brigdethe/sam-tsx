import { ArrowLeft } from '../../../components/ui/icons/index.js'
import { css, pageScript } from './data.js'

export function NotFoundDocument() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <title>{'404 — Page not found | Maddy Group Ltd'}</title>
        <link rel="icon" href="/images/maddy-logo-icon.jpg" type="image/jpeg" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              `@font-face{font-family:'PP Mori';font-style:normal;font-weight:400 700;font-display:swap;` +
              `src:url('/vendor/fonts/6627b50ad2ace3686c70ddf8_PPMori-Variable-482ff0665d.ttf') format('truetype');}` +
              css,
          }}
        />
      </head>
      <body>
        <main className="nf-main">
          <video
            className="nf-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/error404-poster.jpg"
            aria-hidden="true"
          >
            {/* 720p, faststart (moov first) so playback starts before the whole file arrives */}
            <source src="/images/error404-720.webm" type="video/webm" />
            <source src="/images/error404-720.mp4" type="video/mp4" />
          </video>

          <a className="nf-logo" href="/" aria-label="Maddy Group — back to home">
            <img
              src="/images/maddy-group-horizontal-white.png"
              alt="Maddy Group"
              width={200}
              height={40}
            />
          </a>

          <div className="nf-content">
            <h1 className="nf-404">{'404'}</h1>
            <hr className="nf-divider" aria-hidden="true" />
            <p className="nf-msg" id="nf-msg">
              {'Somewhere across the Ghanaian savannah, you wandered off the map.'}
            </p>
            <div className="nf-actions">
              <button id="nf-back" type="button" className="nf-btn nf-btn--ghost">
                <ArrowLeft />
                {'Go Back'}
              </button>
              <a href="/" className="nf-btn nf-btn--primary">
                {'Home'}
              </a>
            </div>
          </div>
        </main>
        <script dangerouslySetInnerHTML={{ __html: pageScript }} />
      </body>
    </html>
  )
}
