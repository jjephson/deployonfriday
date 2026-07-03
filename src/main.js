import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initTheme } from './theme'
import './styles.css'

initTheme()

const app = createApp(App).use(router)

router.isReady().then(() => {
  app.mount('#app')

  // Warm route chunks during idle time so later navigations feel instant.
  const prefetchRoutes = () => {
    import('./views/AccessibilityPage.vue')
    import('./views/ContactPage.vue')
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(prefetchRoutes, { timeout: 3000 })
  } else {
    setTimeout(prefetchRoutes, 2000)
  }
})
