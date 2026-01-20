<template>
  <footer class="footer">
    <div class="footer-left">
      <img :src="logo" alt="School Logo" class="logo" />
    </div>

    <div class="footer-right">
      <p class="school-name"><strong>Cantonment English School & College</strong></p>
      <p>Email: cescctg05@gmail.com</p>
      <p>Phone: +880-XXXXXXXXX</p>
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
</script>
<style scoped>
.footer {
  background-color: #0a728a;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  flex-wrap: wrap;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
.footer-left .logo {
  height: 50px;
  width: auto;
}

.footer-right {
  text-align: right;
}
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 10px;
  }

  .footer-right {
    text-align: center;
  }
}
</style>
