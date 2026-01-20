<template>
  <div class="slider">
    <img :src="images[current].src" alt="Slider Image" />

    <div class="timestamp">{{ images[current].time }}</div>

    <div class="arrow left" @click="prevImage">&#10094;</div>
    <div class="arrow right" @click="nextImage">&#10095;</div>
    <div class="arrow down" @click="scrollToAbout">&#x25BC;</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import school1 from '@/assets/images/school1.jpg'
import school2 from '@/assets/images/school2.jpg'
import school3 from '@/assets/images/school3.jpg'

const images = [
  { src: school1, time: 'Morning Assembly' },
  { src: school2, time: 'Annual Program 2025' },
  { src: school3, time: 'Independence Day' }
]

const current = ref(0)

const nextImage = () => { current.value = (current.value + 1) % images.length }
const prevImage = () => { current.value = (current.value - 1 + images.length) % images.length }

const scrollToAbout = () => {
  const about = document.getElementById('about-section')
  if (about) about.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => setInterval(() => nextImage(), 5000))
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timestamp {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 1rem;
}

.arrow {
  position: absolute;
  color: white;
  font-size: 2rem;
  padding: 8px;
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
}

.arrow:hover {
  background: rgba(0,0,0,0.7);
}

.arrow.left { top: 50%; left: 10px; transform: translateY(-50%); }
.arrow.right { top: 50%; right: 10px; transform: translateY(-50%); }
.arrow.down { bottom: 10px; left: 50%; transform: translateX(-50%); }
</style>
