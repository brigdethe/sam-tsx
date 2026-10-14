import type { ServiceCategory } from './types.js'

/** Identity, offensive testing, OT, people and governance. */
export const assuranceCategories: ServiceCategory[] = [
  {
    slug: 'identity-access-management',
    name: 'Identity & Access Management (IAM)',
    summary: 'The right access, for the right people, at the right time',
    icon: 'key',
    tagline: 'that verifies every request',
    heroBody:
      'Identity and access management for staff, partners and customers: single sign-on, MFA, privileged access, identity governance and customer identity.',
    overviewBody:
      'Stolen credentials are behind most breaches. We design and implement identity controls that make access simple for legitimate users and very difficult for attackers, from the workforce to your customers.',
    approach: [
      {
        title: 'Assess identity risk',
        body: 'Review directories, authentication, privileged accounts and joiner-mover-leaver processes.',
      },
      {
        title: 'Design the model',
        body: 'Define roles, policies and the target identity architecture.',
      },
      {
        title: 'Implement in phases',
        body: 'Roll out SSO, MFA, PAM and governance, starting with the highest-risk access.',
      },
      {
        title: 'Govern and review',
        body: 'Regular access reviews and metrics keep privileges under control.',
      },
    ],
    benefits: [
      {
        title: 'Fewer account takeovers',
        body: 'Strong authentication blocks most credential-based attacks.',
      },
      {
        title: 'Simpler access',
        body: 'Single sign-on means fewer passwords and help-desk calls.',
      },
      {
        title: 'Controlled privilege',
        body: 'Admin rights granted just in time and fully recorded.',
      },
      {
        title: 'Clean audits',
        body: 'Evidence of who has access to what, and who approved it.',
      },
    ],
    images: ['secureAccessWoman', 'secureAccessMan', 'smartCard'],
    technology: 'identity-access-management',
    services: [
      {
        slug: 'iam-implementation',
        name: 'IAM Implementation Services',
        summary: 'Design and deploy your identity platform end to end',
        tagline: 'built around your people',
        heroBody:
          'End-to-end delivery of identity and access management: directory design, SSO, MFA, lifecycle automation and identity governance.',
        overviewBody:
          'We implement IAM platforms that connect HR, directories and applications, so access is granted automatically when people join, changed when they move and removed the moment they leave.',
        points: [
          'Directory and identity architecture design',
          'Joiner, mover and leaver automation',
          'Single sign-on and MFA rollout',
          'Access certification and role management',
        ],
        capabilities: [
          {
            title: 'Lifecycle automation',
            body: 'HR-driven provisioning that removes manual account requests and forgotten leavers.',
          },
          {
            title: 'Application onboarding',
            body: 'Modern and legacy applications connected through standard protocols and connectors.',
          },
          {
            title: 'Governance',
            body: 'Role models and periodic access reviews that satisfy auditors.',
          },
        ],
        deliverables: [
          'IAM architecture and design',
          'Configured identity platform',
          'Onboarded applications',
          'Operating procedures and training',
        ],
        keywords: ['IAM implementation', 'identity governance', 'SSO MFA'],
      },
      {
        slug: 'access-management',
        name: 'Access Management',
        summary: 'SSO, MFA and conditional access for every app',
        tagline: 'that is simple and strong',
        heroBody:
          'Single sign-on, multi-factor authentication and conditional access policies that protect every application without frustrating users.',
        overviewBody:
          'We design access policies that consider who the user is, the device they are on, where they are and what they are accessing. Low-risk access stays smooth; risky access gets stepped-up verification or is blocked.',
        points: [
          'Single sign-on across cloud and on-premises apps',
          'Phishing-resistant MFA options',
          'Conditional and risk-based access policies',
          'Passwordless authentication roadmap',
        ],
        capabilities: [
          {
            title: 'Unified sign-on',
            body: 'One secure login for staff across email, business systems and SaaS.',
          },
          {
            title: 'Adaptive policies',
            body: 'Context-aware rules that balance security and user experience.',
          },
          {
            title: 'Strong authentication',
            body: 'Authenticator apps, security keys and passkeys matched to user risk.',
          },
        ],
        deliverables: [
          'Access policy design',
          'SSO and MFA configuration',
          'User communication pack',
          'Access management run book',
        ],
        keywords: ['access management', 'single sign-on', 'conditional access'],
      },
      {
        slug: 'customer-identity-access-management',
        name: 'Customer Identity & Access Management (CIAM)',
        summary: 'Secure, seamless sign-up and login for customers',
        tagline: 'that customers trust',
        heroBody:
          'Secure, user-friendly registration and login for your customers, with fraud controls, consent management and scale for growth.',
        overviewBody:
          'Customer identity has to stop fraud without adding friction. We design and implement CIAM for digital banking, insurance, public services and e-commerce, including social and phone-number login, KYC integration and consent capture.',
        points: [
          'Registration, login and account recovery journeys',
          'Bot and account-takeover protection',
          'Consent and preference management under Act 843',
          'Integration with KYC and identity verification',
        ],
        capabilities: [
          {
            title: 'Frictionless journeys',
            body: 'Login options that suit local users, from email and phone to passwordless.',
          },
          {
            title: 'Fraud resistance',
            body: 'Risk signals, rate limiting and step-up checks that stop automated attacks.',
          },
          {
            title: 'Privacy by design',
            body: 'Consent, data minimisation and customer self-service built in.',
          },
        ],
        deliverables: [
          'CIAM architecture',
          'Implemented customer journeys',
          'Fraud control configuration',
          'Privacy and consent records',
        ],
        keywords: ['CIAM', 'customer identity', 'account takeover prevention'],
      },
      {
        slug: 'privileged-access-management',
        name: 'Privileged Access Management (PAM)',
        summary: 'Vault, control and record administrator access',
        tagline: 'for your most powerful accounts',
        heroBody:
          'Discover, vault and control privileged accounts, with just-in-time access, session recording and credential rotation.',
        overviewBody:
          'Administrator and service accounts are the keys to your kingdom. We find them, bring them under control in a vault, remove standing privilege and record privileged sessions so every action is accountable.',
        points: [
          'Privileged account discovery',
          'Credential vaulting and automatic rotation',
          'Just-in-time and approval-based access',
          'Session monitoring and recording',
        ],
        capabilities: [
          {
            title: 'Discovery',
            body: 'Find admin, service and shared accounts across servers, databases, network devices and cloud.',
          },
          {
            title: 'Least standing privilege',
            body: 'Admins request elevated access when needed, for a limited time.',
          },
          {
            title: 'Accountability',
            body: 'Recorded sessions and tamper-proof logs for investigations and audits.',
          },
        ],
        deliverables: [
          'Privileged account inventory',
          'Configured PAM platform',
          'Access workflows and policies',
          'PAM operations guide',
        ],
        keywords: ['PAM', 'privileged access management'],
      },
      {
        slug: 'identity-as-a-service',
        name: 'Identity as a Service',
        summary: 'Managed identity, SSO and MFA from the cloud',
        tagline: 'managed for you',
        heroBody:
          'A managed, cloud-delivered identity service covering directory, SSO, MFA and lifecycle management, operated by our team so yours does not have to.',
        overviewBody:
          'Identity as a Service gives you enterprise-grade identity without building an in-house identity team. We configure the platform, onboard applications, handle changes and monitor for identity threats under one service agreement.',
        points: [
          'Cloud directory and SSO platform',
          'MFA and conditional access',
          'Application onboarding and changes',
          'Identity threat monitoring',
        ],
        capabilities: [
          {
            title: 'Fully managed',
            body: 'Configuration, upgrades and day-to-day changes handled by our identity engineers.',
          },
          {
            title: 'Fast onboarding',
            body: 'New applications connected quickly using standard protocols.',
          },
          {
            title: 'Threat monitoring',
            body: 'Suspicious sign-ins and risky changes investigated by our SOC.',
          },
        ],
        deliverables: [
          'Service onboarding plan',
          'Configured identity service',
          'Monthly identity health report',
          'Service level reporting',
        ],
        keywords: ['IDaaS', 'identity as a service', 'managed identity'],
      },
    ],
  },
  {
    slug: 'red-teaming',
    name: 'Red Teaming',
    summary: 'Realistic adversary simulation and offensive testing',
    icon: 'target',
    tagline: 'that tests you like a real attacker',
    heroBody:
      'Objective-based adversary simulation and specialist offensive testing of Active Directory, cloud, applications, IoT and wireless networks.',
    overviewBody:
      'A red team tests your people, processes and technology together, the way a determined attacker would. Our specialist assessments go deep on the technologies attackers most often abuse.',
    approach: [
      {
        title: 'Set objectives',
        body: 'Agree goals, scope, rules of engagement and safety controls with a small trusted group.',
      },
      {
        title: 'Gather intelligence',
        body: 'Research your organisation, people and exposed systems as an attacker would.',
      },
      {
        title: 'Execute the operation',
        body: 'Pursue objectives using realistic tactics while avoiding detection.',
      },
      {
        title: 'Debrief and replay',
        body: 'Walk defenders through every step and help them improve detection and response.',
      },
    ],
    benefits: [
      {
        title: 'Realistic assurance',
        body: 'See how your defences hold up against a determined, skilled attacker.',
      },
      {
        title: 'Test detection',
        body: 'Find out whether your SOC notices and responds, not just whether controls exist.',
      },
      {
        title: 'Prioritised fixes',
        body: 'Focus on the weaknesses that led to real objectives being reached.',
      },
      {
        title: 'Board-level evidence',
        body: 'A clear narrative leadership can understand and act on.',
      },
    ],
    images: ['workstation', 'developer', 'storm'],
    technology: 'vulnerability-management',
    services: [
      {
        slug: 'red-team-assessments',
        name: 'Red Team Assessments',
        summary: 'Objective-based adversary simulation',
        tagline: 'with a real objective',
        heroBody:
          'Multi-stage adversary simulation that combines social engineering, technical exploitation and stealth to reach agreed business objectives.',
        overviewBody:
          'We agree what an attacker would want, such as payment systems, customer data or executive email, then attempt to reach it using the tactics of real threat groups. Your defenders are tested on whether they detect and stop us.',
        points: [
          'Objective setting with a trusted control group',
          'Open-source intelligence and social engineering',
          'Initial access, privilege escalation and lateral movement',
          'Detection and response evaluation',
        ],
        capabilities: [
          {
            title: 'Threat-led',
            body: 'Tactics modelled on groups active against your sector and region.',
          },
          {
            title: 'Controlled and safe',
            body: 'Strict rules of engagement and real-time coordination with your control group.',
          },
          {
            title: 'Full replay',
            body: 'A step-by-step replay helps your SOC understand what they missed.',
          },
        ],
        deliverables: [
          'Rules of engagement',
          'Attack narrative and timeline',
          'Detection gap analysis',
          'Executive and technical reports',
        ],
        keywords: ['red team', 'adversary simulation'],
      },
      {
        slug: 'active-directory-security-review',
        name: 'Active Directory Security Review',
        summary: 'Find the paths from any user to domain admin',
        tagline: 'before attackers map it',
        heroBody:
          'An in-depth review of Active Directory and Entra ID configuration, privileges and attack paths that lead to full domain compromise.',
        overviewBody:
          'Active Directory is the main target in most ransomware attacks. We analyse privileges, delegations, Group Policy, Kerberos settings and hybrid identity to find the paths an attacker would use, and show how to break them.',
        points: [
          'Privileged group and delegation analysis',
          'Attack path mapping to domain admin',
          'Kerberos, NTLM and legacy protocol review',
          'Hybrid identity and Entra ID connection review',
        ],
        capabilities: [
          {
            title: 'Attack path analysis',
            body: 'Graph-based analysis shows every route from ordinary users to critical privilege.',
          },
          {
            title: 'Configuration review',
            body: 'Settings checked against hardening guidance and known attack techniques.',
          },
          {
            title: 'Tiering guidance',
            body: 'A practical administrative tier model to protect your most sensitive accounts.',
          },
        ],
        deliverables: [
          'AD security assessment report',
          'Attack path visualisations',
          'Hardening roadmap',
          'Admin tiering design',
        ],
        keywords: ['Active Directory security', 'AD assessment', 'domain admin'],
      },
      {
        slug: 'cloud-penetration-testing',
        name: 'Cloud Penetration Testing',
        summary: 'Attack-focused testing of AWS, Azure and Google Cloud',
        tagline: 'the attacker’s way',
        heroBody:
          'Penetration testing of AWS, Azure and Google Cloud environments, focused on identity abuse, exposed services and paths to your data.',
        overviewBody:
          'Cloud testing goes beyond configuration checks. Within provider rules, we attempt to exploit exposed services, abuse permissions, escalate privileges and reach sensitive data, just as an attacker with a foothold would.',
        points: [
          'External attack surface testing',
          'Assumed-breach testing from a compromised identity',
          'Privilege escalation and lateral movement in the cloud',
          'Serverless, storage and database exposure',
        ],
        capabilities: [
          {
            title: 'Identity abuse',
            body: 'We test how far a stolen key or token could take an attacker.',
          },
          {
            title: 'Provider-compliant',
            body: 'Testing performed within each cloud provider’s published testing policies.',
          },
          {
            title: 'Fix as code',
            body: 'Remediation advice expressed in the infrastructure-as-code your teams use.',
          },
        ],
        deliverables: [
          'Cloud penetration test report',
          'Attack path diagrams',
          'Remediation guidance',
          'Retest confirmation',
        ],
        keywords: ['cloud penetration testing', 'AWS pentest', 'Azure pentest'],
      },
      {
        slug: 'application-vulnerability-scanning',
        name: 'Application Vulnerability Scanning',
        summary: 'Regular automated scanning of web apps and APIs',
        tagline: 'on a regular schedule',
        heroBody:
          'Scheduled, authenticated scanning of your web applications and APIs, with false positives removed by our analysts before you see results.',
        overviewBody:
          'Scanning complements manual testing by catching common issues quickly and often. We configure authenticated scans for each application, run them on a schedule or after releases, and verify findings so your developers only get real issues.',
        points: [
          'Authenticated dynamic scanning',
          'API scanning from OpenAPI definitions',
          'Analyst verification of findings',
          'Integration with ticketing and CI/CD',
        ],
        capabilities: [
          {
            title: 'Verified results',
            body: 'Every finding checked by an analyst before it reaches your backlog.',
          },
          {
            title: 'Release-aware',
            body: 'Scans triggered after deployments to catch regressions early.',
          },
          {
            title: 'Trend tracking',
            body: 'Dashboards show open issues and time to fix across applications.',
          },
        ],
        deliverables: [
          'Scan configuration for each application',
          'Verified findings reports',
          'Ticketing integration',
          'Monthly trend summary',
        ],
        keywords: ['DAST', 'web vulnerability scanning', 'API scanning'],
      },
      {
        slug: 'iot-security-assessments',
        name: 'IoT Security Assessments',
        summary: 'Test connected devices, firmware and their ecosystems',
        tagline: 'for connected devices',
        heroBody:
          'Security testing of IoT devices, firmware, mobile companions and cloud back ends, from smart buildings to industrial sensors and smart card readers.',
        overviewBody:
          'Connected devices are often deployed with default credentials, outdated firmware and weak communication. Drawing on our own IoT and smart card delivery experience, we test the full ecosystem: hardware, firmware, radio, apps and cloud.',
        points: [
          'Hardware interface and firmware analysis',
          'Radio, Bluetooth and network communication testing',
          'Companion app and cloud API testing',
          'Smart card and access control reader testing',
        ],
        capabilities: [
          {
            title: 'Ecosystem testing',
            body: 'Device, app and cloud tested together, because weaknesses chain across them.',
          },
          {
            title: 'Firmware analysis',
            body: 'Extraction and review for hardcoded secrets, outdated components and update flaws.',
          },
          {
            title: 'Builder’s insight',
            body: 'Practical fixes from a team that designs and deploys IoT systems.',
          },
        ],
        deliverables: [
          'IoT security test report',
          'Firmware analysis findings',
          'Secure deployment checklist',
          'Retest confirmation',
        ],
        keywords: ['IoT security testing', 'firmware analysis', 'smart card security'],
      },
      {
        slug: 'wireless-security-assessments',
        name: 'Wireless Security Assessments',
        summary: 'Test Wi-Fi networks, rogue access and guest isolation',
        tagline: 'for every access point',
        heroBody:
          'On-site testing of your Wi-Fi networks for weak encryption, rogue access points, guest network isolation and authentication weaknesses.',
        overviewBody:
          'Wireless networks extend beyond your walls. Our testers assess configuration and encryption, attempt to bypass authentication, look for rogue and look-alike access points, and confirm guest networks are properly isolated.',
        points: [
          'Wireless configuration and encryption review',
          'Authentication and WPA-Enterprise testing',
          'Rogue and evil-twin access point detection',
          'Guest network isolation testing',
        ],
        capabilities: [
          {
            title: 'On-site testing',
            body: 'Testers at your premises in Ghana, assessing coverage and leakage beyond your walls.',
          },
          {
            title: 'Attack simulation',
            body: 'Realistic attacks against clients and access points, safely controlled.',
          },
          {
            title: 'Hardening advice',
            body: 'Clear configuration changes for your wireless controllers and access points.',
          },
        ],
        deliverables: [
          'Wireless assessment report',
          'Coverage and leakage observations',
          'Rogue access point findings',
          'Hardening recommendations',
        ],
        keywords: ['wireless security assessment', 'WiFi penetration testing'],
      },
    ],
  },
  {
    slug: 'ot-security',
    name: 'OT Security',
    summary: 'Protect industrial control systems and operations',
    icon: 'factory',
    tagline: 'for the systems that run operations',
    heroBody:
      'Security for operational technology and industrial control systems in energy, manufacturing, utilities, oil and gas, mining and transport.',
    overviewBody:
      'In industrial environments, availability and safety come first. Our OT specialists understand control systems and work with engineers to reduce cyber risk without disrupting production.',
    approach: [
      {
        title: 'Understand the process',
        body: 'Learn the plant, processes and safety constraints with your engineers.',
      },
      {
        title: 'Map the assets',
        body: 'Build an inventory of controllers, HMIs, networks and remote connections, passively.',
      },
      {
        title: 'Assess against standards',
        body: 'Evaluate risk and controls against IEC 62443 and NIST SP 800-82.',
      },
      {
        title: 'Implement safely',
        body: 'Deliver improvements in planned maintenance windows with full engineering sign-off.',
      },
    ],
    benefits: [
      {
        title: 'Safe operations',
        body: 'Cyber risk reduced without putting production or safety at risk.',
      },
      {
        title: 'Asset visibility',
        body: 'A complete picture of what is connected in your plant.',
      },
      {
        title: 'IT–OT alignment',
        body: 'Clear responsibilities between IT security and operations engineering.',
      },
      {
        title: 'Standards alignment',
        body: 'Progress measured against IEC 62443, the industrial security standard.',
      },
    ],
    images: ['industrial', 'cables', 'serverRack'],
    technology: 'network-infrastructure-security',
    services: [
      {
        slug: 'ot-architecture-review',
        name: 'OT Architecture Review',
        summary: 'Review zones, conduits and remote access in OT',
        tagline: 'zones and conduits done right',
        heroBody:
          'A review of your industrial network architecture, zones and conduits, remote access and IT–OT boundaries against IEC 62443.',
        overviewBody:
          'We assess how your control networks are structured and connected, where IT and OT meet, how vendors access systems remotely and whether critical safety systems are properly isolated.',
        points: [
          'Purdue model and zone-and-conduit analysis',
          'IT–OT demilitarised zone review',
          'Vendor and remote access assessment',
          'Safety instrumented system isolation',
        ],
        capabilities: [
          {
            title: 'Passive discovery',
            body: 'Asset and traffic mapping without active scanning of sensitive controllers.',
          },
          {
            title: 'Standards-based',
            body: 'Findings mapped to IEC 62443 security levels and requirements.',
          },
          {
            title: 'Engineering-friendly',
            body: 'Recommendations that respect uptime, certification and safety constraints.',
          },
        ],
        deliverables: [
          'OT asset and network inventory',
          'Architecture review report',
          'Zone and conduit model',
          'Remediation roadmap',
        ],
        keywords: ['OT architecture review', 'IEC 62443', 'ICS network security'],
      },
      {
        slug: 'ot-penetration-testing',
        name: 'OT Penetration Testing',
        summary: 'Carefully controlled testing of industrial systems',
        tagline: 'without stopping production',
        heroBody:
          'Carefully controlled penetration testing of OT networks, HMIs, engineering workstations and remote access paths, planned with your engineers.',
        overviewBody:
          'OT testing needs a different approach. We agree safe methods, test windows and stop conditions with operations, focus on the IT–OT boundary and remote access, and use passive or test-bench techniques near live controllers.',
        points: [
          'IT-to-OT pivot and boundary testing',
          'Remote access and vendor connection testing',
          'HMI and engineering workstation assessment',
          'Test-bench testing of controllers where possible',
        ],
        capabilities: [
          {
            title: 'Safety first',
            body: 'Agreed stop conditions and engineering oversight throughout testing.',
          },
          {
            title: 'Realistic paths',
            body: 'We test how an attacker on the corporate network could reach control systems.',
          },
          {
            title: 'Actionable output',
            body: 'Findings prioritised by consequence to safety and production.',
          },
        ],
        deliverables: [
          'OT test plan and safety controls',
          'Penetration test report',
          'Consequence-based risk ranking',
          'Remediation guidance',
        ],
        keywords: ['OT penetration testing', 'ICS penetration testing', 'SCADA security'],
      },
      {
        slug: 'ot-security-program-review',
        name: 'OT Security Program Review',
        summary: 'Assess governance, people and process for OT security',
        tagline: 'that leadership can steer',
        heroBody:
          'An assessment of your OT security governance, policies, roles, risk management and incident readiness, with a roadmap to maturity.',
        overviewBody:
          'Technology is only part of OT security. We review who owns OT risk, how changes and vendors are managed, how incidents would be handled and how staff are trained, then build a programme leadership can sponsor.',
        points: [
          'OT security governance and ownership',
          'Policy, change and vendor management review',
          'OT incident response readiness',
          'Maturity scoring against IEC 62443-2-1',
        ],
        capabilities: [
          {
            title: 'Maturity baseline',
            body: 'A scored view of your OT security programme across people, process and technology.',
          },
          {
            title: 'Roadmap',
            body: 'Improvements sequenced around operational and budget cycles.',
          },
          {
            title: 'Cross-team alignment',
            body: 'Workshops that bring IT, OT, safety and management to shared priorities.',
          },
        ],
        deliverables: [
          'OT programme maturity report',
          'Governance and RACI model',
          'Policy recommendations',
          'Multi-year roadmap',
        ],
        keywords: ['OT security program', 'IEC 62443-2-1'],
      },
      {
        slug: 'ot-security-implementation',
        name: 'OT Security Implementation Services',
        summary: 'Deploy monitoring, segmentation and secure remote access',
        tagline: 'delivered in maintenance windows',
        heroBody:
          'Implementation of OT security controls: network monitoring, segmentation, secure remote access, backup and hardening, delivered with engineering sign-off.',
        overviewBody:
          'We turn assessment findings into protection on the plant floor. OT network monitoring, firewalls between zones, secure vendor access and tested backups of controller configurations are deployed carefully, in coordination with operations.',
        points: [
          'OT network monitoring and anomaly detection',
          'Industrial firewall and segmentation deployment',
          'Secure remote and vendor access',
          'Controller configuration backup and recovery',
        ],
        capabilities: [
          {
            title: 'Careful change',
            body: 'Method statements, risk assessments and rollback plans for every change.',
          },
          {
            title: 'OT visibility',
            body: 'Passive monitoring that understands industrial protocols.',
          },
          {
            title: 'Recoverability',
            body: 'Backups and restore procedures for controllers and HMIs, tested in practice.',
          },
        ],
        deliverables: [
          'Implementation plan and method statements',
          'Deployed OT security controls',
          'Monitoring and alerting configuration',
          'Operations handover pack',
        ],
        keywords: ['OT security implementation', 'ICS monitoring', 'industrial firewall'],
      },
      {
        slug: 'cybersecurity-architecture-design-review',
        name: 'Cybersecurity Architecture Design Review (CADR)',
        summary: 'Security review of new plant and system designs',
        tagline: 'for new and upgraded plants',
        heroBody:
          'A security review of designs for new or upgraded industrial facilities and control systems, so cybersecurity is built in before commissioning.',
        overviewBody:
          'It is far cheaper to design security in than to retrofit it. We review engineering designs, vendor specifications and integration plans at key project stages and define the cybersecurity requirements suppliers must meet.',
        points: [
          'Design-stage security requirements',
          'Vendor and integrator specification review',
          'Factory and site acceptance test security checks',
          'Commissioning security sign-off',
        ],
        capabilities: [
          {
            title: 'Secure by design',
            body: 'Security requirements written into specifications and contracts.',
          },
          {
            title: 'Stage-gate reviews',
            body: 'Checks at design, factory acceptance, site acceptance and commissioning.',
          },
          {
            title: 'Supplier assurance',
            body: 'Evidence that vendors and integrators have met agreed requirements.',
          },
        ],
        deliverables: [
          'Cybersecurity requirements specification',
          'Design review reports',
          'Acceptance test security checklists',
          'Commissioning sign-off report',
        ],
        keywords: ['CADR', 'secure by design OT', 'ICS project security'],
      },
    ],
  },
  {
    slug: 'security-awareness-enablement',
    name: 'Security Awareness & Enablement',
    summary: 'Turn your people into your first line of defence',
    icon: 'graduation',
    tagline: 'that changes behaviour',
    heroBody:
      'Awareness programmes, live training, simulations and metrics that help staff recognise threats, follow good practice and report concerns quickly.',
    overviewBody:
      'Human error is still one of the most common causes of breaches. Our programmes are practical, local and measured, so you can see behaviour improve, not just training completion rates.',
    approach: [
      {
        title: 'Measure the baseline',
        body: 'Phishing simulations and surveys show where risk is highest.',
      },
      {
        title: 'Tailor the content',
        body: 'Role-based learning for executives, finance, IT and front-line staff.',
      },
      {
        title: 'Reinforce regularly',
        body: 'Short, frequent learning moments beat one long annual course.',
      },
      {
        title: 'Report progress',
        body: 'Metrics on reporting rates and risky behaviour, by department.',
      },
    ],
    benefits: [
      {
        title: 'Fewer incidents',
        body: 'Staff spot and report phishing and fraud attempts earlier.',
      },
      {
        title: 'Faster reporting',
        body: 'A culture where people report mistakes quickly, without fear.',
      },
      {
        title: 'Stronger culture',
        body: 'Security becomes part of how people work, not a yearly tick box.',
      },
      {
        title: 'Compliance evidence',
        body: 'Training records for ISO 27001, regulators and auditors.',
      },
    ],
    images: ['training', 'stemTeam', 'mentoring'],
    technology: 'security-awareness-education',
    services: [
      {
        slug: 'security-awareness-enablement-services',
        name: 'Security Awareness & Enablement Services',
        summary: 'Training, simulations and metrics for every employee',
        tagline: 'for every employee',
        heroBody:
          'A complete awareness and enablement programme: live seminars, role-based training, attack simulations and metrics-driven reporting.',
        overviewBody:
          'We combine expert-led sessions with continuous learning and realistic simulations. Content reflects the threats your staff actually face, from mobile money fraud to business email compromise, and every campaign is measured.',
        points: [
          'Live training and awareness seminars',
          'Role-based training by job and access level',
          'Simulated phishing and social engineering exercises',
          'Behavioural analytics and departmental risk scores',
          'Compliance training aligned to ISO 27001 and Act 843',
        ],
        capabilities: [
          {
            title: 'Live sessions',
            body: 'Interactive workshops with real case studies and open Q&A, led by practitioners.',
          },
          {
            title: 'Simulated attacks',
            body: 'Phishing, vishing and incident drills that teach staff what to do under pressure.',
          },
          {
            title: 'Metrics-driven',
            body: 'Reports that identify high-risk groups and recommend practical next steps.',
          },
        ],
        deliverables: [
          'Annual awareness plan',
          'Training content and sessions',
          'Simulation results and analysis',
          'Quarterly awareness metrics report',
        ],
        keywords: ['security awareness training', 'cybersecurity training Ghana'],
      },
      {
        slug: 'executive-cyber-briefings',
        name: 'Executive & Board Cyber Briefings',
        summary: 'Cyber risk briefings for boards and leadership',
        tagline: 'for the people who decide',
        heroBody:
          'Focused briefings that help boards and executives understand cyber risk, their responsibilities and the decisions they may face in a crisis.',
        overviewBody:
          'Boards are increasingly accountable for cyber risk. Our briefings explain the threat landscape, regulatory duties and key questions to ask, in business language, and can include a short crisis exercise.',
        points: [
          'Threat landscape for your sector',
          'Board duties under Ghanaian regulation',
          'Key questions for management and auditors',
          'Optional executive crisis exercise',
        ],
        capabilities: [
          {
            title: 'Business language',
            body: 'Risk explained in terms of operations, finance and reputation.',
          },
          {
            title: 'Tailored content',
            body: 'Examples and scenarios relevant to your organisation and sector.',
          },
          {
            title: 'Decision readiness',
            body: 'Leaders leave knowing what decisions they own in an incident.',
          },
        ],
        deliverables: [
          'Briefing pack',
          'Facilitated session',
          'Board question checklist',
          'Follow-up recommendations',
        ],
        keywords: ['board cyber briefing', 'executive cybersecurity training'],
      },
    ],
    crossLinks: [
      {
        name: 'Phishing as a Service',
        summary: 'Realistic phishing campaigns with training built in',
        href: '/services/enhanced-soc-services/phishing-as-a-service',
      },
      {
        name: 'Training programmes',
        summary: 'Courses including third-party risk management',
        href: '/training',
      },
    ],
  },
  {
    slug: 'governance-risk-compliance',
    name: 'Governance, Risk & Compliance',
    summary: 'Risk assessments, audits, policies and certification',
    icon: 'scale',
    tagline: 'that regulators recognise',
    heroBody:
      'IT risk assessments, IT audits, policy development and certification readiness that align your security with ISO/IEC 27001 and Ghanaian regulation.',
    overviewBody:
      'Good governance turns security from a cost into a managed business risk. We help public institutions and regulated organisations understand their risks, meet their obligations and show progress to boards and regulators.',
    approach: [
      {
        title: 'Understand obligations',
        body: 'Identify the laws, directives, standards and contracts that apply to you.',
      },
      {
        title: 'Assess the gaps',
        body: 'Review controls, policies and evidence against those requirements.',
      },
      {
        title: 'Close the gaps',
        body: 'Write policies, implement controls and build the evidence trail.',
      },
      {
        title: 'Sustain compliance',
        body: 'Internal audits, metrics and management reviews keep you on track.',
      },
    ],
    benefits: [
      {
        title: 'Clear risk picture',
        body: 'A risk register leadership understands and owns.',
      },
      {
        title: 'Regulatory confidence',
        body: 'Evidence ready for the Cyber Security Authority, Data Protection Commission and sector regulators.',
      },
      {
        title: 'Certification readiness',
        body: 'A practical route to ISO/IEC 27001 certification.',
      },
      {
        title: 'Better decisions',
        body: 'Security spending tied to the risks that matter most.',
      },
    ],
    images: ['businessDistrict', 'collaboration', 'tower'],
    technology: 'security-operations-center',
    services: [
      {
        slug: 'it-risk-assessment',
        name: 'IT Risk Assessment',
        summary: 'Identify, rate and prioritise your technology risks',
        tagline: 'that ranks what matters',
        heroBody:
          'A structured assessment of your technology and information security risks, rated by likelihood and business impact, with a clear treatment plan.',
        overviewBody:
          'We work with business and IT leaders to identify critical assets, threats and vulnerabilities, evaluate existing controls and rate residual risk using ISO/IEC 27005 and NIST-based methods. The result is a risk register and treatment plan leadership can own.',
        points: [
          'Critical asset and business process identification',
          'Threat and vulnerability analysis',
          'Control effectiveness evaluation',
          'Risk register and treatment plan',
        ],
        capabilities: [
          {
            title: 'Business-led',
            body: 'Risks described in business terms, with owners who can act on them.',
          },
          {
            title: 'Recognised methods',
            body: 'Approaches aligned with ISO/IEC 27005 and NIST SP 800-30.',
          },
          {
            title: 'Technical depth',
            body: 'Optional technical testing to validate how well key controls work.',
          },
        ],
        deliverables: [
          'IT risk assessment report',
          'Risk register',
          'Risk treatment plan',
          'Executive briefing',
        ],
        keywords: ['IT risk assessment', 'information security risk assessment Ghana'],
      },
      {
        slug: 'it-audit',
        name: 'IT Audit & Systems Review',
        summary: 'Independent audit of IT controls and systems',
        tagline: 'that stands up to scrutiny',
        heroBody:
          'Independent audit of IT general controls, application controls and information systems, aligned with COBIT and ISO/IEC 27001.',
        overviewBody:
          'We audit access management, change management, operations, backup, continuity and security controls, test evidence and report findings clearly for management, audit committees and external auditors.',
        points: [
          'IT general controls audit',
          'Application and business system controls review',
          'Access and segregation-of-duties testing',
          'Backup, continuity and disaster recovery review',
        ],
        capabilities: [
          {
            title: 'Evidence-based testing',
            body: 'Controls tested with samples and evidence, not interviews alone.',
          },
          {
            title: 'Framework alignment',
            body: 'Findings mapped to COBIT, ISO/IEC 27001 and sector requirements.',
          },
          {
            title: 'Clear reporting',
            body: 'Findings rated by risk with agreed management actions and dates.',
          },
        ],
        deliverables: [
          'Audit plan and scope',
          'Audit findings report',
          'Management action plan',
          'Follow-up review',
        ],
        keywords: ['IT audit', 'IT general controls', 'systems audit Ghana'],
      },
      {
        slug: 'security-policy-development',
        name: 'Security Policy Development',
        summary: 'Clear, practical policies and standards',
        tagline: 'people will actually follow',
        heroBody:
          'Information security policies, standards and procedures written for your organisation: clear for staff, specific for technical teams and ready for audit.',
        overviewBody:
          'Policies copied from templates rarely fit. We write policy frameworks around how your organisation really works, aligned to ISO/IEC 27001, the Cybersecurity Act and sector directives, and help you roll them out.',
        points: [
          'Information security policy framework',
          'Acceptable use, access, data and incident policies',
          'Technical standards and procedures',
          'Policy rollout and acknowledgement',
        ],
        capabilities: [
          {
            title: 'Tailored writing',
            body: 'Policies that reflect your structure, systems and risk appetite.',
          },
          {
            title: 'Layered framework',
            body: 'Short policies for everyone, detailed standards for those who need them.',
          },
          {
            title: 'Adoption support',
            body: 'Briefings and awareness material so policies are understood, not just signed.',
          },
        ],
        deliverables: [
          'Policy framework',
          'Approved policy documents',
          'Standards and procedures',
          'Rollout communication pack',
        ],
        keywords: ['information security policy', 'cybersecurity policy development'],
      },
      {
        slug: 'iso-27001-readiness',
        name: 'ISO/IEC 27001 Readiness',
        summary: 'Prepare your ISMS for certification',
        tagline: 'ready for certification',
        heroBody:
          'Guidance through every stage of building an information security management system and preparing for ISO/IEC 27001 certification.',
        overviewBody:
          'We guide you from scoping to certification audit: gap analysis, risk assessment, Statement of Applicability, policies, control implementation, internal audit and management review, at a pace that suits your team.',
        points: [
          'Scope definition and gap analysis',
          'Risk assessment and Statement of Applicability',
          'ISMS documentation and control implementation',
          'Internal audit and certification support',
        ],
        capabilities: [
          {
            title: 'Pragmatic ISMS',
            body: 'A management system sized to your organisation, not a paperwork exercise.',
          },
          {
            title: 'Implementation help',
            body: 'Our engineers can implement the technical controls, not just document them.',
          },
          {
            title: 'Audit support',
            body: 'Internal audit and support during the certification body’s audits.',
          },
        ],
        deliverables: [
          'Gap analysis report',
          'Statement of Applicability',
          'ISMS documentation set',
          'Internal audit report',
        ],
        keywords: ['ISO 27001', 'ISMS', 'ISO 27001 certification Ghana'],
      },
      {
        slug: 'regulatory-compliance',
        name: 'Regulatory Compliance Advisory',
        summary: 'Meet Act 1038, Act 843 and sector directives',
        tagline: 'for Ghanaian regulation',
        heroBody:
          'Advice and assessments that help you meet the Cybersecurity Act, 2020 (Act 1038), the Data Protection Act, 2012 (Act 843) and sector directives.',
        overviewBody:
          'Regulated organisations face overlapping requirements from the Cyber Security Authority, the Data Protection Commission and sector regulators such as the Bank of Ghana. We map what applies to you, assess compliance and help you close gaps efficiently.',
        points: [
          'Applicability mapping of laws and directives',
          'Critical information infrastructure obligations',
          'Data protection registration and compliance',
          'Sector directive gap assessments',
        ],
        capabilities: [
          {
            title: 'Regulatory mapping',
            body: 'One control set that satisfies multiple overlapping requirements.',
          },
          {
            title: 'Gap assessment',
            body: 'Evidence-based review of where you meet, partly meet or miss each requirement.',
          },
          {
            title: 'Reporting support',
            body: 'Help preparing submissions, reports and responses to regulators.',
          },
        ],
        deliverables: [
          'Regulatory obligations register',
          'Compliance gap assessment',
          'Remediation plan',
          'Regulator-ready evidence pack',
        ],
        keywords: ['Cybersecurity Act 1038', 'Data Protection Act 843', 'compliance Ghana'],
      },
    ],
    crossLinks: [
      {
        name: 'CISO as a Service',
        summary: 'Senior security leadership, on a flexible retainer',
        href: '/services/enhanced-soc-services/ciso-as-a-service',
      },
    ],
  },
]
