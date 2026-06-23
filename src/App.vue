<template>
  <div id="app-root">
    <a href="#main" class="skip-link">{{ labels.skipLink }}</a>

    <header class="site-header">
      <div class="container site-header-inner">
        <router-link :to="withLocale('/')" class="logo-link" :aria-label="labels.logoAria">
          <img src="/images/logo.svg" alt="" width="32" height="32">
          <span class="logo-text">Deploy on Friday</span>
        </router-link>

        <nav class="site-nav" :aria-label="labels.navAria">
          <ul class="nav-list" role="list">
            <li role="none">
              <router-link :to="withLocale('/')" class="nav-link" role="menuitem">{{ labels.home }}</router-link>
            </li>
            <li role="none">
              <router-link :to="withLocale('/accessibility')" class="nav-link" role="menuitem">{{ labels.accessibility }}</router-link>
            </li>
            <li role="none">
              <router-link :to="withLocale('/contact')" class="nav-link" role="menuitem">{{ labels.contact }}</router-link>
            </li>
          </ul>

          <div class="nav-actions">
            <div class="locale-toggle" role="group" :aria-label="labels.language">
              <button type="button" :aria-pressed="locale === 'en'" @click="switchLocale('en')">EN</button>
              <button type="button" :aria-pressed="locale === 'sv'" @click="switchLocale('sv')">SV</button>
            </div>
            <router-link :to="withLocale('/contact')" class="btn btn-primary nav-cta">{{ labels.cta }}</router-link>
            <button
              type="button"
              class="mobile-menu-btn"
              :aria-expanded="mobileOpen"
              :aria-controls="mobileOpen ? 'mobile-nav' : undefined"
              :aria-label="mobileOpen ? labels.closeMenu : labels.openMenu"
              @click="mobileOpen = !mobileOpen"
            >
              {{ mobileOpen ? '✕' : '☰' }}
            </button>
          </div>
        </nav>
      </div>

      <nav v-if="mobileOpen" id="mobile-nav" class="mobile-nav" :aria-label="labels.navAria">
        <router-link :to="withLocale('/')" class="nav-link" @click="mobileOpen = false">{{ labels.home }}</router-link>
        <router-link :to="withLocale('/accessibility')" class="nav-link" @click="mobileOpen = false">{{ labels.accessibility }}</router-link>
        <router-link :to="withLocale('/contact')" class="nav-link" @click="mobileOpen = false">{{ labels.contact }}</router-link>
      </nav>
    </header>

    <router-view></router-view>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <img src="/images/logo.svg" alt="" width="24" height="24">
          <span>Deploy on Friday — Accessibility audits</span>
        </div>
        <ul class="footer-links" role="list">
          <li role="none">
            <router-link :to="withLocale('/accessibility')">{{ labels.accessibility }}</router-link>
          </li>
          <li role="none">
            <router-link :to="withLocale('/contact')">{{ labels.contact }}</router-link>
          </li>
          <li role="none">
            <a href="https://linkedin.com/in/jimmiejephson" target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span class="visually-hidden"> (opens in new tab)</span>
            </a>
          </li>
        </ul>
        <p class="footer-copy">&copy; {{ year }} deployonfriday.dev</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileOpen: false,
      year: new Date().getFullYear()
    }
  },
  computed: {
    locale() {
      return this.$route.params.locale === 'sv' ? 'sv' : 'en'
    },
    labels() {
      return this.locale === 'sv'
        ? {
            skipLink: 'Hoppa till huvudinnehåll',
            logoAria: 'Deploy on Friday — startsida',
            navAria: 'Primär navigering',
            language: 'Språk',
            home: 'Hem',
            accessibility: 'Tillgänglighet',
            contact: 'Kontakt',
            cta: 'Boka granskning',
            openMenu: 'Öppna meny',
            closeMenu: 'Stäng meny'
          }
        : {
            skipLink: 'Skip to main content',
            logoAria: 'Deploy on Friday — home',
            navAria: 'Primary navigation',
            language: 'Language',
            home: 'Home',
            accessibility: 'Accessibility',
            contact: 'Contact',
            cta: 'Book audit',
            openMenu: 'Open menu',
            closeMenu: 'Close menu'
          }
    }
  },
  watch: {
    $route() {
      this.mobileOpen = false
    }
  },
  methods: {
    withLocale(path) {
      const base = `/${this.locale}`
      if (!path || path === '/') return base
      return `${base}${path.startsWith('/') ? path : `/${path}`}`
    },
    switchLocale(target) {
      if (target === this.locale) return
      const currentPath = this.$route.path
      const nextPath = currentPath.match(/^\/(en|sv)(\/|$)/)
        ? currentPath.replace(/^\/(en|sv)/, `/${target}`)
        : `/${target}`
      this.$router.push(nextPath)
    }
  }
}
</script>

<style scoped>
.nav-cta {
  display: none;
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
}

@media (min-width: 768px) {
  .nav-cta {
    display: inline-flex;
  }
}
</style>
