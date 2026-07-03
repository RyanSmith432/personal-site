export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Capital Group',
    subtitle: 'ESXi v7 to v8 Upgrade',
    image: '/images/projects/nearestdollar.jpg',
    date: '2024-10-15',
    desc: 'Upgraded ESXi hosts from v7 to v8, ensuring compatibility with the latest features and security updates.',
    tech: ['VMware ESXi', 'vSphere', 'PowerCLI'],
    featured: true,
  },
  {
    title: 'The QRTist',
    subtitle: 'AI-powered Art Generation',
    link: 'https://TheQRTist.com',
    image: '/images/projects/theqrtist.jpg',
    date: '2023-05-10',
    desc: 'Developed an AI-powered art generation platform that creates unique scannable QR Code artwork.',
    tech: ['Python', 'TensorFlow', 'Stable Diffusion', 'ComfyUI'],
    featured: true,
  },
];

export default data;