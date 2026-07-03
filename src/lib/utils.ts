/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://ryan-smith.org';
export const AUTHOR_NAME = "Ryan Smith";
export const TWITTER_HANDLE = '';
export const SITE_IMAGE_PATH = '/images/me.png';
export const SITE_IMAGE_DIMENSIONS = {
  width: 250,
  height: 250,
} as const;

// Canonical one-line bio, shared across page metadata, OpenGraph, and JSON-LD.
export const SITE_DESCRIPTION =
  'Senior Information Security Engineer. Passionate about building secure and innovative solutions.';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 200,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
