import { leaders } from '../content/leadership.js'
import { LeaderCard } from '../components/LeaderCard.js'
import { LeaderModal } from '../components/LeaderModal.js'

export default function LeadershipSection() {
  return (
    <section id={'team'} className={'section is-markets-features leadership-team-features'}>
      <div className={'w-layout-blockcontainer container about-container w-container'}>
        <div className={'max-width _745px is-centered is-text-center leadership-intro'}>
          <h2 className={'is-space-24'}>{'Our leadership'}</h2>
          <p className={'is-md-font-size-body-l'}>
            {
              'Leading a team of cybersecurity analysts, software developers and remote staff who build and protect the projects people care about.'
            }
          </p>
        </div>
        <div className={'team-grid-wrapper w-dyn-list'}>
          <div role={'list'} className={'team-grid w-dyn-items'}>
            {leaders.map((leader, index) => (
              <LeaderCard key={leader.name} leader={leader} index={index} />
            ))}
          </div>
        </div>
      </div>
      <LeaderModal />
    </section>
  )
}
