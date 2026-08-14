const STORAGE_KEY = 'deployonfriday-theme'

const THEME_COLORS = {
  dark: '#1f2023',
  light: '#f3f4f6'
}

export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getStoredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

export function getEffectiveTheme() {
  return getStoredTheme() ?? getSystemTheme()
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.content = THEME_COLORS[theme]
}

export function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return
  localStorage.setItem(STORAGE_KEY, theme)
  applyTheme(theme)
}

export function initTheme() {
  applyTheme(getEffectiveTheme())

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!getStoredTheme()) {
      applyTheme(event.matches ? 'dark' : 'light')
    }
  })
}
