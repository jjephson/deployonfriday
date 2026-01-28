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
          title: 'Manager',
          subtitle: 'Leading teams to deliver reliable, user-focused products',
          content: '<p>As a Manager, I lead development teams and drive technical strategy while ensuring projects are delivered on time and to the highest quality standards. My leadership style emphasizes empowerment, clear communication, and continuous improvement.</p><p>I\'ve managed teams ranging from small groups of 3-5 developers to larger cross-functional teams of 15+ members. My focus is on creating an environment where team members can grow, learn, and contribute their best work.</p><p>Beyond people management, I\'m involved in technical decision-making, architecture planning, and ensuring that our development practices align with business goals while maintaining high technical standards.</p>',
          blocks: [
            {
              title: 'Leadership',
              content: 'Core leadership competencies',
              items: [
                'Team Building',
                'Performance Management',
                'Career Development',
                'Strategic Planning',
                'Change Management'
              ]
            },
            {
              title: 'Project Management',
              content: 'Project delivery and coordination',
              items: [
                'Agile & Scrum',
                'Resource Planning',
                'Risk Management',
                'Stakeholder Communication',
                'Quality Assurance'
              ]
            },
            {
              title: 'Technical Management',
              content: 'Technical leadership and strategy',
              items: [
                'Architecture Decisions',
                'Code Reviews',
                'Technical Standards',
                'Tool Selection',
                'Best Practices'
              ]
            }
          ]
        },
        sv: {
          title: 'Chef',
          subtitle: 'Leder team som levererar stabila, användarfokuserade produkter',
          content: '<p>Som chef leder jag utvecklingsteam och driver teknisk strategi samtidigt som jag säkerställer att projekt levereras i tid och med hög kvalitet. Mitt ledarskap bygger på tydlighet, ansvar och ständig förbättring.</p><p>Jag har lett allt från mindre team på 3–5 personer till större tvärfunktionella team med 15+ medarbetare. Mitt fokus är att skapa en miljö där människor kan växa och leverera sitt bästa.</p><p>Utöver personalledning arbetar jag med tekniska beslut, arkitekturplanering och att utvecklingsarbetet ligger i linje med affärsmål.</p>',
          blocks: [
            {
              title: 'Ledarskap',
              content: 'Kärnkompetenser inom ledarskap',
              items: [
                'Teambyggande',
                'Prestationsledning',
                'Kompetensutveckling',
                'Strategisk planering',
                'Förändringsledning'
              ]
            },
            {
              title: 'Projektledning',
              content: 'Leverans och koordinering',
              items: [
                'Agilt & Scrum',
                'Resursplanering',
                'Riskhantering',
                'Intressentkommunikation',
                'Kvalitetssäkring'
              ]
            },
            {
              title: 'Tekniskt ledarskap',
              content: 'Teknisk strategi och riktning',
              items: [
                'Arkitekturbeslut',
                'Kodgranskningar',
                'Tekniska standarder',
                'Verktygsval',
                'Best practices'
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
