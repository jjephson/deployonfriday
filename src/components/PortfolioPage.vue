<template>
  <main id="main" role="main" class="portfolio-page">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container">
        <h1 class="page-title">{{ title }}</h1>
        <p class="page-subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="page-content">
      <div class="container">
        <div class="portfolio-content">
          <div class="portfolio-text">
            <div class="portfolio-description" v-html="content"></div>
          </div>
          <div class="portfolio-blocks">
            <div 
              v-for="(block, index) in blocks" 
              :key="index"
              class="portfolio-block"
              :class="'portfolio-block-' + (index + 1)"
            >
            <h2 class="block-title">{{ block.title }}</h2>
              <p class="block-content">{{ block.content }}</p>
              <ul v-if="block.items" class="block-list">
                <li v-for="(item, itemIndex) in block.items" :key="itemIndex">{{ item }}</li>
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
  name: 'PortfolioPage',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    blocks: {
      type: Array,
      required: true
    }
  }
}
</script>
