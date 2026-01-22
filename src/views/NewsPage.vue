<template>
  <div class="news-details">
    <h2 class="page-title">News & Events</h2>

    <table class="news-table">
      <thead>
        <tr>
          <th>SL</th>
          <th>Title</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in newsItems" :key="item.id || index">
          <!-- SL -->
          <td>{{ index + 1 }}</td>

          <!-- Title -->
          <td class="title-cell">{{ item.title }}</td>

          <td>
            <div v-if="item.pdf" class="pdf-preview">
              <a :href="item.pdf" target="_blank">
                <PdfPreview :src="item.pdf" />
              </a>
            </div>
            <span v-else>{{ item.date }}</span>
          </td>

          <td class="action-cell">
            <a
              v-if="item.pdf"
              :href="item.pdf"
              download
              class="action-btn download-btn"
              title="Download PDF"
            >
              Download
            </a>
            <span v-else class="no-action">-</span>
          </td>
        </tr>

        <tr v-if="newsItems.length === 0">
          <td colspan="4" class="no-data">No news available</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import PdfPreview from '@/components/PdfPreview.vue'

const newsItems = [
  { id: 1, title: "Farewell Ceremony", date: "Mar 15, 2026", pdf: "/pdfs/farewell.pdf" },
  { id: 2, title: "Music Competition", date: "Apr 10, 2026", pdf: "/pdfs/Report.pdf" },
  { id: 3, title: "Sports Day", date: "May 5, 2026" },
  { id: 4, title: "Science Fair", date: "Jun 12, 2026", pdf: "/pdfs/science.pdf" },
  { id: 5, title: "Art Exhibition", date: "Jul 20, 2026" },
]
</script>

<style scoped>
.news-details {
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

.news-table {
  width: 100%;
  border-collapse: collapse;
}

.news-table th,
.news-table td {
  border: 1px solid #dcdcdc;
  padding: 10px;
  vertical-align: middle;
}

.news-table th {
  background: #0d6efd;
  color: #fff;
  font-size: 15px;
}

.news-table tr:nth-child(even) {
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

.download-btn:hover {
  background-color: #0b5ed7;
}

.no-data {
  text-align: center;
  padding: 20px;
  color: #777;
}

.no-action {
  color: #999;
}
</style>
