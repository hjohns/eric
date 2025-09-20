const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f1f5f9',
          DEFAULT: '#1d4ed8',
          dark: '#1e3a8a',
        },
      },
    },
  },
  plugins: [typography],
};
