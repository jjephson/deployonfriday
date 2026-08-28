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
            <div class="control-toggle theme-toggle" role="group" :aria-label="labels.theme">
              <button type="button" class="control-btn" :aria-pressed="theme === 'light'" @click="switchTheme('light')">{{ labels.light }}</button>
              <button type="button" class="control-btn" :aria-pressed="theme === 'dark'" @click="switchTheme('dark')">{{ labels.dark }}</button>
            </div>
            <div class="control-toggle locale-toggle" role="group" :aria-label="labels.language">
              <button type="button" class="control-btn" :aria-pressed="locale === 'en'" @click="switchLocale('en')">EN</button>
              <button type="button" class="control-btn" :aria-pressed="locale === 'sv'" @click="switchLocale('sv')">SV</button>
            </div>
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
          <span>Deploy on Friday Accessibility audits</span>
        </div>
        <ul class="footer-links" :aria-label="labels.footerNav">
          <li>
            <router-link :to="withLocale('/accessibility')">{{ labels.accessibility }}</router-link>
          </li>
          <li>
            <router-link :to="withLocale('/contact')">{{ labels.contact }}</router-link>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/deploy-on-friday/" target="_blank" rel="noopener noreferrer">
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
import { getEffectiveTheme, setTheme } from './theme'
import { updatePageMeta } from './pageMeta'

export default {
  name: 'App',
  data() {
    return {
      mobileOpen: false,
      year: new Date().getFullYear(),
      theme: getEffectiveTheme()
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
            theme: 'Färgtema',
            light: 'Ljust',
            dark: 'Mörkt',
            home: 'Hem',
            accessibility: 'Tillgänglighet',
            contact: 'Kontakt',
            openMenu: 'Öppna meny',
            closeMenu: 'Stäng meny',
            footerNav: 'Sidfotslänkar'
          }
        : {
            skipLink: 'Skip to main content',
            logoAria: 'Deploy on Friday — home',
            navAria: 'Primary navigation',
            language: 'Language',
            theme: 'Color theme',
            light: 'Light',
            dark: 'Dark',
            home: 'Home',
            accessibility: 'Accessibility',
            contact: 'Contact',
            openMenu: 'Open menu',
            closeMenu: 'Close menu',
            footerNav: 'Footer links'
          }
    }
  },
  mounted() {
    this._themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
    this._onSystemThemeChange = (event) => {
      const stored = localStorage.getItem('deployonfriday-theme')
      if (!stored) this.theme = event.matches ? 'dark' : 'light'
    }
    this._themeMedia.addEventListener('change', this._onSystemThemeChange)
  },
  beforeUnmount() {
    if (this._themeMedia && this._onSystemThemeChange) {
      this._themeMedia.removeEventListener('change', this._onSystemThemeChange)
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.mobileOpen = false
        updatePageMeta(route)
      }
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
      this.$router.replace(nextPath)
    },
    switchTheme(target) {
      if (target === this.theme) return
      setTheme(target)
      this.theme = target
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
  transition: transform var(--ease);
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
  background: var(--header-bg);
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
  gap: 0.75rem;
}

.nav-list {
  display: none;
  list-style: none;
  align-items: center;
  gap: 0.375rem;
}

@media (min-width: 768px) {
  .nav-list {
    display: flex;
    padding-right: 1.25rem;
    margin-right: 0.25rem;
    border-right: 1px solid var(--border);
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
  transition: color var(--ease), background var(--ease);
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--ink);
  background: var(--bg-hover);
}

.nav-link.router-link-exact-active {
  color: var(--nav-active-fg);
  background: var(--nav-active-bg);
  font-weight: 600;
  box-shadow: inset 0 0 0 1px var(--nav-active-border);
}

@media (min-width: 768px) {
  .nav-list li:nth-child(1) .nav-link {
    min-width: 3.5rem;
    justify-content: center;
  }

  .nav-list li:nth-child(2) .nav-link {
    min-width: 9.5rem;
    justify-content: center;
  }

  .nav-list li:nth-child(3) .nav-link {
    min-width: 4.75rem;
    justify-content: center;
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
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
