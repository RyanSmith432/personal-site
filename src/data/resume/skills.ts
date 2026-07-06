export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // -----------------------------
  // Existing Skills
  // -----------------------------
  { title: 'Python', competency: 3, category: ['Languages', 'ML Engineering'] },
  { title: 'SQL', competency: 2, category: ['Languages', 'Databases'] },
  { title: 'PowerCLI', competency: 3, category: ['Languages', 'ML Engineering'] },

  // AI & LLM
  { title: 'AI Agents', competency: 3, category: ['ML Engineering'] },
  { title: 'LLM Evaluation', competency: 3, category: ['ML Engineering'] },
  { title: 'AI Red-teaming', competency: 2, category: ['ML Engineering'] },
  { title: 'LLM APIs', competency: 3, category: ['ML Engineering'] },
  { title: 'RAG', competency: 3, category: ['ML Engineering'] },
  { title: 'Prompt Engineering', competency: 4, category: ['ML Engineering'] },
  { title: 'Vector Databases', competency: 3, category: ['ML Engineering', 'Databases'] },
  { title: 'PyTorch', competency: 4, category: ['ML Engineering'] },
  { title: 'Pandas', competency: 5, category: ['ML Engineering', 'Data Engineering'] },

  // Web Development
  { title: 'FastAPI', competency: 2, category: ['Web Development'] },
  { title: 'Next.js', competency: 2, category: ['Web Development'] },
  { title: 'GitHub', competency: 3, category: ['Web Development', 'ML Engineering'] },

  // Databases
  { title: 'PostgreSQL', competency: 2, category: ['Databases'] },
  { title: 'SQL', competency: 2, category: ['Databases'] },

  // Infrastructure
  { title: 'AWS', competency: 2, category: ['Infrastructure'] },
  { title: 'Azure', competency: 2, category: ['Infrastructure'] },
  { title: 'Docker', competency: 4, category: ['Infrastructure'] },
  { title: 'Kubernetes', competency: 2, category: ['Infrastructure'] },
  { title: 'Observability', competency: 4, category: ['Infrastructure', 'ML Engineering'] },

  // -----------------------------
  // NEW SKILLS FROM PROJECTS.TS
  // -----------------------------

  // VMware / Virtualization
  { title: 'VMware ESXi', competency: 5, category: ['Infrastructure', 'Virtualization'] },
  { title: 'vSphere', competency: 5, category: ['Infrastructure', 'Virtualization'] },
  { title: 'VMware vRA', competency: 3, category: ['Infrastructure', 'Automation'] },
  { title: 'VMware vRO', competency: 3, category: ['Infrastructure', 'Automation'] },
  { title: 'VMware vSAN', competency: 5, category: ['Infrastructure', 'Storage'] },
  { title: 'VMware', competency: 5, category: ['Infrastructure', 'Virtualization'] },

  // AI / ML / GPU
  { title: 'TensorFlow', competency: 3, category: ['ML Engineering'] },
  { title: 'Stable Diffusion', competency: 4, category: ['ML Engineering'] },
  { title: 'ComfyUI', competency: 3, category: ['ML Engineering'] },
  { title: 'Nvidia GPU', competency: 4, category: ['ML Engineering', 'Infrastructure'] },
  { title: 'Hugging Face', competency: 4, category: ['ML Engineering'] },

  // Containers / DevOps
  { title: 'Docker Containers', competency: 3, category: ['Infrastructure', 'DevOps'] },
  { title: 'CI/CD', competency: 4, category: ['DevOps'] },
  { title: 'IaC', competency: 2, category: ['DevOps', 'Infrastructure'] },
  { title: 'Packer', competency: 3, category: ['DevOps', 'Infrastructure'] },
  { title: 'Terraform', competency: 2, category: ['DevOps', 'Infrastructure'] },
  { title: '.hcl', competency: 3, category: ['DevOps'] },

  // Enterprise Tools
  { title: 'Confluence', competency: 5, category: ['Enterprise Tools'] },
  { title: 'ServiceNow CMDB', competency: 3, category: ['Enterprise Tools'] },
  { title: 'Nexus Repositories', competency: 4, category: ['Enterprise Tools'] },

  // Windows / Identity / Security
  { title: 'Group Policy', competency: 5, category: ['Infrastructure', 'Security'] },
  { title: 'Tanium', competency: 4, category: ['Security', 'Infrastructure'] },
  { title: 'InTune', competency: 3, category: ['Infrastructure', 'Security'] },
  { title: 'Active Directory', competency: 5, category: ['Infrastructure', 'Security'] },
  { title: 'Active Directory Certificate Services', competency: 4, category: ['Infrastructure', 'Security'] },
  { title: 'PowerShell', competency: 4, category: ['Languages', 'Infrastructure'] },

  // Storage Platforms
  { title: 'PURE Storage', competency: 4, category: ['Storage', 'Infrastructure'] },
  { title: 'NetApp ONTAP', competency: 4, category: ['Storage', 'Infrastructure'] },
  { title: 'NetApp BlueXP', competency: 5, category: ['Storage', 'Security'] },

  // Security / LDAP / DR
  { title: 'LDAPS', competency: 4, category: ['Security'] },
  { title: 'Security', competency: 4, category: ['Security'] },
  { title: 'Disaster Recovery', competency: 4, category: ['Infrastructure'] },
  { title: 'High Availability', competency: 4, category: ['Infrastructure'] },

  // Dell / Hardware
  { title: 'Dell OME', competency: 5, category: ['Infrastructure', 'Hardware'] },
  { title: 'Dell BIOS Upgrades', competency: 5, category: ['Infrastructure', 'Hardware'] },
  { title: 'Dell Firmware Upgrades', competency: 5, category: ['Infrastructure', 'Hardware'] },

  // Cisco UCS / Hardware
  { title: 'Cisco UCS Manager', competency: 5, category: ['Infrastructure', 'Hardware'] },
  { title: 'UCS BIOS Upgrades', competency: 5, category: ['Infrastructure', 'Hardware'] },
  { title: 'UCS Firmware Upgrades', competency: 5, category: ['Infrastructure', 'Hardware'] },

  // -----------------------------
  // NEW SKILLS YOU JUST ADDED
  // -----------------------------

  // IDE / Development Tools
  { title: 'Visual Studio Code', competency: 3, category: ['Web Development', 'Enterprise Tools'] },

  // AI Coding Tools
  { title: 'GitHub Copilot', competency: 3, category: ['ML Engineering', 'Web Development'] },
  { title: 'Claude Code', competency: 3, category: ['ML Engineering', 'Web Development'] },
  { title: 'Claude Co-work', competency: 2, category: ['ML Engineering', 'Automation'] },

  // Agentic AI
  { title: 'Agent Skills', competency: 2, category: ['ML Engineering', 'Automation'] },
  { title: 'Agentic AI', competency: 2, category: ['ML Engineering', 'Automation'] },

  // Local LLM Ecosystem
  { title: 'Ollama', competency: 4, category: ['ML Engineering', 'Infrastructure'] },
  { title: 'Local LLMs', competency: 4, category: ['ML Engineering', 'Infrastructure'] },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
