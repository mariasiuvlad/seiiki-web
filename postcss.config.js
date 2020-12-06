const plugins = ['tailwindcss', 'postcss-preset-env']

module.exports = {
  plugins: process.env.IS_STORYBOOK ? plugins.map((p) => require(p)) : plugins
}
