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
  name: 'FrontEndDevPage',
  components: {
    PortfolioPage
  },
  data() {
    return {
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
    }
  }
}
</script>
