<script setup>
import { reactive, ref } from "vue";
import { getAssetsFile } from "@/utils/getAssetsFile.js";
import api from "@/service/api";
import BtmNavBar from "@/components/btmNavBar/index.vue";
import Header from "@/components/header/index.vue";

const searchStr = ref(""); // 搜索关键字
const userInfo = reactive({}); // 用户基本信息
const socialCount = reactive({}); // 用户社交信息统计

init()

async function init() {
  getUserInfo();
  getUserSocialInformationCount();
}

async function getUserInfo() {
  const res = await api.user.getUserInfo();
  Object.assign(userInfo, res.data);
}

async function getUserSocialInformationCount() {
  const res = await api.user.getUserSocialInformationCount();
  Object.assign(socialCount, res.data);
}

function search(event) {
  console.log("search", event);
}
</script>

<template>
  <div class="shaddock_cook_page_mine">
    <Header>
      <template #left>
        <van-icon class-prefix="shaddock-icon" name="plus" />
      </template>
      <template #middle>
        <van-search
          class="search"
          v-model="searchStr"
          placeholder="搜索我得菜谱"
          @search="search"
        />
      </template>
      <template #right>
        <van-icon
          class-prefix="shaddock-icon"
          name="friend"
        />
        <svg class="icon-font" aria-hidden="true">
          <use xlink:href="#icon-setting"></use>
        </svg>
      </template>
    </Header>
    <div class="content_container">
      <div class="user_info">
        <div class="base_info">
          <div class="left">
            <img
              class="avatar"
              :src="userInfo.userPic || getAssetsFile('default-avatar.png')"
              alt=""
            />
          </div>
          <div class="right">
            <div class="name">{{ userInfo.nickName }}</div>
            <div class="introduce_sign">{{ userInfo.introduceSign }}</div>
          </div>
        </div>
        <div class="social_count">
          <div class="item">
            <div class="count">{{ socialCount.followersCount }}</div>
            <div class="title">粉丝</div>
          </div>
          <div class="item">
            <div class="count">{{ socialCount.subscribeCount }}</div>
            <div class="title">关注</div>
          </div>
          <div class="item">
            <div class="count">{{ socialCount.momentCount }}</div>
            <div class="title">动态</div>
          </div>
        </div>
      </div>
    </div>
    <BtmNavBar></BtmNavBar>
  </div>
  
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.shaddock_cook_page_mine {
  .header_container {
    .search {
      padding: 0 24px;
      margin: 0 24px;
      border-radius: 30px;
      background: #f1f1f1;
      :deep(.van-search__content) {
        padding-left: 0;
        background: #f1f1f1;
      }
      :deep(.van-search__field) {
        padding-right: 0;
      }
    }
    .left,
    .right {
      .shaddock-icon {
        font-size: 40px;
      }
      .icon-font {
        font-size: 42px;
        margin-left: 20px;
      }
    }
  }
  .content_container {
    padding: 88px 30px 98px;
    .user_info {
      margin-top: 30px;
      .base_info {
        display: flex;
        .left {
          .avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-right: 10px;
            border: 1px solid #f1f1f1;
          }
        }
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .name {
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .introduce_sign {
            font-size: 28px;
            color: #999;
          }
        }
      }
      .social_count {
        margin-top: 40px;
        padding: 0 44px;
        display: flex;
        justify-content: space-between;
        .item {
          text-align: center;
          .count {
            font-size: 40px;
            color: $primaryColor;
            margin-bottom: 10px;
          }
          .title {
            font-size: 27px;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
