const path = require('path')
const AppSourceDir = path.join(__dirname, '..', 'src')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    config.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.css$/

    /**
     * Configure CSS modules
     * @link https://webpack.js.org/loaders/css-loader/#pure-css-css-modules-and-postcss
     */
    config.module.rules.push({
      test: /\.css$/,
      include: AppSourceDir,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {modules: {auto: true}, importLoaders: 1}
        },
        'postcss-loader'
      ]
    })

    /**
     * Configure tsconfig paths
     */
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json'
      })
    ]

    return config
  }
}
