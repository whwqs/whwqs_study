const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 6500
const name = "test"

module.exports = {

  publicPath: '/',
  outputDir: 'public',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {

    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}