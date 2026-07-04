import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          '0%':   { boxShadow: '0 0 0px rgba(0, 150, 255, 0.0)' },
          '50%':  { boxShadow: '0 0 18px rgba(0, 150, 255, 0.45)' },
          '100%': { boxShadow: '0 0 0px rgba(0, 150, 255, 0.0)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
