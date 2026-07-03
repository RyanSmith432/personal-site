export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Boise State University',
    degree: 'Computer Information Systems',
    link: 'https://boisestate.edu',
    year: '2000 - 2001 (no degree)',
  },
];

export default degrees;