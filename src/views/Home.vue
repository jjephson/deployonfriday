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
        <p class="hero-note">{{ copy.heroNote }}</p>
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
        <header class="section-header">
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
            <p class="pricing-desc">{{ pkg.desc }}</p>
            <ul class="pricing-list">
              <li v-for="item in pkg.items" :key="item">{{ item }}</li>
            </ul>
            <router-link :to="withLocale('/contact')" class="btn" :class="pkg.featured ? 'btn-accent' : 'btn-secondary'">
              {{ copy.packageCta }}
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="clients-heading">
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
import ClientGrid from '../components/ClientGrid.vue'

export default {
  name: 'Home',
  components: { ClientGrid },
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
      contentByLocale: {
        en: {
          eyebrow: 'Accessibility audits & consulting',
          heroTitle: 'Ship with confidence.',
          heroSubtitle: 'Professional WCAG audits, remediation plans, and ongoing accessibility support — helping teams build inclusive products that improve with every release.',
          ctaPrimary: 'Book an audit',
          ctaSecondary: 'Learn about accessibility',
          heroNote: 'WCAG 2.2 · EAA · EN 301 549 · Assistive technology testing',
          statsTitle: 'Key figures',
          stats: [
            { value: '24+', label: 'Enterprise clients' },
            { value: '10+', label: 'Years experience' },
            { value: 'WCAG', label: '2.1 & 2.2 AA' },
            { value: '100%', label: 'Actionable reports' }
          ],
          servicesEyebrow: 'What you get',
          servicesTitle: 'Accessibility expertise, zero compromise',
          servicesDesc: 'Everything you need to understand accessibility gaps, prioritize fixes, and build inclusive products — with clear guidance your team can act on.',
          features: [
            { icon: '◎', title: 'Structured WCAG Audits', desc: 'Manual testing against WCAG 2.1/2.2 AA with keyboard, screen reader, and visual checks across key user journeys.' },
            { icon: '▣', title: 'Prioritized Remediation', desc: 'Issues ranked by user impact and effort. No endless spreadsheets — just a plan your team can ship.' },
            { icon: '⬡', title: 'Assistive Tech Testing', desc: 'Real-world validation with NVDA, VoiceOver, and JAWS so findings reflect how users actually experience your product.' },
            { icon: '◈', title: 'Design System Support', desc: 'Accessible component patterns, focus states, and contrast guidance that scales across your product.' },
            { icon: '⎋', title: 'Team Workshops', desc: 'Practical training for designers and developers so accessibility becomes part of everyday delivery.' },
            { icon: '⏱', title: 'Fast Turnaround', desc: 'Clear timelines and deliverables. Most audits completed within two weeks of kickoff.' }
          ],
          packagesEyebrow: 'Audit packages',
          packagesTitle: 'Pick the right depth for your product',
          packagesDesc: 'Every package includes a written report, issue prioritization, and a walkthrough call. Custom scopes available on request.',
          packageCta: 'Get started',
          packages: [
            {
              name: 'Snapshot',
              desc: 'A focused review of your most critical flows — ideal before a launch or redesign.',
              items: ['Up to 5 key pages/flows', 'WCAG 2.2 AA checklist', 'Keyboard & screen reader pass', 'Priority issue list', '30-min debrief call'],
              featured: false
            },
            {
              name: 'Full Audit',
              badge: 'Most popular',
              desc: 'Comprehensive coverage for products preparing for EAA compliance or a major release.',
              items: ['Full site or app review', 'WCAG 2.2 AA + best practices', 'Multi assistive tech testing', 'Detailed remediation plan', '60-min team walkthrough'],
              featured: true
            },
            {
              name: 'Ongoing',
              desc: 'Embedded support for teams building accessibility into their delivery process.',
              items: ['Monthly review cycles', 'PR/design review support', 'Design system guidance', 'Team training sessions', 'Slack or async support'],
              featured: false
            }
          ],
          clientsEyebrow: 'Trusted by',
          clientsTitle: 'Teams who ship inclusive products',
          clientsDesc: 'I have worked with leading Swedish and international brands across retail, automotive, finance, and media.',
          clientsAria: 'Client company logos',
          ctaTitle: 'Ready to make your product accessible?',
          ctaDesc: 'Tell me about your product and timeline. I will respond within two business days.'
        },
        sv: {
          eyebrow: 'Tillgänglighetsgranskningar & rådgivning',
          heroTitle: 'Leverera tryggt.',
          heroSubtitle: 'Professionella WCAG-granskningar, åtgärdsplaner och löpande tillgänglighetsstöd — så att team bygger inkluderande produkter som blir bättre för varje release.',
          ctaPrimary: 'Boka granskning',
          ctaSecondary: 'Läs om tillgänglighet',
          heroNote: 'WCAG 2.2 · EAA · EN 301 549 · Test med hjälpmedel',
          statsTitle: 'Nyckeltal',
          stats: [
            { value: '24+', label: 'Företagskunder' },
            { value: '10+', label: 'Års erfarenhet' },
            { value: 'WCAG', label: '2.1 & 2.2 AA' },
            { value: '100%', label: 'Handlingsbara rapporter' }
          ],
          servicesEyebrow: 'Det du får',
          servicesTitle: 'Tillgänglighetsexpertis, inga kompromisser',
          servicesDesc: 'Allt du behöver för att förstå tillgänglighetsbrister, prioritera åtgärder och bygga inkluderande produkter — med tydlig vägledning som teamet kan agera på.',
          features: [
            { icon: '◎', title: 'Strukturerade WCAG-granskningar', desc: 'Manuell testning mot WCAG 2.1/2.2 AA med tangentbord, skärmläsare och visuella kontroller av viktiga användarflöden.' },
            { icon: '▣', title: 'Prioriterade åtgärder', desc: 'Problem rangordnade efter användarpåverkan och insats. Inga oändliga kalkylblad — bara en plan teamet kan leverera.' },
            { icon: '⬡', title: 'Test med hjälpmedel', desc: 'Validering med NVDA, VoiceOver och JAWS så att fynden speglar hur användare faktiskt upplever produkten.' },
            { icon: '◈', title: 'Stöd i designsystem', desc: 'Tillgängliga komponentmönster, fokustillstånd och kontrastvägledning som skalar över produkten.' },
            { icon: '⎋', title: 'Teamworkshops', desc: 'Praktisk utbildning för designers och utvecklare så att tillgänglighet blir en del av vardagen.' },
            { icon: '⏱', title: 'Snabb leverans', desc: 'Tydliga tidsplaner och leveranser. De flesta granskningar klara inom två veckor efter start.' }
          ],
          packagesEyebrow: 'Granskningspaket',
          packagesTitle: 'Välj rätt djup för din produkt',
          packagesDesc: 'Varje paket inkluderar skriftlig rapport, prioritering av problem och ett genomgångssamtal. Anpassade scope på begäran.',
          packageCta: 'Kom igång',
          packages: [
            {
              name: 'Snapshot',
              desc: 'En fokuserad granskning av dina viktigaste flöden — perfekt före lansering eller redesign.',
              items: ['Upp till 5 sidor/flöden', 'WCAG 2.2 AA-checklista', 'Tangentbord & skärmläsare', 'Prioriterad problemlista', '30 min genomgång'],
              featured: false
            },
            {
              name: 'Full granskning',
              badge: 'Populärast',
              desc: 'Heltäckande granskning för produkter som förbereder EAA-efterlevnad eller större release.',
              items: ['Hela webbplats eller app', 'WCAG 2.2 AA + best practice', 'Test med flera hjälpmedel', 'Detaljerad åtgärdsplan', '60 min teamgenomgång'],
              featured: true
            },
            {
              name: 'Löpande',
              desc: 'Inbäddat stöd för team som bygger in tillgänglighet i sin leveransprocess.',
              items: ['Månatliga granskningscykler', 'Stöd i PR/designreview', 'Designsystemvägledning', 'Teamutbildning', 'Slack eller async-stöd'],
              featured: false
            }
          ],
          clientsEyebrow: 'Förtroende från',
          clientsTitle: 'Team som levererar inkluderande produkter',
          clientsDesc: 'Jag har arbetat med ledande svenska och internationella varumärken inom retail, automotive, finans och media.',
          clientsAria: 'Kundlogotyper',
          ctaTitle: 'Redo att göra er produkt tillgänglig?',
          ctaDesc: 'Berätta om er produkt och tidsplan. Jag svarar inom två arbetsdagar.'
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
  border: 1px solid hsl(43 50% 50% / 0.25);
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
  max-width: 18ch;
  margin-left: auto;
  margin-right: auto;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--ink-dull);
  max-width: 42rem;
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

.hero-note {
  font-size: 0.8125rem;
  color: var(--ink-dull);
  margin-top: 1rem;
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
  border-color: hsl(30 4% 18%);
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
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
}

.pricing-card.featured {
  border-color: hsl(43 50% 50% / 0.4);
  background: linear-gradient(180deg, hsl(43 50% 50% / 0.06) 0%, var(--bg-card) 40%);
}

.pricing-badge {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.pricing-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
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
