<template>
  <section class="media-section">
    <h2 class="section-title">Video Gallery</h2>
    <div class="video-grid">
      <div class="video-item" v-for="(video, index) in videos" :key="index">
        <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
        <p class="video-title">{{ video.title }}</p>
      </div>
    </div>

    <h2 class="section-title">News & Events</h2>
    <ul class="news-list">
      <li v-for="(item, index) in limitedNews" :key="index" class="news-item">
        <span class="news-title">{{ item.title }}</span>
        <span class="news-date">{{ item.date }}</span>
      </li>
    </ul>

    <div class="see-more">
      <router-link to="/news" class="see-more-link">See More</router-link>
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
  { title: "Farewell Ceremony", date: "Mar 15, 2026", pdf: "/pdfs/farewell.pdf" },
  { title: "Music Competition", date: "Apr 10, 2026", pdf: "/pdfs/music.pdf" },
  { title: "Sports Day", date: "May 5, 2026" },
  { title: "Science Fair", date: "Jun 12, 2026", pdf: "/pdfs/science.pdf" },
  { title: "Art Exhibition", date: "Jul 20, 2026" },
];

const limitedNews = news.slice(0, 3);
</script>


<style scoped>
.media-section {
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 25px;
  text-align: center;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.video-item {
  background: #fff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.video-item iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
}

.video-title {
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
  color: #333;
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

.see-more {
  text-align: center;
  margin-top: 20px;
}

.see-more-link {
  font-weight: 600;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.see-more-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

@media (max-width: 992px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 24px;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 20px;
  }
  .video-item iframe {
    aspect-ratio: 16/9;
  }
}
</style>
