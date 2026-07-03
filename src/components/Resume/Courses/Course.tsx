import type { Course as CourseType } from '@/data/resume/courses';

interface CourseProps {
  data: CourseType;
}

export default function Course({ data }: CourseProps) {
  return (
    <li className="course-container">
      <a href={data.link}>
        <h4 className="course-number">{data.number}:</h4>
        <p className="course-name">{data.title}</p>

        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="course-image mx-auto"
          />
        )}
      </a>
    </li>
  );
}
