'use client';

import ProjectCard from '@/components/Projects/ProjectCard';
import type { Project } from '@/data/projects';

interface ProjectsGridProps {
  featuredProjects: Project[];
  otherProjects: Project[];
}

export default function ProjectsGrid({
  featuredProjects,
  otherProjects,
}: ProjectsGridProps) {
  return (
    <>
      {featuredProjects.length > 0 && (
        <section className="projects-featured">
          <h2 className="projects-section-title">Projects &amp; Documentation</h2>

          <div className="projects-grid projects-grid--featured">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="projects-other">
          <h2 className="projects-section-title">Side Projects</h2>

          <div className="projects-grid">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
