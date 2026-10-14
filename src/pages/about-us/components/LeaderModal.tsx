import { leaders } from '../content/leadership.js'

// One shared pop-up for all leaders; the page runtime script handles profile navigation.
function ModalIcon({ paths }: { paths: string[] }) {
  return (
    <svg
      viewBox={'0 0 24 24'}
      width={'24'}
      height={'24'}
      fill={'none'}
      stroke={'currentColor'}
      strokeWidth={'2'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      aria-hidden={'true'}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

export function LeaderModal() {
  return (
    <div
      className={'leader-modal'}
      data-leader-modal={''}
      role={'dialog'}
      aria-modal={'true'}
      aria-label={'Leadership profiles'}
      hidden
    >
      <div className={'leader-modal__backdrop'}></div>
      <button
        type={'button'}
        className={'leader-modal__close'}
        data-leader-close={''}
        aria-label={'Close profile'}
      >
        <ModalIcon paths={['M18 6 6 18', 'm6 6 12 12']} />
      </button>
      <div className={'leader-modal__body'}>
        {leaders.map((leader, index) => (
          <article
            key={leader.name}
            className={'leader-slide'}
            data-leader-slide={index}
            hidden={index !== 0}
          >
            <div className={'leader-slide__photo'}>
              <img src={leader.image} loading={'lazy'} alt={leader.name} />
            </div>
            <div className={'leader-slide__card'}>
              <h3 className={'leader-slide__name'}>{leader.name}</h3>
              <p className={'leader-slide__role'}>{leader.role}</p>
              <div className={'leader-slide__bio'}>
                {leader.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {leader.email && (
                <div className={'leader-slide__links'}>
                  <a
                    href={`mailto:${leader.email}`}
                    className={'leader-slide__link'}
                    aria-label={`Email ${leader.name}`}
                  >
                    <ModalIcon
                      paths={[
                        'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
                        'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
                      ]}
                    />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
        <div className={'leader-modal__nav'}>
          <button
            type={'button'}
            className={'leader-modal__arrow'}
            data-leader-prev={''}
            aria-label={'Previous profile'}
          >
            <ModalIcon paths={['m15 18-6-6 6-6']} />
          </button>
          <div className={'leader-modal__dots'}>
            {leaders.map((leader, index) => (
              <button
                key={leader.name}
                type={'button'}
                className={'leader-modal__dot'}
                data-leader-dot={index}
                aria-label={`Show ${leader.name}`}
              ></button>
            ))}
          </div>
          <button
            type={'button'}
            className={'leader-modal__arrow'}
            data-leader-next={''}
            aria-label={'Next profile'}
          >
            <ModalIcon paths={['m9 18 6-6-6-6']} />
          </button>
        </div>
      </div>
    </div>
  )
}
