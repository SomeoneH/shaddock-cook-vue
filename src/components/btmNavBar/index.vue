<script setup>
import {ref, reactive} from "vue"
const currentNavIndex = ref(0)
const navList = reactive([
  { text: "首页", icon: "#icon-home", activeIcon: "#icon-home-active", to: "home" },
  { text: "发现", icon: "#icon-discover", activeIcon: "#icon-discover-active", to: "discover" },
  { text: "课堂", icon: "#icon-classroom", activeIcon: "#icon-classroom-active", to: "classroom" },
  { text: "商城", icon: "#icon-mall", activeIcon: "#icon-mall-active", to: "mall" },
  { text: "我的", icon: "#icon-mine", activeIcon: "#icon-mine-active", to: "mine" },
])

function handleNavItemClick(index) {
  currentNavIndex.value = index
}
</script>

<template>
  <div class="shaddock_cook_comps_btm_nav_bar">
    <div class="nav_container">
      <div class="nav_list">
        <router-link v-for="(item, index) in navList" :key="item" class="item" @click="handleNavItemClick(index)" :to="item.to" v-slot="scope">
          <svg class="icon-font" aria-hidden="true">
            <use :xlink:href="scope.isActive ? item.activeIcon : item.icon"></use>
          </svg>
          <div class="text">{{ item.text }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shaddock_cook_comps_btm_nav_bar {
  .nav_container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: var(--bottomNavigationHeight);
    padding: 0 50px;
    z-index: 1000;
    background: #fff;
    box-shadow: 0 -2px #f1f1f1 ;
    // 启用硬件加速走GPU渲染
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    .nav_list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon-font {
          font-size: 46px;
        }
        .text {
          font-size: 20px;
          line-height: 1;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
