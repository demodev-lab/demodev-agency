import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: 'rgba(80,70,228,0.1)',
          100: 'rgba(80,70,228,0.2)',
          200: 'rgba(80,70,228,0.3)',
          300: 'rgba(80,70,228,0.4)',
          400: 'rgba(80,70,228,0.5)',
          500: 'rgba(80,70,228,0.6)',
          600: 'rgba(80,70,228,0.7)',
          700: 'rgba(80,70,228,0.8)',
          800: 'rgba(80,70,228,0.9)',
          900: 'rgba(80,70,228,1)',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      spacing: {
        container: '1120px',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
