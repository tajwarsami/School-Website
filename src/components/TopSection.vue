<template>
  <section class="top-section">
    <div class="left">
      <ImageSlider />
    </div>
    <div class="right">
      <NoticeBoard />
    </div>
  </section>
</template>

<script setup>
import ImageSlider from './ImageSlider.vue'
import NoticeBoard from './NoticeBoard.vue'
</script>

<style scoped>
.top-section {
  display: flex;
  height: 450px;
  width: 100%;
}

.left {
  width: 70%;
  height: 100%;
}

.right {
  width: 30%;
  height: 100%;
  border-left: 1px solid #ddd;
  overflow-y: auto;
}
</style>
