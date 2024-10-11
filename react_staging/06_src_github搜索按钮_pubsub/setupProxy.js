const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    // 遇见/api前缀的请求，就会触发给代理配置
    createProxyMiddleware('/api', {
      // 请求转发给谁
      target: 'http://localhost:5000',
      // 控制服务器收到的请求头中Host字段的值
      changeOrigin: true,
      // 重写请求路径
      pathRewrite: { '^/api': ''}
    })
  )
}
