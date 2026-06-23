<template>
  <div>
    <a href="#main" class="skip-link">{{ labels.skipLink }}</a>

    <header class="site-header">
      <div class="container site-header-inner">
        <router-link :to="withLocale('/')" class="logo-link" :aria-label="labels.logoAria">
          <img src="/images/logo.svg" alt="" width="40" height="40">
          <span class="logo-text">Deploy on Friday</span>
        </router-link>

        <nav class="site-nav" :aria-label="labels.navAria">
          <ul class="nav-list">
            <li>
              <router-link :to="withLocale('/')" class="nav-link">{{ labels.home }}</router-link>
            </li>
            <li>
              <router-link :to="withLocale('/accessibility')" class="nav-link">{{ labels.accessibility }}</router-link>
            </li>
            <li>
              <router-link :to="withLocale('/contact')" class="nav-link">{{ labels.contact }}</router-link>
            </li>
          </ul>

          <div class="nav-actions">
            <div class="locale-toggle" role="group" :aria-label="labels.language">
              <button type="button" class="locale-btn" :aria-pressed="locale === 'en'" @click="switchLocale('en')">EN</button>
              <button type="button" class="locale-btn" :aria-pressed="locale === 'sv'" @click="switchLocale('sv')">SV</button>
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
        <ul class="footer-links">
          <li>
            <router-link :to="withLocale('/accessibility')">{{ labels.accessibility }}</router-link>
          </li>
          <li>
            <router-link :to="withLocale('/contact')">{{ labels.contact }}</router-link>
          </li>
          <li>
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
.skip-link {
  position: absolute;
  top: 0;
  left: 0.75rem;
  z-index: 200;
  padding: 0.625rem 1rem;
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  border-radius: 0 0 var(--radius) var(--radius);
  text-decoration: none;
  transform: translateY(-120%);
  transition: transform 0.15s ease;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  border-bottom: 1px solid var(--border);
  background: hsl(30 4% 4% / 0.85);
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
}

.site-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--ink);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  min-height: 44px;
}

.logo-link:hover,
.logo-link:focus-visible {
  color: var(--ink);
}

.logo-link img {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
}

.logo-text {
  display: none;
}

@media (min-width: 480px) {
  .logo-text {
    display: inline;
  }
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-list {
  display: none;
  list-style: none;
  align-items: center;
  gap: 0.125rem;
}

@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }
}

.nav-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.5rem 0.875rem;
  color: var(--ink-dull);
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius);
  text-decoration: none;
  transition: color 0.15s ease, background 0.15s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--ink);
  background: var(--bg-hover);
}

.nav-link.router-link-active {
  color: var(--ink);
  background: var(--bg-elevated);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.locale-toggle {
  display: inline-flex;
  gap: 2px;
  padding: 2px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.locale-btn {
  min-height: 32px;
  min-width: 32px;
  padding: 0.25rem 0.5rem;
  border: none;
  background: transparent;
  color: var(--ink-dull);
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border-radius: calc(var(--radius) - 3px);
}

.locale-btn:hover,
.locale-btn:focus-visible {
  color: var(--ink);
  background: var(--bg-hover);
}

.locale-btn[aria-pressed="true"] {
  background: var(--bg-elevated);
  color: var(--ink);
}

.locale-btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 0;
  position: relative;
  z-index: 1;
}

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

.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--ink);
  cursor: pointer;
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.5rem 1.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg-card);
}

.mobile-nav .nav-link {
  width: 100%;
}

.site-footer {
  margin-top: auto;
  padding: 2.5rem 0;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--ink-dull);
  font-size: 0.875rem;
}

.footer-brand img {
  width: 1.5rem;
  height: 1.5rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  list-style: none;
}

.footer-links a {
  font-size: 0.8125rem;
  color: var(--ink-dull);
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.footer-links a:hover,
.footer-links a:focus-visible {
  color: var(--ink);
}

.footer-copy {
  font-size: 0.75rem;
  color: var(--ink-dull);
}
</style>
