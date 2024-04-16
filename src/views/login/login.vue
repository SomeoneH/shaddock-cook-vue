<script setup>
import { ref, reactive } from "vue";
import { getAssetsFile } from "@/utils/getAssetsFile.js";
import { useRouter } from "vue-router";
import { userLogin } from "@/service/api/user";
import md5 from "js-md5"
import { showSuccessToast } from "vant";
import { useTokenStore } from '@/stores/token.js'
import Header from "@/components/header/index.vue";

const router = useRouter();
const tokenStore = useTokenStore();
const formData = reactive({
  loginName: "",
  password: "",
})
const isRemember = ref(false)
const otherWaysList = [
  { id: "1", name: "QQ", imgUrl: getAssetsFile("qq.png") },
  { id: "2", name: "微信", imgUrl: getAssetsFile("wechat.png") },
  { id: "3", name: "微博", imgUrl: getAssetsFile("sina_microblog.png") },
]
function back() {
  router.push("/home")
}

function register() {
  router.push("/register")
}

function validator(prop, value, rule) {
  console.log("validator", prop, value, rule);
  if (prop == "loginName") {
    if (!value) {
      return "请输入手机号";
    } else if (
      !/^((13[0-9])|(14[5,7])|(15[^4,\D])|(17[0-8])|(18[0-9]))\d{8}$/.test(
        value
      )
    ) {
      return "请输入正确的手机号";
    }
  } else if (prop == "password") {
    if (!value) {
      return "请输入密码";
    } else if (value.length < 6) {
      return "请输入6位以上密码"
    }
  }
}

async function onSubmit() {
  const params = JSON.parse(JSON.stringify(formData))
  params.password = params.confirmPassword = md5(params.password)
  const res = await userLogin(params)
  tokenStore.setToken(res.data)
  showSuccessToast(res.message)
  back()
}

</script>

<template>
  <div class="shaddock_cook_page_login">
    <Header>
      <template #left>
        <van-icon class-prefix="shaddock-icon" name="back" @click="back" />
      </template>
      <template #middle>
        <div class="title">用户登录</div>
      </template>
      <template #right>
        <div class="color_text" @click="register">注册</div>
      </template>
    </Header>
    <div class="content_container">
      <div class="welcome">
        <div class="text">你好,</div>
        <div class="text">欢迎来到厨柚APP</div>
      </div>
      <van-form class="form" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="formData.loginName"
            name="validator"
            placeholder="请输入手机号"
            :rules="[
              {
                validator: (value, rule) => validator('loginName', value, rule),
                trigger: ['onBlur', 'onSubmit'],
              },
            ]"
          />
          <van-field
            v-model="formData.password"
            type="password"
            name="validator"
            placeholder="请输入密码"
            :rules="[
              {
                validator: (value, rule) => validator('password', value, rule),
                trigger: ['onBlur', 'onSubmit'],
              },
            ]"
          />
        </van-cell-group>
        <div class="btn_area">
          <div class="password">
            <div class="remember">
              <van-icon name="checked" :color="isRemember ? '#ffbf40' : '#999'" @click="isRemember = !isRemember" />
              <span class="text">记住密码</span>
            </div>
            <div class="forget text">忘记密码</div>
          </div>
          <van-button class="submit_btn" round block type="primary" color="#ffbf40" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <van-divider class="divider">其他登录方式</van-divider>
      <div class="other_ways">
        <div class="item" v-for="item in otherWaysList" :key="item.id">
          <img :src="item.imgUrl">
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.shaddock_cook_page_login {
  height: 100%;
  .header_container {
    .title {
      font-size: 36px;
    }
    .shaddock-icon {
      font-size: 40px;
    }
    .color_text {
      color: #ffbf40;
      font-size: 32px;
      cursor: pointer;
    }
  }
  .content_container {
    height: 100%;
    padding: 88px 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .welcome {
      // padding: 0 60px;
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 130px;
      .text:nth-child(1) {
        margin-bottom: 32px;
      }
    }
    .form {
      .van-cell-group {
        margin: 0 -16px;
      }
      .van-cell {
        font-size: calc(32rem / $postCssPxToRemRootValue);
        margin-bottom: calc(30rem / $postCssPxToRemRootValue);
        // 不设置伪元素时，最后一项表单容器会缺失下边框
        &::after {
          display: inline-block;
          content: "";
          border: 1px solid #eee;
        }
      }
      .btn_area {
        // display: flex;
        // justify-content: center;
        text-align: center;
        .password {
          margin: 50px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 28px;
          .text {
            cursor: pointer;
          }
          .van-icon {
            font-size: calc(32rem / $postCssPxToRemRootValue);
            vertical-align: middle;
            margin-right: calc(10rem / $postCssPxToRemRootValue);
          }
        }
        .submit_btn {
          display: inline-block;
          width: 540px;
          font-size: 40px;
        }
      }
    }
    .divider {
      margin-top: 160px;
      margin-bottom: 50px;
    }
    .other_ways {
      display: flex;
      justify-content: space-evenly;
      .item {
        font-size: 28px;
        text-align: center;
        cursor: pointer;
        img {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
