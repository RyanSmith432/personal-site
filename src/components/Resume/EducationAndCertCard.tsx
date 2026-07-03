import type { EducationItem } from '@/data/resume/education';

interface Props {
  item: EducationItem;
}

export default function EducationAndCertCard({ item }: Props) {
  return (
    <li className="education-card">
      <a href={item.link}>
        <p className="education-title">{item.title}</p>
        <p className="education-subtitle">{item.subtitle}</p>

        {item.year && (
          <p className="education-year">{item.year}</p>
        )}

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="education-image mx-auto"
          />
        )}
      </a>
    </li>
  );
}
