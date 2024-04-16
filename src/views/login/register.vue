<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { userRegister } from "@/service/api/user";
import md5 from "js-md5"
import { showFailToast, showSuccessToast } from "vant";
import Header from "@/components/header/index.vue";

const router = useRouter();
const formData = reactive({
  loginName: "",
  password: "",
  confirmPassword: "",
});
const isChecked = ref(false);

function back() {
  router.push("/login");
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
    } else if (formData.confirmPassword && formData.confirmPassword != value) {
      return "两次密码输入不一致，请重新输入"
    }
  } else if (prop == "confirmPassword") {
    if (!value) {
      return "请输入确认密码";
    } else if (value.length < 6) {
      return "请输入6位以上确认密码"
    } else if (formData.password && formData.password != value) {
      return "两次密码输入不一致，请重新输入"
    }
  }
}

async function onSubmit() {
  if (!isChecked.value) return showFailToast("请先阅读并同意用户协议及隐私政策")
  const params = JSON.parse(JSON.stringify(formData))
  params.password = params.confirmPassword = md5(params.password)
  const res = await userRegister(params)
  showSuccessToast(res.message)
  back()
}

</script>

<template>
  <div class="shaddock_cook_page_register">
    <Header>
      <template #left>
        <van-icon class-prefix="shaddock-icon" name="back" @click="back" />
      </template>
      <template #middle>
        <div class="title">用户注册</div>
      </template>
      <template #right>
        <div class="hidden" @click="register">占位</div>
      </template>
    </Header>
    <div class="content_container">
      <div class="welcome">
        <div class="text">你好,</div>
        <div class="text">欢迎注册厨柚APP</div>
      </div>
      <van-form class="form" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="formData.loginName"
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
            placeholder="请输入密码"
            :rules="[
              {
                validator: (value, rule) => validator('password', value, rule),
                trigger: ['onBlur', 'onSubmit'],
              },
            ]"
          />
          <van-field
            v-model="formData.confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="请输入确认密码"
            :rules="[
              {
                validator: (value, rule) => validator('confirmPassword', value, rule),
                trigger: ['onBlur', 'onSubmit'],
              },
            ]"
          />
        </van-cell-group>
        <div class="btn_area">
          <div class="password">
            <div class="remember">
              <van-icon
                name="checked"
                :color="isChecked ? '#ffbf40' : '#999'"
                @click="isChecked = !isChecked"
              />
              <span class="text"
                >阅读并同意 <span class="color_text">用户协议</span> 和
                <span class="color_text">隐私政策</span>
              </span>
            </div>
          </div>
          <van-button
            class="submit_btn"
            round
            block
            type="primary"
            color="#ffbf40"
            native-type="submit"
          >
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.shaddock_cook_page_register {
  height: 100%;
  .header_container {
    .title {
      font-size: 36px;
    }
    .shaddock-icon {
      font-size: 40px;
    }
    .hidden {
      visibility: hidden;
      font-size: 32px;
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
            .color_text {
              color: $primaryColor;
              font-weight: 600;
            }
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
