<template>
  <footer class="footer">
    <div class="footer-top">
      
      <div class="footer-left">
        <img :src="logo" alt="School Logo" class="logo" />
        <p class="motto">Education is Life</p>
      </div>

      <div class="footer-center">
        <div class="footer-section">
          <h4>External Links</h4>
          <ul>
            <li v-for="link in externalLinks" :key="link.slug">
              <router-link :to="`/content/${link.slug}`">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Results</h4>
          <ul>
            <li v-for="link in resultLinks" :key="link.slug">
              <router-link :to="`/content/${link.slug}`">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-right">
        <p class="school-name"><strong>Cantonment English School & College</strong></p>
        <p>Bayezid Bostami Rd, Chattogram - 4210</p>
        <p>Telephone: Please follow contact page</p>
        <p>Email: <a href="mailto:cescctg05@gmail.com">cescctg05@gmail.com</a></p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p>&copy; 2026 Cantonment English School & College. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import { contents } from '@/data/contents'

const externalLinks = [
  { slug: 'ebook', title: contents['ebook'].title },
  { slug: 'eff-hsc', title: contents['eff-hsc'].title },
  { slug: 'iif-jsc-esif', title: contents['iif-jsc-esif'].title },
  { slug: 'nctb', title: contents['nctb'].title },
  { slug: 'public-library', title: contents['public-library'].title },
  { slug: 'privacy-policy', title: contents['privacy-policy'].title }
]

const resultLinks = [
  { slug: 'result-list', title: contents['result-list'].title },
  { slug: 'result-search', title: contents['result-search'].title },
  { slug: 'ssc-result', title: contents['ssc-result'].title },
  { slug: 'jsc-result', title: contents['jsc-result'].title }
]
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.footer {
  background-color: #0a728a;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  padding: 40px 20px 20px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}

.footer-left {
  flex: 1 1 250px;
  text-align: center;
}

.footer-left .logo {
  height: 100px;
  width: auto;
  margin-bottom: 10px;
}

.motto {
  font-size: 18px;
  font-weight: 500;
  color: #ffdd57;
  margin-top: 5px;
  font-style: italic;
}

.footer-center {
  display: flex;
  flex: 2 1 500px;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: underline;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ffdd57;
}

.footer-right {
  flex: 1 1 250px;
  text-align: center;
}

.footer-right a {
  color: #fff;
  text-decoration: none;
}

.footer-right a:hover {
  color: #ffdd57;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.3);
  padding-top: 20px;
  text-align: center;
}

.social-icons {
  margin-bottom: 10px;
}

.social-icons a {
  color: #fff;
  margin: 0 12px;
  font-size: 20px;
  transition: color 0.3s, transform 0.3s;
}

.social-icons a:hover {
  color: #ffdd57;
  transform: scale(1.2);
}

.footer-bottom p {
  font-size: 14px;
  color: #f0f0f0;
}


@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-center {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-right {
    text-align: center;
  }
}
</style>
