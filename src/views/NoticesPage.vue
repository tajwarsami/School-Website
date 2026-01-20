<template>
  <div class="notices-page">
    <h2>{{ typeTitle }} Notices</h2>
    <ul>
      <li v-for="n in noticesByType" :key="n.id" class="notice-item">
        <span class="notice-title">{{ n.title }}</span>
        <small class="notice-date">{{ formatDate(n.date) }}</small>
      </li>
    </ul>
    <router-link to="/" class="back-link">← Back to Notice Board</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Get type from URL
const route = useRoute()
const type = route.params.type

// All notices (same as NoticeBoard)
const notices = [
  { id: 1, title: 'Academic Session 2026 Starts', date: '2026-01-01', type: 'academics' },
  { id: 2, title: 'SSC Scholarship Notice', date: '2025-10-10', type: 'academics' },
  { id: 3, title: 'Exam Routine Published', date: '2025-09-01', type: 'academics' },
  { id: 4, title: 'School Picnic', date: '2025-08-01', type: 'general' },
  { id: 5, title: 'Admission Open for 2026', date: '2025-11-01', type: 'admission' },
  { id: 6, title: 'Parent-Teacher Meeting', date: '2025-07-20', type: 'general' },
  { id: 7, title: 'New Admission Guidelines', date: '2025-12-01', type: 'admission' },
]

// Filter by type
const noticesByType = computed(() =>
  notices
    .filter(n => n.type === type)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
)

// Display title
const typeTitle = computed(() => type.charAt(0).toUpperCase() + type.slice(1))

// Format date
const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
</script>

<style scoped>
.notices-page {
  max-width: 600px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}

h2 {
  color: #007bff;
  margin-bottom: 20px;
}

.notice-item {
  background: #f7f9fc;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  border-left: 4px solid #007bff;
}

.notice-title {
  font-weight: 600;
}

.notice-date {
  font-size: 13px;
  color: #555;
  display: block;
  margin-top: 4px;
}

.back-link {
  display: inline-block;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
}

.back-link:hover {
  color: #0056b3;
}
</style>
