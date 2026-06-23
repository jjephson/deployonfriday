import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { h } from 'vue'
import Home from './views/Home.vue'
import AccessibilityPage from './views/AccessibilityPage.vue'
import ContactPage from './views/ContactPage.vue'

const LocaleLayout = { render: () => h(RouterView) }

const routes = [
  { path: '/', redirect: '/en' },
  { path: '/accessibility', redirect: '/en/accessibility' },
  { path: '/contact', redirect: '/en/contact' },
  // Legacy redirects
  { path: '/portfolio/frontend', redirect: '/en' },
  { path: '/portfolio/scrum', redirect: '/en' },
  { path: '/portfolio/game-industry', redirect: '/en' },
  { path: '/portfolio/manager', redirect: '/en/accessibility' },
  { path: '/portfolio/accessibility', redirect: '/en/accessibility' },
  { path: '/projects', redirect: '/en' },
  {
    path: '/:locale(en|sv)',
    component: LocaleLayout,
    children: [
      { path: '', component: Home },
      { path: 'accessibility', component: AccessibilityPage },
      { path: 'contact', component: ContactPage },
      // Legacy locale redirects
      { path: 'portfolio/frontend', redirect: { path: '' } },
      { path: 'portfolio/scrum', redirect: { path: '' } },
      { path: 'portfolio/game-industry', redirect: { path: '' } },
      { path: 'portfolio/manager', redirect: { path: 'accessibility' } },
      { path: 'portfolio/accessibility', redirect: { path: 'accessibility' } },
      { path: 'projects', redirect: { path: '' } }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
