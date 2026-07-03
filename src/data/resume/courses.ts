export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
  image: string;
}

const courses: Course[] = [
  {
    title: 'GitLab CI/CD Certified Associate',
    number: 'GitLab CI/CD',
    link: 'https://www.credly.com/go/5twR7wZy',
    university: 'GitLab',
    image: '/images/courses/gitlabcertified.webp',
  },
    {
    title: 'Microsoft Certified Professional',
    number: '2AEH60-8F4C13',
    link: '/MCP_Cert.pdf',
    university: 'Microsoft',
    image: '/images/courses/mcp.webp',
  },
];

export default courses;
