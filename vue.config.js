module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: process.env.VUE_APP_OUTPUT_DIR || 'dist',
}