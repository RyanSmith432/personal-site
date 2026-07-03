import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent("Ryan Smith");
  });

  it('renders the tagline with Trace3 and TheQRTist links', () => {
    render(<Hero />);

    const openAiLink = screen.getByRole('link', { name: /trace3/i });
    expect(openAiLink).toHaveAttribute('href', 'https://Trace3.com');
    expect(openAiLink).toHaveClass('hero-highlight');

    const promptfooLink = screen.getByRole('link', { name: /theqrtist/i });
    expect(promptfooLink).toHaveAttribute('href', 'https://TheQRTist.com');
    expect(promptfooLink).toHaveClass('hero-highlight');
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);

    expect(screen.getByText('26 Years IT Experience')).toBeInTheDocument();
    expect(screen.getByText('GitLab CI/CD Certified Associate')).toBeInTheDocument();
    expect(
      screen.getByText('Co-founded TheQRTist.com'),
    ).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('button-secondary');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
