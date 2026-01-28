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
  name: 'ScrumMasterPage',
  components: {
    PortfolioPage
  },
  data() {
    return {
      contentByLocale: {
        en: {
          title: 'Scrum Master',
          subtitle: 'Guiding agile teams with clarity, flow, and continuous improvement',
          content: '<p>As a Scrum Master, I facilitate agile development processes and help teams deliver high-quality software efficiently. I believe in the power of collaboration, continuous improvement, and creating an environment where teams can thrive.</p><p>My approach focuses on removing impediments, facilitating effective ceremonies, and ensuring that teams understand and follow agile principles. I work closely with product owners, developers, and stakeholders to ensure smooth project delivery.</p><p>I have experience leading multiple teams across various projects, from small startups to large enterprise applications. My goal is always to help teams become more self-organizing, productive, and happy in their work.</p>',
          blocks: [
            {
              title: 'Agile Practices',
              content: 'Core agile methodologies I facilitate',
              items: [
                'Sprint Planning',
                'Daily Standups',
                'Sprint Reviews',
                'Retrospectives',
                'Backlog Refinement'
              ]
            },
            {
              title: 'Team Facilitation',
              content: 'Skills in team leadership and coaching',
              items: [
                'Conflict Resolution',
                'Stakeholder Management',
                'Process Improvement',
                'Team Coaching',
                'Metrics & Reporting'
              ]
            },
            {
              title: 'Certifications',
              content: 'Professional certifications and training',
              items: [
                'Certified Scrum Master (CSM)',
                'Agile Leadership',
                'Kanban Practitioner',
                'SAFe Certified',
                'Continuous Learning'
              ]
            }
          ]
        },
        sv: {
          title: 'Scrum Master',
          subtitle: 'Skapar tydlighet, flow och ständig förbättring',
          content: '<p>Som Scrum Master faciliterar jag agila processer och hjälper team att leverera mjukvara effektivt. Jag tror på samarbete, ständig förbättring och en miljö där team kan blomstra.</p><p>Jag fokuserar på att ta bort hinder, leda effektiva ceremonier och säkerställa att teamet följer agila principer. Jag arbetar nära produktägare, utvecklare och intressenter för en smidig leverans.</p><p>Jag har lett flera team i olika projekt, från startups till större organisationer. Målet är att teamen blir mer självorganiserande, produktiva och trivs i sitt arbete.</p>',
          blocks: [
            {
              title: 'Agila arbetssätt',
              content: 'Metoder och ceremonier jag faciliterar',
              items: [
                'Sprintplanering',
                'Dagliga standups',
                'Sprintdemonstrationer',
                'Retrospektiv',
                'Backlog refinement'
              ]
            },
            {
              title: 'Teamfacilitering',
              content: 'Ledarskap och coachning i team',
              items: [
                'Konflikthantering',
                'Intressenthantering',
                'Processförbättring',
                'Teamcoaching',
                'Mätning & rapportering'
              ]
            },
            {
              title: 'Certifieringar',
              content: 'Certifieringar och vidareutbildning',
              items: [
                'Certified Scrum Master (CSM)',
                'Agile Leadership',
                'Kanban Practitioner',
                'SAFe Certified',
                'Kontinuerligt lärande'
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
