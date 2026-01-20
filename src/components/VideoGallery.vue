<template>
  <section class="media-section">

    <div class="left">
      <h2 class="section-title">Video Gallery</h2>
      <div class="video-grid">
        <div class="video-item" v-for="(video, index) in videos" :key="index">
          <iframe
            :src="video.url"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <p class="video-title">{{ video.title }}</p>
        </div>
      </div>
    </div>

    <div class="right">
      <h2 class="section-title">News & Events</h2>
      <ul class="news-list">
        <li v-for="(item, index) in news" :key="index" class="news-item">
          <span class="news-title">{{ item.title }}</span>
          <span class="news-date">{{ item.date }}</span>
        </li>
      </ul>
    </div>

  </section>
</template>

<script setup>
const videos = [
  { title: "Message from Principal", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Annual Day Highlights", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Cultural Program", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const news = [
  { title: "Farewell Ceremony", date: "Mar 15, 2026" },
  { title: "Music Competition", date: "Apr 10, 2026" },
  { title: "Sports Day", date: "May 5, 2026" },
  { title: "Science Fair", date: "Jun 12, 2026" },
  { title: "Art Exhibition", date: "Jul 20, 2026" },
];
</script>

<style scoped>
.media-section {
  display: flex;
  gap: 40px;
  padding: 50px 20px;
  flex-wrap: wrap;
  background: #f2f4f8;
  font-family: 'Arial', sans-serif;
}

.section-title {
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: 700;
  color: #007bff;
  text-align: center;
}

.left {
  flex: 2 1 500px;
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
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.video-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.video-item iframe {
  width: 100%;
  height: 180px;
  border-radius: 10px;
}

.video-title {
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
  color: #333;
}

.right {
  flex: 1 1 300px;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-height: 500px;
  overflow-y: auto;
}

.news-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.news-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  margin-bottom: 12px;
  border-left: 4px solid #007bff;
  background: #f7f9fc;
  border-radius: 8px;
  transition: background 0.3s, transform 0.3s;
}

.news-item:hover {
  background: #e3f2ff;
  transform: translateX(3px);
}

.news-title {
  font-weight: 600;
  color: #222;
}

.news-date {
  font-size: 14px;
  color: #555;
}

.right::-webkit-scrollbar {
  width: 6px;
}
.right::-webkit-scrollbar-thumb {
  background-color: #007bff;
  border-radius: 3px;
}
.right::-webkit-scrollbar-track {
  background: #f2f4f8;
}

@media (max-width: 992px) {
  .media-section {
    flex-direction: column;
    padding: 30px 15px;
  }

  .section-title {
    font-size: 24px;
  }

  .video-item iframe {
    height: 160px;
  }

  .right {
    max-height: none;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 20px;
  }

  .video-item iframe {
    height: 140px;
  }

  .right {
    padding: 20px;
  }
}
</style>
