<template>
  <div>
    <a href="#main" class="skip-link">Skip to main content</a>
    <header class="header">
      <nav class="nav" role="navigation" aria-label="Primary site navigation">
        <div class="nav-container">
          <router-link to="/" class="logo" aria-label="Jimmie Jephson - Home">🚀 Jimmie</router-link>
          <div class="nav-actions">
            <ul class="nav-menu" role="menubar">
              <li role="none">
                <router-link to="/" class="nav-link" role="menuitem">Home</router-link>
              </li>
              <li role="none">
                <router-link to="/portfolio/frontend" class="nav-link" role="menuitem">Front End Dev</router-link>
              </li>
              <li role="none">
                <router-link to="/portfolio/scrum" class="nav-link" role="menuitem">Scrum Master</router-link>
              </li>
              <li role="none">
                <router-link to="/portfolio/game-industry" class="nav-link" role="menuitem">Game Industry</router-link>
              </li>
              <li role="none">
                <router-link to="/portfolio/manager" class="nav-link" role="menuitem">Manager</router-link>
              </li>
              <li role="none">
                <router-link to="/projects" class="nav-link" role="menuitem">Projects</router-link>
              </li>
            </ul>
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
  mounted() {
    const savedTheme = localStorage.getItem('theme')
    this.isLight = savedTheme === 'light'
    this.applyTheme()
  },
  methods: {
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
