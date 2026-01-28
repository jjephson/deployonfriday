<template>
  <PortfolioPage
    :title="page.title"
    :subtitle="page.subtitle"
    :content="page.content"
    :blocks="page.blocks"
  />
</template>

<script>
import PortfolioPage from '../../components/PortfolioPage.vue'

export default {
  name: 'ManagerPage',
  components: {
    PortfolioPage
  },
  data() {
    return {
      contentByLocale: {
        en: {
          title: 'Accessibility Specialist',
          subtitle: 'Ensuring inclusive experiences that work for everyone',
          content: '<p>As an Accessibility Specialist, I help teams build digital products that meet WCAG standards and provide an inclusive experience for all users. I focus on practical improvements that balance user needs, design goals, and engineering constraints.</p><p>My work spans audits, remediation guidance, and hands-on collaboration with designers and developers. I translate accessibility requirements into clear, actionable steps that teams can implement quickly.</p><p>I also support long-term improvements through training, documentation, and design-system alignment so accessibility becomes a natural part of delivery.</p>',
          blocks: [
            {
              title: 'Accessibility Audits',
              content: 'Structured reviews and practical recommendations',
              items: [
                'WCAG 2.1/2.2 assessments',
                'Issue prioritization',
                'User journey analysis',
                'Assistive tech testing',
                'Actionable remediation plans'
              ]
            },
            {
              title: 'Inclusive Design',
              content: 'Design guidance that supports all users',
              items: [
                'Color contrast & typography',
                'Focus states & keyboard flows',
                'Semantic structure',
                'Error handling & messaging',
                'Accessible components'
              ]
            },
            {
              title: 'Team Enablement',
              content: 'Building accessibility into day-to-day work',
              items: [
                'Workshops & training',
                'Design-system support',
                'Definition of done',
                'Review processes',
                'Documentation & checklists'
              ]
            }
          ]
        },
        sv: {
          title: 'Tillgänglighetsspecialist',
          subtitle: 'Skapar inkluderande upplevelser som fungerar för alla',
          content: '<p>Som tillgänglighetsspecialist hjälper jag team att bygga digitala produkter som uppfyller WCAG och ger en inkluderande upplevelse för alla användare. Jag fokuserar på praktiska förbättringar som fungerar i verkliga projekt.</p><p>Mitt arbete omfattar granskningar, åtgärdsrekommendationer och nära samarbete med designers och utvecklare. Jag gör kraven tydliga och konkreta så att teamen snabbt kan implementera dem.</p><p>Jag stöttar också långsiktigt genom utbildning, dokumentation och arbete med designsystem så att tillgänglighet blir en naturlig del av leveransen.</p>',
          blocks: [
            {
              title: 'Tillgänglighetsgranskningar',
              content: 'Strukturerade granskningar och åtgärdsförslag',
              items: [
                'WCAG 2.1/2.2-bedömningar',
                'Prioritering av problem',
                'Analys av användarflöden',
                'Test med hjälpmedel',
                'Konkreta åtgärdsplaner'
              ]
            },
            {
              title: 'Inkluderande design',
              content: 'Designstöd som fungerar för alla',
              items: [
                'Färgkontrast & typografi',
                'Fokus & tangentbordsflöden',
                'Semantisk struktur',
                'Felhantering & texter',
                'Tillgängliga komponenter'
              ]
            },
            {
              title: 'Teamstöd',
              content: 'Gör tillgänglighet till en del av vardagen',
              items: [
                'Workshops & utbildning',
                'Stöd i designsystem',
                'Definition of done',
                'Granskningsrutiner',
                'Dokumentation & checklistor'
              ]
            }
          ]
        }
      }
    }
  },
  computed: {
    locale() {
      return this.$route.params.locale === 'sv' ? 'sv' : 'en'
    },
    page() {
      return this.contentByLocale[this.locale]
    }
  }
}
</script>
