<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { isRedirectToLaunch } from "@/utils/isRedirectToLaunch"

const router = useRouter();
const transitionName = ref("slide-left");

router.beforeEach((to, from, next) => {
  if (isRedirectToLaunch()) {
    next("/launch")
  } else {
    if (to.meta.index > from.meta.index) {
      transitionName.value = "slide-left"; // 向左滑动
    } else if (to.meta.index < from.meta.index) {
      // 由次级到主级
      transitionName.value = "slide-right";
    } else {
      transitionName.value = ""; // 同级无过渡效果
    }
    next()
  }
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
</style>
