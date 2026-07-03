import type { Metadata } from 'next';

import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';

import EducationAndCerts from '@/components/Resume/EducationAndCerts';
import { educationAndCerts } from '@/data/resume/educationAndCerts';

import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description: "Ryan Smith's Resume.",
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Engineering & IT Operations leader with....
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <EducationAndCerts data={educationAndCerts} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
