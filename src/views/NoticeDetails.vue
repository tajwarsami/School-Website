<template>
  <div v-if="notice" class="notice-details">
    <h2 class="page-title">{{ notice.title }}</h2>

    <div v-if="notice.pdf" class="pdf-embed">
      <PdfPreview :src="notice.pdf" />
    </div>

    <div class="notice-footer">
      <p class="notice-date"><strong>Date:</strong> {{ formatDate(notice.date) }}</p>
      <a v-if="notice.pdf" :href="notice.pdf" download class="action-btn download-btn">
        Download PDF
      </a>
    </div>
  </div>

  <div v-else class="no-data">
    Notice not found.
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { notices } from '@/data/notices'
import PdfPreview from '@/components/PdfPreview.vue'

const route = useRoute()
const noticeId = Number(route.params.id)

const notice = computed(() =>
  notices.find(n => n.id === noticeId)
)

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
</script>

<style scoped>
.notice-details {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
}

.page-title {
  color: #0d6efd;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
}

.pdf-embed {
  max-width: 100%;
  max-height: 600px;
  overflow: auto;
  margin-bottom: 25px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
}

.notice-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #e9f2ff;
  border-radius: 8px;
  margin-top: 20px;
}

.notice-date {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.action-btn {
  padding: 8px 18px;
  background-color: #0d6efd;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.action-btn:hover {
  background-color: #0b5ed7;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
}

.no-data {
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #777;
}
</style>
