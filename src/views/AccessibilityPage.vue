<template>
  <div>
    <header class="page-hero">
      <div class="container">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1 id="page-heading" class="hero-title">{{ copy.title }}</h1>
        <p class="hero-subtitle">{{ copy.subtitle }}</p>
        <div class="pill-row" role="list" :aria-label="copy.standardsLabel">
          <span v-for="std in copy.standards" :key="std" class="pill" role="listitem">{{ std }}</span>
        </div>
      </div>
    </header>

    <main id="main" class="page-content">
      <div class="container">
        <div class="content-grid two-col">
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
            <div class="info-card" style="margin-bottom: 1rem;">
              <h3>{{ copy.testingTitle }}</h3>
              <ul>
                <li v-for="item in copy.testingItems" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="info-card" style="margin-bottom: 1rem;">
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

        <section class="cta-band" style="margin-top: 3rem; border-radius: var(--radius-xl);" aria-labelledby="a11y-cta">
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
