export interface EducationItem {
  title: string;       // degree name OR course title
  subtitle: string;    // school OR university
  link: string;
  year?: string;       // only degrees use this
  image?: string;      // only courses use this
}
