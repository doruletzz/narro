/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design tokens from Figma
        primary: {
          DEFAULT: '#2200d8',
          light: '#4433e8',
          dark: '#110088',
        },
        accent: {
          DEFAULT: '#ff99d8',
          light: '#ffbbee',
          dark: '#ee66bb',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        // Cream background from Figma
        cream: {
          DEFAULT: '#f5f0eb',
          light: '#faf7f4',
        },
      },
      fontFamily: {
        heading: ['Bristol', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
