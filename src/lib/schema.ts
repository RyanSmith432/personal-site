import contact from '@/data/contact';

// FIX THIS LINE BASED ON YOUR ACTUAL FILE NAME:
import { educationAndCerts } from '@/data/resume/educationAndCerts';  

import work from '@/data/resume/work';
import type { Post } from '@/lib/posts';
import {
  AUTHOR_NAME,
  SITE_DESCRIPTION,
  SITE_IMAGE_DIMENSIONS,
  SITE_IMAGE_PATH,
  SITE_URL,
} from '@/lib/utils';

export { SITE_URL } from '@/lib/utils';

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const BLOG_ID = `${SITE_URL}/writing/#blog`;

export const SITE_LANGUAGE = 'en-US';
export const SITE_IMAGE = `${SITE_URL}${SITE_IMAGE_PATH}`;
export const HOME_URL = `${SITE_URL}/`;

export const WRITING_DESCRIPTION =
  'Articles on AI security, LLM red teaming, and trust & safety.';

type SchemaNode = Record<string, unknown>;

interface Crumb {
  name: string;
  url: string;
}

export const personRef = () => ({ '@id': PERSON_ID });
export const websiteRef = () => ({ '@id': WEBSITE_ID });
export const blogRef = () => ({ '@id': BLOG_ID });

export function personNode(): SchemaNode {
  const socialLinks = contact
    .filter((item) => !item.link.startsWith('mailto:'))
    .map((item) => item.link);

  const emailItem = contact.find((item) => item.link.startsWith('mailto:'));
  const email = emailItem?.link.replace('mailto:', '');

  const currentJob = work[0];

  const [givenName, ...familyParts] = AUTHOR_NAME.split(' ');
  const familyName = familyParts.join(' ');

  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: AUTHOR_NAME,
    givenName,
    familyName,
    url: HOME_URL,
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#person-image`,
      url: SITE_IMAGE,
      width: SITE_IMAGE_DIMENSIONS.width,
      height: SITE_IMAGE_DIMENSIONS.height,
      caption: AUTHOR_NAME,
    },
    description: SITE_DESCRIPTION,
    jobTitle: currentJob.position,
    ...(email && { email }),
    sameAs: socialLinks,
    worksFor: {
      '@type': 'Organization',
      name: currentJob.name,
      url: currentJob.url,
    },

    alumniOf: educationAndCerts
      .filter((item) => item.year)
      .map((degree) => ({
        '@type': 'CollegeOrUniversity',
        name: degree.subtitle,
        url: degree.link,
      })),
  };
}

export function websiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: HOME_URL,
    name: AUTHOR_NAME,
    alternateName: ['mldangelo.com', 'mldangelo'],
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    publisher: personRef(),
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#website-image`,
      url: SITE_IMAGE,
      width: SITE_IMAGE_DIMENSIONS.width,
      height: SITE_IMAGE_DIMENSIONS.height,
      caption: AUTHOR_NAME,
    },
  };
}

export function breadcrumbNode(pageUrl: string, crumbs: Crumb[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

interface PageNodeOptions {
  url: string;
  name: string;
  description?: string;
  hasBreadcrumb?: boolean;
}

function baseWebPage(
  type: string,
  { url, name, description, hasBreadcrumb }: PageNodeOptions,
): SchemaNode {
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    isPartOf: websiteRef(),
    inLanguage: SITE_LANGUAGE,
    ...(description ? { description } : {}),
    ...(hasBreadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  };
}

export function profilePageNode(options: PageNodeOptions): SchemaNode {
  return {
    ...baseWebPage('ProfilePage', options),
    mainEntity: personRef(),
  };
}

export function collectionPageNode(options: PageNodeOptions): SchemaNode {
  return {
    ...baseWebPage('CollectionPage', options),
    about: personRef(),
  };
}

export function webPageNode(options: PageNodeOptions): SchemaNode {
  return baseWebPage('WebPage', options);
}

export function blogNode(dateModified?: string): SchemaNode {
  return {
    '@type': 'Blog',
    '@id': BLOG_ID,
    isPartOf: websiteRef(),
    mainEntityOfPage: { '@id': `${SITE_URL}/writing/#webpage` },
    name: `${AUTHOR_NAME}'s Writing`,
    description: WRITING_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    ...(dateModified ? { dateModified } : {}),
    publisher: personRef(),
  };
}

export function blogPostingNode(post: Post): SchemaNode {
  const url = `${SITE_URL}/writing/${post.slug}/`;

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    isPartOf: blogRef(),
    headline: post.title,
    description: post.description,
    inLanguage: SITE_LANGUAGE,
    datePublished: post.date,
    dateModified: post.date,
    author: personRef(),
    publisher: personRef(),
    image: {
      '@type': 'ImageObject',
      '@id': `${url}#blogposting-image`,
      url: SITE_IMAGE,
      width: SITE_IMAGE_DIMENSIONS.width,
      height: SITE_IMAGE_DIMENSIONS.height,
    },
  };
}

export function buildGraph(nodes: SchemaNode[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
