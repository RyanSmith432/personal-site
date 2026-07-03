import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/ryansmith432',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/RyanSmith432',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:crsmith026@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
