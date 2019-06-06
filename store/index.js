import { getStore, removeStore, setStore } from '../common/utils/store'
// 状态管理入口
export const state = () => ({
  token: getStore({ name: 'token' }) || {},
  title: '应用', // title
  error: {
    count: 0,
    message: ''
  },
  loadingCount: 0 // 判断请求剩余次数
})

export const mutations = {
  // 存入token
  SET_TOKEN(state, token) {
    state.token = token
    setStore({name: 'token', content: state.token})
  },
  // 移除token，导航tab列表，当前tab， userObj信息
  REMOVETOKEN(state, data) {
    state.token = {}
    removeStore({name: 'token'})
  },
  loading (state) {
    state.loadingCount++
    console.debug('after loading the loading count is ', state.loadingCount)
  },
  loadingComplete (state) {
    state.loadingCount--
    console.debug('after complete the loading count is ', state.loadingCount)
  }
}

export const actions= {}
