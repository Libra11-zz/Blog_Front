const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // eslint 错误在开发时直接显示在浏览器中 如果设置为 true 将只显示在控制台中
  lintOnSave: "error",
  // runtimeCompiler: "true",
  chainWebpack: config => {
    config.module
      .rule('less')
      .test(/\.less$/)
      .use('style-loader', 'css-loader', 'less-loader')
      .loader('style-loader', 'css-loader', 'less-loader')
      .end()
    // 配置目录别名
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .set('utils', resolve('src/assets/utils'))
      .set('common', resolve('src/assets/common'))
      .set('router', resolve('src/assets/router'))
  }
}
