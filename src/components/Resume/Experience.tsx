import type { Position } from '@/data/resume/work';

import Job from './Experience/Job';
import Link from 'next/dist/client/link';

interface ExperienceProps {
  data: Position[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h3>Experience</h3>
      </div>
        <div className="resume-cta">
          <Link href="/Ryan Smith Resume - 2026.pdf" className="button button-secondary">
            Download Resume (PDF)
          </Link>
        </div>
        <br></br>
      {data.map((job) => (
        <Job data={job} key={`${job.name}-${job.position}`} />
      ))}
    </div>
  );
}
