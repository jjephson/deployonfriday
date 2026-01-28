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
  name: 'FrontEndDevPage',
  components: {
    PortfolioPage
  },
  data() {
    return {
      contentByLocale: {
        en: {
          title: 'Front End Developer',
          subtitle: 'Building accessible, high-performance interfaces for modern users',
          content: '<p>As a Front End Developer, I specialize in creating beautiful, accessible, and performant web experiences. My work focuses on building user interfaces that are not only visually appealing but also inclusive and optimized for all users.</p><p>I have extensive experience working with modern JavaScript frameworks and libraries, including React, Vue.js, and TypeScript. My approach combines technical excellence with a deep understanding of user needs, ensuring that every interface I build is both functional and delightful.</p><p>Throughout my career, I\'ve worked on a wide range of projects, from e-commerce platforms to complex web applications. I\'m passionate about web standards, accessibility, and creating experiences that work seamlessly across all devices and browsers.</p>',
          blocks: [
            {
              title: 'Technologies',
              content: 'Modern frontend technologies I work with',
              items: [
                'React & Vue.js',
                'TypeScript & JavaScript',
                'HTML5 & CSS3',
                'Web Components',
                'Progressive Web Apps'
              ]
            },
            {
              title: 'Key Skills',
              content: 'Core competencies in frontend development',
              items: [
                'Responsive Design',
                'Performance Optimization',
                'Accessibility (WCAG)',
                'Component Architecture',
                'State Management'
              ]
            },
            {
              title: 'Experience',
              content: 'Years of hands-on development experience',
              items: [
                '10+ years in frontend development',
                'E-commerce platforms',
                'Design systems',
                'Cross-browser compatibility',
                'Mobile-first approach'
              ]
            }
          ]
        },
        sv: {
          title: 'Front End-utvecklare',
          subtitle: 'Bygger tillgängliga gränssnitt med hög prestanda',
          content: '<p>Som front end-utvecklare skapar jag tillgängliga och snabba webbupplevelser. Jag bygger gränssnitt som är visuellt tydliga, inkluderande och optimerade för användare.</p><p>Jag har lång erfarenhet av moderna ramverk och bibliotek som React, Vue.js och TypeScript. Mitt arbetssätt kombinerar teknisk kvalitet med förståelse för användarbehov.</p><p>Jag har arbetat med allt från e-handel till komplexa webbapplikationer och brinner för webbstandarder, tillgänglighet och upplevelser som fungerar på alla enheter.</p>',
          blocks: [
            {
              title: 'Tekniker',
              content: 'Moderna frontendtekniker jag arbetar med',
              items: [
                'React & Vue.js',
                'TypeScript & JavaScript',
                'HTML5 & CSS3',
                'Web Components',
                'Progressive Web Apps'
              ]
            },
            {
              title: 'Nyckelkompetenser',
              content: 'Kärnkompetenser inom frontendutveckling',
              items: [
                'Responsiv design',
                'Prestandaoptimering',
                'Tillgänglighet (WCAG)',
                'Komponentarkitektur',
                'State management'
              ]
            },
            {
              title: 'Erfarenhet',
              content: 'Erfarenhet från praktisk utveckling',
              items: [
                '10+ år inom frontendutveckling',
                'E-handelsplattformar',
                'Designsystem',
                'Webbläsarkompatibilitet',
                'Mobile-first'
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
