interface DegreeProps {
  data: any;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{data.degree}</h4>
        <p className="school">
          <a href={data.link}>{data.school}</a>,{' '}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
    </article>
  );
}
