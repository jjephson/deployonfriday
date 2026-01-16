<template>
  <main id="main" role="main" class="winamp-page">
    <div class="winamp-container">
      <!-- Main Player Window -->
      <div class="winamp-player">
        <div class="winamp-titlebar">
          <div class="winamp-title">WINAMP</div>
          <div class="winamp-controls">
            <button class="winamp-btn winamp-btn-minimize">_</button>
            <button class="winamp-btn winamp-btn-maximize">□</button>
            <button class="winamp-btn winamp-btn-close">×</button>
          </div>
        </div>
        
        <div class="winamp-display-area">
          <div class="winamp-time-display">01:08</div>
          <div class="winamp-visualizer-small">
            <div class="waveform-bar" v-for="n in 15" :key="n" :style="{ height: Math.random() * 8 + 4 + 'px' }"></div>
          </div>
        </div>
        
        <div class="winamp-track-info">
          <div class="winamp-track-name">1. SCRUM MASTER - Agile Excellence</div>
          <div class="winamp-track-details">128 kbps 44 kHz mono stereo</div>
        </div>
        
        <div class="winamp-progress-bar">
          <div class="winamp-progress-fill" style="width: 35%"></div>
        </div>
        
        <div class="winamp-controls-panel">
          <div class="winamp-buttons-row">
            <button class="winamp-btn-control">◄◄</button>
            <button class="winamp-btn-control">▶</button>
            <button class="winamp-btn-control">||</button>
            <button class="winamp-btn-control">■</button>
            <button class="winamp-btn-control">►►</button>
            <button class="winamp-btn-control">►►|</button>
            <button class="winamp-btn-control">|◄◄</button>
            <button class="winamp-btn-control">▲</button>
          </div>
          
          <div class="winamp-shuffle-repeat">
            <button class="winamp-btn-small">SHUFFLE</button>
            <button class="winamp-btn-small">◄</button>
          </div>
          
          <div class="winamp-volume-control">
            <label>VOL</label>
            <div class="winamp-slider-horizontal">
              <div class="winamp-slider-track-h">
                <div class="winamp-slider-fill-h" style="width: 75%"></div>
                <div class="winamp-slider-knob" style="left: 75%"></div>
              </div>
            </div>
          </div>
          
          <div class="winamp-indicators">
            <button class="winamp-indicator-btn">EQ</button>
            <button class="winamp-indicator-btn">PL</button>
          </div>
        </div>
      </div>
      
      <!-- Equalizer Panel -->
      <div class="winamp-equalizer">
        <div class="winamp-titlebar">
          <div class="winamp-title">WINAMP EQUALIZER</div>
          <div class="winamp-controls">
            <button class="winamp-btn winamp-btn-minimize">_</button>
            <button class="winamp-btn winamp-btn-maximize">□</button>
            <button class="winamp-btn winamp-btn-close">×</button>
          </div>
        </div>
        
        <div class="winamp-eq-controls">
          <div class="winamp-eq-toggles">
            <button class="winamp-btn-toggle">ON</button>
            <button class="winamp-btn-toggle">AUTO</button>
            <button class="winamp-btn-toggle">PRESETS</button>
          </div>
          
          <div class="winamp-eq-sliders">
            <div class="winamp-eq-slider-group">
              <label>PREAMP</label>
              <div class="winamp-eq-slider">
                <div class="winamp-eq-track">
                  <div class="winamp-eq-fill" style="height: 50%"></div>
                  <div class="winamp-eq-handle" style="bottom: 50%"></div>
                </div>
                <div class="winamp-eq-labels">
                  <span>+12</span>
                  <span>0</span>
                  <span>-12</span>
                </div>
              </div>
            </div>
            
            <div class="winamp-eq-slider-group" v-for="freq in frequencies" :key="freq">
              <label>{{ freq }}</label>
              <div class="winamp-eq-slider">
                <div class="winamp-eq-track">
                  <div class="winamp-eq-fill" :style="{ height: getRandomHeight() }"></div>
                  <div class="winamp-eq-handle" :style="{ bottom: getRandomHeight() }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Playlist Panel -->
      <div class="winamp-playlist">
        <div class="winamp-titlebar">
          <div class="winamp-title">WINAMP PLAYLIST</div>
          <div class="winamp-controls">
            <button class="winamp-btn winamp-btn-minimize">_</button>
            <button class="winamp-btn winamp-btn-maximize">□</button>
            <button class="winamp-btn winamp-btn-close">×</button>
          </div>
        </div>
        
        <div class="winamp-playlist-display">
          <div 
            v-for="(item, index) in playlistItems" 
            :key="index"
            class="winamp-playlist-item"
            :class="{ active: index === 0 }"
          >
            <span class="playlist-number">{{ index + 1 }}.</span>
            <span class="playlist-text">{{ item }}</span>
            <span class="playlist-duration">{{ item.duration || '4:47' }}</span>
          </div>
        </div>
        
        <div class="winamp-playlist-controls">
          <button class="winamp-btn-playlist">ADD</button>
          <button class="winamp-btn-playlist">REM</button>
          <button class="winamp-btn-playlist">SEL</button>
          <button class="winamp-btn-playlist">MISC</button>
        </div>
        
        <div class="winamp-playlist-footer">
          <div class="winamp-playlist-time">0:00/54:22+</div>
          <div class="winamp-mini-controls">
            <button class="winamp-mini-btn">◄◄</button>
            <button class="winamp-mini-btn">▶</button>
            <button class="winamp-mini-btn">||</button>
            <button class="winamp-mini-btn">►►</button>
            <button class="winamp-mini-btn">▲</button>
          </div>
          <button class="winamp-btn-playlist">LIST OPTS</button>
        </div>
      </div>
      
      <!-- Content Section -->
      <div class="winamp-content-section">
        <div class="winamp-content-panel">
          <div class="winamp-content-title">ABOUT SCRUM MASTER</div>
          <div class="winamp-content-body">
            <p>As a Scrum Master, I facilitate agile development processes and help teams deliver high-quality software efficiently. I believe in the power of collaboration, continuous improvement, and creating an environment where teams can thrive.</p>
            <p>My approach focuses on removing impediments, facilitating effective ceremonies, and ensuring that teams understand and follow agile principles. I work closely with product owners, developers, and stakeholders to ensure smooth project delivery.</p>
            <p>I have experience leading multiple teams across various projects, from small startups to large enterprise applications. My goal is always to help teams become more self-organizing, productive, and happy in their work.</p>
          </div>
        </div>
        
        <!-- Blocks as Playlist Items -->
        <div class="winamp-blocks-grid">
          <div 
            v-for="(block, index) in blocks" 
            :key="index"
            class="winamp-block-panel"
          >
            <div class="winamp-block-header">{{ block.title }}</div>
            <div class="winamp-block-subtitle">{{ block.content }}</div>
            <div class="winamp-block-list">
              <div 
                v-for="(item, itemIndex) in block.items" 
                :key="itemIndex"
                class="winamp-block-item"
              >
                <span class="block-number">{{ String(itemIndex + 1).padStart(2, '0') }}.</span>
                <span class="block-text">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ScrumMasterPage',
  data() {
    return {
      frequencies: ['60', '170', '310', '600', '1K', '3K', '6K', '12K', '14K', '16K'],
      playlistItems: [
        { text: 'Sprint Planning', duration: '4:47' },
        { text: 'Daily Standups', duration: '3:22' },
        { text: 'Sprint Reviews', duration: '5:15' },
        { text: 'Retrospectives', duration: '6:30' },
        { text: 'Backlog Refinement', duration: '4:10' }
      ],
      blocks: [
        {
          title: 'AGILE PRACTICES',
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
          title: 'TEAM FACILITATION',
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
          title: 'CERTIFICATIONS',
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
  },
  methods: {
    getRandomHeight() {
      return Math.random() * 60 + 20 + '%'
    }
  }
}
</script>

<style scoped>
.winamp-page {
  min-height: 100vh;
  background: #2a2a3a;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0.1) 2px);
  padding: 2rem 0;
  font-family: 'Arial', 'Helvetica', sans-serif;
}

.winamp-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 275px 275px 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2px;
  align-items: start;
}

/* Titlebar - Common Style */
.winamp-titlebar {
  background: linear-gradient(to bottom, #4a4a5a 0%, #2a2a3a 100%);
  color: #fff;
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  border-bottom: 1px solid #1a1a2a;
  cursor: move;
}

.winamp-title {
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-controls {
  display: flex;
  gap: 2px;
}

.winamp-btn {
  background: linear-gradient(to bottom, #6a6a7a 0%, #4a4a5a 100%);
  border: 1px outset #8a8a9a;
  color: #fff;
  width: 16px;
  height: 14px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  text-shadow: none;
}

.winamp-btn:hover {
  background: linear-gradient(to bottom, #7a7a8a 0%, #5a5a6a 100%);
}

.winamp-btn:active {
  border: 1px inset #6a6a7a;
}

/* Main Player */
.winamp-player {
  background: linear-gradient(to bottom, #3a3a4a 0%, #2a2a3a 100%);
  border: 2px outset #5a5a6a;
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.3),
    2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 275px;
}

.winamp-display-area {
  background: #000;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px inset #1a1a1a;
  margin: 4px;
}

.winamp-time-display {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 0 0 8px #00ff00;
  letter-spacing: 2px;
}

.winamp-visualizer-small {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 20px;
}

.waveform-bar {
  width: 2px;
  background: #00ff00;
  box-shadow: 0 0 4px #00ff00;
  animation: waveform 0.3s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * 0.02s);
}

@keyframes waveform {
  0%, 100% { transform: scaleY(0.5); opacity: 0.7; }
  50% { transform: scaleY(1); opacity: 1; }
}

.winamp-track-info {
  background: #000;
  padding: 6px 12px;
  border: 1px inset #1a1a1a;
  margin: 0 4px;
}

.winamp-track-name {
  color: #00ff00;
  font-size: 11px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 4px #00ff00;
  margin-bottom: 2px;
}

.winamp-track-details {
  color: #00ff00;
  font-size: 9px;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
}

.winamp-progress-bar {
  background: #000;
  height: 8px;
  border: 1px inset #1a1a1a;
  margin: 4px;
  position: relative;
  overflow: hidden;
}

.winamp-progress-fill {
  background: linear-gradient(to bottom, #ff8800 0%, #ff6600 100%);
  height: 100%;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.winamp-controls-panel {
  padding: 8px;
  background: linear-gradient(to bottom, #3a3a4a 0%, #2a2a3a 100%);
}

.winamp-buttons-row {
  display: flex;
  gap: 3px;
  margin-bottom: 6px;
  justify-content: center;
}

.winamp-btn-control {
  background: linear-gradient(to bottom, #6a6a7a 0%, #4a4a5a 100%);
  border: 2px outset #8a8a9a;
  color: #fff;
  width: 28px;
  height: 24px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-btn-control:hover {
  background: linear-gradient(to bottom, #7a7a8a 0%, #5a5a6a 100%);
}

.winamp-btn-control:active {
  border: 2px inset #6a6a7a;
}

.winamp-shuffle-repeat {
  display: flex;
  gap: 4px;
  justify-content: center;
  margin-bottom: 6px;
}

.winamp-btn-small {
  background: linear-gradient(to bottom, #6a6a7a 0%, #4a4a5a 100%);
  border: 2px outset #8a8a9a;
  color: #fff;
  padding: 2px 8px;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-btn-small:hover {
  background: linear-gradient(to bottom, #7a7a8a 0%, #5a5a6a 100%);
}

.winamp-btn-small:active {
  border: 2px inset #6a6a7a;
}

.winamp-volume-control {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  padding: 0 4px;
}

.winamp-volume-control label {
  font-size: 9px;
  font-weight: bold;
  color: #fff;
  width: 24px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-slider-horizontal {
  flex: 1;
  height: 12px;
}

.winamp-slider-track-h {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  border: 1px inset #333;
}

.winamp-slider-fill-h {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(to right, #ffaa00 0%, #ff8800 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.winamp-slider-knob {
  position: absolute;
  top: -2px;
  width: 8px;
  height: 16px;
  background: linear-gradient(to bottom, #ffcc00 0%, #cc9900 100%);
  border: 1px outset #ffdd00;
  cursor: pointer;
  transform: translateX(-50%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.winamp-indicators {
  display: flex;
  gap: 4px;
  justify-content: center;
}

.winamp-indicator-btn {
  background: linear-gradient(to bottom, #6a6a7a 0%, #4a4a5a 100%);
  border: 2px outset #8a8a9a;
  color: #fff;
  width: 24px;
  height: 20px;
  font-size: 8px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-indicator-btn:hover {
  background: linear-gradient(to bottom, #7a7a8a 0%, #5a5a6a 100%);
}

.winamp-indicator-btn:active {
  border: 2px inset #6a6a7a;
}

/* Equalizer */
.winamp-equalizer {
  background: linear-gradient(to bottom, #3a3a4a 0%, #2a2a3a 100%);
  border: 2px outset #5a5a6a;
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.3),
    2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 275px;
}

.winamp-eq-controls {
  padding: 8px;
}

.winamp-eq-toggles {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
  justify-content: center;
}

.winamp-btn-toggle {
  background: linear-gradient(to bottom, #6a6a7a 0%, #4a4a5a 100%);
  border: 2px outset #8a8a9a;
  color: #fff;
  padding: 4px 12px;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-btn-toggle:hover {
  background: linear-gradient(to bottom, #7a7a8a 0%, #5a5a6a 100%);
}

.winamp-btn-toggle:active {
  border: 2px inset #6a6a7a;
}

.winamp-eq-sliders {
  display: flex;
  gap: 6px;
  align-items: flex-end;
}

.winamp-eq-slider-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.winamp-eq-slider-group label {
  font-size: 8px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-eq-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.winamp-eq-track {
  position: relative;
  width: 18px;
  height: 80px;
  background: #000;
  border: 1px inset #333;
}

.winamp-eq-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, #ffcc00 0%, #ffaa00 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.winamp-eq-handle {
  position: absolute;
  left: -2px;
  width: 22px;
  height: 6px;
  background: linear-gradient(to bottom, #cccccc 0%, #999999 100%);
  border: 1px outset #ddd;
  cursor: pointer;
  transform: translateY(50%);
}

.winamp-eq-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  font-size: 7px;
  color: #aaa;
  margin-left: 4px;
}

/* Playlist */
.winamp-playlist {
  background: linear-gradient(to bottom, #3a3a4a 0%, #2a2a3a 100%);
  border: 2px outset #5a5a6a;
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.3),
    2px 2px 4px rgba(0, 0, 0, 0.5);
  grid-column: 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
}

.winamp-playlist-display {
  background: #000;
  flex: 1;
  padding: 4px;
  overflow-y: auto;
  border: 1px inset #1a1a1a;
  margin: 4px;
  font-family: 'Courier New', monospace;
}

.winamp-playlist-item {
  color: #00ff00;
  font-size: 10px;
  padding: 2px 4px;
  display: flex;
  gap: 4px;
  cursor: pointer;
  text-shadow: 0 0 4px #00ff00;
}

.winamp-playlist-item:hover {
  background: rgba(0, 255, 0, 0.1);
}

.winamp-playlist-item.active {
  background: rgba(0, 255, 0, 0.2);
}

.playlist-number {
  color: #00ff00;
  font-weight: bold;
  min-width: 20px;
}

.playlist-text {
  flex: 1;
  color: #00ff00;
}

.playlist-duration {
  color: #00ff00;
  opacity: 0.8;
}

.winamp-playlist-controls {
  display: flex;
  gap: 4px;
  padding: 6px;
  justify-content: center;
}

.winamp-btn-playlist {
  background: linear-gradient(to bottom, #6a6a7a 0%, #4a4a5a 100%);
  border: 2px outset #8a8a9a;
  color: #fff;
  padding: 4px 10px;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.winamp-btn-playlist:hover {
  background: linear-gradient(to bottom, #7a7a8a 0%, #5a5a6a 100%);
}

.winamp-btn-playlist:active {
  border: 2px inset #6a6a7a;
}

.winamp-playlist-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  background: linear-gradient(to bottom, #3a3a4a 0%, #2a2a3a 100%);
  border-top: 1px solid #1a1a2a;
}

.winamp-playlist-time {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 9px;
  text-shadow: 0 0 4px #00ff00;
}

.winamp-mini-controls {
  display: flex;
  gap: 2px;
}

.winamp-mini-btn {
  background: linear-gradient(to bottom, #6a6a7a 0%, #4a4a5a 100%);
  border: 1px outset #8a8a9a;
  color: #fff;
  width: 16px;
  height: 14px;
  font-size: 8px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: none;
}

.winamp-mini-btn:hover {
  background: linear-gradient(to bottom, #7a7a8a 0%, #5a5a6a 100%);
}

.winamp-mini-btn:active {
  border: 1px inset #6a6a7a;
}

/* Content Section */
.winamp-content-section {
  grid-column: 1 / -1;
  margin-top: 1rem;
}

.winamp-content-panel {
  background: linear-gradient(to bottom, #3a3a4a 0%, #2a2a3a 100%);
  border: 2px outset #5a5a6a;
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
}

.winamp-content-title {
  background: linear-gradient(to bottom, #4a4a5a 0%, #2a2a3a 100%);
  color: #fff;
  padding: 8px 12px;
  font-size: 11px;
  font-weight: bold;
  border-bottom: 1px solid #1a1a2a;
  letter-spacing: 1px;
}

.winamp-content-body {
  padding: 16px;
  color: #e0e0e0;
  font-size: 12px;
  line-height: 1.6;
}

.winamp-content-body p {
  margin-bottom: 12px;
}

.winamp-blocks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.winamp-block-panel {
  background: linear-gradient(to bottom, #3a3a4a 0%, #2a2a3a 100%);
  border: 2px outset #5a5a6a;
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.3);
}

.winamp-block-header {
  background: linear-gradient(to bottom, #4a4a5a 0%, #2a2a3a 100%);
  color: #fff;
  padding: 8px 12px;
  font-size: 11px;
  font-weight: bold;
  border-bottom: 1px solid #1a1a2a;
  letter-spacing: 1px;
}

.winamp-block-subtitle {
  padding: 8px 12px;
  color: #aaa;
  font-size: 10px;
  border-bottom: 1px solid #1a1a2a;
}

.winamp-block-list {
  padding: 8px;
}

.winamp-block-item {
  display: flex;
  gap: 8px;
  padding: 4px 0;
  color: #e0e0e0;
  font-size: 11px;
  border-bottom: 1px dotted #4a4a5a;
}

.winamp-block-item:last-child {
  border-bottom: none;
}

.block-number {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  min-width: 24px;
  text-shadow: 0 0 4px #00ff00;
}

.block-text {
  flex: 1;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .winamp-container {
    grid-template-columns: 275px 1fr;
  }
  
  .winamp-playlist {
    grid-column: 2;
    grid-row: 2;
  }
  
  .winamp-content-section {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .winamp-container {
    grid-template-columns: 1fr;
  }
  
  .winamp-player,
  .winamp-equalizer {
    width: 100%;
    max-width: 275px;
    margin: 0 auto;
  }
  
  .winamp-playlist {
    grid-column: 1;
    grid-row: auto;
  }
  
  .winamp-blocks-grid {
    grid-template-columns: 1fr;
  }
}
</style>
