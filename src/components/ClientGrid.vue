<template>
  <ul class="client-grid" :aria-label="ariaLabel">
    <li v-for="client in clients" :key="client.name" class="client-card">
      <div class="client-card-inner">
        <div class="client-logo-surface">
          <img
            :src="client.image"
            alt=""
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
      <span class="client-name">{{ client.name }}</span>
    </li>
  </ul>
</template>

<script>
import { clients } from '../data/clients.js'

export default {
  name: 'ClientGrid',
  props: {
    ariaLabel: {
      type: String,
      required: true
    }
  },
  data() {
    return { clients }
  }
}
</script>

<style scoped>
.client-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  list-style: none;
}

.client-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
}

.client-card-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 3 / 2;
  padding: 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.15s ease;
}

.client-card:hover .client-card-inner {
  border-color: hsl(30 4% 20%);
}

.client-logo-surface {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  background: hsl(30 10% 94%);
  border-radius: calc(var(--radius-lg) - 4px);
}

.client-logo-surface img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.client-name {
  font-size: 0.6875rem;
  color: var(--ink-dull);
  text-align: center;
  line-height: 1.3;
}
</style>
