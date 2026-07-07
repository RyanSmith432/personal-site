export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  images: string[];
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'ESXi & VCSA Upgrades for 1300+ Hosts',
    subtitle: 'Upgrade ESXi v7 to v8 and VCSA v7 to v8 for 1300+ hosts. As well as configure VCSA backups and certificate renewals.',
    images: [
      '/images/projects/VMware_ESXi_v7_v8.webp',
      '/images/projects/VMware_VCSA_v7_v8.webp',
      '/images/projects/VMware_VCSA_Backups.webp',
      '/images/projects/VMware_VCSA_Cert.webp',
      '/images/projects/VMware_ESXi_v7_v8_Upgrade_Schedule.webp'
    ],
    date: '2022-10-15',
    desc: 'I lead the upgrade of 1300+ ESXi hosts from v7 to v8, & VCSA servers from v7 to v8, ensuring compatibility with the latest features and security updates. Including setting the schedule & creating the process documentation.',
    tech: ['VMware ESXi', 'vSphere', 'PowerCLI', 'Confluence'],
    featured: true,
  },
  {
    title: 'The QRTist Gen-AI',
    subtitle: 'AI-powered Art Generation for Scannable QR Code Artwork',
    link: 'https://TheQRTist.com',
    images: ['/images/projects/PayPal-Sushi.webp'],
    date: '2025-05-10',
    desc: 'Developed an AI-powered art generation platform that creates unique scannable QR Code artwork.',
    tech: ['Python', 'TensorFlow', 'Stable Diffusion', 'ComfyUI', 'Docker containers', 'Hugging Face', 'Nvidia GPU'],
    featured: true,
  },
  {
    title: 'vRA Migration & Upgrade',
    subtitle: 'vRA Cloud too On-Prem Migration & Upgrade to latest vRA / vRO versions.',
    images: [
      '/images/projects/vRA_Cloud-to-On-Prem_01.webp',
      '/images/projects/vRA_Cloud-to-On-Prem_02.webp'
    ],
    date: '2025-10-15',
    desc: 'Migrated vRA Cloud workloads to on-premises infrastructure, ensuring seamless transition and minimal downtime. Then upgraded to the latest vRA / vRO versions.',
    tech: ['VMware vRA', 'VMware vRO', 'vSphere', 'PowerCLI', 'Confluence'],
    featured: true,
  },
  {
    title: 'Scripts to Report & Correct ESXi host drift',
    subtitle: 'PowerCLI scripts used to generate find & correct configuration drift on 1300+ ESXi hosts.',
    images: [
      '/images/projects/script_examples_reports.webp',
      '/images/projects/script_examples_set.webp'
    ],
    date: '2023-10-15',
    desc: 'I created PowerCLI scripts to generate Reports on configuration drift & to set the correct values on misconfigured hosts for 1300+ ESXi hosts.',
    tech: ['VMware', 'vSphere', 'PowerCLI', 'Confluence'],
    featured: true,
  },
  {
    title: 'OS Hardening and Security Compliance',
    subtitle: 'Managed a project to reach Security teams 90% compliance requirement for Windows and Linux. We exceeded the requirement & achieved 96%-100%.',
    images: [
      '/images/projects/OS_Hardening_CIS_Compliance_GPOs.webp',
      '/images/projects/OS_Hardening_CIS_Compliance_GPOs_02.webp',
      '/images/projects/OS_Hardening_CIS_Compliance_GPO_Inheritance.webp',
      '/images/projects/Tanium_How-To_Run_Assessments.webp'
    ],
    date: '2025-11-01',
    desc: 'Lead the deployment & enforcement process. Creating, tuning & running the Tanium Assessments. As well as coordinating with App owners on the testing & impact of Security GPOs on Applications in a Development environment.',
    tech: ['CIS', 'DORA', 'Tanium', 'RHEL', 'Server 2025', 'Server 2019', 'Group Policy', 'Active Directory'],
    featured: true,
  },
  {
    title: 'Dell BIOS & OME upgrades for 1300+ Servers',
    subtitle: 'Upgrade Dell BIOS and OME servers to latest versions',
    images: [
      '/images/projects/Dell_BIOS_Upgrade.webp',
      '/images/projects/Dell_OME_Update.webp'
    ],
    date: '2024-10-15',
    desc: 'Upgraded the BIOS of 1300+ Dell Servers and their related OME servers to the latest versions, ensuring improved system stability, security, and performance.',
    tech: ['Dell OME', 'BIOS Upgrades', 'Firmware Upgrades', 'Splunk', 'Confluence'],
    featured: true,
  },
  {
    title: 'OS Image Management Automation',
    subtitle: 'OS Image Management and Deployments for Windows and Linux images including documentation.',
    images: [
      '/images/projects/Image_Creation_Process.webp',
    ],
    date: '2026-10-15',
    desc: 'On a team of Engineers, who managed the deployment of Windows and Linux images for a large enterprise, ensuring consistent and efficient system setups across the organization.',
    tech: ['Ansible', 'CI/CD', 'IaC', '.hcl', 'Packer', 'Terraform', 'Group Policy', 'Tanium', 'ServiceNow CMDB', 'Nexus Repositories'],
    featured: true,
  },
  {
    title: 'Intune Vulnerability Remediation',
    subtitle: 'Deployed AD CS ESC1 & ESC8 Remediation',
    images: [
      '/images/projects/InTune - How-To_ AD CS ESC1 & ESC8 Remediation_v0.9.png',
      '/images/projects/InTune - How-To_AD CS PKI_Enrollment.webp'
    ],
    date: '2024-10-15',
    desc: 'Managed the process documentation and deployment of AD CS ESC1 & ESC8 Remediations, ensuring enhanced security and compliance across the organization.',
    tech: ['InTune', 'Active Directory', 'Active Directory Certificate Services', 'Group Policy', 'PowerShell'],
    featured: true,
  },
  {
    title: 'PURE & VMware Replicated Datastores',
    subtitle: 'Creating and managing PURE and VMware replicated datastores for high availability and disaster recovery.',
    images: [
      '/images/projects/PURE_VMware_How-to-create-replicated-datastores.webp',
    ],
    date: '2024-10-15',
    desc: 'Managed the process documentation and configuration of PURE and VMware replicated datastores for high availability and disaster recovery.',
    tech: ['PURE', 'VMware', 'vSphere', 'vSAN', 'Disaster Recovery', 'High Availability'],
    featured: true,
  },
  {
    title: 'NetApp LDAPS (secure LDAP) Configuration Standardization',
    subtitle: 'Creating and managing PURE and VMware replicated datastores for high availability and disaster recovery.',
    images: [
      '/images/projects/NetApp_How-To_Enable_LDAPS_ONTAP.webp',
    ],
    date: '2025-12-06',
    desc: 'Managed configuration change and LDAPS standardization across the organization, ensuring secure and compliant LDAP implementations.',
    tech: ['NetApp ONTAP', 'LDAPS', 'Security'],
    featured: true,
  },
  {
    title: 'NetApp BlueXP Deployment & File Auditing',
    subtitle: 'Deployment of NetApp BlueXP for file auditing & reporting.',
    images: [
      '/images/projects/NetApp_BlueXP_How-To_Deploy_BlueXP.webp',
    ],
    date: '2024-12-19',
    desc: 'Lead the deployment of NetApp BlueXP. As part of a larger initiative to delete unused files and reduce storage costs ahead of a data Migration project.',
    tech: ['NetApp ONTAP', 'NetApp BlueXP', 'Security'],
    featured: true,
  },
  {
    title: 'PURE Storage Plugin',
    subtitle: 'Install PURE Storage Plugin on VMware VCSA.',
    images: [
      '/images/projects/PURE_plugin_VCSA_Install.webp',
    ],
    date: '2023-05-01',
    desc: 'Lead the efforts to deploy the PURE Storage Plugin to VMware VSCAs.',
    tech: ['VMware VCSA', 'VMware', 'PURE'],
    featured: true,
  },
  {
    title: 'UCS Fibric Interconnect port Enable/Disable How-To',
    subtitle: 'Create a How-To for junior Engineers',
    images: [
      '/images/projects/UCS_FI_Port_Enable_or_Disable.webp',
    ],
    date: '2021-04-01',
    desc: 'Created a How-To for Junior Engineers to follow that details the process of Enabling or Disabling a UCS Fabric Interconnect port.',
    tech: ['Cisco', 'UCS', 'Cisco UCS'],
    featured: true,
  },
];

export default data;