import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { h } from 'vue'
import Home from './views/Home.vue'

const AccessibilityPage = () => import('./views/AccessibilityPage.vue')
const ContactPage = () => import('./views/ContactPage.vue')

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
  routes
})

// No scrollBehavior — vue-router would set history.scrollRestoration = 'manual', which
// blocks back/forward cache. Scroll to top only on forward navigations (links, push).
let fromPopstate = false

function stripLocale(path) {
  const stripped = path.replace(/^\/(en|sv)(?=\/|$)/, '')
  return stripped || '/'
}

window.addEventListener('popstate', () => {
  fromPopstate = true
})

router.afterEach((to, from) => {
  if (fromPopstate) {
    fromPopstate = false
    return
  }

  // Keep scroll position when switching language on the same page.
  if (stripLocale(to.path) === stripLocale(from.path)) return

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  })
})

export default router
