import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Downloads from '../views/Downloads.vue'
import Contact from '../views/Contact.vue'
import NoticeBoard from '../components/NoticeBoard.vue'
import AboutDetails from '../views/AboutDetails.vue'
import NoticesPage from '../views/NoticesPage.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/downloads', component: Downloads },
  { path: '/contact', component: Contact },
  { path: '/notices', component: NoticeBoard }, // main notice board
  { path: '/notices/:type', component: NoticesPage, props: true }, // dynamic page
  { path: '/about-details', component: AboutDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
