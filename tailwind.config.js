/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,}', './app/**/*.{js,jsx}'],
  theme: {
    extend: {
      transitionDuration: {
        250: '250ms',
      },
    },
    screens: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        tablet: '32px',
        desktop: '104px',
      },
    },
  },
  plugins: [],
};
