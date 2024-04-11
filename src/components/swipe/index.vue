<script setup>
const props = defineProps(["list"])
function goTo(url) {
  console.log("goTo", url)
}
</script>

<template>
  <div class="shaddock_cook_comps_swiper">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="#ffbf40" lazy-render>
      <van-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="" @click="goTo(item.detailUrl)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped>
.shaddock_cook_comps_swiper {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 5px 20px -10px;
  .swipe {
    :deep(.van-swipe-item) {
      height: auto;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
