<template>
  <header ref="headerRef">
    <div class="top-bar">
      <div class="left">{{ currentDateTime }}</div>

      <div class="right">
        <div class="login-dropdown">
          <span class="login-btn">Login ▼</span>
          <ul class="login-menu">
            <li>
              <a href="https://live.academyims.com/Student_Portal" target="_blank">
                Student Portal
              </a>
            </li>
            <li>
              <a href="https://live.academyims.com/" target="_blank">
                Academic Portal
              </a>
            </li>
          </ul>
        </div>

        <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <div class="main-header">
      <div class="logo-area">
        <img :src="logo" />
        <h1>Cantonment English School & College</h1>
      </div>

      <div class="hamburger" @click="toggleMobileMenu">
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
      </div>

      <nav class="menu" :class="{ 'mobile-open': mobileMenuOpen }">
        <router-link to="/" :class="{ active: isActive('/') }">Home</router-link>

        <div
          v-for="menu in menus"
          :key="menu.name"
          class="dropdown"
          @mouseenter="isDesktop && openDropdown(menu.name)"
          @mouseleave="isDesktop && closeDropdown(menu.name)"
        >
          <span
            class="dropbtn"
            :class="{ active: isMenuRouteActive(menu.name) || openMenus[menu.name] }"
            @click="!isDesktop && toggleMobileDropdown(menu.name)"
          >
            {{ menu.name }}
            <span class="arrow" :class="{ rotated: openMenus[menu.name] }">▼</span>
          </span>

          <ul v-show="openMenus[menu.name]" class="dropdown-content">
            <li v-for="item in menu.items" :key="item.link || item.name">
              <a
                v-if="item.external"
                :href="item.link"
                target="_blank"
                @click="!isDesktop && closeMobileMenu()"
              >
                {{ item.name }}
              </a>
              <router-link
                v-else
                :to="item.link"
                :class="{ active: isActive(item.link) }"
                @click="!isDesktop && closeMobileMenu()"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <router-link
          to="/downloads"
          :class="{ active: isActive('/downloads') }"
          @click="!isDesktop && closeMobileMenu()"
        >
          Downloads
        </router-link>
        <router-link
          to="/contact"
          :class="{ active: isActive('/contact') }"
          @click="!isDesktop && closeMobileMenu()"
        >
          Contact
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/images/logo.png'

const route = useRoute()

const menus = [
  {
    name: 'Management',
    items: [
      { name: 'Chief Patron Message', link: '/content/chief-patron-message' },
      { name: 'Chairman Message', link: '/content/chairman-message' },
      { name: 'Principal Message', link: '/content/principal-message' },
      { name: 'Managing Committee', link: '/content/managing-committee' },
      { name: 'Sub Committee', link: '/content/sub-committee' },
      { name: 'Mission & Vision', link: '/content/mission-vision' }
    ]
  },
  {
    name: 'Academic',
    items: [
      { name: 'Syllabus', link: '/content/syllabus' },
      { name: 'Dress Code', link: '/content/dress-code' }
    ]
  },
  {
    name: 'Admission',
    items: [
      { name: 'Tuition Fee', link: '/content/tuition-fee' },
      { name: 'How to Apply', link: '/content/how-to-apply' },
      { name: 'Apply Online', link: '/content/apply-online' }
    ]
  },
  {
    name: 'Careers',
    items: [
      { name: 'Job Vacancies', link: '/content/job-vacancies' },
      { name: 'Submit Resume', link: '/content/submit-resume' }
    ]
  },
  {
    name: 'Payment Procedure',
    items: [
      { name: 'Fees Payment', link: 'https://live.academyims.com/Student_Portal', external: true },
      { name: 'Fees Payment v2', link: 'https://pay.academyims.com/auth/login', external: true }
    ]
  }
]

const openMenus = reactive(Object.fromEntries(menus.map(m => [m.name, false])))
const mobileMenuOpen = ref(false)
const headerRef = ref(null)

const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
const toggleMobileDropdown = name => {
  Object.keys(openMenus).forEach(menu => {
    openMenus[menu] = menu === name ? !openMenus[menu] : false
  })
}

const openDropdown = name => (openMenus[name] = true)
const closeDropdown = name => (openMenus[name] = false)
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  Object.keys(openMenus).forEach(menu => (openMenus[menu] = false))
}

const isActive = link => route.path === link
const isMenuRouteActive = menuName => {
  const menu = menus.find(m => m.name === menuName)
  return menu?.items.some(item => !item.external && item.link === route.path)
}

const windowWidth = ref(window.innerWidth)
const updateWidth = () => (windowWidth.value = window.innerWidth)
onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))

const isDesktop = computed(() => windowWidth.value > 768)

watch(
  () => route.path,
  () => {
    closeMobileMenu()
  }
)

const currentDateTime = ref('')
let timer = null
const updateDateTime = () => {
  const now = new Date()
  currentDateTime.value = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

onMounted(() => {
  updateDateTime()
  timer = setInterval(updateDateTime, 1000)
  if (headerRef.value) {
    const headerHeight = headerRef.value.offsetHeight
    document.body.style.paddingTop = headerHeight + 'px'
  }
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
* {
  box-sizing: border-box;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3000;
}

.top-bar {
  background: #003f4f;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  font-size: 20px;
}

.top-bar .right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.top-bar a {
  color: white;
  text-decoration: none;
}

.login-dropdown {
  position: relative;
}

.login-btn {
  cursor: pointer;
  font-weight: 500;
}

.login-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  min-width: 180px;
  display: none;
  z-index: 2000;
}

.login-menu li a {
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
}

.login-menu li a:hover {
  background: #f2f2f2;
  color: #0a728a;
}

.login-dropdown:hover .login-menu {
  display: block;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: white;
  border-bottom: 1px solid #ddd;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
}

.logo-area img {
  width: 80px;
}

.logo-area h1 {
  font-size: 24px;
  margin: 0;
  font-weight: 700;
  color: #003f4f;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  z-index: 1500;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #333;
  transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu {
  display: flex;
  gap: 2px;
  align-items: center;
}

.menu > *, .dropbtn {
  padding: 6px 8px;
  border-radius: 6px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s;
}

.menu > *.active, .menu > *:hover,
.dropbtn.active, .dropbtn:hover {
  background: #0a728a;
  color: white;
}

.menu > *,
.dropbtn {
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.dropdown {
  position: relative;
}

.dropbtn {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropbtn .arrow {
  margin-left: 4px;
  font-size: 12px;
  display: inline-block;
  transition: transform 0.3s;
}

.dropbtn .arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  min-width: 160px;
  z-index: 1000;
}

.dropdown-content li a {
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
}

.dropdown-content li a:hover {
  background: #0a728a;
  color: white;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 70px;
    background: white;
    width: 220px;
    border: 1px solid #ddd;
    z-index: 1000;
    gap: 0;
  }

  .menu.mobile-open {
    display: flex;
    animation: slideDown 0.3s ease;
  }

  .dropdown-content {
    position: relative;
    border: none;
    background: #f9f9f9;
  }

  .dropbtn .arrow {
    margin-left: 6px;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
}
</style>
