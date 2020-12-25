const colors = require('tailwindcss/colors')

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
        gray: colors.trueGray,
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
