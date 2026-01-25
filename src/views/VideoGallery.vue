<template>
  <section class="media-section">
    <div class="video-grid">
      <div
        class="video-item"
        v-for="(video, index) in videos"
        :key="index"
      >
        <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
        <p class="video-title">{{ video.title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const videos = [
  { title: 'Message from Principal', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Annual Day Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Cultural Program', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Science Fair', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Sports Day Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
]
</script>

<style scoped>
.media-section {
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  color: #007bff;
  margin-bottom: 30px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.video-item {
  background: #fff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.video-item iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
}

.video-title {
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
}
</style>
