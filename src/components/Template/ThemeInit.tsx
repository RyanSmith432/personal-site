'use client';

import { useEffect } from 'react';

export default function ThemeInit() {
  useEffect(() => {
    try {
      const t = window.localStorage.getItem('theme');

      if (t === 'dark' || t === 'light') {
        document.documentElement.setAttribute('data-theme', t);
      } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch {}
  }, []);

  return null;
}
