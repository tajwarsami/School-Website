import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Downloads from '../views/Downloads.vue'
import Contact from '../views/Contact.vue'
import Notices from '../components/NoticeBoard.vue'
import AboutDetails from '../views/AboutDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/downloads', component: Downloads },
  { path: '/contact', component: Contact },
  { path: '/notices', component: Notices },
  { path: '/about-details', component: AboutDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
