<template>
  <div>
    <header class="page-hero">
      <div class="container">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1 class="hero-title">{{ copy.title }}</h1>
        <p class="hero-subtitle">{{ copy.subtitle }}</p>
        <ul class="pill-row" :aria-label="copy.standardsLabel">
          <li v-for="std in copy.standards" :key="std">{{ std }}</li>
        </ul>
      </div>
    </header>

    <main id="main" class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="prose">
            <p>{{ copy.intro }}</p>

            <h2>{{ copy.whyTitle }}</h2>
            <p>{{ copy.whyText }}</p>
            <ul>
              <li v-for="item in copy.whyItems" :key="item">{{ item }}</li>
            </ul>

            <h2>{{ copy.wcagTitle }}</h2>
            <p>{{ copy.wcagText }}</p>

            <h2>{{ copy.processTitle }}</h2>
            <ol>
              <li v-for="step in copy.processSteps" :key="step.title">
                <strong>{{ step.title }}</strong> — {{ step.desc }}
              </li>
            </ol>

            <h2>{{ copy.statementTitle }}</h2>
            <p>{{ copy.statementText }}</p>
            <p>
              <router-link :to="withLocale('/contact')">{{ copy.statementLink }}</router-link>
            </p>
          </div>

          <aside aria-label="Accessibility topics">
            <div class="info-card">
              <h3>{{ copy.testingTitle }}</h3>
              <ul>
                <li v-for="item in copy.testingItems" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>{{ copy.areasTitle }}</h3>
              <ul>
                <li v-for="item in copy.areasItems" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>{{ copy.toolsTitle }}</h3>
              <ul>
                <li v-for="item in copy.toolsItems" :key="item">{{ item }}</li>
              </ul>
            </div>
          </aside>
        </div>

        <section class="cta-band" aria-labelledby="a11y-cta">
          <h2 id="a11y-cta" class="section-title">{{ copy.ctaTitle }}</h2>
          <p class="section-desc">{{ copy.ctaDesc }}</p>
          <router-link :to="withLocale('/contact')" class="btn btn-primary">{{ copy.ctaButton }}</router-link>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AccessibilityPage',
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
          eyebrow: 'Accessibility',
          title: 'Inclusive by design, not by accident.',
          subtitle: 'Accessibility is not a checkbox — it is how you reach every user, meet legal requirements, and build products that hold up under real-world use.',
          standardsLabel: 'Standards and regulations',
          standards: ['WCAG 2.2 AA', 'EAA', 'EN 301 549', 'Section 508'],
          intro: 'Digital accessibility means your product works for people who use keyboards, screen readers, magnification, voice control, or other assistive technologies. It also means clear language, sufficient contrast, and predictable interaction patterns for everyone.',
          whyTitle: 'Why it matters',
          whyText: 'Beyond the ethical case, accessibility is increasingly a legal requirement in the EU and beyond. The European Accessibility Act (EAA) requires many digital products and services to be accessible by June 2025. Getting ahead of compliance reduces risk and improves experience for all users.',
          whyItems: [
            'Reach more users — roughly 16% of the global population lives with a disability',
            'Reduce legal and reputational risk under EAA and national regulations',
            'Improve SEO, usability, and mobile experience for everyone',
            'Lower support costs through clearer interfaces and error handling'
          ],
          wcagTitle: 'WCAG explained simply',
          wcagText: 'The Web Content Accessibility Guidelines (WCAG) define how to make web content accessible. Level AA is the standard most organizations target and what I test against. The four principles — Perceivable, Operable, Understandable, and Robust — cover everything from color contrast to keyboard navigation to semantic HTML.',
          processTitle: 'How an audit works',
          processSteps: [
            { title: 'Scoping', desc: 'We define key user journeys, target WCAG level, and any regulatory context.' },
            { title: 'Manual testing', desc: 'Keyboard navigation, screen reader testing, visual checks, and code review.' },
            { title: 'Reporting', desc: 'Issues documented with severity, WCAG criterion, and reproduction steps.' },
            { title: 'Walkthrough', desc: 'A call to review findings, answer questions, and plan remediation.' },
            { title: 'Follow-up', desc: 'Optional re-testing after fixes to verify resolution.' }
          ],
          statementTitle: 'This site\'s commitment',
          statementText: 'This website is built to WCAG 2.1 AA standards with semantic HTML, keyboard navigation, visible focus indicators, reduced motion support, and high contrast mode compatibility.',
          statementLink: 'Report an accessibility issue →',
          testingTitle: 'Testing methods',
          testingItems: [
            'Keyboard-only navigation',
            'Screen reader testing (NVDA, VoiceOver, JAWS)',
            'Color contrast analysis',
            'Zoom up to 200%',
            'Mobile and responsive checks',
            'Automated tooling (axe, WAVE) as supplement'
          ],
          areasTitle: 'Common issue areas',
          areasItems: [
            'Missing or poor alt text',
            'Insufficient color contrast',
            'Keyboard traps and focus order',
            'Unlabeled form fields',
            'Non-semantic HTML structure',
            'Inaccessible modals and dialogs',
            'Auto-playing media without controls',
            'PDF and document accessibility'
          ],
          toolsTitle: 'Standards & tools',
          toolsItems: [
            'WCAG 2.1 & 2.2',
            'ARIA Authoring Practices',
            'axe DevTools',
            'NVDA & VoiceOver',
            'Colour Contrast Analyser',
            'WAVE & Lighthouse'
          ],
          ctaTitle: 'Need an accessibility audit?',
          ctaDesc: 'Get a clear picture of where your product stands and what to fix first.',
          ctaButton: 'Book an audit'
        },
        sv: {
          eyebrow: 'Tillgänglighet',
          title: 'Inkluderande by design, inte av en slump.',
          subtitle: 'Tillgänglighet är inte en checkbox — det handlar om att nå alla användare, uppfylla lagkrav och bygga produkter som håller i verklig användning.',
          standardsLabel: 'Standarder och regelverk',
          standards: ['WCAG 2.2 AA', 'EAA', 'EN 301 549', 'Section 508'],
          intro: 'Digital tillgänglighet innebär att produkten fungerar för personer som använder tangentbord, skärmläsare, förstoring, röststyrning eller andra hjälpmedel. Det innebär också tydligt språk, tillräcklig kontrast och förutsägbara interaktionsmönster för alla.',
          whyTitle: 'Varför det spelar roll',
          whyText: 'Utöver det etiska argumentet blir tillgänglighet allt mer ett lagkrav i EU och globalt. European Accessibility Act (EAA) kräver att många digitala produkter och tjänster är tillgängliga. Att ligga steget före minskar risk och förbättrar upplevelsen för alla.',
          whyItems: [
            'Nå fler användare — cirka 16 % av världens befolkning lever med funktionsnedsättning',
            'Minska juridisk och reputationsrisk under EAA och nationella regler',
            'Förbättra SEO, användbarhet och mobilupplevelse för alla',
            'Sänk supportkostnader genom tydligare gränssnitt och felhantering'
          ],
          wcagTitle: 'WCAG enkelt förklarat',
          wcagText: 'Web Content Accessibility Guidelines (WCAG) definierar hur webbinnehåll ska göras tillgängligt. Nivå AA är standarden de flesta organisationer siktar på och det jag testar mot. De fyra principerna — Perceivable, Operable, Understandable och Robust — täcker allt från färgkontrast till tangentbordsnavigering och semantisk HTML.',
          processTitle: 'Så går en granskning till',
          processSteps: [
            { title: 'Avgränsning', desc: 'Vi definierar viktiga användarflöden, WCAG-nivå och eventuellt regelverk.' },
            { title: 'Manuell testning', desc: 'Tangentbordsnavigering, skärmläsartest, visuella kontroller och kodgranskning.' },
            { title: 'Rapportering', desc: 'Problem dokumenteras med allvarlighetsgrad, WCAG-kriterium och reproduktionssteg.' },
            { title: 'Genomgång', desc: 'Ett samtal för att gå igenom fynd, svara på frågor och planera åtgärder.' },
            { title: 'Uppföljning', desc: 'Valfri omtestning efter åtgärder för att verifiera lösning.' }
          ],
          statementTitle: 'Denna webbplats',
          statementText: 'Webbplatsen är byggd enligt WCAG 2.1 AA med semantisk HTML, tangentbordsnavigering, synliga fokusindikatorer, stöd för reduced motion och högkontrastläge.',
          statementLink: 'Rapportera ett tillgänglighetsproblem →',
          testingTitle: 'Testmetoder',
          testingItems: [
            'Enbart tangentbordsnavigering',
            'Skärmläsartest (NVDA, VoiceOver, JAWS)',
            'Färgkontrastanalys',
            'Zoom upp till 200 %',
            'Mobil- och responsivitetstest',
            'Automatiserade verktyg (axe, WAVE) som komplement'
          ],
          areasTitle: 'Vanliga problemområden',
          areasItems: [
            'Saknad eller dålig alt-text',
            'Otillräcklig färgkontrast',
            'Tangentbordsfällor och fokusordning',
            'Oetiketterade formulärfält',
            'Icke-semantisk HTML-struktur',
            'Otillgängliga modaler och dialoger',
            'Autouppspelning utan kontroller',
            'Tillgänglighet i PDF och dokument'
          ],
          toolsTitle: 'Standarder & verktyg',
          toolsItems: [
            'WCAG 2.1 & 2.2',
            'ARIA Authoring Practices',
            'axe DevTools',
            'NVDA & VoiceOver',
            'Colour Contrast Analyser',
            'WAVE & Lighthouse'
          ],
          ctaTitle: 'Behöver ni en tillgänglighetsgranskning?',
          ctaDesc: 'Få en tydlig bild av var er produkt står och vad som bör åtgärdas först.',
          ctaButton: 'Boka granskning'
        }
      }
    }
  }
}
</script>

<style scoped>
.page-hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border-subtle);
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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--ink);
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--ink-dull);
  max-width: 40rem;
  line-height: 1.65;
  font-weight: 400;
}

.page-content {
  padding: 3rem 0 5rem;
}

.content-grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.prose {
  color: var(--ink-dull);
  font-size: 1rem;
  line-height: 1.75;
}

.prose h2 {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--ink);
  margin: 2rem 0 0.75rem;
  letter-spacing: -0.01em;
}

.prose h2:first-child {
  margin-top: 0;
}

.prose p {
  margin-bottom: 1rem;
}

.prose ul,
.prose ol {
  margin: 0 0 1rem 1.25rem;
}

.prose li {
  margin-bottom: 0.375rem;
}

.prose a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.info-card {
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.info-card + .info-card {
  margin-top: 1rem;
}

.info-card h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--ink);
}

.info-card ul {
  list-style: none;
}

.info-card li {
  position: relative;
  padding: 0.375rem 0 0.375rem 1rem;
  font-size: 0.875rem;
  color: var(--ink-dull);
  border-bottom: 1px solid var(--border-subtle);
}

.info-card li:last-child {
  border-bottom: none;
}

.info-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 0;
  list-style: none;
}

.pill-row li {
  display: inline-flex;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: var(--font-mono);
  color: var(--ink-dull);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.cta-band {
  margin-top: 3rem;
  padding: 4rem 0;
  text-align: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
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
  margin-bottom: 1.5rem;
}
</style>
