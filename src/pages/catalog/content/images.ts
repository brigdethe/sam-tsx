/** Brand photography in public/images/brand, with alt text written once. */
export const brandImages = {
  analyst: {
    src: '/images/brand/security-analyst-kampus-8204353.jpg',
    alt: 'Security analyst reviewing activity on several screens',
  },
  workstation: {
    src: '/images/brand/cyber-workstation-cottonbro-8720270.jpg',
    alt: 'Laptop running security tooling on a desk with network cables',
  },
  serverRack: {
    src: '/images/brand/server-rack-panumas-17489156.jpg',
    alt: 'Server infrastructure in a modern data centre',
  },
  cables: {
    src: '/images/brand/network-cables-brett-sayles-1597776.jpg',
    alt: 'Network cabling in data-centre infrastructure',
  },
  codingLaptop: {
    src: '/images/brand/coding-laptop-cottonbro-5483075.jpg',
    alt: 'Application code open on a laptop',
  },
  developer: {
    src: '/images/brand/software-developer-naboth-otieno-19805876.jpg',
    alt: 'Software developer working through code',
  },
  developerWoman: {
    src: '/images/brand/developer-woman-christina-morillo-1181359.jpg',
    alt: 'Engineer reviewing code at a workstation',
  },
  remoteCoding: {
    src: '/images/brand/remote-coding-thisisengineering-3861964.jpg',
    alt: 'Engineer working on code across two screens',
  },
  collaboration: {
    src: '/images/brand/software-collaboration-mizuno-k-12899191.jpg',
    alt: 'Team reviewing technical work together',
  },
  secureAccessWoman: {
    src: '/images/brand/secure-access-woman-susanne-plank-13657415.jpg',
    alt: 'Identity card used at a secure access reader',
  },
  secureAccessMan: {
    src: '/images/brand/secure-access-man-susanne-plank-13657444.jpg',
    alt: 'Staff member presenting a card to an access control reader',
  },
  smartCard: {
    src: '/images/brand/smart-card-susanne-plank-13657375.jpg',
    alt: 'Access card presented to a secure reader',
  },
  industrial: {
    src: '/images/brand/industrial-automation-freek-wolsink-34222005.jpg',
    alt: 'Industrial automation equipment on a production line',
  },
  training: {
    src: '/images/brand/training-accra-zeal-creative-33920044.jpg',
    alt: 'Technology training session in Accra',
  },
  stemClass: {
    src: '/images/brand/accra-stem-class-zeal-33920052.jpg',
    alt: 'Technology classroom environment in Accra',
  },
  mentoring: {
    src: '/images/brand/accra-tech-mentoring-zeal-33920051.jpg',
    alt: 'Hands-on technology mentoring in Accra',
  },
  stemTeam: {
    src: '/images/brand/accra-stem-team-zeal-33920053.jpg',
    alt: 'Team working through a hands-on technical exercise',
  },
  workshop: {
    src: '/images/brand/accra-electronics-workshop-zeal-33920035.jpg',
    alt: 'Electronics workshop setup in Accra',
  },
  professionalLaptop: {
    src: '/images/brand/accra-professional-laptop-zeal-35372208.jpg',
    alt: 'Professional working on a laptop in Accra',
  },
  laptopAccra: {
    src: '/images/brand/accra-laptop-seth-tetteh-18188382.jpg',
    alt: 'Laptop work session in Accra',
  },
  businessDistrict: {
    src: '/images/brand/accra-business-district-kwaku-37304183.jpg',
    alt: 'Accra business district',
  },
  architecture: {
    src: '/images/brand/accra-modern-architecture-larry-dre-7066315.jpg',
    alt: 'Modern glass architecture in Accra',
  },
  skyline: {
    src: '/images/brand/accra-skyline-prince-enos-31781975.jpg',
    alt: 'Accra city skyline with modern towers',
  },
  storm: {
    src: '/images/brand/accra-spintex-skyline-storm.jpg',
    alt: 'Accra skyline under storm clouds',
  },
  tower: {
    src: '/images/brand/accra-ecobank-tower.jpg',
    alt: 'Office tower rising above Accra',
  },
  growth: {
    src: '/images/brand/accra-growth-prince-enos-31800284.jpg',
    alt: 'Growing commercial district in Accra',
  },
} as const

export type ImageKey = keyof typeof brandImages
