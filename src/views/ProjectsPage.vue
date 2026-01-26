<template>
  <main id="main" role="main" class="projects-page">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container">
        <h1 class="page-title">Current Projects</h1>
        <p class="page-subtitle">Active initiatives focused on accessibility, performance, and design systems</p>
      </div>
    </div>
    <div class="page-content">
      <div class="container">
        <p class="projects-intro">Here are the projects and initiatives I'm currently working on. These represent ongoing work, active collaborations, and projects in various stages of development.</p>
        <div class="projects-list">
          <article 
            v-for="project in projects" 
            :key="project.id"
            class="project-item"
            :class="'project-item-' + project.status"
          >
            <div class="project-header">
              <h2 class="project-title">{{ project.title }}</h2>
              <span class="project-status" :class="'status-' + project.status">{{ project.status }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-details">
              <div class="project-meta">
                <span class="project-type">{{ project.type }}</span>
                <span class="project-date">Started: {{ project.startDate }}</span>
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
      projects: [
        {
          id: 1,
          title: 'Accessibility Audit Platform',
          description: 'Developing a comprehensive platform for conducting accessibility audits and generating WCAG compliance reports. This tool helps teams identify and fix accessibility issues early in the development process.',
          type: 'Web Application',
          status: 'active',
          startDate: 'January 2024',
          technologies: ['Vue.js', 'TypeScript', 'Node.js', 'WCAG']
        },
        {
          id: 2,
          title: 'Design System Documentation',
          description: 'Creating a living design system documentation site that serves as a single source of truth for design tokens, components, and usage guidelines across multiple projects.',
          type: 'Documentation',
          status: 'active',
          startDate: 'March 2024',
          technologies: ['React', 'Storybook', 'Design Tokens']
        },
        {
          id: 3,
          title: 'E-commerce Performance Optimization',
          description: 'Working on optimizing a large-scale e-commerce platform to improve Core Web Vitals and overall user experience. Focus on reducing load times and improving interactivity metrics.',
          type: 'Performance',
          status: 'active',
          startDate: 'February 2024',
          technologies: ['Performance', 'Optimization', 'Monitoring']
        },
        {
          id: 4,
          title: 'Mobile App Accessibility',
          description: 'Leading an initiative to improve accessibility in a mobile application, ensuring it meets WCAG guidelines and provides an excellent experience for users with disabilities.',
          type: 'Mobile',
          status: 'planning',
          startDate: 'April 2024',
          technologies: ['Mobile', 'Accessibility', 'iOS', 'Android']
        },
        {
          id: 5,
          title: 'Developer Training Program',
          description: 'Creating and delivering training programs on web accessibility and inclusive design practices for development teams. Includes workshops, documentation, and hands-on exercises.',
          type: 'Education',
          status: 'active',
          startDate: 'January 2024',
          technologies: ['Training', 'Documentation', 'Workshops']
        }
      ]
    }
  }
}
</script>
