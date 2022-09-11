module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // 打包生成文件名
    outputDir: process.env.VUE_APP_OUTPUT_DIR || 'dist',
    // 生产打包不要 Source Maps
    productionSourceMap: false,
}