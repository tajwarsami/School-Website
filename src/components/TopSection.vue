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
  width: 100vw;
  gap: 20px;
  box-sizing: border-box;
}

.left {
  flex: 3;
  min-width: 300px;
}

.right {
  flex: 1;
  min-width: 280px;
  background: #f7f9fc;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-left: #eee
}


@media (max-width: 768px) {
  .top-section {
    flex-direction: column;
  }
  .right {
    border-left: none;
    border-top: 1px solid #ddd;
    margin-top: 10px;
  }
}
</style>
