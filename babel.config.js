module.exports = {
  presets: [
    [
      '@vue/app',
      { // 旧ie浏览器兼容
        targets: {
          browsers: ['ie >= 7', 'safari >= 7']
        },
        useBuiltIns: 'entry',
        // 三种兼容方法一种是入口声明entry 一种是 useBuiltIns: 'usage' 会自动 获取入口entry webpack 配置 其他都需要安装babel
        // babel新版本废弃 @babel/polyfill
        // import "core-js";
        // import "regenerator-runtime/runtime";
        polyfills: ['es6.promise', 'es6.symbol']
      }
    ],
    '@vue/babel-preset-jsx',
  ],
  plugins: [
    '@babel/plugin-syntax-jsx',
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}