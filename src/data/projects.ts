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
    title: 'Capital Group ESXi',
    subtitle: 'ESXi v7 to v8 Upgrade',
    images: [
      '/images/projects/VMware_ESXi_v7_v8.webp'
    ],
    date: '2024-10-15',
    desc: 'Upgraded ESXi hosts from v7 to v8, ensuring compatibility with the latest features and security updates.',
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
    title: 'Capital Group vRA',
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
];

export default data;