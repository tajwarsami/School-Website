<template>
  <div class="pdf-wrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const canvas = ref(null)

const renderPdf = async () => {
  if (!props.src || !canvas.value) return

  const pdf = await pdfjsLib.getDocument(props.src).promise
  const page = await pdf.getPage(1)

  const viewport = page.getViewport({ scale: 0.7 })
  const context = canvas.value.getContext('2d')

  canvas.value.width = viewport.width
  canvas.value.height = viewport.height

  await page.render({
    canvasContext: context,
    viewport
  }).promise
}

onMounted(renderPdf)
watch(() => props.src, renderPdf)
</script>

<style scoped>
.pdf-wrapper {
  background: #f8f9fa;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #cfd4da;
  display: flex;
  justify-content: center;
}

canvas {
  max-width: 100%;
  border-radius: 4px;
}
</style>
