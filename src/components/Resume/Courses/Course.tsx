import { courses } from '@/data/resume/courses';

type Course = (typeof courses)[number];

interface CourseProps {
  data: Course;
}

export default function Course({ data }: CourseProps) {
  return (
    <li className="course-container">
      <a href={data.link}>
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
