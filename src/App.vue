<template>
  <Header />
  <router-view />
  <FooterSection />
</template>

<script setup>
import Header from '@/components/Header.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
