<template>
  <PageLoader />

  <Header />
  <HeaderBanner />
  <router-view />
  <FooterSection />
</template>

<script setup>
import Header from '@/components/Header.vue'
import HeaderBanner from '@/components/HeaderBanner.vue'
import FooterSection from '@/components/FooterSection.vue'
import PageLoader from '@/components/PageLoader.vue'
</script>
