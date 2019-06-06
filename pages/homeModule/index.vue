<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-seed
      </h1>
      <h2 class="subtitle">
        My superb Nuxt.js Seed
      </h2>
      <p>author: penglei, 博客站www.plblog.cn， nuxt.js（基于Vue的服务器渲染）PC端种子</p>
      <div>
        <p>
          <nuxt-link to="/homeModule/info" style="color: royalblue">去信息页面</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/homeModule/subpages" style="color: royalblue">去首页子页面</nuxt-link>
        </p>
        <nuxt-child/>
      </div>
      <div style="color: red; font-size: 50px">
        {{ datas }}
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions } = createNamespacedHelpers('homeModule')

  export default {
    components: {
      Logo
    },
    computed: {
      ...mapState({
        title: state => state.name
      })
    },
    data () {
      return {
        datas: '111'
      }
    },
    // 请在这里请求数据 在渲染组件之前异步获取数据。
    // 你可以利用 asyncData方法来获取数据，Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件
    asyncData (context) {
      return context.plServer.texts().then(data => {
        return { datas: data.msg + '我是你服务端获取到的数据' }
      }).catch(err => {
        return { datas: data.msg + '获取服务端数据失败' }
      })
    },
    // 如果希望在组件渲染之后获取数据，请在这里发送
    mounted () {
    },
    methods: {
      ...mapActions(['goodsLabelInfoReq']),
    }
  }
</script>

<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: @dh-color;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .links {
    padding-top: 15px;
  }
}
</style>
