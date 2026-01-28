import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { h } from 'vue'
import Home from './views/Home.vue'
import FrontEndDevPage from './views/portfolio/FrontEndDevPage.vue'
import ScrumMasterPage from './views/portfolio/ScrumMasterPage.vue'
import GameIndustryPage from './views/portfolio/GameIndustryPage.vue'
import ManagerPage from './views/portfolio/ManagerPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'

const LocaleLayout = { render: () => h(RouterView) }

const routes = [
  { path: '/', redirect: '/en' },
  { path: '/portfolio/frontend', redirect: '/en/portfolio/frontend' },
  { path: '/portfolio/scrum', redirect: '/en/portfolio/scrum' },
  { path: '/portfolio/game-industry', redirect: '/en/portfolio/game-industry' },
  { path: '/portfolio/manager', redirect: '/en/portfolio/manager' },
  { path: '/projects', redirect: '/en/projects' },
  {
    path: '/:locale(en|sv)',
    component: LocaleLayout,
    children: [
      { path: '', component: Home },
      { path: 'portfolio/frontend', component: FrontEndDevPage },
      { path: 'portfolio/scrum', component: ScrumMasterPage },
      { path: 'portfolio/game-industry', component: GameIndustryPage },
      { path: 'portfolio/manager', component: ManagerPage },
      { path: 'projects', component: ProjectsPage }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
