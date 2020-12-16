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
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
