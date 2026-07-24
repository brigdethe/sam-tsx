export function Loader() {
  return (
    <div className="maddy-loader" id="maddy-loader" aria-hidden="true" aria-busy="true">
      <img
        className="maddy-loader__logo"
        src="/images/maddy-group-horizontal.png"
        width={240}
        height={57}
        alt="Maddy Group"
      />
    </div>
  )
}

export function LoaderRuntime() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function () {
  var loader = document.getElementById('maddy-loader');
  if (!loader) return;

  var minVisibleMs = 450;
  var maxWaitMs = 1200;
  var startedAt = Date.now();
  var finished = false;

  function criticalImages() {
    var nodes = document.querySelectorAll(
      '.logo-img, .hero-media__image, img[loading="eager"], .maddy-loader__logo'
    );
    return Array.prototype.slice.call(nodes);
  }

  function whenImageReady(img) {
    if (img.complete && img.naturalWidth > 0) {
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var done = function () {
        img.removeEventListener('load', done);
        img.removeEventListener('error', done);
        resolve();
      };
      img.addEventListener('load', done);
      img.addEventListener('error', done);
    });
  }

  function waitForCritical() {
    var images = criticalImages().map(whenImageReady);
    var timeout = new Promise(function (resolve) {
      window.setTimeout(resolve, maxWaitMs);
    });
    return Promise.race([Promise.all(images), timeout]);
  }

  function hideLoader() {
    if (finished) return;
    finished = true;
    document.documentElement.classList.remove('is-page-loading');
    var node = document.getElementById('maddy-loader') || loader;
    if (!node) return;
    node.classList.add('is-done');
    node.setAttribute('aria-busy', 'false');
    node.style.pointerEvents = 'none';
    window.setTimeout(function () {
      if (node && node.parentNode) node.parentNode.removeChild(node);
    }, 420);
  }

  function finishWhenReady() {
    var elapsed = Date.now() - startedAt;
    var remaining = Math.max(0, minVisibleMs - elapsed);
    window.setTimeout(hideLoader, remaining);
  }

  waitForCritical().then(finishWhenReady);

  document.addEventListener(
    'click',
    function (event) {
      var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if (!link) return;
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target && link.target !== '_self') return;

      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) {
        return;
      }

      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }

      document.documentElement.classList.add('is-page-loading');
      if (!document.getElementById('maddy-loader')) {
        var clone = loader.cloneNode(true);
        clone.classList.remove('is-done');
        clone.id = 'maddy-loader';
        document.body.insertBefore(clone, document.body.firstChild);
      } else {
        loader.classList.remove('is-done');
        loader.style.display = '';
      }
    },
    true
  );

  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      document.documentElement.classList.remove('is-page-loading');
      var existing = document.getElementById('maddy-loader');
      if (existing) existing.classList.add('is-done');
    }
  });
})();
`,
      }}
    />
  )
}
