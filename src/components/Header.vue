<template>
  <div>
    <div class="top-bar">
      <div class="left">
        Please follow contact page |
        <a href="mailto:cescctg05@gmail.com">E-mail: cescctg05@gmail.com</a>
      </div>
      <div class="right">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-x-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <header class="main-header">
      <div class="logo-area">
        <img :src="logo" />
        <h2>Cantonment English School & College</h2>
      </div>

      <nav class="menu">
        <router-link to="/">Home</router-link>

        <div
          v-for="menu in menus"
          :key="menu.name"
          class="dropdown"
          @mouseenter="openDropdown(menu.name)"
          @mouseleave="closeDropdown(menu.name)"
        >
          <span
            class="dropbtn"
            :class="{ active: isOpen(menu.name) }"
            @click="toggleDropdown(menu.name)"
          >
            {{ menu.name }}
            <span class="arrow">{{ isOpen(menu.name) ? '▲' : '▼' }}</span>
          </span>
          <ul v-if="menu.items" class="dropdown-content" v-show="isOpen(menu.name)">
            <li v-for="item in menu.items" :key="item.name">
              <router-link :to="item.link">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <router-link to="/downloads">Downloads</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import logo from '@/assets/images/logo.png'

const menus = [
  {
    name: 'Management',
    items: [
      { name: 'Chief Patron Message', link: '/management/chief-patron' },
      { name: 'Chairman Message', link: '/management/chairman' },
      { name: 'Principal Message', link: '/management/principal' },
      { name: 'Managing Committee', link: '/management/managing-committee' },
      { name: 'Sub Committee', link: '/management/sub-committee' },
      { name: 'Mission & Vision', link: '/management/mission-vision' },
    ],
  },
  {
    name: 'Academic',
    items: [
      { name: 'Syllabus', link: '/academic/syllabus' },
      { name: 'Dress Code', link: '/academic/dress-code' },
    ],
  },
  {
    name: 'Admission',
    items: [
      { name: 'Tuition Fee', link: '/admission/tuition-fee' },
      { name: 'How to Apply', link: '/admission/how-to-apply' },
      { name: 'Apply Online', link: '/admission/apply-online' },
    ],
  },
  {
    name: 'Careers',
    items: [
      { name: 'Job Vacancies', link: '/careers/job-vacancies' },
      { name: 'Submit Resume', link: '/careers/submit-resume' },
    ],
  },
]


const openMenus = reactive({})

const toggleDropdown = (name) => {
  openMenus[name] = !openMenus[name]
}

const openDropdown = (name) => {
  openMenus[name] = true
}

const closeDropdown = (name) => {
  openMenus[name] = false
}

const isOpen = (name) => !!openMenus[name]
</script>

<style scoped>
.top-bar {
  background: #003f4f;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 6px 40px;
  font-size: 14px;
}

.top-bar a {
  color: white;
  text-decoration: none;
  margin-left: 12px;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: white;
  border-bottom: 1px solid #ddd;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-area img {
  width: 60px;
}

.menu {
  display: flex;
  gap: 20px;
  align-items: center;
}

.dropdown {
  position: relative;
}

.dropbtn {
  cursor: pointer;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
}

.dropbtn.active {
  color: #0a728a;
}

.dropbtn .arrow {
  margin-left: 4px;
}

.dropdown-content {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  min-width: 180px;
  border: 1px solid #ddd;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  z-index: 1000;
}

.dropdown-content[style*="display: none"] {
  display: none !important;
}

.dropdown-content li {
  padding: 10px 15px;
}

.dropdown-content li:hover {
  background-color: #f2f2f2;
}

.dropdown-content li a {
  text-decoration: none;
  color: #333;
  display: block;
}

.dropdown-content li a:hover {
  color: #0a728a;
}
.menu > * {
  cursor: pointer;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.menu > *:hover,
.menu > *.active {
  color: #0a728a;
}
.dropbtn .arrow {
  margin-left: 4px;
}

</style>
