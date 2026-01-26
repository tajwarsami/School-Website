<template>
  <div class="notice-board">
    <h3 class="board-title">Notice Board</h3>

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

    <ul>
      <li v-for="n in visibleNotices" :key="n.id" class="notice-item">
        <router-link :to="`/notice/${n.id}`" class="notice-title-link">
          {{ n.title }}
        </router-link>
        <small class="notice-date">{{ formatDate(n.date) }}</small>
      </li>
    </ul>

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
import { notices } from '@/data/notices'

const limit = 2
const types = ['general', 'academics', 'admission']
const selectedType = ref('general')

const filteredNotices = computed(() =>
  notices.filter(n => n.type === selectedType.value)
)

const visibleNotices = computed(() =>
  [...filteredNotices.value]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
)

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
</script>

<style scoped>
.notice-board {
  background: #f7f9fc;
  padding: 25px 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.board-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 20px;
  position: relative;
}

.board-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #007bff, #00c6ff);
  margin: 8px auto 0;
  border-radius: 2px;
}

.notice-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #007bff;
  background: #fff;
  color: #007bff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: #007bff;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.notice-item {
  background: #fff;
  padding: 15px 18px;
  border-radius: 10px;
  margin-bottom: 15px;
  border-left: 4px solid #007bff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.notice-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.15);
}

.notice-title-link {
  font-weight: 600;
  display: block;
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 4px;
}

.notice-title-link:hover {
  text-decoration: underline;
  color: #0056b3;
}

.notice-date {
  font-size: 13px;
  color: #666;
}

.see-more {
  display: inline-block;
  margin-top: 12px;
  color: #007bff;
  font-weight: 600;
  transition: color 0.2s ease;
}

.see-more:hover {
  color: #0056b3;
  text-decoration: underline;
}
</style>
