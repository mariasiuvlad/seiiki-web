const plugins = [
  'tailwindcss',
  [
    'postcss-preset-env',
    {
      stage: 1,
      features: {
        'focus-within-pseudo-class': false
      }
    }
  ]
]

const storybookPlugins = [require('tailwindcss'), require('postcss-preset-env')]

module.exports = {
  plugins: process.env.IS_STORYBOOK ? storybookPlugins : plugins
}
