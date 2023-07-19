const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://us-central1-abcbrianlee1.cloudfunctions.net/sendEmail',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        onProxyRes(proxyRes) {
          proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        }
      }
    }
  }
});
