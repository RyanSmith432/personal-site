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
    position: 'Senior Infrastructure Engineer',
    url: 'https://trace3.com',
    startDate: '2026-01-01',
    summary: `OS hardening and security compliance for enterprise Windows and Linux environments. Currently working on OS build automation and security hardening.`,
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
];

export default work;