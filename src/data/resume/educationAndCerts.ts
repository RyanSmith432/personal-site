import type { EducationItem } from './education';
import { degrees } from './degrees';
import { courses } from './courses';

// Assume both degrees and courses are already in EducationItem shape
// or at least compatible with it.

const degreeItems: EducationItem[] = degrees;
const courseItems: EducationItem[] = courses;

export const educationAndCerts: EducationItem[] = [
  ...degreeItems,
  ...courseItems,
];
