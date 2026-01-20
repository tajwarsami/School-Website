<template>
  <div class="notice-board">
    <h3 class="board-title">Notice Board</h3>

    <ul>
      <li v-for="n in visibleNotices" :key="n.id" class="notice-item">
        <span class="notice-title">{{ n.title }}</span>
        <small class="notice-date">{{ formatDate(n.date) }}</small>
      </li>
    </ul>

    <router-link
      v-if="notices.length > limit"
      to="/notices"
      class="see-more"
    >
      See more →
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const limit = 2

const notices = [
  { id: 1, title: 'Academic Session 2026 Starts', date: '2026-01-01' },
  { id: 2, title: 'SSC Scholarship Notice', date: '2025-10-10' },
  { id: 3, title: 'Exam Routine Published', date: '2025-09-01' },
]

const sortedNotices = computed(() =>
  [...notices].sort((a, b) => new Date(b.date) - new Date(a.date))
)

const visibleNotices = computed(() =>
  sortedNotices.value.slice(0, limit)
)

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
</script>

<style scoped>
.notice-board {
  background-color: #f7f9fc;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  max-width: 400px;
  margin: auto;
  font-family: 'Arial', sans-serif;
}

.board-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #007bff;
  text-align: center;
}

.notice-board ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.notice-item {
  background: #fff;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 12px;
  border-left: 4px solid #007bff;
  transition: transform 0.3s, box-shadow 0.3s;
}

.notice-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
}

.notice-title {
  display: block;
  font-weight: 600;
  color: #222;
}

.notice-date {
  font-size: 13px;
  color: #555;
  margin-top: 4px;
}

.see-more {
  display: inline-block;
  margin-top: 12px;
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.see-more:hover {
  color: #0056b3;
}
</style>
