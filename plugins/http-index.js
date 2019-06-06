import Vue from 'vue'

// 请求拦截器
export default function ({ app, $axios, store, redirect }) {
  Vue.http = $axios
  // 请求前
  Vue.http.interceptors.request.use(config => {
    let tokenInfo = store.state.token.token || ''
    config.headers['Authorization'] = tokenInfo
    store.commit('loading')
    return config
  }, error => {
    return Promise.reject(error)
  })
  // 请求后
  Vue.http.interceptors.response.use(response => {
    setTimeout(() => {
      store.commit('loadingComplete')
    }, 300)
    if (response.status >= 200 && response.status <= 300) {
      if (response.data.code === '401') {
        redirect('/login')
      }
      if (response.data) {
        return response
      } else {
        return response
      }
    }
  }, error => {
    store.commit('loadingComplete')
    return Promise.reject(error)
  })
}
