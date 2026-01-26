<template>
  <div>
    <a href="#main" class="skip-link">Skip to main content</a>
    <main id="main" role="main">
      <section id="about" class="about" aria-labelledby="about-heading">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2 id="about-heading" class="section-title">About Me</h2>
              <p>I’m Jimmie Jephson, an Accessibility Specialist and Senior Frontend Developer focused on inclusive, user-centered digital experiences.</p>
              <p>I partner with teams to build accessible interfaces, improve usability, and ship reliable products for real-world users.</p>
            </div>
            <div class="about-image">
              <img src="/images/assets/jimmie.png" 
                   alt="Jimmie Jephson - Professional headshot" 
                   loading="lazy">
            </div>
          </div>
        </div>
      </section>
      <section id="clients" class="clients" aria-labelledby="clients-heading">
        <div class="container">
          <h2 id="clients-heading" class="section-title visually-hidden">Client Portfolio</h2>
          <div class="clients-grid" role="list" aria-label="Client company logos">
            <div class="client-logo" role="listitem" v-for="client in clients" :key="client.name">
              <img :src="client.image" :alt="client.name + ' logo'" loading="lazy">
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact" aria-labelledby="contact-heading">
        <div class="container">
          <h2 id="contact-heading" class="section-title">Get In Touch</h2>
          <p class="contact-text">Looking for an accessibility specialist and senior frontend developer for your next project? I'm available for consulting, full-time positions, and accessibility-focused development roles. Let's discuss how I can help create inclusive, user-centered digital experiences.</p>
          <div class="contact-info" role="list" aria-label="Contact information">
            <div class="contact-item" role="listitem">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/jimmiejephson" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile (opens in new tab)">linkedin.com/in/jimmiejephson</a>
            </div>
            <div class="contact-item" role="listitem">
              <h3>GitHub</h3>
              <a href="https://github.com/jimmiejephson" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile (opens in new tab)">github.com/jimmiejephson</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      clients: [
        { name: 'Specsavers', image: '/images/specsavers.png' },
        { name: 'Polestar', image: '/images/polestar.png' },
        { name: 'Ving', image: '/images/ving.png' },
        { name: 'Volvo', image: '/images/volvo.png' },
        { name: 'Zalando', image: '/images/zalando.png' },
        { name: 'SR', image: '/images/sr.png' },
        { name: 'NK', image: '/images/nk.png' },
        { name: 'Kicks', image: '/images/kicks.png' },
        { name: 'Apoteket', image: '/images/apoteket.png' },
        { name: 'SVFF', image: '/images/svff.png' },
        { name: 'Sandvik', image: '/images/sandvik.png' },
        { name: 'Swedol', image: '/images/swedol.png' },
        { name: 'Kustom', image: '/images/kustom.svg' },
        { name: 'Svea', image: '/images/svea.png' },
        { name: 'Keystone', image: '/images/keystone.png' },
        { name: 'Telia', image: '/images/telia.png' },
        { name: 'ICA', image: '/images/ica.png' },
        { name: 'Verisure', image: '/images/verisure.png' },
        { name: 'Skanska', image: '/images/skanska.png' },
        { name: 'Nextory', image: '/images/nextory.png' },
        { name: 'Ahlsell', image: '/images/ahlsell.png' },
        { name: 'Coop', image: '/images/coop.png' },
        { name: 'NCS', image: '/images/ncs.png' },
        { name: 'Nobia', image: '/images/nobia.png' }
      ]
    }
  }
}
</script>
