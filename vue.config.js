// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/Kruiztwntyfive/indecisionApp/',
//   outputDir: 'dist'
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/indecisionApp/'
    : '/'
}
