'use strict'
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/x-lab-web/',
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  filenameHashing: false,
  outputDir: 'docs',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          // {
          //   from: path.resolve(__dirname, './config'),
          //   to: path.resolve(__dirname, './docs/config')
          // },
          {
            from: path.resolve(__dirname, './static'),
            to: path.resolve(__dirname, './docs/static')
          },
          {
            from: path.resolve(__dirname, './config'),
            to: path.resolve(__dirname, './docs/config')
          }
        ]
      })
    ]
  }
}
