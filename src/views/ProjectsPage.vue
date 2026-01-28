<template>
  <main id="main" role="main" class="projects-page">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container">
        <h1 class="page-title">{{ copy.title }}</h1>
        <p class="page-subtitle">{{ copy.subtitle }}</p>
      </div>
    </div>
    <div class="page-content">
      <div class="container">
        <p class="projects-intro">{{ copy.intro }}</p>
        <div class="projects-list">
          <article 
            v-for="project in copy.projects" 
            :key="project.id"
            class="project-item"
            :class="'project-item-' + project.status"
          >
            <div class="project-header">
              <h2 class="project-title">{{ project.title }}</h2>
              <span class="project-status" :class="'status-' + project.status">{{ project.statusLabel }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-details">
              <div class="project-meta">
                <span class="project-type">{{ project.type }}</span>
                <span class="project-date">{{ copy.startedLabel }} {{ project.startDate }}</span>
              </div>
              <div v-if="project.technologies" class="project-technologies">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-tag"
                >{{ tech }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      contentByLocale: {
        en: {
          title: 'Current Projects',
          subtitle: 'Active initiatives focused on accessibility, performance, and design systems',
          intro: 'Here are the projects and initiatives I\'m currently working on. These represent ongoing work, active collaborations, and projects in various stages of development.',
          startedLabel: 'Started:',
          projects: [
            {
              id: 1,
              title: 'Accessibility Audit Platform',
              description: 'Developing a comprehensive platform for conducting accessibility audits and generating WCAG compliance reports. This tool helps teams identify and fix accessibility issues early in the development process.',
              type: 'Web Application',
              status: 'active',
              statusLabel: 'Active',
              startDate: 'January 2024',
              technologies: ['Vue.js', 'TypeScript', 'Node.js', 'WCAG']
            },
            {
              id: 2,
              title: 'Design System Documentation',
              description: 'Creating a living design system documentation site that serves as a single source of truth for design tokens, components, and usage guidelines across multiple projects.',
              type: 'Documentation',
              status: 'active',
              statusLabel: 'Active',
              startDate: 'March 2024',
              technologies: ['React', 'Storybook', 'Design Tokens']
            },
            {
              id: 3,
              title: 'E-commerce Performance Optimization',
              description: 'Working on optimizing a large-scale e-commerce platform to improve Core Web Vitals and overall user experience. Focus on reducing load times and improving interactivity metrics.',
              type: 'Performance',
              status: 'active',
              statusLabel: 'Active',
              startDate: 'February 2024',
              technologies: ['Performance', 'Optimization', 'Monitoring']
            },
            {
              id: 4,
              title: 'Mobile App Accessibility',
              description: 'Leading an initiative to improve accessibility in a mobile application, ensuring it meets WCAG guidelines and provides an excellent experience for users with disabilities.',
              type: 'Mobile',
              status: 'planning',
              statusLabel: 'Planning',
              startDate: 'April 2024',
              technologies: ['Mobile', 'Accessibility', 'iOS', 'Android']
            },
            {
              id: 5,
              title: 'Developer Training Program',
              description: 'Creating and delivering training programs on web accessibility and inclusive design practices for development teams. Includes workshops, documentation, and hands-on exercises.',
              type: 'Education',
              status: 'active',
              statusLabel: 'Active',
              startDate: 'January 2024',
              technologies: ['Training', 'Documentation', 'Workshops']
            }
          ]
        },
        sv: {
          title: 'Pågående projekt',
          subtitle: 'Aktiva initiativ inom tillgänglighet, prestanda och designsystem',
          intro: 'Här är de projekt och initiativ jag arbetar med just nu. De representerar pågående arbete, samarbeten och projekt i olika faser.',
          startedLabel: 'Start:',
          projects: [
            {
              id: 1,
              title: 'Plattform för tillgänglighetsgranskning',
              description: 'Utvecklar en plattform för att genomföra tillgänglighetsgranskningar och generera WCAG-rapporter. Verktyget hjälper team att upptäcka och åtgärda problem tidigt.',
              type: 'Webbapplikation',
              status: 'active',
              statusLabel: 'Aktiv',
              startDate: 'Januari 2024',
              technologies: ['Vue.js', 'TypeScript', 'Node.js', 'WCAG']
            },
            {
              id: 2,
              title: 'Designsystem-dokumentation',
              description: 'Skapar en levande dokumentationssajt för designsystem som samlar tokens, komponenter och riktlinjer för flera projekt.',
              type: 'Dokumentation',
              status: 'active',
              statusLabel: 'Aktiv',
              startDate: 'Mars 2024',
              technologies: ['React', 'Storybook', 'Design Tokens']
            },
            {
              id: 3,
              title: 'Prestandaoptimering för e-handel',
              description: 'Optimerar en storskalig e-handelsplattform för bättre Core Web Vitals och användarupplevelse. Fokus på laddtider och interaktivitet.',
              type: 'Prestanda',
              status: 'active',
              statusLabel: 'Aktiv',
              startDate: 'Februari 2024',
              technologies: ['Prestanda', 'Optimering', 'Övervakning']
            },
            {
              id: 4,
              title: 'Tillgänglighet i mobilapp',
              description: 'Leder ett initiativ för att förbättra tillgängligheten i en mobilapp så att den möter WCAG-krav och fungerar bättre för alla.',
              type: 'Mobil',
              status: 'planning',
              statusLabel: 'Planering',
              startDate: 'April 2024',
              technologies: ['Mobil', 'Tillgänglighet', 'iOS', 'Android']
            },
            {
              id: 5,
              title: 'Utbildningsprogram för utvecklare',
              description: 'Skapar och genomför utbildningar inom webbtillgänglighet och inkluderande design för utvecklingsteam.',
              type: 'Utbildning',
              status: 'active',
              statusLabel: 'Aktiv',
              startDate: 'Januari 2024',
              technologies: ['Utbildning', 'Dokumentation', 'Workshops']
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
    copy() {
      return this.contentByLocale[this.locale]
    }
  }
}
</script>
