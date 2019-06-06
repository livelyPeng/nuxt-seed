// 首页模块的Vuex store
export default function ({store}) {
  const homeModule = {
    namespaced: true,
    state: {
      name: '我是首页'
    },
    mutations: {
    },
    actions: {
      // 获取标签列表
      goodsLabelInfoReq ({ commit }, params) {
        return '获取标签列表'
      }
    }
  }
  // 注入模块
  store.registerModule('homeModule', homeModule)
}
