import { useId, type CSSProperties } from 'react'

export type AccordionImage = {
  src: string
  alt: string
}

export type AccordionItem = {
  id?: string
  caption?: string
  title: string
  description: string
  color?: string
  images: AccordionImage[]
}

type AccordionProps = {
  items: AccordionItem[]
  defaultIndex?: number
  openOnHover?: boolean
  hoverDelay?: number
  onChange?: (index: number) => void
  className?: string
}

const hoverScript = `
(function () {
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var roots = document.querySelectorAll('[data-acc-hover]:not([data-acc-bound])');
  for (var r = 0; r < roots.length; r++) {
    (function (root) {
      root.setAttribute('data-acc-bound', 'true');
      var delay = parseInt(root.getAttribute('data-acc-hover-delay'), 10) || 0;
      var tabs = root.querySelectorAll('.acc__tab');
      for (var i = 0; i < tabs.length; i++) {
        (function (tab) {
          var timer = 0;
          tab.addEventListener('mouseenter', function () {
            var input = document.getElementById(tab.getAttribute('for'));
            if (!input || input.checked) return;
            window.clearTimeout(timer);
            timer = window.setTimeout(function () { input.click(); }, delay);
          });
          tab.addEventListener('mouseleave', function () { window.clearTimeout(timer); });
        })(tabs[i]);
      }
    })(roots[r]);
  }
})();
`

export default function Accordion({
  items,
  defaultIndex = 0,
  openOnHover = true,
  hoverDelay = 80,
  onChange,
  className = '',
}: AccordionProps) {
  const uid = useId()
  const galleryDialogId = `${uid}-gallery`

  return (
    <>
      <div
        className={`acc ${className}`}
        id={uid}
        role="radiogroup"
        {...(openOnHover ? { 'data-acc-hover': 'true', 'data-acc-hover-delay': hoverDelay } : {})}
      >
        {items.map((item, i) => {
          const images = item.images
          const half = Math.ceil(images.length / 2)
          const columns = [images.slice(0, half), images.slice(half)]
          const inputId = `${uid}-tab-${i}`

          return (
            <section
              key={item.id ?? i}
              className="acc__panel"
              style={item.color ? ({ '--accent': item.color } as CSSProperties) : undefined}
            >
              <input
                type="radio"
                name={`${uid}-acc`}
                id={inputId}
                className="acc__radio"
                defaultChecked={i === defaultIndex}
                onChange={() => onChange?.(i)}
              />

              {/* The tab is always visible, open or closed */}
              <label htmlFor={inputId} className="acc__tab">
                {item.caption && <span className="acc__caption">{item.caption}</span>}
                <span className="acc__label">{item.title}</span>
              </label>

              {/* Expanding area sits next to the tab */}
              <div className="acc__content">
                <div className="acc__inner">
                  <h2 className="acc__title">{item.title}</h2>
                  <p className="acc__description">{item.description}</p>

                  <div className="acc__gallery">
                    {columns.map((col, c) => (
                      <div key={c} className={`acc__col${c === 1 ? ' acc__col--flip' : ''}`}>
                        {col.map((img) => {
                          const imageIndex = images.indexOf(img)

                          return (
                            <figure key={img.src} className="acc__img">
                              <button
                                aria-label={`View ${img.alt}`}
                                className="acc__image-button"
                                data-gallery-image={imageIndex}
                                data-gallery-product={i}
                                type="button"
                              >
                                <img src={img.src} alt={img.alt} decoding="async" />
                              </button>
                            </figure>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>
      <dialog className="acc-gallery" id={galleryDialogId} aria-label="Product image gallery">
        <form method="dialog">
          <button aria-label="Close image gallery" className="acc-gallery__close">
            <span aria-hidden="true">×</span>
          </button>
        </form>
        {items.map((item, productIndex) => {
          return (
            <div
              aria-label={`${item.title} images`}
              className="acc-gallery__product"
              data-gallery-product={productIndex}
              hidden
              key={item.id ?? item.title}
            >
              <figure className="acc-gallery__frame">
                <img alt="" className="acc-gallery__image" data-gallery-current-image src="" />
                <figcaption className="acc-gallery__caption">{item.title}</figcaption>
              </figure>
              <div aria-label="Image navigation" className="acc-gallery__controls">
                <button
                  aria-label="Previous image"
                  className="acc-gallery__arrow"
                  data-gallery-previous
                  type="button"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <span aria-live="polite" className="acc-gallery__count" data-gallery-count />
                <button
                  aria-label="Next image"
                  className="acc-gallery__arrow"
                  data-gallery-next
                  type="button"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          )
        })}
      </dialog>
      {openOnHover && <script dangerouslySetInnerHTML={{ __html: hoverScript }} />}
      <script
        dangerouslySetInnerHTML={{
          __html: `(() => {
            const root = document.getElementById(${JSON.stringify(uid)});
            const dialog = document.getElementById(${JSON.stringify(galleryDialogId)});
            if (!root || !dialog) return;
            const groups = Array.from(dialog.querySelectorAll('.acc-gallery__product'));
            let opener = null;
            let activeGroup = null;
            let activeImages = [];
            let activeIndex = 0;
            let scrollPosition = 0;
            let previousScrollStyles = null;

            const lockPageScroll = () => {
              scrollPosition = window.scrollY;
              previousScrollStyles = [
                [document.documentElement, 'overflow'],
                [document.body, 'position'],
                [document.body, 'top'],
                [document.body, 'left'],
                [document.body, 'right'],
                [document.body, 'width'],
                [document.body, 'overflow']
              ].map(([element, property]) => ({
                element,
                property,
                value: element.style.getPropertyValue(property),
                priority: element.style.getPropertyPriority(property)
              }));
              document.documentElement.style.setProperty('overflow', 'hidden');
              document.body.style.setProperty('position', 'fixed');
              document.body.style.setProperty('top', '-' + scrollPosition + 'px');
              document.body.style.setProperty('left', '0');
              document.body.style.setProperty('right', '0');
              document.body.style.setProperty('width', '100%');
              document.body.style.setProperty('overflow', 'hidden');
            };

            const unlockPageScroll = () => {
              if (!previousScrollStyles) return;
              previousScrollStyles.forEach(({ element, property, value, priority }) => {
                if (value) element.style.setProperty(property, value, priority);
                else element.style.removeProperty(property);
              });
              previousScrollStyles = null;
              window.scrollTo(0, scrollPosition);
            };

            const showImage = (index) => {
              activeIndex = (index + activeImages.length) % activeImages.length;
              const image = activeImages[activeIndex];
              activeGroup.querySelector('[data-gallery-current-image]').src = image.src;
              activeGroup.querySelector('[data-gallery-current-image]').alt = image.alt;
              activeGroup.querySelector('[data-gallery-count]').textContent =
                (activeIndex + 1) + ' / ' + activeImages.length;
            };

            root.addEventListener('click', (event) => {
              if (!(event.target instanceof Element)) return;
              const imageButton = event.target.closest('[data-gallery-image]');
              if (!imageButton || !root.contains(imageButton)) return;

              const productIndex = Number(imageButton.dataset.galleryProduct);
              activeGroup = groups[productIndex];
              if (!activeGroup) return;
              activeImages = ${JSON.stringify(items.map((item) => item.images))}[productIndex];
              opener = imageButton;
              groups.forEach((group) => {
                group.hidden = group !== activeGroup;
              });
              showImage(Number(imageButton.dataset.galleryImage));
              lockPageScroll();
              dialog.showModal();
              dialog.querySelector('.acc-gallery__close').focus();
            });

            dialog.addEventListener('click', (event) => {
              if (!(event.target instanceof Element)) return;
              if (event.target.closest('[data-gallery-previous]')) {
                showImage(activeIndex - 1);
                return;
              }
              if (event.target.closest('[data-gallery-next]')) {
                showImage(activeIndex + 1);
                return;
              }
              if (event.target === dialog) dialog.close();
            });

            dialog.addEventListener('close', () => {
              unlockPageScroll();
              opener?.focus();
              opener = null;
            });

            dialog.addEventListener('keydown', (event) => {
              if (!activeImages.length) return;
              if (event.key === 'ArrowRight') {
                event.preventDefault();
                showImage(activeIndex + 1);
              } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                showImage(activeIndex - 1);
              }
            });
          })();`,
        }}
      />
    </>
  )
}
