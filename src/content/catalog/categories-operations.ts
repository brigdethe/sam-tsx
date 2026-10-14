import type { ServiceCategory } from './types.js'

/** Security operations: fusion platform, enhanced SOC services, data and cloud. */
export const operationsCategories: ServiceCategory[] = [
  {
    slug: 'cyber-fusion-platform',
    name: 'Cyber Fusion Platform',
    summary: 'Automation, analytics and intelligence in one SOC fabric',
    icon: 'cpu',
    tagline: 'one view of every threat',
    heroBody:
      'Bring detection, threat intelligence, automation and analytics together so your security team sees one picture and acts on it in minutes, not days.',
    overviewBody:
      'Most security teams run a dozen tools that never talk to each other. We connect them: alerts are enriched with intelligence, triaged by playbooks and escalated to people only when judgement is needed.',
    approach: [
      {
        title: 'Map your stack',
        body: 'We inventory your log sources, tools and workflows, then agree the use cases worth automating first.',
      },
      {
        title: 'Connect and enrich',
        body: 'Data pipelines, threat feeds and integrations are wired in and tested against real alerts from your environment.',
      },
      {
        title: 'Automate with guardrails',
        body: 'Playbooks start with human approval and move to full automation only once they have proved reliable.',
      },
      {
        title: 'Measure and tune',
        body: 'Monthly reviews track response times, false positives and analyst workload, and tune what is not earning its keep.',
      },
    ],
    benefits: [
      {
        title: 'Faster response',
        body: 'Routine alerts are triaged and contained by playbooks while analysts focus on real incidents.',
      },
      {
        title: 'Less alert fatigue',
        body: 'Correlation and enrichment cut duplicate and low-value alerts before they reach a person.',
      },
      {
        title: 'Shared context',
        body: 'Intelligence, asset data and case history sit beside every alert, so decisions are better informed.',
      },
      {
        title: 'Proof for leadership',
        body: 'Clear metrics show how detection and response improve quarter by quarter.',
      },
    ],
    images: ['analyst', 'workstation', 'serverRack'],
    technology: 'security-operations-center',
    services: [
      {
        slug: 'soar-services',
        name: 'SOAR Services',
        summary: 'Playbook automation that triages and contains alerts',
        tagline: 'that respond in seconds',
        heroBody:
          'Security orchestration, automation and response that turns repeatable analyst work into reliable playbooks, from enrichment to containment.',
        overviewBody:
          'We design, build and maintain SOAR playbooks around the incidents you actually see. Phishing triage, malware containment, account lockouts and user verification run automatically, with an analyst approving any step that carries business risk.',
        points: [
          'Use-case discovery from your alert and ticket history',
          'Playbook design for phishing, malware, identity and cloud alerts',
          'Integrations with SIEM, EDR, email, identity and ticketing tools',
          'Approval steps for actions that affect users or production',
          'Ongoing tuning as tools and threats change',
        ],
        capabilities: [
          {
            title: 'Playbook engineering',
            body: 'Version-controlled playbooks with test cases, so every change is reviewed and every run is explainable.',
          },
          {
            title: 'Tool integration',
            body: 'API connections to the security and IT platforms you already own, including custom connectors where none exist.',
          },
          {
            title: 'Case management',
            body: 'One case record per incident, with evidence, actions and timelines captured automatically for audit.',
          },
        ],
        deliverables: [
          'Prioritised automation roadmap',
          'Tested playbooks with run books for analysts',
          'Integration inventory and credentials handover',
          'Monthly automation performance report',
        ],
        keywords: ['SOAR', 'security automation', 'incident response playbooks'],
      },
      {
        slug: 'security-analytics',
        name: 'Security Analytics Service',
        summary: 'Detection engineering and behaviour analytics on your data',
        tagline: 'that finds what rules miss',
        heroBody:
          'Detection content, behaviour analytics and threat-informed dashboards built on your own log data, so suspicious activity stands out early.',
        overviewBody:
          'We turn raw logs into detections that matter. Our engineers write and tune correlation rules, model normal user and system behaviour, and map coverage to MITRE ATT&CK so you can see where you are blind.',
        points: [
          'Detection engineering mapped to MITRE ATT&CK',
          'User and entity behaviour analytics (UEBA) baselines',
          'Coverage gap analysis across log sources',
          'Executive and analyst dashboards',
        ],
        capabilities: [
          {
            title: 'Detection content',
            body: 'Rules and queries written for your platforms and tested against simulated attacker activity before they go live.',
          },
          {
            title: 'Behaviour analytics',
            body: 'Baselines for users, hosts and service accounts that flag unusual logins, data movement and privilege use.',
          },
          {
            title: 'Coverage reporting',
            body: 'A living ATT&CK heat map that shows which techniques you detect, which you log, and which you miss.',
          },
        ],
        deliverables: [
          'Detection library with documentation',
          'ATT&CK coverage map and gap list',
          'Tuned dashboards for analysts and leadership',
          'Quarterly detection review',
        ],
        keywords: ['security analytics', 'UEBA', 'detection engineering'],
      },
      {
        slug: 'soc-optimization',
        name: 'SOC Optimisation',
        summary: 'Tune people, process and tooling for a sharper SOC',
        tagline: 'that gets more from your team',
        heroBody:
          'An independent review of your security operations centre, followed by hands-on changes that cut noise, close gaps and speed up response.',
        overviewBody:
          'Whether your SOC is in-house, outsourced or hybrid, we measure how it really performs: what it sees, how fast it acts and where analysts lose time. Then we fix the biggest problems with you, not just in a report.',
        points: [
          'Maturity assessment against recognised SOC models',
          'Alert volume, false-positive and response-time analysis',
          'Process and escalation review with your analysts',
          'Tool rationalisation and licence review',
        ],
        capabilities: [
          {
            title: 'Performance baseline',
            body: 'Mean time to detect, acknowledge and resolve, measured from your own tickets and alerts.',
          },
          {
            title: 'Noise reduction',
            body: 'Rule tuning, suppression and correlation changes that remove the alerts no one acts on.',
          },
          {
            title: 'Operating model',
            body: 'Shift patterns, tiering, escalation paths and run books that fit the team you have.',
          },
        ],
        deliverables: [
          'SOC maturity scorecard',
          'Prioritised improvement plan with owners',
          'Tuned rules and updated run books',
          'Before-and-after metrics report',
        ],
        keywords: ['SOC optimisation', 'SOC maturity', 'security operations'],
      },
      {
        slug: 'threat-intelligence',
        name: 'Threat Intelligence Service',
        summary: 'Curated intelligence on threats targeting your sector',
        tagline: 'that is relevant to you',
        heroBody:
          'Actionable intelligence on the actors, campaigns and vulnerabilities that matter to organisations in Ghana and across Africa, delivered into the tools your team uses.',
        overviewBody:
          'Raw threat feeds are noisy. We curate them against your sector, technology stack and brand, then push high-confidence indicators into your controls and brief your people on what is changing.',
        points: [
          'Sector and regional threat landscape briefings',
          'Indicator feeds integrated with SIEM, firewall and EDR',
          'Brand, domain and leaked-credential monitoring',
          'Vulnerability intelligence prioritised by active exploitation',
        ],
        capabilities: [
          {
            title: 'Strategic briefings',
            body: 'Quarterly reports for leadership on threats, trends and what they mean for your risk posture.',
          },
          {
            title: 'Operational feeds',
            body: 'Curated, de-duplicated indicators delivered to your controls with confidence scores and expiry.',
          },
          {
            title: 'Digital risk monitoring',
            body: 'Alerts for look-alike domains, exposed credentials and mentions of your organisation in criminal forums.',
          },
        ],
        deliverables: [
          'Threat profile for your organisation',
          'Integrated intelligence feeds',
          'Monthly intelligence summary',
          'Ad-hoc alerts for urgent threats',
        ],
        keywords: ['threat intelligence', 'cyber threat intelligence', 'digital risk monitoring'],
      },
    ],
  },
  {
    slug: 'enhanced-soc-services',
    name: 'Enhanced SOC Services',
    summary: 'Testing, simulation and expert services as a subscription',
    icon: 'activity',
    tagline: 'continuous security, as a service',
    heroBody:
      'Penetration testing, attack simulation, phishing, vulnerability management and security leadership, delivered as ongoing services instead of one-off projects.',
    overviewBody:
      'Attackers do not wait for your annual test. Our as-a-service model keeps pressure on your defences all year, with a fixed scope, predictable cost and one team that knows your environment.',
    approach: [
      {
        title: 'Scope and baseline',
        body: 'We agree assets, rules of engagement and success measures, then run a first assessment to set the baseline.',
      },
      {
        title: 'Test continuously',
        body: 'Testing, scanning and simulations run on an agreed rhythm, with urgent findings reported the same day.',
      },
      {
        title: 'Fix together',
        body: 'Our engineers walk your team through remediation and retest each fix before it is closed.',
      },
      {
        title: 'Report progress',
        body: 'Monthly dashboards and quarterly reviews show risk falling over time, in terms leadership understands.',
      },
    ],
    benefits: [
      {
        title: 'Always-on assurance',
        body: 'Weaknesses are found as your systems change, not months later in an annual report.',
      },
      {
        title: 'Predictable cost',
        body: 'A subscription replaces ad-hoc projects, making security spend easier to plan and approve.',
      },
      {
        title: 'One accountable team',
        body: 'The same specialists learn your environment and track every finding to closure.',
      },
      {
        title: 'Audit-ready evidence',
        body: 'Continuous records support ISO 27001, Bank of Ghana and Cyber Security Act obligations.',
      },
    ],
    images: ['workstation', 'analyst', 'cables'],
    technology: 'vulnerability-management',
    services: [
      {
        slug: 'penetration-testing-as-a-service',
        name: 'Penetration Testing as a Service',
        summary: 'Manual and automated pen testing on a continuous schedule',
        tagline: 'all year round',
        heroBody:
          'Experienced testers probe your networks, applications and cloud on a continuous schedule, so new weaknesses are found and fixed before attackers find them.',
        overviewBody:
          'PTaaS combines expert-led manual testing with automated discovery. New releases, infrastructure changes and newly published vulnerabilities trigger testing in between scheduled engagements, and every finding comes with proof and a fix.',
        points: [
          'External and internal network testing',
          'Web, API and mobile application testing',
          'Cloud configuration and identity testing',
          'Retesting of every fix at no extra cost',
          'Findings mapped to OWASP, CIS and NIST references',
        ],
        capabilities: [
          {
            title: 'Expert-led testing',
            body: 'Experienced testers chain weaknesses the way real attackers do, beyond what scanners can find.',
          },
          {
            title: 'Live findings',
            body: 'Issues are reported as they are confirmed, with severity, evidence and step-by-step remediation.',
          },
          {
            title: 'Release testing',
            body: 'Targeted tests on new features and changes, scheduled around your delivery calendar.',
          },
        ],
        deliverables: [
          'Rules of engagement and test plan',
          'Real-time findings with evidence',
          'Executive and technical reports',
          'Retest confirmation letters',
        ],
        keywords: ['penetration testing', 'PTaaS', 'VAPT Ghana'],
      },
      {
        slug: 'breach-attack-simulation',
        name: 'Breach & Attack Simulation as a Service',
        summary: 'Safe, automated attack simulations that test your controls',
        tagline: 'that proves your controls work',
        heroBody:
          'Safely simulate real attacker techniques across email, endpoint, network and cloud to prove which controls stop them and which do not.',
        overviewBody:
          'Breach and attack simulation (BAS) runs harmless versions of real attack techniques against your live defences. You see exactly where a ransomware operator or data thief would succeed, then confirm the gap is closed after remediation.',
        points: [
          'Simulations mapped to MITRE ATT&CK techniques',
          'Email, web, endpoint, lateral movement and exfiltration scenarios',
          'Control validation for firewall, EDR, proxy and DLP',
          'Scheduled and on-demand simulation runs',
        ],
        capabilities: [
          {
            title: 'Threat-led scenarios',
            body: 'Campaigns modelled on the ransomware and fraud groups most active against your sector.',
          },
          {
            title: 'Control scoring',
            body: 'Prevention and detection rates per control, so you know which investments are paying off.',
          },
          {
            title: 'Remediation guidance',
            body: 'Specific configuration changes and detection rules for every simulated technique that succeeded.',
          },
        ],
        deliverables: [
          'Simulation plan and safety controls',
          'Control effectiveness scorecard',
          'Detection and prevention gap report',
          'Trend view across simulation runs',
        ],
        keywords: ['breach and attack simulation', 'BAS', 'control validation'],
      },
      {
        slug: 'phishing-as-a-service',
        name: 'Phishing as a Service',
        summary: 'Realistic phishing campaigns with training built in',
        tagline: 'that builds real resilience',
        heroBody:
          'Realistic, locally relevant phishing simulations with instant training for staff who click, and reporting that shows resilience improving month by month.',
        overviewBody:
          'We run phishing, smishing and voice-phishing simulations that mirror the lures used against Ghanaian organisations: mobile money, payroll, tax and courier scams. Each campaign is followed by short, targeted learning and clear metrics.',
        points: [
          'Email, SMS and voice phishing simulations',
          'Locally relevant lures and sender profiles',
          'Instant micro-training for staff who click',
          'Report-rate tracking and departmental risk scores',
        ],
        capabilities: [
          {
            title: 'Campaign design',
            body: 'Scenarios graded by difficulty and aligned to the threats your organisation actually receives.',
          },
          {
            title: 'Just-in-time learning',
            body: 'Two-minute lessons delivered at the moment of the mistake, when they are most likely to stick.',
          },
          {
            title: 'Behaviour metrics',
            body: 'Click, credential-entry and report rates by department and over time, ready for board reporting.',
          },
        ],
        deliverables: [
          'Annual campaign calendar',
          'Campaign results after each run',
          'Departmental risk heat map',
          'Quarterly awareness report',
        ],
        keywords: ['phishing simulation', 'phishing as a service', 'security awareness'],
      },
      {
        slug: 'vulnerability-management-as-a-service',
        name: 'Vulnerability Management as a Service',
        summary: 'Continuous scanning, prioritisation and patch tracking',
        tagline: 'prioritised by real risk',
        heroBody:
          'Continuous discovery and scanning of your assets, with vulnerabilities ranked by exploitability and business impact, and fixes tracked to closure.',
        overviewBody:
          'Thousands of findings are useless without priorities. We run the scanning platform, remove false positives, rank what is left by active exploitation and asset value, and work with your IT team until each critical issue is fixed.',
        points: [
          'Asset discovery across on-premises, cloud and remote devices',
          'Authenticated infrastructure and web application scanning',
          'Risk-based prioritisation using exploit intelligence',
          'Patch and remediation tracking with agreed SLAs',
        ],
        capabilities: [
          {
            title: 'Managed scanning',
            body: 'We operate and tune the scanning platform so coverage stays complete as your estate changes.',
          },
          {
            title: 'Risk-based priorities',
            body: 'Vulnerabilities scored by exploit availability, exposure and asset importance, not CVSS alone.',
          },
          {
            title: 'Remediation support',
            body: 'Fix guidance, patch validation and exception management, with every decision recorded.',
          },
        ],
        deliverables: [
          'Asset and exposure inventory',
          'Prioritised remediation queue',
          'SLA and trend dashboards',
          'Monthly vulnerability report',
        ],
        keywords: ['vulnerability management', 'vulnerability scanning', 'patch management'],
      },
      {
        slug: 'security-data-pipeline',
        name: 'Security Data Pipeline Services',
        summary: 'Collect, filter and route security logs efficiently',
        tagline: 'that cuts log costs',
        heroBody:
          'Collect, normalise, filter and route security telemetry so your SIEM gets the data it needs and you stop paying to store data you never use.',
        overviewBody:
          'Log volumes grow faster than budgets. We design pipelines that parse and enrich data at the edge, drop noise, mask sensitive fields and route each source to the right destination, from SIEM to low-cost archive.',
        points: [
          'Log source onboarding and parsing',
          'Filtering, sampling and de-duplication rules',
          'Field masking for personal data',
          'Routing to SIEM, data lake and archive tiers',
        ],
        capabilities: [
          {
            title: 'Pipeline architecture',
            body: 'Resilient collection with buffering, so no security data is lost when a destination is unavailable.',
          },
          {
            title: 'Data reduction',
            body: 'Rules that keep detection value while reducing ingest volume and licence costs.',
          },
          {
            title: 'Normalisation',
            body: 'Consistent schemas across sources, so detections and searches work everywhere.',
          },
        ],
        deliverables: [
          'Log source inventory and data map',
          'Deployed and documented pipelines',
          'Volume and cost reduction report',
          'Operations run book',
        ],
        keywords: ['security data pipeline', 'log management', 'SIEM cost reduction'],
      },
      {
        slug: 'insider-threat-solutions',
        name: 'Insider Threat Solutions',
        summary: 'Detect and manage risk from trusted users',
        tagline: 'from trusted accounts',
        heroBody:
          'A balanced insider risk programme that detects data theft, fraud and misuse by trusted users while respecting privacy and employment law.',
        overviewBody:
          'Insider incidents are hard to spot because the activity looks legitimate. We combine policy, behaviour analytics and data controls with HR and legal processes, so concerns are investigated fairly and consistently.',
        points: [
          'Insider risk programme design and governance',
          'Behaviour analytics for high-risk roles and leavers',
          'Data movement monitoring and controls',
          'Investigation procedures aligned with HR and legal',
        ],
        capabilities: [
          {
            title: 'Programme design',
            body: 'Policies, roles and escalation paths agreed with HR, legal and data protection officers.',
          },
          {
            title: 'Risk indicators',
            body: 'Signals such as unusual downloads, after-hours access and privilege changes, tuned to cut false alarms.',
          },
          {
            title: 'Case handling',
            body: 'Evidence handling and investigation support that stand up to internal and legal scrutiny.',
          },
        ],
        deliverables: [
          'Insider risk policy and procedures',
          'Configured monitoring use cases',
          'Investigation playbook',
          'Quarterly insider risk report',
        ],
        keywords: ['insider threat', 'insider risk management', 'UEBA'],
      },
      {
        slug: 'ciso-as-a-service',
        name: 'CISO as a Service',
        summary: 'Senior security leadership, on a flexible retainer',
        tagline: 'without the full-time hire',
        heroBody:
          'An experienced security leader who sets your strategy, reports to your board and regulators, and guides your team, on a part-time retainer.',
        overviewBody:
          'Many organisations need CISO-level judgement but not a full-time executive. Our virtual CISO builds your security strategy, owns the risk register, prepares board and regulator reporting and steers vendors and projects.',
        points: [
          'Security strategy and multi-year roadmap',
          'Board, audit committee and regulator reporting',
          'Policy framework and risk register ownership',
          'Vendor, budget and project oversight',
          'Incident leadership when it matters most',
        ],
        capabilities: [
          {
            title: 'Strategy and governance',
            body: 'A roadmap tied to business goals, with clear priorities, budgets and accountable owners.',
          },
          {
            title: 'Regulatory alignment',
            body: 'Guidance on the Cybersecurity Act, 2020 (Act 1038), the Data Protection Act, 2012 (Act 843) and sector directives.',
          },
          {
            title: 'Team development',
            body: 'Mentoring for your IT and security staff, so capability stays in-house as you grow.',
          },
        ],
        deliverables: [
          'Security strategy and roadmap',
          'Board-ready risk reporting pack',
          'Policy set and risk register',
          'Monthly leadership sessions',
        ],
        keywords: ['virtual CISO', 'vCISO', 'CISO as a service Ghana'],
      },
    ],
    crossLinks: [
      {
        name: 'Security Assessment',
        summary: 'Penetration tests and vulnerability assessments',
        href: '/cybersecurity-services',
      },
      {
        name: 'Identity as a Service',
        summary: 'Managed identity, SSO and MFA from the cloud',
        href: '/services/identity-access-management/identity-as-a-service',
      },
    ],
  },
  {
    slug: 'data-privacy-protection',
    name: 'Data & Privacy Protection',
    summary: 'Discover, classify and protect sensitive data',
    icon: 'database',
    tagline: 'for the data that matters most',
    heroBody:
      'Find where sensitive data lives, decide who should access it and put controls in place that keep it safe and compliant with Ghanaian and international law.',
    overviewBody:
      'Customer records, financial data and intellectual property are what attackers want and what regulators protect. We help you know your data, govern it and stop it leaving through the wrong channels.',
    approach: [
      {
        title: 'Discover',
        body: 'Scan file shares, databases, cloud storage and SaaS to find and classify sensitive data.',
      },
      {
        title: 'Decide',
        body: 'Agree data owners, classification levels, retention and access rules with the business.',
      },
      {
        title: 'Protect',
        body: 'Deploy encryption, access controls and loss-prevention policies matched to each class of data.',
      },
      {
        title: 'Prove',
        body: 'Monitor, report and evidence compliance for auditors and the Data Protection Commission.',
      },
    ],
    benefits: [
      {
        title: 'Know your data',
        body: 'A clear map of sensitive data, where it flows and who can reach it.',
      },
      {
        title: 'Reduce breach impact',
        body: 'Encryption and access controls limit what an attacker can take.',
      },
      {
        title: 'Meet obligations',
        body: 'Controls aligned with the Data Protection Act, 2012 (Act 843) and sector rules.',
      },
      {
        title: 'Earn trust',
        body: 'Customers and partners see data handled with care and accountability.',
      },
    ],
    images: ['serverRack', 'professionalLaptop', 'businessDistrict'],
    technology: 'data-security',
    services: [
      {
        slug: 'data-security-protection',
        name: 'Data Security & Protection Services',
        summary: 'Encryption, access control and data discovery',
        tagline: 'wherever it lives',
        heroBody:
          'Discover, classify and protect sensitive data across endpoints, servers, databases and cloud services with controls that follow the data.',
        overviewBody:
          'We design and deploy the technical controls that protect data at rest, in transit and in use: classification, encryption, key management, database security and rights management, sized to your risk and budget.',
        points: [
          'Data discovery and classification',
          'Encryption and key management design',
          'Database activity monitoring and hardening',
          'Information rights management for documents',
        ],
        capabilities: [
          {
            title: 'Discovery and classification',
            body: 'Automated scanning and labelling, so protection is applied consistently and early.',
          },
          {
            title: 'Encryption by design',
            body: 'Encryption for storage, backups, databases and transfers, with keys managed securely.',
          },
          {
            title: 'Database security',
            body: 'Hardening, privileged access controls and monitoring for your most valuable data stores.',
          },
        ],
        deliverables: [
          'Sensitive data inventory',
          'Data protection architecture',
          'Deployed and tested controls',
          'Operating procedures and handover',
        ],
        keywords: ['data protection', 'data encryption', 'data classification'],
      },
      {
        slug: 'data-security-governance',
        name: 'Data Security Governance',
        summary: 'Policies, ownership and controls for your data',
        tagline: 'with clear accountability',
        heroBody:
          'Data governance that assigns ownership, defines how data is classified, retained and shared, and gives leadership confidence it is followed.',
        overviewBody:
          'Technology only works when people know the rules. We build a practical governance framework covering data ownership, classification, retention, third-party sharing and privacy impact assessments, aligned to Act 843 and ISO/IEC 27001.',
        points: [
          'Data governance framework and policies',
          'Data ownership and stewardship model',
          'Retention and disposal schedules',
          'Privacy impact assessments and records of processing',
        ],
        capabilities: [
          {
            title: 'Framework and policy',
            body: 'Clear, short policies that staff can follow, backed by standards for technical teams.',
          },
          {
            title: 'Privacy compliance',
            body: 'Support for registration, data subject requests and privacy impact assessments under Act 843.',
          },
          {
            title: 'Assurance',
            body: 'Control testing and metrics that show the board how well data is governed.',
          },
        ],
        deliverables: [
          'Data governance charter',
          'Classification and retention standards',
          'Records of processing activities',
          'Governance metrics dashboard',
        ],
        keywords: ['data governance', 'Data Protection Act 843', 'privacy compliance Ghana'],
      },
      {
        slug: 'data-loss-prevention',
        name: 'Data Loss Prevention',
        summary: 'Stop sensitive data leaving by email, web or USB',
        tagline: 'before it walks out the door',
        heroBody:
          'Design, deploy and tune data loss prevention across email, web, endpoints and cloud apps, so sensitive data stays where it belongs.',
        overviewBody:
          'DLP fails when it blocks everything or nothing. We start in monitoring mode, learn how data really moves in your business, then enforce policies gradually with user coaching, so protection improves without stopping work.',
        points: [
          'Email, web, endpoint and cloud DLP policies',
          'Monitor-first rollout with staged enforcement',
          'User coaching prompts and justification flows',
          'Incident triage and reporting',
        ],
        capabilities: [
          {
            title: 'Policy design',
            body: 'Detection for national ID numbers, financial data, health records and your own sensitive documents.',
          },
          {
            title: 'Staged enforcement',
            body: 'Monitor, warn, then block, with each step agreed with the business owners affected.',
          },
          {
            title: 'Managed triage',
            body: 'Our analysts review DLP incidents and escalate genuine risks, so your team is not buried in alerts.',
          },
        ],
        deliverables: [
          'DLP policy set and rule documentation',
          'Deployed and tuned controls',
          'Incident handling procedure',
          'Monthly DLP effectiveness report',
        ],
        keywords: ['DLP', 'data loss prevention', 'data leakage'],
      },
    ],
  },
  {
    slug: 'cloud-security',
    name: 'Cloud Security',
    summary: 'Secure AWS, Microsoft, Google Cloud and SaaS',
    icon: 'cloud',
    tagline: 'built in, not bolted on',
    heroBody:
      'Assess, engineer and operate secure cloud environments across AWS, Microsoft Azure and 365, Google Cloud and the SaaS applications your teams rely on.',
    overviewBody:
      'Cloud moves fast and misconfiguration is the leading cause of cloud breaches. We bring security into your landing zones, pipelines and SaaS settings so teams can move quickly without opening doors.',
    approach: [
      {
        title: 'Assess posture',
        body: 'Review identities, networks, data stores and configurations against CIS benchmarks and provider best practice.',
      },
      {
        title: 'Design guardrails',
        body: 'Landing zones, policies and identity models that make the secure path the easy path.',
      },
      {
        title: 'Engineer and automate',
        body: 'Infrastructure as code, pipeline checks and native security services deployed and tuned.',
      },
      {
        title: 'Monitor continuously',
        body: 'Posture management and threat detection keep configurations from drifting.',
      },
    ],
    benefits: [
      {
        title: 'Fewer misconfigurations',
        body: 'Guardrails and continuous checks catch risky settings before they reach production.',
      },
      {
        title: 'Faster delivery',
        body: 'Security built into templates and pipelines removes late-stage blockers.',
      },
      {
        title: 'Consistent control',
        body: 'One security model across multiple clouds and SaaS platforms.',
      },
      {
        title: 'Cost awareness',
        body: 'Native security services used well, instead of overlapping third-party tools.',
      },
    ],
    images: ['serverRack', 'remoteCoding', 'cables'],
    technology: 'cloud-security',
    services: [
      {
        slug: 'aws-cloud-security',
        name: 'AWS Cloud Security Services',
        summary: 'Secure landing zones, IAM and monitoring on AWS',
        tagline: 'for every account',
        heroBody:
          'Secure multi-account AWS foundations, identity, network and data controls, with native detection services configured and monitored.',
        overviewBody:
          'We review and harden AWS environments of every size, from a single account to large organisations. Guardrails, least-privilege IAM and centralised logging are deployed as code, and native services such as GuardDuty and Security Hub are tuned to your workloads.',
        points: [
          'Account structure and service control policies',
          'IAM least-privilege review and redesign',
          'VPC, security group and edge protection design',
          'Centralised logging, GuardDuty and Security Hub',
        ],
        capabilities: [
          {
            title: 'Secure foundations',
            body: 'Multi-account landing zones with guardrails, logging and identity built in from day one.',
          },
          {
            title: 'Posture hardening',
            body: 'CIS AWS Foundations benchmark review with fixes delivered as infrastructure as code.',
          },
          {
            title: 'Threat detection',
            body: 'Native detection services tuned and connected to your SOC and response playbooks.',
          },
        ],
        deliverables: [
          'AWS security assessment report',
          'Landing zone and guardrail code',
          'IAM and network design documents',
          'Detection and response run books',
        ],
        keywords: ['AWS security', 'AWS cloud security Ghana'],
      },
      {
        slug: 'microsoft-cloud-security',
        name: 'Microsoft Cloud Security Services',
        summary: 'Harden Azure, Entra ID and Microsoft 365',
        tagline: 'across Azure and 365',
        heroBody:
          'Harden Microsoft Azure, Entra ID and Microsoft 365, and make the most of the Defender and Sentinel capabilities you may already be licensed for.',
        overviewBody:
          'Most organisations own more Microsoft security than they use. We review tenant configuration, identity, email and endpoint protection, then switch on and tune the controls your licences include.',
        points: [
          'Entra ID, conditional access and MFA design',
          'Microsoft 365 and Exchange Online hardening',
          'Defender for Endpoint, Office 365 and Cloud configuration',
          'Microsoft Sentinel deployment and content',
        ],
        capabilities: [
          {
            title: 'Tenant hardening',
            body: 'Secure Score and CIS benchmark improvements, prioritised by risk and user impact.',
          },
          {
            title: 'Identity protection',
            body: 'Conditional access, privileged identity management and phishing-resistant MFA.',
          },
          {
            title: 'Detection and response',
            body: 'Defender and Sentinel configured with analytics rules and automation for your environment.',
          },
        ],
        deliverables: [
          'Tenant security review',
          'Licence utilisation map',
          'Hardened configuration baseline',
          'Sentinel and Defender run books',
        ],
        keywords: ['Microsoft 365 security', 'Azure security', 'Microsoft Sentinel'],
      },
      {
        slug: 'google-cloud-security',
        name: 'Google Cloud Security Services',
        summary: 'Secure Google Cloud and Google Workspace',
        tagline: 'for projects and Workspace',
        heroBody:
          'Secure Google Cloud organisations and Google Workspace with sound resource hierarchy, identity, network and data protection controls.',
        overviewBody:
          'We assess and engineer Google Cloud and Workspace environments, applying organisation policies, VPC Service Controls, identity-aware access and Security Command Center findings to keep projects and collaboration safe.',
        points: [
          'Organisation, folder and project hierarchy review',
          'IAM, service account and key hygiene',
          'VPC Service Controls and network design',
          'Google Workspace sharing and access hardening',
        ],
        capabilities: [
          {
            title: 'Organisation guardrails',
            body: 'Organisation policies that block risky configurations across every project.',
          },
          {
            title: 'Workload protection',
            body: 'Network, data and service account controls matched to each workload’s sensitivity.',
          },
          {
            title: 'Workspace security',
            body: 'Sharing, device, email and admin controls that protect collaboration without blocking it.',
          },
        ],
        deliverables: [
          'Google Cloud security assessment',
          'Organisation policy baseline',
          'Workspace hardening guide',
          'Monitoring and alerting design',
        ],
        keywords: ['Google Cloud security', 'Google Workspace security'],
      },
      {
        slug: 'saas-security',
        name: 'SaaS Security Services',
        summary: 'Visibility and control over business SaaS apps',
        tagline: 'for the apps your teams use',
        heroBody:
          'Discover the SaaS applications in use, secure their configurations and control how data and integrations move between them.',
        overviewBody:
          'Business data now lives in dozens of SaaS apps, many adopted without IT. We find them, assess their risk, harden settings in the important ones and monitor for risky sharing and third-party integrations.',
        points: [
          'Shadow SaaS discovery and risk rating',
          'SaaS security posture review and hardening',
          'Third-party app and OAuth integration control',
          'Single sign-on and offboarding coverage',
        ],
        capabilities: [
          {
            title: 'Discovery',
            body: 'An inventory of sanctioned and unsanctioned apps, with owners and data sensitivity.',
          },
          {
            title: 'Posture management',
            body: 'Configuration checks for your critical SaaS platforms, with drift alerts.',
          },
          {
            title: 'Access control',
            body: 'SSO, MFA and automated offboarding so leavers lose access everywhere at once.',
          },
        ],
        deliverables: [
          'SaaS inventory and risk register',
          'Hardened configuration baselines',
          'Integration approval process',
          'Monitoring and alert rules',
        ],
        keywords: ['SaaS security', 'SSPM', 'shadow IT'],
      },
      {
        slug: 'multi-cloud-security',
        name: 'Multi-Cloud Security',
        summary: 'One security model across every cloud provider',
        tagline: 'with one set of rules',
        heroBody:
          'Consistent identity, policy, monitoring and response across AWS, Azure, Google Cloud and private cloud, so nothing falls between platforms.',
        overviewBody:
          'Running several clouds multiplies complexity. We design a common control framework, unify identity and logging, and use cloud-native application protection to see risk across every provider in one place.',
        points: [
          'Common cloud control framework',
          'Federated identity across providers',
          'Unified logging and detection',
          'Cloud-native application protection (CNAPP) rollout',
        ],
        capabilities: [
          {
            title: 'Unified policy',
            body: 'One set of security requirements translated into each provider’s native controls.',
          },
          {
            title: 'Single pane of glass',
            body: 'Posture, vulnerabilities and threats from every cloud in one prioritised view.',
          },
          {
            title: 'Portable automation',
            body: 'Infrastructure-as-code modules and checks that work the same way everywhere.',
          },
        ],
        deliverables: [
          'Multi-cloud security architecture',
          'Control framework and mappings',
          'Unified monitoring design',
          'Implementation roadmap',
        ],
        keywords: ['multi-cloud security', 'CNAPP', 'hybrid cloud security'],
      },
      {
        slug: 'cloud-security-assessments',
        name: 'Cloud Security Assessments',
        summary: 'Independent review of your cloud posture and risks',
        tagline: 'that show where you stand',
        heroBody:
          'An independent, evidence-based review of your cloud environments against benchmarks, provider best practice and your own risk appetite.',
        overviewBody:
          'Our assessments combine automated configuration analysis with expert review of architecture, identity and data flows. You get a clear picture of risk, ranked by impact, with a practical plan to fix it.',
        points: [
          'Configuration review against CIS benchmarks',
          'Identity and privilege analysis',
          'Network exposure and data store review',
          'Logging, monitoring and incident readiness',
        ],
        capabilities: [
          {
            title: 'Evidence-based',
            body: 'Every finding is backed by configuration evidence, not questionnaires alone.',
          },
          {
            title: 'Attack-path view',
            body: 'We show how individual weaknesses combine into real routes to your data.',
          },
          {
            title: 'Practical roadmap',
            body: 'Quick wins and strategic fixes, sized and sequenced for your team.',
          },
        ],
        deliverables: [
          'Executive summary for leadership',
          'Detailed technical findings',
          'Benchmark compliance scores',
          'Prioritised remediation plan',
        ],
        keywords: ['cloud security assessment', 'cloud audit', 'CIS benchmark'],
      },
      {
        slug: 'cloud-security-engineering',
        name: 'Cloud Security Engineering',
        summary: 'Security engineers embedded in your cloud teams',
        tagline: 'in every pipeline',
        heroBody:
          'Hands-on engineers who build security into your infrastructure as code, CI/CD pipelines and platform services alongside your teams.',
        overviewBody:
          'We work inside your delivery process: writing secure Terraform modules, adding policy and secret scanning to pipelines, and building the platform services that let developers ship safely without waiting for reviews.',
        points: [
          'Secure infrastructure-as-code modules',
          'Pipeline checks for code, secrets and configuration',
          'Policy as code for preventive guardrails',
          'Secrets and key management integration',
        ],
        capabilities: [
          {
            title: 'Shift-left controls',
            body: 'Checks that run in pull requests, where problems are cheapest to fix.',
          },
          {
            title: 'Reusable patterns',
            body: 'Approved building blocks for networks, databases and compute that are secure by default.',
          },
          {
            title: 'Knowledge transfer',
            body: 'Pairing and documentation so your engineers own the patterns after we leave.',
          },
        ],
        deliverables: [
          'Secure IaC module library',
          'Pipeline security checks',
          'Policy-as-code rule set',
          'Engineering playbooks',
        ],
        keywords: ['DevSecOps', 'cloud security engineering', 'infrastructure as code security'],
      },
      {
        slug: 'container-security',
        name: 'Container Security',
        summary: 'Secure images, Kubernetes clusters and runtime',
        tagline: 'from image to runtime',
        heroBody:
          'Secure container images, registries, Kubernetes clusters and workloads at runtime, without slowing down your developers.',
        overviewBody:
          'Containers change how software is built and run, and how it is attacked. We secure the whole lifecycle: image scanning and signing, cluster hardening, network policies, admission control and runtime threat detection.',
        points: [
          'Image scanning, signing and registry controls',
          'Kubernetes hardening against CIS benchmarks',
          'Network policies and workload isolation',
          'Runtime detection and response',
        ],
        capabilities: [
          {
            title: 'Supply chain',
            body: 'Trusted base images, software bills of materials and signed artefacts.',
          },
          {
            title: 'Cluster hardening',
            body: 'RBAC, admission policies and secrets handling configured for least privilege.',
          },
          {
            title: 'Runtime protection',
            body: 'Detection of unexpected processes, connections and privilege escalation in live workloads.',
          },
        ],
        deliverables: [
          'Container security assessment',
          'Hardened cluster baseline',
          'Admission and network policies',
          'Runtime alerting run book',
        ],
        keywords: ['container security', 'Kubernetes security', 'Docker security'],
      },
      {
        slug: 'digital-transformation',
        name: 'Digital Transformation',
        summary: 'Modernise securely: cloud migration and new platforms',
        tagline: 'with security from day one',
        heroBody:
          'Plan and deliver cloud migrations, platform modernisation and new digital services with security, privacy and resilience designed in from the start.',
        overviewBody:
          'Transformation creates risk when security arrives late. Our architects and engineers work with your programme team from business case to go-live, combining Maddy Group’s software delivery and cybersecurity experience.',
        points: [
          'Secure cloud migration planning and execution',
          'Architecture and threat modelling for new services',
          'Identity, data and integration design',
          'Resilience, backup and continuity planning',
        ],
        capabilities: [
          {
            title: 'Security architecture',
            body: 'Target architectures that meet regulatory, performance and budget requirements together.',
          },
          {
            title: 'Migration delivery',
            body: 'Phased migrations with security checks at every gate and clear rollback plans.',
          },
          {
            title: 'Build and integrate',
            body: 'Our software team can build and integrate the digital services themselves, securely.',
          },
        ],
        deliverables: [
          'Transformation security plan',
          'Target architecture and designs',
          'Migration run books',
          'Go-live security assurance report',
        ],
        keywords: ['digital transformation', 'cloud migration', 'secure modernisation'],
      },
    ],
  },
]
