<template>
  <div>
    <a href="#main" class="skip-link">Skip to main content</a>
    <header class="header">
      <nav class="nav" role="navigation" aria-label="Primary site navigation">
        <div class="nav-container">
          <router-link :to="withLocale('/')" class="logo" aria-label="Jimmie Jephson - Home">Deploy on Friday?</router-link>
          <div class="nav-actions">
            <ul class="nav-menu" role="menubar">
              <li role="none">
                <router-link :to="withLocale('/portfolio/frontend')" class="nav-link" role="menuitem">{{ labels.frontend }}</router-link>
              </li>
              <li role="none">
                <router-link :to="withLocale('/portfolio/scrum')" class="nav-link" role="menuitem">{{ labels.scrum }}</router-link>
              </li>
              <li role="none">
                <router-link :to="withLocale('/portfolio/game-industry')" class="nav-link" role="menuitem">{{ labels.game }}</router-link>
              </li>
              <li role="none">
                <router-link :to="withLocale('/portfolio/manager')" class="nav-link" role="menuitem">{{ labels.manager }}</router-link>
              </li>
              <li role="none">
                <router-link :to="withLocale('/projects')" class="nav-link" role="menuitem">{{ labels.projects }}</router-link>
              </li>
            </ul>
            <div class="locale-toggle" role="group" aria-label="Language">
              <button type="button" :aria-pressed="locale === 'en'" @click="switchLocale('en')">EN</button>
              <button type="button" :aria-pressed="locale === 'sv'" @click="switchLocale('sv')">SV</button>
            </div>
            <button
              class="theme-toggle"
              type="button"
              :aria-pressed="isLight"
              @click="toggleTheme"
            >
              {{ isLight ? 'Dark mode' : 'Light mode' }}
            </button>
          </div>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 deployonfriday.dev. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLight: false
    }
  },
  computed: {
    locale() {
      return this.$route.params.locale === 'sv' ? 'sv' : 'en'
    },
    labels() {
      return this.locale === 'sv'
        ? {
            home: 'Hem',
            frontend: 'Front End',
            scrum: 'Scrum Master',
            game: 'Spelbranschen',
            manager: 'Chef',
            projects: 'Projekt'
          }
        : {
            home: 'Home',
            frontend: 'Front End Dev',
            scrum: 'Scrum Master',
            game: 'Game Industry',
            manager: 'Manager',
            projects: 'Projects'
          }
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme')
    this.isLight = savedTheme === 'light'
    this.applyTheme()
  },
  methods: {
    withLocale(path) {
      const base = `/${this.locale}`
      if (!path || path === '/') {
        return base
      }
      return `${base}${path.startsWith('/') ? path : `/${path}`}`
    },
    switchLocale(target) {
      if (target === this.locale) {
        return
      }
      const currentPath = this.$route.path
      const nextPath = currentPath.match(/^\/(en|sv)(\/|$)/)
        ? currentPath.replace(/^\/(en|sv)/, `/${target}`)
        : `/${target}`
      this.$router.push(nextPath)
    },
    toggleTheme() {
      this.isLight = !this.isLight
      this.applyTheme()
      localStorage.setItem('theme', this.isLight ? 'light' : 'dark')
    },
    applyTheme() {
      document.body.classList.toggle('theme-light', this.isLight)
      document.body.classList.toggle('theme-dark', !this.isLight)
    }
  }
}
</script>
