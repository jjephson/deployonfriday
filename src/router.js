import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import FrontEndDevPage from './views/portfolio/FrontEndDevPage.vue'
import ScrumMasterPage from './views/portfolio/ScrumMasterPage.vue'
import GameIndustryPage from './views/portfolio/GameIndustryPage.vue'
import ManagerPage from './views/portfolio/ManagerPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio/frontend', component: FrontEndDevPage },
  { path: '/portfolio/scrum', component: ScrumMasterPage },
  { path: '/portfolio/game-industry', component: GameIndustryPage },
  { path: '/portfolio/manager', component: ManagerPage },
  { path: '/projects', component: ProjectsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
