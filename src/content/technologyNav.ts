export type TechnologyNavItem = {
  href: string
  label: string
  /** Security technology slugs (content/catalog/technologies.ts) shown as this solution's sub-technologies. */
  technologies?: string[]
}

/** Technologies dropdown + footer solution links */
export const technologyNavItems: TechnologyNavItem[] = [
  {
    href: '/cybersecurity-services',
    label: 'Security Assessment',
    technologies: [
      'security-operations-center',
      'vulnerability-management',
      'incident-response-threat-intelligence',
      'email-security',
      'data-security',
      'cloud-security',
    ],
  },
  {
    href: '/software-development',
    label: 'Software Development',
    technologies: ['application-security'],
  },
  { href: '/software-products', label: 'Software Products' },
  {
    href: '/iot-smart-cards',
    label: 'IoT & Smart Cards',
    technologies: ['identity-access-management'],
  },
  { href: '/uav', label: 'UAV Operations' },
  {
    href: '/ict-procurement',
    label: 'ICT Procurement',
    technologies: ['network-infrastructure-security', 'endpoint-security'],
  },
  { href: '/training', label: 'Training', technologies: ['security-awareness-education'] },
]

/** The solution a security technology sits under, for menus and breadcrumbs. */
export function parentSolution(technologySlug: string): TechnologyNavItem | undefined {
  return technologyNavItems.find((item) => item.technologies?.includes(technologySlug))
}
