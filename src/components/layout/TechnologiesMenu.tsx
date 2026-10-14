import {
  SERVICES_ROOT,
  TECHNOLOGIES_ROOT,
  findTechnology,
  technologyPath,
  type SecurityTechnology,
} from '../../content/catalog/index.js'
import { technologyNavItems } from '../../content/technologyNav.js'
import { CatalogIcon } from '../ui/CatalogIcon.js'

/** The services link is current on the overview, a practice area or a sub-service. */
export function isServicesPath(path: string) {
  return path === SERVICES_ROOT || path.startsWith(`${SERVICES_ROOT}/`)
}

/** Technologies is current on a solution page, a security technology page or the hub. */
export function isTechnologiesPath(path: string) {
  return (
    path === TECHNOLOGIES_ROOT ||
    path.startsWith(`${TECHNOLOGIES_ROOT}/`) ||
    technologyNavItems.some((item) => item.href === path)
  )
}

function subTechnologies(slugs: string[] | undefined): SecurityTechnology[] {
  return (slugs ?? []).flatMap((slug) => {
    const technology = findTechnology(slug)
    return technology ? [technology] : []
  })
}

/**
 * Technologies dropdown: the solutions as plain items, like Altisec's. A
 * solution with sub-technologies shows them underneath when the pointer rests
 * on it (desktop) or when it is tapped (touch), inside the same dropdown. On
 * touch the solution's own page is the first sub-item. A technology's own
 * solution starts opened. Every item is a plain link without script.
 */
export function TechnologiesMenu({ currentPath }: { currentPath: string }) {
  return (
    <nav className="dropdown-list w-dropdown-list" aria-label="Technologies">
      <div className="navbar-dropdown-wrapper has-flyouts" data-flyout-menu="">
        {technologyNavItems.map((item) => {
          const children = subTechnologies(item.technologies)
          const isCurrent = item.href === currentPath
          const id = `tech-sub-${item.href.replace(/\W+/g, '')}`
          const open = children.some((child) => technologyPath(child) === currentPath)
          return (
            <div
              className={`nav-flyout${children.length ? ' has-children' : ''}${open ? ' is-open is-home' : ''}`}
              data-flyout-item=""
              key={item.href}
            >
              <a
                href={item.href}
                className={`dropdown-link navbar-dl-link w-dropdown-link nav-solution${isCurrent ? ' w--current' : ''}`}
                aria-current={isCurrent ? 'page' : undefined}
                {...(children.length
                  ? { 'aria-controls': id, 'aria-expanded': open ? 'true' : 'false' }
                  : {})}
              >
                {item.label}
              </a>
              {children.length ? (
                <div className="nav-flyout__panel" id={id}>
                  <div className="nav-flyout__inner">
                    <ul className="nav-flyout__list" role="list">
                      <li className="nav-flyout__overview">
                        <a href={item.href} className="nav-flyout__link">
                          <span className="nav-flyout__name">{`${item.label} overview`}</span>
                        </a>
                      </li>
                      {children.map((technology) => {
                        const href = technologyPath(technology)
                        const here = href === currentPath
                        return (
                          <li key={technology.slug}>
                            <a
                              href={href}
                              className={`nav-flyout__link${here ? ' is-current' : ''}`}
                              aria-current={here ? 'page' : undefined}
                            >
                              <span className="nav-flyout__icon">
                                <CatalogIcon name={technology.icon} />
                              </span>
                              <span className="nav-flyout__name">{technology.name}</span>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export const technologiesMenuScript = `(function () {
  var desktop = window.matchMedia('(min-width: 992px)');
  var canHover = window.matchMedia('(hover: hover)');
  var menus = document.querySelectorAll('[data-flyout-menu]');
  Array.prototype.forEach.call(menus, function (menu) {
    var items = Array.prototype.slice.call(menu.querySelectorAll('[data-flyout-item]'));
    var timer = 0;

    function setOpen(item, open) {
      item.classList.toggle('is-open', open);
      var link = item.querySelector('.nav-solution');
      if (link && link.hasAttribute('aria-expanded')) link.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    // Opening an item closes only the ones below it, so nothing above the
    // pointer moves and the row under the cursor never jumps away.
    function openOnly(index) {
      items.forEach(function (item, i) {
        if (i === index) setOpen(item, true);
        else if (i > index) setOpen(item, false);
      });
    }
    function reset() {
      items.forEach(function (item) { setOpen(item, item.classList.contains('is-home')); });
    }
    var hoverMode = function () { return desktop.matches && canHover.matches; };

    items.forEach(function (item, index) {
      var link = item.querySelector('.nav-solution');
      var hasChildren = item.classList.contains('has-children');

      item.addEventListener('mouseenter', function () {
        if (!hoverMode()) return;
        window.clearTimeout(timer);
        timer = window.setTimeout(function () {
          if (hasChildren) openOnly(index);
          else items.forEach(function (other, i) { if (i > index) setOpen(other, false); });
        }, 110);
      });
      item.addEventListener('mouseleave', function () { window.clearTimeout(timer); });

      if (!link || !hasChildren) return;
      link.addEventListener('focus', function () { if (hoverMode()) openOnly(index); });
    });

    // Touch (and the collapsed phone menu): a tap on a solution with
    // technologies opens or closes its list instead of leaving the page; the
    // solution's own page is the list's first item. Caught on window in the
    // capture phase so the page-transition loader never sees the tap.
    window.addEventListener('click', function (event) {
      if (hoverMode()) return;
      var link = event.target && event.target.closest ? event.target.closest('.nav-solution') : null;
      if (!link || !menu.contains(link)) return;
      var item = link.closest('[data-flyout-item]');
      if (!item || !item.classList.contains('has-children')) return;
      event.preventDefault();
      event.stopPropagation();
      var open = !item.classList.contains('is-open');
      items.forEach(function (other) { setOpen(other, false); });
      setOpen(item, open);
    }, true);

    var list = menu.closest('.w-dropdown-list');
    if (list && 'MutationObserver' in window) {
      new MutationObserver(function () {
        if (list.classList.contains('w--open')) return;
        window.clearTimeout(timer);
        reset();
      }).observe(list, { attributes: true, attributeFilter: ['class'] });
    }
  });
})();`
