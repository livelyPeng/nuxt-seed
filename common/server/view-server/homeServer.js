import Vue from 'vue'
import apiUrl from '../apiUrl'
// 首页模块请求列表
export default {
  // 实例
  texts (params) {
    return Vue.http.get('http://192.168.0.112:8083/shop/wechat/test/2').then(({data}) => {
      return data
    })
  }
}
