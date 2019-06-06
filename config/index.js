'use strict'
export default  {
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  proxyTable: {
    '/api': {
      target: 'http://192.168.xxx.xxx:xxxx', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  // Various Dev Server settings
  host: '192.168.0.102', // can be overwritten by process.env.HOST
  port: 80, // 服务端口
};
