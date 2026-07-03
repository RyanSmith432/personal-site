'use client';

import Markdown from 'markdown-to-jsx';
import { createUniqueHeadingIds } from '@/lib/anchors';
import YouTubeThumb from '@/components/Template/YouTubeThumb';
import { useEffect, useRef } from 'react';

interface AboutContentProps {
  markdown: string;
}

interface AboutSection {
  body: string;
  id: string;
  title: string;
}

interface ParsedAboutSection {
  body: string;
  title: string;
}

const sectionVariants: Record<string, string> = {
  'Fun Facts': 'about-section--compact',
  'I Like': 'about-section--compact',
  'I Dream Of': 'about-section--compact',
  'Websites from People I Admire': 'about-section--links',
};

function splitAboutMarkdown(markdown: string) {
  const trimmed = markdown.trim();
  const introHeading = '# Intro';

  if (!trimmed.startsWith(introHeading)) {
    return {
      intro: '',
      sections: parseSections(trimmed),
    };
  }

  const withoutIntroHeading = trimmed.slice(introHeading.length).trimStart();
  const nextHeadingIndex = withoutIntroHeading.search(/\n# /);

  if (nextHeadingIndex === -1) {
    return {
      intro: withoutIntroHeading.trim(),
      sections: [] as AboutSection[],
    };
  }

  return {
    intro: withoutIntroHeading.slice(0, nextHeadingIndex).trim(),
    sections: parseSections(
      withoutIntroHeading.slice(nextHeadingIndex + 1).trim(),
    ),
  };
}

function parseSections(markdown: string): AboutSection[] {
  const sections: ParsedAboutSection[] = markdown
    .split(/\n(?=# )/)
    .map((section) => section.trim())
    .filter((section) => section !== '')
    .map((section) => {
      const [heading, ...rest] = section.split('\n');

      return {
        title: heading.replace(/^#\s+/, '').trim(),
        body: rest.join('\n').trim(),
      };
    });

  const sectionIds = createUniqueHeadingIds(
    sections.map((section) => section.title),
  );

  return sections.map((section, index) => ({
    ...section,
    id: sectionIds[index] ?? 'section',
  }));
}

function getSectionClassName(title: string) {
  const variant = sectionVariants[title];
  return variant ? `about-section ${variant}` : 'about-section';
}

/* Scroll reveal hook */
function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = Array.from(
      containerRef.current.querySelectorAll('.reveal'),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

/* Custom renderer for "I Like" — YouTubeThumb support */
function renderSectionBody(section: AboutSection) {
  if (section.title !== 'I Like') {
    return <Markdown>{section.body}</Markdown>;
  }

  const lines = section.body.split('\n').map((line) => line.trim());

  const youtubeItems: { title: string; id: string }[] = [];
  const normalItems: string[] = [];

  for (const line of lines) {
    if (!line.startsWith('- ')) continue;

    const content = line.slice(2).trim();

    const linkStart = content.indexOf('[');
    const linkEnd = content.indexOf(']');
    const parenStart = content.indexOf('(');
    const parenEnd = content.lastIndexOf(')');

    if (
      linkStart !== -1 &&
      linkEnd !== -1 &&
      parenStart !== -1 &&
      parenEnd !== -1 &&
      parenStart > linkEnd
    ) {
      const title = content.slice(linkStart + 1, linkEnd).trim();
      let url = content.slice(parenStart + 1, parenEnd).trim();

      url = url.replace(/&#41;/g, ')');
      url = url.replace(/[.)]+$/g, '');

      if (url.includes('youtube.com/watch?v=')) {
        try {
          const parsed = new URL(url);
          const id = parsed.searchParams.get('v');

          if (id) {
            youtubeItems.push({ title, id });
            continue;
          }
        } catch {
          // fall through to normalItems
        }
      }

      normalItems.push(content);
    } else {
      normalItems.push(content);
    }
  }

  const revealRef = useScrollReveal();

  return (
    <>
      {youtubeItems.length > 0 && (
        <div
          ref={revealRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4"
        >
          {youtubeItems.map((item) => (
            <div key={item.id} className="reveal w-80 mx-auto">
              <YouTubeThumb id={item.id} title={item.title} />
            </div>
          ))}
        </div>
      )}

      {normalItems.length > 0 && (
        <ul className="mt-6">
          {normalItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

/* Main component */
export default function AboutContent({ markdown }: AboutContentProps) {
  const { intro, sections } = splitAboutMarkdown(markdown);

  return (
    <article className="about-content">
      {intro ? (
        <div className="about-intro">
          <Markdown>{intro}</Markdown>
        </div>
      ) : null}

      {sections.length > 0 ? (
        <nav className="about-section-nav" aria-label="About sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="about-section-nav-link"
            >
              {section.title}
            </a>
          ))}
        </nav>
      ) : null}

      {sections.map((section) => (
        <section
          key={section.id}
          className={getSectionClassName(section.title)}
        >
          <h2 id={section.id}>
            <a href={`#${section.id}`} className="about-section-heading-link">
              <span>{section.title}</span>
              <span className="about-section-heading-hash" aria-hidden="true">
                #
              </span>
            </a>
          </h2>

          {renderSectionBody(section)}
        </section>
      ))}
    </article>
  );
}
