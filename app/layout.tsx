import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import { SiteSchema } from '@/components/Schema';
import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import ScrollToTop from '@/components/Template/ScrollToTop';
import ThemeInit from '@/components/Template/ThemeInit';
import {
  AUTHOR_NAME,
  SITE_DESCRIPTION,
  SITE_IMAGE_DIMENSIONS,
  SITE_IMAGE_PATH,
  SITE_URL,
  TWITTER_HANDLE,
} from '@/lib/utils';
import './tailwind.css';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const raleway = Raleway({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: AUTHOR_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    AUTHOR_NAME,
    'Trace3',
    'agent security',
    'LLM security',
    'machine learning',
    'startup founder',
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: AUTHOR_NAME,
    title: AUTHOR_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_IMAGE_PATH,
        width: SITE_IMAGE_DIMENSIONS.width,
        height: SITE_IMAGE_DIMENSIONS.height,
        alt: AUTHOR_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: AUTHOR_NAME,
    description: SITE_DESCRIPTION,
    images: [SITE_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* REMOVE the old theme script */}
        <SiteSchema />
      </head>

      <body>
        <ThemeInit />   {/* ← hydration-safe theme initialization */}
        <ScrollToTop />
        <div className="site-wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
