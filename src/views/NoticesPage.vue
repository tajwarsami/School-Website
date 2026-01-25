<template>
  <div class="notice-details">
    <h2 class="page-title">Notices - {{ noticeType }}</h2>

    <table class="notice-table">
      <thead>
        <tr>
          <th>SL</th>
          <th>Title</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr
           v-for="(notice, index) in filteredNotices":key="notice.id":class="{ highlight: notice.id === selectedId }">

          <!-- SL -->
          <td>{{ index + 1 }}</td>

          <td class="title-cell">
            {{ extractFileName(notice.pdf) }}
          </td>

          <td>
            <div v-if="notice.pdf" class="pdf-preview">
              <a :href="notice.pdf" target="_blank">
                <PdfPreview :src="notice.pdf" />
              </a>
            </div>
          </td>

          <td class="action-cell">
            <a
              :href="notice.pdf"
              download
              class="action-btn download-btn"
              title="Download PDF"
            >
              Download
            </a>
          </td>
        </tr>

        <tr v-if="filteredNotices.length === 0">
          <td colspan="4" class="no-data">No notices found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { notices } from '@/data/notices'
import PdfPreview from '@/components/PdfPreview.vue'

const route = useRoute()
const noticeType = route.params.type || 'general'
const selectedId = Number(route.query.id)

const filteredNotices = computed(() =>
  notices.filter(n => n.type === noticeType)
)

const extractFileName = (url) => {
  if (!url) return ''
  return decodeURIComponent(url.split('/').pop())
}
</script>

<style scoped>
.notice-details {
  max-width: 1100px;
  margin: auto;
  padding: 30px;
}

.page-title {
  color: #0d6efd;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 600;
}

.notice-table {
  width: 100%;
  border-collapse: collapse;
}

.notice-table th,
.notice-table td {
  border: 1px solid #dcdcdc;
  padding: 10px;
  vertical-align: middle;
}

.notice-table th {
  background: #0d6efd;
  color: #fff;
  font-size: 15px;
}

.notice-table tr:nth-child(even) {
  background: #f8f9fc;
}

.title-cell {
  font-weight: 500;
}

.pdf-preview {
  max-height: 200px;
  overflow: hidden;
}

.action-cell {
  text-align: center;
}

.action-btn {
  font-size: 14px;
  padding: 6px 14px;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background-color: #0d6efd;
  color: #ffffff;
  transition: background 0.3s;
}
.highlight {
  background-color: #e7f1ff !important;
  border-left: 4px solid #0d6efd;
}

.download-btn:hover {
  background-color: #0b5ed7;
}

.no-data {
  text-align: center;
  padding: 20px;
  color: #777;
}
</style>
