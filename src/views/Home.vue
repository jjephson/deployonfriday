<template>
  <main id="main">
    <section class="hero" aria-labelledby="hero-heading">
      <div class="container">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1 id="hero-heading" class="hero-title">{{ copy.heroTitle }}</h1>
        <p class="hero-subtitle">{{ copy.heroSubtitle }}</p>
        <div class="hero-actions">
          <router-link :to="withLocale('/contact')" class="btn btn-primary">{{ copy.ctaPrimary }}</router-link>
          <router-link :to="withLocale('/accessibility')" class="btn btn-secondary">{{ copy.ctaSecondary }}</router-link>
        </div>
      </div>
    </section>

    <section class="section" :aria-label="copy.statsTitle">
      <div class="container">
        <ul class="stats-row">
          <li v-for="stat in copy.stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="services-heading">
      <div class="container">
        <header class="section-header section-header--wide">
          <p class="section-eyebrow">{{ copy.servicesEyebrow }}</p>
          <h2 id="services-heading" class="section-title">{{ copy.servicesTitle }}</h2>
          <p class="section-desc">{{ copy.servicesDesc }}</p>
        </header>
        <div class="feature-grid">
          <article v-for="feature in copy.features" :key="feature.title" class="feature-card">
            <span class="feature-icon" aria-hidden="true">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="packages-heading">
      <div class="container">
        <header class="section-header">
          <p class="section-eyebrow">{{ copy.packagesEyebrow }}</p>
          <h2 id="packages-heading" class="section-title">{{ copy.packagesTitle }}</h2>
          <p class="section-desc">{{ copy.packagesDesc }}</p>
        </header>
        <div class="pricing-grid">
          <article
            v-for="pkg in copy.packages"
            :key="pkg.name"
            class="pricing-card"
            :class="{ featured: pkg.featured }"
          >
            <span v-if="pkg.badge" class="pricing-badge">{{ pkg.badge }}</span>
            <h3>{{ pkg.name }}</h3>
            <div class="pricing-price">
              <span class="pricing-price-tag">{{ pkg.price.tag }}</span>
              <p class="pricing-price-value" :aria-label="pkg.price.label">
                <template v-if="pkg.price.currencyBefore">
                  <span class="pricing-price-symbol">{{ pkg.price.currency }}</span><span class="pricing-price-amount">{{ pkg.price.amount }}</span>
                </template>
                <template v-else>
                  <span class="pricing-price-amount">{{ pkg.price.amount }}</span><span class="pricing-price-symbol pricing-price-symbol--suffix">{{ pkg.price.currency }}</span>
                </template>
              </p>
            </div>
            <p class="pricing-desc">{{ pkg.desc }}</p>
            <ul class="pricing-list">
              <li v-for="item in pkg.items" :key="item">{{ item }}</li>
            </ul>
            <router-link :to="withLocale('/contact')" class="btn" :class="pkg.featured ? 'btn-accent' : 'btn-secondary'">
              {{ copy.packageCta }}
            </router-link>
          </article>
        </div>

        <aside class="extras-panel" aria-labelledby="extras-heading">
          <div class="extras-header">
            <p class="section-eyebrow">{{ copy.extrasEyebrow }}</p>
            <h3 id="extras-heading" class="extras-title">{{ copy.extrasTitle }}</h3>
            <p class="extras-desc">{{ copy.extrasDesc }}</p>
          </div>
          <ul class="extras-list">
            <li v-for="item in copy.extras" :key="item">
              <span class="extras-item-marker" aria-hidden="true"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="extras-action">
            <router-link :to="withLocale('/contact')" class="btn btn-accent extras-cta">{{ copy.extrasCta }}</router-link>
          </div>
        </aside>
      </div>
    </section>

    <section v-if="showTrustedBySection" class="section" aria-labelledby="clients-heading">
      <div class="container">
        <header class="section-header">
          <p class="section-eyebrow">{{ copy.clientsEyebrow }}</p>
          <h2 id="clients-heading" class="section-title">{{ copy.clientsTitle }}</h2>
          <p class="section-desc">{{ copy.clientsDesc }}</p>
        </header>
        <ClientGrid :aria-label="copy.clientsAria" />
      </div>
    </section>

    <section class="cta-band" aria-labelledby="cta-heading">
      <div class="container">
        <h2 id="cta-heading" class="section-title">{{ copy.ctaTitle }}</h2>
        <p class="section-desc">{{ copy.ctaDesc }}</p>
        <router-link :to="withLocale('/contact')" class="btn btn-primary">{{ copy.ctaPrimary }}</router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Home',
  components: {
    ClientGrid: defineAsyncComponent(() => import('../components/ClientGrid.vue'))
  },
  computed: {
    locale() {
      return this.$route.params.locale === 'sv' ? 'sv' : 'en'
    },
    copy() {
      return this.contentByLocale[this.locale]
    }
  },
  methods: {
    withLocale(path) {
      const base = `/${this.locale}`
      if (!path || path === '/') return base
      return `${base}${path.startsWith('/') ? path : `/${path}`}`
    }
  },
  data() {
    return {
      showTrustedBySection: false,
      contentByLocale: {
        en: {
          eyebrow: 'Accessibility audits & consulting',
          heroTitle: 'Inclusive experiences, by design.',
          heroSubtitle: 'Professional WCAG audits, practical remediation plans, and ongoing accessibility support helping teams create inclusive digital experiences that stand the test of time.',
          ctaPrimary: 'Book an audit',
          ctaSecondary: 'Learn about accessibility',
          statsTitle: 'Key figures',
          stats: [
            { value: '24+', label: 'Enterprise clients' },
            { value: '10+', label: 'Years experience' },
            { value: 'WCAG', label: '2.1 & 2.2 AA' },
            { value: '100%', label: 'Actionable reports' }
          ],
          servicesEyebrow: 'What you get',
          servicesTitle: 'Accessibility expertise that makes a difference.',
          servicesDesc: 'Everything you need to understand accessibility gaps, prioritize fixes, and build inclusive products with clear, actionable guidance your team can put into practice.',
          features: [
            { icon: '◎', title: 'Structured WCAG Audits', desc: 'Manual testing against WCAG 2.1/2.2 AA with keyboard, screen reader, and visual checks across key user journeys.' },
            { icon: '▣', title: 'Prioritized Remediation', desc: 'Issues ranked by user impact and effort, with a clear, actionable plan your team can ship.' },
            { icon: '⬡', title: 'Assistive Tech Testing', desc: 'Real-world validation VoiceOver so findings reflect how users actually experience your product.' },
            { icon: '◈', title: 'Quick Wins', desc: 'High-impact improvements that require relatively little effort.' },
            { icon: '⎋', title: 'Team Walkthrough', desc: 'A guided presentation of the findings, helping designers and developers understand key issues and recommendations.' },
            { icon: '⏱', title: 'Fast Turnaround', desc: 'Clear timelines and deliverables. A focused process that moves quickly from kickoff to actionable insights.' }
          ],
          packagesEyebrow: 'Audit packages',
          packagesTitle: 'Pick the right depth for your product',
          packagesDesc: 'Every package includes a written report, issue prioritization, and a walkthrough call. Custom scopes available on request.',
          packageCta: 'Get started',
          packages: [
            {
              name: 'Small',
              price: { tag: 'EUR', amount: '1,900', currency: '€', currencyBefore: true, label: '€1,900' },
              desc: 'A quick check focused on your most critical user flows ideal before a launch or redesign.',
              items: ['Up to 5 key pages/flows', 'WCAG 2.2 AA checklist', 'Keyboard & screen reader pass', 'Priority issue list', '30-min debrief call'],
              featured: false
            },
            {
              name: 'Medium',
              badge: 'Most popular',
              price: { tag: 'EUR', amount: '4,900', currency: '€', currencyBefore: true, label: '€4,900' },
              desc: 'A bigger audit covering more of your product with the same rigorous testing approach.',
              items: ['Expanded coverage of key pages and flows', 'WCAG 2.2 AA checklist', 'Keyboard & screen reader pass', 'Priority issue list', '60-min debrief call'],
              featured: true
            },
            {
              name: 'Large',
              price: { tag: 'EUR', amount: '6,900', currency: '€', currencyBefore: true, label: '€6,900' },
              desc: 'A full audit for complete coverage suited to EAA compliance or a major release.',
              items: ['Full site or app review', 'WCAG 2.2 AA checklist', 'Keyboard & screen reader pass', 'Priority issue list', '60-min debrief call'],
              featured: false
            }
          ],
          extrasEyebrow: 'Beyond the packages',
          extrasTitle: 'Additional services',
          extrasDesc: 'Need something tailored? I also offer standalone support outside the audit packages.',
          extras: [
            'Acceptance testing',
            'Accessibility statements',
            'Consultation, hourly'
          ],
          extrasCta: 'Discuss your needs',
          clientsEyebrow: 'Trusted by',
          clientsTitle: 'Teams who ship inclusive products',
          clientsDesc: 'I have worked with leading Swedish and international brands across retail, automotive, finance, and media.',
          clientsAria: 'Client company logos',
          ctaTitle: 'Ready to make your product accessible?',
          ctaDesc: 'Every project is different. Tell us about yours, and we will help you build a more inclusive digital experience.'
        },
        sv: {
          eyebrow: 'Tillgänglighetsgranskningar & rådgivning',
          heroTitle: 'Inkluderande upplevelser från grunden.',
          heroSubtitle: 'Professionella WCAG-granskningar, konkreta åtgärdsplaner och löpande stöd inom tillgänglighet som hjälper team att skapa inkluderande digitala upplevelser som håller över tid.',
          ctaPrimary: 'Boka granskning',
          ctaSecondary: 'Läs om tillgänglighet',
          statsTitle: 'Nyckeltal',
          stats: [
            { value: '24+', label: 'Företagskunder' },
            { value: '10+', label: 'Års erfarenhet' },
            { value: 'WCAG', label: '2.1 & 2.2 AA' },
            { value: '100%', label: 'Handlingsbara rapporter' }
          ],
          servicesEyebrow: 'Det du får',
          servicesTitle: 'Expertis inom tillgänglighet som gör skillnad.',
          servicesDesc: 'Allt du behöver för att förstå brister i tillgängligheten, prioritera rätt åtgärder och bygga inkluderande produkter med tydlig och konkret vägledning som ditt team kan omsätta i praktiken.',
          features: [
            { icon: '◎', title: 'Strukturerade WCAG-granskningar', desc: 'Manuell testning mot WCAG 2.1/2.2 AA med tangentbord, skärmläsare och visuella kontroller av viktiga användarflöden.' },
            { icon: '▣', title: 'Prioriterade åtgärder', desc: 'Problem prioriterade efter användarpåverkan och arbetsinsats, med en plan som ditt team kan genomföra.' },
            { icon: '⬡', title: 'Test med hjälpmedel', desc: 'Validering med bland annat, VoiceOver så att fynden speglar hur användare faktiskt upplever produkten.' },
            { icon: '◈', title: 'Snabba vinster', desc: 'Förbättringar med stor effekt som kräver relativt liten insats.' },
            { icon: '⎋', title: 'Genomgång med teamet', desc: 'En guidad presentation av resultaten som hjälper designers och utvecklare att förstå de viktigaste problemen och rekommendationerna.' },
            { icon: '⏱', title: 'Snabb leverans', desc: 'Tydliga tidsramar och leverabler. En effektiv process som snabbt tar dig från uppstart till handlingsbara insikter.' }
          ],
          packagesEyebrow: 'Granskningspaket',
          packagesTitle: 'Välj rätt djup för din produkt',
          packagesDesc: 'Varje paket inkluderar skriftlig rapport, prioritering av problem och ett genomgångssamtal. Anpassade scope på begäran.',
          packageCta: 'Kom igång',
          packages: [
            {
              name: 'Liten',
              price: { tag: 'SEK', amount: '19 000', currency: 'kr', currencyBefore: false, label: '19 000 kr' },
              desc: 'En snabb kontroll fokuserad på era viktigaste användarflöden perfekt före lansering eller redesign.',
              items: ['Upp till 5 viktiga sidor/flöden', 'WCAG 2.2 AA-checklista', 'Tangentbord & skärmläsare', 'Prioriterad problemlista', '30 min genomgång'],
              featured: false
            },
            {
              name: 'Medium',
              badge: 'Populärast',
              price: { tag: 'SEK', amount: '49 000', currency: 'kr', currencyBefore: false, label: '49 000 kr' },
              desc: 'En större granskning som täcker mer av produkten med samma noggranna testning.',
              items: ['Utökad granskning av viktiga sidor och flöden', 'WCAG 2.2 AA-checklista', 'Tangentbord & skärmläsare', 'Prioriterad problemlista', '60 min genomgång'],
              featured: true
            },
            {
              name: 'Stor',
              price: { tag: 'SEK', amount: '69 000', currency: 'kr', currencyBefore: false, label: '69 000 kr' },
              desc: 'En fullständig granskning för heltäckande coverage lämpad för EAA-efterlevnad eller större lansering.',
              items: ['Hela webbplatsen eller appen', 'WCAG 2.2 AA-checklista', 'Tangentbord & skärmläsare', 'Prioriterad problemlista', '60 min genomgång'],
              featured: false
            }
          ],
          extrasEyebrow: 'Utöver paketen',
          extrasTitle: 'Övriga tjänster',
          extrasDesc: 'Behöver ni något mer skräddarsytt? Jag erbjuder även separata tjänster utöver granskningspaketen.',
          extras: [
            'Acceptanstest',
            'Tillgänglighetsdeklarationer',
            'Rådgivning per timme'
          ],
          extrasCta: 'Hör av er',
          clientsEyebrow: 'Förtroende från',
          clientsTitle: 'Team som levererar inkluderande produkter',
          clientsDesc: 'Jag har arbetat med ledande svenska och internationella varumärken inom retail, automotive, finans och media.',
          clientsAria: 'Kundlogotyper',
          ctaTitle: 'Redo att göra er produkt tillgänglig?',
          ctaDesc: 'Alla projekt är olika. Berätta om ert, så hjälper vi er att skapa en mer inkluderande digital upplevelse.'
        }
      }
    }
  }
}
</script>

<style scoped>
.hero {
  padding: 5rem 0 4rem;
  text-align: center;
}

@media (min-width: 768px) {
  .hero {
    padding: 7rem 0 5rem;
  }
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid var(--accent-border-subtle);
  border-radius: 999px;
  background: var(--accent-glow);
}

.hero-title {
  font-size: clamp(2.25rem, 6vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--ink);
  margin-bottom: 1.25rem;
  max-width: 28ch;
  margin-left: auto;
  margin-right: auto;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--ink-dull);
  max-width: 48rem;
  margin: 0 auto 2rem;
  line-height: 1.65;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.section {
  padding: 5rem 0;
  border-top: 1px solid var(--border-subtle);
}

.section-header {
  text-align: center;
  max-width: 40rem;
  margin: 0 auto 3rem;
}

.section-header--wide {
  max-width: 52rem;
}

.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--ink-dull);
  font-size: 1.0625rem;
  line-height: 1.65;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.15s ease;
}

.feature-card:hover {
  border-color: var(--border-hover);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--accent);
}

.feature-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.feature-card p {
  font-size: 0.875rem;
  color: var(--ink-dull);
  line-height: 1.6;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 56rem;
  margin: 0 auto;
  padding-top: 0.875rem;
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
}

.pricing-card.featured {
  border-color: var(--accent-border);
  background: linear-gradient(180deg, var(--accent-subtle) 0%, var(--bg-card) 40%);
}

.pricing-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0.375rem 0.75rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--on-accent-deep);
  background: var(--accent-deep);
  border-radius: 999px;
  white-space: nowrap;
}

.pricing-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.pricing-price {
  margin-bottom: 1rem;
  padding: 0.875rem 0;
}

.pricing-card.featured .pricing-price {
  padding: 0.875rem 1rem;
  background: var(--accent-glow);
  border-radius: var(--radius-lg);
}

.pricing-price-tag {
  display: block;
  margin-bottom: 0.375rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.pricing-price-value {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.125rem;
  margin: 0;
  line-height: 1;
}

.pricing-price-amount {
  font-size: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  color: var(--ink);
}

.pricing-price-symbol {
  font-size: 1.625rem;
  font-weight: 600;
  color: var(--accent);
}

.pricing-price-symbol--suffix {
  margin-left: 0.3rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ink-dull);
}

.pricing-desc {
  font-size: 0.875rem;
  color: var(--ink-dull);
  margin-bottom: 1.25rem;
  flex: 1;
}

.pricing-list {
  list-style: none;
  margin-bottom: 1.5rem;
}

.pricing-list li {
  position: relative;
  padding: 0.375rem 0 0.375rem 1.25rem;
  font-size: 0.8125rem;
  color: var(--ink-dull);
}

.pricing-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.pricing-card .btn {
  width: 100%;
}

.extras-panel {
  position: relative;
  margin-top: 3rem;
  padding: 2.5rem 2rem;
  text-align: center;
  background: linear-gradient(160deg, var(--accent-glow) 0%, var(--bg-card) 45%, var(--bg-card) 100%);
  border: 1px solid var(--accent-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.extras-header {
  max-width: 40rem;
  margin: 0 auto 1.75rem;
}

.extras-title {
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.625rem;
}

.extras-desc {
  font-size: 1rem;
  color: var(--ink-dull);
  line-height: 1.65;
}

.extras-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
  list-style: none;
  text-align: left;
}

@media (min-width: 640px) {
  .extras-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.extras-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.125rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--ink);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}

.extras-item-marker {
  flex-shrink: 0;
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.45rem;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.extras-action {
  display: flex;
  justify-content: center;
}

.extras-cta {
  min-width: 12rem;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 48rem;
  margin: 0 auto;
  list-style: none;
}

@media (min-width: 640px) {
  .stats-row {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  text-align: center;
  padding: 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.stat-value {
  display: block;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--ink-dull);
}

.cta-band {
  padding: 4rem 0;
  text-align: center;
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.cta-band .section-title {
  margin-bottom: 0.75rem;
}

.cta-band .section-desc {
  margin-bottom: 1.5rem;
}
</style>
