<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { getAssetsFile } from "@/utils/getAssetsFile.js";
const swipeList = reactive([
  { id: "1", imgUrl: getAssetsFile("launch1.png") },
  { id: "2", imgUrl: getAssetsFile("launch2.png") },
  { id: "3", imgUrl: getAssetsFile("launch3.png") },
]);
const swipeIndex = ref(0)
const router = useRouter();

function toHome() {
  router.push("/home")
}

function swipeChange(index) {
  swipeIndex.value = index
}
</script>

<template>
  <div class="shaddock_cook_page_launch">
    <van-swipe class="swipe" indicator-color="#ffbf40" lazy-render :loop="false" @change="swipeChange">
      <van-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="btn_area">
      <div v-show="swipeIndex == swipeList.length - 1" class="btn" @click="toHome">开始体验</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.shaddock_cook_page_launch {
  height: 100%;
  display: flex;
  flex-direction: column;
  .btn_area {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      border: 2px solid $primaryColor;
      font-size: 44px;
      font-weight: 600;
      border-radius: 14px;
      padding: 26px 34px;
      cursor: pointer;
    }
  }
}
</style>
