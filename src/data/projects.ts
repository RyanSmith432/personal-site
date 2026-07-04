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
    title: 'Capital Group - ESXi & VCSA',
    subtitle: 'Upgrade ESXi v7 to v8 and VCSA v7 to v8',
    images: [
      '/images/projects/VMware_ESXi_v7_v8.webp',
      '/images/projects/VMware_VCSA_v7_v8.webp'
    ],
    date: '2022-10-15',
    desc: 'Upgraded 1300+ ESXi hosts from v7 to v8, & VCSA servers from v7 to v8, ensuring compatibility with the latest features and security updates.',
    tech: ['VMware ESXi', 'vSphere', 'PowerCLI'],
    featured: true,
  },
  {
    title: 'The QRTist',
    subtitle: 'AI-powered Art Generation',
    link: 'https://TheQRTist.com',
    images: ['/images/projects/PayPal-Sushi.webp'],
    date: '2025-05-10',
    desc: 'Developed an AI-powered art generation platform that creates unique scannable QR Code artwork.',
    tech: ['Python', 'TensorFlow', 'Stable Diffusion', 'ComfyUI'],
    featured: true,
  },
  {
    title: 'Capital Group - vRA',
    subtitle: 'vRA Cloud too On-Prem Migration',
    images: [
      '/images/projects/vRA_Cloud-to-On-Prem_01.webp',
      '/images/projects/vRA_Cloud-to-On-Prem_02.webp'
    ],
    date: '2025-10-15',
    desc: 'Migrated vRA Cloud workloads to on-premises infrastructure, ensuring seamless transition and minimal downtime. Then upgraded to the latest vRA / vRO versions.',
    tech: ['VMware vRA', 'VMware vRO', 'vSphere', 'PowerCLI'],
    featured: true,
  },
    {
    title: 'Capital Group - Dell BIOS & OME',
    subtitle: 'Upgrade Dell BIOS and OME servers to latest versions',
    images: [
      '/images/projects/Dell_BIOS_Upgrade.webp',
      '/images/projects/Dell_OME_Update.webp'
    ],
    date: '2024-10-15',
    desc: 'Upgraded the BIOS of 1300+ Dell Servers and their related OME servers to the latest versions, ensuring improved system stability, security, and performance.',
    tech: ['Dell OME', 'BIOS Upgrades', 'Firmware Upgrades', 'PowerCLI'],
    featured: true,
  },
  {
    title: 'Capital Group - Image Management',
    subtitle: 'Image Mangement and Deployment for Windows and Linux images.',
    images: [
      '/images/projects/Image_Creation_Process.webp',
    ],
    date: '2026-10-15',
    desc: 'Managed the deployment of Windows and Linux images for Capital Group, ensuring consistent and efficient system setups across the organization.',
    tech: ['Ansible', 'CI/CD', 'IaC', '.hcl', 'Packer', 'Terraform', 'Group Policy', 'Tanium'],
    featured: true,
  },
  {
    title: 'UTIMCO - Intune Vulnerability Remediation',
    subtitle: 'Deployed AD CS ESC1 & ESC8 Remediation',
    images: [
      '/images/projects/InTune - How-To_ AD CS ESC1 & ESC8 Remediation_v0.9.png',
    ],
    date: '2024-10-15',
    desc: 'Managed the process documentation and deployment of AD CS ESC1 & ESC8 Remediation for UTIMCO, ensuring enhanced security and compliance across the organization.',
    tech: ['InTune', 'Active Directory', 'Active Directory Certificate Services', 'Group Policy', 'PowerShell'],
    featured: true,
  },
  {
    title: 'Capital Group - PURE & VMMware Replicated Datastores',
    subtitle: 'Creating and managing PURE and VMware replicated datastores for high availability and disaster recovery.',
    images: [
      '/images/projects/PURE_VMware_How-to-create-replicated-datastores.webp',
    ],
    date: '2024-10-15',
    desc: 'Managed the process documentation and configuration of PURE and VMware replicated datastores for high availability and disaster recovery.',
    tech: ['PURE', 'VMware', 'vSphere', 'vSAN', 'Disaster Recovery', 'High Availability'],
    featured: true,
  },
];

export default data;