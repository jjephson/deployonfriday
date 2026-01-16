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
  name: 'ScrumMasterPage',
  components: {
    PortfolioPage
  },
  data() {
    return {
      title: 'Scrum Master',
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

<style scoped>
/* Winamp-inspired design theme */
:deep(.portfolio-page) {
  padding: 4rem 0;
  background: #1e293b !important;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0.1) 2px) !important;
  min-height: calc(100vh - 200px);
  font-family: 'Arial', 'Helvetica', sans-serif;
}

:deep(.portfolio-page::before) {
  display: none !important;
}

:deep(.portfolio-page .container) {
  background: transparent !important;
}

:deep(.portfolio-content) {
  background: transparent !important;
}

:deep(.portfolio-title) {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #4ade80;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
  letter-spacing: 2px;
  text-transform: uppercase;
}

:deep(.portfolio-content) {
  background: transparent;
}

:deep(.portfolio-text) {
  color: #f1f5f9 !important;
  background: transparent;
}

:deep(.portfolio-text p),
:deep(.portfolio-description),
:deep(.portfolio-description p) {
  color: #f1f5f9 !important;
  font-size: 1.1rem;
  line-height: 1.8;
}

:deep(.portfolio-description p) {
  margin-bottom: 1.5rem;
}

:deep(.portfolio-block) {
  background: linear-gradient(to bottom, #1e293b 0%, #0f172a 100%);
  padding: 2rem;
  border-radius: 0;
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.3),
    2px 2px 4px rgba(0, 0, 0, 0.5);
  border: 2px outset #475569;
  border-left: 4px solid #f59e0b;
}

:deep(.portfolio-block:hover) {
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.3),
    4px 4px 8px rgba(0, 0, 0, 0.6);
}

:deep(.block-title) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #4ade80;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 6px rgba(74, 222, 128, 0.4);
  letter-spacing: 1px;
  text-transform: uppercase;
}

:deep(.block-content) {
  color: #cbd5e1;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

:deep(.block-list) {
  list-style: none;
  padding: 0;
  margin: 0;
}

:deep(.block-list li) {
  padding: 0.75rem 0;
  color: #e5e7eb;
  border-bottom: 1px dotted #475569;
  padding-left: 2rem;
  position: relative;
  font-size: 1rem;
}

:deep(.block-list li:last-child) {
  border-bottom: none;
}

:deep(.block-list li::before) {
  content: '▶';
  position: absolute;
  left: 0;
  color: #fbbf24;
  font-weight: bold;
  text-shadow: 0 0 4px rgba(251, 191, 36, 0.4);
}

/* Block-specific styling */
:deep(.portfolio-block-1) {
  border-left-color: #4ade80;
}

:deep(.portfolio-block-1 .block-title) {
  color: #4ade80;
  text-shadow: 0 0 6px rgba(74, 222, 128, 0.4);
}

:deep(.portfolio-block-1 .block-list li::before) {
  color: #4ade80;
  text-shadow: 0 0 4px rgba(74, 222, 128, 0.4);
}

:deep(.portfolio-block-2) {
  border-left-color: #f59e0b;
}

:deep(.portfolio-block-2 .block-title) {
  color: #f59e0b;
  text-shadow: 0 0 6px rgba(245, 158, 11, 0.4);
}

:deep(.portfolio-block-2 .block-list li::before) {
  color: #f59e0b;
  text-shadow: 0 0 4px rgba(245, 158, 11, 0.4);
}

:deep(.portfolio-block-3) {
  border-left-color: #fbbf24;
}

:deep(.portfolio-block-3 .block-title) {
  color: #fbbf24;
  text-shadow: 0 0 6px rgba(251, 191, 36, 0.4);
}

:deep(.portfolio-block-3 .block-list li::before) {
  color: #fbbf24;
  text-shadow: 0 0 4px rgba(251, 191, 36, 0.4);
}

/* Responsive Design */
@media (max-width: 968px) {
  :deep(.portfolio-content) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  :deep(.portfolio-blocks) {
    order: -1;
  }
}

@media (max-width: 768px) {
  :deep(.portfolio-title) {
    font-size: 2rem;
  }
}
</style>
