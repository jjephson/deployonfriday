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
  name: 'GameIndustryPage',
  components: {
    PortfolioPage
  },
  data() {
    return {
      title: 'Game Industry',
      subtitle: 'Crafting immersive digital worlds through code and creativity',
      content: '<p>My passion for game development combines technical expertise with creative problem-solving. I\'ve worked on various game projects, from indie titles to larger productions, focusing on creating engaging user experiences.</p><p>In the game industry, I\'ve contributed to both web-based games and game-related web platforms. My experience includes working with game engines, implementing game mechanics, and creating tools that support game development workflows.</p><p>I\'m particularly interested in how web technologies can enhance gaming experiences, whether through browser-based games, game launchers, or community platforms that connect players.</p>',
      blocks: [
        {
          title: 'Game Development',
          content: 'Areas of expertise in game development',
          items: [
            'Web-based Games',
            'Game UI/UX Design',
            'Game Mechanics',
            'Player Engagement',
            'Performance Optimization'
          ]
        },
        {
          title: 'Technologies',
          content: 'Technologies used in game projects',
          items: [
            'HTML5 Canvas',
            'WebGL',
            'Game Engines',
            'Real-time Systems',
            'Multiplayer Integration'
          ]
        },
        {
          title: 'Projects',
          content: 'Types of game projects I\'ve worked on',
          items: [
            'Indie Game Development',
            'Game Platforms',
            'Community Tools',
            'Game Analytics',
            'Player Portals'
          ]
        }
      ]
    }
  }
}
</script>
