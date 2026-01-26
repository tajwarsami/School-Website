<template>
  <div class="pdf-wrapper">
    <canvas
      v-for="pageIndex in numPages"
      :ref="el => canvasRefs[pageIndex - 1] = el"
      :key="pageIndex"
    ></canvas>
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

const canvasRefs = []
const numPages = ref(0)

const renderPdf = async () => {
  if (!props.src) return

  const pdf = await pdfjsLib.getDocument(props.src).promise
  numPages.value = pdf.numPages

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const viewport = page.getViewport({ scale: 0.7 })

    const canvas = canvasRefs[i - 1]
    if (!canvas) continue

    const context = canvas.getContext('2d')
    canvas.width = viewport.width
    canvas.height = viewport.height

    await page.render({ canvasContext: context, viewport }).promise
  }
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
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-height: 400px;
  overflow-y: auto; /* scroll if PDF is long */
}

canvas {
  max-width: 100%;
  border-radius: 4px;
}
</style>
