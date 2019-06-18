const path = require('path')

module.exports = {
  publicPath: '/vue-compiler-online/',
  outputDir: path.relative(__dirname, 'docs'),
  lintOnSave: false
}
