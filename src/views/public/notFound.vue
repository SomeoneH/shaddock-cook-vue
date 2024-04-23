<script setup>
import Header from "@/components/header/index.vue";
import { useRouter } from "vue-router";
import { getAssetsFile } from "@/utils/getAssetsFile.js";

const router = useRouter();

function back() {
  router.go(-1)
}
</script>

<template>
  <div class="shaddock_cook_page_not_found">
    <Header>
      <template #left>
        <van-icon @click="back" class-prefix="shaddock-icon" name="back" />
      </template>
    </Header>
    <div class="content_container">
      <img :src="getAssetsFile('notFound/加载失败.png')" alt="">
      <div class="text">加载失败，这个页面去火星了</div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.shaddock_cook_page_not_found {
  height: 100%;
  .shaddock-icon {
    font-size: 40px;
  }
  .content_container {
    height: 100%;
    padding: 88px 30px 98px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 40px;
      margin-top: 50px;
    }
  }
}
</style>
