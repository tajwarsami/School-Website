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

        <a
          v-if="n.pdf"
          :href="n.pdf"
          target="_blank"
          class="notice-title-link"
        >
          {{ n.title }}
        </a>
        <span v-else class="notice-title">{{ n.title }}</span>
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
  padding: 20px;
  border-radius: 12px;
}

.board-title {
  text-align: center;
  color: #007bff;
  margin-bottom: 15px;
}

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
  cursor: pointer;
}

.filter-btn.active,
.filter-btn:hover {
  background: #007bff;
  color: #fff;
}

.notice-item {
  background: #fff;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 12px;
  border-left: 4px solid #007bff;
}

.notice-title {
  font-weight: 600;
  display: block;
}

.notice-title-link {
  font-weight: 600;
  display: block;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 3px;
}

.notice-title-link:hover {
  text-decoration: underline;
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
}
</style>
