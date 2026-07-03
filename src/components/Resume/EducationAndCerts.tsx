import type { EducationItem } from '@/data/resume/education';
import EducationAndCertCard from './EducationAndCertCard';

interface Props {
  data: EducationItem[];
}

export default function EducationAndCerts({ data }: Props) {
  return (
    <div className="education">
      <div className="title">
        <h3>Education & Certifications</h3>
      </div>

      <ul className="education-list">
        {data.map((item) => (
          <EducationAndCertCard key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}
