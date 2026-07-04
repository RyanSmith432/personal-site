import type { Metadata } from 'next';

import ProjectsGrid from '@/components/Projects/ProjectsGrid';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

const PROJECTS_URL = `${SITE_URL}/projects/`;

const PROJECTS_DESCRIPTION =
  'Early projects and experiments from Ryan Smith (2015 and earlier).';

export const metadata: Metadata = createPageMetadata({
  title: 'Archive',
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PROJECTS_URL,
            name: 'Archive',
            description: PROJECTS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PROJECTS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Archive', url: PROJECTS_URL },
          ]),
        ]}
      />

      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Archive</h1>
          <p className="page-subtitle">Early projects and experiments</p>
        </header>

        <ProjectsGrid
          featuredProjects={featuredProjects}
          otherProjects={otherProjects}
        />
      </section>
    </PageWrapper>
  );
}
