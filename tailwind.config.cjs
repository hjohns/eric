const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // PNG-inspired palette: gold (light), red (default), deep maroon (dark)
          light: '#F4C430',
          DEFAULT: '#CE1126',
          dark: '#7F1D1D',
        },
      },
    },
  },
  plugins: [typography],
};
