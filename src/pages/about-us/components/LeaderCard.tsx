import type { Leader } from '../content/leadership.js'

type LeaderCardProps = {
  index: number
  leader: Leader
}

export function LeaderCard({ index, leader }: LeaderCardProps) {
  return (
    <div role={'listitem'} className={'team-member w-dyn-item'}>
      <div className={'person-image-wrapper'}>
        <img src={leader.image} loading={'lazy'} alt={leader.name} className={'person-image'} />
        {leader.email && (
          <a href={`mailto:${leader.email}`} className={'person-image-link w-inline-block'}>
            <img
              src={
                'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debe_Vector%20(3).svg'
              }
              loading={'lazy'}
              alt={`Email ${leader.name}`}
              className={'linkedin-img'}
            />
          </a>
        )}
      </div>
      <div className={'person-description'}>
        <p className={'is-font-size-title-m is-space-8'}>{leader.name}</p>
        <p className={'is-font-size-body-m height-48 is-color-grey-600'}>{leader.role}</p>
        <div className={'button-bio'}>
          <a
            href={'#'}
            role={'button'}
            aria-haspopup={'dialog'}
            data-leader-open={index}
            className={'button is-purple-button w-inline-block'}
          >
            <p className={'is-font-size-title-s'}>{'Read Bio'}</p>
            <img
              src={
                'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg'
              }
              loading={'lazy'}
              alt={''}
              className={'button-arrow inversed'}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
