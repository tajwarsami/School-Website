<template>
  <section class="media-section">

    <h2 class="section-title">Video Gallery</h2>
    <div class="video-grid">
      <div
        v-for="(video, index) in limitedVideos"
        :key="index"
        class="video-item"
      >
        <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
        <p class="video-title">{{ video.title }}</p>
      </div>
    </div>
    <div class="see-more">
      <router-link to="/videos" class="see-more-link">See More</router-link>
    </div>

    <h2 class="section-title">News & Events</h2>
    <div class="news-card-grid">
      <router-link
        v-for="item in latestNews"
        :key="item.id"
        :to="{ path: '/news', query: { id: item.id } }"
        class="news-card-link"
      >
        <div class="news-card">
          <div v-if="item.image" class="news-card-image">
            <img :src="item.image" alt="news" />
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">{{ item.title }}</h3>
            <p class="news-card-date">{{ item.date }}</p>
            <div v-if="item.body" class="news-card-preview">
              {{ item.body.replace(/<[^>]+>/g, '').slice(0, 100) }}...
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="see-more">
      <router-link to="/news" class="see-more-link">Explore All</router-link>
    </div>

  </section>
</template>

<script setup>
import { newsData } from '@/data/newsData'

const videos = [
  { title: 'Message from Principal', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Annual Day Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Cultural Program', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Science Fair', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
]

const limitedVideos = videos.slice(0, 3)
const latestNews = newsData.slice(0, 3)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* { font-family: 'Poppins', sans-serif; }

.media-section { 
  max-width: 1200px; 
  margin: auto; 
  padding: 40px 20px; 
}

.section-title {
  font-size: 28px; 
  font-weight: 700; 
  color: #0d6efd;
  margin-bottom: 25px; 
  text-align: center;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
  aspect-ratio: 16/9; 
  border-radius: 10px; 
}

.video-title { 
  margin-top: 10px; 
  font-size: 15px; 
  text-align: center; 
}

.news-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.news-card-link { 
  text-decoration: none; 
  color: inherit; 
  display: block; 
}

.news-card {
  background: #fff; 
  border-radius: 14px; 
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08); 
  transition: transform 0.3s;
}

.news-card:hover { 
  transform: translateY(-6px); 
}

.news-card-image img { 
  width: 100%; 
  height: 190px; 
  object-fit: cover; 
}

.news-card-body { 
  padding: 15px; 
}

.news-card-title { 
  font-size: 16px; 
  font-weight: 600; 
  color: #0d6efd; 
}

.news-card-date { 
  font-size: 14px; 
  color: #555; 
  margin-bottom: 8px; 
}

.news-card-preview { 
  font-size: 14px; 
  color: #333; 
  line-height: 1.4; 
  margin-top: 5px; 
}

.see-more { 
  text-align: center; 
  margin: 25px 0; 
}

.see-more-link { 
  font-weight: 600; 
  color: #0d6efd; 
  text-decoration: none; 
  }
</style>
