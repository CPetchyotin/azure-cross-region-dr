import {
  ShieldCheck,
  FileText,
  Zap,
  Database,
  Settings,
  Save,
  Server,
  Lock,
  Monitor,
  Cloud,
  Network,
  Activity,
} from "lucide-react";

export const partnerLogos = [
  { name: "Microsoft", url: "/images/microsoft.png" },
  { name: "Cisco", url: "/images/cisco.png" },
  { name: "Veeam", url: "/images/veeam.png" },
  { name: "Fortinet", url: "/images/fortinet.png" },
  { name: "Trend Micro", url: "/images/trend.png" },
  { name: "VMware", url: "/images/vmware.png" },
  { name: "Dell", url: "/images/dell.png" },
  { name: "ManageEngine", url: "/images/manageengine.png" },
  { name: "Hitachi", url: "/images/hitachi.png" },
  { name: "VST ECS", url: "/images/vstecs.png" },
  { name: "Synnex", url: "/images/synnex.png" },
  { name: "SIS", url: "/images/sis.png" },
  { name: "Ingram Micro", url: "/images/ingram.png" },
  { name: "Keyence", url: "/images/keyence.png" },
];

export const cases = [
  {
    id: 1,
    title: "Cybersecurity Transformation",
    subtitle: "Reactive to Strategic",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
    tags: ["NIST/CIS", "4-Year Plan"],
    summary:
      "A large manufacturing client faced increasing cyber threats and regulatory pressure.",
    challenge:
      "A large Japanese automotive parts manufacturer in Thailand was using legacy firewalls and unpatched servers. They faced immense pressure from their HQ to comply with global security standards (NIST framework) within 6 months, or risk losing production contracts. Internal IT was understaffed and lacked cybersecurity expertise.",
    solution:
      'We didn\'t just sell software; we acted as their CISO. We conducted a comprehensive Vulnerability Assessment (VA) to identify gaps. We then rolled out a "4-Year Security Roadmap". Year 1 focused on "Stop the Bleeding" (Firewall tuning, Endpoint Protection). Year 2-3 focused on "Visibility & Governance" (Log centralization, SIEM). We also provided 24/7 monitoring to relieve their internal team.',
    result:
      "The client achieved a security score increase from 35% to 92% within the first year. They passed the HQ audit with flying colors, securing their production contracts. The IT manager reported a 60% reduction in operational workload, allowing them to focus on digital transformation projects instead of firefighting malware.",
  },
  {
    id: 2,
    title: "PDPA for Industry",
    subtitle: "100% Compliance",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    icon: FileText,
    color: "text-green-600",
    bg: "bg-green-50",
    tags: ["Data Privacy", "Legal Tech"],
    summary:
      "A mid-to-large scale factory needed to comply with Thailand's PDPA laws.",
    challenge:
      "A food processing factory with over 2,000 employees (high turnover of shift workers) was struggling to comply with the Thai PDPA law. Paper-based consent forms were lost or incomplete. HR and Production departments were sharing sensitive employee data (ID cards, health records) via unsecured LINE groups and personal emails, creating a massive legal risk.",
    solution:
      'AGSS implemented a dual-layer solution. 1) Process: We mapped their data flow and created a "Digital Consent System" via kiosks for workers, eliminating paper. 2) Technology: We deployed Microsoft Purview (DLP) to automatically block sensitive files from being sent outside the company organization or via unauthorized apps. We also trained their staff on data privacy awareness.',
    result:
      "The factory achieved 100% PDPA Compliance within 3 months. The digital system saved HR 400 man-hours per year on paperwork. Most importantly, zero data leakage incidents have been reported since implementation, protecting the company from potential multi-million baht fines and reputational damage.",
  },
  {
    id: 3,
    title: "Zero Downtime Migration",
    subtitle: "Legacy Upgrade",
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80",
    icon: Zap,
    color: "text-orange-600",
    bg: "bg-orange-50",
    tags: ["Virtualization", "HA Cluster"],
    summary:
      "A critical production facility was running on end-of-life hardware.",
    challenge:
      "A leading electronics manufacturer was running their critical ERP and Production Planning System on physical servers that were 7+ years old. Hardware failure was imminent, and spare parts were obsolete. The factory operates 24/7, and any downtime exceeding 1 hour costs them approximately 5 million THB in lost production. They feared a migration would crash the line.",
    solution:
      'AGSS designed a "Zero Downtime" migration strategy using Hyper-Converged Infrastructure (HCI). We built the new environment in parallel, tested it extensively without touching the live system. We then used "Double-Take" real-time replication software to sync data. The actual cutover was performed during a 15-minute lunch break using automated failover scripts.',
    result:
      "The migration was seamless with Zero Unplanned Downtime. The ERP system performance increased by 300%, reducing report generation time from 20 minutes to 30 seconds. The IT Director was praised by the board for a risk-free transition that secured the factory's output for the next 5 years.",
  },
  {
    id: 4,
    title: "IT Security Assessment",
    subtitle: "Vulnerability Management",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    icon: Database,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    tags: ["VA Scan", "Pentest"],
    summary:
      "Comprehensive examination of IT infrastructure to identify vulnerabilities and ensure compliance.",
    challenge:
      "The client needed to launch a new critical application but was unsure of underlying network vulnerabilities. They lacked in-house security experts to conduct deep scans and faced strict compliance requirements from their global B2B partners.",
    solution:
      "We executed an end-to-end assessment including Scoping, Information Gathering, Vulnerability Assessment (VA), Penetration Testing (Ethical Hacking), and Risk Evaluation using international security standards.",
    result:
      "Delivered a clear Executive Summary of risk levels alongside a detailed Technical Report for remediation. Validated the fixes through post-patching re-testing, ensuring 100% compliance with their B2B partner requirements.",
  },
  {
    id: 5,
    title: "Strategic Managed Services",
    subtitle: "IT Operation Management",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    icon: Settings,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    tags: ["Outsourcing", "24/7 Support"],
    summary:
      "Transitioning from high-risk in-house IT to a comprehensive Managed Services model.",
    challenge:
      "The factory suffered from critical 'Skill Gaps' and a 'High Turnover Rate' of specialized IT personnel. Unexpected system downtimes halted production lines, and reactive break-fix approaches led to highly unpredictable operational costs.",
    solution:
      "Deployed our One-Stop Service covering Server, Network, Cybersecurity, and Helpdesk operations. We utilized a 'Proactive Management' methodology with 24/7 monitoring to prevent issues before they occurred.",
    result:
      "Slashed overall IT personnel overhead by 30-40%. The client gained access to a multi-disciplinary team of Senior Experts, completely eliminating operational paralysis caused by staff resignations.",
  },
  {
    id: 6,
    title: "Data Resilience Framework",
    subtitle: "Backup & Disaster Recovery",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80",
    icon: Save,
    color: "text-purple-600",
    bg: "bg-purple-50",
    tags: ["Immutable", "RTO/RPO"],
    summary:
      "Building a gold-standard Data Protection framework to eliminate Ransomware risks.",
    challenge:
      "Traditional 'Tape' backups were too slow for factory recovery metrics. With modern ransomware specifically targeting backup files first, the client risked massive data loss and couldn't provide proof of Disaster Recovery to auditors.",
    solution:
      "Executed a 3-Step Bulletproof Roadmap: Precision Strategy (RTO/RPO Audit), Immutable Shield Deployment (Veeam Hardened Repository), and Automated Recovery Assurance (SureBackup implementation).",
    result:
      "Achieved ransomware-proof storage that cannot be deleted or encrypted. Enabled Instant VM Recovery directly from backups in minutes, providing 100% confidence with automated daily recovery testing reports.",
  },
  {
    id: 7,
    title: "Powering Precision ASRS",
    subtitle: "Smart Logistics",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    icon: Server,
    color: "text-amber-600",
    bg: "bg-amber-50",
    tags: ["Low Latency", "High Availability"],
    summary:
      "Designing the critical server layer for a new Automated Storage & Retrieval System (ASRS).",
    challenge:
      "A greenfield build required ultra-low latency; any database lag would break real-time robot sequences. The complex multi-layer integration (ASRS ↔ DB ↔ PLC ↔ ERP) left zero room for error during the high-risk commissioning window.",
    solution:
      "Delivered an ASRS-optimized architecture with strict High Availability. Implemented NVMe tiering to guarantee low latency, executed real-time OS tuning, and built comprehensive interface services for seamless WMS/ERP integration.",
    result:
      "Achieved 100% On-Time Go-Live with absolutely no server-side blockers. The ultra-stable environment executed real-time mechanical commands flawlessly, providing a scalable foundation for future warehouse modules.",
  },
];

export const solutionsData = [
  {
    slug: "infrastructure",
    title: "Infrastructure Modernization",
    desc: "Modernize legacy systems with robust virtualization ensuring continuity.",
    icon: Database,
    theme: "cyan",
    color: "from-blue-500 to-cyan-400",
    tags: ["Implementer", "Consultant"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    fullDesc:
      "We upgrade outdated physical servers into highly efficient, virtualized environments (HCI). This reduces physical footprint, lowers energy consumption, and provides a foundation for seamless disaster recovery. Tailored specifically for factory floors where space and uptime are critical.",
    features: [
      "Hyper-Converged Infrastructure (HCI)",
      "Server Consolidation",
      "High Availability (HA) Clustering",
      "Hardware Lifecycle Management",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Industrial Cybersecurity",
    desc: "NIST/CIS aligned security. Firewall optimization and vulnerability management.",
    icon: Lock,
    theme: "rose",
    color: "from-rose-500 to-pink-500",
    tags: ["NIST/CIS", "Consultant"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    fullDesc:
      "Manufacturing is the #1 target for ransomware. We secure your IT and OT networks by aligning with global standards (NIST/CIS). From Next-Gen Firewalls to Endpoint Detection and Response (EDR), we ensure your production lines never stop due to a cyber attack.",
    features: [
      "Next-Gen Firewall (NGFW) Setup",
      "OT/IT Network Segmentation",
      "Vulnerability Assessment (VA)",
      "Ransomware Protection",
    ],
  },
  {
    slug: "manageengine",
    title: "ManageEngine Solutions",
    desc: "IT Management tools for advanced monitoring and service desk.",
    icon: Settings,
    theme: "amber",
    color: "from-amber-500 to-orange-400",
    tags: ["AD Mgmt", "Vulnerability", "Service Desk", "Endpoint"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    fullDesc:
      "As an authorized partner, we implement and optimize ManageEngine suites to give your IT team full control. Automate Active Directory, track tickets efficiently, and manage endpoints across multiple factory branches from a single pane of glass.",
    features: [
      "ServiceDesk Plus Implementation",
      "Active Directory Automation",
      "Endpoint Central Management",
      "Custom IT Workflows",
    ],
  },
  {
    slug: "jp1-asset-mgmt",
    title: "JP1 Asset Management",
    desc: "Leading software asset management and IT automation.",
    icon: Monitor,
    theme: "emerald",
    color: "from-green-500 to-emerald-400",
    tags: ["IT Asset Mgmt", "Compliance"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    fullDesc:
      "Maintain strict compliance with software licenses and automate routine IT tasks. JP1 helps Japanese and multinational manufacturers in Thailand keep track of thousands of devices, ensuring audit-readiness and reducing unauthorized software risks.",
    features: [
      "Automated Inventory Tracking",
      "Software License Compliance",
      "Remote Deployment",
      "Security Policy Enforcement",
    ],
  },
  {
    slug: "backup-dr",
    title: "Backup & Disaster Recovery",
    desc: "Reliable data protection and disaster recovery tailored for manufacturing.",
    icon: Save,
    theme: "indigo",
    color: "from-purple-500 to-indigo-500",
    tags: ["Data Recovery", "Cyber Resilient"],
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80",
    fullDesc:
      "Data loss means production halts. We design and implement robust Backup and Disaster Recovery (DR) strategies. Using the 3-2-1 backup rule and immutability, we guarantee your ERP and production data can be restored in minutes, not days.",
    features: [
      "Immutable Backups (Ransomware Proof)",
      "Offsite & Cloud Replication",
      "Automated DR Testing",
      "Zero-Downtime Architecture",
    ],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    desc: "Scalable and flexible industrial operations.",
    icon: Cloud,
    theme: "sky",
    color: "from-sky-500 to-blue-500",
    tags: ["Azure", "AWS", "Inet", "SIS Cloud"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    fullDesc:
      "Seamlessly migrate your non-latency-sensitive workloads to the cloud. We help you choose the right environment (Azure, AWS, or Local Thai Clouds) to optimize costs while ensuring secure access for remote workers and multi-site factory operations.",
    features: [
      "Cloud Readiness Assessment",
      "Hybrid Cloud Architecture",
      "M365 & Azure Migration",
      "Cloud Cost Optimization",
    ],
  },
  {
    slug: "network-mgmt",
    title: "Network Optimization",
    desc: "Optimizing efficiency for seamless operations across office and factory.",
    icon: Network,
    theme: "teal",
    color: "from-cyan-500 to-teal-400",
    tags: ["Design", "Optimize"],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    fullDesc:
      "Factory environments are harsh on wireless and wired networks (interference, metal structures). We design, survey, and deploy industrial-grade networking solutions that guarantee your IoT devices and scanners stay connected 24/7.",
    features: [
      "Factory Wi-Fi Site Survey",
      "Fiber Optic & Cabling Design",
      "SD-WAN Implementation",
      "Network Bottleneck Resolution",
    ],
  },
  {
    slug: "proactive-monitoring",
    title: "Proactive Monitoring",
    desc: "24/7 Oversight to prevent downtime before it occurs.",
    icon: Activity,
    theme: "violet",
    color: "from-indigo-500 to-violet-500",
    tags: ["24/7 Support", "Alerts"],
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80",
    fullDesc:
      "Don't wait for a system to crash to know there's a problem. Our Network Operations Center (NOC) monitors your servers, switches, and firewalls 24/7. We detect anomalies and fix them before they impact your production line.",
    features: [
      "24/7 Infrastructure Monitoring",
      "Real-time Alerting (LINE/Email)",
      "Performance Bottleneck Analytics",
      "Monthly Health Reports",
    ],
  },
];
