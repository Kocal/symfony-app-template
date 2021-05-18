/* eslint-disable global-require */

module.exports = {
  mode: 'jit',
  purge: ['./templates/**/*.html.twig', './assets/**/*.{vue,js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
