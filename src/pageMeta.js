const titles = {
  en: {
    home: 'Deploy on Friday — Accessibility Audits',
    accessibility: 'Accessibility — Deploy on Friday',
    contact: 'Contact — Deploy on Friday'
  },
  sv: {
    home: 'Deploy on Friday — Tillgänglighetsgranskningar',
    accessibility: 'Tillgänglighet — Deploy on Friday',
    contact: 'Kontakt — Deploy on Friday'
  }
}

function pageKeyFromPath(path) {
  const stripped = path.replace(/^\/(en|sv)(?=\/|$)/, '') || '/'
  if (stripped === '/' || stripped === '') return 'home'
  return stripped.replace(/^\//, '')
}

export function updatePageMeta(route) {
  const locale = route.params.locale === 'sv' ? 'sv' : 'en'
  document.documentElement.lang = locale

  const pageKey = pageKeyFromPath(route.path)
  document.title = titles[locale][pageKey] || titles[locale].home
}
