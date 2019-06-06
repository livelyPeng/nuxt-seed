import pkg from './package'
import config from './config'
import storeModule from './common/storeModule'

// 配置表
export default {
  mode: 'universal',
  server: {
    host: config.host, // default: localhost
    port: config.port // 服务端口
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'themes/publicStyle/default'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [...[
    {src: '~/plugins/element-ui', ssr: true},
    { src: '~/plugins/http-index', ssr: true }, // 请求拦截
    {src: '~/common/server/index', ssr: true}, // 请求方法列表
    { src: '~/plugins/permission', ssr: false } // 权限拦截
  ], ...storeModule],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: config.axios,
  proxy: config.proxyTable,
  /*
  ** Build configuration
  */
  build: {
    extractCSS:true, // 使用Vue 服务器端渲染指南启用常见CSS提取。减少打包体积
    vendor: ['axios'],
    transpile: [/^element-ui/],
    loader:[{
      test:/\.less$/,
      loader:'style-loader!css-loader!less-loader',
    }],
    // 公用样式变量文件配置
    styleResources:{
      less:'./themes/publicStyle/common.less'
    },
    extend(config, ctx) {
    }
  }
}
