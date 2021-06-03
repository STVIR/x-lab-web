'use strict'
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

// All configuration item explanations can be find in https://cli.vuejs.org/config/

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  filenameHashing: false,
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './config'),
            to: path.resolve(__dirname, './dist/config')
          },
          {
            from: path.resolve(__dirname, './src/assets/images'),
            to: path.resolve(__dirname, './dist/config')
          },
        ]
      })
    ]
  }
}
