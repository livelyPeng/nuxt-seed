// 导出插件配置表 // 注意/plugins/storeModule/这个路径不能删除  ssr 为真表示服务器端也加载，不能为false
export default [
  { src: '~/common/storeModule/homeModule', ssr: true }
]
