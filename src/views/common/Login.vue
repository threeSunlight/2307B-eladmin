<template>
  <!-- 
        第一步: 完成页面基础配置
        第二步: 1. 获取验证码图片,调用接口:auth/code       同时使用img将他存放在页面上
               2. 给图片设置点击事件,点击当前图片,重新调用接口,并且重新渲染页面
        第三步: 1. 输入密码后,调用rsa加密方式对密码进行加密
               2. 问题出现的原因: 我们点击登录的时候,密码已经加码,我们再次点击登录,会出现重复加密的问题
                  前端输入的时候,明文输入,先明文保存到cookie中中,.....copyPassword
                  点击登录的时候,获取到password,然后获取保存到cookie中明文,进行判断copyPassword和password是否一致,如果两个保持一致,表示
                  没有加密,那么进行加密,如果不一致,直接获取进行调用
        第四步: 把参数传递给后端,调用登录接口
               1. 登录成功后: 直接跳转至首页
               2. 登录失败后: 不进行跳转,重新刷新验证码图片
        第五步: 加密方式的下载:
                npm install jsencrypt
     -->
  <div class="box">
    <div class="center">
      <h3 style="text-align: center; margin-bottom: 20px">ELADMIN 后台管理系统</h3>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item>
          <el-input v-model="form.username" :prefix-icon="UserFilled" />
        </el-form-item>
        <el-form-item label="">
          <el-input
            v-model="form.password"
            type="password"
            :prefix-icon="Lock"
            @change="savePasswordCookie"
          />
        </el-form-item>
        <el-form-item label="" class="q">
          <el-input v-model="form.code" :prefix-icon="WarnTriangleFilled" class="w" />
          <div @click="GetCode">
            <el-image :src="form.CodeUrl" alt="" fit="scale-down" />
          </div>
        </el-form-item>
        <el-form-item label="" class="q">
          <el-checkbox>记住我</el-checkbox>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" class="btn" @click="oustuadd">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserFilled, Lock, WarnTriangleFilled } from '@element-plus/icons-vue'
import useLogin from '../../hooks/useLogin'

const { form, code, GetCode, savePasswordCookie, oustuadd } = useLogin()

code()
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/img/login.jpeg');
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  .center {
    width: 400px;
    height: 350px;
    background-color: #fff;
    padding: 25px;
    border-radius: 20px;
  }
}
.el-form-item {
  width: 335px;
  height: 38px;
  .el-input {
    width: 335px;
    height: 38px;
  }
}
.btn {
  width: 100%;
  height: 40px;
}
.q {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .w {
    width: 210px;
  }
  img {
    width: 111px;
    height: 36px;
  }
}
</style>
