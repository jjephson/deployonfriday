<template>
  <main id="main" role="main" class="game-industry-page">
    <div class="game-hero">
      <div class="game-hero-overlay"></div>
      <div class="container">
        <h1 class="game-title">Game Industry</h1>
        <p class="game-subtitle">Crafting immersive digital worlds through code and creativity</p>
      </div>
    </div>
    
    <div class="game-content">
      <div class="container">
        <div class="game-layout">
          <div class="game-text">
            <div class="game-description">
              <p>My passion for game development combines technical expertise with creative problem-solving. I've worked on various game projects, from indie titles to larger productions, focusing on creating engaging user experiences.</p>
              <p>In the game industry, I've contributed to both web-based games and game-related web platforms. My experience includes working with game engines, implementing game mechanics, and creating tools that support game development workflows.</p>
              <p>I'm particularly interested in how web technologies can enhance gaming experiences, whether through browser-based games, game launchers, or community platforms that connect players.</p>
            </div>
          </div>
          
          <div class="game-blocks">
            <div 
              v-for="(block, index) in blocks" 
              :key="index"
              class="game-block"
              :class="'game-block-' + (index + 1)"
            >
              <div class="game-block-icon">
                <span class="icon-symbol">{{ getIcon(index) }}</span>
              </div>
              <h3 class="game-block-title">{{ block.title }}</h3>
              <p class="game-block-content">{{ block.content }}</p>
              <ul v-if="block.items" class="game-block-list">
                <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                  <span class="list-marker"></span>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'GameIndustryPage',
  data() {
    return {
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
  },
  methods: {
    getIcon(index) {
      const icons = ['⚔️', '🎮', '🌟']
      return icons[index] || '✨'
    }
  }
}
</script>

<style scoped>
.game-industry-page {
  min-height: 100vh;
  background: #0a0e1a;
  color: #e8e8e8;
}

/* Hero Section */
.game-hero {
  position: relative;
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #1a2332 0%, #0f1620 50%, #0a0e1a 100%);
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  overflow: hidden;
}

.game-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(59, 130, 246, 0.03) 2px,
      rgba(59, 130, 246, 0.03) 4px
    );
  pointer-events: none;
}

.game-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.game-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(96, 165, 250, 0.3);
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.game-subtitle {
  font-size: 1.5rem;
  color: #cbd5e1;
  font-weight: 300;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
}

/* Content Section */
.game-content {
  padding: 4rem 0;
  background: #0a0e1a;
  position: relative;
}

.game-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent);
}

.game-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.game-text {
  position: relative;
}

.game-description {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #cbd5e1;
}

.game-description p {
  margin-bottom: 1.5rem;
}

.game-description p:first-child {
  font-size: 1.25rem;
  color: #e8e8e8;
  font-weight: 400;
}

/* Game Blocks */
.game-blocks {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.game-block {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.game-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #60a5fa, #34d399, #a78bfa);
  opacity: 0;
}

.game-block:hover {
  border-color: rgba(96, 165, 250, 0.4);
  box-shadow: 
    0 10px 40px rgba(59, 130, 246, 0.2),
    0 0 20px rgba(96, 165, 250, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.game-block:hover::before {
  opacity: 1;
}

.game-block-icon {
  margin-bottom: 1.5rem;
}

.icon-symbol {
  font-size: 2.5rem;
  display: inline-block;
  filter: drop-shadow(0 0 10px rgba(96, 165, 250, 0.5));
}

.game-block-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.01em;
}

.game-block-content {
  color: #94a3b8;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.game-block-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.game-block-list li {
  padding: 0.75rem 0;
  color: #cbd5e1;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  border-bottom: 1px solid rgba(96, 165, 250, 0.1);
}

.game-block-list li:last-child {
  border-bottom: none;
}

.game-block-list li:hover {
  color: #60a5fa;
}

.list-marker {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa, #34d399);
  margin-top: 0.5rem;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
}

/* Block-specific styling */
.game-block-1 {
  border-color: rgba(96, 165, 250, 0.2);
}

.game-block-1:hover {
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 
    0 10px 40px rgba(59, 130, 246, 0.25),
    0 0 20px rgba(96, 165, 250, 0.15);
}

.game-block-2 {
  border-color: rgba(52, 211, 153, 0.2);
}

.game-block-2:hover {
  border-color: rgba(52, 211, 153, 0.5);
  box-shadow: 
    0 10px 40px rgba(16, 185, 129, 0.25),
    0 0 20px rgba(52, 211, 153, 0.15);
}

.game-block-3 {
  border-color: rgba(167, 139, 246, 0.2);
}

.game-block-3:hover {
  border-color: rgba(167, 139, 246, 0.5);
  box-shadow: 
    0 10px 40px rgba(139, 92, 246, 0.25),
    0 0 20px rgba(167, 139, 246, 0.15);
}

/* Responsive Design */
@media (max-width: 968px) {
  .game-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .game-blocks {
    order: -1;
  }
  
  .game-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .game-hero {
    padding: 6rem 0 4rem;
  }
  
  .game-title {
    font-size: 2.5rem;
  }
  
  .game-subtitle {
    font-size: 1.25rem;
  }
  
  .game-block {
    padding: 2rem;
  }
  
  .game-content {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .game-title {
    font-size: 2rem;
  }
  
  .game-subtitle {
    font-size: 1.1rem;
  }
  
  .game-block {
    padding: 1.5rem;
  }
  
  .game-block-title {
    font-size: 1.5rem;
  }
}
</style>
