<template>
  <div class="client-grid" role="list" :aria-label="ariaLabel">
    <div
      v-for="client in clients"
      :key="client.name"
      class="client-card"
      role="listitem"
    >
      <div class="client-card-inner">
        <div class="client-logo-surface">
          <img
            :src="client.image"
            :alt="`${client.name} logo`"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
      <span class="client-name">{{ client.name }}</span>
    </div>
  </div>
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
