const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = (process.env.NODE_ENV === 'development')

module.exports = {
  productionSourceMap: isDev,
  configureWebpack: config => {
    config.devtool = isDev ? 'source-map' : false
    if (!isDev) {
      config.externals = {
        'vue': 'Vue',
        'axios': 'axios'
      }
    }

    // alias for icons.
    const alias = (config.resolve.alias || {})
    alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, "./src/plugins/icons.js")
    config.resolve.alias = alias

    if (process.env.ANALYZE_BUILD) {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  }
}
