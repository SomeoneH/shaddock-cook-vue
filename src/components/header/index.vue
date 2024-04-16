<script setup>

</script>

<template>
  <div class="shaddock_cook_comps_header">
    <div class="header_container">
      <div class="header">
        <div class="left">
          <slot name="left"></slot>
        </div>
        <div class="middle">
          <slot name="middle"></slot>
        </div>
        <div class="right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shaddock_cook_comps_header {
  .header_container {
    height: var(--headerHeight);
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 30px;
    z-index: 1000;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--headerHeight);
    }
    .middle {
      flex: 1;
      text-align: center;
    }
    .left,
    .right {
      display: flex;
      align-items: center;
    }
  }
}
</style>
