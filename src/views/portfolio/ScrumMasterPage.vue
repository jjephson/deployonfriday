<template>
  <PortfolioPage
    :title="title"
    :subtitle="subtitle"
    :content="content"
    :blocks="blocks"
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
    }
  }
}
</script>
