<template>
  <PortfolioPage
    :title="title"
    :content="content"
    :blocks="blocks"
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
      title: 'Manager',
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
    }
  }
}
</script>
