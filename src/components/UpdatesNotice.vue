<template>
  <div
    class="updates-notice"
    @mouseenter="pauseScroll"
    @mouseleave="startScroll"
  >
    <div
      class="notice-track"
      :style="{ transform: `translateX(${translateX}px)` }"
      ref="track"
    >
      <span
        v-for="notice in repeatedNotices"
        :key="notice.uid"
        class="notice-item"
        @click="goToNotice(notice)"
      >
        {{ notice.title }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { notices } from '@/data/notices'

const router = useRouter()
const track = ref(null)

const speed = 1
const translateX = ref(-1000)
let animationId = null

const recentNotices = computed(() =>
  [...notices]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
)

const repeatedNotices = computed(() =>
  [...recentNotices.value, ...recentNotices.value].map((n, i) => ({
    ...n,
    uid: `${n.id}-${i}`
  }))
)

const goToNotice = (notice) => {
  router.push({
    path: `/notices/${notice.type}`,
    query: { id: notice.id }
  })
}

const startScroll = () => {
  if (animationId) return

  const animate = () => {
    translateX.value += speed

    const trackWidth = track.value.offsetWidth / 2
    if (translateX.value >= 0) {
      translateX.value = -trackWidth
    }

    animationId = requestAnimationFrame(animate)
  }

  animationId = requestAnimationFrame(animate)
}

const pauseScroll = () => {
  cancelAnimationFrame(animationId)
  animationId = null
}

onMounted(startScroll)
onBeforeUnmount(pauseScroll)
</script>

<style scoped>
.updates-notice {
  background-color: #f0f0f0;
  padding: 10px 0;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  max-width: 100%;
}

.notice-track {
  display: inline-flex;
  white-space: nowrap;
  will-change: transform;
}

.notice-item {
  padding: 0 40px;
  font-weight: 600;
  color: #0d6efd;
  cursor: pointer;
  transition: color 0.2s;
}

.notice-item:hover {
  color: #084298;
  text-decoration: underline;
}
</style>
