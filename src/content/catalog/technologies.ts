import type { SecurityTechnology } from './types.js'

const svc = (category: string, slug: string) => `/services/${category}/${slug}`

/** Security technology domains, rendered at /technologies/<slug>. */
export const securityTechnologies: SecurityTechnology[] = [
  {
    slug: 'security-operations-center',
    name: 'Security Operations Center (SOC)',
    summary: '24/7 monitoring, detection and response',
    icon: 'monitor',
    tagline: 'watching around the clock',
    heroBody:
      'A security operations centre that monitors your environment around the clock, investigates alerts and responds to threats before they become incidents.',
    overviewBody:
      'Our SOC combines analysts, detection engineering, threat intelligence and automation. We monitor endpoints, identities, networks, cloud and applications, escalate what matters and act within agreed response times.',
    points: [
      '24/7 monitoring by experienced analysts',
      'SIEM, SOAR and EDR integration',
      'Threat intelligence-driven detection',
      'Incident response within agreed SLAs',
      'Monthly service and risk reporting',
    ],
    capabilities: [
      {
        title: 'Managed detection and response',
        body: 'Alerts triaged, investigated and contained by our analysts, with clear escalation to your team.',
      },
      {
        title: 'Detection engineering',
        body: 'Use cases mapped to MITRE ATT&CK and tuned to your environment to keep noise low.',
      },
      {
        title: 'Hybrid or fully managed',
        body: 'We can run your SOC end to end or support your in-house team out of hours.',
      },
    ],
    stack: ['SIEM', 'SOAR', 'UEBA', 'EDR / XDR', 'NDR', 'Threat intelligence platforms'],
    relatedServices: [
      svc('cyber-fusion-platform', 'soar-services'),
      svc('cyber-fusion-platform', 'security-analytics'),
      svc('cyber-fusion-platform', 'soc-optimization'),
      svc('cyber-fusion-platform', 'threat-intelligence'),
      svc('enhanced-soc-services', 'security-data-pipeline'),
    ],
    images: ['analyst', 'workstation'],
  },
  {
    slug: 'data-security',
    name: 'Data Security',
    summary: 'Discover, classify, encrypt and control data',
    icon: 'database',
    tagline: 'that follows the data',
    heroBody:
      'Technologies that discover, classify, encrypt and control sensitive data across endpoints, servers, databases and cloud services.',
    overviewBody:
      'We design and deploy data security platforms matched to your data, your regulators and your budget, and we tune them so they protect information without getting in the way of work.',
    points: [
      'Data discovery and classification',
      'Encryption and key management',
      'Data loss prevention across channels',
      'Database activity monitoring',
    ],
    capabilities: [
      {
        title: 'Visibility first',
        body: 'Automated discovery shows where sensitive data lives before controls are designed.',
      },
      {
        title: 'Layered protection',
        body: 'Classification, encryption, access control and DLP working together.',
      },
      {
        title: 'Compliance support',
        body: 'Controls and reporting aligned with the Data Protection Act, 2012 (Act 843).',
      },
    ],
    stack: [
      'Data discovery & classification',
      'DLP',
      'Encryption & HSM',
      'Database activity monitoring',
      'Rights management',
      'DSPM',
    ],
    relatedServices: [
      svc('data-privacy-protection', 'data-security-protection'),
      svc('data-privacy-protection', 'data-security-governance'),
      svc('data-privacy-protection', 'data-loss-prevention'),
    ],
    images: ['serverRack', 'professionalLaptop'],
  },
  {
    slug: 'endpoint-security',
    name: 'Endpoint Security',
    summary: 'Protection, detection and response on devices',
    icon: 'laptop',
    tagline: 'on every device',
    heroBody:
      'Endpoint protection, detection and response for laptops, servers and mobile devices, deployed, tuned and monitored by our team.',
    overviewBody:
      'Modern endpoint platforms combine prevention with behaviour-based detection and remote response. We help you choose, deploy and operate them, so every device is protected and threats are contained quickly.',
    points: [
      'Next-generation antivirus and EDR',
      'Device control and application control',
      'Mobile device management and protection',
      'Patch and configuration management',
    ],
    capabilities: [
      {
        title: 'Prevent',
        body: 'Block known and unknown malware, exploits and ransomware behaviour.',
      },
      {
        title: 'Detect and respond',
        body: 'Investigate and isolate compromised devices remotely, in seconds.',
      },
      {
        title: 'Harden',
        body: 'Secure baselines, least privilege and patching reduce the attack surface.',
      },
    ],
    stack: ['NGAV', 'EDR / XDR', 'MDM / UEM', 'Application control', 'Patch management'],
    relatedServices: [
      svc('endpoint-security', 'endpoint-security-services'),
      svc('endpoint-security', 'edr-xdr-deployment'),
      svc('endpoint-security', 'endpoint-hardening'),
    ],
    images: ['laptopAccra', 'workstation'],
  },
  {
    slug: 'email-security',
    name: 'Email Security',
    summary: 'Stop phishing, impersonation and email fraud',
    icon: 'mail',
    tagline: 'for the inbox attackers target',
    heroBody:
      'Protection against phishing, business email compromise, malware and domain spoofing, for Microsoft 365, Google Workspace and on-premises mail.',
    overviewBody:
      'Email is still the most common way attacks begin. We configure layered email defences, authenticate your domains so attackers cannot impersonate you, and train staff to spot what gets through.',
    points: [
      'Secure email gateway and API-based protection',
      'Business email compromise and impersonation detection',
      'SPF, DKIM and DMARC deployment',
      'User reporting and automated remediation',
    ],
    capabilities: [
      {
        title: 'Layered filtering',
        body: 'Gateway and in-mailbox protection that catch malicious links, attachments and lures.',
      },
      {
        title: 'Domain protection',
        body: 'DMARC enforcement so criminals cannot send email as your organisation.',
      },
      {
        title: 'Fast clean-up',
        body: 'Reported phishing removed from every mailbox automatically.',
      },
    ],
    stack: [
      'Secure email gateway',
      'API-based email security',
      'DMARC',
      'Sandboxing',
      'Phishing simulation',
    ],
    relatedServices: [
      svc('enhanced-soc-services', 'phishing-as-a-service'),
      svc('cloud-security', 'microsoft-cloud-security'),
      svc('cloud-security', 'google-cloud-security'),
      svc('security-awareness-enablement', 'security-awareness-enablement-services'),
    ],
    images: ['professionalLaptop', 'laptopAccra'],
  },
  {
    slug: 'network-infrastructure-security',
    name: 'Network & Infrastructure Security',
    summary: 'Firewalls, segmentation, NAC and secure access',
    icon: 'network',
    tagline: 'from the core to the edge',
    heroBody:
      'Next-generation firewalls, segmentation, network access control, secure remote access and network monitoring, designed and delivered end to end.',
    overviewBody:
      'We design secure networks for offices, data centres and industrial sites, source equipment through our ICT procurement team and configure it to best practice, so your network contains attacks instead of spreading them.',
    points: [
      'Next-generation firewalls and IPS',
      'Segmentation and micro-segmentation',
      'Network access control',
      'Secure remote access and ZTNA',
      'Network detection and response',
    ],
    capabilities: [
      {
        title: 'Design and build',
        body: 'Architecture, procurement, installation and configuration from one team.',
      },
      {
        title: 'Zero trust',
        body: 'Access granted per user, device and application, not by network location.',
      },
      {
        title: 'Visibility',
        body: 'Network monitoring that spots lateral movement and data exfiltration.',
      },
    ],
    stack: ['NGFW', 'IPS', 'NAC', 'SD-WAN / SASE', 'ZTNA', 'NDR'],
    relatedServices: [
      svc('network-infrastructure-security', 'security-architecture-review'),
      svc('network-infrastructure-security', 'network-segmentation'),
      svc('network-infrastructure-security', 'network-security-architecture-implementation'),
      svc('network-infrastructure-security', 'network-security-platform-services'),
      svc('ot-security', 'ot-architecture-review'),
    ],
    images: ['cables', 'serverRack'],
  },
  {
    slug: 'cloud-security',
    name: 'Cloud Security',
    summary: 'Posture management and workload protection',
    icon: 'cloud',
    tagline: 'across every provider',
    heroBody:
      'Cloud security posture management, workload protection and identity controls for AWS, Microsoft Azure, Google Cloud and SaaS.',
    overviewBody:
      'Cloud-native security tools are powerful when they are configured well. We deploy posture management, workload protection and cloud detection, and connect them to your SOC and engineering workflows.',
    points: [
      'Cloud security posture management (CSPM)',
      'Cloud workload protection (CWPP)',
      'Cloud identity and entitlement management',
      'Container and Kubernetes security',
    ],
    capabilities: [
      {
        title: 'Continuous posture',
        body: 'Misconfigurations found and prioritised across every account and subscription.',
      },
      {
        title: 'Workload protection',
        body: 'Threat detection for virtual machines, containers and serverless functions.',
      },
      {
        title: 'Engineering integration',
        body: 'Findings routed to the teams and pipelines that can fix them.',
      },
    ],
    stack: ['CSPM', 'CWPP', 'CNAPP', 'CIEM', 'SSPM', 'Container security'],
    relatedServices: [
      svc('cloud-security', 'cloud-security-assessments'),
      svc('cloud-security', 'multi-cloud-security'),
      svc('cloud-security', 'container-security'),
      svc('cloud-security', 'cloud-security-engineering'),
      svc('red-teaming', 'cloud-penetration-testing'),
    ],
    images: ['serverRack', 'remoteCoding'],
  },
  {
    slug: 'application-security',
    name: 'Application Security',
    summary: 'Testing, code analysis and runtime protection',
    icon: 'code',
    tagline: 'built into delivery',
    heroBody:
      'Static and dynamic testing, software composition analysis, API security and web application firewalls, built into your development lifecycle.',
    overviewBody:
      'We help development teams adopt the right application security tooling, integrate it into pipelines and tune it, so developers get accurate findings early and production applications stay protected.',
    points: [
      'Static and dynamic application security testing',
      'Software composition analysis and SBOM',
      'API discovery and protection',
      'Web application firewalls and bot protection',
    ],
    capabilities: [
      {
        title: 'Pipeline integration',
        body: 'Security checks in pull requests and builds, with clear pass and fail rules.',
      },
      {
        title: 'Accurate findings',
        body: 'Tool output tuned and triaged so developers trust the results.',
      },
      {
        title: 'Runtime protection',
        body: 'WAF and API protection shield applications while fixes are delivered.',
      },
    ],
    stack: ['SAST', 'DAST', 'SCA / SBOM', 'API security', 'WAF', 'Secrets scanning'],
    relatedServices: [
      svc('application-security', 'application-security-assessments'),
      svc('application-security', 'source-code-review'),
      svc('application-security', 'application-threat-modeling'),
      svc('application-security', 'mobile-application-security-assessment'),
      svc('red-teaming', 'application-vulnerability-scanning'),
    ],
    images: ['codingLaptop', 'developerWoman'],
  },
  {
    slug: 'identity-access-management',
    name: 'Identity & Access Management (IAM)',
    summary: 'SSO, MFA, PAM and identity governance',
    icon: 'key',
    tagline: 'the new perimeter',
    heroBody:
      'Single sign-on, multi-factor authentication, privileged access management, identity governance and customer identity platforms.',
    overviewBody:
      'Identity is now the front line of security. We design and implement identity platforms that verify every user and device, keep privileges minimal and give auditors clear evidence of who has access to what.',
    points: [
      'Single sign-on and MFA',
      'Identity governance and administration',
      'Privileged access management',
      'Customer identity and access management',
      'Identity threat detection and response',
    ],
    capabilities: [
      {
        title: 'Workforce identity',
        body: 'Secure, simple access for staff and partners across every application.',
      },
      {
        title: 'Privileged control',
        body: 'Vaulted credentials, just-in-time admin rights and recorded sessions.',
      },
      {
        title: 'Customer identity',
        body: 'Secure, low-friction sign-up and login for your digital services.',
      },
    ],
    stack: ['SSO', 'MFA / passwordless', 'IGA', 'PAM', 'CIAM', 'ITDR'],
    relatedServices: [
      svc('identity-access-management', 'iam-implementation'),
      svc('identity-access-management', 'access-management'),
      svc('identity-access-management', 'privileged-access-management'),
      svc('identity-access-management', 'customer-identity-access-management'),
      svc('identity-access-management', 'identity-as-a-service'),
    ],
    images: ['secureAccessWoman', 'smartCard'],
  },
  {
    slug: 'incident-response-threat-intelligence',
    name: 'Incident Response (IR) & Threat Intelligence',
    summary: 'Forensics, response tooling and threat intelligence',
    icon: 'siren',
    tagline: 'ready before you need it',
    heroBody:
      'Forensic, response and threat intelligence technologies that help you investigate faster, contain attacks and anticipate what is coming next.',
    overviewBody:
      'Good response depends on preparation. We deploy the forensic collection, response automation and intelligence platforms your team needs, and our responders use them alongside you when an incident happens.',
    points: [
      'Forensic acquisition and analysis tooling',
      'Remote response and containment capability',
      'Threat intelligence platform and feeds',
      'Case management and evidence tracking',
    ],
    capabilities: [
      {
        title: 'Forensic readiness',
        body: 'Logging and collection tools in place so evidence exists when you need it.',
      },
      {
        title: 'Response at scale',
        body: 'Investigate and contain across hundreds of devices at once.',
      },
      {
        title: 'Intelligence-led',
        body: 'Indicators and attacker profiles that sharpen detection and hunting.',
      },
    ],
    stack: [
      'DFIR tooling',
      'EDR response',
      'Threat intelligence platform',
      'SOAR',
      'Case management',
    ],
    relatedServices: [
      svc('incident-response-threat-intelligence', 'incident-response-retainer'),
      svc('incident-response-threat-intelligence', 'incident-response'),
      svc('incident-response-threat-intelligence', 'digital-forensics'),
      svc('incident-response-threat-intelligence', 'threat-hunting-discovery'),
      svc('cyber-fusion-platform', 'threat-intelligence'),
    ],
    images: ['storm', 'analyst'],
  },
  {
    slug: 'vulnerability-management',
    name: 'Vulnerability Management',
    summary: 'Find, prioritise and fix weaknesses continuously',
    icon: 'bug',
    tagline: 'prioritised by real risk',
    heroBody:
      'Asset discovery, vulnerability scanning, exposure management and attack simulation technologies that keep weaknesses visible and fixed.',
    overviewBody:
      'We deploy and operate vulnerability management platforms that cover infrastructure, cloud and applications, and combine them with exploit intelligence so your team fixes the issues attackers are actually using.',
    points: [
      'Asset discovery and attack surface management',
      'Infrastructure and application scanning',
      'Risk-based prioritisation',
      'Breach and attack simulation',
    ],
    capabilities: [
      {
        title: 'Complete coverage',
        body: 'On-premises, cloud, remote devices and internet-facing assets in one view.',
      },
      {
        title: 'Smart prioritisation',
        body: 'Exploit intelligence and asset context rank what to fix first.',
      },
      {
        title: 'Proof of closure',
        body: 'Rescans and simulations confirm that fixes really work.',
      },
    ],
    stack: ['Vulnerability scanning', 'EASM', 'Exposure management', 'BAS', 'Patch orchestration'],
    relatedServices: [
      svc('enhanced-soc-services', 'vulnerability-management-as-a-service'),
      svc('enhanced-soc-services', 'penetration-testing-as-a-service'),
      svc('enhanced-soc-services', 'breach-attack-simulation'),
      svc('red-teaming', 'red-team-assessments'),
    ],
    images: ['workstation', 'cables'],
  },
  {
    slug: 'security-awareness-education',
    name: 'Security Awareness & Education',
    summary: 'Learning platforms, simulations and culture metrics',
    icon: 'users',
    tagline: 'that builds a security culture',
    heroBody:
      'Learning platforms, phishing simulation and behaviour analytics that help people recognise and report threats, measured over time.',
    overviewBody:
      'We combine awareness technology with expert-led sessions. Platforms deliver short, relevant lessons and simulations; our team designs the programme, localises the content and reports on behaviour change.',
    points: [
      'Security awareness learning platforms',
      'Phishing and social engineering simulation',
      'One-click phishing reporting',
      'Behaviour and culture analytics',
    ],
    capabilities: [
      {
        title: 'Relevant content',
        body: 'Lessons and lures that reflect threats facing organisations in Ghana.',
      },
      {
        title: 'Continuous learning',
        body: 'Short, regular learning moments instead of one annual course.',
      },
      {
        title: 'Measured culture',
        body: 'Metrics that show reporting improving and risky behaviour falling.',
      },
    ],
    stack: [
      'Learning management',
      'Phishing simulation',
      'Report-phish add-ins',
      'Culture analytics',
    ],
    relatedServices: [
      svc('security-awareness-enablement', 'security-awareness-enablement-services'),
      svc('security-awareness-enablement', 'executive-cyber-briefings'),
      svc('enhanced-soc-services', 'phishing-as-a-service'),
      svc('incident-response-threat-intelligence', 'tabletop-exercises'),
    ],
    images: ['training', 'mentoring'],
  },
]
