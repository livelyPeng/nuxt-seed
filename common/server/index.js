import Vue from 'vue'
import homeServer from './view-server/homeServer'
// 导出请求列表插件
export default function (context) {
  const server =  Object.assign(
    {}, homeServer
  )
  Vue.prototype.plServer = server
  context.plServer = server
}
