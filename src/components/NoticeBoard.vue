<template>
  <div class="notice-board">
    <h3 class="board-title">Notice Board</h3>

    <!-- Filter Buttons -->
    <div class="notice-filters">
      <button
        v-for="type in types"
        :key="type"
        :class="['filter-btn', { active: selectedType === type }]"
        @click="selectedType = type"
      >
        {{ type }}
      </button>
    </div>

    <!-- Notices -->
    <ul>
      <li v-for="n in visibleNotices" :key="n.id" class="notice-item">
        <span class="notice-title">{{ n.title }}</span>
        <small class="notice-date">{{ formatDate(n.date) }}</small>
      </li>
    </ul>

    <!-- See more link (single fixed link) -->
    <router-link
      v-if="filteredNotices.length > limit"
      :to="`/notices/${selectedType}`"
      class="see-more"
    >
      See more →
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Number of notices to show in the main board
const limit = 2

// Available notice types
const types = ['general', 'academics', 'admission']

// Currently selected type
const selectedType = ref('general')

// All notices
const notices = [
  { id: 1, title: 'Academic Session 2026 Starts', date: '2026-01-01', type: 'academics' },
  { id: 2, title: 'SSC Scholarship Notice', date: '2025-10-10', type: 'academics' },
  { id: 3, title: 'Exam Routine Published', date: '2025-09-01', type: 'academics' },
  { id: 4, title: 'School Picnic', date: '2025-08-01', type: 'general' },
  { id: 5, title: 'Admission Open for 2026', date: '2025-11-01', type: 'admission' },
  { id: 6, title: 'Parent-Teacher Meeting', date: '2025-07-20', type: 'general' },
  { id: 7, title: 'New Admission Guidelines', date: '2025-12-01', type: 'admission' },
]

// Filter notices by selected type
const filteredNotices = computed(() =>
  notices.filter(n => n.type === selectedType.value)
)

// Sort by date (latest first) and limit to `limit`
const visibleNotices = computed(() =>
  [...filteredNotices.value]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
)

// Format date nicely
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

/* Board Title */
.board-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #007bff;
  text-align: center;
}

/* Filter buttons */
.notice-filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 6px 12px;
  border: 1px solid #007bff;
  background: #fff;
  color: #007bff;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  background: #007bff;
  color: #fff;
}

.filter-btn.active {
  background: #007bff;
  color: #fff;
}

/* Notices */
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

/* See more */
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
