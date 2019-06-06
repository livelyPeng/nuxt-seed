<template style="width: 100%;height: 100%">
  <div class="loginBoxs">
    <div class="loginBox">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               class="demo-ruleForm formLogin">
        <el-form-item class="name">
          <p class="title">登录</p>
        </el-form-item>
        <el-form-item prop="name"
                      class="name">
          <div class="iconName"><i class="iconuser iconfont" /></div>
          <el-input v-model="ruleForm.name"
                    placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password"
                      class="name">
          <div class="iconName"><i class="iconziyuanxhdpi iconfont" /></div>
          <el-input type="password"
                    v-model="ruleForm.password"
                    placeholder="请输入密码"
                    @keyup.enter.native="submitForm('ruleForm')" />
        </el-form-item>
        <el-form-item style="margin-bottom: 0px">
          <div class="btn"
               @click="submitForm('ruleForm')">登录</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ruleForm: { name: '', password: '' },
        // 验证密码
        validatePass: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'))
          } else {
            callback()
          }
        },
        rules: {
          name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ validator: this.validatePass, trigger: 'blur' }]
        },
      }
    },
    methods: {
      submitForm (ruleForm) {
        // 表单验证
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            let param = { account: this.ruleForm.name, password: this.ruleForm.password }
            this.$store.commit('SET_TOKEN', {token: 123456})
            this.$router.push({ path: '/' })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style lang="less">
.loginBoxs {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-size: 100% 100%;
  background-color: #7f828b;
  .loginBox {
    width: 630px;
    height: 390px;
    background-color: #f3f7fb;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -315px;
    margin-top: -180px;
    box-sizing: border-box;
    border: 1px solid #fff;
    padding: 15px 115px;
    .formLogin {
      margin: auto;
      margin-top: 52px;
      .title {
        font-size: 30px;
        color: @dh-color;
        text-align: center;
      }
      .el-form-item {
        margin-bottom: 35px !important;
      }
      .el-form-item__error {
        font-size: 14px !important;
        color: @dh-color;
        padding-top: 7px !important;
      }
      .name {
        position: relative;
        .iconName {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 45px;
          height: 100%;
          text-align: center;
          .iconfont {
            color: #b3b3b3;
            font-size: 18px;
          }
        }
      }
      .btn {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
        background-color: @dh-color;
        font-size: 16px;
        letter-spacing: 10px;
        cursor: pointer;
      }
      .el-form-item.is-error .el-input__inner {
        border: none !important;
      }
      .el-input__inner {
        border-radius: 0 !important;
        height: 40px !important;
        line-height: 40px !important;
        text-indent: 30px;
        border: none !important;
      }
    }
  }
}
</style>
