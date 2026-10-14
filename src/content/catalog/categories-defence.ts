import type { ServiceCategory } from './types.js'

/** Response and defence: incident response, applications, endpoints and networks. */
export const defenceCategories: ServiceCategory[] = [
  {
    slug: 'incident-response-threat-intelligence',
    name: 'Incident Response & Threat Intelligence',
    summary: 'Prepare for, respond to and recover from attacks',
    icon: 'siren',
    tagline: 'when every minute counts',
    heroBody:
      'Retainers, readiness programmes, hands-on response and forensics that help you contain attacks quickly and come back stronger.',
    overviewBody:
      'An incident is the worst time to find a responder or write a plan. We help you prepare in advance, respond with an experienced team when something happens, and learn from every event.',
    approach: [
      {
        title: 'Prepare',
        body: 'Plans, playbooks, contacts and tooling agreed before an incident, so response starts immediately.',
      },
      {
        title: 'Contain',
        body: 'Isolate affected systems, stop the spread and preserve evidence in the first critical hours.',
      },
      {
        title: 'Investigate and recover',
        body: 'Find the root cause, remove the attacker and restore services safely from trusted backups.',
      },
      {
        title: 'Learn and harden',
        body: 'A blameless review turns lessons into concrete improvements to controls and processes.',
      },
    ],
    benefits: [
      {
        title: 'Faster containment',
        body: 'A team that already knows your environment can act in hours, not days.',
      },
      {
        title: 'Lower impact',
        body: 'Quick, coordinated action reduces downtime, data loss and recovery cost.',
      },
      {
        title: 'Defensible decisions',
        body: 'Evidence and timelines support regulatory reporting, insurers and legal counsel.',
      },
      {
        title: 'Stronger afterwards',
        body: 'Every incident leaves you with better detection and fewer weaknesses.',
      },
    ],
    images: ['storm', 'analyst', 'workstation'],
    technology: 'incident-response-threat-intelligence',
    services: [
      {
        slug: 'incident-response-retainer',
        name: 'Incident Response Retainer Services',
        summary: 'Guaranteed response times from an expert team',
        tagline: 'on call when you need it',
        heroBody:
          'Guaranteed access to experienced incident responders, with agreed response times and pre-approved scope, so help is a phone call away.',
        overviewBody:
          'A retainer removes delay when it matters most. We onboard your environment in advance, agree how to reach you and what we are allowed to do, and any unused hours can go towards readiness work such as tabletop exercises.',
        points: [
          'Agreed response times, 24 hours a day',
          'Environment onboarding before any incident',
          'Remote and on-site response in Ghana',
          'Unused hours redeemable for readiness services',
        ],
        capabilities: [
          {
            title: 'Rapid mobilisation',
            body: 'Pre-agreed contracts and contacts mean responders start work within the agreed window.',
          },
          {
            title: 'Pre-staged tooling',
            body: 'Forensic and response tools ready to deploy in your environment on day one.',
          },
          {
            title: 'Flexible hours',
            body: 'Convert unused hours into assessments, training or exercises before the term ends.',
          },
        ],
        deliverables: [
          'Retainer agreement with response SLAs',
          'Onboarding and environment profile',
          'Escalation and contact plan',
          'Annual readiness review',
        ],
        keywords: ['incident response retainer', 'IR retainer', 'cyber incident support Ghana'],
      },
      {
        slug: 'ir-enablement',
        name: 'IR Enablement Services',
        summary: 'Build your in-house incident response capability',
        tagline: 'that your team can run',
        heroBody:
          'Plans, playbooks, tooling and training that give your own team the confidence and capability to handle security incidents.',
        overviewBody:
          'We assess your current readiness, then build what is missing: an incident response plan, role-based playbooks, communication templates, evidence handling procedures and the tools to investigate.',
        points: [
          'Incident response readiness assessment',
          'Incident response plan and playbooks',
          'Logging and forensic readiness review',
          'Team training and coaching',
        ],
        capabilities: [
          {
            title: 'Plan and playbooks',
            body: 'Clear roles, decision points and checklists for ransomware, data breaches, fraud and account compromise.',
          },
          {
            title: 'Forensic readiness',
            body: 'Logs, retention and tooling in place so investigations have the evidence they need.',
          },
          {
            title: 'Skills transfer',
            body: 'Hands-on training so your analysts can triage, scope and contain incidents themselves.',
          },
        ],
        deliverables: [
          'Readiness assessment report',
          'Incident response plan',
          'Scenario playbooks and templates',
          'Training completion records',
        ],
        keywords: ['incident response plan', 'IR readiness', 'IR playbooks'],
      },
      {
        slug: 'ransomware-readiness',
        name: 'Ransomware Readiness',
        summary: 'Assess and harden your defences against ransomware',
        tagline: 'before the ransom note',
        heroBody:
          'A focused assessment of how well you would prevent, detect and recover from a ransomware attack, followed by the fixes that make the biggest difference.',
        overviewBody:
          'Ransomware groups follow predictable paths: phishing or exposed services, credential theft, privilege escalation, backup destruction, encryption and extortion. We test each stage of that path in your environment and close the gaps.',
        points: [
          'Attack path review from initial access to encryption',
          'Backup isolation and recovery testing',
          'Privileged access and Active Directory hardening',
          'Detection coverage for ransomware behaviours',
        ],
        capabilities: [
          {
            title: 'Recovery assurance',
            body: 'We prove that backups are isolated, complete and restorable within your target times.',
          },
          {
            title: 'Identity hardening',
            body: 'Removing the credential and privilege weaknesses ransomware operators rely on.',
          },
          {
            title: 'Decision planning',
            body: 'Pre-agreed positions on extortion, communication and regulatory notification.',
          },
        ],
        deliverables: [
          'Ransomware readiness scorecard',
          'Backup and recovery test results',
          'Prioritised hardening plan',
          'Ransomware response playbook',
        ],
        keywords: ['ransomware readiness', 'ransomware assessment', 'backup recovery'],
      },
      {
        slug: 'threat-hunting-discovery',
        name: 'Threat Hunting & Discovery',
        summary: 'Proactively search for attackers already inside',
        tagline: 'for threats already inside',
        heroBody:
          'Hypothesis-driven hunts across your endpoints, network and cloud to find attackers and weaknesses that automated tools have missed.',
        overviewBody:
          'Skilled attackers avoid triggering alerts. Our hunters use threat intelligence and knowledge of attacker techniques to search for subtle signs of compromise, and every hunt produces new detections so the same activity is caught automatically next time.',
        points: [
          'Compromise assessment for a point-in-time check',
          'Recurring hunts driven by current threat intelligence',
          'Endpoint, identity, network and cloud telemetry',
          'New detection rules from every hunt',
        ],
        capabilities: [
          {
            title: 'Compromise assessment',
            body: 'A deep sweep to answer one question: is an attacker already in our environment?',
          },
          {
            title: 'Intelligence-led hunts',
            body: 'Hunts built around the tactics of groups currently targeting your sector.',
          },
          {
            title: 'Detection uplift',
            body: 'Findings become tuned detections in your SIEM and EDR.',
          },
        ],
        deliverables: [
          'Hunt plan and hypotheses',
          'Findings and evidence report',
          'New detection rules',
          'Hardening recommendations',
        ],
        keywords: ['threat hunting', 'compromise assessment'],
      },
      {
        slug: 'incident-response',
        name: 'Incident Response',
        summary: 'Hands-on containment, eradication and recovery',
        tagline: 'that contains the damage',
        heroBody:
          'Experienced responders who contain an active attack, remove the attacker, restore operations and give you a clear account of what happened.',
        overviewBody:
          'If you are dealing with an incident now, call us. We triage the situation, coordinate containment with your IT team, investigate the scope and root cause, and support communication with leadership, regulators and customers.',
        points: [
          'Immediate triage and containment guidance',
          'Scoping and root-cause investigation',
          'Attacker eradication and safe recovery',
          'Support for regulator and stakeholder reporting',
        ],
        capabilities: [
          {
            title: 'Incident command',
            body: 'A clear lead who coordinates technical, business and communication workstreams.',
          },
          {
            title: 'Investigation',
            body: 'Forensic analysis of endpoints, logs and cloud activity to establish the full timeline.',
          },
          {
            title: 'Recovery',
            body: 'Clean rebuilds, credential resets and monitoring to stop the attacker returning.',
          },
        ],
        deliverables: [
          'Situation reports during the incident',
          'Incident timeline and root cause',
          'Final incident report',
          'Post-incident improvement plan',
        ],
        keywords: ['incident response', 'cyber attack response', 'breach response Ghana'],
      },
      {
        slug: 'ransomware-response',
        name: 'Ransomware Response Services',
        summary: 'Specialist help to contain and recover from ransomware',
        tagline: 'to get you back online',
        heroBody:
          'Specialist support through a ransomware attack: containment, impact assessment, recovery planning and guidance on extortion and notification decisions.',
        overviewBody:
          'Ransomware brings technical, legal and business pressure at once. We stop the spread, establish what was encrypted and stolen, prioritise recovery of critical services and help leadership make informed decisions.',
        points: [
          'Containment and spread prevention',
          'Data theft and encryption impact assessment',
          'Prioritised restoration of critical services',
          'Guidance on extortion, legal and notification decisions',
        ],
        capabilities: [
          {
            title: 'Stop the spread',
            body: 'Network isolation, account lockdown and endpoint containment in the first hours.',
          },
          {
            title: 'Impact clarity',
            body: 'Evidence of what was accessed and taken, to inform notification and legal advice.',
          },
          {
            title: 'Structured recovery',
            body: 'A recovery sequence based on business priority, with validation before reconnection.',
          },
        ],
        deliverables: [
          'Containment actions log',
          'Impact and data exposure assessment',
          'Recovery plan and progress tracking',
          'Final report and lessons learned',
        ],
        keywords: ['ransomware response', 'ransomware recovery'],
      },
      {
        slug: 'digital-forensics',
        name: 'Digital Forensics Services',
        summary: 'Evidence-grade investigation of devices and systems',
        tagline: 'that stand up to scrutiny',
        heroBody:
          'Evidence-grade acquisition and analysis of computers, mobile devices, email and cloud accounts for incidents, internal investigations and legal matters.',
        overviewBody:
          'Our forensic examiners follow documented procedures and chain-of-custody controls, so findings are reliable and defensible. We support security incidents, fraud, HR investigations and matters that may involve law enforcement or the courts.',
        points: [
          'Forensic acquisition with chain of custody',
          'Computer, mobile and cloud account analysis',
          'Email and document examination',
          'Expert reports for legal and disciplinary use',
        ],
        capabilities: [
          {
            title: 'Sound acquisition',
            body: 'Verified forensic images and logs collected without altering the original evidence.',
          },
          {
            title: 'Deep analysis',
            body: 'Timeline reconstruction, deleted data recovery and artefact analysis across devices.',
          },
          {
            title: 'Clear reporting',
            body: 'Findings written for non-technical readers, with technical appendices for experts.',
          },
        ],
        deliverables: [
          'Chain-of-custody records',
          'Forensic analysis report',
          'Timeline of key events',
          'Expert support for proceedings',
        ],
        keywords: ['digital forensics', 'computer forensics Ghana', 'mobile forensics'],
      },
      {
        slug: 'tabletop-exercises',
        name: 'Tabletop Exercises',
        summary: 'Rehearse decisions in realistic attack scenarios',
        tagline: 'before it happens for real',
        heroBody:
          'Facilitated scenarios that let executives and technical teams rehearse their response to ransomware, data breaches and other crises in a safe setting.',
        overviewBody:
          'Plans only work if people have practised them. Our exercises are built around realistic scenarios for your organisation and sector, with injects that test decision-making, communication and coordination under pressure.',
        points: [
          'Executive and technical exercise tracks',
          'Scenarios tailored to your sector and threats',
          'Realistic injects for media, regulators and customers',
          'After-action report with clear improvements',
        ],
        capabilities: [
          {
            title: 'Scenario design',
            body: 'Exercises built from real incidents and your own systems, not generic scripts.',
          },
          {
            title: 'Expert facilitation',
            body: 'Experienced responders guide the session and challenge assumptions constructively.',
          },
          {
            title: 'Actionable outcomes',
            body: 'Gaps in plans, roles and tooling recorded and turned into an improvement plan.',
          },
        ],
        deliverables: [
          'Exercise scenario and materials',
          'Facilitated session',
          'After-action report',
          'Updated playbook recommendations',
        ],
        keywords: ['tabletop exercise', 'cyber crisis simulation'],
      },
      {
        slug: 'purple-team-assessments',
        name: 'Purple Team Assessments',
        summary: 'Attackers and defenders working side by side',
        tagline: 'that sharpens your defenders',
        heroBody:
          'Our offensive specialists execute attack techniques while your defenders watch, detect and respond in real time, improving detection together.',
        overviewBody:
          'Purple teaming is collaborative. Each technique is run, observed and discussed: did it generate telemetry, did it alert, did the analyst respond correctly? Gaps are fixed during the engagement and retested immediately.',
        points: [
          'Technique-by-technique execution mapped to ATT&CK',
          'Live collaboration with your SOC analysts',
          'Detection rules created and validated on the spot',
          'Before-and-after coverage measurement',
        ],
        capabilities: [
          {
            title: 'Collaborative testing',
            body: 'Red and blue working together, so every finding is understood by the people who fix it.',
          },
          {
            title: 'Detection engineering',
            body: 'New detections written, tested and deployed during the engagement.',
          },
          {
            title: 'Measured improvement',
            body: 'Coverage scores before and after show exactly what improved.',
          },
        ],
        deliverables: [
          'Test plan and technique list',
          'Detection coverage results',
          'New and tuned detection rules',
          'Purple team report',
        ],
        keywords: ['purple team', 'detection validation'],
      },
    ],
  },
  {
    slug: 'application-security',
    name: 'Application Security',
    summary: 'Secure software from design to release',
    icon: 'code',
    tagline: 'from design to deployment',
    heroBody:
      'Architecture reviews, threat modelling, testing and code review that find and fix weaknesses in your web, API and mobile applications.',
    overviewBody:
      'Applications are where your customers and data meet, and where attackers look first. As a company that builds software as well as secures it, we help development teams ship secure code without slowing down.',
    approach: [
      {
        title: 'Understand the design',
        body: 'Review architecture, data flows and trust boundaries with your architects and developers.',
      },
      {
        title: 'Model the threats',
        body: 'Identify how the application could be abused and which controls should stop it.',
      },
      {
        title: 'Test and review',
        body: 'Manual and automated testing of running applications and source code.',
      },
      {
        title: 'Fix and embed',
        body: 'Developer-friendly fixes, retesting and secure development practices for next time.',
      },
    ],
    benefits: [
      {
        title: 'Fewer vulnerabilities in production',
        body: 'Issues are caught in design and development, where they cost least to fix.',
      },
      {
        title: 'Developer-friendly',
        body: 'Findings come with code-level guidance from people who build software too.',
      },
      {
        title: 'Customer confidence',
        body: 'Independent testing evidence for clients, partners and regulators.',
      },
      {
        title: 'Secure by habit',
        body: 'Practices and tooling that make secure development the default.',
      },
    ],
    images: ['codingLaptop', 'developerWoman', 'remoteCoding'],
    technology: 'application-security',
    services: [
      {
        slug: 'application-security-architecture-review',
        name: 'Application Security Architecture Review',
        summary: 'Expert review of application design and controls',
        tagline: 'before a line is written',
        heroBody:
          'An expert review of your application architecture, authentication, data handling and integrations, to catch design flaws that testing alone will miss.',
        overviewBody:
          'Design flaws are the most expensive vulnerabilities to fix later. We review architecture documents and talk to your engineers to assess authentication, authorisation, session handling, data protection, integrations and infrastructure.',
        points: [
          'Authentication and authorisation model review',
          'Data protection and secrets handling',
          'API and third-party integration design',
          'Hosting, network and deployment architecture',
        ],
        capabilities: [
          {
            title: 'Design analysis',
            body: 'Trust boundaries and data flows examined against secure design principles.',
          },
          {
            title: 'Control mapping',
            body: 'Required controls mapped to OWASP ASVS levels appropriate to your risk.',
          },
          {
            title: 'Pragmatic advice',
            body: 'Recommendations sized to your delivery plans, with alternatives where needed.',
          },
        ],
        deliverables: [
          'Architecture risk assessment',
          'Annotated data flow diagrams',
          'Control requirements list',
          'Prioritised design recommendations',
        ],
        keywords: ['application architecture review', 'secure design review'],
      },
      {
        slug: 'application-security-program-assessment',
        name: 'Application Security Program Assessment',
        summary: 'Measure and mature your secure development programme',
        tagline: 'that matures with you',
        heroBody:
          'An assessment of how your organisation builds secure software, measured against OWASP SAMM, with a practical roadmap to improve.',
        overviewBody:
          'We look at governance, design, implementation, verification and operations across your development teams. You get an honest maturity score and a roadmap of improvements that fit how your teams already work.',
        points: [
          'OWASP SAMM maturity assessment',
          'Secure development lifecycle review',
          'Tooling and pipeline coverage analysis',
          'Developer training and champion programme review',
        ],
        capabilities: [
          {
            title: 'Maturity baseline',
            body: 'Interviews and evidence review produce a scored view of every practice area.',
          },
          {
            title: 'Roadmap',
            body: 'Improvements prioritised by risk reduction and effort, over 6 to 18 months.',
          },
          {
            title: 'Metrics',
            body: 'Measures to track progress, such as time to fix and vulnerability escape rate.',
          },
        ],
        deliverables: [
          'SAMM maturity scorecard',
          'Gap analysis report',
          'Improvement roadmap',
          'Programme metrics framework',
        ],
        keywords: ['OWASP SAMM', 'secure SDLC', 'AppSec program'],
      },
      {
        slug: 'application-threat-modeling',
        name: 'Application Threat Modelling',
        summary: 'Identify abuse cases and the controls to stop them',
        tagline: 'that thinks like an attacker',
        heroBody:
          'Structured threat modelling workshops that identify how an application could be attacked and which controls must be in place to stop it.',
        overviewBody:
          'We run threat modelling with your product and engineering teams using proven methods such as STRIDE and attack trees. The output is a living model that guides design decisions, test plans and backlog priorities.',
        points: [
          'Facilitated workshops with product and engineering',
          'STRIDE and attack-tree analysis',
          'Abuse cases and security user stories',
          'Threat models kept up to date as features change',
        ],
        capabilities: [
          {
            title: 'Workshop facilitation',
            body: 'Structured sessions that keep discussion focused and produce decisions.',
          },
          {
            title: 'Backlog-ready output',
            body: 'Threats translated into security requirements and test cases your team can deliver.',
          },
          {
            title: 'Team enablement',
            body: 'Templates and coaching so teams can threat model new features themselves.',
          },
        ],
        deliverables: [
          'Threat model and diagrams',
          'Threat and mitigation register',
          'Security user stories',
          'Threat modelling playbook',
        ],
        keywords: ['threat modelling', 'STRIDE'],
      },
      {
        slug: 'application-security-assessments',
        name: 'Application Security Assessments',
        summary: 'Manual and automated testing of web apps and APIs',
        tagline: 'for web apps and APIs',
        heroBody:
          'In-depth testing of web applications and APIs against the OWASP Top 10 and beyond, including business logic flaws that scanners cannot find.',
        overviewBody:
          'Our testers combine automated scanning with manual exploration of authentication, authorisation, input handling and business logic. Every confirmed issue includes evidence, impact and developer-ready remediation.',
        points: [
          'Web application and API penetration testing',
          'Authenticated testing across user roles',
          'Business logic and authorisation testing',
          'OWASP Top 10 and API Security Top 10 coverage',
        ],
        capabilities: [
          {
            title: 'Manual depth',
            body: 'Logic flaws, access control bypasses and chained exploits found by experienced testers.',
          },
          {
            title: 'API focus',
            body: 'REST and GraphQL testing for broken object-level authorisation and data exposure.',
          },
          {
            title: 'Free retest',
            body: 'We confirm each fix works and issue an updated report.',
          },
        ],
        deliverables: [
          'Executive summary',
          'Technical findings with evidence',
          'Developer remediation guidance',
          'Retest report',
        ],
        keywords: ['web application penetration testing', 'API security testing', 'OWASP'],
      },
      {
        slug: 'mobile-application-security-assessment',
        name: 'Mobile Application Security Assessment',
        summary: 'Test Android and iOS apps and their back ends',
        tagline: 'for Android and iOS',
        heroBody:
          'Security testing of Android and iOS applications and the APIs behind them, following the OWASP Mobile Application Security standard.',
        overviewBody:
          'Mobile apps carry payment, identity and personal data in an environment you do not control. We test data storage, communication, authentication, tamper resistance and back-end APIs, on real devices.',
        points: [
          'Static and dynamic analysis of app binaries',
          'Local data storage and keychain review',
          'Certificate pinning and network traffic analysis',
          'Back-end API testing',
          'OWASP MASVS-aligned reporting',
        ],
        capabilities: [
          {
            title: 'Device-level testing',
            body: 'Testing on rooted and jailbroken devices to see what an attacker could extract.',
          },
          {
            title: 'Fintech experience',
            body: 'Scenarios for mobile money, payments and onboarding flows common in Ghana.',
          },
          {
            title: 'End-to-end view',
            body: 'App and API tested together, because most mobile breaches start at the back end.',
          },
        ],
        deliverables: [
          'Mobile security assessment report',
          'MASVS compliance view',
          'Remediation guidance for developers',
          'Retest confirmation',
        ],
        keywords: ['mobile app security testing', 'Android security', 'iOS security', 'MASVS'],
      },
      {
        slug: 'source-code-review',
        name: 'Source Code Review',
        summary: 'Find vulnerabilities directly in your code base',
        tagline: 'line by line',
        heroBody:
          'Expert-led secure code review supported by static analysis, to find vulnerabilities, backdoors and insecure patterns directly in your source code.',
        overviewBody:
          'Code review finds issues that black-box testing cannot reach, such as hidden functionality, weak cryptography and unsafe data handling. We prioritise high-risk components, validate tool output manually and explain fixes in your language and framework.',
        points: [
          'Manual review of high-risk components',
          'Static analysis with false-positive triage',
          'Secrets, dependency and licence scanning',
          'Framework-specific secure coding guidance',
        ],
        capabilities: [
          {
            title: 'Risk-focused review',
            body: 'Effort concentrated on authentication, payments, data access and integrations.',
          },
          {
            title: 'Tool-assisted, human-verified',
            body: 'Static analysis results confirmed by reviewers, so you only see real issues.',
          },
          {
            title: 'Supply chain checks',
            body: 'Vulnerable and outdated dependencies identified with upgrade advice.',
          },
        ],
        deliverables: [
          'Code review findings report',
          'Annotated code references',
          'Dependency risk report',
          'Secure coding recommendations',
        ],
        keywords: ['secure code review', 'SAST', 'source code audit'],
      },
    ],
  },
  {
    slug: 'endpoint-security',
    name: 'Endpoint Security',
    summary: 'Protect laptops, servers and mobile devices',
    icon: 'laptop',
    tagline: 'on every device',
    heroBody:
      'Design, deploy and operate endpoint protection, detection and response across laptops, servers and mobile devices, wherever your people work.',
    overviewBody:
      'Endpoints are where most attacks land. We help you choose and deploy the right protection, harden devices against common attack techniques and monitor them so threats are stopped quickly.',
    approach: [
      {
        title: 'Assess coverage',
        body: 'Inventory devices and review existing protection, policies and gaps.',
      },
      {
        title: 'Design policy',
        body: 'Agree protection, hardening and response policies by device type and user role.',
      },
      {
        title: 'Deploy in waves',
        body: 'Pilot, tune and roll out with minimal disruption to users.',
      },
      {
        title: 'Operate and improve',
        body: 'Monitor detections, respond to threats and keep policies current.',
      },
    ],
    benefits: [
      {
        title: 'Complete coverage',
        body: 'Every device protected and reporting, including remote and server estates.',
      },
      {
        title: 'Faster detection',
        body: 'Behaviour-based detection catches threats that signatures miss.',
      },
      {
        title: 'Rapid containment',
        body: 'Compromised devices can be isolated in seconds.',
      },
      {
        title: 'Less noise',
        body: 'Tuned policies mean fewer false alarms for your team.',
      },
    ],
    images: ['laptopAccra', 'workstation', 'professionalLaptop'],
    technology: 'endpoint-security',
    services: [
      {
        slug: 'endpoint-security-services',
        name: 'Endpoint Security Services',
        summary: 'End-to-end protection for your device estate',
        tagline: 'designed, deployed and managed',
        heroBody:
          'End-to-end endpoint security: platform selection, deployment, policy design, monitoring and response across Windows, macOS, Linux and mobile.',
        overviewBody:
          'We take responsibility for your endpoint security outcome. From choosing a platform to day-to-day monitoring, our team makes sure devices are protected, policies are right and threats are dealt with quickly.',
        points: [
          'Platform evaluation and selection support',
          'Antivirus, EDR and device control policy design',
          'Deployment, migration and tuning',
          'Managed monitoring and response',
        ],
        capabilities: [
          {
            title: 'Independent selection',
            body: 'Proof-of-concept testing against your requirements, not vendor marketing.',
          },
          {
            title: 'Smooth deployment',
            body: 'Phased rollout with compatibility testing for your business applications.',
          },
          {
            title: 'Managed service',
            body: 'Our analysts monitor detections and act on threats within agreed response times.',
          },
        ],
        deliverables: [
          'Endpoint security design',
          'Deployed and tuned policies',
          'Coverage and health dashboard',
          'Monthly endpoint security report',
        ],
        keywords: ['endpoint security', 'antivirus', 'managed EDR'],
      },
      {
        slug: 'edr-xdr-deployment',
        name: 'EDR & XDR Deployment',
        summary: 'Deploy and tune detection and response platforms',
        tagline: 'tuned for your estate',
        heroBody:
          'Deploy and tune endpoint and extended detection and response platforms, with detection rules and automated response matched to your environment.',
        overviewBody:
          'An EDR platform is only as good as its configuration. We deploy agents, integrate identity, email and network telemetry for XDR, tune detections to remove noise and build response actions your team can trust.',
        points: [
          'Agent deployment and health monitoring',
          'Detection tuning and exclusions management',
          'Identity, email and network telemetry integration',
          'Automated isolation and remediation actions',
        ],
        capabilities: [
          {
            title: 'Clean rollout',
            body: 'Staged deployment with performance and compatibility checks.',
          },
          {
            title: 'Detection tuning',
            body: 'Noise removed without opening blind spots, with every exclusion documented.',
          },
          {
            title: 'Response automation',
            body: 'Isolation, process kill and file quarantine actions tied to clear criteria.',
          },
        ],
        deliverables: [
          'Deployment plan and status report',
          'Tuned detection policy',
          'Response playbooks',
          'Administrator handover',
        ],
        keywords: ['EDR', 'XDR', 'endpoint detection and response'],
      },
      {
        slug: 'endpoint-hardening',
        name: 'Endpoint Hardening & Patch Management',
        summary: 'Secure baselines and timely patching for devices',
        tagline: 'that closes common doors',
        heroBody:
          'Secure configuration baselines, application control and reliable patching for desktops, laptops and servers.',
        overviewBody:
          'Many attacks succeed through unpatched software, local admin rights and weak configuration. We apply CIS-aligned baselines, remove unnecessary privileges and set up patching that keeps devices current without breaking business applications.',
        points: [
          'CIS-aligned hardening baselines',
          'Local administrator removal and privilege management',
          'Application allow-listing where it fits',
          'Operating system and third-party patching',
        ],
        capabilities: [
          {
            title: 'Secure baselines',
            body: 'Tested configuration standards deployed through your device management tools.',
          },
          {
            title: 'Least privilege',
            body: 'Users work without admin rights, with a simple process for legitimate exceptions.',
          },
          {
            title: 'Patch assurance',
            body: 'Patch rings, compliance reporting and fast-track handling for critical vulnerabilities.',
          },
        ],
        deliverables: [
          'Hardening baseline documents',
          'Deployed configuration policies',
          'Patch management procedure',
          'Compliance dashboard',
        ],
        keywords: ['endpoint hardening', 'patch management', 'CIS benchmarks'],
      },
    ],
  },
  {
    slug: 'network-infrastructure-security',
    name: 'Network & Infrastructure Security',
    summary: 'Architecture, segmentation and firewall services',
    icon: 'network',
    tagline: 'from the core to the edge',
    heroBody:
      'Design, build and review secure networks: architecture, segmentation, firewalls, secure remote access and platform-specific engineering.',
    overviewBody:
      'Your network connects offices, data centres, cloud and remote staff. We make sure it is designed to contain attacks, configured correctly and monitored, so a single compromised device cannot reach everything.',
    approach: [
      {
        title: 'Review',
        body: 'Assess current architecture, device configurations and traffic flows.',
      },
      {
        title: 'Design',
        body: 'Define zones, trust levels and the controls between them.',
      },
      {
        title: 'Implement',
        body: 'Configure and migrate with tested change plans and rollback steps.',
      },
      {
        title: 'Validate',
        body: 'Test that segmentation and controls work as designed, then monitor.',
      },
    ],
    benefits: [
      {
        title: 'Contained breaches',
        body: 'Segmentation limits how far an attacker can move.',
      },
      {
        title: 'Clean configurations',
        body: 'Firewall rule bases that are understood, documented and lean.',
      },
      {
        title: 'Secure connectivity',
        body: 'Branches, cloud and remote users connected through controlled paths.',
      },
      {
        title: 'Audit readiness',
        body: 'Network controls documented and evidenced for auditors.',
      },
    ],
    images: ['cables', 'serverRack', 'architecture'],
    technology: 'network-infrastructure-security',
    services: [
      {
        slug: 'security-architecture-review',
        name: 'Security Architecture Review',
        summary: 'Independent review of your end-to-end architecture',
        tagline: 'that sees the whole picture',
        heroBody:
          'An independent review of your security architecture across network, identity, data, cloud and operations, against frameworks and real attack paths.',
        overviewBody:
          'We review how your controls fit together rather than one product at a time. The result is a clear view of strengths, gaps and overlaps, with a target architecture and roadmap that make your security investment work harder.',
        points: [
          'Current-state architecture documentation',
          'Assessment against NIST CSF and CIS Controls',
          'Attack path and single-point-of-failure analysis',
          'Target architecture and roadmap',
        ],
        capabilities: [
          {
            title: 'Holistic view',
            body: 'Network, identity, endpoint, data and cloud controls assessed together.',
          },
          {
            title: 'Framework alignment',
            body: 'Findings mapped to the frameworks your auditors and regulators use.',
          },
          {
            title: 'Investment guidance',
            body: 'Where to invest, consolidate or retire tools for the best risk reduction.',
          },
        ],
        deliverables: [
          'Architecture review report',
          'Current and target architecture diagrams',
          'Control gap register',
          'Phased roadmap',
        ],
        keywords: ['security architecture review', 'NIST CSF assessment'],
      },
      {
        slug: 'network-segmentation',
        name: 'Network Segmentation Services',
        summary: 'Zones and micro-segmentation that contain attacks',
        tagline: 'that stops lateral movement',
        heroBody:
          'Design and implement network segmentation and micro-segmentation that keep critical systems isolated and limit how far an attacker can move.',
        overviewBody:
          'Flat networks let ransomware spread in minutes. We map application dependencies, design zones around business risk and implement segmentation in stages, with testing at each step so services keep running.',
        points: [
          'Application dependency and traffic mapping',
          'Zone and trust-level design',
          'VLAN, firewall and micro-segmentation implementation',
          'Segmentation testing and validation',
        ],
        capabilities: [
          {
            title: 'Traffic discovery',
            body: 'Observed flows show what really needs to talk to what before anything is blocked.',
          },
          {
            title: 'Staged enforcement',
            body: 'Rules applied gradually with monitoring, so business services are not disrupted.',
          },
          {
            title: 'Proof it works',
            body: 'Penetration tests confirm segments are isolated as designed.',
          },
        ],
        deliverables: [
          'Traffic and dependency maps',
          'Segmentation design',
          'Implemented rules and change records',
          'Segmentation test report',
        ],
        keywords: ['network segmentation', 'micro-segmentation', 'zero trust network'],
      },
      {
        slug: 'network-security-architecture-implementation',
        name: 'Network Security Architecture & Implementation',
        summary: 'Design and build secure networks and remote access',
        tagline: 'designed and delivered',
        heroBody:
          'Design and build secure enterprise networks: firewalls, secure remote access, SD-WAN, network access control and monitoring.',
        overviewBody:
          'From a new office to a national network, we design secure architectures and deliver them, including equipment sourcing through our ICT procurement team, configuration, testing and documentation.',
        points: [
          'Next-generation firewall and perimeter design',
          'Secure remote access and zero trust network access',
          'Network access control for wired and wireless',
          'Network monitoring and logging',
        ],
        capabilities: [
          {
            title: 'End-to-end delivery',
            body: 'Design, procurement, installation and configuration from one accountable team.',
          },
          {
            title: 'Zero trust access',
            body: 'Users and devices verified before they reach applications, wherever they are.',
          },
          {
            title: 'Documented builds',
            body: 'As-built documentation and configuration standards your team can maintain.',
          },
        ],
        deliverables: [
          'High- and low-level designs',
          'Installed and configured infrastructure',
          'Test and acceptance records',
          'As-built documentation',
        ],
        keywords: ['network security design', 'firewall implementation', 'ZTNA'],
      },
      {
        slug: 'network-security-platform-services',
        name: 'Network Security Platform Specific Services',
        summary: 'Expert services for leading firewall and network platforms',
        tagline: 'for the platforms you run',
        heroBody:
          'Platform-specific health checks, migrations, rule-base clean-ups and managed administration for the firewalls and network security platforms you run.',
        overviewBody:
          'Network security platforms accumulate years of rules and settings. Our engineers review configuration health, remove unused and risky rules, migrate between platforms and versions, and can manage day-to-day changes for you.',
        points: [
          'Firewall health checks and best-practice review',
          'Rule-base clean-up and optimisation',
          'Platform migrations and upgrades',
          'Managed change and administration',
        ],
        capabilities: [
          {
            title: 'Rule-base optimisation',
            body: 'Unused, shadowed and overly permissive rules found and removed safely.',
          },
          {
            title: 'Safe migrations',
            body: 'Policy conversion, testing and cut-over plans that avoid downtime.',
          },
          {
            title: 'Managed operations',
            body: 'Change requests handled by our engineers with approvals and audit trails.',
          },
        ],
        deliverables: [
          'Health check report',
          'Optimised rule base',
          'Migration plan and records',
          'Change management reports',
        ],
        keywords: ['firewall audit', 'firewall migration', 'firewall management'],
      },
    ],
  },
]
