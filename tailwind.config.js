const colors = require('tailwindcss/colors')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  experimental: {
    applyComplexClasses: true
  },
  theme: {
    fontFamily: {
      sans: ['SFProRounded', 'sans-serif']
    },
    extend: {
      colors: {
        gray: colors.trueGray
      },
      screens: {
        xs: '375px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
