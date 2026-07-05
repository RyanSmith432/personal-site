/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Trace3 / Capital Group',
    position: 'DevSecOps Engineer',
    url: 'https://trace3.com',
    startDate: '2026-01-01',
    summary: `Currently working on OS build automation and security hardening.`,
    highlights: [
      'Automate and secure enterprise OS deployments through CI/CD pipelines leveraging vRA, vRO, Ansible Automation Platform (AAP), GitHub Playbooks, Ansible roles, and Nexus‑managed binaries.',
      'Review and approve infrastructure‑as‑code changes to ensure secure, consistent, and compliant system builds across Windows and Linux environments.',
      'Develop, troubleshoot, and optimize PowerShell scripts implementing security baselines, configuration controls, and automated hardening logic.',
      'Validate and enforce security controls using Group Policy Objects (GPOs) after script‑based testing to ensure consistent configuration across the enterprise.',
      'Diagnose and resolve OS build failures across automated provisioning workflows, orchestration layers, and ServiceNow CMDB integrations.',
      'Monitor and improve security posture using Tanium compliance scans, analyze remediation reports, and drive corrective actions to meet organizational benchmarks.',
      'Collaborate with platform, security, and automation teams to enhance pipeline reliability, configuration governance, and compliance accuracy.',
      'Hands-on experience with Enterprise IT operations, including ITIL frameworks and regulatory/compliance requirements.',
    ],
  },
  {
    name: 'TheQRTist.com',
    position: 'Co-founder & CTO',
    url: 'https://TheQRTist.com',
    startDate: '2025-07-01',
    summary: `Owned company-wide technical strategy and product roadmap across open-source adoption, commercial product, and research investments.`,
    highlights: [
      'Built and operated a full local GenAI compute environment using RTX 4090 GPUs, supporting high‑throughput inference, model experimentation, and automated image/video generation workflows.',
      'Designed and maintained the entire Generative AI toolchain, including Automatic1111, Stable Diffusion, ComfyUI, custom nodes, LoRA pipelines, and isolated virtual environments for reproducible results.',
      'Conducted systematic model evaluation and hyperparameter testing across checkpoints, LoRAs, samplers, schedulers, and control networks to optimize output quality for commercial use cases & scanability of the artwork QR Codes.',
      'Engineered a workflow to generate scannable QR‑embedded artwork, integrating brand logos and visual elements directly into the scene using diffusion‑based conditioning and prompt‑control techniques.',
      'Developed automated pipelines to convert still images into high‑quality video animations, leveraging frame interpolation, motion models, and GPU‑accelerated rendering.',
      'Owned the full technical stack for the startup, including GenAI infrastructure, customer‑facing systems, SaaS membership platform, payment integrations, newsletter automation, analytics, and operational tooling.',
      'Managed internal IT systems including Google Workspace, communication platforms, project/task management tools, and security baselines for a lean early‑stage environment.',
      'Collaborated on product direction, customer outreach, and technical feasibility assessments for new AI‑driven features and offerings.',
      'Familiarity with generative AI concepts including MCP, RAG, context windows, token usage, skills, system prompts, prompt engineering, guardrails, and prompt injection.',
      'Experience with generative AI tools like Cursor, Claude Code, Claude Cowork, Codex, & Gemini.',
    ],
  },
  {
    name: 'Trace3 / Capital Group',
    position: 'Senior Infrastructure Engineer / Release Manager / Senior Cloud Architect',
    url: 'https://trace3.com',
    startDate: '2021-09-01',
    summary: `Release Management for BIOS and Firmware upgrades. OS hardening and security compliance for enterprise Windows and Linux environments.`,
    highlights: [
      'Spearheaded release management for 1300+ UCS, Dell, Pure, Brocade, VxRack, Cohesity, and VMware hosts across 30 VCSAs.',
      'Planned and coordinated multi-team release cycles, defining level of effort, dependencies, and risk mitigation strategies.',
      'Led hardware replacement initiatives, patching, security remediation, and compliance reporting for enterprise infrastructure. Automated some tasks using PowerShell and/or VCF PowerCLI.',
      'Operational ownership of asset management including purchasing, deployment, troubleshooting, and lifecycle planning.',
      'Upgraded VMware environments from 6.7 to 8.0, including testing, documentation, and implementation with zero business impact.',
      'Automated monitoring and remediation workflows using PowerShell and/or VCF PowerCLI and vRO, enhancing operational efficiency and audit readiness.',
      'Directed vRA/vRO SaaS-to-on-prem migrations, including new deployments, image management, and configuration standardization.',
      'Led Azure and Intune AD CS pentest remediation efforts, improving security posture across hybrid environments.',
      'Authored SOPs and how-to documentation to streamline future deployments and cross-team collaboration.',
      'Engineering Lead for Enterprise IT operations, including ITIL frameworks, CIS and other regulatory/compliance requirements.',
    ],
  },
  {
    name: 'WinCo Foods',
    position: 'Senior Systems Engineer',
    url: 'https://wincofoods.com',
    startDate: '2014-01-01',
    endDate: '2021-09-01',
    summary: `Lead Engineer for Release Management for BIOS and Firmware upgrades. ESXi hosts & vCenter Servers upgrades. Exchange & SCCM moderization. OS hardening and security compliance.`,
    highlights: [
      'Managed patching, security remediation, and upgrades across AD, GPO, Exchange, DNS/DHCP, IIS, SQL, and RDS HA environments.',
      'Designed and deployed Shavlik patching solution, modernizing server lifecycle from Windows Server 2003 to 2019.',
      'Engineered and led migration from 180+ physical servers to 70 VMs, reducing footprint and improving scalability.',
      'Oversight of asset lifecycle processes including acquisition, deployment, break/fix, and refresh planning.',
      'Designed and implemented HA RDS environment supporting 5000+ Thin Clients across multi-site infrastructure.',
      'Modernization of Exchange environment adding redundancy, redesigned databases, and optimized mail routing via GSLB DNS.',
      'Deployed VeeamOne backup and replication, PrinterLogic print management, and Citrix VDI proof-of-concept environments.',
      'Supported ESXi 7 on UCS and Pure storage, and managed enterprise tools including Confluence, Jira, SharePoint, SolarWinds, SCCM, Splunk, WhatsUp, and ADAudit.',
      'Led DR and resiliency planning/testing, ensuring business continuity across critical systems.',
    ],
  },
  {
    name: 'Recurrent Energy',
    position: 'Senior Systems Engineer',
    url: 'https://recurrentenergy.com',
    startDate: '2013-10-01',
    endDate: '2014-08-01',
    summary: `Lead Engineer for Release Management for BIOS and Firmware upgrades. Exchange & SCCM moderization. OS hardening and security compliance.`,
    highlights: [
      'Designed and implemented Disaster Recovery architecture and testing protocols across VMware and AD environments.',
      'Upgraded AD Schema and Exchange to latest versions, improving scalability and security.',
      'Deployed and managed Veeam backup and replication across production and DR sites.',
      'Installed and maintained EMC VNX storage arrays; optimized capacity through deduplication and backup reconfiguration.',
      'Standardized system builds and deployment processes, reducing provisioning time and support overhead.',
      'Engineered BitLocker encryption rollout for laptops and mobile devices, enhancing endpoint security.',
      'Managed VMware ESXi infrastructure hosted on Cisco UCS, ensuring high availability and performance.',
      'Management of enterprise asset lifecycle covering procurement, provisioning, incident remediation, and lifecycle strategy.',
    ],
  },
  {
    name: 'Taos / Juniper Networks',
    position: 'Senior Systems Engineer',
    url: 'https://linkedin.com/company/taos/',
    startDate: '2011-08-01',
    endDate: '2013-08-01',
    summary: `Engineer for Juniper Networks Release Management for BIOS and Firmware upgrades of ESXi hosts & vCenter Servers.`,
    highlights: [
      'Supported VMware and storage infrastructure across 130+ servers totaling 13+ PB across NetApp, EMC, Hitachi, and HP.',
      'Led design and build of Disaster Recovery site hosting Citrix and Domain Controllers on VMware.',
      'Managed Infoblox DNS across 50+ appliances, ensuring reliable and secure name services.',
      'Maintained AD, GPO’s, DNS, and Citrix environments supporting large‑scale production workloads.',
      'Managed patching, migrations, and backups across enterprise systems using Veeam and ServiceNow.',
      'Authored SOPs, runbooks, and how‑to guides aligned with ITIL‑based operational processes, improving consistency across Admin and Helpdesk teams.',
    ],
  },
  {
    name: 'HP',
    position: 'Senior Storage & Systems Engineer',
    url: 'https://hp.com/',
    startDate: '2010-08-01',
    endDate: '2011-08-01',
    summary: `Senior Storage & Systems Engineer at HP. Member of Engineering team responsible for building and maintaining HP’s 1st enterprise lab environments on VMware ESXi 3.5–4.1.`,
    highlights: [
        'Lead Architect on data center build with 100+ HP C-Class blades and EVA SAN storage for VMware ESXi 3.5–4.1.',
        'Configured clustering, failover, and vMotion across enterprise lab environments.',
        'Migrated 700 VMs and virtualized 300 physical servers to new data center infrastructure.',
        'Conducted infrastructure audits for HP’s largest clients, replicating environments for testing and validation.',
        'Supported lab environments scaled for 10,000+ active users per client, testing printer driver updates and system performance.',
    ],
  },
];

export default work;