import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={200} height={200} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Ryan Smith</span>
        </h1>

        <p className="hero-tagline">
          Senior Infrastructure Engineer at{' '}
          <a href="https://Trace3.com" className="hero-highlight">
            Trace3
          </a>
          , where I work on{' '}
          <a href="https://capitalgroup.com" className="hero-highlight">
            Capital Groups {' '}
          </a>
           Infrastructure, OS Hardening and Security Compliance.
          <br />
          Previously co-founded and scaled {' '}
          <a href="https://TheQRTist.com" className="hero-highlight">
            TheQRTist
          </a>
          .
        </p>

        <div className="hero-chips">
          <span className="hero-chip">26 Years IT Experience</span>
          <span className="hero-chip">GitLab CI/CD Certified Associate</span>
          <span className="hero-chip">Co-founded TheQRTist.com</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
          <Link href="/projects" className="button button-secondary">
            Projects
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
